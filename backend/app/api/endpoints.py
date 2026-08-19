"""
Sanjeevani OS — api/endpoints.py
Unified FastAPI API endpoints for Sanjeevani OS.
"""

from fastapi import APIRouter, HTTPException, Response
from pydantic import BaseModel, Field
from typing import Dict, Any, List, Optional

from backend.app.agents.orchestrator import orchestrate_health_request
from backend.app.agents.triage_agent import analyze_symptoms
from backend.app.agents.drug_agent import evaluate_drug_safety
from backend.app.agents.scan_agent import analyze_medical_image
from backend.app.agents.mental_health_agent import evaluate_mental_wellbeing
from backend.app.ml.digital_twin import DigitalTwinInput, simulate_10_year_trajectory, compute_baseline_organ_scores
from backend.app.ml.diagnostics import DiagnosticRiskRequest, calculate_clinical_risks
from backend.app.services.abdm_service import generate_abha_id, check_ayushman_bharat_schemes
from backend.app.services.pdf_service import generate_health_summary_pdf
from backend.app.services.appointment_service import (
    get_available_doctors, book_appointment, AppointmentBookingRequest
)
from backend.app.services.emergency_service import (
    dispatch_emergency_sos, SOSDispatchRequest
)
from backend.app.services.fhir_service import (
    generate_fhir_r4_bundle, FHIRExportRequest
)

router = APIRouter()


class OrchestrateRequest(BaseModel):
    message: str = Field(..., example="I have a headache and fever, can I take ibuprofen with warfarin?")
    channel: str = Field(default="web")
    session_id: Optional[str] = None
    user_id: Optional[str] = "demo_user"


class TriageRequest(BaseModel):
    symptoms: str = Field(..., example="Chest pain radiating to left arm with shortness of breath")


class DrugCheckRequest(BaseModel):
    query_or_meds: str = Field(..., example="Can I combine aspirin and warfarin?")


class ScanAnalysisRequest(BaseModel):
    image_type: str = Field(default="bone_fracture")
    filename: Optional[str] = "fracture_scan.jpg"
    image_base64: Optional[str] = None


class PDFReportRequest(BaseModel):
    patient_name: str = Field(default="Siddharth Sharma")
    abha_id: str = Field(default="91-8472-9102-4821")
    triage_summary: str = Field(default="Routine seasonal checkup; vitals normal.")
    vital_signs: Optional[Dict[str, str]] = None
    medications: Optional[List[Dict[str, str]]] = None


class MentalHealthChatRequest(BaseModel):
    message: str = Field(default="I have been feeling very anxious, exhausted, and having trouble sleeping.")


# ============================================================================
# 1. CORE AGENT SWARM & CLINICAL REASONING
# ============================================================================

@router.post("/orchestrate", tags=["Agent Swarm"])
async def orchestrate_endpoint(req: OrchestrateRequest):
    """Executes the complete multi-agent DAG workflow with live LLM synthesis."""
    return await orchestrate_health_request(
        message=req.message,
        channel=req.channel,
        session_id=req.session_id,
        user_id=req.user_id
    )


@router.post("/triage", tags=["Clinical Intelligence"])
async def triage_endpoint(req: TriageRequest):
    """Clinical symptom triage categorization into Emergency, Doctor Consult, or Home Care via Groq/OpenRouter."""
    return await analyze_symptoms(req.symptoms)


@router.post("/drugs/check", tags=["Clinical Intelligence"])
async def drug_check_endpoint(req: DrugCheckRequest):
    """NIH RxNav drug lookup and high-risk drug-drug interaction checker."""
    return await evaluate_drug_safety(req.query_or_meds)


@router.post("/scans/analyze", tags=["Vision AI"])
async def scan_analysis_endpoint(req: ScanAnalysisRequest):
    """FractureNet YOLOv8 bone fracture detector & MONAI/TrOCR imaging pipeline."""
    return analyze_medical_image(image_type=req.image_type, filename=req.filename, image_base64=req.image_base64)


# ============================================================================
# 2. FEATURE 1: VOICE-TO-VOICE DOCTOR & APPOINTMENT SCHEDULING (MedAgent)
# ============================================================================

@router.get("/appointments/doctors", tags=["Appointments & Voice Doctor"])
async def get_doctors_endpoint(specialty: Optional[str] = "all"):
    """Returns list of specialists with real-time available slots."""
    return get_available_doctors(specialty=specialty)


@router.post("/appointments/book", tags=["Appointments & Voice Doctor"])
async def book_appointment_endpoint(req: AppointmentBookingRequest):
    """Confirms appointment booking, locks slot, generates token and .ics calendar sync."""
    return book_appointment(req)


# ============================================================================
# 3. FEATURE 2: 1-CLICK EMERGENCY SOS DISPATCH & GPS (OpenWA + AI-Healthcare)
# ============================================================================

@router.post("/emergency/sos-dispatch", tags=["Emergency SOS"])
async def emergency_sos_dispatch_endpoint(req: SOSDispatchRequest):
    """
    1-Click Emergency SOS Trigger: Acquires live GPS, calculates closest Level-1 trauma center,
    generates OpenWA WhatsApp webhook payload and direct 1-tap dispatch links.
    """
    return dispatch_emergency_sos(req)


# ============================================================================
# 4. FEATURE 3: WHO TELE-MANAS EMOTIONAL SANCTUARY (Mental-Health-Chatbot)
# ============================================================================

@router.post("/mental-health/chat", tags=["Emotional Sanctuary & Tele-MANAS"])
async def mental_health_chat_endpoint(req: MentalHealthChatRequest):
    """Supportive emotional counseling grounded in WHO mhGAP protocols and Tele-MANAS guidelines."""
    return await evaluate_mental_wellbeing(req.message)


@router.get("/mental-health/resources", tags=["Emotional Sanctuary & Tele-MANAS"])
async def mental_health_resources_endpoint():
    """Returns official National Mental Health Helplines (Tele-MANAS 14416) & grounding techniques."""
    return {
        "tele_manas_helpline": "14416 / 1800-891-4416 (24/7 Toll-Free, 20+ Languages)",
        "kiran_mental_health": "1800-599-0019",
        "women_distress": "1091",
        "emergency": "112",
        "guided_breathing_cycles": [
            {"name": "4-7-8 Bio-Feedback Regulation", "inhale_s": 4, "hold_s": 7, "exhale_s": 8, "cycles": 4},
            {"name": "Box Breathing (Navy SEALs)", "inhale_s": 4, "hold_s": 4, "exhale_s": 4, "cycles": 4}
        ]
    }


# ============================================================================
# 5. FEATURE 4: HL7 FHIR R4 STANDARDIZED CLINICAL BUNDLE EXPORTER (AI-Healthcare)
# ============================================================================

@router.post("/fhir/export-bundle", tags=["EHR & FHIR R4"])
async def fhir_export_bundle_endpoint(req: FHIRExportRequest):
    """Generates official HL7 FHIR R4 Document Bundle compliant with ABDM and hospital EHRs."""
    return generate_fhir_r4_bundle(req)


# ============================================================================
# 6. DIGITAL TWIN, DIAGNOSTICS & ABDM HEALTH PASSPORT
# ============================================================================

@router.post("/digital-twin/simulate", tags=["Digital Health Twin"])
async def digital_twin_endpoint(req: DigitalTwinInput):
    """10-year longitudinal multi-organ trajectory simulation (Heart, Kidneys, Liver, Pancreas, Lungs)."""
    return simulate_10_year_trajectory(req)


@router.get("/digital-twin/baseline", tags=["Digital Health Twin"])
async def digital_twin_baseline():
    """Returns baseline 3D organ color indices for Three.js viewer."""
    return compute_baseline_organ_scores(DigitalTwinInput())


@router.post("/diagnostics/risk-score", tags=["Clinical ML"])
async def diagnostic_risk_endpoint(req: DiagnosticRiskRequest):
    """Quantitative Framingham CVD, ADA Diabetes, CKD eGFR, and FIB-4 Liver calculations."""
    return calculate_clinical_risks(req)


@router.get("/abdm/generate-id", tags=["Gov Schemes & ABDM"])
async def abdm_id_endpoint(name: str = "Demo Citizen", year_of_birth: int = 1995, state_code: str = "DL"):
    """Generates mock Indian ABHA Health ID & PM-JAY eligibility profile."""
    return generate_abha_id(name=name, year_of_birth=year_of_birth, state_code=state_code)


@router.get("/abdm/schemes", tags=["Gov Schemes & ABDM"])
async def abdm_schemes_endpoint():
    """Returns Indian Government health schemes (PM-JAY, Jan Aushadhi, Tele-MANAS, Ni-kshay)."""
    return check_ayushman_bharat_schemes()


@router.post("/reports/generate-pdf", tags=["Health Records"])
async def generate_pdf_endpoint(req: PDFReportRequest):
    """Generates downloadable clinical PDF health report with verifiable blockchain QR code."""
    pdf_bytes = generate_health_summary_pdf(
        patient_name=req.patient_name,
        abha_id=req.abha_id,
        triage_summary=req.triage_summary,
        vital_signs=req.vital_signs,
        medications=req.medications
    )
    return Response(
        content=pdf_bytes,
        media_type="application/pdf",
        headers={"Content-Disposition": f"attachment; filename=Sanjeevani_Health_Summary_{req.patient_name.replace(' ', '_')}.pdf"}
    )
