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
from backend.app.ml.digital_twin import DigitalTwinInput, simulate_10_year_trajectory, compute_baseline_organ_scores
from backend.app.ml.diagnostics import DiagnosticRiskRequest, calculate_clinical_risks
from backend.app.services.abdm_service import generate_abha_id, check_ayushman_bharat_schemes
from backend.app.services.pdf_service import generate_health_summary_pdf
from backend.app.services.whatsapp_service import process_whatsapp_inbound_webhook, trigger_emergency_sos_whatsapp
from backend.app.services.fhir_service import build_fhir_r4_bundle
from backend.app.agents.retrieval_agent import hybrid_retrieve_clinical_context
from backend.app.agents.appointment_agent import find_doctors_by_specialty, book_appointment_slot
from backend.app.services.i18n_service import translate_clinical_message

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
    image_type: str = Field(default="chest_xray")
    filename: Optional[str] = "chest_xray_scan.jpg"
    image_base64: Optional[str] = None


class PDFReportRequest(BaseModel):
    patient_name: str = Field(default="Siddharth Sharma")
    abha_id: str = Field(default="91-5829-3910-4821")
    triage_summary: str = Field(default="Routine seasonal checkup; vitals normal.")
    vital_signs: Optional[Dict[str, str]] = None
    medications: Optional[List[Dict[str, str]]] = None


class EmergencySOSRequest(BaseModel):
    emergency_contact: str = Field(default="+919876543210")
    patient_name: str = Field(default="Siddharth Sharma")
    location_coords: str = Field(default="28.6139,77.2090")
    blood_group: str = Field(default="O+")
    critical_symptoms: str = Field(default="Severe chest pain and dizziness")


@router.post("/orchestrate", tags=["Agent Swarm"])
async def orchestrate_endpoint(req: OrchestrateRequest):
    """Executes the complete multi-agent DAG workflow with live trace badges."""
    return await orchestrate_health_request(
        message=req.message,
        channel=req.channel,
        session_id=req.session_id,
        user_id=req.user_id
    )


@router.post("/triage", tags=["Clinical Intelligence"])
async def triage_endpoint(req: TriageRequest):
    """Clinical symptom triage categorization into Emergency, Doctor Consult, or Home Care."""
    return await analyze_symptoms(req.symptoms)


@router.post("/drugs/check", tags=["Clinical Intelligence"])
async def drug_check_endpoint(req: DrugCheckRequest):
    """NIH RxNav drug lookup and high-risk drug-drug interaction checker."""
    return await evaluate_drug_safety(req.query_or_meds)


@router.post("/scans/analyze", tags=["Vision AI"])
async def scan_analysis_endpoint(req: ScanAnalysisRequest):
    """MONAI lesion heatmap localization & plain-language scan/prescription explanation."""
    return analyze_medical_image(image_type=req.image_type, filename=req.filename, image_base64=req.image_base64)


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


@router.post("/sos/dispatch", tags=["Emergency SOS"])
async def emergency_sos_endpoint(req: EmergencySOSRequest):
    """Dispatches instant 1-click Emergency SOS alert packet via WhatsApp."""
    dispatch_res = await trigger_emergency_sos_whatsapp(
        emergency_contact=req.emergency_contact,
        patient_name=req.patient_name,
        location_coords=req.location_coords,
        blood_group=req.blood_group,
        critical_symptoms=req.critical_symptoms
    )
    return {
        "status": "SOS_DISPATCHED" if dispatch_res.get("emergency_alert_dispatched") else "SOS_QUEUED",
        "emergency_services_reference": ["112 (National Emergency)", "108 (Ambulance)"],
        "dispatch_details": dispatch_res,
        "location": req.location_coords
    }


@router.post("/whatsapp/webhook", tags=["Omnichannel"])
async def whatsapp_webhook_endpoint(payload: Dict[str, Any]):
    """OpenWA Inbound WhatsApp Webhook Handler."""
    return await process_whatsapp_inbound_webhook(payload)


@router.get("/fhir/bundle", tags=["EHR & FHIR R4"])
async def fhir_bundle_endpoint(patient_id: str = "PAT-91-4829", name: str = "Siddharth Sharma"):
    """Generates official HL7 FHIR R4 Bundle for Patient, Observations, and Conditions."""
    return build_fhir_r4_bundle(
        patient_id=patient_id,
        name=name,
        vitals={"systolic_bp": 120, "fasting_glucose": 95},
        conditions=["Essential Hypertension (Controlled)", "Seasonal Bronchitis"]
    )


@router.get("/retrieval/search", tags=["Hybrid Clinical RAG"])
async def retrieval_search_endpoint(query: str = "hypertension treatment"):
    """Searches WHO/ICMR 23-guideline corpus and Wikipedia medical REST API."""
    return await hybrid_retrieve_clinical_context(query)


@router.get("/appointments/doctors", tags=["Logistics & Appointments"])
async def list_doctors_endpoint(specialty: str = "General Physician"):
    """Lists available PM-JAY empanelled doctors by specialty."""
    return find_doctors_by_specialty(specialty)


@router.post("/appointments/schedule", tags=["Logistics & Appointments"])
async def schedule_appointment_endpoint(
    patient_name: str = "Siddharth Sharma",
    doctor_id: str = "DOC-AIIMS-101",
    slot_time: str = "Tomorrow at 10:30 AM"
):
    """Books doctor consultation slot and generates digital calendar ticket."""
    return book_appointment_slot(patient_name=patient_name, doctor_id=doctor_id, slot_time=slot_time)


@router.get("/i18n/translate", tags=["Multilingual Access"])
async def i18n_translate_endpoint(key: str = "emergency_alert", lang: str = "hi"):
    """Translates key clinical warnings into Hindi, Bengali, Tamil, Telugu, or Spanish."""
    return {
        "key": key,
        "language": lang,
        "translated_text": translate_clinical_message(key, lang)
    }

