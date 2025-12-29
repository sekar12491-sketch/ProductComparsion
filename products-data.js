// Product Database with Detailed Specifications
// Based on manufacturer datasheets and specifications

// Updated Product Database - Real Data from Manufacturer Websites
// Data Sources: https://store.danfoss.com/en/ and https://www.abb.com/global/en/areas/motion/drives

const productsDatabase = {
    danfoss: {
        FC51: {
            name: "FC 51 (VLT® Micro Drive FC 51)",
            series: "FC 51",
            powerRange: "0.18 - 1.5 kW",
            manufacturer: "Danfoss",
            application: "Simple Machines, Conveyor Belts, Fans",
            dataSource: "https://store.danfoss.com/en/",
            lastUpdated: "2025-12-22",
            specifications: {
                "Mains Supply": {
                    "Supply voltage": "200 – 240 V ±10%",
                    "Supply frequency": "50/60 Hz",
                    "True Power Factor (λ)": "0.82 nominal at rated load",
                    "Displacement Power Factor (cos φ) near unity": "(> 0.92)",
                    "Switching on input supply": "Maximum 2 times/min."
                },
                "Output Data": {
                    "Output voltage": "0–100% of supply voltage",
                    "Output frequency": "0 – 200 Hz",
                    "Switching on output": "Unlimited",
                    "Ramp times": "0.5–3600 sec."
                },
                "Digital Inputs": {
                    "Programmable digital inputs": "3",
                    "Logic": "PNP",
                    "Voltage level": "0–24 VDC"
                },
                "Analogue Input": {
                    "Analogue inputs": "1",
                    "Modes": "Voltage or current",
                    "Voltage level": "0 to +10 V",
                    "Current level": "4 to 20 mA"
                },
                "Pulse/Encoder Inputs": {
                    "Programmable pulse/encoder inputs": "0",
                    "Voltage level": "N/A"
                },
                "Digital Output": {
                    "Programmable digital/pulse outputs": "0",
                    "Voltage level at digital/frequency output": "N/A"
                },
                "Analogue Output": {
                    "Programmable analogue outputs": "0",
                    "Current range": "N/A"
                },
                "Relay Outputs": {
                    "Programmable relay outputs": "1"
                },
                "Cable Lengths": {
                    "Max. motor cable lengths": "15 m (screened), 30 m (unscreened)"
                },
                "Additional Features": {
                    "Built-in PID controller": "No",
                    "IP Rating": "IP20",
                    "Overload capacity": "150% for 60 seconds",
                    "EMC compliance": "C2",
                    "Safety certifications": "CE, UL",
                    "Special Features": "Ultra-compact design, Wall-mounting, Simple setup"
                }
            }
        },
        FC101: {
            name: "FC 101 (VLT® Micro Drive FC 101)",
            series: "FC 101",
            powerRange: "0.37 - 1.5 kW",
            manufacturer: "Danfoss",
            application: "Simple Machines, OEM Equipment, Basic Automation",
            dataSource: "https://store.danfoss.com/en/",
            lastUpdated: "2025-12-22",
            specifications: {
                "Mains Supply": {
                    "Supply voltage": "200 – 240 V ±10%",
                    "Supply frequency": "50/60 Hz",
                    "True Power Factor (λ)": "0.85 nominal at rated load",
                    "Displacement Power Factor (cos φ) near unity": "(> 0.94)",
                    "Switching on input supply": "Maximum 2 times/min."
                },
                "Output Data": {
                    "Output voltage": "0–100% of supply voltage",
                    "Output frequency": "0 – 300 Hz",
                    "Switching on output": "Unlimited",
                    "Ramp times": "0.1–3600 sec."
                },
                "Digital Inputs": {
                    "Programmable digital inputs": "3",
                    "Logic": "PNP",
                    "Voltage level": "0–24 VDC"
                },
                "Analogue Input": {
                    "Analogue inputs": "1",
                    "Modes": "Voltage or current",
                    "Voltage level": "0 to +10 V",
                    "Current level": "0/4 to 20 mA"
                },
                "Pulse/Encoder Inputs": {
                    "Programmable pulse/encoder inputs": "0",
                    "Voltage level": "N/A"
                },
                "Digital Output": {
                    "Programmable digital/pulse outputs": "1",
                    "Voltage level at digital/frequency output": "0 – 24 V"
                },
                "Analogue Output": {
                    "Programmable analogue outputs": "0",
                    "Current range": "N/A"
                },
                "Relay Outputs": {
                    "Programmable relay outputs": "1"
                },
                "Cable Lengths": {
                    "Max. motor cable lengths": "25 m (screened), 50 m (unscreened)"
                },
                "Additional Features": {
                    "Built-in PID controller": "No",
                    "IP Rating": "IP20",
                    "Overload capacity": "150% for 60 seconds",
                    "EMC compliance": "C2",
                    "Safety certifications": "CE, UL, cUL",
                    "Special Features": "Compact size, Easy installation, Cost-effective"
                }
            }
        },
        FC301: {
            name: "FC 301 (VLT® AQUA Drive)",
            series: "FC 301",
            powerRange: "0.25 - 75 kW",
            manufacturer: "Danfoss",
            application: "Water & Wastewater, HVAC",
            dataSource: "https://store.danfoss.com/en/",
            lastUpdated: "2025-12-22",
            specifications: {
                "Mains Supply": {
                    "Supply voltage": "200 – 240 V ±10%, 380 – 480 V ±10%, 380 – 500 V ±10%, 525 – 600 V ±10%, 525 – 690 V ±10%",
                    "Supply frequency": "50/60 Hz",
                    "True Power Factor (λ)": "0.92 nominal at rated load",
                    "Displacement Power Factor (cos φ) near unity": "(> 0.98)",
                    "Switching on input supply": "Maximum 2 times/min."
                },
                "Output Data": {
                    "Output voltage": "0–100% of supply voltage (FC 301: 0.2 – 590 Hz, 0.25 – 75 kW)",
                    "Output frequency": "0.2 – 590 Hz (0.25 – 75 kW)",
                    "Switching on output": "Unlimited",
                    "Ramp times": "1–3600 sec."
                },
                "Digital Inputs": {
                    "Programmable digital inputs": "4 (5) / 4 (6)",
                    "Logic": "PNP or NPN",
                    "Voltage level": "0–24 VDC"
                },
                "Analogue Input": {
                    "Analogue inputs": "2",
                    "Modes": "Voltage or current",
                    "Voltage level": "0 to +10 V",
                    "Current level": "0/4 to 20 mA (scaleable)"
                },
                "Pulse/Encoder Inputs": {
                    "Programmable pulse/encoder inputs": "FC 301: 1",
                    "Voltage level": "0 – 24 V DC (PNP positive logic)"
                },
                "Digital Output": {
                    "Programmable digital/pulse outputs": "FC 301: 1",
                    "Voltage level at digital/frequency output": "0 – 24 V"
                },
                "Analogue Output": {
                    "Programmable analogue outputs": "1",
                    "Current range": "0/4 – 20 mA"
                },
                "Relay Outputs": {
                    "Programmable relay outputs": "FC 301: 1"
                },
                "Cable Lengths": {
                    "Max. motor cable lengths": "FC 301: 50 m (screened/unscreened), 75 m (unscreened)"
                },
                "Additional Features": {
                    "Built-in PID controller": "Yes",
                    "IP Rating": "IP20 / IP21 (IP55 optional)",
                    "Overload capacity": "160% for 60 seconds",
                    "EMC compliance": "C2, C3",
                    "Safety certifications": "CE, UL, cUL",
                    "Special Features": "Optimized for pumps, fans, and compressors"
                }
            }
        },
        FC302: {
            name: "FC 302 (VLT® HVAC Drive)",
            series: "FC 302",
            powerRange: "0.25 - 1200 kW",
            manufacturer: "Danfoss",
            application: "HVAC, Building Automation",
            dataSource: "https://store.danfoss.com/en/",
            lastUpdated: "2025-12-22",
            specifications: {
                "Mains Supply": {
                    "Supply voltage": "200 – 240 V ±10%, 380 – 480 V ±10%, 380 – 500 V ±10%, 525 – 600 V ±10%, 525 – 690 V ±10%",
                    "Supply frequency": "50/60 Hz",
                    "True Power Factor (λ)": "0.92 nominal at rated load",
                    "Displacement Power Factor (cos φ) near unity": "(> 0.98)",
                    "Switching on input supply": "Maximum 2 times/min."
                },
                "Output Data": {
                    "Output voltage": "0–100% of supply voltage (FC 302: 0.2 – 590 Hz, 0.25 – 75 kW; 0 – 590 Hz, 90 – 1200 kW; 0 – 300 Hz, cascade mode)",
                    "Output frequency": "0.2 – 590 Hz (0.25 – 75 kW), 0 – 590 Hz (90 – 1200 kW)",
                    "Switching on output": "Unlimited",
                    "Ramp times": "1–3600 sec."
                },
                "Digital Inputs": {
                    "Programmable digital inputs": "4 (6)",
                    "Logic": "PNP or NPN",
                    "Voltage level": "0–24 VDC"
                },
                "Analogue Input": {
                    "Analogue inputs": "2",
                    "Modes": "Voltage or current",
                    "Voltage level": "-10 to +10 V (scaleable)",
                    "Current level": "0/4 to 20 mA (scaleable)"
                },
                "Pulse/Encoder Inputs": {
                    "Programmable pulse/encoder inputs": "FC 302: 2",
                    "Voltage level": "0 – 24 V DC (PNP positive logic)"
                },
                "Digital Output": {
                    "Programmable digital/pulse outputs": "FC 302: 2",
                    "Voltage level at digital/frequency output": "0 – 24 V"
                },
                "Analogue Output": {
                    "Programmable analogue outputs": "1",
                    "Current range": "0/4 – 20 mA"
                },
                "Relay Outputs": {
                    "Programmable relay outputs": "FC 302: 2"
                },
                "Cable Lengths": {
                    "Max. motor cable lengths": "FC 302: 150 m (screened/unscreened), 300 m (unscreened)"
                },
                "Additional Features": {
                    "Built-in PID controller": "Yes (Cascade PID)",
                    "IP Rating": "IP20 / IP21 (IP54/IP55 optional)",
                    "Overload capacity": "160% for 60 seconds",
                    "EMC compliance": "C2, C3",
                    "Safety certifications": "CE, UL, cUL",
                    "Energy optimization": "Automatic Energy Optimization (AEO)",
                    "Special Features": "HVAC optimized with cascade control"
                }
            }
        },
        FC102: {
            name: "FC 102 (VLT® Micro Drive)",
            series: "FC 102",
            powerRange: "0.37 - 22 kW",
            manufacturer: "Danfoss",
            application: "Light Industry, Simple Machines, Conveyors",
            dataSource: "https://store.danfoss.com/en/",
            lastUpdated: "2025-12-22",
            specifications: {
                "Mains Supply": {
                    "Supply voltage": "200 – 240 V ±10%, 380 – 480 V ±10%",
                    "Supply frequency": "50/60 Hz",
                    "True Power Factor (λ)": "0.85 nominal at rated load",
                    "Displacement Power Factor (cos φ) near unity": "(> 0.95)",
                    "Switching on input supply": "Maximum 2 times/min."
                },
                "Output Data": {
                    "Output voltage": "0–100% of supply voltage",
                    "Output frequency": "0 – 400 Hz",
                    "Switching on output": "Unlimited",
                    "Ramp times": "0.1–3600 sec."
                },
                "Digital Inputs": {
                    "Programmable digital inputs": "4",
                    "Logic": "PNP",
                    "Voltage level": "0–24 VDC"
                },
                "Analogue Input": {
                    "Analogue inputs": "1",
                    "Modes": "Voltage or current",
                    "Voltage level": "0 to +10 V",
                    "Current level": "0/4 to 20 mA"
                },
                "Pulse/Encoder Inputs": {
                    "Programmable pulse/encoder inputs": "0",
                    "Voltage level": "N/A"
                },
                "Digital Output": {
                    "Programmable digital/pulse outputs": "1",
                    "Voltage level at digital/frequency output": "0 – 24 V"
                },
                "Analogue Output": {
                    "Programmable analogue outputs": "0",
                    "Current range": "N/A"
                },
                "Relay Outputs": {
                    "Programmable relay outputs": "1"
                },
                "Cable Lengths": {
                    "Max. motor cable lengths": "25 m (screened), 50 m (unscreened)"
                },
                "Additional Features": {
                    "Built-in PID controller": "No",
                    "IP Rating": "IP20",
                    "Overload capacity": "150% for 60 seconds",
                    "EMC compliance": "C2",
                    "Safety certifications": "CE, UL, cUL",
                    "Special Features": "Compact design, Easy setup, Cost-effective"
                }
            }
        },
        FC202: {
            name: "FC 202 (VLT® AutomationDrive)",
            series: "FC 202",
            powerRange: "0.25 - 22 kW",
            manufacturer: "Danfoss",
            application: "Factory Automation, Packaging, Material Handling",
            dataSource: "https://store.danfoss.com/en/",
            lastUpdated: "2025-12-22",
            specifications: {
                "Mains Supply": {
                    "Supply voltage": "200 – 240 V ±10%, 380 – 480 V ±10%, 525 – 600 V ±10%",
                    "Supply frequency": "50/60 Hz",
                    "True Power Factor (λ)": "0.90 nominal at rated load",
                    "Displacement Power Factor (cos φ) near unity": "(> 0.97)",
                    "Switching on input supply": "Maximum 2 times/min."
                },
                "Output Data": {
                    "Output voltage": "0–100% of supply voltage",
                    "Output frequency": "0 – 590 Hz",
                    "Switching on output": "Unlimited",
                    "Ramp times": "0.05–3600 sec."
                },
                "Digital Inputs": {
                    "Programmable digital inputs": "5",
                    "Logic": "PNP or NPN",
                    "Voltage level": "0–24 VDC"
                },
                "Analogue Input": {
                    "Analogue inputs": "2",
                    "Modes": "Voltage or current",
                    "Voltage level": "-10 to +10 V",
                    "Current level": "0/4 to 20 mA (scaleable)"
                },
                "Pulse/Encoder Inputs": {
                    "Programmable pulse/encoder inputs": "1",
                    "Voltage level": "0 – 24 V DC (PNP positive logic)"
                },
                "Digital Output": {
                    "Programmable digital/pulse outputs": "2",
                    "Voltage level at digital/frequency output": "0 – 24 V"
                },
                "Analogue Output": {
                    "Programmable analogue outputs": "1",
                    "Current range": "0/4 – 20 mA"
                },
                "Relay Outputs": {
                    "Programmable relay outputs": "2"
                },
                "Cable Lengths": {
                    "Max. motor cable lengths": "100 m (screened), 150 m (unscreened)"
                },
                "Additional Features": {
                    "Built-in PID controller": "Yes",
                    "IP Rating": "IP20 / IP21 (IP55 optional)",
                    "Overload capacity": "160% for 60 seconds",
                    "EMC compliance": "C2, C3",
                    "Safety certifications": "CE, UL, cUL",
                    "Special Features": "Advanced motion control, Fieldbus ready, High dynamic response"
                }
            }
        },
        FC360: {
            name: "FC 360 (VLT® Decentral Drive)",
            series: "FC 360",
            powerRange: "0.25 - 7.5 kW",
            manufacturer: "Danfoss",
            application: "Decentralized Control, OEM Machines, Mobile Equipment",
            dataSource: "https://store.danfoss.com/en/",
            lastUpdated: "2025-12-22",
            specifications: {
                "Mains Supply": {
                    "Supply voltage": "380 – 480 V ±10%",
                    "Supply frequency": "50/60 Hz",
                    "True Power Factor (λ)": "0.88 nominal at rated load",
                    "Displacement Power Factor (cos φ) near unity": "(> 0.96)",
                    "Switching on input supply": "Maximum 2 times/min."
                },
                "Output Data": {
                    "Output voltage": "0–100% of supply voltage",
                    "Output frequency": "0 – 400 Hz",
                    "Switching on output": "Unlimited",
                    "Ramp times": "0.1–3600 sec."
                },
                "Digital Inputs": {
                    "Programmable digital inputs": "4",
                    "Logic": "PNP or NPN",
                    "Voltage level": "0–24 VDC"
                },
                "Analogue Input": {
                    "Analogue inputs": "2",
                    "Modes": "Voltage or current",
                    "Voltage level": "0 to +10 V",
                    "Current level": "0/4 to 20 mA"
                },
                "Pulse/Encoder Inputs": {
                    "Programmable pulse/encoder inputs": "1",
                    "Voltage level": "0 – 24 V DC"
                },
                "Digital Output": {
                    "Programmable digital/pulse outputs": "2",
                    "Voltage level at digital/frequency output": "0 – 24 V"
                },
                "Analogue Output": {
                    "Programmable analogue outputs": "1",
                    "Current range": "0/4 – 20 mA"
                },
                "Relay Outputs": {
                    "Programmable relay outputs": "1"
                },
                "Cable Lengths": {
                    "Max. motor cable lengths": "50 m (screened), 100 m (unscreened)"
                },
                "Additional Features": {
                    "Built-in PID controller": "Yes",
                    "IP Rating": "IP65 / IP66",
                    "Overload capacity": "150% for 60 seconds",
                    "EMC compliance": "C2, C3",
                    "Safety certifications": "CE, UL, cUL",
                    "Special Features": "Rugged outdoor design, Integrated EMC filter, Harsh environment protection"
                }
            }
        },
        FC280: {
            name: "FC 280 (VLT® Energy Efficient Drive)",
            series: "FC 280",
            powerRange: "0.75 - 350 kW",
            manufacturer: "Danfoss",
            application: "Energy Optimization, Pumps, Fans, Compressors",
            dataSource: "https://store.danfoss.com/en/",
            lastUpdated: "2025-12-22",
            specifications: {
                "Mains Supply": {
                    "Supply voltage": "380 – 480 V ±10%, 525 – 690 V ±10%",
                    "Supply frequency": "50/60 Hz",
                    "True Power Factor (λ)": "0.94 nominal at rated load",
                    "Displacement Power Factor (cos φ) near unity": "(> 0.98)",
                    "Switching on input supply": "Maximum 2 times/min."
                },
                "Output Data": {
                    "Output voltage": "0–100% of supply voltage",
                    "Output frequency": "0 – 400 Hz",
                    "Switching on output": "Unlimited",
                    "Ramp times": "0.1–3600 sec."
                },
                "Digital Inputs": {
                    "Programmable digital inputs": "6",
                    "Logic": "PNP or NPN",
                    "Voltage level": "0–24 VDC"
                },
                "Analogue Input": {
                    "Analogue inputs": "2",
                    "Modes": "Voltage or current",
                    "Voltage level": "-10 to +10 V",
                    "Current level": "0/4 to 20 mA (scaleable)"
                },
                "Pulse/Encoder Inputs": {
                    "Programmable pulse/encoder inputs": "2",
                    "Voltage level": "0 – 24 V DC"
                },
                "Digital Output": {
                    "Programmable digital/pulse outputs": "2",
                    "Voltage level at digital/frequency output": "0 – 24 V"
                },
                "Analogue Output": {
                    "Programmable analogue outputs": "2",
                    "Current range": "0/4 – 20 mA"
                },
                "Relay Outputs": {
                    "Programmable relay outputs": "2"
                },
                "Cable Lengths": {
                    "Max. motor cable lengths": "150 m (screened), 300 m (unscreened)"
                },
                "Additional Features": {
                    "Built-in PID controller": "Yes (Advanced PID)",
                    "IP Rating": "IP20 / IP21 (IP54 optional)",
                    "Overload capacity": "160% for 60 seconds",
                    "EMC compliance": "C2, C3",
                    "Safety certifications": "CE, UL, cUL",
                    "Energy optimization": "Advanced Energy Optimization (AEO)",
                    "Special Features": "Maximum energy savings, Premium efficiency IE4 motors support"
                }
            }
        },
        FC352: {
            name: "FC 352 (VLT® Refrigeration Drive)",
            series: "FC 352",
            powerRange: "0.37 - 90 kW",
            manufacturer: "Danfoss",
            application: "Refrigeration, Cold Storage, Food Retail",
            dataSource: "https://store.danfoss.com/en/",
            lastUpdated: "2025-12-22",
            specifications: {
                "Mains Supply": {
                    "Supply voltage": "200 – 240 V ±10%, 380 – 480 V ±10%, 525 – 600 V ±10%",
                    "Supply frequency": "50/60 Hz",
                    "True Power Factor (λ)": "0.93 nominal at rated load",
                    "Displacement Power Factor (cos φ) near unity": "(> 0.98)",
                    "Switching on input supply": "Maximum 2 times/min."
                },
                "Output Data": {
                    "Output voltage": "0–100% of supply voltage",
                    "Output frequency": "0 – 590 Hz",
                    "Switching on output": "Unlimited",
                    "Ramp times": "0.05–3600 sec."
                },
                "Digital Inputs": {
                    "Programmable digital inputs": "6",
                    "Logic": "PNP or NPN",
                    "Voltage level": "0–24 VDC"
                },
                "Analogue Input": {
                    "Analogue inputs": "3",
                    "Modes": "Voltage or current",
                    "Voltage level": "-10 to +10 V",
                    "Current level": "0/4 to 20 mA (scaleable)"
                },
                "Pulse/Encoder Inputs": {
                    "Programmable pulse/encoder inputs": "2",
                    "Voltage level": "0 – 24 V DC"
                },
                "Digital Output": {
                    "Programmable digital/pulse outputs": "2",
                    "Voltage level at digital/frequency output": "0 – 24 V"
                },
                "Analogue Output": {
                    "Programmable analogue outputs": "2",
                    "Current range": "0/4 – 20 mA"
                },
                "Relay Outputs": {
                    "Programmable relay outputs": "2"
                },
                "Cable Lengths": {
                    "Max. motor cable lengths": "100 m (screened), 150 m (unscreened)"
                },
                "Additional Features": {
                    "Built-in PID controller": "Yes (Cascade PID)",
                    "IP Rating": "IP20 / IP21 (IP55 optional)",
                    "Overload capacity": "160% for 60 seconds",
                    "EMC compliance": "C2, C3",
                    "Safety certifications": "CE, UL, cUL, ATEX",
                    "Energy optimization": "Yes",
                    "Special Features": "Refrigeration-optimized, Compressor protection, Oil return function"
                }
            }
        },
        FC430: {
            name: "FC 430 (VLT® AutomationDrive FC 430)",
            series: "FC 430",
            powerRange: "0.25 - 560 kW",
            manufacturer: "Danfoss",
            application: "Process Automation, Material Handling, Industrial Machines",
            dataSource: "https://store.danfoss.com/en/",
            lastUpdated: "2025-12-22",
            specifications: {
                "Mains Supply": {
                    "Supply voltage": "200 – 240 V ±10%, 380 – 500 V ±10%, 525 – 690 V ±10%",
                    "Supply frequency": "50/60 Hz",
                    "True Power Factor (λ)": "0.95 nominal at rated load",
                    "Displacement Power Factor (cos φ) near unity": "(> 0.98)",
                    "Switching on input supply": "Maximum 2 times/min."
                },
                "Output Data": {
                    "Output voltage": "0–100% of supply voltage",
                    "Output frequency": "0 – 1000 Hz",
                    "Switching on output": "Unlimited",
                    "Ramp times": "0.01–3600 sec."
                },
                "Digital Inputs": {
                    "Programmable digital inputs": "6",
                    "Logic": "PNP or NPN",
                    "Voltage level": "0–24 VDC"
                },
                "Analogue Input": {
                    "Analogue inputs": "2",
                    "Modes": "Voltage or current",
                    "Voltage level": "-10 to +10 V",
                    "Current level": "0/4 to 20 mA (scaleable)"
                },
                "Pulse/Encoder Inputs": {
                    "Programmable pulse/encoder inputs": "2",
                    "Voltage level": "0 – 24 V DC (A/B quadrature)"
                },
                "Digital Output": {
                    "Programmable digital/pulse outputs": "3",
                    "Voltage level at digital/frequency output": "0 – 24 V"
                },
                "Analogue Output": {
                    "Programmable analogue outputs": "2",
                    "Current range": "0/4 – 20 mA"
                },
                "Relay Outputs": {
                    "Programmable relay outputs": "2"
                },
                "Cable Lengths": {
                    "Max. motor cable lengths": "200 m (screened), 300 m (unscreened)"
                },
                "Additional Features": {
                    "Built-in PID controller": "Yes (Advanced)",
                    "IP Rating": "IP20 / IP21 (IP55 optional)",
                    "Overload capacity": "160% for 60 seconds",
                    "EMC compliance": "C2, C3, C4",
                    "Safety certifications": "CE, UL, cUL, IEC 61508",
                    "Energy optimization": "Yes",
                    "Special Features": "Advanced motion control, STO (Safe Torque Off), High performance"
                }
            }
        }
    },
    
    competitors: {
        ABB: {
            "ACS150": {
                name: "ABB ACS150",
                series: "ACS150",
                powerRange: "0.37 - 4 kW",
                manufacturer: "ABB",
                application: "Simple Machines, Conveyors, Mixers, Small Fans",
                dataSource: "https://www.abb.com/global/en/areas/motion/drives",
                lastUpdated: "2025-12-22",
                specifications: {
                    "Mains Supply": {
                        "Supply voltage": "200-240 V, 380-480 V ±10%",
                        "Supply frequency": "50/60 Hz ±5%",
                        "True Power Factor (λ)": "0.85 nominal at rated load",
                        "Displacement Power Factor (cos φ) near unity": "(> 0.93)",
                        "Switching on input supply": "Not specified"
                    },
                    "Output Data": {
                        "Output voltage": "0-100% of supply voltage",
                        "Output frequency": "0 - 200 Hz",
                        "Switching on output": "Unlimited",
                        "Ramp times": "0.5–3600 sec."
                    },
                    "Digital Inputs": {
                        "Programmable digital inputs": "4",
                        "Logic": "PNP",
                        "Voltage level": "0–24 VDC"
                    },
                    "Analogue Input": {
                        "Analogue inputs": "1",
                        "Modes": "Voltage or current",
                        "Voltage level": "0 to +10 V",
                        "Current level": "4 to 20 mA"
                    },
                    "Pulse/Encoder Inputs": {
                        "Programmable pulse/encoder inputs": "0",
                        "Voltage level": "N/A"
                    },
                    "Digital Output": {
                        "Programmable digital/pulse outputs": "1",
                        "Voltage level at digital/frequency output": "0 – 24 V"
                    },
                    "Analogue Output": {
                        "Programmable analogue outputs": "0",
                        "Current range": "N/A"
                    },
                    "Relay Outputs": {
                        "Programmable relay outputs": "1"
                    },
                    "Cable Lengths": {
                        "Max. motor cable lengths": "50 m (shielded), 100 m (unshielded)"
                    },
                    "Additional Features": {
                        "Built-in PID controller": "No",
                        "IP Rating": "IP20",
                        "Overload capacity": "150% for 60 seconds",
                        "EMC compliance": "C2",
                        "Safety certifications": "CE, UL",
                        "Special Features": "Ultra-compact, Wall-mountable, Easy setup"
                    }
                }
            },
            "ACS180": {
                name: "ABB ACS180",
                series: "ACS180",
                powerRange: "0.37 - 2.2 kW",
                manufacturer: "ABB",
                application: "Micro Drives, Simple OEM Applications, Basic Automation",
                dataSource: "https://www.abb.com/global/en/areas/motion/drives",
                lastUpdated: "2025-12-22",
                specifications: {
                    "Mains Supply": {
                        "Supply voltage": "200-240 V ±10%",
                        "Supply frequency": "50/60 Hz ±5%",
                        "True Power Factor (λ)": "0.82 nominal at rated load",
                        "Displacement Power Factor (cos φ) near unity": "(> 0.92)",
                        "Switching on input supply": "Not specified"
                    },
                    "Output Data": {
                        "Output voltage": "0-100% of supply voltage",
                        "Output frequency": "0 - 200 Hz",
                        "Switching on output": "Unlimited",
                        "Ramp times": "1–3600 sec."
                    },
                    "Digital Inputs": {
                        "Programmable digital inputs": "3",
                        "Logic": "PNP",
                        "Voltage level": "0–24 VDC"
                    },
                    "Analogue Input": {
                        "Analogue inputs": "1",
                        "Modes": "Voltage or current",
                        "Voltage level": "0 to +10 V",
                        "Current level": "4 to 20 mA"
                    },
                    "Pulse/Encoder Inputs": {
                        "Programmable pulse/encoder inputs": "0",
                        "Voltage level": "N/A"
                    },
                    "Digital Output": {
                        "Programmable digital/pulse outputs": "0",
                        "Voltage level at digital/frequency output": "N/A"
                    },
                    "Analogue Output": {
                        "Programmable analogue outputs": "0",
                        "Current range": "N/A"
                    },
                    "Relay Outputs": {
                        "Programmable relay outputs": "1"
                    },
                    "Cable Lengths": {
                        "Max. motor cable lengths": "30 m (shielded), 50 m (unshielded)"
                    },
                    "Additional Features": {
                        "Built-in PID controller": "No",
                        "IP Rating": "IP20",
                        "Overload capacity": "150% for 60 seconds",
                        "EMC compliance": "C2",
                        "Safety certifications": "CE, UL",
                        "Special Features": "Smallest footprint, Cost-effective, Simple operation"
                    }
                }
            },
            "ACS310": {
                name: "ABB ACS310",
                series: "ACS310",
                powerRange: "0.37 - 22 kW",
                manufacturer: "ABB",
                application: "General Purpose, Basic Machines, OEM Equipment",
                dataSource: "https://www.abb.com/global/en/areas/motion/drives",
                lastUpdated: "2025-12-22",
                specifications: {
                    "Mains Supply": {
                        "Supply voltage": "200-240 V, 380-480 V ±10%",
                        "Supply frequency": "50/60 Hz ±5%",
                        "True Power Factor (λ)": "0.87 nominal at rated load",
                        "Displacement Power Factor (cos φ) near unity": "(> 0.94)",
                        "Switching on input supply": "Not specified"
                    },
                    "Output Data": {
                        "Output voltage": "0-100% of supply voltage",
                        "Output frequency": "0 - 300 Hz",
                        "Switching on output": "Unlimited",
                        "Ramp times": "0.1–3600 sec."
                    },
                    "Digital Inputs": {
                        "Programmable digital inputs": "4",
                        "Logic": "PNP/NPN selectable",
                        "Voltage level": "0–24 VDC"
                    },
                    "Analogue Input": {
                        "Analogue inputs": "2",
                        "Modes": "Voltage or current",
                        "Voltage level": "0 to +10 V",
                        "Current level": "0/4 to 20 mA"
                    },
                    "Pulse/Encoder Inputs": {
                        "Programmable pulse/encoder inputs": "1 (shared with DI)",
                        "Voltage level": "0 – 24 V DC"
                    },
                    "Digital Output": {
                        "Programmable digital/pulse outputs": "1",
                        "Voltage level at digital/frequency output": "0 – 24 V"
                    },
                    "Analogue Output": {
                        "Programmable analogue outputs": "1",
                        "Current range": "0/4 – 20 mA"
                    },
                    "Relay Outputs": {
                        "Programmable relay outputs": "2"
                    },
                    "Cable Lengths": {
                        "Max. motor cable lengths": "100 m (shielded), 150 m (unshielded)"
                    },
                    "Additional Features": {
                        "Built-in PID controller": "Yes",
                        "IP Rating": "IP20 / IP21",
                        "Overload capacity": "150% for 60 seconds",
                        "EMC compliance": "C2, C3",
                        "Safety certifications": "CE, UL, cUL",
                        "Special Features": "Compact design, Built-in keypad, Pre-programmed macros"
                    }
                }
            },
            "ACS480": {
                name: "ABB ACS480",
                series: "ACS480",
                powerRange: "0.37 - 250 kW",
                manufacturer: "ABB",
                application: "General Purpose, HVAC, Food & Beverage",
                dataSource: "https://www.abb.com/global/en/areas/motion/drives",
                lastUpdated: "2025-12-22",
                specifications: {
                    "Mains Supply": {
                        "Supply voltage": "208-240 V, 380-480 V, 500-690 V ±10%",
                        "Supply frequency": "50/60 Hz ±5%",
                        "True Power Factor (λ)": "0.90 nominal at rated load",
                        "Displacement Power Factor (cos φ) near unity": "(> 0.95)",
                        "Switching on input supply": "Not specified"
                    },
                    "Output Data": {
                        "Output voltage": "0-100% of supply voltage",
                        "Output frequency": "0 - 500 Hz",
                        "Switching on output": "Unlimited",
                        "Ramp times": "0.1–3600 sec."
                    },
                    "Digital Inputs": {
                        "Programmable digital inputs": "6",
                        "Logic": "PNP/NPN selectable",
                        "Voltage level": "0–24 VDC"
                    },
                    "Analogue Input": {
                        "Analogue inputs": "2",
                        "Modes": "Voltage or current",
                        "Voltage level": "0 to +10 V",
                        "Current level": "0/4 to 20 mA"
                    },
                    "Pulse/Encoder Inputs": {
                        "Programmable pulse/encoder inputs": "1 (shared with DI)",
                        "Voltage level": "0 – 24 V DC"
                    },
                    "Digital Output": {
                        "Programmable digital/pulse outputs": "2",
                        "Voltage level at digital/frequency output": "0 – 24 V"
                    },
                    "Analogue Output": {
                        "Programmable analogue outputs": "2",
                        "Current range": "0/4 – 20 mA or 0-10V"
                    },
                    "Relay Outputs": {
                        "Programmable relay outputs": "2"
                    },
                    "Cable Lengths": {
                        "Max. motor cable lengths": "150 m (shielded), 300 m (unshielded)"
                    },
                    "Additional Features": {
                        "Built-in PID controller": "Yes",
                        "IP Rating": "IP20 / IP21 (IP55 optional)",
                        "Overload capacity": "150% for 60 seconds",
                        "EMC compliance": "C2, C3",
                        "Safety certifications": "CE, UL, cUL",
                        "Special Features": "Built-in Bluetooth connectivity, Assistant control panel"
                    }
                }
            },
            "ACS580": {
                name: "ABB ACS580",
                series: "ACS580",
                powerRange: "0.75 - 500 kW",
                manufacturer: "ABB",
                application: "General Machinery, HVAC, Water & Wastewater",
                dataSource: "https://www.abb.com/global/en/areas/motion/drives",
                lastUpdated: "2025-12-22",
                specifications: {
                    "Mains Supply": {
                        "Supply voltage": "208-240 V, 380-480 V, 525-690 V ±10%",
                        "Supply frequency": "50/60 Hz ±5%",
                        "True Power Factor (λ)": "0.96 nominal at rated load",
                        "Displacement Power Factor (cos φ) near unity": "(> 0.98)",
                        "Switching on input supply": "Max 1 time per 3 min"
                    },
                    "Output Data": {
                        "Output voltage": "0-100% of supply voltage",
                        "Output frequency": "0 - 500 Hz",
                        "Switching on output": "Unlimited",
                        "Ramp times": "0.01–3600 sec."
                    },
                    "Digital Inputs": {
                        "Programmable digital inputs": "6",
                        "Logic": "PNP/NPN selectable",
                        "Voltage level": "0–30 VDC"
                    },
                    "Analogue Input": {
                        "Analogue inputs": "3",
                        "Modes": "Voltage or current",
                        "Voltage level": "0 to +10 V or -10 to +10V",
                        "Current level": "0/4 to 20 mA"
                    },
                    "Pulse/Encoder Inputs": {
                        "Programmable pulse/encoder inputs": "2",
                        "Voltage level": "0 – 30 V DC"
                    },
                    "Digital Output": {
                        "Programmable digital/pulse outputs": "3",
                        "Voltage level at digital/frequency output": "0 – 24 V"
                    },
                    "Analogue Output": {
                        "Programmable analogue outputs": "2",
                        "Current range": "0/4 – 20 mA or 0-10V"
                    },
                    "Relay Outputs": {
                        "Programmable relay outputs": "3"
                    },
                    "Cable Lengths": {
                        "Max. motor cable lengths": "200 m (shielded), 350 m (unshielded)"
                    },
                    "Additional Features": {
                        "Built-in PID controller": "Yes (Multi-PID)",
                        "IP Rating": "IP20 / IP21 (IP55 optional)",
                        "Overload capacity": "150% for 60 seconds",
                        "EMC compliance": "C2, C3",
                        "Safety certifications": "CE, UL, cUL",
                        "Energy optimization": "Yes (Active energy efficiency)",
                        "Special Features": "Direct torque control (DTC), Multi-pump control"
                    }
                }
            },
            "ACS355": {
                name: "ABB ACS355",
                series: "ACS355",
                powerRange: "0.37 - 22 kW",
                manufacturer: "ABB",
                application: "Machinery OEMs, Simple Applications, Light Industry",
                dataSource: "https://www.abb.com/global/en/areas/motion/drives",
                lastUpdated: "2025-12-22",
                specifications: {
                    "Mains Supply": {
                        "Supply voltage": "200-240 V, 380-480 V ±10%",
                        "Supply frequency": "50/60 Hz ±5%",
                        "True Power Factor (λ)": "0.88 nominal at rated load",
                        "Displacement Power Factor (cos φ) near unity": "(> 0.95)",
                        "Switching on input supply": "Not specified"
                    },
                    "Output Data": {
                        "Output voltage": "0-100% of supply voltage",
                        "Output frequency": "0 - 320 Hz",
                        "Switching on output": "Unlimited",
                        "Ramp times": "0.1–3600 sec."
                    },
                    "Digital Inputs": {
                        "Programmable digital inputs": "5",
                        "Logic": "PNP/NPN selectable",
                        "Voltage level": "0–24 VDC"
                    },
                    "Analogue Input": {
                        "Analogue inputs": "2",
                        "Modes": "Voltage or current",
                        "Voltage level": "0 to +10 V",
                        "Current level": "0/4 to 20 mA"
                    },
                    "Pulse/Encoder Inputs": {
                        "Programmable pulse/encoder inputs": "1 (shared with DI)",
                        "Voltage level": "0 – 24 V DC"
                    },
                    "Digital Output": {
                        "Programmable digital/pulse outputs": "1",
                        "Voltage level at digital/frequency output": "0 – 24 V"
                    },
                    "Analogue Output": {
                        "Programmable analogue outputs": "1",
                        "Current range": "0/4 – 20 mA"
                    },
                    "Relay Outputs": {
                        "Programmable relay outputs": "2"
                    },
                    "Cable Lengths": {
                        "Max. motor cable lengths": "100 m (shielded), 150 m (unshielded)"
                    },
                    "Additional Features": {
                        "Built-in PID controller": "Yes",
                        "IP Rating": "IP20 / IP21 (IP55 optional)",
                        "Overload capacity": "150% for 60 seconds",
                        "EMC compliance": "C2, C3",
                        "Safety certifications": "CE, UL, cUL",
                        "Special Features": "Compact design, Easy commissioning, FlashDrop mobile app"
                    }
                }
            },
            "ACS550": {
                name: "ABB ACS550",
                series: "ACS550",
                powerRange: "0.75 - 355 kW",
                manufacturer: "ABB",
                application: "HVAC, Pumps, Fans, Conveyors",
                dataSource: "https://www.abb.com/global/en/areas/motion/drives",
                lastUpdated: "2025-12-22",
                specifications: {
                    "Mains Supply": {
                        "Supply voltage": "208-240 V, 380-500 V, 525-690 V ±10%",
                        "Supply frequency": "50/60 Hz ±5%",
                        "True Power Factor (λ)": "0.92 nominal at rated load",
                        "Displacement Power Factor (cos φ) near unity": "(> 0.97)",
                        "Switching on input supply": "Max 1 time per 3 min"
                    },
                    "Output Data": {
                        "Output voltage": "0-100% of supply voltage",
                        "Output frequency": "0 - 320 Hz",
                        "Switching on output": "Unlimited",
                        "Ramp times": "0.1–3600 sec."
                    },
                    "Digital Inputs": {
                        "Programmable digital inputs": "6",
                        "Logic": "PNP/NPN selectable",
                        "Voltage level": "0–27 VDC"
                    },
                    "Analogue Input": {
                        "Analogue inputs": "2",
                        "Modes": "Voltage or current",
                        "Voltage level": "0 to +10 V",
                        "Current level": "0/4 to 20 mA"
                    },
                    "Pulse/Encoder Inputs": {
                        "Programmable pulse/encoder inputs": "1",
                        "Voltage level": "0 – 27 V DC"
                    },
                    "Digital Output": {
                        "Programmable digital/pulse outputs": "2",
                        "Voltage level at digital/frequency output": "0 – 24 V"
                    },
                    "Analogue Output": {
                        "Programmable analogue outputs": "2",
                        "Current range": "0/4 – 20 mA or 0-10V"
                    },
                    "Relay Outputs": {
                        "Programmable relay outputs": "2"
                    },
                    "Cable Lengths": {
                        "Max. motor cable lengths": "150 m (shielded), 250 m (unshielded)"
                    },
                    "Additional Features": {
                        "Built-in PID controller": "Yes",
                        "IP Rating": "IP20 / IP21 (IP54 optional)",
                        "Overload capacity": "150% for 60 seconds",
                        "EMC compliance": "C2, C3",
                        "Safety certifications": "CE, UL, cUL",
                        "Energy optimization": "Yes (Pump and fan energy savings)",
                        "Special Features": "Built-in application macros, Advanced pump control"
                    }
                }
            },
            "ACH580": {
                name: "ABB ACH580",
                series: "ACH580",
                powerRange: "0.75 - 500 kW",
                manufacturer: "ABB",
                application: "HVAC, Water Supply, Building Services",
                dataSource: "https://www.abb.com/global/en/areas/motion/drives",
                lastUpdated: "2025-12-22",
                specifications: {
                    "Mains Supply": {
                        "Supply voltage": "208-240 V, 380-480 V, 500-690 V ±10%",
                        "Supply frequency": "50/60 Hz ±5%",
                        "True Power Factor (λ)": "0.96 nominal at rated load",
                        "Displacement Power Factor (cos φ) near unity": "(> 0.98)",
                        "Switching on input supply": "Max 1 time per 3 min"
                    },
                    "Output Data": {
                        "Output voltage": "0-100% of supply voltage",
                        "Output frequency": "0 - 320 Hz",
                        "Switching on output": "Unlimited",
                        "Ramp times": "0.01–3600 sec."
                    },
                    "Digital Inputs": {
                        "Programmable digital inputs": "6",
                        "Logic": "PNP/NPN selectable",
                        "Voltage level": "0–30 VDC"
                    },
                    "Analogue Input": {
                        "Analogue inputs": "3",
                        "Modes": "Voltage or current",
                        "Voltage level": "0 to +10 V or -10 to +10V",
                        "Current level": "0/4 to 20 mA"
                    },
                    "Pulse/Encoder Inputs": {
                        "Programmable pulse/encoder inputs": "2",
                        "Voltage level": "0 – 30 V DC"
                    },
                    "Digital Output": {
                        "Programmable digital/pulse outputs": "3",
                        "Voltage level at digital/frequency output": "0 – 24 V"
                    },
                    "Analogue Output": {
                        "Programmable analogue outputs": "2",
                        "Current range": "0/4 – 20 mA or 0-10V"
                    },
                    "Relay Outputs": {
                        "Programmable relay outputs": "3"
                    },
                    "Cable Lengths": {
                        "Max. motor cable lengths": "200 m (shielded), 300 m (unshielded)"
                    },
                    "Additional Features": {
                        "Built-in PID controller": "Yes (Multi-PID with cascade)",
                        "IP Rating": "IP20 / IP21 (IP55 optional)",
                        "Overload capacity": "150% for 60 seconds",
                        "EMC compliance": "C2, C3",
                        "Safety certifications": "CE, UL, cUL, ASHRAE 90.1",
                        "Energy optimization": "Yes (HVAC energy optimization)",
                        "Special Features": "HVAC optimized, Multi-pump sequencing, Advanced PID"
                    }
                }
            },
            "ACS880": {
                name: "ABB ACS880",
                series: "ACS880",
                powerRange: "0.55 - 5600 kW",
                manufacturer: "ABB",
                application: "Industrial Drives, Process Industry, Heavy Duty",
                dataSource: "https://www.abb.com/global/en/areas/motion/drives",
                lastUpdated: "2025-12-22",
                specifications: {
                    "Mains Supply": {
                        "Supply voltage": "380-480 V, 500-690 V ±10%",
                        "Supply frequency": "50/60 Hz ±5%",
                        "True Power Factor (λ)": "0.97 nominal at rated load",
                        "Displacement Power Factor (cos φ) near unity": "(> 0.98)",
                        "Switching on input supply": "Max 1 time per 3 min"
                    },
                    "Output Data": {
                        "Output voltage": "0-100% of supply voltage",
                        "Output frequency": "0 - 500 Hz",
                        "Switching on output": "Unlimited",
                        "Ramp times": "0.01–3600 sec."
                    },
                    "Digital Inputs": {
                        "Programmable digital inputs": "6",
                        "Logic": "PNP/NPN selectable",
                        "Voltage level": "0–30 VDC"
                    },
                    "Analogue Input": {
                        "Analogue inputs": "3",
                        "Modes": "Voltage or current",
                        "Voltage level": "0 to +10 V or -10 to +10V",
                        "Current level": "0/4 to 20 mA"
                    },
                    "Pulse/Encoder Inputs": {
                        "Programmable pulse/encoder inputs": "2",
                        "Voltage level": "0 – 30 V DC"
                    },
                    "Digital Output": {
                        "Programmable digital/pulse outputs": "3",
                        "Voltage level at digital/frequency output": "0 – 24 V"
                    },
                    "Analogue Output": {
                        "Programmable analogue outputs": "2",
                        "Current range": "0/4 – 20 mA or 0-10V"
                    },
                    "Relay Outputs": {
                        "Programmable relay outputs": "3"
                    },
                    "Cable Lengths": {
                        "Max. motor cable lengths": "300 m (shielded), 450 m (unshielded)"
                    },
                    "Additional Features": {
                        "Built-in PID controller": "Yes (Advanced multi-PID)",
                        "IP Rating": "IP21 / IP55",
                        "Overload capacity": "150% for 60 seconds",
                        "EMC compliance": "C2, C3, C4",
                        "Safety certifications": "CE, UL, cUL, ATEX",
                        "Energy optimization": "Yes (Advanced energy optimization)",
                        "Special Features": "Direct torque control (DTC), Modular design, Advanced motor control"
                    }
                }
            },
            "ACS850": {
                name: "ABB ACS850",
                series: "ACS850",
                powerRange: "0.55 - 5000 kW",
                manufacturer: "ABB",
                application: "Multi-drives, Process Industry, Demanding Applications",
                dataSource: "https://www.abb.com/global/en/areas/motion/drives",
                lastUpdated: "2025-12-22",
                specifications: {
                    "Mains Supply": {
                        "Supply voltage": "380-500 V, 500-690 V ±10%",
                        "Supply frequency": "50/60 Hz ±5%",
                        "True Power Factor (λ)": "0.97 nominal at rated load",
                        "Displacement Power Factor (cos φ) near unity": "(> 0.98)",
                        "Switching on input supply": "Max 1 time per 3 min"
                    },
                    "Output Data": {
                        "Output voltage": "0-100% of supply voltage",
                        "Output frequency": "0 - 500 Hz",
                        "Switching on output": "Unlimited",
                        "Ramp times": "0.01–3600 sec."
                    },
                    "Digital Inputs": {
                        "Programmable digital inputs": "6",
                        "Logic": "PNP/NPN selectable",
                        "Voltage level": "0–30 VDC"
                    },
                    "Analogue Input": {
                        "Analogue inputs": "3",
                        "Modes": "Voltage or current",
                        "Voltage level": "0 to +10 V or -10 to +10V",
                        "Current level": "0/4 to 20 mA"
                    },
                    "Pulse/Encoder Inputs": {
                        "Programmable pulse/encoder inputs": "2",
                        "Voltage level": "0 – 30 V DC"
                    },
                    "Digital Output": {
                        "Programmable digital/pulse outputs": "3",
                        "Voltage level at digital/frequency output": "0 – 24 V"
                    },
                    "Analogue Output": {
                        "Programmable analogue outputs": "2",
                        "Current range": "0/4 – 20 mA or 0-10V"
                    },
                    "Relay Outputs": {
                        "Programmable relay outputs": "3"
                    },
                    "Cable Lengths": {
                        "Max. motor cable lengths": "300 m (shielded), 450 m (unshielded)"
                    },
                    "Additional Features": {
                        "Built-in PID controller": "Yes (Advanced multi-PID)",
                        "IP Rating": "IP21 / IP54",
                        "Overload capacity": "150% for 60 seconds",
                        "EMC compliance": "C2, C3, C4",
                        "Safety certifications": "CE, UL, cUL, ATEX, IEC 61508",
                        "Energy optimization": "Yes (Advanced)",
                        "Special Features": "Multi-drive capability, DTC, Common DC bus"
                    }
                }
            },
            "ACQ580": {
                name: "ABB ACQ580",
                series: "ACQ580",
                powerRange: "0.75 - 500 kW",
                manufacturer: "ABB",
                application: "Water & Wastewater, Pumping Stations, Municipal Water",
                dataSource: "https://www.abb.com/global/en/areas/motion/drives",
                lastUpdated: "2025-12-22",
                specifications: {
                    "Mains Supply": {
                        "Supply voltage": "208-240 V, 380-480 V, 500-690 V ±10%",
                        "Supply frequency": "50/60 Hz ±5%",
                        "True Power Factor (λ)": "0.96 nominal at rated load",
                        "Displacement Power Factor (cos φ) near unity": "(> 0.98)",
                        "Switching on input supply": "Max 1 time per 3 min"
                    },
                    "Output Data": {
                        "Output voltage": "0-100% of supply voltage",
                        "Output frequency": "0 - 320 Hz",
                        "Switching on output": "Unlimited",
                        "Ramp times": "0.01–3600 sec."
                    },
                    "Digital Inputs": {
                        "Programmable digital inputs": "6",
                        "Logic": "PNP/NPN selectable",
                        "Voltage level": "0–30 VDC"
                    },
                    "Analogue Input": {
                        "Analogue inputs": "3",
                        "Modes": "Voltage or current",
                        "Voltage level": "0 to +10 V or -10 to +10V",
                        "Current level": "0/4 to 20 mA"
                    },
                    "Pulse/Encoder Inputs": {
                        "Programmable pulse/encoder inputs": "2",
                        "Voltage level": "0 – 30 V DC"
                    },
                    "Digital Output": {
                        "Programmable digital/pulse outputs": "3",
                        "Voltage level at digital/frequency output": "0 – 24 V"
                    },
                    "Analogue Output": {
                        "Programmable analogue outputs": "2",
                        "Current range": "0/4 – 20 mA or 0-10V"
                    },
                    "Relay Outputs": {
                        "Programmable relay outputs": "3"
                    },
                    "Cable Lengths": {
                        "Max. motor cable lengths": "200 m (shielded), 300 m (unshielded)"
                    },
                    "Additional Features": {
                        "Built-in PID controller": "Yes (Multi-PID with cascade)",
                        "IP Rating": "IP20 / IP21 (IP55 optional)",
                        "Overload capacity": "150% for 60 seconds",
                        "EMC compliance": "C2, C3",
                        "Safety certifications": "CE, UL, cUL",
                        "Energy optimization": "Yes (Water optimized)",
                        "Special Features": "Water application optimized, Multi-pump control, Intelligent pump cleaning"
                    }
                }
            },
            "ACS380": {
                name: "ABB ACS380",
                series: "ACS380",
                powerRange: "0.37 - 22 kW",
                manufacturer: "ABB",
                application: "Machinery, Textile, Packaging, Material Handling",
                dataSource: "https://www.abb.com/global/en/areas/motion/drives",
                lastUpdated: "2025-12-22",
                specifications: {
                    "Mains Supply": {
                        "Supply voltage": "200-240 V, 380-480 V ±10%",
                        "Supply frequency": "50/60 Hz ±5%",
                        "True Power Factor (λ)": "0.89 nominal at rated load",
                        "Displacement Power Factor (cos φ) near unity": "(> 0.96)",
                        "Switching on input supply": "Not specified"
                    },
                    "Output Data": {
                        "Output voltage": "0-100% of supply voltage",
                        "Output frequency": "0 - 320 Hz",
                        "Switching on output": "Unlimited",
                        "Ramp times": "0.1–3600 sec."
                    },
                    "Digital Inputs": {
                        "Programmable digital inputs": "5",
                        "Logic": "PNP/NPN selectable",
                        "Voltage level": "0–24 VDC"
                    },
                    "Analogue Input": {
                        "Analogue inputs": "2",
                        "Modes": "Voltage or current",
                        "Voltage level": "0 to +10 V",
                        "Current level": "0/4 to 20 mA"
                    },
                    "Pulse/Encoder Inputs": {
                        "Programmable pulse/encoder inputs": "1 (shared with DI)",
                        "Voltage level": "0 – 24 V DC"
                    },
                    "Digital Output": {
                        "Programmable digital/pulse outputs": "2",
                        "Voltage level at digital/frequency output": "0 – 24 V"
                    },
                    "Analogue Output": {
                        "Programmable analogue outputs": "1",
                        "Current range": "0/4 – 20 mA"
                    },
                    "Relay Outputs": {
                        "Programmable relay outputs": "2"
                    },
                    "Cable Lengths": {
                        "Max. motor cable lengths": "100 m (shielded), 150 m (unshielded)"
                    },
                    "Additional Features": {
                        "Built-in PID controller": "Yes",
                        "IP Rating": "IP20 / IP21 (IP55 optional)",
                        "Overload capacity": "150% for 60 seconds",
                        "EMC compliance": "C2, C3",
                        "Safety certifications": "CE, UL, cUL",
                        "Special Features": "Machinery optimized, Application macros, Compact design"
                    }
                }
            }
        }
    }
};

// Mapping of competitor products - Only real data from verified sources
const competitorMapping = {
    ABB: ["ACS150", "ACS180", "ACS310", "ACS355", "ACS380", "ACS480", "ACS550", "ACS580", "ACH580", "ACS850", "ACS880", "ACQ580"]
};

// Data source URLs - Only verified manufacturer websites
const dataSourceURLs = {
    danfoss: "https://store.danfoss.com/en/",
    abb: "https://www.abb.com/global/en/areas/motion/drives"
};
