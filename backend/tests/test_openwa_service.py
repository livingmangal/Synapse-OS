"""
Sanjeevani OS — tests/test_openwa_service.py
Unit tests for OpenWA WhatsApp Webhook Ingestion, Interactive Menu Engine,
Agent Swarm Routing, Medical Image Ingestion, and Emergency Protocols.
"""

import pytest
from backend.app.services.whatsapp_service import (
    process_whatsapp_inbound_webhook,
    MAIN_MENU_TEXT,
    format_response_for_whatsapp,
    trigger_emergency_sos_whatsapp
)


@pytest.mark.asyncio
async def test_whatsapp_greeting_menu():
    """Tests that greetings like 'hi' or 'menu' return the interactive clinical menu."""
    payload = {
        "event": "onMessage",
        "data": {
            "from": "919876543210@c.us",
            "body": "Hi",
            "type": "chat"
        }
    }
    result = await process_whatsapp_inbound_webhook(payload)
    assert result["status"] == "processed"
    assert result["type"] == "menu_dispatched"
    assert result["sender"] == "919876543210@c.us"


@pytest.mark.asyncio
async def test_whatsapp_numbered_drug_check():
    """Tests Option 2 for drug safety check via WhatsApp."""
    payload = {
        "event": "onMessage",
        "data": {
            "from": "919876543210@c.us",
            "body": "2 Can I take Aspirin with Warfarin?",
            "type": "chat"
        }
    }
    result = await process_whatsapp_inbound_webhook(payload)
    assert result["status"] == "processed"
    assert result["type"] == "drug_check"
    assert result["reply_dispatched"]["delivered"] is True


@pytest.mark.asyncio
async def test_whatsapp_emergency_sos():
    """Tests triggering emergency SOS keyword over WhatsApp."""
    payload = {
        "event": "onMessage",
        "data": {
            "from": "919876543210@c.us",
            "body": "SOS",
            "type": "chat"
        }
    }
    result = await process_whatsapp_inbound_webhook(payload)
    assert result["status"] == "processed"
    assert result["type"] == "emergency_sos"


@pytest.mark.asyncio
async def test_whatsapp_doctor_lookup():
    """Tests Option 5 for PM-JAY doctor search."""
    payload = {
        "event": "onMessage",
        "data": {
            "from": "919876543210@c.us",
            "body": "5 Cardiologist",
            "type": "chat"
        }
    }
    result = await process_whatsapp_inbound_webhook(payload)
    assert result["status"] == "processed"
    assert result["type"] == "doctor_lookup"


@pytest.mark.asyncio
async def test_whatsapp_abha_schemes():
    """Tests Option 6 for ABHA and Ayushman Bharat scheme details."""
    payload = {
        "event": "onMessage",
        "data": {
            "from": "919876543210@c.us",
            "body": "6",
            "type": "chat"
        }
    }
    result = await process_whatsapp_inbound_webhook(payload)
    assert result["status"] == "processed"
    assert result["type"] == "abha_info"


@pytest.mark.asyncio
async def test_whatsapp_image_scan_analysis():
    """Tests medical imaging upload over WhatsApp."""
    payload = {
        "event": "onMessage",
        "data": {
            "from": "919876543210@c.us",
            "body": "chest_scan.jpg",
            "caption": "Doctor, please check this chest scan for cough",
            "type": "image"
        }
    }
    result = await process_whatsapp_inbound_webhook(payload)
    assert result["status"] == "processed"
    assert result["type"] == "medical_image"
    assert "scan_summary" in result


@pytest.mark.asyncio
async def test_whatsapp_natural_symptom_triage():
    """Tests natural language clinical triage message."""
    payload = {
        "event": "onMessage",
        "data": {
            "from": "919876543210@c.us",
            "body": "I have mild sore throat, sneezing and runny nose",
            "type": "chat"
        }
    }
    result = await process_whatsapp_inbound_webhook(payload)
    assert result["status"] == "processed"
    assert result["sender"] == "919876543210@c.us"
    assert result["reply_dispatched"]["delivered"] is True


@pytest.mark.asyncio
async def test_emergency_sos_direct_dispatch():
    """Tests direct 1-click SOS broadcast function."""
    res = await trigger_emergency_sos_whatsapp(
        emergency_contact="+919876543210",
        patient_name="Siddharth Sharma",
        location_coords="28.6139,77.2090",
        blood_group="B+",
        critical_symptoms="Severe breathlessness"
    )
    assert res["emergency_alert_dispatched"] is True
    assert res["contact_notified"] == "+919876543210"
