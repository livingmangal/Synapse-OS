"""
SynapseOS — backend/app/openwa
Dedicated OpenWA WhatsApp Integration Package.
"""

from backend.app.openwa.service import (
    process_whatsapp_inbound_webhook,
    trigger_emergency_sos_whatsapp,
    MAIN_MENU_TEXT,
    format_response_for_whatsapp
)
from backend.app.openwa.client import (
    send_whatsapp_message,
    send_whatsapp_image
)

__all__ = [
    "process_whatsapp_inbound_webhook",
    "trigger_emergency_sos_whatsapp",
    "send_whatsapp_message",
    "send_whatsapp_image",
    "MAIN_MENU_TEXT",
    "format_response_for_whatsapp"
]
