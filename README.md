# IT Support Troubleshooting Center

An interactive portfolio project demonstrating a structured approach to IT support, incident investigation, troubleshooting, root-cause analysis and technical documentation.

## Live Demo

View the interactive project:

https://viktoriadodekova.github.io/it-support-troubleshooting/

---

## Project Overview

This project simulates a small IT Support / Application Support environment.

It combines an interactive incident dashboard with detailed troubleshooting records and sample data to demonstrate how technical issues can be investigated systematically from the initial user report through resolution and verification.

The project is designed as a learning and portfolio environment rather than a production support system.

---

## Technologies

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages
- Markdown
- CSV

---

## Key Features

- Interactive incident cards
- Front/back incident resolution view
- Incident search
- Priority and category filters
- Dynamic dashboard statistics
- Expandable troubleshooting workflow
- Simulated diagnostic console
- Root-cause analysis
- Resolution verification
- Technical incident documentation
- Sample failed and corrected CSV data
- Responsive web design

---

## Incident Scenarios

### INC-001 — ERP Authentication Lockout

A user cannot access a simulated ERP application.

Troubleshooting includes:

- incident scope verification
- network connectivity check
- DNS verification
- account status review
- authentication-event analysis
- root-cause identification
- access restoration
- user verification

Detailed documentation:

`incidents/INC-001-erp-authentication-lockout.md`

---

### INC-002 — Product Data Import Rejected

A CSV product-data import fails because a mandatory ProductCode value is missing.

Troubleshooting includes:

- validation-message review
- CSV structure inspection
- mandatory-field verification
- affected-record identification
- data correction
- repeated import verification

Example files:

`examples/INC-002-invalid-products.csv`

`examples/INC-002-corrected-products.csv`

Detailed documentation:

`incidents/INC-002-product-data-import.md`

---

### INC-003 — VPN Authentication Failure

A remote user cannot connect to a simulated company VPN after changing their password.

Troubleshooting includes:

- general connectivity verification
- incident-scope assessment
- credential validation
- authentication-error review
- cached-credential investigation
- VPN reconnection
- access verification

Detailed documentation:

`incidents/INC-003-vpn-credential-issue.md`

---

## Troubleshooting Methodology

The incidents follow a structured support process:

1. Understand the user-reported symptom
2. Determine impact and scope
3. Define possible causes
4. Perform diagnostic checks
5. Review errors and findings
6. Identify the root cause
7. Implement a resolution
8. Verify the result with the user
9. Document preventive actions and lessons learned

---

## Project Structure

```text
it-support-troubleshooting/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── incidents/
│   ├── INC-001-erp-authentication-lockout.md
│   ├── INC-002-product-data-import.md
│   └── INC-003-vpn-credential-issue.md
│
└── examples/
    ├── INC-002-invalid-products.csv
    └── INC-002-corrected-products.csv
