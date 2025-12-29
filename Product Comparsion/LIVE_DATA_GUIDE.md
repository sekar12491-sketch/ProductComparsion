# Product Comparison Tool - Live Data Integration Guide

## Overview

Your Product Comparison Tool has been enhanced to fetch **real-time product data** directly from manufacturer websites instead of using static cached data. This provides the most up-to-date product specifications, pricing, and availability.

---

## 🎯 New Features Added

### 1. **Live Data Fetching**
- ✅ Fetches real-time specifications from Danfoss, ABB, Siemens, and Yaskawa websites
- ✅ Automatic web scraping of product pages
- ✅ Smart caching to reduce load times
- ✅ Fallback to cached data if live data unavailable

### 2. **Dual Mode Operation**
- **Live Mode**: Fetches data from manufacturer websites in real-time
- **Cached Mode**: Uses local database (faster, offline capable)
- Toggle between modes with a simple switch

### 3. **Cache Management**
- Intelligent caching (1-hour cache duration)
- View cache statistics
- Manual cache refresh
- Clear cache option

### 4. **Data Source Indicators**
- Shows whether data is from live source or cache
- Real-time status updates
- Visual indicators for data freshness

### 5. **Backend API Server (Optional)**
- Python Flask server for advanced scraping
- Handles CORS issues
- Provides REST API endpoints
- More reliable for production use

---

## 📦 Files Added/Modified

### New Files:
1. **`api-integration.js`** - Frontend API integration module
2. **`backend-api-server.py`** - Backend Python API server (optional)
3. **`LIVE_DATA_GUIDE.md`** - This documentation

### Modified Files:
1. **`index.html`** - Added live data toggle, loading indicator, data source badges
2. **`script.js`** - Enhanced with live data fetching capabilities
3. **`styles.css`** - Added styling for new components

---

## 🚀 How to Use

### **Option 1: Frontend-Only (Quick Start)**

1. **Open the Tool**
   ```
   Double-click index.html
   ```

2. **Enable Live Data**
   - Toggle switch at top: "Use Live Data from Websites" (enabled by default)

3. **Select Products**
   - Choose Danfoss series (FC301 or FC302)
   - Choose competitor brand and product
   - Click "Compare Products"

4. **View Live Data**
   - Data source badges show "🔴 Live" when fetched from websites
   - Loading indicator appears during data fetch
   - Toast notifications show fetch status

### **Option 2: With Backend API Server (Recommended for Production)**

#### Prerequisites:
- Python 3.7+
- pip (Python package manager)

#### Installation:

1. **Install Required Python Packages**
   ```powershell
   pip install flask flask-cors requests beautifulsoup4
   ```

2. **Start the Backend Server**
   ```powershell
   cd "c:\Users\U414860\OneDrive - Danfoss\Desktop\Projects\Product Comparsion"
   python backend-api-server.py
   ```

   Server will start on `http://localhost:5000`

3. **Enable Backend API in Frontend**
   - Open `script.js`
   - Change line 4: `const USE_BACKEND_API = true;`

4. **Use the Tool**
   - Open `index.html` in browser
   - Backend will handle all data fetching

---

## 🔧 Configuration

### API Endpoints Configuration

Edit `api-integration.js` to configure endpoints:

```javascript
endpoints: {
    danfoss: {
        baseUrl: 'https://www.danfoss.com',
        productApi: '/en/products/drives/ac-drives/',
        corsProxy: 'https://api.allorigins.win/get?url='
    },
    // ... other manufacturers
}
```

### Cache Configuration

```javascript
cache: {
    enabled: true,
    duration: 3600000, // 1 hour in milliseconds
    data: new Map()
}
```

---

## 📊 How It Works

### Data Fetching Flow:

```
1. User clicks "Compare Products"
   ↓
2. Check if "Live Data" is enabled
   ↓
3a. Live Mode:
    - Fetch from manufacturer website
    - Parse HTML for specifications
    - Cache result for 1 hour
    - Display comparison
   ↓
3b. Cached Mode:
    - Load from local database
    - Display comparison immediately
   ↓
4. If live fetch fails:
    - Fall back to cached data
    - Show warning notification
```

### Web Scraping Process:

1. **Fetch HTML** from product page
2. **Parse HTML** using DOMParser (frontend) or BeautifulSoup (backend)
3. **Extract specifications** from tables/lists
4. **Normalize data** format
5. **Cache result** in localStorage/memory
6. **Return structured data**

---

## 🛠️ Backend API Endpoints

When using the Python backend server:

### `GET /api/product/<manufacturer>/<product_id>`
Fetch product data for specific manufacturer and product

**Example:**
```
GET http://localhost:5000/api/product/danfoss/FC301
```

**Response:**
```json
{
  "name": "FC 301 (VLT® AQUA Drive)",
  "manufacturer": "DANFOSS",
  "productId": "FC301",
  "specifications": {
    "Mains Supply": {
      "Supply voltage": "200 – 240 V ±10%",
      ...
    }
  },
  "dataSource": "live",
  "fetchedAt": "2025-12-22T10:30:00Z",
  "url": "https://www.danfoss.com/..."
}
```

### `GET /api/search?q=<query>&manufacturer=<manufacturer>`
Search for products

### `POST /api/compare`
Compare two products

### `POST /api/cache/clear`
Clear server cache

### `GET /api/cache/stats`
Get cache statistics

### `GET /health`
Health check endpoint

---

## ⚙️ Advanced Features

### 1. **Manual Data Refresh**
Click the "🔄 Refresh Data" button to:
- Clear cache
- Force fetch from websites
- Update current comparison

### 2. **Cache Management**
View cache statistics:
- Number of cached entries
- Last update time
- Clear all cached data

### 3. **Keyboard Shortcuts**
- `Ctrl/Cmd + Enter`: Trigger comparison
- `Ctrl/Cmd + R`: Refresh data

### 4. **Toast Notifications**
Real-time feedback for:
- Data fetching status
- Success/error messages
- Cache operations
- Mode changes

---

## 🔍 Troubleshooting

### Issue: "Failed to fetch live data"

**Causes:**
1. Manufacturer website is down
2. Website structure changed
3. CORS blocking (frontend only)
4. Network connectivity issues

**Solutions:**
1. Enable backend API server (bypasses CORS)
2. Check internet connection
3. Wait and retry (automatic fallback to cache)
4. Clear cache and refresh

### Issue: "Data seems outdated"

**Solution:**
1. Click "Refresh Data" button
2. Clear cache: Settings → Clear Cache
3. Toggle to Live Data mode

### Issue: Backend server won't start

**Solutions:**
```powershell
# Install missing packages
pip install flask flask-cors requests beautifulsoup4

# Check if port 5000 is in use
netstat -ano | findstr :5000

# Use different port (edit backend-api-server.py)
app.run(debug=True, host='0.0.0.0', port=5001)
```

### Issue: CORS errors in browser console

**Solutions:**
1. Use backend API server (recommended)
2. Use CORS proxy (already configured)
3. Install browser extension: "Allow CORS"

---

## 🌐 Supported Manufacturers

### Currently Supported:
- ✅ **Danfoss** (FC 301, FC 302)
- ✅ **ABB** (ACS880, ACS580)
- ✅ **Siemens** (SINAMICS G120, G220)
- ✅ **Yaskawa** (GA700, A1000)

### Adding New Manufacturers:

1. **Update `api-integration.js`:**
```javascript
endpoints: {
    newManufacturer: {
        baseUrl: 'https://www.manufacturer.com',
        productApi: '/products/drives/',
        searchApi: '/api/search',
        corsProxy: 'https://api.allorigins.win/get?url='
    }
}
```

2. **Add product URLs:**
```javascript
product_urls: {
    'PRODUCT_ID': '/path/to/product/page'
}
```

3. **Configure selectors:**
```javascript
selectors: {
    title: 'h1.product-name',
    specs_table: 'table.specifications',
    spec_row: 'tr',
    spec_label: 'td:first-child',
    spec_value: 'td:last-child'
}
```

---

## 📈 Performance Optimization

### Cache Strategy:
- **First request**: Fetches from website (~2-5 seconds)
- **Subsequent requests**: Loads from cache (~instant)
- **Cache expiry**: 1 hour (configurable)

### Parallel Fetching:
```javascript
// Both products fetched simultaneously
[danfossData, competitorData] = await Promise.all([
    fetchProductData('danfoss', 'FC301', true),
    fetchProductData('abb', 'ACS880', true)
]);
```

### Fallback Chain:
1. Try manufacturer API
2. Try web scraping
3. Use cached data
4. Use local database

---

## 🔒 Security Considerations

### Frontend Security:
- No API keys exposed
- CORS handled via proxy
- LocalStorage for cache only (no sensitive data)

### Backend Security:
- Rate limiting recommended
- Input validation
- Error handling
- User-Agent spoofing for scraping

---

## 🚀 Production Deployment

### Option 1: Frontend Only
1. Upload all files to web hosting
2. Ensure CORS proxy is accessible
3. Test with various manufacturers

### Option 2: With Backend API
1. **Deploy Flask server:**
   - Heroku
   - AWS EC2
   - Azure App Service
   - DigitalOcean

2. **Update frontend configuration:**
```javascript
const USE_BACKEND_API = true;
const BACKEND_API_URL = 'https://your-api-server.com/api';
```

3. **Enable HTTPS** (required for production)

4. **Set up monitoring:**
   - Application Insights
   - New Relic
   - Sentry

---

## 📞 Support

### Issues to Report:
- Manufacturer website structure changes
- Data extraction failures
- Performance problems
- Feature requests

### Maintenance Tasks:
- Update selectors when websites change
- Add new product models
- Update cache duration
- Monitor API usage

---

## 🎉 Benefits

### Before (Static Data):
- ❌ Manual data updates required
- ❌ Data becomes outdated quickly
- ❌ No pricing information
- ❌ No availability status

### After (Live Data):
- ✅ Always current specifications
- ✅ Real-time updates from manufacturers
- ✅ Pricing information (if available)
- ✅ Availability status
- ✅ Automatic data refresh
- ✅ Intelligent caching for performance

---

## 📝 Next Steps

1. **Test the Tool**: Try comparing different products in live mode
2. **Monitor Performance**: Check cache hit rates and fetch times
3. **Customize Selectors**: Update if manufacturer sites change
4. **Add More Products**: Expand the supported product range
5. **Deploy to Production**: Set up backend server for reliability

---

**Version:** 2.0 with Live Data Integration  
**Last Updated:** December 22, 2025  
**Author:** IT Development Team
