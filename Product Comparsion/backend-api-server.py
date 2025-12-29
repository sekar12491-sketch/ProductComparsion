"""
Backend API Server for Product Comparison Tool
Handles CORS, web scraping, and data aggregation from manufacturer websites
"""

from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
import json
import time
from datetime import datetime, timedelta
import re

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Cache configuration
CACHE = {}
CACHE_DURATION = 3600  # 1 hour in seconds

# Manufacturer URLs and selectors
MANUFACTURERS = {
    'danfoss': {
        'base_url': 'https://www.danfoss.com',
        'product_urls': {
            'FC301': '/en/products/dcs/drives/vlt-aqua-drive-fc-301/',
            'FC302': '/en/products/dcs/drives/vlt-hvac-drive-fc-302/'
        },
        'selectors': {
            'title': 'h1.product-title, h1',
            'specs_table': 'table.specifications, .technical-data table',
            'spec_row': 'tr',
            'spec_label': 'td:first-child, th',
            'spec_value': 'td:last-child'
        }
    },
    'abb': {
        'base_url': 'https://new.abb.com',
        'product_urls': {
            'ACS880': '/drives/low-voltage-ac-drives/industrial-drives/acs880-single-drives'
        },
        'selectors': {
            'title': 'h1.product-name',
            'specs_table': '.technical-specifications table',
            'spec_row': 'tr',
            'spec_label': 'td.label',
            'spec_value': 'td.value'
        }
    },
    'siemens': {
        'base_url': 'https://mall.industry.siemens.com',
        'product_urls': {
            'SINAMICS_G120': '/en/us/c/drives/low-voltage-drives/sinamics-g120'
        },
        'selectors': {
            'title': 'h1.product-title',
            'specs_table': 'table.product-details',
            'spec_row': 'tr',
            'spec_label': 'td:first-child',
            'spec_value': 'td:nth-child(2)'
        }
    },
    'yaskawa': {
        'base_url': 'https://www.yaskawa.com',
        'product_urls': {
            'GA700': '/products/drives/ac-drives/ga700'
        },
        'selectors': {
            'title': 'h1',
            'specs_table': 'table.specifications',
            'spec_row': 'tr',
            'spec_label': 'td:first-child',
            'spec_value': 'td:last-child'
        }
    }
}

def get_cache_key(manufacturer, product_id):
    """Generate cache key"""
    return f"{manufacturer}_{product_id}"

def is_cache_valid(cache_key):
    """Check if cached data is still valid"""
    if cache_key not in CACHE:
        return False
    
    cached_data = CACHE[cache_key]
    age = time.time() - cached_data['timestamp']
    return age < CACHE_DURATION

def fetch_with_retry(url, max_retries=3, timeout=10):
    """Fetch URL with retry logic"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
    }
    
    for attempt in range(max_retries):
        try:
            response = requests.get(url, headers=headers, timeout=timeout)
            response.raise_for_status()
            return response
        except requests.exceptions.RequestException as e:
            if attempt == max_retries - 1:
                raise e
            time.sleep(1 * (attempt + 1))  # Exponential backoff
    
    return None

def extract_specifications(soup, selectors):
    """Extract product specifications from HTML"""
    specifications = {}
    
    # Find specification tables
    tables = soup.select(selectors['specs_table'])
    
    for table in tables:
        current_category = "Technical Specifications"
        rows = table.select(selectors['spec_row'])
        
        for row in rows:
            label_elem = row.select_one(selectors['spec_label'])
            value_elem = row.select_one(selectors['spec_value'])
            
            if label_elem and value_elem:
                label = label_elem.get_text(strip=True)
                value = value_elem.get_text(strip=True)
                
                # Check if this is a category header
                if 'category' in label_elem.get('class', []) or row.get('class', [''])[0] == 'category':
                    current_category = label
                    specifications[current_category] = {}
                elif label and value:
                    if current_category not in specifications:
                        specifications[current_category] = {}
                    specifications[current_category][label] = value
    
    # Alternative extraction if no tables found
    if not specifications:
        specifications = extract_specifications_alternative(soup)
    
    return specifications

def extract_specifications_alternative(soup):
    """Alternative method to extract specifications"""
    specifications = {"Technical Data": {}}
    
    # Look for dl/dt/dd lists
    desc_lists = soup.find_all('dl')
    for dl in desc_lists:
        terms = dl.find_all('dt')
        descs = dl.find_all('dd')
        
        for term, desc in zip(terms, descs):
            specifications["Technical Data"][term.get_text(strip=True)] = desc.get_text(strip=True)
    
    # Look for divs with data attributes
    data_elements = soup.find_all(attrs={'data-spec-name': True})
    for elem in data_elements:
        name = elem.get('data-spec-name')
        value = elem.get('data-spec-value') or elem.get_text(strip=True)
        specifications["Technical Data"][name] = value
    
    return specifications

@app.route('/api/product/<manufacturer>/<product_id>', methods=['GET'])
def get_product(manufacturer, product_id):
    """Fetch product data for a specific manufacturer and product"""
    
    manufacturer = manufacturer.lower()
    cache_key = get_cache_key(manufacturer, product_id)
    
    # Check cache first
    if is_cache_valid(cache_key):
        print(f"Returning cached data for {cache_key}")
        return jsonify(CACHE[cache_key]['data'])
    
    # Check if manufacturer is supported
    if manufacturer not in MANUFACTURERS:
        return jsonify({'error': f'Manufacturer {manufacturer} not supported'}), 404
    
    config = MANUFACTURERS[manufacturer]
    
    # Build product URL
    if product_id in config['product_urls']:
        product_url = config['base_url'] + config['product_urls'][product_id]
    else:
        return jsonify({'error': f'Product {product_id} not found for {manufacturer}'}), 404
    
    try:
        # Fetch the page
        print(f"Fetching {product_url}")
        response = fetch_with_retry(product_url)
        
        if not response:
            return jsonify({'error': 'Failed to fetch product page'}), 500
        
        # Parse HTML
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract product name
        title_elem = soup.select_one(config['selectors']['title'])
        product_name = title_elem.get_text(strip=True) if title_elem else f"{manufacturer} {product_id}"
        
        # Extract specifications
        specifications = extract_specifications(soup, config['selectors'])
        
        # Build response
        product_data = {
            'name': product_name,
            'manufacturer': manufacturer.upper(),
            'productId': product_id,
            'specifications': specifications,
            'dataSource': 'live',
            'fetchedAt': datetime.now().isoformat(),
            'url': product_url
        }
        
        # Cache the result
        CACHE[cache_key] = {
            'data': product_data,
            'timestamp': time.time()
        }
        
        return jsonify(product_data)
    
    except Exception as e:
        print(f"Error fetching product: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/search', methods=['GET'])
def search_products():
    """Search for products across manufacturers"""
    query = request.args.get('q', '')
    manufacturer = request.args.get('manufacturer', '').lower()
    
    if not query:
        return jsonify({'error': 'Query parameter required'}), 400
    
    results = []
    
    # Define which manufacturers to search
    manufacturers_to_search = [manufacturer] if manufacturer else MANUFACTURERS.keys()
    
    for mfr in manufacturers_to_search:
        if mfr not in MANUFACTURERS:
            continue
        
        config = MANUFACTURERS[mfr]
        
        # Search through known products
        for product_id in config['product_urls'].keys():
            if query.lower() in product_id.lower():
                results.append({
                    'manufacturer': mfr.upper(),
                    'productId': product_id,
                    'name': product_id,
                    'url': config['base_url'] + config['product_urls'][product_id]
                })
    
    return jsonify({'results': results, 'count': len(results)})

@app.route('/api/compare', methods=['POST'])
def compare_products():
    """Compare two products"""
    data = request.get_json()
    
    if not data or 'product1' not in data or 'product2' not in data:
        return jsonify({'error': 'Two products required for comparison'}), 400
    
    product1_data = data['product1']
    product2_data = data['product2']
    
    # Fetch both products
    try:
        # Get product 1
        response1 = get_product(product1_data['manufacturer'], product1_data['productId'])
        product1 = json.loads(response1.get_data(as_text=True))
        
        # Get product 2
        response2 = get_product(product2_data['manufacturer'], product2_data['productId'])
        product2 = json.loads(response2.get_data(as_text=True))
        
        # Perform comparison
        comparison = {
            'product1': product1,
            'product2': product2,
            'differences': find_differences(product1, product2),
            'advantages': {
                'product1': find_advantages(product1, product2),
                'product2': find_advantages(product2, product1)
            }
        }
        
        return jsonify(comparison)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def find_differences(product1, product2):
    """Find differences between two products"""
    differences = []
    
    specs1 = product1.get('specifications', {})
    specs2 = product2.get('specifications', {})
    
    # Compare specifications
    all_categories = set(specs1.keys()) | set(specs2.keys())
    
    for category in all_categories:
        cat_specs1 = specs1.get(category, {})
        cat_specs2 = specs2.get(category, {})
        
        all_spec_names = set(cat_specs1.keys()) | set(cat_specs2.keys())
        
        for spec_name in all_spec_names:
            value1 = cat_specs1.get(spec_name, 'N/A')
            value2 = cat_specs2.get(spec_name, 'N/A')
            
            if value1 != value2:
                differences.append({
                    'category': category,
                    'specification': spec_name,
                    'product1_value': value1,
                    'product2_value': value2
                })
    
    return differences

def find_advantages(product, competitor):
    """Find advantages of one product over another"""
    advantages = []
    
    # This is a simplified version - you can add more sophisticated logic
    specs = product.get('specifications', {})
    comp_specs = competitor.get('specifications', {})
    
    for category, cat_specs in specs.items():
        comp_cat_specs = comp_specs.get(category, {})
        
        for spec_name, value in cat_specs.items():
            comp_value = comp_cat_specs.get(spec_name)
            
            if comp_value and value != comp_value:
                # Simple numeric comparison
                try:
                    num_value = float(re.sub(r'[^\d.]', '', str(value)))
                    num_comp_value = float(re.sub(r'[^\d.]', '', str(comp_value)))
                    
                    if num_value > num_comp_value:
                        advantages.append({
                            'category': category,
                            'specification': spec_name,
                            'advantage': f"{value} vs {comp_value}"
                        })
                except (ValueError, TypeError):
                    pass
    
    return advantages

@app.route('/api/cache/clear', methods=['POST'])
def clear_cache():
    """Clear the cache"""
    CACHE.clear()
    return jsonify({'message': 'Cache cleared', 'status': 'success'})

@app.route('/api/cache/stats', methods=['GET'])
def cache_stats():
    """Get cache statistics"""
    stats = {
        'total_entries': len(CACHE),
        'entries': []
    }
    
    for key, value in CACHE.items():
        age = time.time() - value['timestamp']
        stats['entries'].append({
            'key': key,
            'age_seconds': int(age),
            'valid': age < CACHE_DURATION
        })
    
    return jsonify(stats)

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'cache_entries': len(CACHE)
    })

if __name__ == '__main__':
    print("Starting Product Comparison API Server...")
    print("Server running on http://localhost:5000")
    print("\nAvailable endpoints:")
    print("  GET  /api/product/<manufacturer>/<product_id>")
    print("  GET  /api/search?q=<query>&manufacturer=<manufacturer>")
    print("  POST /api/compare")
    print("  POST /api/cache/clear")
    print("  GET  /api/cache/stats")
    print("  GET  /health")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
