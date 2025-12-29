# Danfoss Drive Product Comparison Dashboard

A comprehensive web-based tool for comparing Danfoss FC Series drives (FC 301 & FC 302) with competitor products from ABB, Yaskawa, and Siemens.

## 🎯 Purpose

This dashboard enables Danfoss sales teams to:
- Compare Danfoss drive specifications with competitors side-by-side
- Identify key advantages and differentiators
- Generate professional comparison reports
- Make informed sales presentations

## 📋 Features

### Covered Products

**Danfoss:**
- FC 301 (VLT® AQUA Drive) - 0.25 to 75 kW
- FC 302 (VLT® HVAC Drive) - 0.25 to 1200 kW

**Competitors:**
- **ABB:** ACS480, ACS580
- **Yaskawa:** GA500, A1000
- **Siemens:** G120C, G120

### Compared Specifications

Based on the official Danfoss specifications document, the dashboard compares:

1. **Mains Supply (L1, L2, L3)**
   - Supply voltage ranges
   - Supply frequency
   - True Power Factor (λ)
   - Displacement Power Factor (cos φ)
   - Switching limitations

2. **Output Data (U/V/W)**
   - Output voltage
   - Output frequency
   - Switching capabilities
   - Ramp times

3. **Digital Inputs**
   - Number of programmable inputs
   - Logic type (PNP/NPN)
   - Voltage levels

4. **Analogue Input**
   - Number of inputs
   - Modes (voltage/current)
   - Voltage and current ranges

5. **Pulse/Encoder Inputs**
   - Number of programmable inputs
   - Voltage levels

6. **Digital Output**
   - Number of programmable outputs
   - Voltage levels

7. **Analogue Output**
   - Number of programmable outputs
   - Current ranges

8. **Relay Outputs**
   - Number of programmable relays

9. **Cable Lengths**
   - Maximum motor cable lengths (screened/unscreened)

10. **Additional Features**
    - Built-in PID controllers
    - IP ratings
    - Overload capacity
    - EMC compliance
    - Safety certifications
    - Energy optimization features

## 🚀 Getting Started

### Installation

1. Clone or download this repository
2. No installation required - runs directly in web browser

### Usage

1. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari)
2. Select your Danfoss product:
   - Choose product series (FC 301 or FC 302)
   - Select power rating
3. Select competitor:
   - Choose competitor brand (ABB, Yaskawa, or Siemens)
   - Select their product model
4. Click **"Compare Products"**
5. Review the detailed comparison table and advantage summaries
6. Export to PDF using the export button

### Keyboard Shortcuts

- **Ctrl/Cmd + Enter**: Perform comparison

## 📊 Data Sources

### Current Data Status

The dashboard includes comprehensive specifications for:
- ✅ Danfoss FC 301 & FC 302 (Complete from official datasheets)
- ✅ ABB ACS480 & ACS580 (Based on published specifications)
- ✅ Yaskawa GA500 & A1000 (Based on published specifications)
- ✅ Siemens G120C & G120 (Based on published specifications)

### Updating Competitor Data

To ensure accuracy, regularly update competitor specifications from:

#### ABB Drives
- Website: https://new.abb.com/drives
- Product pages:
  - ACS480: https://new.abb.com/drives/low-voltage-ac/industrial-drives/acs480
  - ACS580: https://new.abb.com/drives/low-voltage-ac/industrial-drives/acs580
- Download technical catalogs and datasheets

#### Yaskawa Drives
- Website: https://www.yaskawa.com/products/drives
- Product pages:
  - GA500: https://www.yaskawa.com/products/drives/ac-drives/general-purpose/ga500
  - A1000: https://www.yaskawa.com/products/drives/ac-drives/general-purpose/a1000
- Check specification sheets in Downloads section

#### Siemens Drives
- Website: https://www.siemens.com/global/en/products/drives
- Product pages:
  - G120C: Search for "SINAMICS G120C"
  - G120: Search for "SINAMICS G120"
- Access product catalogs (CA01) and manuals

### How to Update Data

1. Open `products-data.js`
2. Locate the competitor product object
3. Update specifications following the existing format
4. Maintain consistency in units and terminology
5. Test the comparison to ensure proper display

Example:
```javascript
"ACS580": {
    name: "ABB ACS580",
    series: "ACS580",
    powerRange: "0.75 - 500 kW",
    specifications: {
        "Mains Supply": {
            "Supply voltage": "208-240 V, 380-480 V, 525-690 V ±10%",
            // ... more specs
        }
    }
}
```

## 🔧 Web Scraping Guide (Advanced)

For automated data collection from competitor websites:

### Recommended Tools

1. **Python with BeautifulSoup/Scrapy**
   ```python
   import requests
   from bs4 import BeautifulSoup
   
   # Example for scraping product specifications
   url = "https://competitor-website.com/product-page"
   response = requests.get(url)
   soup = BeautifulSoup(response.content, 'html.parser')
   
   # Find specification tables
   spec_table = soup.find('table', class_='specifications')
   ```

2. **Browser Extensions**
   - Web Scraper (Chrome extension)
   - Import.io
   - ParseHub

### Important Considerations

⚠️ **Legal and Ethical Guidelines:**
- Always check the website's `robots.txt` file
- Respect Terms of Service
- Don't overload servers with requests
- Use data for comparison purposes only
- Verify accuracy of scraped data manually
- Update attributions properly

### Manual Data Collection Process

1. **Visit Official Product Pages**
   - Go to manufacturer's official website
   - Navigate to specific drive product page
   - Look for "Specifications", "Technical Data", or "Datasheet" sections

2. **Download Official Documents**
   - PDF catalogs
   - Technical manuals
   - Specification sheets

3. **Extract Key Parameters**
   - Focus on specifications listed in the comparison table
   - Note exact values, ranges, and units
   - Pay attention to variants (different voltage classes, power ranges)

4. **Verify Data**
   - Cross-reference multiple sources
   - Check for latest product revisions
   - Contact manufacturer if unclear

5. **Update Database**
   - Edit `products-data.js`
   - Follow existing format
   - Test comparison functionality

## 📁 File Structure

```
Product Comparsion/
├── index.html              # Main dashboard HTML
├── styles.css              # Complete styling
├── script.js               # Comparison logic and interactions
├── products-data.js        # Product database with specifications
└── README.md              # This file
```

## 🎨 Customization

### Branding

Update colors in `styles.css`:
```css
:root {
    --danfoss-red: #E30513;
    --danfoss-dark: #001C38;
    --danfoss-blue: #0066B3;
}
```

### Adding New Products

1. Open `products-data.js`
2. Add new product object following existing structure
3. Update `competitorMapping` if adding new brand
4. Test comparison functionality

### Adding New Specifications

1. Add specification to product objects in `products-data.js`
2. Update comparison logic in `script.js` if needed
3. Adjust styling in `styles.css` if necessary

## 🖨️ Exporting Comparisons

Click the "Export to PDF" button to:
- Open print dialog
- Select "Save as PDF" as printer
- Generate professional comparison document

The print stylesheet automatically hides navigation elements and optimizes layout.

## 🔒 Data Privacy

- All comparisons run locally in the browser
- No data is sent to external servers
- Competitor data is from publicly available sources
- Use responsibly for internal sales purposes

## 🆘 Troubleshooting

### Dropdowns Not Populating
- Check browser console for JavaScript errors
- Ensure `products-data.js` is loaded properly
- Verify file paths are correct

### Comparison Not Displaying
- Ensure all dropdowns have selections
- Check that product keys match between files
- Verify specifications object structure

### Styling Issues
- Clear browser cache
- Check that `styles.css` is loaded
- Verify CSS file path in HTML

## 📱 Browser Compatibility

Tested and working on:
- ✅ Google Chrome (v90+)
- ✅ Microsoft Edge (v90+)
- ✅ Mozilla Firefox (v88+)
- ✅ Safari (v14+)

## 🔄 Maintenance

### Regular Updates

- **Monthly**: Check for new product releases
- **Quarterly**: Update competitor specifications
- **Annually**: Review and update all datasheets

### Version Control

Consider maintaining versions:
```
v1.0 - Initial release (Dec 2025)
v1.1 - Updated competitor data (Jan 2026)
v1.2 - Added new products (Mar 2026)
```

## 📞 Support

For questions or issues:
- Contact Danfoss IT Support
- Email: [Your Team Email]
- Internal Wiki: [Link to Documentation]

## 📄 License

Internal use only - Danfoss confidential

---

**Last Updated**: December 22, 2025
**Version**: 1.0
**Maintained by**: Danfoss Sales Engineering Team
