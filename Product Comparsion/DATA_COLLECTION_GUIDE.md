# Data Collection Guide for Competitor Products

## 🎯 Objective
Collect accurate and up-to-date specifications for competitor drive products to maintain the comparison dashboard.

## 🔍 Step-by-Step Collection Process

### 1. ABB Products

#### ACS480 Specifications
**Official Sources:**
- Main page: https://new.abb.com/drives/low-voltage-ac/industrial-drives/acs480
- Catalog: Search for "ACS480 catalog PDF"
- Technical guide: "ACS480 Hardware Manual"

**Key Specifications to Collect:**
```
Mains Supply:
- Supply voltage: _______________
- Supply frequency: _______________
- Power factor: _______________

Output Data:
- Output voltage: _______________
- Output frequency: _______________
- Ramp times: _______________

I/O Configuration:
- Digital inputs: _______________
- Analogue inputs: _______________
- Digital outputs: _______________
- Analogue outputs: _______________
- Relay outputs: _______________

Additional:
- Cable lengths: _______________
- IP rating: _______________
- Overload capacity: _______________
```

#### ACS580 Specifications
**Official Sources:**
- Main page: https://new.abb.com/drives/low-voltage-ac/industrial-drives/acs580
- Catalog: "ACS580 catalog - General purpose drives"
- Manual: "ACS580 Hardware Manual"

### 2. Yaskawa Products

#### GA500 Specifications
**Official Sources:**
- Main page: https://www.yaskawa.com/products/drives/ac-drives/general-purpose/ga500
- Catalog: "GA500 Technical Manual"
- Quick specs: Product datasheet PDF

**Navigation Path:**
```
Yaskawa.com → Products → Drives → AC Drives → General Purpose → GA500
→ Technical Specifications tab
→ Downloads section (for detailed manual)
```

#### A1000 Specifications
**Official Sources:**
- Main page: https://www.yaskawa.com/products/drives/ac-drives/general-purpose/a1000
- Manual: "A1000 Technical Manual"

### 3. Siemens Products

#### G120C Specifications
**Official Sources:**
- Product page: https://www.siemens.com (search "SINAMICS G120C")
- Catalog: "SINAMICS G120C Catalog D31.1"
- Manual: "SINAMICS G120C Operating Instructions"

**Navigation Path:**
```
Siemens.com → Products → Motion Control → Drive technology
→ Low voltage frequency converters → SINAMICS G120C
→ Technical data
```

#### G120 Specifications
**Official Sources:**
- Product page: Search "SINAMICS G120"
- Catalog: "SINAMICS G120 Catalog D31.1"

## 📋 Data Collection Template

Use this template to organize collected data:

```javascript
{
    name: "[Product Full Name]",
    series: "[Series Code]",
    powerRange: "[Min - Max kW]",
    specifications: {
        "Mains Supply": {
            "Supply voltage": "",
            "Supply frequency": "",
            "True Power Factor (λ)": "",
            "Displacement Power Factor (cos φ) near unity": "",
            "Switching on input supply": ""
        },
        "Output Data": {
            "Output voltage": "",
            "Output frequency": "",
            "Switching on output": "",
            "Ramp times": ""
        },
        "Digital Inputs": {
            "Programmable digital inputs": "",
            "Logic": "",
            "Voltage level": ""
        },
        "Analogue Input": {
            "Analogue inputs": "",
            "Modes": "",
            "Voltage level": "",
            "Current level": ""
        },
        "Pulse/Encoder Inputs": {
            "Programmable pulse/encoder inputs": "",
            "Voltage level": ""
        },
        "Digital Output": {
            "Programmable digital/pulse outputs": "",
            "Voltage level at digital/frequency output": ""
        },
        "Analogue Output": {
            "Programmable analogue outputs": "",
            "Current range": ""
        },
        "Relay Outputs": {
            "Programmable relay outputs": ""
        },
        "Cable Lengths": {
            "Max. motor cable lengths": ""
        },
        "Additional Features": {
            "Built-in PID controller": "",
            "IP Rating": "",
            "Overload capacity": "",
            "EMC compliance": "",
            "Safety certifications": "",
            "Energy optimization": ""
        }
    }
}
```

## 🌐 Web Scraping Scripts (Optional)

### Python Script Example

```python
import requests
from bs4 import BeautifulSoup
import json

def scrape_abb_specs(product_url):
    """
    Scrape ABB product specifications
    Note: Check robots.txt and terms of service first
    """
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    
    try:
        response = requests.get(product_url, headers=headers)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find specification tables (adjust selectors based on actual HTML)
        specs = {}
        spec_tables = soup.find_all('table', class_='specifications')
        
        for table in spec_tables:
            rows = table.find_all('tr')
            for row in rows:
                cols = row.find_all('td')
                if len(cols) >= 2:
                    key = cols[0].text.strip()
                    value = cols[1].text.strip()
                    specs[key] = value
        
        return specs
    
    except Exception as e:
        print(f"Error scraping: {e}")
        return None

# Usage
# specs = scrape_abb_specs('https://new.abb.com/drives/...')
# print(json.dumps(specs, indent=2))
```

### JavaScript Bookmarklet

```javascript
javascript:(function(){
    // Quick extraction of visible specifications
    let specs = {};
    document.querySelectorAll('table.specs tr').forEach(row => {
        let cells = row.querySelectorAll('td');
        if(cells.length >= 2) {
            specs[cells[0].innerText] = cells[1].innerText;
        }
    });
    console.log(JSON.stringify(specs, null, 2));
    alert('Check console for specifications');
})();
```

## ✅ Verification Checklist

Before updating the database, verify:

- [ ] Data is from official manufacturer source
- [ ] Product model matches exactly
- [ ] Power range is specified
- [ ] Voltage classes are correct
- [ ] All units are consistent (V, Hz, kW, mA, etc.)
- [ ] Optional features are noted
- [ ] Latest product revision is referenced
- [ ] Data collection date is recorded

## 📝 Documentation Requirements

When updating data, document:

1. **Source URL**: Where data was collected
2. **Date**: When data was collected
3. **Version**: Product catalog/manual version
4. **Collector**: Who collected the data
5. **Notes**: Any special considerations

Example:
```
Product: ABB ACS580
Source: https://new.abb.com/drives/low-voltage-ac/industrial-drives/acs580
Catalog: ACS580 Hardware Manual Rev. J (2024)
Date Collected: December 22, 2025
Collected by: [Your Name]
Notes: Specifications for 380-480V models, standard I/O configuration
```

## 🔄 Update Frequency

**Recommended Schedule:**

- **Weekly**: Check for product announcements
- **Monthly**: Review one manufacturer's specifications
- **Quarterly**: Complete review of all competitors
- **Annually**: Full audit and verification

## 🚨 Important Notes

### Legal Compliance
- ✅ DO: Use publicly available information
- ✅ DO: Reference official sources
- ✅ DO: Cite manufacturer websites
- ❌ DON'T: Copy copyrighted content verbatim
- ❌ DON'T: Use confidential information
- ❌ DON'T: Misrepresent competitor products

### Data Accuracy
- Always verify critical specifications
- Cross-reference multiple sources when possible
- Note variants and options clearly
- Contact manufacturers for clarification if needed

### Ethical Considerations
- Be fair and accurate in comparisons
- Don't cherry-pick data to favor Danfoss
- Acknowledge competitor strengths
- Update promptly when errors are found

## 🛠️ Tools and Resources

### Recommended Tools
1. **Browser**: Chrome or Firefox with DevTools
2. **PDF Reader**: Adobe Acrobat or Foxit (for highlighting/extracting)
3. **Spreadsheet**: Excel or Google Sheets (for organizing)
4. **Text Editor**: VS Code or Notepad++ (for JSON editing)

### Helpful Browser Extensions
- Web Scraper
- Table Capture
- JSON Formatter
- SingleFile (for archiving pages)

### API Options (If Available)
Some manufacturers may offer API access:
- ABB: Check ABB Ability™ platform
- Siemens: Siemens Industry Online Support
- Yaskawa: Contact for partner API access

## 📞 Manufacturer Contact Points

If you need clarification:

**ABB:**
- Technical Support: https://new.abb.com/contact-centers
- Email: customer.support@abb.com

**Yaskawa:**
- Technical Support: https://www.yaskawa.com/support
- Phone: [Regional number]

**Siemens:**
- Technical Support: https://support.industry.siemens.com
- Online portal: Siemens Industry Online Support

## 💾 Backup and Version Control

Before making updates:
1. Backup current `products-data.js`
2. Note version number
3. Document changes made
4. Test thoroughly before deployment

---

**Remember**: Accurate data is crucial for maintaining trust with sales teams and customers. When in doubt, verify!
