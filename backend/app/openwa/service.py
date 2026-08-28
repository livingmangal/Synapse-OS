"""
SynapseOS — openwa/service.py
OpenWA WhatsApp Webhook Ingestion, Interactive Menu Engine & Agent Router.
"""

import logging
from typing import Dict, Any
from backend.app.openwa.client import send_whatsapp_message
from backend.app.agents.orchestrator import orchestrate_health_request
from backend.app.agents.drug_agent import evaluate_drug_safety
from backend.app.agents.scan_agent import analyze_medical_image
from backend.app.agents.appointment_agent import find_doctors_by_specialty
from backend.app.services.abdm_service import generate_abha_id, check_ayushman_bharat_schemes

logger = logging.getLogger(__name__)

MAIN_MENU_TEXT = (
    "🌿 *SYNAPSEOS OS — Clinical Health Assistant* 🌿\n"
    "_Autonomous Multi-Agent Health Intelligence_\n\n"
    "Welcome! How can I assist you today? Reply with a *number* or type your query:\n\n"
    "1️⃣ *Symptom Triage* — Type `1` followed by your symptoms\n"
    "    _e.g., 1 I have severe headache, fever and body ache_\n\n"
    "2️⃣ *Drug Safety & RxNav* — Type `2` followed by medicines\n"
    "    _e.g., 2 Can I take Aspirin with Ibuprofen?_\n\n"
    "3️⃣ *Scan & Prescription AI* — Send any *X-ray or Prescription photo* 📷\n"
    "    _Supports Bone Fracture YOLOv8, Chest X-rays & TrOCR_\n\n"
    "4️⃣ *Mental Health (Tele-MANAS)* — Type `4` followed by how you feel\n"
    "    _e.g., 4 I am feeling overwhelmed and cannot sleep_\n\n"
    "5️⃣ *Find Empanelled Doctor* — Type `5` followed by specialty\n"
    "    _e.g., 5 Cardiologist or 5 General Physician_\n\n"
    "6️⃣ *ABHA Health ID & PM-JAY* — Type `6` to view benefits & schemes\n\n"
    "🚨 *Emergency SOS* — Reply *SOS* for immediate emergency broadcast\n\n"
    "━━━━━━━━━━━━━━━━━━━━\n"
    "_Tip: You can also text naturally in any language._"
)


async def process_whatsapp_inbound_webhook(payload: Dict[str, Any]) -> Dict[str, Any]:
    """
    Processes incoming WhatsApp messages from OpenWA gateway.
    Handles greetings, interactive numbered commands, natural clinical queries,
    and medical imaging (X-rays/prescriptions) over WhatsApp.
    """
    # Extract data block from OpenWA payload (supports both wrapped and direct formats)
    data = payload.get("data", payload)
    
    sender_jid = (
        data.get("from") or
        data.get("chatId") or
        data.get("sender", {}).get("id") or
        payload.get("from") or
        "unknown@c.us"
    )

    msg_type = data.get("type", "chat")
    raw_body = (
        data.get("body") or
        data.get("caption") or
        data.get("text") or
        payload.get("text") or
        ""
    )
    caption = data.get("caption", "").strip()

    # 1. Handle Medical Scan / Photo Upload via WhatsApp
    if msg_type in ("image", "document", "photo") or (isinstance(raw_body, str) and raw_body.startswith("data:image")):
        image_b64 = raw_body if raw_body.startswith("data:image") else data.get("mediaData", {}).get("data")
        
        # Determine image analysis type from caption or fallback to bone fracture / chest
        caption_lower = caption.lower()
        if any(k in caption_lower for k in ["rx", "prescription", "medicine", "doctor note"]):
            img_type = "prescription"
        elif any(k in caption_lower for k in ["chest", "lung", "pneumonia", "covid", "breath"]):
            img_type = "chest_xray"
        else:
            img_type = "bone_fracture"

        scan_result = analyze_medical_image(
            image_type=img_type,
            filename=data.get("filename", "whatsapp_scan.jpg"),
            image_base64=image_b64
        )

        reply_parts = [
            "📷 *SYNAPSEOS MEDICAL SCAN DIAGNOSTICS* 📷\n",
            f"• *Modality:* {img_type.replace('_', ' ').title()}",
            f"• *AI Diagnosis:* {scan_result.get('ai_diagnosis_summary', 'Analysis Completed')}",
            f"• *Confidence:* {scan_result.get('confidence_pct', 94)}%",
            f"\n📋 *Clinical Interpretation:*\n{scan_result.get('plain_english_explanation', '')}",
            f"\n💡 *Recommended Next Step:*\n{scan_result.get('recommended_clinical_action', 'Consult a radiologist or physician.')}"
        ]

        if scan_result.get("detected_bounding_boxes"):
            boxes = scan_result["detected_bounding_boxes"]
            reply_parts.append(f"\n🎯 *Detected Anomalies:* {len(boxes)} lesion/fracture localized.")

        reply_text = "\n".join(reply_parts)
        success = await send_whatsapp_message(to_jid=sender_jid, text=reply_text)
        return {
            "status": "processed",
            "type": "medical_image",
            "sender": sender_jid,
            "reply_dispatched": success,
            "scan_summary": scan_result.get("ai_diagnosis_summary")
        }

    # 2. Text Message Processing
    message_text = raw_body.strip()
    if not message_text:
        return {"status": "ignored", "reason": "empty message text"}

    text_lower = message_text.lower()

    # Greeting / Menu trigger
    if text_lower in ("hi", "hello", "hey", "menu", "help", "start", "guide", "synapseos", "options"):
        success = await send_whatsapp_message(to_jid=sender_jid, text=MAIN_MENU_TEXT)
        return {
            "status": "processed",
            "type": "menu_dispatched",
            "sender": sender_jid,
            "reply_dispatched": success
        }

    # Emergency SOS Trigger
    if text_lower in ("sos", "emergency", "112", "108", "save me", "help me"):
        sos_res = (
            "🚨 *SYNAPSEOS OS — IMMEDIATE EMERGENCY PROTOCOL ACTIVATED* 🚨\n\n"
            "If you or someone nearby is experiencing a life-threatening emergency:\n\n"
            "📞 *National Emergency:* Call `112` directly\n"
            "🚑 *Ambulance Services:* Call `108` immediately\n"
            "🧠 *Tele-MANAS Mental Crisis:* Call `14416` (24x7 Toll-Free)\n"
            "🏥 *Poison Control:* Call `1800-116-117`\n\n"
            "⚠️ Please stay calm, keep the patient comfortable, and seek direct hospital emergency care immediately."
        )
        success = await send_whatsapp_message(to_jid=sender_jid, text=sos_res)
        return {"status": "processed", "type": "emergency_sos", "sender": sender_jid, "reply_dispatched": success}

    # Numbered Command Routing
    # Option 2: Drug Safety
    if text_lower.startswith("2 ") or text_lower == "2":
        query = message_text[2:].strip() if text_lower.startswith("2 ") else ""
        if not query:
            reply_text = "💊 *Drug Safety & RxNav Checker*\nPlease reply with the names of the medications (e.g. `2 Aspirin and Ibuprofen` or `2 Paracetamol with Alcohol`)."
        else:
            drug_res = await evaluate_drug_safety(query)
            reply_parts = ["💊 *SYNAPSEOS DRUG SAFETY & RXNAV REPORT* 💊\n"]
            meds = drug_res.get("detected_medications", [])
            if meds:
                reply_parts.append(f"• *Detected Medications:* {', '.join(meds)}")
            reply_parts.append(f"• *Safety Status:* {drug_res.get('overall_status', 'Evaluated')}")
            
            interactions = drug_res.get("interactions", [])
            if interactions:
                reply_parts.append(f"\n⚠️ *Interactions Detected ({len(interactions)}):*")
                for item in interactions:
                    reply_parts.append(f"- *{item.get('severity', 'Risk')} Risk:* {item.get('effect')}\n  ↳ _Action: {item.get('recommended_action')}_")
            else:
                reply_parts.append("\n✅ *No severe high-risk drug interactions identified.*")

            if drug_res.get("safe_alternatives"):
                reply_parts.append(f"\n💡 *Safe Alternatives:* {', '.join(drug_res['safe_alternatives'])}")
            
            reply_text = "\n".join(reply_parts)

        success = await send_whatsapp_message(to_jid=sender_jid, text=reply_text)
        return {"status": "processed", "type": "drug_check", "sender": sender_jid, "reply_dispatched": success}

    # Option 3: Scan Request prompt
    if text_lower == "3" or text_lower.startswith("3 "):
        reply_text = (
            "📷 *Medical Scan & Prescription Analysis*\n\n"
            "Please upload or send a photo directly to this chat:\n"
            "• 🦴 *X-Ray / Bone Scan* (FractureNet YOLOv8 Detection)\n"
            "• 🫁 *Chest Radiograph* (MONAI Pulmonary Analysis)\n"
            "• 📝 *Prescription / Doctor Note* (TrOCR Parser)\n\n"
            "_Attach your image now to receive instant clinical insights._"
        )
        success = await send_whatsapp_message(to_jid=sender_jid, text=reply_text)
        return {"status": "processed", "type": "scan_prompt", "sender": sender_jid, "reply_dispatched": success}

    # Option 5: Find Doctor / Appointment
    if text_lower.startswith("5 ") or text_lower == "5":
        specialty = message_text[2:].strip() if text_lower.startswith("5 ") else "General Physician"
        if not specialty:
            specialty = "General Physician"
        doctors_res = find_doctors_by_specialty(specialty)
        reply_parts = [f"🏥 *EMPANELLED PM-JAY DOCTORS ({specialty.title()})* 🏥\n"]
        doctors_list = doctors_res if isinstance(doctors_res, list) else doctors_res.get("available_doctors", [])
        if doctors_list:
            for doc in doctors_list[:4]:
                slots = doc.get("available_slots", [])
                next_slot = slots[0] if slots else "Available Today"
                hospital = doc.get("hospital", "AIIMS / Empanelled Center")
                reply_parts.append(
                    f"👨‍⚕️ *{doc.get('name')}* — {doc.get('specialty')}\n"
                    f"   🏥 {hospital}\n"
                    f"   💳 Fee: {doc.get('fee', '₹0 (PM-JAY)')} | Next Slot: {next_slot}\n"
                )
            reply_parts.append("_To book an appointment, reply with slot time or visit the dashboard._")
        else:
            reply_parts.append(f"No specific doctors found for '{specialty}'. Please consult a General Physician.")

        reply_text = "\n".join(reply_parts)
        success = await send_whatsapp_message(to_jid=sender_jid, text=reply_text)
        return {"status": "processed", "type": "doctor_lookup", "sender": sender_jid, "reply_dispatched": success}

    # Option 6: ABHA ID & Schemes
    if text_lower == "6" or text_lower.startswith("6 "):
        abha_data = generate_abha_id(name="SynapseOS User", year_of_birth=1995, state_code="DL")
        schemes = check_ayushman_bharat_schemes().get("schemes", [])
        reply_parts = [
            "🪪 *AYUSHMAN BHARAT DIGITAL MISSION (ABDM)* 🪪\n",
            f"• *Sample ABHA ID:* `{abha_data.get('abha_id')}`",
            f"• *ABHA Address:* `{abha_data.get('abha_address')}`",
            f"• *PM-JAY Wallet:* ₹5,00,000 / Family / Year",
            f"• *Status:* {abha_data.get('status')}\n",
            "📜 *Available National Health Schemes:*"
        ]
        for s in schemes[:3]:
            reply_parts.append(f"• *{s.get('name')}:* {s.get('coverage_details')}")

        reply_text = "\n".join(reply_parts)
        success = await send_whatsapp_message(to_jid=sender_jid, text=reply_text)
        return {"status": "processed", "type": "abha_info", "sender": sender_jid, "reply_dispatched": success}

    # Stripped numbered prompt for Option 1 or 4
    if text_lower.startswith("1 "):
        clean_text = message_text[2:].strip()
    elif text_lower.startswith("4 "):
        clean_text = f"Mental health check: {message_text[2:].strip()}"
    else:
        clean_text = message_text

    # 3. Execute SynapseOS Swarm Orchestrator
    agent_result = await orchestrate_health_request(
        message=clean_text,
        channel="whatsapp",
        user_id=sender_jid
    )

    response_text = format_response_for_whatsapp(agent_result.final_response)

    # Dispatch reply back to WhatsApp via OpenWA REST API
    success = await send_whatsapp_message(to_jid=sender_jid, text=response_text)

    return {
        "status": "processed",
        "sender": sender_jid,
        "reply_dispatched": success,
        "agent_trace_steps": len(agent_result.trace),
        "intent": agent_result.detected_intent
    }


def format_response_for_whatsapp(text: str) -> str:
    """Formats markdown response cleanly for WhatsApp client rendering."""
    if not text:
        return "Thank you for consulting SynapseOS. Please monitor your health and consult a physician if needed."
    
    formatted = text.strip()
    # Clean redundant markdown headers for WhatsApp readability
    formatted = formatted.replace("### ", "• *").replace("## ", "*").replace("# ", "*")
    if not formatted.endswith("\n\n_🌿 Powered by SynapseOS Multi-Agent Swarm_"):
        formatted += "\n\n_🌿 Powered by SynapseOS Multi-Agent Swarm_"
    return formatted


async def trigger_emergency_sos_whatsapp(
    emergency_contact: str,
    patient_name: str,
    location_coords: str,
    blood_group: str,
    critical_symptoms: str
) -> Dict[str, Any]:
    """Dispatches 1-click Emergency SOS alert to pre-set emergency contact via WhatsApp."""
    sos_message = (
        f"🚨 *SYNAPSEOS OS — EMERGENCY SOS ALERT* 🚨\n\n"
        f"Patient *{patient_name}* has triggered an urgent emergency medical alert.\n\n"
        f"• *Reported Condition:* {critical_symptoms}\n"
        f"• *Blood Group:* {blood_group}\n"
        f"• *Live GPS Coordinates:* {location_coords}\n"
        f"• *Google Maps Navigation:* https://maps.google.com/?q={location_coords}\n\n"
        f"Automated alert dispatched. Call national emergency services 112 / 108 directly."
    )
    delivery_result = await send_whatsapp_message(to_jid=emergency_contact, text=sos_message)
    return {
        "emergency_alert_dispatched": delivery_result.get("delivered", False),
        "dispatch_mode": delivery_result.get("mode", "SANDBOX_SIMULATION"),
        "contact_notified": emergency_contact,
        "patient": patient_name,
        "delivery_details": delivery_result
    }
