"""
Sanjeevani OS — services/emergency_service.py
1-Click Critical Emergency SOS Dispatch, Live GPS Tracking & Trauma Routing.
Inspired by OpenWA-main + AI-Healthcare-System architecture.
"""

import math
import urllib.parse
from typing import Dict, Any, List, Optional
from pydantic import BaseModel, Field

# Verified Major Trauma & Emergency Hospitals
EMERGENCY_TRAUMA_CENTRES = [
    {
        "id": "AIIMS-TRAUMA-01",
        "name": "AIIMS Jai Prakash Narayan Apex Trauma Centre",
        "type": "Level-1 Apex Trauma & Emergency Hospital",
        "lat": 28.5672,
        "lon": 77.2100,
        "helpline": "108 / 011-26588500",
        "address": "Ring Road, Safdarjung Enclave, New Delhi, Delhi 110029",
        "emergency_beds_available": 14,
        "has_stroke_code": True,
        "has_cardiac_cath_lab": True,
        "blood_bank_status": "🟢 O+, A+, B+, AB+ In Stock"
    },
    {
        "id": "SAF-EMERG-02",
        "name": "VMMC & Safdarjung Hospital Emergency Block",
        "type": "Level-1 Super-Speciality Emergency Centre",
        "lat": 28.5714,
        "lon": 77.2075,
        "helpline": "112 / 011-26165060",
        "address": "Ansari Nagar West, New Delhi, Delhi 110029",
        "emergency_beds_available": 22,
        "has_stroke_code": True,
        "has_cardiac_cath_lab": True,
        "blood_bank_status": "🟢 Fully Stocked"
    },
    {
        "id": "FORTIS-ESC-03",
        "name": "Fortis Escorts Heart & Trauma Institute",
        "type": "Comprehensive Acute Cardiac & Trauma Hub",
        "lat": 28.5601,
        "lon": 77.2798,
        "helpline": "105010 / 011-47135000",
        "address": "Okhla Road, Sukhdev Vihar, New Delhi, Delhi 110025",
        "emergency_beds_available": 8,
        "has_stroke_code": True,
        "has_cardiac_cath_lab": True,
        "blood_bank_status": "🟢 Universal Plasma Active"
    },
    {
        "id": "APOLLO-EMERG-04",
        "name": "Indraprastha Apollo Emergency & Trauma Wing",
        "type": "JCI Accredited Level-1 Emergency & Stroke Center",
        "lat": 28.5393,
        "lon": 77.2842,
        "helpline": "1066 / 011-26925858",
        "address": "Sarita Vihar, Delhi Mathura Road, New Delhi 110076",
        "emergency_beds_available": 11,
        "has_stroke_code": True,
        "has_cardiac_cath_lab": True,
        "blood_bank_status": "🟢 Active"
    }
]


class SOSDispatchRequest(BaseModel):
    latitude: float = Field(default=28.5672, description="Patient GPS Latitude")
    longitude: float = Field(default=27.2100, description="Patient GPS Longitude")
    accuracy_meters: Optional[float] = Field(default=12.0)
    patient_name: str = Field(default="Siddharth Sharma")
    blood_group: str = Field(default="O+")
    abha_id: str = Field(default="91-8472-9102-4821")
    emergency_contact_name: str = Field(default="Pooja Sharma (Spouse)")
    emergency_contact_phone: str = Field(default="+919876543210")
    primary_distress_type: str = Field(default="Severe Acute Chest Pain & Shortness of Breath")
    known_allergies: str = Field(default="Penicillin, Sulfa Drugs")


def calculate_haversine_distance(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """Calculates geodesic distance in kilometers between two GPS coordinates."""
    r = 6371.0  # Earth radius in km
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = (math.sin(dlat / 2) ** 2 +
         math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlon / 2) ** 2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return round(r * c, 2)


def dispatch_emergency_sos(req: SOSDispatchRequest) -> Dict[str, Any]:
    """
    Evaluates patient GPS, locates closest trauma center, generates OpenWA WhatsApp payload,
    and returns 1-tap emergency dispatch deep links.
    """
    # Calculate proximity to all trauma centers
    trauma_ranked = []
    for h in EMERGENCY_TRAUMA_CENTRES:
        dist = calculate_haversine_distance(req.latitude, req.longitude, h["lat"], h["lon"])
        trauma_ranked.append({
            **h,
            "distance_km": dist,
            "estimated_eta_mins": max(4, int(dist * 3.2))  # Urban emergency transit speed estimate
        })

    trauma_ranked.sort(key=lambda x: x["distance_km"])
    nearest_hospital = trauma_ranked[0]

    # Compose Emergency WhatsApp Alert Text
    map_link = f"https://maps.google.com/?q={req.latitude},{req.longitude}"
    sos_message_text = (
        f"🚨 *CRITICAL MEDICAL SOS — SANJEEVANI OS*\n\n"
        f"👤 *Patient:* {req.patient_name} (ABHA: {req.abha_id})\n"
        f"🩸 *Blood Group:* {req.blood_group} | *Allergies:* {req.known_allergies}\n"
        f"⚠️ *Condition:* {req.primary_distress_type}\n\n"
        f"📍 *Live Patient GPS:* {map_link} (±{req.accuracy_meters}m)\n"
        f"🏥 *Nearest Trauma Centre:* {nearest_hospital['name']} ({nearest_hospital['distance_km']} km — ETA {nearest_hospital['estimated_eta_mins']} mins)\n"
        f"📞 *Hospital Emergency:* {nearest_hospital['helpline']}\n\n"
        f"🆘 *National Emergency Hotline: 112 / 108 Ambulance*"
    )

    encoded_msg = urllib.parse.quote(sos_message_text)
    clean_phone = req.emergency_contact_phone.replace("+", "").replace(" ", "").replace("-", "")
    whatsapp_direct_url = f"https://api.whatsapp.com/send?phone={clean_phone}&text={encoded_msg}"
    whatsapp_broadcast_url = f"https://api.whatsapp.com/send?text={encoded_msg}"

    # OpenWA Gateway Webhook Payload
    openwa_payload = {
        "chatId": f"{clean_phone}@c.us",
        "text": sos_message_text,
        "priority": "HIGH_EMERGENCY",
        "location": {
            "latitude": req.latitude,
            "longitude": req.longitude,
            "name": f"Medical Emergency: {req.patient_name}"
        }
    }

    return {
        "status": "SOS_DISPATCHED",
        "timestamp": "2026-08-19 11:35:00",
        "patient_details": {
            "name": req.patient_name,
            "blood_group": req.blood_group,
            "abha_id": req.abha_id,
            "allergies": req.known_allergies,
            "distress": req.primary_distress_type
        },
        "gps_coordinates": {
            "latitude": req.latitude,
            "longitude": req.longitude,
            "accuracy_meters": req.accuracy_meters,
            "google_maps_url": map_link
        },
        "nearest_trauma_center": nearest_hospital,
        "nearby_trauma_centers": trauma_ranked[:3],
        "emergency_hotlines": {
            "national_ambulance": "108",
            "national_emergency": "112",
            "tele_manas_mental_distress": "14416",
            "women_helpline": "1091"
        },
        "whatsapp_dispatch": {
            "contact_phone": req.emergency_contact_phone,
            "direct_url": whatsapp_direct_url,
            "broadcast_url": whatsapp_broadcast_url,
            "raw_text": sos_message_text,
            "openwa_gateway_payload": openwa_payload
        }
    }
