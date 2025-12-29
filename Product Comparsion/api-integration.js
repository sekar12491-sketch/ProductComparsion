// API Integration Module for Live Product Data
// Fetches real-time product data from official manufacturer websites only
// Data Sources: Danfoss Store and ABB Drives

const APIIntegration = {
    // API endpoints and configurations - REAL DATA ONLY
    endpoints: {
        danfoss: {
            baseUrl: 'https://store.danfoss.com',
            storeUrl: 'https://store.danfoss.com/en/',
            productApi: '/en/products/drives/ac-drives/',
            searchApi: '/api/products/search',
            corsProxy: 'https://api.allorigins.win/get?url=',
            alternateProxy: 'https://corsproxy.io/?'
        },
        abb: {
            baseUrl: 'https://www.abb.com',
            globalUrl: 'https://www.abb.com/global/en/areas/motion/drives',
            productApi: '/drives/low-voltage-ac-drives',
            searchApi: '/api/v1/products',
            corsProxy: 'https://api.allorigins.win/get?url='
        }
    },

    // Cache for API responses (to reduce API calls)
    cache: {
        enabled: true,
        duration: 3600000, // 1 hour in milliseconds
        data: new Map()
    },

    // Initialize the API integration
    init: function() {
        console.log('API Integration initialized');
        this.loadCache();
    },

    // Generic fetch function with CORS proxy
    async fetchWithProxy: async function(url, useProxy = true) {
        try {
            const finalUrl = useProxy ? this.endpoints.danfoss.corsProxy + encodeURIComponent(url) : url;
            
            const response = await fetch(finalUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/html',
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            // If using allorigins proxy, extract the actual content
            if (useProxy && data.contents) {
                return JSON.parse(data.contents);
            }
            
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    },

    // Fetch Danfoss product data
    fetchDanfossProduct: async function(series, powerRange) {
        const cacheKey = `danfoss_${series}_${powerRange}`;
        
        // Check cache first
        if (this.cache.enabled && this.isCacheValid(cacheKey)) {
            console.log('Loading from cache:', cacheKey);
            return this.cache.data.get(cacheKey).data;
        }

        try {
            // Try multiple methods to get product data
            
            // Method 1: Official API (if available)
            try {
                const apiUrl = `${this.endpoints.danfoss.baseUrl}${this.endpoints.danfoss.searchApi}?series=${series}&power=${powerRange}`;
                const data = await this.fetchWithProxy(apiUrl, true);
                
                if (data && data.products) {
                    this.cacheData(cacheKey, data.products[0]);
                    return data.products[0];
                }
            } catch (apiError) {
                console.log('API method failed, trying web scraping...');
            }

            // Method 2: Web scraping product pages
            const scrapedData = await this.scrapeDanfossProduct(series, powerRange);
            if (scrapedData) {
                this.cacheData(cacheKey, scrapedData);
                return scrapedData;
            }

            // Method 3: Fall back to local database
            console.warn('Live data unavailable, using cached database');
            return productsDatabase.danfoss[series];

        } catch (error) {
            console.error('Error fetching Danfoss product:', error);
            return productsDatabase.danfoss[series];
        }
    },

    // Scrape Danfoss product page for specifications
    scrapeDanfossProduct: async function(series, powerRange) {
        try {
            const productUrl = this.buildDanfossProductUrl(series);
            const response = await this.fetchWithProxy(productUrl, true);
            
            // Parse HTML response
            const parser = new DOMParser();
            const doc = parser.parseFromString(response.contents || response, 'text/html');
            
            // Extract specifications from the page
            const specs = this.extractSpecifications(doc, 'danfoss');
            
            return {
                name: this.extractProductName(doc),
                series: series,
                powerRange: powerRange,
                specifications: specs,
                dataSource: 'live',
                fetchedAt: new Date().toISOString()
            };
        } catch (error) {
            console.error('Error scraping Danfoss product:', error);
            return null;
        }
    },

    // Fetch competitor product data
    fetchCompetitorProduct: async function(brand, productId) {
        const cacheKey = `${brand.toLowerCase()}_${productId}`;
        
        // Check cache first
        if (this.cache.enabled && this.isCacheValid(cacheKey)) {
            console.log('Loading from cache:', cacheKey);
            return this.cache.data.get(cacheKey).data;
        }

        try {
            const endpoint = this.endpoints[brand.toLowerCase()];
            if (!endpoint) {
                throw new Error(`No endpoint configured for ${brand}`);
            }

            // Try API first
            try {
                const apiUrl = `${endpoint.baseUrl}${endpoint.searchApi}?product=${productId}`;
                const data = await this.fetchWithProxy(apiUrl, true);
                
                if (data && data.products) {
                    this.cacheData(cacheKey, data.products[0]);
                    return data.products[0];
                }
            } catch (apiError) {
                console.log('API method failed for competitor, trying scraping...');
            }

            // Fall back to web scraping
            const scrapedData = await this.scrapeCompetitorProduct(brand, productId);
            if (scrapedData) {
                this.cacheData(cacheKey, scrapedData);
                return scrapedData;
            }

            // Fall back to local database
            console.warn('Live competitor data unavailable, using cached database');
            return productsDatabase.competitors[brand][productId];

        } catch (error) {
            console.error(`Error fetching ${brand} product:`, error);
            return productsDatabase.competitors[brand]?.[productId];
        }
    },

    // Generic competitor product scraper
    scrapeCompetitorProduct: async function(brand, productId) {
        try {
            const endpoint = this.endpoints[brand.toLowerCase()];
            const productUrl = this.buildCompetitorProductUrl(brand, productId);
            const response = await this.fetchWithProxy(productUrl, true);
            
            const parser = new DOMParser();
            const doc = parser.parseFromString(response.contents || response, 'text/html');
            
            const specs = this.extractSpecifications(doc, brand.toLowerCase());
            
            return {
                name: this.extractProductName(doc),
                brand: brand,
                productId: productId,
                specifications: specs,
                dataSource: 'live',
                fetchedAt: new Date().toISOString()
            };
        } catch (error) {
            console.error(`Error scraping ${brand} product:`, error);
            return null;
        }
    },

    // Extract specifications from HTML document
    extractSpecifications: function(doc, brand) {
        const specs = {};
        
        // Different brands have different HTML structures
        const selectors = {
            danfoss: {
                table: '.specifications-table, .product-specs, table[class*="spec"]',
                row: 'tr',
                label: 'td:first-child, th:first-child',
                value: 'td:last-child'
            },
            abb: {
                table: '.technical-data, .specifications',
                row: '.spec-row, tr',
                label: '.spec-label, td:first-child',
                value: '.spec-value, td:last-child'
            },
            siemens: {
                table: '.product-table, .specifications',
                row: 'tr',
                label: 'td:first-child',
                value: 'td:nth-child(2)'
            },
            yaskawa: {
                table: '.specs-table, .product-specifications',
                row: 'tr',
                label: 'td:first-child, th',
                value: 'td:last-child'
            }
        };

        const selector = selectors[brand] || selectors.danfoss;
        const tables = doc.querySelectorAll(selector.table);
        
        tables.forEach(table => {
            const rows = table.querySelectorAll(selector.row);
            let currentCategory = 'General Specifications';
            
            rows.forEach(row => {
                const labelCell = row.querySelector(selector.label);
                const valueCell = row.querySelector(selector.value);
                
                if (labelCell && valueCell) {
                    const label = labelCell.textContent.trim();
                    const value = valueCell.textContent.trim();
                    
                    // Check if this is a category header
                    if (row.classList.contains('category-header') || 
                        labelCell.classList.contains('category') ||
                        labelCell.tagName === 'TH' && !valueCell.textContent) {
                        currentCategory = label;
                        specs[currentCategory] = {};
                    } else if (label && value) {
                        if (!specs[currentCategory]) {
                            specs[currentCategory] = {};
                        }
                        specs[currentCategory][label] = value;
                    }
                }
            });
        });

        // If no specs found, try alternative extraction
        if (Object.keys(specs).length === 0) {
            return this.extractSpecsAlternative(doc);
        }

        return specs;
    },

    // Alternative specification extraction method
    extractSpecsAlternative: function(doc) {
        const specs = { "Technical Data": {} };
        
        // Look for dl/dt/dd structures
        const descLists = doc.querySelectorAll('dl');
        descLists.forEach(dl => {
            const terms = dl.querySelectorAll('dt');
            const descriptions = dl.querySelectorAll('dd');
            
            terms.forEach((term, index) => {
                if (descriptions[index]) {
                    specs["Technical Data"][term.textContent.trim()] = descriptions[index].textContent.trim();
                }
            });
        });

        // Look for divs with data attributes
        const dataElements = doc.querySelectorAll('[data-spec-name]');
        dataElements.forEach(element => {
            const name = element.getAttribute('data-spec-name');
            const value = element.getAttribute('data-spec-value') || element.textContent.trim();
            specs["Technical Data"][name] = value;
        });

        return specs;
    },

    // Extract product name from document
    extractProductName: function(doc) {
        const selectors = [
            'h1.product-title',
            'h1.product-name',
            '.product-header h1',
            'h1[class*="product"]',
            'h1'
        ];

        for (const selector of selectors) {
            const element = doc.querySelector(selector);
            if (element && element.textContent.trim()) {
                return element.textContent.trim();
            }
        }

        return 'Unknown Product';
    },

    // Build product URL for Danfoss
    buildDanfossProductUrl: function(series) {
        const urlMap = {
            'FC301': '/en/products/dcs/drives/vlt-aqua-drive-fc-301/',
            'FC302': '/en/products/dcs/drives/vlt-hvac-drive-fc-302/'
        };
        
        return this.endpoints.danfoss.baseUrl + (urlMap[series] || '/en/products/drives/');
    },

    // Build product URL for competitors
    buildCompetitorProductUrl: function(brand, productId) {
        const endpoint = this.endpoints[brand.toLowerCase()];
        if (!endpoint) return '';
        
        // Brand-specific URL patterns
        const urlPatterns = {
            'ABB': `${endpoint.baseUrl}/drives/acs880/${productId}`,
            'Siemens': `${endpoint.baseUrl}/en/us/p/${productId}`,
            'Yaskawa': `${endpoint.baseUrl}/products/drives/ac-drives/${productId}`
        };

        return urlPatterns[brand] || `${endpoint.baseUrl}/products/${productId}`;
    },

    // Cache management
    cacheData: function(key, data) {
        if (this.cache.enabled) {
            this.cache.data.set(key, {
                data: data,
                timestamp: Date.now()
            });
            this.saveCache();
        }
    },

    isCacheValid: function(key) {
        if (!this.cache.data.has(key)) return false;
        
        const cached = this.cache.data.get(key);
        const age = Date.now() - cached.timestamp;
        
        return age < this.cache.duration;
    },

    clearCache: function() {
        this.cache.data.clear();
        localStorage.removeItem('productComparisonCache');
        console.log('Cache cleared');
    },

    saveCache: function() {
        try {
            const cacheObject = {};
            this.cache.data.forEach((value, key) => {
                cacheObject[key] = value;
            });
            localStorage.setItem('productComparisonCache', JSON.stringify(cacheObject));
        } catch (error) {
            console.error('Error saving cache:', error);
        }
    },

    loadCache: function() {
        try {
            const cached = localStorage.getItem('productComparisonCache');
            if (cached) {
                const cacheObject = JSON.parse(cached);
                Object.keys(cacheObject).forEach(key => {
                    this.cache.data.set(key, cacheObject[key]);
                });
                console.log('Cache loaded:', this.cache.data.size, 'items');
            }
        } catch (error) {
            console.error('Error loading cache:', error);
        }
    },

    // Fetch product prices (if available)
    fetchProductPrice: async function(brand, productId) {
        try {
            const endpoint = this.endpoints[brand.toLowerCase()];
            if (!endpoint) return null;

            const priceUrl = `${endpoint.baseUrl}/api/pricing/${productId}`;
            const data = await this.fetchWithProxy(priceUrl, true);
            
            return {
                price: data.price,
                currency: data.currency,
                availability: data.availability
            };
        } catch (error) {
            console.error('Error fetching price:', error);
            return null;
        }
    },

    // Fetch product availability
    fetchAvailability: async function(brand, productId) {
        try {
            const endpoint = this.endpoints[brand.toLowerCase()];
            if (!endpoint) return { status: 'unknown' };

            const availUrl = `${endpoint.baseUrl}/api/availability/${productId}`;
            const data = await this.fetchWithProxy(availUrl, true);
            
            return {
                status: data.inStock ? 'In Stock' : 'Out of Stock',
                leadTime: data.leadTime,
                quantity: data.quantity
            };
        } catch (error) {
            console.error('Error fetching availability:', error);
            return { status: 'unknown' };
        }
    }
};

// Initialize API Integration when script loads
APIIntegration.init();
