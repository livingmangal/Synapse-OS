"""
SynapseOS — services/whatsapp_service.py
Backward-compatible proxy re-exporting from dedicated openwa package (backend/app/openwa).
"""

from backend.app.openwa import (
    process_whatsapp_inbound_webhook,
    send_whatsapp_message,
    send_whatsapp_image,
    trigger_emergency_sos_whatsapp,
    MAIN_MENU_TEXT,
    format_response_for_whatsapp
)

__all__ = [
    "process_whatsapp_inbound_webhook",
    "send_whatsapp_message",
    "send_whatsapp_image",
    "trigger_emergency_sos_whatsapp",
    "MAIN_MENU_TEXT",
    "format_response_for_whatsapp"
]


