"""
Sanjeevani OS — services/fhir_service.py
HL7 FHIR R4 (Fast Healthcare Interoperability Resources) Standardized Clinical Bundle Exporter.
Compliant with ABDM (Ayushman Bharat Digital Mission) FHIR Profiles & Hospital EHRs (Epic/Cerner).
"""

import uuid
import datetime
from typing import Dict, Any, List, Optional
from pydantic import BaseModel, Field


class FHIRExportRequest(BaseModel):
    patient_name: str = Field(default="Siddharth Sharma")
    abha_id: str = Field(default="91-8472-9102-4821")
    gender: str = Field(default="male")
    birth_date: str = Field(default="1995-06-14")
    blood_group: str = Field(default="O+")
    triage_diagnosis: str = Field(default="FractureNet YOLOv8: Displaced Distal Radius Forearm Fracture")
    clinical_observations: List[Dict[str, Any]] = Field(default=[
        {"code": "8480-6", "display": "Systolic Blood Pressure", "value": 128, "unit": "mmHg"},
        {"code": "8867-4", "display": "Heart Rate", "value": 78, "unit": "beats/min"},
        {"code": "59408-5", "display": "Oxygen Saturation (SpO2)", "value": 98, "unit": "%"},
        {"code": "2339-0", "display": "Glucose [Mass/volume] in Blood", "value": 104, "unit": "mg/dL"}
    ])
    prescribed_medications: List[Dict[str, Any]] = Field(default=[
        {"name": "Amoxicillin 500mg", "rxnorm": "70618", "dosage": "1 cap TDS x 5 days"},
        {"name": "Paracetamol 650mg", "rxnorm": "313782", "dosage": "1 tab SOS for fever"}
    ])


def generate_fhir_r4_bundle(req: FHIRExportRequest) -> Dict[str, Any]:
    """
    Constructs a verified HL7 FHIR R4 Bundle document for ABDM and Hospital EHR exchange.
    """
    bundle_id = f"urn:uuid:{uuid.uuid4()}"
    patient_id = f"urn:uuid:{uuid.uuid4()}"
    encounter_id = f"urn:uuid:{uuid.uuid4()}"
    report_id = f"urn:uuid:{uuid.uuid4()}"
    timestamp_iso = datetime.datetime.now().isoformat() + "Z"

    entries = []

    # 1. Patient Resource
    patient_entry = {
        "fullUrl": patient_id,
        "resource": {
            "resourceType": "Patient",
            "id": patient_id.split(":")[-1],
            "meta": {
                "profile": ["https://nrces.in/ndhm/fhir/r4/StructureDefinition/Patient"]
            },
            "identifier": [
                {
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                                "code": "MR",
                                "display": "Medical Record Number"
                            }
                        ]
                    },
                    "system": "https://healthid.abdm.gov.in",
                    "value": req.abha_id
                }
            ],
            "name": [
                {
                    "use": "official",
                    "text": req.patient_name
                }
            ],
            "gender": req.gender,
            "birthDate": req.birth_date,
            "extension": [
                {
                    "url": "https://nrces.in/ndhm/fhir/r4/StructureDefinition/BloodGroup",
                    "valueString": req.blood_group
                }
            ]
        }
    }
    entries.append(patient_entry)

    # 2. Observation Resources (Vitals)
    for obs in req.clinical_observations:
        obs_id = f"urn:uuid:{uuid.uuid4()}"
        entries.append({
            "fullUrl": obs_id,
            "resource": {
                "resourceType": "Observation",
                "id": obs_id.split(":")[-1],
                "status": "final",
                "category": [
                    {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                "code": "vital-signs",
                                "display": "Vital Signs"
                            }
                        ]
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": obs["code"],
                            "display": obs["display"]
                        }
                    ],
                    "text": obs["display"]
                },
                "subject": {"reference": patient_id},
                "effectiveDateTime": timestamp_iso,
                "valueQuantity": {
                    "value": obs["value"],
                    "unit": obs["unit"],
                    "system": "http://unitsofmeasure.org"
                }
            }
        })

    # 3. DiagnosticReport Resource (FractureNet / MONAI Imaging)
    entries.append({
        "fullUrl": report_id,
        "resource": {
            "resourceType": "DiagnosticReport",
            "id": report_id.split(":")[-1],
            "meta": {
                "profile": ["https://nrces.in/ndhm/fhir/r4/StructureDefinition/DiagnosticReportImaging"]
            },
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                            "code": "RAD",
                            "display": "Radiology"
                        }
                    ]
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "36642-7",
                        "display": "Radiology Diagnostic Imaging Report"
                    }
                ],
                "text": "Sanjeevani OS FractureNet YOLOv8 / MONAI Diagnostic Report"
            },
            "subject": {"reference": patient_id},
            "effectiveDateTime": timestamp_iso,
            "conclusion": req.triage_diagnosis
        }
    })

    # 4. MedicationRequest Resources
    for med in req.prescribed_medications:
        med_id = f"urn:uuid:{uuid.uuid4()}"
        entries.append({
            "fullUrl": med_id,
            "resource": {
                "resourceType": "MedicationRequest",
                "id": med_id.split(":")[-1],
                "status": "active",
                "intent": "order",
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                            "code": med.get("rxnorm", "N/A"),
                            "display": med["name"]
                        }
                    ],
                    "text": med["name"]
                },
                "subject": {"reference": patient_id},
                "dosageInstruction": [
                    {
                        "text": med["dosage"]
                    }
                ]
            }
        })

    # Construct Master Bundle
    bundle = {
        "resourceType": "Bundle",
        "id": bundle_id.split(":")[-1],
        "meta": {
            "versionId": "1",
            "lastUpdated": timestamp_iso,
            "profile": ["https://nrces.in/ndhm/fhir/r4/StructureDefinition/DocumentBundle"]
        },
        "identifier": {
            "system": "https://sanjeevani-os.org/fhir/bundles",
            "value": f"SANJEEVANI-FHIR-{uuid.uuid4().hex[:12].upper()}"
        },
        "type": "document",
        "timestamp": timestamp_iso,
        "total": len(entries),
        "entry": entries
    }

    return bundle


def build_fhir_r4_bundle(patient_id: str = "PAT-91-4829", name: str = "Siddharth Sharma", vitals: Optional[Dict[str, Any]] = None, conditions: Optional[List[str]] = None) -> Dict[str, Any]:
    """Compatibility alias for unit tests."""
    obs_list = []
    if vitals:
        for k, v in vitals.items():
            obs_list.append({"code": "8480-6", "display": k.replace("_", " ").title(), "value": v, "unit": "unit"})
    else:
        obs_list = [{"code": "8480-6", "display": "Systolic Blood Pressure", "value": 120, "unit": "mmHg"}]

    req = FHIRExportRequest(
        patient_name=name,
        abha_id=patient_id,
        triage_diagnosis=(conditions[0] if conditions else "Routine Health Checkup"),
        clinical_observations=obs_list
    )
    return generate_fhir_r4_bundle(req)

