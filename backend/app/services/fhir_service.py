"""
Sanjeevani OS — services/fhir_service.py
HL7 / FHIR R4 (Fast Healthcare Interoperability Resources) Standard Data Models.
Ported from AI-Healthcare-System fhir.py for Sanjeevani OS EHR Interoperability.
Generates compliant FHIR R4 Bundles for Patient, Observations (Vitals), Conditions, and DiagnosticReports.
"""

from typing import Dict, Any, List
from datetime import datetime
import uuid


def build_fhir_r4_bundle(
    patient_id: str,
    name: str,
    gender: str = "male",
    birth_date: str = "1995-05-12",
    vitals: Dict[str, Any] = None,
    conditions: List[str] = None
) -> Dict[str, Any]:
    """Generates an official HL7 FHIR R4 Bundle containing Patient, Observations, and Conditions."""
    bundle_id = str(uuid.uuid4())
    timestamp = datetime.utcnow().isoformat() + "Z"

    entries = []

    # 1. FHIR Patient Resource
    patient_resource = {
        "resourceType": "Patient",
        "id": patient_id,
        "identifier": [
            {
                "system": "https://healthid.ndhm.gov.in",
                "value": patient_id,
                "type": {"coding": [{"system": "http://terminology.hl7.org/CodeSystem/v2-0203", "code": "MR"}]}
            }
        ],
        "active": True,
        "name": [{"use": "official", "text": name}],
        "gender": gender.lower(),
        "birthDate": birth_date
    }
    entries.append({
        "fullUrl": f"urn:uuid:{uuid.uuid4()}",
        "resource": patient_resource
    })

    # 2. FHIR Observation Resources (Vitals)
    if vitals:
        if "systolic_bp" in vitals:
            entries.append({
                "fullUrl": f"urn:uuid:{uuid.uuid4()}",
                "resource": {
                    "resourceType": "Observation",
                    "status": "final",
                    "category": [{"coding": [{"system": "http://terminology.hl7.org/CodeSystem/observation-category", "code": "vital-signs"}]}],
                    "code": {"coding": [{"system": "http://loinc.org", "code": "8480-6", "display": "Systolic blood pressure"}]},
                    "subject": {"reference": f"Patient/{patient_id}"},
                    "valueQuantity": {"value": vitals["systolic_bp"], "unit": "mmHg", "system": "http://unitsofmeasure.org", "code": "mm[Hg]"}
                }
            })
        if "fasting_glucose" in vitals:
            entries.append({
                "fullUrl": f"urn:uuid:{uuid.uuid4()}",
                "resource": {
                    "resourceType": "Observation",
                    "status": "final",
                    "category": [{"coding": [{"system": "http://terminology.hl7.org/CodeSystem/observation-category", "code": "laboratory"}]}],
                    "code": {"coding": [{"system": "http://loinc.org", "code": "1558-6", "display": "Fasting Glucose [Mass/volume] in Blood"}]},
                    "subject": {"reference": f"Patient/{patient_id}"},
                    "valueQuantity": {"value": vitals["fasting_glucose"], "unit": "mg/dL", "system": "http://unitsofmeasure.org", "code": "mg/dL"}
                }
            })

    # 3. FHIR Condition Resources
    if conditions:
        for cond in conditions:
            entries.append({
                "fullUrl": f"urn:uuid:{uuid.uuid4()}",
                "resource": {
                    "resourceType": "Condition",
                    "clinicalStatus": {"coding": [{"system": "http://terminology.hl7.org/CodeSystem/condition-clinical", "code": "active"}]},
                    "verificationStatus": {"coding": [{"system": "http://terminology.hl7.org/CodeSystem/condition-ver-status", "code": "confirmed"}]},
                    "code": {"text": cond},
                    "subject": {"reference": f"Patient/{patient_id}"},
                    "recordedDate": timestamp
                }
            })

    return {
        "resourceType": "Bundle",
        "id": bundle_id,
        "type": "collection",
        "timestamp": timestamp,
        "total": len(entries),
        "entry": entries
    }
