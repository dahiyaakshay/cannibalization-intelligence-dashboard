# 🚨 Cannibalization Intelligence Dashboard

AI-driven structural cannibalization detection and risk modeling system — a full-stack Proof-of-Concept that analyzes page similarity, conflict risk, and intent clusters to help identify SEO cannibalization.

---

## 🧠 What It Is

This project analyzes website page data (e.g., exported Google Search Console CSV) to identify structural similarity, content redundancy, and cannibalization risk using NLP and machine learning techniques. It visualizes findings in an interactive dashboard.

Unlike keyword-based tools, this system focuses on **semantic similarity and structural relationship** between pages.

---

## 🏗 Architecture Overview

### Backend
- **FastAPI** for the API
- **Pandas** for data manipulation
- **Scikit-learn** for TF-IDF and similarity
- Custom risk scoring and clustering logic

### Frontend
- **React (Vite)** for UI
- **TailwindCSS** for styling
- **Axios** for API integration

---

## 🚀 Features

### 🚨 Risk Intelligence
- Global Risk Index
- Severity classification
- Risk distribution visualization
- Risk filtering

### 🔍 Structural Analysis
- Pairwise semantic similarity heatmap
- Conflict matrix with severity coloring
- Interactive risk slider

### 📌 Clustering
- Intent cluster grouping
- Cluster density score
- Structural uniqueness identification

### 📝 Recommendations
- Actionable, real-data based recommendations
- High-risk pair consolidation suggestions

---

## 🧩 How It Works

1. Upload a Google Search Console export (CSV)
2. Backend preprocesses and vectorizes text
3. Pairwise cosine similarity is computed
4. Conflict risk scores are derived
5. Pages are clustered by similarity
6. Cluster density is computed
7. Frontend visualizes results interactively

---

## 🔧 Backend Setup

```bash
cd cannibalization-engine
pip install -r requirements.txt
uvicorn app:app --reload
```

Backend runs at:
```
http://127.0.0.1:8000
```

---

## 💻 Frontend Setup

```bash
cd cannibalization-dashboard
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

## 📊 Modeled Metrics

- Global Risk Index
- Page Risk Score
- Similarity Matrix
- Conflict Count
- Cluster Density
- Structural Uniqueness
- Average Similarity
- Query Overlap (if available)

---

## 🧠 Why This Matters

This project demonstrates how applied natural language processing and vector similarity techniques can surface structural cannibalization — helping SEO professionals identify conflicts beyond simple keyword overlap.

It goes beyond traditional SEO tools by modeling relationships between pages based on intent similarity and structural overlap.

---

## 🔭 Future Improvements

- Google Search Console API integration
- Historical trend tracking
- Merge simulation impact modeling
- Internal linking optimization suggestions
- Export reporting (PDF, CSV)
- Dashboard personalization and export controls

---

## 🧪 Status

Proof-of-Concept — Fully functional locally and designed for experimentation, modeling, and portfolio demonstration.

---

## 📎 License

For demonstration and educational purposes only.

---
