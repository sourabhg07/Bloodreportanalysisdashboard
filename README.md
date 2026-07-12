# 🩸 Blood Report Analysis Dashboard

An AI-powered full-stack web application that transforms blood test reports into structured health insights. The system extracts health parameters from PDF and image reports using OCR, analyzes the extracted values, generates an AI-powered summary, highlights abnormal parameters, and provides natural wellness recommendations through an interactive dashboard.

---

## 🚀 Features

- 📄 Upload blood reports in PDF or image format
- 🔍 OCR-based extraction of health parameters
- 📊 Automatic detection of parameters outside the normal range
- 🤖 AI-generated health report summary using Google Gemini API
- 🌿 Natural wellness recommendations including dietary and lifestyle suggestions
- 📈 Interactive dashboard to visualize health metrics
- 🗄️ Secure storage of reports and extracted data
- 📱 Responsive and user-friendly interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Recharts

### Backend
- Node.js
- Express.js

### AI & OCR
- Google Gemini API
- Tesseract OCR
- PDFPlumber
- PyMuPDF

### Database
- PostgreSQL

### Programming
- Python
- JavaScript

### Tools
- Git
- GitHub
- VS Code

---

## 🏗️ System Architecture

```text
                  Blood Report (PDF/Image)
                           │
                           ▼
                    OCR Processing
           (Tesseract / PDFPlumber)
                           │
                           ▼
              Extract Health Parameters
                           │
                           ▼
                Parameter Validation
          Compare with Reference Ranges
                           │
          ┌────────────────┴────────────────┐
          ▼                                 ▼
  Google Gemini API                 PostgreSQL Database
  AI Summary & Wellness             Store Reports & Data
      Recommendations                     │
          └────────────────┬────────────────┘
                           ▼
                 Backend REST APIs
                           │
                           ▼
                 React Dashboard UI
```

---

## 💡 How It Works

1. User uploads a blood report in PDF or image format.
2. OCR extracts text and health parameters from the report.
3. The extracted values are structured and compared against normal reference ranges.
4. The processed data is stored in PostgreSQL.
5. Google Gemini API generates:
   - A concise report summary
   - Key observations
   - Natural wellness recommendations
6. The dashboard displays:
   - Blood parameters
   - Normal vs abnormal values
   - AI-generated summary
   - Wellness recommendations
   - Health visualizations

---

## 📊 Dashboard Highlights

- Health Parameter Table
- Normal vs Abnormal Indicators
- AI Summary Panel
- Wellness Recommendation Panel
- Interactive Charts
- Historical Report Tracking

---

## 📂 Project Structure

```
Blood-Report-Analysis/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middleware/
│   └── database/
│
├── python/
│   ├── ocr/
│   ├── preprocessing/
│   └── gemini/
│
├── uploads/
│
├── README.md
└── package.json
```

---

## 🎯 Key Learning Outcomes

This project helped me gain hands-on experience in:

- Full Stack Development
- REST API Development
- OCR Integration
- Google Gemini API Integration
- PostgreSQL Database Design
- AI-assisted Health Report Analysis
- Data Visualization
- System Integration
- Version Control using Git & GitHub

---

## 🔮 Future Enhancements

- Multi-language support
- User authentication
- Historical report comparison
- Downloadable health reports
- Email report sharing
- Doctor dashboard
- Mobile application
- Cloud deployment
  
---

## 👨‍💻 Author

**Sourabh Gupta**

- GitHub: https://github.com/sourabhg07
- LinkedIn: https://www.linkedin.com/in/sourabh-gupta7-

---

⭐ If you found this project interesting, consider giving it a star!
