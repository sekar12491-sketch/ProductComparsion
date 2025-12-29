# Quick Start Guide - Live Data Mode

## 🚀 Get Started in 3 Steps

### Step 1: Open the Tool
```
Double-click: index.html
```

### Step 2: Enable Live Data (Already Enabled by Default)
- You'll see a toggle switch at the top: **"🔴 Use Live Data from Websites"**
- It's ON by default (green toggle)

### Step 3: Compare Products
1. Select Danfoss series (FC 301 or FC 302)
2. Select competitor brand (ABB, Siemens, or Yaskawa)
3. Select competitor product
4. Click **"⚖️ Compare Products"**
5. Wait 2-5 seconds while live data is fetched
6. View real-time comparison!

---

## 💡 Key Features

### ✨ What You'll See:

**Data Source Badges:**
- 🔴 **Live** = Data fetched from manufacturer website RIGHT NOW
- 📦 **Cached** = Data from local storage (last hour)

**Loading Indicator:**
- Spinner appears while fetching data from websites
- Shows "Fetching live product data from manufacturer websites..."

**Toast Notifications:**
- ✅ Success: "Live data loaded successfully!"
- ⚠️ Warning: "Error loading product data. Using cached data as fallback."
- ℹ️ Info: "Fetching live data from manufacturer websites..."

---

## 🔄 Refresh Data

Click the **"🔄 Refresh Data"** button to:
- Clear cache
- Force fresh fetch from websites
- Get the absolute latest specifications

---

## ⚙️ Advanced Options

### Use Cached Data (Faster, Offline):
1. Toggle OFF the "Use Live Data" switch
2. Comparisons will use local database
3. **Instant** results (no waiting)

### Clear Cache:
1. Scroll to "Cache Information" section
2. Click **"Clear Cache"** button
3. Confirms you want to clear
4. Next comparison will fetch fresh data

### View Cache Stats:
- **Cache entries:** Shows how many products cached
- **Last updated:** When cache was last refreshed

---

## ⌨️ Keyboard Shortcuts

- **Ctrl + Enter** (or Cmd + Enter on Mac): Trigger comparison
- **Ctrl + R** (or Cmd + R on Mac): Refresh data

---

## 🐛 Common Issues

### Issue: "Comparison seems slow"
**Solution:** First comparison fetches from websites (2-5 sec). Subsequent comparisons use cache (instant).

### Issue: "Data shows as Cached"
**Solution:** Cache is valid for 1 hour. Click "Refresh Data" to force new fetch.

### Issue: "Getting old data"
**Solution:** 
1. Click "Refresh Data" button
2. OR Clear cache and compare again

---

## 📊 What Data is Fetched?

From manufacturer websites, we fetch:
- ✅ Product names and models
- ✅ Technical specifications
- ✅ Supply voltage ranges
- ✅ Output data
- ✅ I/O configurations
- ✅ Control features
- ✅ Certifications
- ✅ And much more!

---

## 🎯 Example Workflow

```
1. Open index.html
   ↓
2. Select: Danfoss FC 301
   ↓
3. Select: ABB → ACS880-01
   ↓
4. Click: Compare Products
   ↓
5. Wait: 2-5 seconds (loading spinner)
   ↓
6. View: Real-time comparison
   ↓
7. Export: Print/PDF if needed
```

---

## 💪 Pro Tips

1. **First Comparison**: Takes a few seconds (fetching from web)
2. **Repeat Comparison**: Instant (uses cache)
3. **Refresh Weekly**: Click refresh to get latest specs
4. **Toggle Off Live Data**: For offline use or faster results
5. **Use Backend Server**: For production/reliability (see LIVE_DATA_GUIDE.md)

---

## 🚀 Optional: Run Backend Server

**For better performance and reliability:**

1. Open PowerShell
2. Navigate to project folder:
   ```powershell
   cd "c:\Users\U414860\OneDrive - Danfoss\Desktop\Projects\Product Comparsion"
   ```
3. Install dependencies:
   ```powershell
   pip install flask flask-cors requests beautifulsoup4
   ```
4. Start server:
   ```powershell
   python backend-api-server.py
   ```
5. Edit `script.js`, change line 4:
   ```javascript
   const USE_BACKEND_API = true;
   ```
6. Now all data fetching goes through your local server!

---

## 📞 Need Help?

- Read full documentation: **LIVE_DATA_GUIDE.md**
- Check troubleshooting section
- Contact IT support

---

**Enjoy comparing products with real-time data! 🎉**
