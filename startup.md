# 🚀 Sanjeevni / SynapseOS — Master Startup & Live WhatsApp Guide

This document contains **every single configuration, active credential, tunnel command, and setup step** to run Sanjeevni, its multi-agent clinical swarm, and the live WhatsApp bot.

---

## 📋 Table of Contents
1. [Active Credentials & Environment Config](#1-active-credentials--environment-config)
2. [Quick Daily Startup Commands](#2-quick-daily-startup-commands)
3. [Meta WhatsApp Cloud API — Complete Step-by-Step Setup](#3-meta-whatsapp-cloud-api--complete-step-by-step-setup)
4. [Critical Meta WABA App Subscription (The Missing Link Fix)](#4-critical-meta-waba-app-subscription)
5. [Public Webhook Tunnels (Cloudflare & Ngrok)](#5-public-webhook-tunnels)
6. [Testing & Live Verification](#6-testing--live-verification)
7. [Clinical Fail-Safe Fallback & Error Handling](#7-clinical-fail-safe-fallback--error-handling)
8. [Common Gotchas & Troubleshooting](#8-common-gotchas--troubleshooting)

---

## 1. Active Credentials & Environment Config

These values are already configured in `d:\Sanjeevni\.env` and `backend/.env`:

```env
# ============================================================
# Meta Official WhatsApp Cloud API (Graph API) Settings
# ============================================================
WHATSAPP_CLOUD_API_TOKEN="<STORED_SECURELY_IN_LOCAL_ENV>"
WHATSAPP_PHONE_NUMBER_ID="1242016799005737"
WHATSAPP_BUSINESS_ACCOUNT_ID="1055542317181096"
WHATSAPP_WEBHOOK_VERIFY_TOKEN="sanjeevni_secret_token_123"
WHATSAPP_API_VERSION="v20.0"

# ============================================================
# Groq AI Clinical Reasoning Swarm
# ============================================================
GROQ_API_KEY="<STORED_SECURELY_IN_LOCAL_ENV>"
GROQ_MODEL="qwen/qwen3.8-27b"

# ============================================================
# Project Details
# ============================================================
# App Name: SYNAPSE
# App ID: 1735813377633659
# Meta Sandbox Phone Number: +1 555-202-8141
# Whitelisted Recipient Number: +91-70600-02293
# Active Cloudflare Tunnel: https://them-boxing-food-race.trycloudflare.com
```

---

## 2. Quick Daily Startup Commands

Whenever you want to run and test the app:

### Terminal 1: Start Backend (FastAPI)
```powershell
python -m uvicorn backend.app.main:app --host 127.0.0.1 --port 8000 --reload
```
- Interactive API Docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- Health Status: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

### Terminal 2: Start Public Tunnel (Cloudflare)
```powershell
& "C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel --url http://127.0.0.1:8000
```
*(If restarted and assigned a new `trycloudflare.com` URL, update the Webhook Callback URL in Meta)*.

### Terminal 3: Start Frontend (React/Vite)
```powershell
cd frontend
npm run dev
```
- Web Application: [http://localhost:5173](http://localhost:5173)

---

## 3. Meta WhatsApp Cloud API — Complete Step-by-Step Setup

Follow these exact steps if setting up from scratch on Meta Developer Portal:

### Step 3.1: Create Meta App
1. Go to [developers.facebook.com](https://developers.facebook.com/) -> **My Apps** -> **Create App**.
2. Select **Other** -> App Type: **Business**.
3. App Name: `SYNAPSE`, Contact Email: your email.
4. If asked to select a Business Portfolio, choose or create one (e.g. `Sanjeevni`). **No official business registration or GST documents are required.**
5. Click **Create App**.

### Step 3.2: Add WhatsApp & Whitelist Phone Numbers
1. In your App Dashboard, find **WhatsApp** under products -> click **Set up**.
2. Go to **WhatsApp > Basic Setup > Step 1. Try it out**:
   - Meta gives you a free test phone number: `+1 555-202-8141`.
   - Copy **Temporary Access Token** -> paste into `WHATSAPP_CLOUD_API_TOKEN`.
   - Copy **Phone number ID** (`1242016799005737`) -> paste into `WHATSAPP_PHONE_NUMBER_ID`.
   - Copy **WhatsApp Business Account ID** (`1055542317181096`) -> paste into `WHATSAPP_BUSINESS_ACCOUNT_ID`.
3. In the **"To"** dropdown on that same screen:
   - Click **Manage phone number list**.
   - Enter your personal WhatsApp number (with country code, e.g. `+917060002293`).
   - Enter the 6-digit SMS verification code to whitelist your phone.
4. Click the blue **"Send message"** button to open the 24-hour sandbox conversation window.

### Step 3.3: Configure Webhooks
1. In Meta Developer Portal, go to **WhatsApp > Configuration**.
2. Under **Webhook**, click **Edit**:
   - **Callback URL**: `https://<YOUR_TUNNEL_DOMAIN>/api/whatsapp/webhook`
   - **Verify Token**: `sanjeevni_secret_token_123`
3. Click **Verify and Save** (requires your FastAPI backend to be running on port 8000).
4. Under **Webhook fields**, click **Manage**:
   - Find **`messages`** and toggle it to **Subscribed**.

---

## 4. Critical Meta WABA App Subscription

> ⚠️ **The Critical Gotcha**: Even after setting the Webhook URL and subscribing to `messages`, Meta often keeps the WhatsApp Business Account (WABA) connected to an internal default testing app. This causes outbound messages to work, but **inbound WhatsApp replies will NEVER reach your server** until your app is subscribed to the WABA!

### How to link your App (`SYNAPSE`) to your WABA:
Run this one-line Python script from your terminal:

```powershell
python -c "import urllib.request; token = 'YOUR_WHATSAPP_CLOUD_API_TOKEN'; waba_id = '1055542317181096'; req = urllib.request.Request(f'https://graph.facebook.com/v20.0/{waba_id}/subscribed_apps', data=b'', headers={'Authorization': f'Bearer {token}'}); print(urllib.request.urlopen(req).read().decode())"
```

Expected output:
```json
{"success": true}
```

To verify which apps are subscribed:
```powershell
python -c "import urllib.request; token = 'YOUR_WHATSAPP_CLOUD_API_TOKEN'; waba_id = '1055542317181096'; print(urllib.request.urlopen(f'https://graph.facebook.com/v20.0/{waba_id}/subscribed_apps?access_token={token}').read().decode())"
```
You will see `"name": "SYNAPSE", "id": "1735813377633659"` in the active list!

---

## 5. Public Webhook Tunnels

Meta requires a public HTTPS URL to reach your local FastAPI server.

### Option A: Cloudflare Tunnel (Active & Recommended)
- **Installer**: Installed in `C:\Program Files (x86)\cloudflared\cloudflared.exe`.
- **Why Cloudflare?** Zero warning screens, free, trusted by Meta, and never blocked by Windows Defender.
- **Command**:
  ```powershell
  & "C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel --url http://127.0.0.1:8000
  ```

### Option B: Ngrok with Permanent Static Domain
- **Registered Domain**: `pauper-pedicure-traps.ngrok-free.dev`
- **AuthToken**: `<YOUR_NGROK_AUTHTOKEN_FROM_DASHBOARD>`
- **Note on Windows Defender**: If Windows Defender blocks `ngrok.exe`, add `d:\Sanjeevni` as a folder exclusion in **Windows Security > Virus & threat protection > Manage settings > Exclusions**.
- **Command**:
  ```powershell
  ngrok http --domain=pauper-pedicure-traps.ngrok-free.dev 8000
  ```

---

## 6. Testing & Live Verification

### Method 1: Real WhatsApp Text from Phone
1. Open WhatsApp on your verified phone (`+91 70600-02293`).
2. Message the bot number **`+1 555-202-8141`**:
   - `hi` or `menu` -> Interactive healthcare service menu & language selector.
   - `1 I have high fever, headache and dry cough` -> Multi-agent clinical triage.
   - `2 Aspirin and Ibuprofen` -> RxNav drug-drug interaction checker.
   - `5 Cardiologist` -> Empanelled PM-JAY doctor lookup.
   - `6` -> ABHA Health ID & national health schemes.
   - `sos` -> 1-click Emergency dispatch protocol.
   - Send an image of a bone or chest X-ray -> FractureNet YOLOv8 / MONAI vision analysis.

### Method 2: Instant Local Simulation & Quick-Reply API
1. Open [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).
2. **`POST /api/whatsapp/quick-reply` (New Compact Format)**:
   ```json
   {
     "sender_phone": "917060002293",
     "message": "1 I have severe fever and dry cough",
     "compact": true
   }
   ```
   Returns the punchy, mobile-optimized card response with status badge, top actions, red flags, and shortcuts.
3. **`GET /api/whatsapp/languages`**:
   Lists all 11 Indian regional languages with numerical codes (1-11).
4. **`POST /api/whatsapp/set-language`**:
   Set user language in session:
   ```json
   {
     "sender_phone": "917060002293",
     "language": "hi"
   }
   ```
5. **`GET /api/whatsapp/menu?lang=hi`**:
   Returns the localized WhatsApp service menu.

---

## 7. Language Switching on WhatsApp

Patients can switch languages anytime directly inside WhatsApp:
- **Trigger**: Text **`lang`**, **`language`**, **`bhasha`**, or **`भाषा`** in chat.
- **Selector**: The bot sends the 11-language numbered list.
- **Reply**: Text the number (e.g. `2` for हिन्दी) or name of the language.
- **Result**: The bot switches the patient's language and delivers the localized menu.
- **Greetings**: Sending **`hi`**, **`hello`**, or **`menu`** gives the full interactive menu in the saved language.

---

## 7. Clinical Fail-Safe Fallback & Error Handling

To guarantee that a patient is never left without guidance in an emergency:

- Located in: [`backend/app/services/meta_whatsapp_service.py`](file:///d:/Sanjeevni/backend/app/services/meta_whatsapp_service.py#L783)
- If Groq AI, network connections, or external services experience a delay or error:
  1. The error is safely caught and logged.
  2. The bot immediately sends an emergency protocol message:
     ```text
     ⚠️ SANJEEVNI-OS — CLINICAL ASSISTANT NOTICE
     We encountered a temporary processing delay with our live clinical reasoning nodes.
     🚨 Immediate Emergency Guidance:
     • Call 112 (National Emergency) or 108 (Ambulance) immediately.
     • Mental Health Crisis: Call 14416 (Tele-MANAS 24x7 Toll-Free).
     📋 Offline Menu Options:
     • Reply 'menu' for offline guides, doctor directory, and vaccination schedules.
     • Reply 'sos' for instant emergency contact dispatch.
     • Reply '2 <medicine name>' to verify drug interactions.
     ```
  3. The server returns HTTP 200 to Meta so the webhook never drops.

---

## 8. Common Gotchas & Troubleshooting

| Issue | Cause | Fix |
| :--- | :--- | :--- |
| `(#131030) Recipient phone number not in allowed list` | The recipient number has not been whitelisted in sandbox mode. | Go to **Step 1. Try it out > To > Manage phone number list**, add the number, and verify with 6-digit OTP. |
| Messages sent on phone do not hit backend | WABA is not linked to your App ID. | Run `POST https://graph.facebook.com/v20.0/{waba_id}/subscribed_apps` (see Section 4). |
| `Operation did not complete... virus or potentially unwanted software` | Windows Defender heuristic on tunneling software (`ngrok.exe`). | Use **Cloudflare Tunnel (`cloudflared`)** or add `d:\Sanjeevni` to Windows Security Exclusions. |
| Groq returns `404: model does not exist` | Deprecated model string. | Use `qwen/qwen3.8-27b` which is active and tested with your key. |
| Temporary token expired | Meta sandbox tokens expire every 24 hours. | Click **Copy** next to Temporary Access Token in **Step 1. Try it out** and update `WHATSAPP_CLOUD_API_TOKEN` in `.env`. |
