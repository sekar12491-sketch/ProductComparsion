// Main JavaScript for Product Comparison Dashboard - Enhanced with Live Data

// Configuration
const USE_BACKEND_API = false; // Set to true if backend API server is running
const BACKEND_API_URL = 'http://localhost:5000/api';

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    initializeEventListeners();
    updateCacheStats();
    checkDataSourceStatus();
    // Initialize dropdowns on page load
    updateDanfossPowerOptions();
}

function initializeEventListeners() {
    const danfossSeries = document.getElementById('danfoss-series');
    const competitorBrand = document.getElementById('competitor-brand');
    const compareBtn = document.getElementById('compare-btn');
    const exportBtn = document.getElementById('export-btn');
    const useLiveDataToggle = document.getElementById('use-live-data');
    const refreshBtn = document.getElementById('refresh-btn');
    const clearCacheBtn = document.getElementById('clear-cache-btn');

    danfossSeries.addEventListener('change', updateDanfossPowerOptions);
    competitorBrand.addEventListener('change', updateCompetitorProducts);
    compareBtn.addEventListener('click', performComparison);
    if (exportBtn) exportBtn.addEventListener('click', exportToPDF);
    if (useLiveDataToggle) useLiveDataToggle.addEventListener('change', handleDataSourceToggle);
    if (refreshBtn) refreshBtn.addEventListener('click', refreshData);
    if (clearCacheBtn) clearCacheBtn.addEventListener('click', clearAllCache);
}

function updateDanfossPowerOptions() {
    const series = document.getElementById('danfoss-series').value;
    const powerSelect = document.getElementById('danfoss-power');
    
    powerSelect.innerHTML = '<option value="">Select Power</option>';
    
    if (!series) {
        powerSelect.innerHTML = '<option value="">Select Series First</option>';
        return;
    }
    
    if (series === 'FC51') {
        powerSelect.innerHTML += '<option value="0.18-1.5">0.18 - 1.5 kW</option>';
    } else if (series === 'FC101') {
        powerSelect.innerHTML += '<option value="0.37-1.5">0.37 - 1.5 kW</option>';
    } else if (series === 'FC102') {
        powerSelect.innerHTML += '<option value="0.37-22">0.37 - 22 kW</option>';
    } else if (series === 'FC202') {
        powerSelect.innerHTML += '<option value="0.25-22">0.25 - 22 kW</option>';
    } else if (series === 'FC280') {
        powerSelect.innerHTML += '<option value="0.75-350">0.75 - 350 kW</option>';
    } else if (series === 'FC301') {
        powerSelect.innerHTML += '<option value="0.25-75">0.25 - 75 kW</option>';
    } else if (series === 'FC302') {
        powerSelect.innerHTML += '<option value="0.25-75-hvac">0.25 - 75 kW</option>';
        powerSelect.innerHTML += '<option value="90-1200">90 - 1200 kW</option>';
    } else if (series === 'FC352') {
        powerSelect.innerHTML += '<option value="0.37-90">0.37 - 90 kW</option>';
    } else if (series === 'FC360') {
        powerSelect.innerHTML += '<option value="0.25-7.5">0.25 - 7.5 kW</option>';
    } else if (series === 'FC430') {
        powerSelect.innerHTML += '<option value="0.25-560">0.25 - 560 kW</option>';
    }
}

function updateCompetitorProducts() {
    const brand = document.getElementById('competitor-brand').value;
    const productSelect = document.getElementById('competitor-product');
    
    productSelect.innerHTML = '<option value="">Select Product</option>';
    
    if (brand && competitorMapping[brand]) {
        competitorMapping[brand].forEach(product => {
            const productData = productsDatabase.competitors[brand][product];
            productSelect.innerHTML += `<option value="${product}">${productData.name} (${productData.powerRange})</option>`;
        });
    }
}

// Enhanced comparison with live data support
async function performComparison() {
    const danfossSeries = document.getElementById('danfoss-series').value;
    const competitorBrand = document.getElementById('competitor-brand').value;
    const competitorProduct = document.getElementById('competitor-product').value;
    const useLiveData = document.getElementById('use-live-data')?.checked ?? false;

    if (!danfossSeries || !competitorBrand || !competitorProduct) {
        showToast('Please select all required options to compare products.', 'warning');
        return;
    }

    // Show loading indicator
    showLoading(true);

    try {
        let danfossData, competitorData;

        if (useLiveData) {
            // Fetch live data
            showToast('Fetching live data from manufacturer websites...', 'info');
            
            [danfossData, competitorData] = await Promise.all([
                fetchProductData('danfoss', danfossSeries, useLiveData),
                fetchProductData(competitorBrand.toLowerCase(), competitorProduct, useLiveData)
            ]);

            // Update data source indicators
            updateDataSourceIndicator('danfoss', danfossData.dataSource || 'live');
            updateDataSourceIndicator('competitor', competitorData.dataSource || 'live');

            showToast('Live data loaded successfully!', 'success');
        } else {
            // Use cached data
            danfossData = productsDatabase.danfoss[danfossSeries];
            competitorData = productsDatabase.competitors[competitorBrand][competitorProduct];
            
            updateDataSourceIndicator('danfoss', 'cached');
            updateDataSourceIndicator('competitor', 'cached');
        }

        if (!danfossData || !competitorData) {
            throw new Error('Failed to load product data');
        }

        displayComparison(danfossData, competitorData, competitorBrand);
    } catch (error) {
        console.error('Comparison error:', error);
        showToast('Error loading product data. Using cached data as fallback.', 'error');
        
        // Fallback to cached data
        const danfossData = productsDatabase.danfoss[danfossSeries];
        const competitorData = productsDatabase.competitors[competitorBrand][competitorProduct];
        displayComparison(danfossData, competitorData, competitorBrand);
    } finally {
        showLoading(false);
    }
}

// Fetch product data (live or cached)
async function fetchProductData(manufacturer, productId, useLiveData) {
    if (!useLiveData) {
        // Return cached data
        if (manufacturer === 'danfoss') {
            return productsDatabase.danfoss[productId];
        } else {
            return productsDatabase.competitors[manufacturer.toUpperCase()]?.[productId];
        }
    }

    try {
        if (USE_BACKEND_API) {
            // Use backend API
            const response = await fetch(`${BACKEND_API_URL}/product/${manufacturer}/${productId}`);
            if (!response.ok) throw new Error('API request failed');
            return await response.json();
        } else {
            // Use frontend API integration
            if (manufacturer === 'danfoss') {
                return await APIIntegration.fetchDanfossProduct(productId, '');
            } else {
                return await APIIntegration.fetchCompetitorProduct(manufacturer.toUpperCase(), productId);
            }
        }
    } catch (error) {
        console.error('Error fetching live data:', error);
        // Fallback to cached data
        if (manufacturer === 'danfoss') {
            return productsDatabase.danfoss[productId];
        } else {
            return productsDatabase.competitors[manufacturer.toUpperCase()]?.[productId];
        }
    }
}

function displayComparison(danfossProduct, competitorProduct, competitorBrand) {
    // Update headers
    document.getElementById('danfoss-model').textContent = danfossProduct.name;
    document.getElementById('competitor-brand-name').textContent = competitorBrand;
    document.getElementById('competitor-model').textContent = competitorProduct.name;

    // Build comparison table
    const tbody = document.getElementById('comparison-body');
    tbody.innerHTML = '';

    const danfossAdvantages = [];
    const competitorAdvantages = [];

    // Compare specifications
    const categories = Object.keys(danfossProduct.specifications);
    
    categories.forEach(category => {
        const categorySpecs = danfossProduct.specifications[category];
        const competitorCategorySpecs = competitorProduct.specifications[category] || {};
        
        const specNames = Object.keys(categorySpecs);
        
        specNames.forEach((specName, index) => {
            const row = document.createElement('tr');
            
            // Category column (only for first spec in category)
            if (index === 0) {
                const categoryCell = document.createElement('td');
                categoryCell.className = 'category-cell';
                categoryCell.textContent = category;
                categoryCell.rowSpan = specNames.length;
                row.appendChild(categoryCell);
            }
            
            // Specification name
            const nameCell = document.createElement('td');
            nameCell.className = 'spec-name-cell';
            nameCell.textContent = specName;
            row.appendChild(nameCell);
            
            // Danfoss value
            const danfossValue = categorySpecs[specName];
            const danfossCell = document.createElement('td');
            danfossCell.className = 'value-cell danfoss-value';
            danfossCell.textContent = danfossValue;
            row.appendChild(danfossCell);
            
            // Competitor value
            const competitorValue = competitorCategorySpecs[specName] || 'Not specified';
            const competitorCell = document.createElement('td');
            competitorCell.className = 'value-cell competitor-value';
            competitorCell.textContent = competitorValue;
            row.appendChild(competitorCell);
            
            // Advantage determination
            const advantage = determineAdvantage(specName, danfossValue, competitorValue);
            const advantageCell = document.createElement('td');
            advantageCell.className = 'advantage-cell';
            
            if (advantage === 'danfoss') {
                advantageCell.innerHTML = '<span class="advantage-badge danfoss-advantage">Danfoss</span>';
                danfossAdvantages.push(`${specName}: ${danfossValue}`);
            } else if (advantage === 'competitor') {
                advantageCell.innerHTML = `<span class="advantage-badge competitor-advantage">${competitorBrand}</span>`;
                competitorAdvantages.push(`${specName}: ${competitorValue}`);
            } else {
                advantageCell.innerHTML = '<span class="advantage-badge neutral">Similar</span>';
            }
            
            row.appendChild(advantageCell);
            tbody.appendChild(row);
        });
    });

    // Update summary cards
    updateSummaryCards(danfossAdvantages, competitorAdvantages);

    // Show results
    document.getElementById('comparison-results').style.display = 'block';
    document.getElementById('comparison-results').scrollIntoView({ behavior: 'smooth' });
}

function determineAdvantage(specName, danfossValue, competitorValue) {
    if (competitorValue === 'Not specified') return 'danfoss';
    
    // Numeric comparisons
    const danfossNum = extractNumber(danfossValue);
    const competitorNum = extractNumber(competitorValue);
    
    if (danfossNum && competitorNum) {
        // Specifications where higher is better
        const higherIsBetter = [
            'Programmable digital inputs',
            'Programmable analogue outputs',
            'Programmable relay outputs',
            'Analogue inputs',
            'True Power Factor',
            'Displacement Power Factor',
            'Max. motor cable lengths',
            'Output frequency',
            'Overload capacity'
        ];
        
        if (higherIsBetter.some(spec => specName.includes(spec))) {
            if (danfossNum > competitorNum) return 'danfoss';
            if (competitorNum > danfossNum) return 'competitor';
        }
        
        // Specifications where lower is better
        const lowerIsBetter = ['Ramp times (minimum)'];
        
        if (lowerIsBetter.some(spec => specName.includes(spec))) {
            if (danfossNum < competitorNum) return 'danfoss';
            if (competitorNum < danfossNum) return 'competitor';
        }
    }
    
    // String comparisons
    if (danfossValue === competitorValue) return 'equal';
    
    // Check for feature presence
    if (danfossValue.toLowerCase().includes('yes') && !competitorValue.toLowerCase().includes('yes')) {
        return 'danfoss';
    }
    if (!danfossValue.toLowerCase().includes('yes') && competitorValue.toLowerCase().includes('yes')) {
        return 'competitor';
    }
    
    return 'equal';
}

function extractNumber(value) {
    if (typeof value !== 'string') return null;
    
    // Extract first number from string
    const match = value.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : null;
}

function updateSummaryCards(danfossAdvantages, competitorAdvantages) {
    const danfossList = document.getElementById('danfoss-advantages');
    const competitorList = document.getElementById('competitor-advantages');
    
    danfossList.innerHTML = '';
    competitorList.innerHTML = '';
    
    if (danfossAdvantages.length === 0) {
        danfossList.innerHTML = '<li>No significant advantages identified</li>';
    } else {
        danfossAdvantages.slice(0, 10).forEach(advantage => {
            const li = document.createElement('li');
            li.textContent = advantage;
            danfossList.appendChild(li);
        });
    }
    
    if (competitorAdvantages.length === 0) {
        competitorList.innerHTML = '<li>No significant advantages identified</li>';
    } else {
        competitorAdvantages.slice(0, 10).forEach(advantage => {
            const li = document.createElement('li');
            li.textContent = advantage;
            competitorList.appendChild(li);
        });
    }
}

function exportToPDF() {
    // Simple print function - user can save as PDF from print dialog
    window.print();
}

// UI Utility Functions
function showLoading(show) {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = show ? 'flex' : 'none';
    }
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${getToastIcon(type)}</span>
        <span class="toast-message">${message}</span>
    `;
    
    container.appendChild(toast);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        toast.classList.add('toast-fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
    return container;
}

function getToastIcon(type) {
    const icons = {
        'success': '✅',
        'error': '❌',
        'warning': '⚠️',
        'info': 'ℹ️'
    };
    return icons[type] || icons.info;
}

function updateDataSourceIndicator(product, source) {
    const indicatorId = product === 'danfoss' ? 'danfoss-data-source' : 'competitor-data-source';
    const indicator = document.getElementById(indicatorId);
    
    if (indicator) {
        if (source === 'live') {
            indicator.textContent = '🔴 Live';
            indicator.className = 'source-badge live';
        } else {
            indicator.textContent = '📦 Cached';
            indicator.className = 'source-badge cached';
        }
    }
}

function handleDataSourceToggle() {
    const useLiveData = document.getElementById('use-live-data').checked;
    const status = document.getElementById('data-status');
    
    if (status) {
        status.textContent = useLiveData ? '(Live mode enabled)' : '(Using cached data)';
        status.className = useLiveData ? 'data-status live' : 'data-status cached';
    }
    
    showToast(
        useLiveData 
            ? 'Live data mode enabled - will fetch from manufacturer websites' 
            : 'Cached data mode - using local database',
        'info'
    );
}

async function refreshData() {
    showToast('Refreshing product data...', 'info');
    showLoading(true);
    
    try {
        // Clear cache
        if (typeof APIIntegration !== 'undefined') {
            APIIntegration.clearCache();
        }
        
        // Reload current comparison if active
        const danfossSeries = document.getElementById('danfoss-series').value;
        const competitorProduct = document.getElementById('competitor-product').value;
        
        if (danfossSeries && competitorProduct) {
            await performComparison();
        }
        
        showToast('Data refreshed successfully!', 'success');
    } catch (error) {
        console.error('Refresh error:', error);
        showToast('Error refreshing data', 'error');
    } finally {
        showLoading(false);
    }
}

function clearAllCache() {
    if (confirm('Are you sure you want to clear all cached data? This will force a reload from manufacturer websites on next comparison.')) {
        if (typeof APIIntegration !== 'undefined') {
            APIIntegration.clearCache();
        }
        localStorage.removeItem('productComparisonCache');
        updateCacheStats();
        showToast('Cache cleared successfully!', 'success');
    }
}

function updateCacheStats() {
    if (typeof APIIntegration !== 'undefined' && APIIntegration.cache) {
        const cacheCount = document.getElementById('cache-count');
        const cacheLastUpdate = document.getElementById('cache-last-update');
        
        if (cacheCount) {
            cacheCount.textContent = APIIntegration.cache.data.size;
        }
        
        if (cacheLastUpdate && APIIntegration.cache.data.size > 0) {
            const timestamps = Array.from(APIIntegration.cache.data.values()).map(v => v.timestamp);
            const latestTimestamp = Math.max(...timestamps);
            const date = new Date(latestTimestamp);
            cacheLastUpdate.textContent = date.toLocaleString();
        }
    }
}

function checkDataSourceStatus() {
    const statusElem = document.getElementById('data-status');
    const useLiveData = document.getElementById('use-live-data')?.checked ?? true;
    
    if (statusElem) {
        statusElem.textContent = useLiveData ? '(Live mode ready)' : '(Cached mode)';
        statusElem.className = useLiveData ? 'data-status live' : 'data-status cached';
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to compare
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        document.getElementById('compare-btn').click();
    }
    
    // Ctrl/Cmd + R to refresh
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        const refreshBtn = document.getElementById('refresh-btn');
        if (refreshBtn) refreshBtn.click();
    }
});
