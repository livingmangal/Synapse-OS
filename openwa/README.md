# 📱 SynapseOS — OpenWA WhatsApp Omnichannel Gateway

A standalone, modular gateway bridging **WhatsApp** to the **SynapseOS Multi-Agent Clinical Operating System**.

---

## 🌟 Overview

The OpenWA integration allows patients and doctors to interact with SynapseOS directly through WhatsApp:
- **Interactive Menu Flow**: Automated response to greetings (`hi`, `hello`, `menu`, `help`, `start`).
- **Clinical Triage Swarm**: Immediate urgency classification (**🔴 Emergency**, **🟡 Doctor Consult**, **🟢 Home Care**).
- **NIH RxNav Drug Safety**: Cross-checks medications for dangerous interactions and flags safe alternatives.
- **Medical Vision AI**: Instant analysis of bone fractures (YOLOv8), chest radiographs (MONAI), and prescriptions (TrOCR) when photos are sent via chat.
- **Tele-MANAS Counseling**: Grounded mental health coping strategies and 24/7 hotline integration (`14416`).
- **Doctor Appointments**: Empanelled PM-JAY doctor search and digital calendar booking.
- **ABDM ABHA Passport**: National Health ID and Ayushman Bharat benefits overview.
- **Emergency SOS**: 1-click GPS broadcast and emergency services coordination (`112`, `108`).

---

## 🚀 Quickstart Guide

### Option 1: Local Node.js Bridge (`@open-wa/wa-automate`)

1. **Install dependencies**:
   ```powershell
   cd openwa
   npm install
   ```

2. **Start the OpenWA runner**:
   ```powershell
   npm start
   ```
   *On first launch, scan the displayed QR code with WhatsApp to pair your bot phone number.*

### Option 2: Hosted OpenWA Server

If you are using a cloud-hosted OpenWA instance:
1. Set the following in your root `.env`:
   ```env
   OPENWA_URL="https://your-hosted-openwa-domain.com"
   OPENWA_API_KEY="your_openwa_api_key"
   ```
2. Point your OpenWA webhook to: `https://<your-server-url>/api/whatsapp/webhook`

---

## 🧪 Testing & Verification

Run the dedicated OpenWA WhatsApp test suite via pytest:
```powershell
python -m pytest backend/tests/test_openwa_service.py -v
```

### Instant Message Simulation (No WhatsApp Web Needed)
You can test the entire pipeline using the built-in simulator endpoint:
```powershell
curl -X POST http://127.0.0.1:8000/api/whatsapp/simulate \
  -H "Content-Type: application/json" \
  -d '{"message": "2 Can I take Aspirin with Warfarin?", "sender_phone": "+919876543210"}'
```

---

## 💬 Patient Interaction Shortcuts

| Command | Action | Example Query |
| :--- | :--- | :--- |
| `menu` / `hi` | Opens main interactive menu | `hi` |
| `1 <symptoms>` | Runs clinical symptom triage | `1 I have high fever and chest tightness` |
| `2 <medicines>` | Evaluates drug-drug interactions | `2 Aspirin and Ibuprofen` |
| `3` | Prompts for medical scan photo | `3` (then attach image) |
| `4 <feelings>` | Tele-MANAS emotional support | `4 I am feeling overwhelmed and anxious` |
| `5 <specialty>` | Finds nearby empanelled doctors | `5 Cardiologist` |
| `6` | Retrieves ABHA ID and PM-JAY schemes | `6` |
| `SOS` | Activates immediate emergency alert | `SOS` |
