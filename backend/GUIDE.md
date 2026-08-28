# 🐍 SynapseOS — Backend API & Architecture Guide

Comprehensive developer guide for setting up, running, testing, and extending the **SynapseOS Multi-Agent FastAPI Backend**.

---

## 🚀 Quickstart

### 1. Install Dependencies
```powershell
python -m pip install -r backend/requirements.txt
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```powershell
cp .env.example .env
```
*(Optional: Add `GROQ_API_KEY`, `OPENROUTER_API_KEY`, or `GEMINI_API_KEY` for live LLM reasoning).*

### 3. Start the FastAPI Server
```powershell
python -m uvicorn backend.app.main:app --host 127.0.0.1 --port 8000 --reload
```

---

## 🔗 Documentation & Interactive Endpoints

- **Root Health Check**: [`http://127.0.0.1:8000/`](http://127.0.0.1:8000/)
- **Interactive Swagger UI**: [`http://127.0.0.1:8000/docs`](http://127.0.0.1:8000/docs)
- **ReDoc API Documentation**: [`http://127.0.0.1:8000/redoc`](http://127.0.0.1:8000/redoc)

---

## 📋 Comprehensive API Reference

| Endpoint | Method | Tag | Description |
| :--- | :---: | :--- | :--- |
| `/api/orchestrate` | `POST` | Agent Swarm | Runs the full multi-agent DAG workflow with live trace badges. |
| `/api/triage` | `POST` | Clinical Intelligence | Categorizes symptoms into Emergency, Doctor Consult, or Home Care. |
| `/api/drugs/check` | `POST` | Clinical Intelligence | NIH RxNav medication lookup and drug-drug interaction analyzer. |
| `/api/scans/analyze` | `POST` | Vision AI | FractureNet YOLOv8 bone detection, MONAI chest radiographs, & TrOCR. |
| `/api/digital-twin/simulate` | `POST` | Digital Health Twin | 10-year longitudinal multi-organ trajectory simulation. |
| `/api/digital-twin/baseline` | `GET` | Digital Health Twin | Baseline 3D organ vitality scores (Heart, Kidneys, Liver, Pancreas, Lungs). |
| `/api/diagnostics/risk-score` | `POST` | Clinical ML | Quantitative Framingham CVD, ADA Diabetes, CKD eGFR, & FIB-4 Liver. |
| `/api/abdm/generate-id` | `GET` | ABDM & Schemes | Generates mock Indian 14-digit ABHA Health ID and address. |
| `/api/abdm/schemes` | `GET` | ABDM & Schemes | Returns Indian Government health schemes (PM-JAY, Jan Aushadhi, Tele-MANAS). |
| `/api/reports/generate-pdf` | `POST` | Health Records | Generates verifiable health summary PDF with SHA-256 blockchain QR. |
| `/api/sos/dispatch` | `POST` | Emergency SOS | Dispatches 1-click Emergency SOS alert packet with GPS navigation. |
| `/api/whatsapp/webhook` | `POST` | Omnichannel | Inbound OpenWA WhatsApp webhook handler. |
| `/api/whatsapp/simulate` | `POST` | Omnichannel | Instant simulation testing of WhatsApp messages and scan uploads. |
| `/api/fhir/bundle` | `GET` | EHR & FHIR R4 | Generates official HL7 FHIR R4 Bundle (Patient, Observation, Condition). |
| `/api/retrieval/search` | `GET` | Hybrid RAG | Searches WHO/ICMR 23-guideline corpus and Wikipedia medical REST API. |
| `/api/appointments/doctors` | `GET` | Logistics | Lists available PM-JAY empanelled doctors by specialty. |
| `/api/appointments/schedule` | `POST` | Logistics | Books doctor consultation slot and generates digital booking token. |
| `/api/i18n/translate` | `GET` | Multilingual | Translates clinical messages into 11 Indian regional languages. |

---

## 🧪 Running the Test Suite

SynapseOS comes with a **45-test comprehensive test suite** covering all API endpoints, OpenWA messaging, ML risk models, and clinical agents:

```powershell
# Run the entire test suite
python -m pytest backend/tests -v

# Run specific test suites
python -m pytest backend/tests/test_api_endpoints.py -v
python -m pytest backend/tests/test_openwa_service.py -v
python -m pytest backend/tests/test_clinical_ml_and_agents.py -v
```

---

## 📁 Backend Directory Layout

```
backend/
├── app/
│   ├── agents/            # Specialist AI nodes (Triage, Drug, Scan, Mental, Council, etc.)
│   ├── api/               # FastAPI route definitions (endpoints.py)
│   ├── core/              # Config, State Graph, and Deterministic Safety Gate
│   ├── ml/                # Diagnostics ML & 10-Year Digital Twin Trajectory
│   ├── openwa/            # Dedicated OpenWA WhatsApp client & service engine
│   ├── services/          # FHIR R4, ABDM, PDF generation, and i18n translations
│   └── main.py            # FastAPI Application entrypoint & CORS middleware
├── tests/                 # Full 45-test suite
├── Final.pt               # FractureNet YOLOv8 bone fracture model weights
└── requirements.txt       # Python dependencies
```
