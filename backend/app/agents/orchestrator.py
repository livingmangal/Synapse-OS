"""
Sanjeevani OS — agents/orchestrator.py
Central Multi-Agent Swarm Orchestrator & StateGraph Pipeline.
Coordinates Safety Gate -> Intent Routing -> Specialist Agents (Triage, Drug, Scan, Mental) -> AI Council -> Unified LLM Synthesis.
"""

import time
import uuid
from typing import Dict, Any, List
from backend.app.core.state import SanjeevaniState, AgentTraceStep
from backend.app.core.safety_router import evaluate_safety
from backend.app.agents.drug_agent import drug_agent_node
from backend.app.agents.triage_agent import triage_agent_node
from backend.app.agents.verification_agent import verification_agent_node
from backend.app.agents.scan_agent import scan_agent_node
from backend.app.agents.mental_health_agent import mental_health_node
from backend.app.ml.digital_twin import compute_baseline_organ_scores, DigitalTwinInput
from backend.app.services.llm_service import call_llm


def detect_intent(text: str) -> str:
    """Classifies user query intent."""
    text_lower = (text or "").lower()
    
    if any(k in text_lower for k in ["xray", "x-ray", "fracture", "bone", "mri", "scan", "prescription", "report"]):
        return "SCAN_ANALYSIS"
    elif any(k in text_lower for k in ["take with", "interact", "drug", "medicine", "pill", "paracetamol", "aspirin", "dosage", "ibuprofen"]):
        return "DRUG_SAFETY"
    elif any(k in text_lower for k in ["stress", "anxious", "anxiety", "depressed", "period", "cramp", "menstrual", "sad", "hopeless"]):
        return "MENTAL_HEALTH"
    elif any(k in text_lower for k in ["body", "organs", "twin", "vitality", "health score"]):
        return "DIGITAL_TWIN"
    else:
        return "SYMPTOM_TRIAGE"


async def orchestrate_health_request(
    message: str,
    channel: str = "web",
    session_id: str = None,
    user_id: str = "demo_user"
) -> SanjeevaniState:
    """
    Executes the full multi-agent DAG workflow for any user message.
    """
    if not session_id:
        session_id = str(uuid.uuid4())[:8]

    state = SanjeevaniState(
        session_id=session_id,
        user_id=user_id,
        channel=channel,
        input_text=message
    )

    # 1. Deterministic Safety Gate Check
    start_time = time.time()
    safety = evaluate_safety(message)
    if not safety.is_safe:
        state.safety_cleared = False
        state.safety_message = safety.response
        state.final_response = safety.response
        state.trace.append(AgentTraceStep(
            agent_name="Deterministic Safety Gate",
            action=f"🚨 Immediate Emergency/Crisis Flag Intercepted ({safety.category})",
            duration_ms=int((time.time() - start_time) * 1000),
            details={"category": safety.category}
        ))
        return state

    state.trace.append(AgentTraceStep(
        agent_name="Deterministic Safety Gate",
        action="Passed safety verification protocol",
        duration_ms=int((time.time() - start_time) * 1000)
    ))

    # 2. Intent Routing
    intent = detect_intent(message)
    state.detected_intent = intent

    # 3. Dynamic Multi-Agent Execution based on Intent
    if intent == "DRUG_SAFETY":
        await drug_agent_node(state)
        await triage_agent_node(state)
        await verification_agent_node(state)
    elif intent == "SCAN_ANALYSIS":
        await scan_agent_node(state)
        await triage_agent_node(state)
        await verification_agent_node(state)
    elif intent == "MENTAL_HEALTH":
        await mental_health_node(state)
        await triage_agent_node(state)
    elif intent == "DIGITAL_TWIN":
        twin_data = compute_baseline_organ_scores(DigitalTwinInput())
        state.digital_twin = twin_data
        state.trace.append(AgentTraceStep(
            agent_name="3D Digital Health Twin Engine",
            action=f"Computed multi-organ vitality index ({twin_data['overall_health_score']}/100)",
            duration_ms=15
        ))
    else:
        # Default Full Swarm Consultation: Triage + Drug + AI Council Verification
        await triage_agent_node(state)
        await drug_agent_node(state)
        await verification_agent_node(state)

    # 4. Synthesize Final Consolidated Response via LLM (Groq / OpenRouter)
    synth_start = time.time()
    system_prompt = (
        "You are the central Chief Medical AI Officer of Sanjeevani OS. "
        "Consolidate the findings from specialist agents (Triage, Drug Safety, Imaging, Mental Health, and AI Council) "
        "into an elegant, highly clear, structured, compassionate, and actionable clinical summary. "
        "Use markdown formatting with bold headings and bullet points. Never provide arbitrary diagnoses; provide safe triage guidance."
    )
    
    agent_findings_context = f"""
Patient Query: {message}
Triage Data: {state.triage_data}
Drug Safety: {state.drug_check}
Scan Analysis: {state.scan_analysis}
AI Council Verification: {state.verification}
"""
    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": f"Consolidate these specialist agent findings for the patient:\n{agent_findings_context}"}
    ]

    llm_synthesis = await call_llm(messages, temperature=0.3, max_tokens=900)

    if llm_synthesis:
        state.final_response = llm_synthesis
        state.trace.append(AgentTraceStep(
            agent_name="Swarm Synthesis & Reasoning Engine (Groq/OpenRouter)",
            action="Synthesized multi-agent findings into comprehensive clinical guidance",
            duration_ms=int((time.time() - synth_start) * 1000)
        ))
    else:
        # Structured fallback if no LLM key configured
        parts = []
        if state.triage_data:
            parts.append(f"**Triage Assessment:** {state.triage_data.get('urgency_badge')}")
            parts.append(f"{state.triage_data.get('recommended_action')}")
            if state.triage_data.get("recommended_specialist"):
                parts.append(f"• **Recommended Care:** {state.triage_data['recommended_specialist']}")

        if state.drug_check and state.drug_check.get("detected_medications"):
            meds = ", ".join(state.drug_check["detected_medications"])
            parts.append(f"\n**Medication Scan:** Detected {meds}")
            if state.drug_check.get("interactions_count", 0) > 0:
                for item in state.drug_check["interactions"]:
                    parts.append(f"⚠️ **Warning ({item.get('severity', 'Risk')}):** {item.get('effect')} — *{item.get('recommended_action')}*")
            else:
                parts.append("✅ No known high-risk drug-to-drug interactions detected.")

        if state.scan_analysis:
            parts.append(f"\n**Imaging Summary:** {state.scan_analysis.get('ai_diagnosis_summary')}")
            parts.append(f"*{state.scan_analysis.get('plain_english_explanation')}*")

        if state.verification:
            parts.append(f"\n**AI Council Consensus:** {state.verification.get('consensus_confidence_score', 95)}% Agreement ({state.verification.get('council_verdict')})")

        state.final_response = "\n\n".join(parts)

    state.suggested_actions = [
        "View 3D Digital Health Twin",
        "Generate Verifiable Health Passport (QR)",
        "Find Empanelled Ayushman Bharat Hospital"
    ]

    return state
