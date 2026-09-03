-- ============================================================================
-- SANJEEVNI-OS / ABDM HEALTH DATA — COMPLETE SUPABASE SCHEMA & SEED MIGRATION
-- Generated from: frontend/public/data/mockHealthData/*.json
-- Includes:
--   1. abha_registry           (ABDM registry metadata)
--   2. abha_profiles           (Master citizen profiles + JSONB telemetry)
--   3. patient_vitals          (Normalized real-time vitals & ECG)
--   4. patient_conditions      (Normalized clinical conditions & organs)
--   5. blockchain_records      (IPFS CID & cryptographic health audit trail)
--   6. patient_appointments    (Upcoming consultations & doctor appointments)
--   7. Relational Views & Indexes
--   8. Row-Level Security (RLS) public read policies for Supabase anon clients
-- ============================================================================

-- Wrap in a transaction for atomicity
BEGIN;

-- Drop existing views and tables if rebuilding
DROP VIEW IF EXISTS view_abdm_registry_citizens CASCADE;
DROP VIEW IF EXISTS view_citizen_clinical_overview CASCADE;
DROP TABLE IF EXISTS patient_appointments CASCADE;
DROP TABLE IF EXISTS blockchain_records CASCADE;
DROP TABLE IF EXISTS patient_conditions CASCADE;
DROP TABLE IF EXISTS patient_vitals CASCADE;
DROP TABLE IF EXISTS abha_profiles CASCADE;
DROP TABLE IF EXISTS abha_registry CASCADE;

-- ----------------------------------------------------------------------------
-- 1. TABLE: abha_registry
-- ----------------------------------------------------------------------------
CREATE TABLE abha_registry (
    id SERIAL PRIMARY KEY,
    registry_name TEXT NOT NULL,
    version TEXT NOT NULL,
    authority TEXT NOT NULL,
    total_records INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
COMMENT ON TABLE abha_registry IS 'ABDM National Health Authority Registry Header Metadata';

-- ----------------------------------------------------------------------------
-- 2. TABLE: abha_profiles (Master ABHA Citizen Profiles)
-- ----------------------------------------------------------------------------
CREATE TABLE abha_profiles (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    gender TEXT NOT NULL,
    dob TEXT NOT NULL,
    year_of_birth INTEGER NOT NULL,
    blood_type TEXT NOT NULL,
    abha_id TEXT NOT NULL UNIQUE,
    abha_address TEXT NOT NULL UNIQUE,
    policy_number TEXT NOT NULL,
    plan_type TEXT NOT NULL,
    state_code TEXT NOT NULL,
    linked_hip TEXT NOT NULL,
    residence TEXT NOT NULL,
    avatar_url TEXT,
    device TEXT,
    status TEXT NOT NULL DEFAULT 'ABDM_VERIFIED_ACTIVE',
    kyc_status TEXT NOT NULL DEFAULT 'VERIFIED_BIOMETRIC',
    kyc_verified BOOLEAN NOT NULL DEFAULT TRUE,
    pmjay_coverage TEXT NOT NULL,
    pmjay_eligible BOOLEAN NOT NULL DEFAULT TRUE,
    vitals JSONB NOT NULL DEFAULT '{}'::jsonb,
    conditions JSONB NOT NULL DEFAULT '[]'::jsonb,
    visual_analytics JSONB NOT NULL DEFAULT '{}'::jsonb,
    blockchain_records JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
COMMENT ON TABLE abha_profiles IS 'Master ABDM Patient Profile with embedded telemetry for rapid JSON frontend consumption';

-- ----------------------------------------------------------------------------
-- 3. TABLE: patient_vitals (Normalized Relational Telemetry)
-- ----------------------------------------------------------------------------
CREATE TABLE patient_vitals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id TEXT NOT NULL REFERENCES abha_profiles(id) ON DELETE CASCADE,
    heart_rate INTEGER NOT NULL,
    avg_heart_rate INTEGER NOT NULL,
    max_heart_rate INTEGER NOT NULL,
    systolic_bp INTEGER NOT NULL,
    diastolic_bp INTEGER NOT NULL,
    oxygen_saturation NUMERIC(4,1) NOT NULL,
    respiration_rate INTEGER NOT NULL,
    hrv INTEGER NOT NULL,
    vo2_max NUMERIC(4,1) NOT NULL,
    lead_i_ecg TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
COMMENT ON TABLE patient_vitals IS 'Normalized continuous wearable and clinical vitals per patient';

-- ----------------------------------------------------------------------------
-- 4. TABLE: patient_conditions (Normalized Clinical Diagnoses)
-- ----------------------------------------------------------------------------
CREATE TABLE patient_conditions (
    id TEXT NOT NULL,
    profile_id TEXT NOT NULL REFERENCES abha_profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    doctor TEXT NOT NULL,
    specialty TEXT NOT NULL,
    organ TEXT NOT NULL,
    status TEXT NOT NULL,
    notes TEXT,
    pain_level INTEGER,
    angle_current INTEGER,
    angle_normal INTEGER,
    last_updated TEXT,
    metrics JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (profile_id, id)
);
COMMENT ON TABLE patient_conditions IS 'Clinical conditions, organ assessments, and orthopedic/pulmonary scores';

-- ----------------------------------------------------------------------------
-- 5. TABLE: blockchain_records (Cryptographic Ledger & IPFS Hashes)
-- ----------------------------------------------------------------------------
CREATE TABLE blockchain_records (
    id TEXT PRIMARY KEY,
    profile_id TEXT NOT NULL REFERENCES abha_profiles(id) ON DELETE CASCADE,
    patient_name TEXT NOT NULL,
    abha_number TEXT NOT NULL,
    tx_hash TEXT NOT NULL,
    cid TEXT NOT NULL,
    record_type TEXT NOT NULL,
    timestamp_raw TEXT NOT NULL,
    facility TEXT NOT NULL,
    verified BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
COMMENT ON TABLE blockchain_records IS 'Immutable IPFS CIDs and cryptographic hash receipts anchored on-chain';

-- ----------------------------------------------------------------------------
-- 6. TABLE: patient_appointments (Doctor Consultations & Follow-ups)
-- ----------------------------------------------------------------------------
CREATE TABLE patient_appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id TEXT NOT NULL REFERENCES abha_profiles(id) ON DELETE CASCADE,
    doctor TEXT NOT NULL,
    initials TEXT NOT NULL,
    specialty TEXT NOT NULL,
    appointment_date TEXT NOT NULL,
    appointment_type TEXT NOT NULL,
    mode TEXT NOT NULL,
    badge_color TEXT NOT NULL,
    is_next BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
COMMENT ON TABLE patient_appointments IS 'Scheduled medical appointments and doctor consultations';

-- ----------------------------------------------------------------------------
-- INDEXES FOR HIGH-SPEED QUERYING
-- ----------------------------------------------------------------------------
CREATE INDEX idx_abha_profiles_abha_id ON abha_profiles(abha_id);
CREATE INDEX idx_abha_profiles_state ON abha_profiles(state_code);
CREATE INDEX idx_patient_vitals_profile ON patient_vitals(profile_id);
CREATE INDEX idx_patient_conditions_organ ON patient_conditions(organ);
CREATE INDEX idx_blockchain_records_profile ON blockchain_records(profile_id);
CREATE INDEX idx_blockchain_records_cid ON blockchain_records(cid);
CREATE INDEX idx_blockchain_records_hash ON blockchain_records(tx_hash);
CREATE INDEX idx_patient_appointments_profile ON patient_appointments(profile_id);

-- ----------------------------------------------------------------------------
-- CONVENIENCE VIEWS
-- ----------------------------------------------------------------------------
CREATE OR REPLACE VIEW view_abdm_registry_citizens AS
SELECT
    id,
    name,
    dob,
    year_of_birth AS "yearOfBirth",
    age,
    gender,
    blood_type AS "bloodType",
    abha_id AS "abhaNumber",
    abha_address AS "abhaAddress",
    policy_number AS "policyNumber",
    plan_type AS "planType",
    pmjay_coverage AS "pmjayCoverage",
    pmjay_eligible AS "pmjayEligible",
    residence,
    state_code AS "stateCode",
    linked_hip AS "linkedHip",
    kyc_status AS "kycStatus",
    avatar_url AS "avatarUrl",
    device,
    blockchain_records AS "blockchainRecords"
FROM abha_profiles;

CREATE OR REPLACE VIEW view_citizen_clinical_overview AS
SELECT
    p.id,
    p.name,
    p.abha_id,
    p.gender,
    p.age,
    p.blood_type,
    p.device,
    v.heart_rate,
    v.systolic_bp,
    v.diastolic_bp,
    v.oxygen_saturation,
    v.vo2_max,
    (SELECT COUNT(*) FROM patient_conditions c WHERE c.profile_id = p.id) AS condition_count,
    (SELECT COUNT(*) FROM blockchain_records b WHERE b.profile_id = p.id) AS blockchain_record_count,
    (SELECT appointment_date FROM patient_appointments a WHERE a.profile_id = p.id AND a.is_next = TRUE LIMIT 1) AS next_appointment_date,
    (SELECT doctor FROM patient_appointments a WHERE a.profile_id = p.id AND a.is_next = TRUE LIMIT 1) AS next_appointment_doctor
FROM abha_profiles p
LEFT JOIN patient_vitals v ON p.id = v.profile_id;

-- ----------------------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) FOR SUPABASE ANON & AUTHENTICATED ACCESS
-- ----------------------------------------------------------------------------
ALTER TABLE abha_registry ENABLE ROW LEVEL SECURITY;
ALTER TABLE abha_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE patient_vitals ENABLE ROW LEVEL SECURITY;
ALTER TABLE patient_conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE blockchain_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE patient_appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read abha_registry" ON abha_registry FOR SELECT USING (true);
CREATE POLICY "Public read abha_profiles" ON abha_profiles FOR SELECT USING (true);
CREATE POLICY "Public read patient_vitals" ON patient_vitals FOR SELECT USING (true);
CREATE POLICY "Public read patient_conditions" ON patient_conditions FOR SELECT USING (true);
CREATE POLICY "Public read blockchain_records" ON blockchain_records FOR SELECT USING (true);
CREATE POLICY "Public read patient_appointments" ON patient_appointments FOR SELECT USING (true);

-- ============================================================================
-- DATA SEEDING: INSERT STATEMENTS
-- ============================================================================

-- 1. Insert abha_registry
INSERT INTO abha_registry (registry_name, version, authority, total_records)
VALUES (
    'National Health Authority — Ayushman Bharat Digital Mission (ABDM) Citizen Registry',
    '2026.2',
    'National Health Authority (NHA) & Ministry of Health and Family Welfare (MoHFW), Govt of India',
    6
);

-- 2. Insert abha_profiles (all 6 citizen profiles)
INSERT INTO abha_profiles (
    id, name, age, gender, dob, year_of_birth, blood_type,
    abha_id, abha_address, policy_number, plan_type, state_code,
    linked_hip, residence, avatar_url, device, status,
    kyc_status, kyc_verified, pmjay_coverage, pmjay_eligible,
    vitals, conditions, visual_analytics, blockchain_records
) VALUES (
    'jiya_jaiswal_verified_abha',
    'Jiya Jaiswal',
    23,
    'Female',
    'August 22, 2003',
    2003,
    'B+',
    '91-5519-3820-9104',
    'jiyajaiswal@abdm',
    'PM-JAY-2026-IND-6120',
    'Ayushman Bharat PM-JAY (ABDM Verified)',
    'UP',
    'Jaypee Hospital Noida & AIIMS New Delhi',
    'Noida / New Delhi, India',
    '/images/jiya_jaiswal.jpg',
    'Apple Watch Series 9 & Health Connect',
    'ABDM_VERIFIED_ACTIVE',
    'VERIFIED_BIOMETRIC',
    TRUE,
    '₹5,00,000 Annual Family Floating Cover',
    TRUE,
    '{"heartRate": 72, "avgHeartRate": 66, "maxHeartRate": 120, "systolicBp": 114, "diastolicBp": 72, "oxygenSaturation": 99.2, "respirationRate": 15, "hrv": 70, "vo2Max": 46.5, "leadIEcg": "Normal Sinus Rhythm (NSR) • QTc 398ms • Stable Rhythm"}'::jsonb,
    '[{"id": "cond-lungs", "title": "Pulmonary Oxygenation & Diffusion Index", "doctor": "Dr. Rajesh K. Varma", "specialty": "Pulmonology & Wellness", "organ": "lungs", "status": "Stable", "notes": "O2 Saturation: 99.2%, FEV1: 4.3L. Peak arterial oxygenation and efficient diaphragmatic excursion.", "lastUpdated": "Nov 28, 2025 at 11:20 AM", "metrics": {"fev1": "4.3 L", "o2": "99.2%", "heartRate": "72 BPM", "trendThisMonth": "99.2%", "trendPrevMonth": "98.0%"}}, {"id": "cond-shoulder", "title": "Cervical Spine & Rotator Alignment", "doctor": "Dr. Rajesh K. Varma", "specialty": "Orthopedic Rehabilitation", "organ": "shoulder", "painLevel": 1, "status": "Stable", "notes": "Excellent cervical and shoulder range of motion. Zero functional limitation or nerve entrapment."}, {"id": "cond-knee", "title": "Bilateral Knee & Quadriceps Stability", "doctor": "Dr. Naresh Trehan", "specialty": "Orthopedics", "organ": "knee", "angleCurrent": 120, "angleNormal": 120, "status": "Stable", "notes": "Full 120° physiological flexion. Excellent ligamentous stability and bilateral weight distribution."}]'::jsonb,
    '{"healthScore": 96, "avgBpm": 72, "bpmStatus": "Optimal Resting Heart Rate (Rest: 66 bpm)", "heartRatePath": "M 0 96 Q 25 76, 50 80 T 100 62 T 150 86 T 200 44 T 250 76 T 300 66 T 350 84 T 400 56", "sleepHours": "8h 12m", "sleepStatus": "92% Restorative Deep Sleep (Optimal)", "sleepBars": [72, 84, 88, 96, 92, 98, 94], "stressScore": "14 / 100", "stressStatus": "Parasympathetic Rest State (High HRV)", "stressPath": "M 0 124 Q 30 114, 60 116 T 120 106 T 180 120 T 240 104 T 300 116 T 350 110", "stressPoints": [{"cx": 40, "cy": 114, "isHigh": false}, {"cx": 110, "cy": 106, "isHigh": false}, {"cx": 190, "cy": 120, "isHigh": false}, {"cx": 270, "cy": 104, "isHigh": false}, {"cx": 340, "cy": 110, "isHigh": false}], "avgSteps": "10,800", "stepsStatus": "+15% Active Daily Movement vs Target", "stepsBars": [{"height": 82, "active": false}, {"height": 90, "active": false}, {"height": 94, "active": false}, {"height": 86, "active": false}, {"height": 100, "active": true}, {"height": 88, "active": false}, {"height": 92, "active": false}], "aiInsights": {"positive": {"title": "Restorative Sleep Rhythm", "description": "Deep & REM sleep cycles exceed 92% benchmark, promoting optimal cognitive and immune recovery."}, "takeAction": {"title": "Hydration Balance", "description": "Target 2.5L daily hydration goal during peak daytime intervals."}, "monitor": {"title": "Cervical Spine Ergonomics", "description": "Maintain eye-level monitor height during screen work."}}, "carePlan": {"medicationPercent": 100, "medicationStatus": "Daily Multivitamin Complete", "hydrationPercent": 88, "hydrationStatus": "2.4L / 2.7L Target Reached"}, "nextAppointment": {"doctor": "Dr. Sneha Roy", "initials": "SR", "specialty": "Orthopedics & Sports", "date": "Monday, 19 Jan, 10:30 AM", "type": "Patellar Kinetic Screening", "mode": "In-Clinic", "color": "#0284c7"}, "upcomingAppointments": [{"doctor": "Dr. Sneha Roy", "initials": "SR", "specialty": "Orthopedics & Sports", "date": "Monday, 19 Jan, 10:30 AM", "type": "Patellar Kinetic Screening", "mode": "In-Clinic", "color": "#0284c7"}, {"doctor": "Dr. Manish Gupta", "initials": "MG", "specialty": "Preventive Pulmonology", "date": "Thursday, 22 Jan, 04:15 PM", "type": "Aerobic Diffusion Evaluation", "mode": "Teleconsultation", "color": "#059669"}, {"doctor": "Dr. Deepa Nair", "initials": "DN", "specialty": "Clinical Nutrition", "date": "Monday, 26 Jan, 01:45 PM", "type": "Hydration & Metabolic Plan", "mode": "Teleconsultation", "color": "#db2777"}]}'::jsonb,
    '[{"id": "REC-0x6120-JJ", "patient": "Jiya Jaiswal", "abha": "91-5519-3820-9104", "hash": "2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e", "cid": "QmJiyaPulmonaryOxygenationDiffusionReport2026", "type": "Pulmonary Oxygenation & Diaphragmatic Excursion Report", "timestamp": "2026-08-23 10:30 UTC", "facility": "Jaypee Hospital Pulmonology Node", "verified": true}, {"id": "REC-0x6121-JJ", "patient": "Jiya Jaiswal", "abha": "91-5519-3820-9104", "hash": "7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f", "cid": "QmJiyaPolysomnographyRestorativeSleepDigest2026", "type": "Polysomnography & Circadian Restorative Sleep Profile", "timestamp": "2026-08-26 07:15 UTC", "facility": "Apple Watch 9 Biometric Synapse Stream", "verified": true}]'::jsonb
);
INSERT INTO abha_profiles (
    id, name, age, gender, dob, year_of_birth, blood_type,
    abha_id, abha_address, policy_number, plan_type, state_code,
    linked_hip, residence, avatar_url, device, status,
    kyc_status, kyc_verified, pmjay_coverage, pmjay_eligible,
    vitals, conditions, visual_analytics, blockchain_records
) VALUES (
    'mangal_singh_verified_abha',
    'Mangal Singh',
    25,
    'Male',
    'November 05, 2001',
    2001,
    'A+',
    '91-6310-9284-5172',
    'mangalsingh@abdm',
    'PM-JAY-2026-IND-7732',
    'Ayushman Bharat PM-JAY (ABDM Verified)',
    'RJ',
    'Sawai Man Singh (SMS) Medical College & AIIMS Jodhpur',
    'Jaipur / New Delhi, India',
    '/images/mangal_singh.jpg',
    'Samsung Galaxy Watch 6 & Health Connect',
    'ABDM_VERIFIED_ACTIVE',
    'VERIFIED_BIOMETRIC',
    TRUE,
    '₹5,00,000 Annual Family Floating Cover',
    TRUE,
    '{"heartRate": 72, "avgHeartRate": 65, "maxHeartRate": 126, "systolicBp": 118, "diastolicBp": 78, "oxygenSaturation": 98.8, "respirationRate": 16, "hrv": 66, "vo2Max": 49.0, "leadIEcg": "Normal Sinus Rhythm (NSR) • QTc 408ms • ST-Isoelectric"}'::jsonb,
    '[{"id": "cond-lungs", "title": "Cardiorespiratory Stamina & Gas Exchange", "doctor": "Dr. Rajesh K. Varma", "specialty": "Pulmonology", "organ": "lungs", "status": "Stable", "notes": "O2 Saturation: 98.8%, FEV1: 4.9L. Clear bilateral breath sounds, optimal tidal volume.", "lastUpdated": "Nov 12, 2025 at 3:30 PM", "metrics": {"fev1": "4.9 L", "o2": "98.8%", "heartRate": "72 BPM", "trendThisMonth": "98.8%", "trendPrevMonth": "97.2%"}}, {"id": "cond-shoulder", "title": "Left Scapular & Trapezius Tone", "doctor": "Dr. Rajesh K. Varma", "specialty": "Physiotherapy & Orthopedics", "organ": "shoulder", "painLevel": 3, "status": "Monitoring", "notes": "Slight desk posture tension. Ergonomic keyboard setup and scapular retractions recommended."}, {"id": "cond-knee", "title": "Patellar Tendon & Meniscal Mechanics", "doctor": "Dr. Naresh Trehan", "specialty": "Orthopedics", "organ": "knee", "angleCurrent": 119, "angleNormal": 120, "status": "Stable", "notes": "Normal joint space. Intact ligamentous stability with zero lateral deviation."}]'::jsonb,
    '{"healthScore": 94, "avgBpm": 72, "bpmStatus": "Optimal Resting Heart Rate (Rest: 65 bpm)", "heartRatePath": "M 0 98 Q 25 78, 50 82 T 100 62 T 150 88 T 200 42 T 250 78 T 300 68 T 350 85 T 400 58", "sleepHours": "7h 55m", "sleepStatus": "89% Restorative Deep Sleep (Optimal)", "sleepBars": [68, 80, 86, 94, 90, 96, 92], "stressScore": "16 / 100", "stressStatus": "Autonomic Balance (Vagal Recovery)", "stressPath": "M 0 122 Q 30 112, 60 116 T 120 106 T 180 120 T 240 102 T 300 116 T 350 110", "stressPoints": [{"cx": 40, "cy": 114, "isHigh": false}, {"cx": 110, "cy": 107, "isHigh": false}, {"cx": 190, "cy": 120, "isHigh": false}, {"cx": 270, "cy": 104, "isHigh": false}, {"cx": 340, "cy": 111, "isHigh": false}], "avgSteps": "11,200", "stepsStatus": "+20% Active Daily Movement vs Baseline", "stepsBars": [{"height": 78, "active": false}, {"height": 88, "active": false}, {"height": 92, "active": false}, {"height": 82, "active": false}, {"height": 98, "active": true}, {"height": 86, "active": false}, {"height": 90, "active": false}], "aiInsights": {"positive": {"title": "Cardiovascular Conditioning", "description": "Resting heart rate (72 BPM) and 66ms HRV indicate strong autonomic regulation and consistent recovery."}, "takeAction": {"title": "Hydration Balance", "description": "Daily hydration goal at 85%. Add 400ml water during afternoon work intervals."}, "monitor": {"title": "Neck & Shoulder Ergonomics", "description": "Perform cervical stretches every 90 minutes to maintain optimal neck posture."}}, "carePlan": {"medicationPercent": 100, "medicationStatus": "Daily Multivitamin & Omega-3 Complete", "hydrationPercent": 85, "hydrationStatus": "2.55L / 3.0L Target Reached"}, "nextAppointment": {"doctor": "Dr. Naresh Trehan", "initials": "NT", "specialty": "Cardiology & Thoracic Care", "date": "Wednesday, 21 Jan, 10:00 AM", "type": "Cardiac Stress & ECG Review", "mode": "Hospital Review", "color": "#ef4444"}, "upcomingAppointments": [{"doctor": "Dr. Naresh Trehan", "initials": "NT", "specialty": "Cardiology & Thoracic Care", "date": "Wednesday, 21 Jan, 10:00 AM", "type": "Cardiac Stress & ECG Review", "mode": "Hospital Review", "color": "#ef4444"}, {"doctor": "Dr. Vikram Patel", "initials": "VP", "specialty": "Pulmonary Medicine", "date": "Saturday, 24 Jan, 03:30 PM", "type": "VO2 Max Performance Check", "mode": "Teleconsultation", "color": "#0284c7"}, {"doctor": "Dr. Geeta Pillai", "initials": "GP", "specialty": "Joint Biomechanics", "date": "Tuesday, 27 Jan, 01:00 PM", "type": "Knee Articular Follow-up", "mode": "In-Clinic", "color": "#d97706"}]}'::jsonb,
    '[{"id": "REC-0x7732-MS", "patient": "Mangal Singh", "abha": "91-6310-9284-5172", "hash": "1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d", "cid": "QmMangalCardiorespiratoryGasExchangeVerifiedHash2026", "type": "Cardiorespiratory Gas Exchange & Bilateral Breath Sounds", "timestamp": "2026-08-20 09:20 UTC", "facility": "SMS Medical College Jaipur", "verified": true}, {"id": "REC-0x7733-MS", "patient": "Mangal Singh", "abha": "91-6310-9284-5172", "hash": "9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f", "cid": "QmMangalMeniscalKineticsAndExtensionReport2026", "type": "Patellar Tendon & Meniscal Mechanics Assessment", "timestamp": "2026-08-23 10:15 UTC", "facility": "AIIMS Jodhpur Orthopedic Division", "verified": true}]'::jsonb
);
INSERT INTO abha_profiles (
    id, name, age, gender, dob, year_of_birth, blood_type,
    abha_id, abha_address, policy_number, plan_type, state_code,
    linked_hip, residence, avatar_url, device, status,
    kyc_status, kyc_verified, pmjay_coverage, pmjay_eligible,
    vitals, conditions, visual_analytics, blockchain_records
) VALUES (
    'mausam_kar_verified_abha',
    'Mausam Kar',
    24,
    'Male',
    'April 14, 2002',
    2002,
    'B+',
    '91-7294-8102-5309',
    'mausamkar@abdm',
    'PM-JAY-2026-IND-8841',
    'Ayushman Bharat PM-JAY (ABDM Verified)',
    'DL',
    'All India Institute of Medical Sciences (AIIMS) - Central Node, New Delhi',
    'New Delhi, India',
    '/images/mausam_kar.jpg',
    'Apple Watch Ultra & Google Health Connect Synced',
    'ABDM_VERIFIED_ACTIVE',
    'VERIFIED_BIOMETRIC',
    TRUE,
    '₹5,00,000 Annual Family Floating Cover',
    TRUE,
    '{"heartRate": 74, "avgHeartRate": 72, "maxHeartRate": 128, "systolicBp": 118, "diastolicBp": 76, "oxygenSaturation": 98.5, "respirationRate": 16, "hrv": 68, "vo2Max": 48.2, "leadIEcg": "Normal Sinus Rhythm (NSR) • QTc 410ms • ST-Isoelectric"}'::jsonb,
    '[{"id": "cond-lungs", "title": "Pulmonary Aerobic Function", "doctor": "Dr. Rajesh K. Varma", "specialty": "Pulmonology & Critical Care", "organ": "lungs", "status": "Stable", "notes": "O2 Saturation: 98.5%, FEV1: 4.8L. Clear bilateral breath sounds with normal alveolar diffusion.", "lastUpdated": "Oct 27, 2025 at 2:15 PM", "metrics": {"fev1": "4.8 L", "o2": "98.5%", "heartRate": "74 BPM", "trendThisMonth": "98.5%", "trendPrevMonth": "96.8%"}}, {"id": "cond-shoulder", "title": "Cervical & Trapezius Desk Ergonomics", "doctor": "Dr. Rajesh K. Varma", "specialty": "Orthopedics & Sports Medicine", "organ": "shoulder", "painLevel": 4, "status": "Monitoring", "notes": "Mild trapezius stiffness from display work. Ergonomic desk setup and scapular stretches recommended."}, {"id": "cond-knee", "title": "Patellar Biomechanics & Joint Cartilage", "doctor": "Dr. Naresh Trehan", "specialty": "Orthopedics & Joint Care", "organ": "knee", "angleCurrent": 118, "angleNormal": 120, "status": "Stable", "notes": "Healthy joint space. Full physiological range of motion with preserved articular cartilage."}]'::jsonb,
    '{"healthScore": 92, "avgBpm": 74, "bpmStatus": "Optimal Resting Heart Rate (Rest: 64 bpm)", "heartRatePath": "M 0 100 Q 25 80, 50 85 T 100 65 T 150 90 T 200 45 T 250 80 T 300 70 T 350 88 T 400 60", "sleepHours": "7h 48m", "sleepStatus": "88% Restorative Deep Sleep (Optimal)", "sleepBars": [65, 78, 85, 92, 88, 95, 90], "stressScore": "18 / 100", "stressStatus": "Relaxed State (Parasympathetic Dominant)", "stressPath": "M 0 120 Q 30 110, 60 115 T 120 105 T 180 120 T 240 100 T 300 115 T 350 110", "stressPoints": [{"cx": 40, "cy": 112, "isHigh": false}, {"cx": 110, "cy": 106, "isHigh": false}, {"cx": 190, "cy": 118, "isHigh": false}, {"cx": 270, "cy": 102, "isHigh": false}, {"cx": 340, "cy": 110, "isHigh": false}], "avgSteps": "10,480", "stepsStatus": "+18% Active Calorie Burn vs Baseline", "stepsBars": [{"height": 75, "active": false}, {"height": 88, "active": false}, {"height": 92, "active": false}, {"height": 78, "active": false}, {"height": 98, "active": true}, {"height": 84, "active": false}, {"height": 90, "active": false}], "aiInsights": {"positive": {"title": "Cardiovascular Stamina", "description": "Resting heart rate (74 BPM) and HRV (68 ms) indicate excellent cardiovascular conditioning and recovery."}, "takeAction": {"title": "Hydration Balance", "description": "Daily hydration goal at 82%. Target 500ml additional water intake during afternoon focus hours."}, "monitor": {"title": "Postural Ergonomics", "description": "Continue desk stretches every 90 minutes to maintain optimal cervical spinal alignment."}}, "carePlan": {"medicationPercent": 100, "medicationStatus": "Multivitamin & Omega-3 Complete", "hydrationPercent": 82, "hydrationStatus": "2.4L / 3.0L Target Reached"}, "nextAppointment": {"doctor": "Dr. Rajesh K. Varma", "initials": "RV", "specialty": "Pulmonology & Critical Care", "date": "Friday, 16 Jan, 04:00 PM", "type": "Annual Preventive Review", "mode": "Teleconsultation", "color": "#0284c7"}, "upcomingAppointments": [{"doctor": "Dr. Rajesh K. Varma", "initials": "RV", "specialty": "Pulmonology & Critical Care", "date": "Friday, 16 Jan, 04:00 PM", "type": "Annual Preventive Review", "mode": "Teleconsultation", "color": "#0284c7"}, {"doctor": "Dr. Anita Sharma", "initials": "AS", "specialty": "Sports Orthopedics", "date": "Monday, 19 Jan, 11:30 AM", "type": "Cervical Ergonomics Review", "mode": "In-Clinic", "color": "#7c3aed"}, {"doctor": "Dr. Suresh N. Rao", "initials": "SR", "specialty": "General Medicine", "date": "Thursday, 22 Jan, 02:15 PM", "type": "Diagnostic Blood Panel", "mode": "Hospital Review", "color": "#059669"}]}'::jsonb,
    '[{"id": "REC-0x8921-MK", "patient": "Mausam Kar", "abha": "91-7294-8102-5309", "hash": "8f4e2b81239c09a8e74b321098ef69c1a76d8e209841af09", "cid": "QmZ4tDuvesekSs4qM5ZBKpXiZGun7S2CYtEZRB3DYXkjGx", "type": "Chest Radiograph & Alveolar Diffusion Report", "timestamp": "2026-08-18 11:45 UTC", "facility": "AIIMS Pulmonology Department", "verified": true}, {"id": "REC-0x7412-MK", "patient": "Mausam Kar", "abha": "91-7294-8102-5309", "hash": "3e4a91b2c45d6789e0123456789abcdef0123456789abcdef0123456789abcde", "cid": "QmausamKarLeadIEcgWaveformTelemetryHashDigest2026", "type": "Continuous Lead I ECG & HRV Autonomic Stream", "timestamp": "2026-08-22 08:30 UTC", "facility": "Apple Watch Ultra & Google Health Connect Gateway", "verified": true}]'::jsonb
);
INSERT INTO abha_profiles (
    id, name, age, gender, dob, year_of_birth, blood_type,
    abha_id, abha_address, policy_number, plan_type, state_code,
    linked_hip, residence, avatar_url, device, status,
    kyc_status, kyc_verified, pmjay_coverage, pmjay_eligible,
    vitals, conditions, visual_analytics, blockchain_records
) VALUES (
    'rachit_tiwari_verified_abha',
    'Rachit Tiwari',
    23,
    'Male',
    'June 18, 2003',
    2003,
    'O+',
    '91-8842-1920-7463',
    'rachittiwari@abdm',
    'PM-JAY-2026-IND-9924',
    'Ayushman Bharat PM-JAY (ABDM Verified)',
    'UP',
    'King George''s Medical University (KGMU) & AIIMS Node',
    'Lucknow / New Delhi, India',
    '/images/rachit_tiwari.jpg',
    'Pixel Watch 3 & Google Health Connect Synced',
    'ABDM_VERIFIED_ACTIVE',
    'VERIFIED_BIOMETRIC',
    TRUE,
    '₹5,00,000 Annual Family Floating Cover',
    TRUE,
    '{"heartRate": 70, "avgHeartRate": 62, "maxHeartRate": 124, "systolicBp": 116, "diastolicBp": 74, "oxygenSaturation": 99.0, "respirationRate": 15, "hrv": 72, "vo2Max": 51.4, "leadIEcg": "Normal Sinus Rhythm (NSR) • QTc 402ms • High Autonomic Tone"}'::jsonb,
    '[{"id": "cond-lungs", "title": "High-Endurance VO2 Max Pulmonary Reserve", "doctor": "Dr. Rajesh K. Varma", "specialty": "Sports Pulmonology", "organ": "lungs", "status": "Stable", "notes": "O2 Saturation: 99.0%, FEV1: 5.2L. Peak athletic respiratory capacity and rapid ventilatory recovery.", "lastUpdated": "Nov 02, 2025 at 10:45 AM", "metrics": {"fev1": "5.2 L", "o2": "99.0%", "heartRate": "70 BPM", "trendThisMonth": "99.2%", "trendPrevMonth": "98.0%"}}, {"id": "cond-shoulder", "title": "Thoracic & Deltoid Athletic Mobility", "doctor": "Dr. Rajesh K. Varma", "specialty": "Sports Medicine", "organ": "shoulder", "painLevel": 2, "status": "Stable", "notes": "Optimal rotator cuff function. Minimal athletic muscular tension."}, {"id": "cond-knee", "title": "Lower Kinetic Chain & Patellar Dynamics", "doctor": "Dr. Naresh Trehan", "specialty": "Sports Orthopedics", "organ": "knee", "angleCurrent": 120, "angleNormal": 120, "status": "Stable", "notes": "Optimal quadriceps force transfer. 120° full physiological range without crepitus."}]'::jsonb,
    '{"healthScore": 95, "avgBpm": 70, "bpmStatus": "Optimal Resting Heart Rate (Rest: 62 bpm)", "heartRatePath": "M 0 95 Q 25 75, 50 80 T 100 60 T 150 85 T 200 40 T 250 75 T 300 65 T 350 82 T 400 55", "sleepHours": "8h 05m", "sleepStatus": "91% Restorative Deep Sleep (Optimal)", "sleepBars": [70, 82, 88, 95, 91, 98, 93], "stressScore": "15 / 100", "stressStatus": "High Heart Rate Variability (Vagal Dominance)", "stressPath": "M 0 125 Q 30 115, 60 118 T 120 108 T 180 122 T 240 105 T 300 118 T 350 112", "stressPoints": [{"cx": 40, "cy": 115, "isHigh": false}, {"cx": 110, "cy": 108, "isHigh": false}, {"cx": 190, "cy": 122, "isHigh": false}, {"cx": 270, "cy": 105, "isHigh": false}, {"cx": 340, "cy": 112, "isHigh": false}], "avgSteps": "12,450", "stepsStatus": "+24% Active Daily Movement vs Target", "stepsBars": [{"height": 80, "active": false}, {"height": 90, "active": false}, {"height": 95, "active": false}, {"height": 85, "active": false}, {"height": 100, "active": true}, {"height": 88, "active": false}, {"height": 92, "active": false}], "aiInsights": {"positive": {"title": "Cardio-Respiratory Endurance", "description": "VO2 Max at 51.4 mL/kg/min and 72ms HRV reflect outstanding athletic autonomic balance."}, "takeAction": {"title": "Electrolyte Replenishment", "description": "Daily step target exceeded (12.4k). Maintain magnesium and hydration intake."}, "monitor": {"title": "Ergonomic Lumbar Alignment", "description": "Maintain lumbar support during coding/screen sessions."}}, "carePlan": {"medicationPercent": 100, "medicationStatus": "Electrolytes & Vitamin D3 Complete", "hydrationPercent": 90, "hydrationStatus": "2.7L / 3.0L Target Reached"}, "nextAppointment": {"doctor": "Dr. Amitava Roy", "initials": "AR", "specialty": "Sports Medicine & Rehab", "date": "Wednesday, 21 Jan, 03:30 PM", "type": "Thoracic & Deltoid Mobility", "mode": "In-Clinic", "color": "#7c3aed"}, "upcomingAppointments": [{"doctor": "Dr. Amitava Roy", "initials": "AR", "specialty": "Sports Medicine & Rehab", "date": "Wednesday, 21 Jan, 03:30 PM", "type": "Thoracic & Deltoid Mobility", "mode": "In-Clinic", "color": "#7c3aed"}, {"doctor": "Dr. Sunita Kapoor", "initials": "SK", "specialty": "Diagnostic Cardiology", "date": "Saturday, 24 Jan, 11:15 AM", "type": "Resting HRV & Rhythm Check", "mode": "Hospital Review", "color": "#ef4444"}, {"doctor": "Dr. Rohit Sen", "initials": "RS", "specialty": "Primary Health Care", "date": "Tuesday, 27 Jan, 02:00 PM", "type": "Comprehensive ABDM Checkup", "mode": "Teleconsultation", "color": "#059669"}]}'::jsonb,
    '[{"id": "REC-0x9924-RT", "patient": "Rachit Tiwari", "abha": "91-8842-1920-7463", "hash": "7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b", "cid": "QmRachitPulmonaryAthleticVo2MaxReserveReport2026", "type": "Athletic VO2 Max & High-Endurance Pulmonary Spirometry", "timestamp": "2026-08-19 14:15 UTC", "facility": "Sports Medicine & Pulmonology Centre", "verified": true}, {"id": "REC-0x9925-RT", "patient": "Rachit Tiwari", "abha": "91-8842-1920-7463", "hash": "4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d", "cid": "QmRachitOrthopedicLowerKineticChainScan2026", "type": "Lower Kinetic Chain & Patellar Joint Cartilage Diagnostic", "timestamp": "2026-08-21 16:40 UTC", "facility": "KGMU Sports Orthopedics Unit", "verified": true}]'::jsonb
);
INSERT INTO abha_profiles (
    id, name, age, gender, dob, year_of_birth, blood_type,
    abha_id, abha_address, policy_number, plan_type, state_code,
    linked_hip, residence, avatar_url, device, status,
    kyc_status, kyc_verified, pmjay_coverage, pmjay_eligible,
    vitals, conditions, visual_analytics, blockchain_records
) VALUES (
    'shaikh_warsi_verified_abha',
    'Shaikh Mohammad Warsi',
    24,
    'Male',
    'December 10, 2001',
    2001,
    'AB+',
    '91-7712-4890-3318',
    'shaikhwarsi@abdm',
    'PM-JAY-2026-IND-5290',
    'Ayushman Bharat PM-JAY (ABDM Verified)',
    'MH',
    'King Edward Memorial (KEM) Hospital & Tata Memorial Centre',
    'Mumbai / New Delhi, India',
    '/images/shaikh_warsi.jpg',
    'OnePlus Watch 2 & Health Connect',
    'ABDM_VERIFIED_ACTIVE',
    'VERIFIED_BIOMETRIC',
    TRUE,
    '₹5,00,000 Annual Family Floating Cover',
    TRUE,
    '{"heartRate": 76, "avgHeartRate": 67, "maxHeartRate": 128, "systolicBp": 120, "diastolicBp": 80, "oxygenSaturation": 98.4, "respirationRate": 16, "hrv": 65, "vo2Max": 47.0, "leadIEcg": "Normal Sinus Rhythm (NSR) • QTc 406ms • Isoelectric ST Segment"}'::jsonb,
    '[{"id": "cond-lungs", "title": "Bronchial Dynamics & Ventilation Index", "doctor": "Dr. Rajesh K. Varma", "specialty": "Pulmonology & Critical Care", "organ": "lungs", "status": "Stable", "notes": "O2 Saturation: 98.4%, FEV1: 4.8L. Healthy bronchial tone and baseline physiological ventilation.", "lastUpdated": "Nov 24, 2025 at 4:00 PM", "metrics": {"fev1": "4.8 L", "o2": "98.4%", "heartRate": "76 BPM", "trendThisMonth": "98.4%", "trendPrevMonth": "96.5%"}}, {"id": "cond-shoulder", "title": "Right Trapezius Workstation Posture", "doctor": "Dr. Rajesh K. Varma", "specialty": "Orthopedics", "organ": "shoulder", "painLevel": 3, "status": "Monitoring", "notes": "Slight stiffness from prolonged terminal coding. Active standing breaks and thoracic mobility prescribed."}, {"id": "cond-knee", "title": "Meniscal Kinetics & Knee Extension", "doctor": "Dr. Naresh Trehan", "specialty": "Joint Surgery & Orthopedics", "organ": "knee", "angleCurrent": 119, "angleNormal": 120, "status": "Stable", "notes": "Smooth articular glide. No effusion or mechanical restriction with 119° extension."}]'::jsonb,
    '{"healthScore": 93, "avgBpm": 76, "bpmStatus": "Optimal Resting Heart Rate (Rest: 67 bpm)", "heartRatePath": "M 0 100 Q 25 80, 50 84 T 100 66 T 150 90 T 200 48 T 250 80 T 300 70 T 350 88 T 400 60", "sleepHours": "7h 30m", "sleepStatus": "87% Restorative Deep Sleep (Optimal)", "sleepBars": [65, 78, 84, 90, 86, 92, 88], "stressScore": "20 / 100", "stressStatus": "Healthy Autonomic Function", "stressPath": "M 0 120 Q 30 110, 60 114 T 120 104 T 180 118 T 240 100 T 300 114 T 350 108", "stressPoints": [{"cx": 40, "cy": 112, "isHigh": false}, {"cx": 110, "cy": 106, "isHigh": false}, {"cx": 190, "cy": 118, "isHigh": false}, {"cx": 270, "cy": 102, "isHigh": false}, {"cx": 340, "cy": 110, "isHigh": false}], "avgSteps": "11,500", "stepsStatus": "+22% Active Daily Movement vs Target", "stepsBars": [{"height": 80, "active": false}, {"height": 88, "active": false}, {"height": 94, "active": false}, {"height": 84, "active": false}, {"height": 98, "active": true}, {"height": 86, "active": false}, {"height": 90, "active": false}], "aiInsights": {"positive": {"title": "Cardiorespiratory Stamina", "description": "Resting heart rate (76 BPM) and 11.5k average steps reflect healthy activity levels and endurance."}, "takeAction": {"title": "Hydration Balance", "description": "Daily hydration goal at 82%. Target 500ml additional water intake during afternoon focus hours."}, "monitor": {"title": "Ergonomic Desk Posture", "description": "Take 2-minute standing breaks every 90 minutes to relieve trapezius tension."}}, "carePlan": {"medicationPercent": 100, "medicationStatus": "Daily Multivitamin & Omega-3 Complete", "hydrationPercent": 82, "hydrationStatus": "2.45L / 3.0L Target Reached"}, "nextAppointment": {"doctor": "Dr. Farhan Qureshi", "initials": "FQ", "specialty": "Cardiovascular Health", "date": "Tuesday, 20 Jan, 11:00 AM", "type": "Arterial Hemodynamics Review", "mode": "In-Clinic", "color": "#ef4444"}, "upcomingAppointments": [{"doctor": "Dr. Farhan Qureshi", "initials": "FQ", "specialty": "Cardiovascular Health", "date": "Tuesday, 20 Jan, 11:00 AM", "type": "Arterial Hemodynamics Review", "mode": "In-Clinic", "color": "#ef4444"}, {"doctor": "Dr. Sanjay Deshmukh", "initials": "SD", "specialty": "Pulmonology", "date": "Friday, 23 Jan, 03:00 PM", "type": "Respiratory Capacity Test", "mode": "Teleconsultation", "color": "#0284c7"}, {"doctor": "Dr. Zainab Khan", "initials": "ZK", "specialty": "Endocrinology", "date": "Wednesday, 28 Jan, 10:30 AM", "type": "Annual PM-JAY Health Review", "mode": "Hospital Review", "color": "#059669"}]}'::jsonb,
    '[{"id": "REC-0x5290-SW", "patient": "Shaikh Mohammad Warsi", "abha": "91-7712-4890-3318", "hash": "3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b", "cid": "QmWarsiBronchialDynamicsAndVentilationReport2026", "type": "Bronchial Dynamics & Ventilation Index Analysis", "timestamp": "2026-08-22 13:00 UTC", "facility": "KEM Hospital Pulmonary Critical Care", "verified": true}, {"id": "REC-0x5291-SW", "patient": "Shaikh Mohammad Warsi", "abha": "91-7712-4890-3318", "hash": "8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e", "cid": "QmWarsiLeadISinusRhythmElectrocardiogram2026", "type": "Continuous Sinus Rhythm Electrocardiogram & QTc Digest", "timestamp": "2026-08-25 09:45 UTC", "facility": "OnePlus Watch 2 Wearables Gateway", "verified": true}]'::jsonb
);
INSERT INTO abha_profiles (
    id, name, age, gender, dob, year_of_birth, blood_type,
    abha_id, abha_address, policy_number, plan_type, state_code,
    linked_hip, residence, avatar_url, device, status,
    kyc_status, kyc_verified, pmjay_coverage, pmjay_eligible,
    vitals, conditions, visual_analytics, blockchain_records
) VALUES (
    'surabhi_verified_abha',
    'Surabhi',
    24,
    'Female',
    'March 15, 2002',
    2002,
    'O+',
    '91-4478-2910-6351',
    'surabhi@abdm',
    'PM-JAY-2026-IND-4891',
    'Ayushman Bharat PM-JAY (ABDM Verified)',
    'KA',
    'NIMHANS & Manipal Hospital Bengaluru',
    'Bengaluru / New Delhi, India',
    '/images/surabhi.jpg',
    'Fitbit Sense 2 & Health Connect',
    'ABDM_VERIFIED_ACTIVE',
    'VERIFIED_BIOMETRIC',
    TRUE,
    '₹5,00,000 Annual Family Floating Cover',
    TRUE,
    '{"heartRate": 74, "avgHeartRate": 68, "maxHeartRate": 122, "systolicBp": 116, "diastolicBp": 75, "oxygenSaturation": 98.6, "respirationRate": 16, "hrv": 68, "vo2Max": 45.8, "leadIEcg": "Normal Sinus Rhythm (NSR) • QTc 404ms • Healthy Autonomic Tone"}'::jsonb,
    '[{"id": "cond-lungs", "title": "Aerobic Diffusion & Vital Capacity", "doctor": "Dr. Rajesh K. Varma", "specialty": "Pulmonology", "organ": "lungs", "status": "Stable", "notes": "O2 Saturation: 98.6%, FEV1: 4.4L. Normal spirometry parameters and airway conductance.", "lastUpdated": "Nov 18, 2025 at 1:15 PM", "metrics": {"fev1": "4.4 L", "o2": "98.6%", "heartRate": "74 BPM", "trendThisMonth": "98.6%", "trendPrevMonth": "97.0%"}}, {"id": "cond-shoulder", "title": "Upper Back Posture & Scapular Balance", "doctor": "Dr. Rajesh K. Varma", "specialty": "Physical Medicine", "organ": "shoulder", "painLevel": 2, "status": "Stable", "notes": "Good postural alignment. Stretching exercises maintaining upper thoracic flexibility."}, {"id": "cond-knee", "title": "Patellofemoral Joint Biomechanics", "doctor": "Dr. Naresh Trehan", "specialty": "Rheumatology & Orthopedics", "organ": "knee", "angleCurrent": 120, "angleNormal": 120, "status": "Stable", "notes": "Preserved articular cartilage. Normal smooth patellar tracking with 120° extension."}]'::jsonb,
    '{"healthScore": 93, "avgBpm": 74, "bpmStatus": "Optimal Resting Heart Rate (Rest: 68 bpm)", "heartRatePath": "M 0 98 Q 25 78, 50 82 T 100 64 T 150 88 T 200 46 T 250 78 T 300 68 T 350 86 T 400 58", "sleepHours": "7h 45m", "sleepStatus": "88% Restorative Deep Sleep (Optimal)", "sleepBars": [68, 80, 85, 92, 88, 95, 90], "stressScore": "18 / 100", "stressStatus": "Relaxed Autonomic Balance", "stressPath": "M 0 122 Q 30 112, 60 115 T 120 105 T 180 120 T 240 102 T 300 115 T 350 110", "stressPoints": [{"cx": 40, "cy": 113, "isHigh": false}, {"cx": 110, "cy": 107, "isHigh": false}, {"cx": 190, "cy": 119, "isHigh": false}, {"cx": 270, "cy": 103, "isHigh": false}, {"cx": 340, "cy": 111, "isHigh": false}], "avgSteps": "9,800", "stepsStatus": "+12% Active Daily Movement vs Target", "stepsBars": [{"height": 76, "active": false}, {"height": 86, "active": false}, {"height": 90, "active": false}, {"height": 80, "active": false}, {"height": 96, "active": true}, {"height": 84, "active": false}, {"height": 88, "active": false}], "aiInsights": {"positive": {"title": "Optimal Biomarker Equilibrium", "description": "Blood pressure (116/75 mmHg) and SpO2 (98.6%) confirm robust cardiovascular baseline."}, "takeAction": {"title": "Daily Step Consistency", "description": "Maintain 10,000 steps daily average with regular evening walks."}, "monitor": {"title": "Postural Alignment", "description": "Incorporate upper body stretches during extended sitting."}}, "carePlan": {"medicationPercent": 100, "medicationStatus": "Daily Nutrition & Omega-3 Complete", "hydrationPercent": 84, "hydrationStatus": "2.3L / 2.7L Target Reached"}, "nextAppointment": {"doctor": "Dr. Priya Sundaram", "initials": "PS", "specialty": "Rheumatology & Joint Care", "date": "Thursday, 22 Jan, 02:00 PM", "type": "Joint Mobility Assessment", "mode": "In-Clinic", "color": "#db2777"}, "upcomingAppointments": [{"doctor": "Dr. Priya Sundaram", "initials": "PS", "specialty": "Rheumatology & Joint Care", "date": "Thursday, 22 Jan, 02:00 PM", "type": "Joint Mobility Assessment", "mode": "In-Clinic", "color": "#db2777"}, {"doctor": "Dr. Arun Mehra", "initials": "AM", "specialty": "Internal Medicine", "date": "Monday, 26 Jan, 09:30 AM", "type": "Metabolic & Vitals Screening", "mode": "Teleconsultation", "color": "#059669"}, {"doctor": "Dr. Kavita Joshi", "initials": "KJ", "specialty": "Physical Therapy", "date": "Friday, 30 Jan, 04:45 PM", "type": "Shoulder Scapular Rehab", "mode": "In-Clinic", "color": "#7c3aed"}]}'::jsonb,
    '[{"id": "REC-0x4891-SR", "patient": "Surabhi", "abha": "91-4478-2910-6351", "hash": "5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b", "cid": "QmSurabhiAerobicDiffusionAndVitalCapacityReport2026", "type": "Aerobic Diffusion & Vital Capacity Spirometry", "timestamp": "2026-08-21 11:10 UTC", "facility": "NIMHANS Pulmonology & Wellness Node", "verified": true}, {"id": "REC-0x4892-SR", "patient": "Surabhi", "abha": "91-4478-2910-6351", "hash": "6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e", "cid": "QmSurabhiPatellofemoralJointBiomechanicsReport2026", "type": "Patellofemoral Joint Biomechanics & Articular Assessment", "timestamp": "2026-08-24 15:30 UTC", "facility": "Manipal Hospital Orthopedics Unit", "verified": true}]'::jsonb
);

-- 3. Insert patient_vitals
INSERT INTO patient_vitals (
    profile_id, heart_rate, avg_heart_rate, max_heart_rate,
    systolic_bp, diastolic_bp, oxygen_saturation, respiration_rate,
    hrv, vo2_max, lead_i_ecg
) VALUES (
    'jiya_jaiswal_verified_abha',
    72,
    66,
    120,
    114,
    72,
    99.2,
    15,
    70,
    46.5,
    'Normal Sinus Rhythm (NSR) • QTc 398ms • Stable Rhythm'
);
INSERT INTO patient_vitals (
    profile_id, heart_rate, avg_heart_rate, max_heart_rate,
    systolic_bp, diastolic_bp, oxygen_saturation, respiration_rate,
    hrv, vo2_max, lead_i_ecg
) VALUES (
    'mangal_singh_verified_abha',
    72,
    65,
    126,
    118,
    78,
    98.8,
    16,
    66,
    49.0,
    'Normal Sinus Rhythm (NSR) • QTc 408ms • ST-Isoelectric'
);
INSERT INTO patient_vitals (
    profile_id, heart_rate, avg_heart_rate, max_heart_rate,
    systolic_bp, diastolic_bp, oxygen_saturation, respiration_rate,
    hrv, vo2_max, lead_i_ecg
) VALUES (
    'mausam_kar_verified_abha',
    74,
    72,
    128,
    118,
    76,
    98.5,
    16,
    68,
    48.2,
    'Normal Sinus Rhythm (NSR) • QTc 410ms • ST-Isoelectric'
);
INSERT INTO patient_vitals (
    profile_id, heart_rate, avg_heart_rate, max_heart_rate,
    systolic_bp, diastolic_bp, oxygen_saturation, respiration_rate,
    hrv, vo2_max, lead_i_ecg
) VALUES (
    'rachit_tiwari_verified_abha',
    70,
    62,
    124,
    116,
    74,
    99.0,
    15,
    72,
    51.4,
    'Normal Sinus Rhythm (NSR) • QTc 402ms • High Autonomic Tone'
);
INSERT INTO patient_vitals (
    profile_id, heart_rate, avg_heart_rate, max_heart_rate,
    systolic_bp, diastolic_bp, oxygen_saturation, respiration_rate,
    hrv, vo2_max, lead_i_ecg
) VALUES (
    'shaikh_warsi_verified_abha',
    76,
    67,
    128,
    120,
    80,
    98.4,
    16,
    65,
    47.0,
    'Normal Sinus Rhythm (NSR) • QTc 406ms • Isoelectric ST Segment'
);
INSERT INTO patient_vitals (
    profile_id, heart_rate, avg_heart_rate, max_heart_rate,
    systolic_bp, diastolic_bp, oxygen_saturation, respiration_rate,
    hrv, vo2_max, lead_i_ecg
) VALUES (
    'surabhi_verified_abha',
    74,
    68,
    122,
    116,
    75,
    98.6,
    16,
    68,
    45.8,
    'Normal Sinus Rhythm (NSR) • QTc 404ms • Healthy Autonomic Tone'
);

-- 4. Insert patient_conditions
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-lungs',
    'jiya_jaiswal_verified_abha',
    'Pulmonary Oxygenation & Diffusion Index',
    'Dr. Rajesh K. Varma',
    'Pulmonology & Wellness',
    'lungs',
    'Stable',
    'O2 Saturation: 99.2%, FEV1: 4.3L. Peak arterial oxygenation and efficient diaphragmatic excursion.',
    NULL,
    NULL,
    NULL,
    'Nov 28, 2025 at 11:20 AM',
    '{"fev1": "4.3 L", "o2": "99.2%", "heartRate": "72 BPM", "trendThisMonth": "99.2%", "trendPrevMonth": "98.0%"}'::jsonb
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-shoulder',
    'jiya_jaiswal_verified_abha',
    'Cervical Spine & Rotator Alignment',
    'Dr. Rajesh K. Varma',
    'Orthopedic Rehabilitation',
    'shoulder',
    'Stable',
    'Excellent cervical and shoulder range of motion. Zero functional limitation or nerve entrapment.',
    1,
    NULL,
    NULL,
    NULL,
    NULL
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-knee',
    'jiya_jaiswal_verified_abha',
    'Bilateral Knee & Quadriceps Stability',
    'Dr. Naresh Trehan',
    'Orthopedics',
    'knee',
    'Stable',
    'Full 120° physiological flexion. Excellent ligamentous stability and bilateral weight distribution.',
    NULL,
    120,
    120,
    NULL,
    NULL
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-lungs',
    'mangal_singh_verified_abha',
    'Cardiorespiratory Stamina & Gas Exchange',
    'Dr. Rajesh K. Varma',
    'Pulmonology',
    'lungs',
    'Stable',
    'O2 Saturation: 98.8%, FEV1: 4.9L. Clear bilateral breath sounds, optimal tidal volume.',
    NULL,
    NULL,
    NULL,
    'Nov 12, 2025 at 3:30 PM',
    '{"fev1": "4.9 L", "o2": "98.8%", "heartRate": "72 BPM", "trendThisMonth": "98.8%", "trendPrevMonth": "97.2%"}'::jsonb
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-shoulder',
    'mangal_singh_verified_abha',
    'Left Scapular & Trapezius Tone',
    'Dr. Rajesh K. Varma',
    'Physiotherapy & Orthopedics',
    'shoulder',
    'Monitoring',
    'Slight desk posture tension. Ergonomic keyboard setup and scapular retractions recommended.',
    3,
    NULL,
    NULL,
    NULL,
    NULL
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-knee',
    'mangal_singh_verified_abha',
    'Patellar Tendon & Meniscal Mechanics',
    'Dr. Naresh Trehan',
    'Orthopedics',
    'knee',
    'Stable',
    'Normal joint space. Intact ligamentous stability with zero lateral deviation.',
    NULL,
    119,
    120,
    NULL,
    NULL
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-lungs',
    'mausam_kar_verified_abha',
    'Pulmonary Aerobic Function',
    'Dr. Rajesh K. Varma',
    'Pulmonology & Critical Care',
    'lungs',
    'Stable',
    'O2 Saturation: 98.5%, FEV1: 4.8L. Clear bilateral breath sounds with normal alveolar diffusion.',
    NULL,
    NULL,
    NULL,
    'Oct 27, 2025 at 2:15 PM',
    '{"fev1": "4.8 L", "o2": "98.5%", "heartRate": "74 BPM", "trendThisMonth": "98.5%", "trendPrevMonth": "96.8%"}'::jsonb
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-shoulder',
    'mausam_kar_verified_abha',
    'Cervical & Trapezius Desk Ergonomics',
    'Dr. Rajesh K. Varma',
    'Orthopedics & Sports Medicine',
    'shoulder',
    'Monitoring',
    'Mild trapezius stiffness from display work. Ergonomic desk setup and scapular stretches recommended.',
    4,
    NULL,
    NULL,
    NULL,
    NULL
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-knee',
    'mausam_kar_verified_abha',
    'Patellar Biomechanics & Joint Cartilage',
    'Dr. Naresh Trehan',
    'Orthopedics & Joint Care',
    'knee',
    'Stable',
    'Healthy joint space. Full physiological range of motion with preserved articular cartilage.',
    NULL,
    118,
    120,
    NULL,
    NULL
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-lungs',
    'rachit_tiwari_verified_abha',
    'High-Endurance VO2 Max Pulmonary Reserve',
    'Dr. Rajesh K. Varma',
    'Sports Pulmonology',
    'lungs',
    'Stable',
    'O2 Saturation: 99.0%, FEV1: 5.2L. Peak athletic respiratory capacity and rapid ventilatory recovery.',
    NULL,
    NULL,
    NULL,
    'Nov 02, 2025 at 10:45 AM',
    '{"fev1": "5.2 L", "o2": "99.0%", "heartRate": "70 BPM", "trendThisMonth": "99.2%", "trendPrevMonth": "98.0%"}'::jsonb
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-shoulder',
    'rachit_tiwari_verified_abha',
    'Thoracic & Deltoid Athletic Mobility',
    'Dr. Rajesh K. Varma',
    'Sports Medicine',
    'shoulder',
    'Stable',
    'Optimal rotator cuff function. Minimal athletic muscular tension.',
    2,
    NULL,
    NULL,
    NULL,
    NULL
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-knee',
    'rachit_tiwari_verified_abha',
    'Lower Kinetic Chain & Patellar Dynamics',
    'Dr. Naresh Trehan',
    'Sports Orthopedics',
    'knee',
    'Stable',
    'Optimal quadriceps force transfer. 120° full physiological range without crepitus.',
    NULL,
    120,
    120,
    NULL,
    NULL
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-lungs',
    'shaikh_warsi_verified_abha',
    'Bronchial Dynamics & Ventilation Index',
    'Dr. Rajesh K. Varma',
    'Pulmonology & Critical Care',
    'lungs',
    'Stable',
    'O2 Saturation: 98.4%, FEV1: 4.8L. Healthy bronchial tone and baseline physiological ventilation.',
    NULL,
    NULL,
    NULL,
    'Nov 24, 2025 at 4:00 PM',
    '{"fev1": "4.8 L", "o2": "98.4%", "heartRate": "76 BPM", "trendThisMonth": "98.4%", "trendPrevMonth": "96.5%"}'::jsonb
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-shoulder',
    'shaikh_warsi_verified_abha',
    'Right Trapezius Workstation Posture',
    'Dr. Rajesh K. Varma',
    'Orthopedics',
    'shoulder',
    'Monitoring',
    'Slight stiffness from prolonged terminal coding. Active standing breaks and thoracic mobility prescribed.',
    3,
    NULL,
    NULL,
    NULL,
    NULL
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-knee',
    'shaikh_warsi_verified_abha',
    'Meniscal Kinetics & Knee Extension',
    'Dr. Naresh Trehan',
    'Joint Surgery & Orthopedics',
    'knee',
    'Stable',
    'Smooth articular glide. No effusion or mechanical restriction with 119° extension.',
    NULL,
    119,
    120,
    NULL,
    NULL
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-lungs',
    'surabhi_verified_abha',
    'Aerobic Diffusion & Vital Capacity',
    'Dr. Rajesh K. Varma',
    'Pulmonology',
    'lungs',
    'Stable',
    'O2 Saturation: 98.6%, FEV1: 4.4L. Normal spirometry parameters and airway conductance.',
    NULL,
    NULL,
    NULL,
    'Nov 18, 2025 at 1:15 PM',
    '{"fev1": "4.4 L", "o2": "98.6%", "heartRate": "74 BPM", "trendThisMonth": "98.6%", "trendPrevMonth": "97.0%"}'::jsonb
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-shoulder',
    'surabhi_verified_abha',
    'Upper Back Posture & Scapular Balance',
    'Dr. Rajesh K. Varma',
    'Physical Medicine',
    'shoulder',
    'Stable',
    'Good postural alignment. Stretching exercises maintaining upper thoracic flexibility.',
    2,
    NULL,
    NULL,
    NULL,
    NULL
);
INSERT INTO patient_conditions (
    id, profile_id, title, doctor, specialty, organ, status, notes,
    pain_level, angle_current, angle_normal, last_updated, metrics
) VALUES (
    'cond-knee',
    'surabhi_verified_abha',
    'Patellofemoral Joint Biomechanics',
    'Dr. Naresh Trehan',
    'Rheumatology & Orthopedics',
    'knee',
    'Stable',
    'Preserved articular cartilage. Normal smooth patellar tracking with 120° extension.',
    NULL,
    120,
    120,
    NULL,
    NULL
);

-- 5. Insert blockchain_records
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid,
    record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x6120-JJ',
    'jiya_jaiswal_verified_abha',
    'Jiya Jaiswal',
    '91-5519-3820-9104',
    '2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e',
    'QmJiyaPulmonaryOxygenationDiffusionReport2026',
    'Pulmonary Oxygenation & Diaphragmatic Excursion Report',
    '2026-08-23 10:30 UTC',
    'Jaypee Hospital Pulmonology Node',
    TRUE
) ON CONFLICT (id) DO UPDATE SET
    verified = EXCLUDED.verified;
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid,
    record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x6121-JJ',
    'jiya_jaiswal_verified_abha',
    'Jiya Jaiswal',
    '91-5519-3820-9104',
    '7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f',
    'QmJiyaPolysomnographyRestorativeSleepDigest2026',
    'Polysomnography & Circadian Restorative Sleep Profile',
    '2026-08-26 07:15 UTC',
    'Apple Watch 9 Biometric Synapse Stream',
    TRUE
) ON CONFLICT (id) DO UPDATE SET
    verified = EXCLUDED.verified;
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid,
    record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x7732-MS',
    'mangal_singh_verified_abha',
    'Mangal Singh',
    '91-6310-9284-5172',
    '1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d',
    'QmMangalCardiorespiratoryGasExchangeVerifiedHash2026',
    'Cardiorespiratory Gas Exchange & Bilateral Breath Sounds',
    '2026-08-20 09:20 UTC',
    'SMS Medical College Jaipur',
    TRUE
) ON CONFLICT (id) DO UPDATE SET
    verified = EXCLUDED.verified;
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid,
    record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x7733-MS',
    'mangal_singh_verified_abha',
    'Mangal Singh',
    '91-6310-9284-5172',
    '9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f',
    'QmMangalMeniscalKineticsAndExtensionReport2026',
    'Patellar Tendon & Meniscal Mechanics Assessment',
    '2026-08-23 10:15 UTC',
    'AIIMS Jodhpur Orthopedic Division',
    TRUE
) ON CONFLICT (id) DO UPDATE SET
    verified = EXCLUDED.verified;
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid,
    record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x8921-MK',
    'mausam_kar_verified_abha',
    'Mausam Kar',
    '91-7294-8102-5309',
    '8f4e2b81239c09a8e74b321098ef69c1a76d8e209841af09',
    'QmZ4tDuvesekSs4qM5ZBKpXiZGun7S2CYtEZRB3DYXkjGx',
    'Chest Radiograph & Alveolar Diffusion Report',
    '2026-08-18 11:45 UTC',
    'AIIMS Pulmonology Department',
    TRUE
) ON CONFLICT (id) DO UPDATE SET
    verified = EXCLUDED.verified;
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid,
    record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x7412-MK',
    'mausam_kar_verified_abha',
    'Mausam Kar',
    '91-7294-8102-5309',
    '3e4a91b2c45d6789e0123456789abcdef0123456789abcdef0123456789abcde',
    'QmausamKarLeadIEcgWaveformTelemetryHashDigest2026',
    'Continuous Lead I ECG & HRV Autonomic Stream',
    '2026-08-22 08:30 UTC',
    'Apple Watch Ultra & Google Health Connect Gateway',
    TRUE
) ON CONFLICT (id) DO UPDATE SET
    verified = EXCLUDED.verified;
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid,
    record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x9924-RT',
    'rachit_tiwari_verified_abha',
    'Rachit Tiwari',
    '91-8842-1920-7463',
    '7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b',
    'QmRachitPulmonaryAthleticVo2MaxReserveReport2026',
    'Athletic VO2 Max & High-Endurance Pulmonary Spirometry',
    '2026-08-19 14:15 UTC',
    'Sports Medicine & Pulmonology Centre',
    TRUE
) ON CONFLICT (id) DO UPDATE SET
    verified = EXCLUDED.verified;
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid,
    record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x9925-RT',
    'rachit_tiwari_verified_abha',
    'Rachit Tiwari',
    '91-8842-1920-7463',
    '4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d',
    'QmRachitOrthopedicLowerKineticChainScan2026',
    'Lower Kinetic Chain & Patellar Joint Cartilage Diagnostic',
    '2026-08-21 16:40 UTC',
    'KGMU Sports Orthopedics Unit',
    TRUE
) ON CONFLICT (id) DO UPDATE SET
    verified = EXCLUDED.verified;
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid,
    record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x5290-SW',
    'shaikh_warsi_verified_abha',
    'Shaikh Mohammad Warsi',
    '91-7712-4890-3318',
    '3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b',
    'QmWarsiBronchialDynamicsAndVentilationReport2026',
    'Bronchial Dynamics & Ventilation Index Analysis',
    '2026-08-22 13:00 UTC',
    'KEM Hospital Pulmonary Critical Care',
    TRUE
) ON CONFLICT (id) DO UPDATE SET
    verified = EXCLUDED.verified;
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid,
    record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x5291-SW',
    'shaikh_warsi_verified_abha',
    'Shaikh Mohammad Warsi',
    '91-7712-4890-3318',
    '8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e',
    'QmWarsiLeadISinusRhythmElectrocardiogram2026',
    'Continuous Sinus Rhythm Electrocardiogram & QTc Digest',
    '2026-08-25 09:45 UTC',
    'OnePlus Watch 2 Wearables Gateway',
    TRUE
) ON CONFLICT (id) DO UPDATE SET
    verified = EXCLUDED.verified;
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid,
    record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x4891-SR',
    'surabhi_verified_abha',
    'Surabhi',
    '91-4478-2910-6351',
    '5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b',
    'QmSurabhiAerobicDiffusionAndVitalCapacityReport2026',
    'Aerobic Diffusion & Vital Capacity Spirometry',
    '2026-08-21 11:10 UTC',
    'NIMHANS Pulmonology & Wellness Node',
    TRUE
) ON CONFLICT (id) DO UPDATE SET
    verified = EXCLUDED.verified;
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid,
    record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x4892-SR',
    'surabhi_verified_abha',
    'Surabhi',
    '91-4478-2910-6351',
    '6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e',
    'QmSurabhiPatellofemoralJointBiomechanicsReport2026',
    'Patellofemoral Joint Biomechanics & Articular Assessment',
    '2026-08-24 15:30 UTC',
    'Manipal Hospital Orthopedics Unit',
    TRUE
) ON CONFLICT (id) DO UPDATE SET
    verified = EXCLUDED.verified;

-- 6. Insert patient_appointments
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'jiya_jaiswal_verified_abha',
    'Dr. Sneha Roy',
    'SR',
    'Orthopedics & Sports',
    'Monday, 19 Jan, 10:30 AM',
    'Patellar Kinetic Screening',
    'In-Clinic',
    '#0284c7',
    TRUE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'jiya_jaiswal_verified_abha',
    'Dr. Manish Gupta',
    'MG',
    'Preventive Pulmonology',
    'Thursday, 22 Jan, 04:15 PM',
    'Aerobic Diffusion Evaluation',
    'Teleconsultation',
    '#059669',
    FALSE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'jiya_jaiswal_verified_abha',
    'Dr. Deepa Nair',
    'DN',
    'Clinical Nutrition',
    'Monday, 26 Jan, 01:45 PM',
    'Hydration & Metabolic Plan',
    'Teleconsultation',
    '#db2777',
    FALSE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'mangal_singh_verified_abha',
    'Dr. Naresh Trehan',
    'NT',
    'Cardiology & Thoracic Care',
    'Wednesday, 21 Jan, 10:00 AM',
    'Cardiac Stress & ECG Review',
    'Hospital Review',
    '#ef4444',
    TRUE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'mangal_singh_verified_abha',
    'Dr. Vikram Patel',
    'VP',
    'Pulmonary Medicine',
    'Saturday, 24 Jan, 03:30 PM',
    'VO2 Max Performance Check',
    'Teleconsultation',
    '#0284c7',
    FALSE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'mangal_singh_verified_abha',
    'Dr. Geeta Pillai',
    'GP',
    'Joint Biomechanics',
    'Tuesday, 27 Jan, 01:00 PM',
    'Knee Articular Follow-up',
    'In-Clinic',
    '#d97706',
    FALSE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'mausam_kar_verified_abha',
    'Dr. Rajesh K. Varma',
    'RV',
    'Pulmonology & Critical Care',
    'Friday, 16 Jan, 04:00 PM',
    'Annual Preventive Review',
    'Teleconsultation',
    '#0284c7',
    TRUE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'mausam_kar_verified_abha',
    'Dr. Anita Sharma',
    'AS',
    'Sports Orthopedics',
    'Monday, 19 Jan, 11:30 AM',
    'Cervical Ergonomics Review',
    'In-Clinic',
    '#7c3aed',
    FALSE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'mausam_kar_verified_abha',
    'Dr. Suresh N. Rao',
    'SR',
    'General Medicine',
    'Thursday, 22 Jan, 02:15 PM',
    'Diagnostic Blood Panel',
    'Hospital Review',
    '#059669',
    FALSE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'rachit_tiwari_verified_abha',
    'Dr. Amitava Roy',
    'AR',
    'Sports Medicine & Rehab',
    'Wednesday, 21 Jan, 03:30 PM',
    'Thoracic & Deltoid Mobility',
    'In-Clinic',
    '#7c3aed',
    TRUE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'rachit_tiwari_verified_abha',
    'Dr. Sunita Kapoor',
    'SK',
    'Diagnostic Cardiology',
    'Saturday, 24 Jan, 11:15 AM',
    'Resting HRV & Rhythm Check',
    'Hospital Review',
    '#ef4444',
    FALSE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'rachit_tiwari_verified_abha',
    'Dr. Rohit Sen',
    'RS',
    'Primary Health Care',
    'Tuesday, 27 Jan, 02:00 PM',
    'Comprehensive ABDM Checkup',
    'Teleconsultation',
    '#059669',
    FALSE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'shaikh_warsi_verified_abha',
    'Dr. Farhan Qureshi',
    'FQ',
    'Cardiovascular Health',
    'Tuesday, 20 Jan, 11:00 AM',
    'Arterial Hemodynamics Review',
    'In-Clinic',
    '#ef4444',
    TRUE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'shaikh_warsi_verified_abha',
    'Dr. Sanjay Deshmukh',
    'SD',
    'Pulmonology',
    'Friday, 23 Jan, 03:00 PM',
    'Respiratory Capacity Test',
    'Teleconsultation',
    '#0284c7',
    FALSE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'shaikh_warsi_verified_abha',
    'Dr. Zainab Khan',
    'ZK',
    'Endocrinology',
    'Wednesday, 28 Jan, 10:30 AM',
    'Annual PM-JAY Health Review',
    'Hospital Review',
    '#059669',
    FALSE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'surabhi_verified_abha',
    'Dr. Priya Sundaram',
    'PS',
    'Rheumatology & Joint Care',
    'Thursday, 22 Jan, 02:00 PM',
    'Joint Mobility Assessment',
    'In-Clinic',
    '#db2777',
    TRUE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'surabhi_verified_abha',
    'Dr. Arun Mehra',
    'AM',
    'Internal Medicine',
    'Monday, 26 Jan, 09:30 AM',
    'Metabolic & Vitals Screening',
    'Teleconsultation',
    '#059669',
    FALSE
);
INSERT INTO patient_appointments (
    profile_id, doctor, initials, specialty, appointment_date,
    appointment_type, mode, badge_color, is_next
) VALUES (
    'surabhi_verified_abha',
    'Dr. Kavita Joshi',
    'KJ',
    'Physical Therapy',
    'Friday, 30 Jan, 04:45 PM',
    'Shoulder Scapular Rehab',
    'In-Clinic',
    '#7c3aed',
    FALSE
);

COMMIT;

-- ============================================================================
-- VERIFICATION QUERY (Run this after migration to verify data counts)
-- ============================================================================
-- SELECT 
--   (SELECT COUNT(*) FROM abha_registry) AS total_registries,
--   (SELECT COUNT(*) FROM abha_profiles) AS total_profiles,
--   (SELECT COUNT(*) FROM patient_vitals) AS total_vitals_records,
--   (SELECT COUNT(*) FROM patient_conditions) AS total_conditions,
--   (SELECT COUNT(*) FROM blockchain_records) AS total_blockchain_records,
--   (SELECT COUNT(*) FROM patient_appointments) AS total_appointments;
