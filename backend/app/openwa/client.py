"""
SynapseOS — openwa/client.py
HTTP REST Client for OpenWA WhatsApp Gateway.
Supports sending text, markdown, and media images via OpenWA endpoints.
"""

import httpx
import logging
from typing import Dict, Any
from backend.app.core.config import settings

logger = logging.getLogger(__name__)


async def send_whatsapp_message(to_jid: str, text: str) -> Dict[str, Any]:
    """Sends outbound WhatsApp message using OpenWA HTTP API or reports sandbox simulation."""
    if not settings.OPENWA_API_KEY:
        logger.info(f"[OpenWA Sandbox] Outbound message to {to_jid}:\n{text}")
        return {
            "delivered": True,
            "mode": "SANDBOX_SIMULATION",
            "info": "OpenWA API key not set. Message logged to local sandbox audit stream."
        }

    endpoints = [
        f"{settings.OPENWA_URL}/api/v1/messages/send-text",
        f"{settings.OPENWA_URL}/sendText"
    ]
    headers = {
        "Authorization": f"Bearer {settings.OPENWA_API_KEY}",
        "Content-Type": "application/json",
        "api-key": settings.OPENWA_API_KEY
    }
    
    for url in endpoints:
        try:
            async with httpx.AsyncClient() as client:
                resp = await client.post(
                    url,
                    json={"to": to_jid, "chatId": to_jid, "message": text, "content": text},
                    headers=headers,
                    timeout=6.0
                )
                if resp.status_code in (200, 201):
                    return {
                        "delivered": True,
                        "mode": "OPENWA_LIVE_GATEWAY",
                        "status_code": resp.status_code,
                        "endpoint": url
                    }
        except Exception as e:
            logger.warning(f"Failed dispatching to OpenWA endpoint {url}: {e}")

    return {
        "delivered": False,
        "mode": "GATEWAY_OFFLINE",
        "info": "OpenWA server unreachable at configured endpoint."
    }


async def send_whatsapp_image(to_jid: str, image_base64: str, caption: str = "") -> Dict[str, Any]:
    """Sends outbound WhatsApp image/scan using OpenWA HTTP API."""
    if not settings.OPENWA_API_KEY:
        return {
            "delivered": True,
            "mode": "SANDBOX_SIMULATION",
            "info": "OpenWA API key not set. Image logged to local sandbox audit stream."
        }

    endpoints = [
        f"{settings.OPENWA_URL}/api/v1/messages/send-image",
        f"{settings.OPENWA_URL}/sendImage"
    ]
    headers = {
        "Authorization": f"Bearer {settings.OPENWA_API_KEY}",
        "Content-Type": "application/json",
        "api-key": settings.OPENWA_API_KEY
    }

    for url in endpoints:
        try:
            async with httpx.AsyncClient() as client:
                resp = await client.post(
                    url,
                    json={
                        "to": to_jid,
                        "chatId": to_jid,
                        "file": image_base64,
                        "filename": "scan_diagnostic.jpg",
                        "caption": caption
                    },
                    headers=headers,
                    timeout=10.0
                )
                if resp.status_code in (200, 201):
                    return {
                        "delivered": True,
                        "mode": "OPENWA_LIVE_GATEWAY",
                        "status_code": resp.status_code
                    }
        except Exception as e:
            logger.warning(f"Failed dispatching image to OpenWA {url}: {e}")

    return {"delivered": False, "mode": "GATEWAY_OFFLINE"}
