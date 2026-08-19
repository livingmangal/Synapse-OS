# 🐍 Sanjeevani OS — Backend Setup & API Guide

## 🚀 Quickstart Commands

### 1. Install Dependencies
```powershell
python -m pip install -r requirements.txt
```

### 2. Start the FastAPI Server
From the root workspace directory `e:\Sanjeevni-OS`:
```powershell
python -m uvicorn backend.app.main:app --host 127.0.0.1 --port 8000 --reload
```

---

## 🔗 Endpoints & Documentation
- **Root Health Check**: `http://127.0.0.1:8000/`
- **Interactive Swagger Docs**: `http://127.0.0.1:8000/docs`
- **ReDoc Documentation**: `http://127.0.0.1:8000/redoc`

---

## 🛠️ Common Fixes
- If you see `ModuleNotFoundError: No module named 'dotenv'`, run:
  ```powershell
  python -m pip install python-dotenv qrcode reportlab
  ```
