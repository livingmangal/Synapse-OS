-- ============================================================================
-- SANJEEVNI-OS / ABDM HEALTH DATA — COMPLETE SUPABASE SCHEMA & SEED MIGRATION
-- Robust, dollar-quoted, zero-syntax-error PostgreSQL schema & seed migration.
-- ============================================================================

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
-- 1. TABLES DEFINITION
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

-- ----------------------------------------------------------------------------
-- 2. INDEXES & VIEWS
-- ----------------------------------------------------------------------------
CREATE INDEX idx_abha_profiles_abha_id ON abha_profiles(abha_id);
CREATE INDEX idx_patient_vitals_profile ON patient_vitals(profile_id);
CREATE INDEX idx_patient_conditions_profile ON patient_conditions(profile_id);
CREATE INDEX idx_blockchain_records_profile ON blockchain_records(profile_id);
CREATE INDEX idx_blockchain_records_abha ON blockchain_records(abha_number);

CREATE OR REPLACE VIEW view_abdm_registry_citizens AS
SELECT 
    p.id,
    p.name,
    p.age,
    p.gender,
    p.dob,
    p.year_of_birth,
    p.blood_type,
    p.abha_id,
    p.abha_address,
    p.policy_number,
    p.plan_type,
    p.state_code,
    p.linked_hip,
    p.status,
    p.kyc_status,
    p.kyc_verified,
    p.pmjay_coverage,
    p.pmjay_eligible,
    p.avatar_url,
    p.device,
    p.vitals,
    p.conditions,
    p.visual_analytics,
    p.blockchain_records,
    p.created_at
FROM abha_profiles p;

-- ----------------------------------------------------------------------------
-- 3. ROW LEVEL SECURITY (RLS) POLICIES
-- ----------------------------------------------------------------------------
ALTER TABLE abha_registry ENABLE ROW LEVEL SECURITY;
ALTER TABLE abha_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE patient_vitals ENABLE ROW LEVEL SECURITY;
ALTER TABLE patient_conditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE blockchain_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE patient_appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read abha_registry" ON abha_registry FOR SELECT USING (true);
CREATE POLICY "Public read abha_profiles" ON abha_profiles FOR SELECT USING (true);
CREATE POLICY "Public insert abha_profiles" ON abha_profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update abha_profiles" ON abha_profiles FOR UPDATE USING (true);

CREATE POLICY "Public read patient_vitals" ON patient_vitals FOR SELECT USING (true);
CREATE POLICY "Public read patient_conditions" ON patient_conditions FOR SELECT USING (true);

CREATE POLICY "Public read blockchain_records" ON blockchain_records FOR SELECT USING (true);
CREATE POLICY "Public insert blockchain_records" ON blockchain_records FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update blockchain_records" ON blockchain_records FOR UPDATE USING (true);
CREATE POLICY "Public delete blockchain_records" ON blockchain_records FOR DELETE USING (true);

CREATE POLICY "Public read patient_appointments" ON patient_appointments FOR SELECT USING (true);

-- ----------------------------------------------------------------------------
-- 4. SEED DATA INSERTS
-- ----------------------------------------------------------------------------
INSERT INTO abha_registry (registry_name, version, authority, total_records)
VALUES (
    'National Health Authority - ABDM Citizen Registry',
    '2026.2',
    'National Health Authority (NHA), Govt of India',
    6
);

INSERT INTO abha_profiles (
    id, name, age, gender, dob, year_of_birth, blood_type,
    abha_id, abha_address, policy_number, plan_type, state_code,
    linked_hip, residence, avatar_url, device, status,
    kyc_status, kyc_verified, pmjay_coverage, pmjay_eligible,
    vitals, conditions, visual_analytics, blockchain_records
) VALUES (
    'mausam_kar_verified_abha', 'Mausam Kar', 24, 'Male', 'April 14, 2002', 2002, 'B+',
    '91-7294-8102-5309', 'mausamkar@abdm', 'PM-JAY-2026-IND-8841', 'Ayushman Bharat PM-JAY (ABDM Verified)', 'DL',
    'All India Institute of Medical Sciences (AIIMS) - Central Node, New Delhi', 'New Delhi, India', '/images/mausam_kar.jpg', 'Apple Watch Ultra 2 & Google Health Connect', 'ABDM_VERIFIED_ACTIVE',
    'VERIFIED_BIOMETRIC', TRUE, 'INR 5,00,000 / Year Free Coverage', TRUE,
    $${}$$::jsonb, $$[]$$::jsonb, $${}$$::jsonb, $$[{"id": "REC-0x8921-MK", "patient": "Mausam Kar", "abha": "91-7294-8102-5309", "hash": "8f4e2b81239c09a8e74b321098ef69c1a76d8e209841af09", "cid": "QmZ4tDuvesekSs4qM5ZBKpXiZGun7S2CYtEZRB3DYXkjGx", "type": "Chest Radiograph & Alveolar Diffusion Report", "timestamp": "2026-08-18 11:45 UTC", "facility": "AIIMS Pulmonology Department", "verified": true}, {"id": "REC-0x7412-MK", "patient": "Mausam Kar", "abha": "91-7294-8102-5309", "hash": "3e4a91b2c45d6789e0123456789abcdef0123456789abcdef0123456789abcde", "cid": "QmausamKarLeadIEcgWaveformTelemetryHashDigest2026", "type": "Continuous Lead I ECG & HRV Autonomic Stream", "timestamp": "2026-08-22 08:30 UTC", "facility": "Apple Watch Ultra & Google Health Connect Gateway", "verified": true}]$$::jsonb
);
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid, record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x8921-MK', 'mausam_kar_verified_abha', 'Mausam Kar', '91-7294-8102-5309',
    '8f4e2b81239c09a8e74b321098ef69c1a76d8e209841af09', 'QmZ4tDuvesekSs4qM5ZBKpXiZGun7S2CYtEZRB3DYXkjGx', 'Chest Radiograph & Alveolar Diffusion Report', '2026-08-18 11:45 UTC', 'AIIMS Pulmonology Department', TRUE
);
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid, record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x7412-MK', 'mausam_kar_verified_abha', 'Mausam Kar', '91-7294-8102-5309',
    '3e4a91b2c45d6789e0123456789abcdef0123456789abcdef0123456789abcde', 'QmausamKarLeadIEcgWaveformTelemetryHashDigest2026', 'Continuous Lead I ECG & HRV Autonomic Stream', '2026-08-22 08:30 UTC', 'Apple Watch Ultra & Google Health Connect Gateway', TRUE
);
INSERT INTO abha_profiles (
    id, name, age, gender, dob, year_of_birth, blood_type,
    abha_id, abha_address, policy_number, plan_type, state_code,
    linked_hip, residence, avatar_url, device, status,
    kyc_status, kyc_verified, pmjay_coverage, pmjay_eligible,
    vitals, conditions, visual_analytics, blockchain_records
) VALUES (
    'rachit_tiwari_verified_abha', 'Rachit Tiwari', 23, 'Male', 'June 18, 2003', 2003, 'O+',
    '91-8842-1920-7463', 'rachittiwari@abdm', 'PM-JAY-2026-IND-9924', 'Ayushman Bharat PM-JAY (ABDM Verified)', 'UP',
    'King George''s Medical University (KGMU) & AIIMS Node', 'Lucknow / New Delhi, India', '/images/rachit_tiwari.jpg', 'Pixel Watch 3 & Google Health Connect Synced', 'ABDM_VERIFIED_ACTIVE',
    'VERIFIED_BIOMETRIC', TRUE, 'INR 5,00,000 / Year Free Coverage', TRUE,
    $${}$$::jsonb, $$[]$$::jsonb, $${}$$::jsonb, $$[{"id": "REC-0x9924-RT", "patient": "Rachit Tiwari", "abha": "91-8842-1920-7463", "hash": "7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b", "cid": "QmRachitPulmonaryAthleticVo2MaxReserveReport2026", "type": "Athletic VO2 Max & High-Endurance Pulmonary Spirometry", "timestamp": "2026-08-19 14:15 UTC", "facility": "Sports Medicine & Pulmonology Centre", "verified": true}, {"id": "REC-0x9925-RT", "patient": "Rachit Tiwari", "abha": "91-8842-1920-7463", "hash": "4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d", "cid": "QmRachitOrthopedicLowerKineticChainScan2026", "type": "Lower Kinetic Chain & Patellar Joint Cartilage Diagnostic", "timestamp": "2026-08-21 16:40 UTC", "facility": "KGMU Sports Orthopedics Unit", "verified": true}]$$::jsonb
);
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid, record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x9924-RT', 'rachit_tiwari_verified_abha', 'Rachit Tiwari', '91-8842-1920-7463',
    '7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b', 'QmRachitPulmonaryAthleticVo2MaxReserveReport2026', 'Athletic VO2 Max & High-Endurance Pulmonary Spirometry', '2026-08-19 14:15 UTC', 'Sports Medicine & Pulmonology Centre', TRUE
);
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid, record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x9925-RT', 'rachit_tiwari_verified_abha', 'Rachit Tiwari', '91-8842-1920-7463',
    '4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d', 'QmRachitOrthopedicLowerKineticChainScan2026', 'Lower Kinetic Chain & Patellar Joint Cartilage Diagnostic', '2026-08-21 16:40 UTC', 'KGMU Sports Orthopedics Unit', TRUE
);
INSERT INTO abha_profiles (
    id, name, age, gender, dob, year_of_birth, blood_type,
    abha_id, abha_address, policy_number, plan_type, state_code,
    linked_hip, residence, avatar_url, device, status,
    kyc_status, kyc_verified, pmjay_coverage, pmjay_eligible,
    vitals, conditions, visual_analytics, blockchain_records
) VALUES (
    'mangal_singh_verified_abha', 'Mangal Singh', 25, 'Male', 'November 05, 2001', 2001, 'A+',
    '91-6310-9284-5172', 'mangalsingh@abdm', 'PM-JAY-2026-IND-7732', 'Ayushman Bharat PM-JAY (ABDM Verified)', 'RJ',
    'Sawai Man Singh (SMS) Medical College & AIIMS Jodhpur', 'Jaipur / New Delhi, India', '/images/mangal_singh.jpg', 'Samsung Galaxy Watch 6 & Health Connect', 'ABDM_VERIFIED_ACTIVE',
    'VERIFIED_BIOMETRIC', TRUE, 'INR 5,00,000 / Year Free Coverage', TRUE,
    $${}$$::jsonb, $$[]$$::jsonb, $${}$$::jsonb, $$[{"id": "REC-0x7732-MS", "patient": "Mangal Singh", "abha": "91-6310-9284-5172", "hash": "1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d", "cid": "QmMangalCardiorespiratoryGasExchangeVerifiedHash2026", "type": "Cardiorespiratory Gas Exchange & Bilateral Breath Sounds", "timestamp": "2026-08-20 09:20 UTC", "facility": "SMS Medical College Jaipur", "verified": true}, {"id": "REC-0x7733-MS", "patient": "Mangal Singh", "abha": "91-6310-9284-5172", "hash": "9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f", "cid": "QmMangalMeniscalKineticsAndExtensionReport2026", "type": "Patellar Tendon & Meniscal Mechanics Assessment", "timestamp": "2026-08-23 10:15 UTC", "facility": "AIIMS Jodhpur Orthopedic Division", "verified": true}]$$::jsonb
);
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid, record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x7732-MS', 'mangal_singh_verified_abha', 'Mangal Singh', '91-6310-9284-5172',
    '1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d', 'QmMangalCardiorespiratoryGasExchangeVerifiedHash2026', 'Cardiorespiratory Gas Exchange & Bilateral Breath Sounds', '2026-08-20 09:20 UTC', 'SMS Medical College Jaipur', TRUE
);
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid, record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x7733-MS', 'mangal_singh_verified_abha', 'Mangal Singh', '91-6310-9284-5172',
    '9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f', 'QmMangalMeniscalKineticsAndExtensionReport2026', 'Patellar Tendon & Meniscal Mechanics Assessment', '2026-08-23 10:15 UTC', 'AIIMS Jodhpur Orthopedic Division', TRUE
);
INSERT INTO abha_profiles (
    id, name, age, gender, dob, year_of_birth, blood_type,
    abha_id, abha_address, policy_number, plan_type, state_code,
    linked_hip, residence, avatar_url, device, status,
    kyc_status, kyc_verified, pmjay_coverage, pmjay_eligible,
    vitals, conditions, visual_analytics, blockchain_records
) VALUES (
    'surabhi_verified_abha', 'Surabhi', 24, 'Female', 'March 15, 2002', 2002, 'O+',
    '91-4478-2910-6351', 'surabhi@abdm', 'PM-JAY-2026-IND-4891', 'Ayushman Bharat PM-JAY (ABDM Verified)', 'KA',
    'NIMHANS & Manipal Hospital Bengaluru', 'Bengaluru / New Delhi, India', '/images/surabhi.jpg', 'Fitbit Sense 2 & Health Connect', 'ABDM_VERIFIED_ACTIVE',
    'VERIFIED_BIOMETRIC', TRUE, 'INR 5,00,000 / Year Free Coverage', TRUE,
    $${}$$::jsonb, $$[]$$::jsonb, $${}$$::jsonb, $$[{"id": "REC-0x4891-SR", "patient": "Surabhi", "abha": "91-4478-2910-6351", "hash": "5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b", "cid": "QmSurabhiAerobicDiffusionAndVitalCapacityReport2026", "type": "Aerobic Diffusion & Vital Capacity Spirometry", "timestamp": "2026-08-21 11:10 UTC", "facility": "NIMHANS Pulmonology & Wellness Node", "verified": true}, {"id": "REC-0x4892-SR", "patient": "Surabhi", "abha": "91-4478-2910-6351", "hash": "6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e", "cid": "QmSurabhiPatellofemoralJointBiomechanicsReport2026", "type": "Patellofemoral Joint Biomechanics & Articular Assessment", "timestamp": "2026-08-24 15:30 UTC", "facility": "Manipal Hospital Orthopedics Unit", "verified": true}]$$::jsonb
);
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid, record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x4891-SR', 'surabhi_verified_abha', 'Surabhi', '91-4478-2910-6351',
    '5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b', 'QmSurabhiAerobicDiffusionAndVitalCapacityReport2026', 'Aerobic Diffusion & Vital Capacity Spirometry', '2026-08-21 11:10 UTC', 'NIMHANS Pulmonology & Wellness Node', TRUE
);
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid, record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x4892-SR', 'surabhi_verified_abha', 'Surabhi', '91-4478-2910-6351',
    '6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e', 'QmSurabhiPatellofemoralJointBiomechanicsReport2026', 'Patellofemoral Joint Biomechanics & Articular Assessment', '2026-08-24 15:30 UTC', 'Manipal Hospital Orthopedics Unit', TRUE
);
INSERT INTO abha_profiles (
    id, name, age, gender, dob, year_of_birth, blood_type,
    abha_id, abha_address, policy_number, plan_type, state_code,
    linked_hip, residence, avatar_url, device, status,
    kyc_status, kyc_verified, pmjay_coverage, pmjay_eligible,
    vitals, conditions, visual_analytics, blockchain_records
) VALUES (
    'shaikh_warsi_verified_abha', 'Shaikh Mohammad Warsi', 24, 'Male', 'December 10, 2001', 2001, 'AB+',
    '91-7712-4890-3318', 'shaikhwarsi@abdm', 'PM-JAY-2026-IND-5290', 'Ayushman Bharat PM-JAY (ABDM Verified)', 'MH',
    'King Edward Memorial (KEM) Hospital & Tata Memorial Centre', 'Mumbai / New Delhi, India', '/images/shaikh_warsi.jpg', 'OnePlus Watch 2 & Health Connect', 'ABDM_VERIFIED_ACTIVE',
    'VERIFIED_BIOMETRIC', TRUE, 'INR 5,00,000 / Year Free Coverage', TRUE,
    $${}$$::jsonb, $$[]$$::jsonb, $${}$$::jsonb, $$[{"id": "REC-0x5290-SW", "patient": "Shaikh Mohammad Warsi", "abha": "91-7712-4890-3318", "hash": "3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b", "cid": "QmWarsiBronchialDynamicsAndVentilationReport2026", "type": "Bronchial Dynamics & Ventilation Index Analysis", "timestamp": "2026-08-22 13:00 UTC", "facility": "KEM Hospital Pulmonary Critical Care", "verified": true}, {"id": "REC-0x5291-SW", "patient": "Shaikh Mohammad Warsi", "abha": "91-7712-4890-3318", "hash": "8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e", "cid": "QmWarsiLeadISinusRhythmElectrocardiogram2026", "type": "Continuous Sinus Rhythm Electrocardiogram & QTc Digest", "timestamp": "2026-08-25 09:45 UTC", "facility": "OnePlus Watch 2 Wearables Gateway", "verified": true}]$$::jsonb
);
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid, record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x5290-SW', 'shaikh_warsi_verified_abha', 'Shaikh Mohammad Warsi', '91-7712-4890-3318',
    '3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b', 'QmWarsiBronchialDynamicsAndVentilationReport2026', 'Bronchial Dynamics & Ventilation Index Analysis', '2026-08-22 13:00 UTC', 'KEM Hospital Pulmonary Critical Care', TRUE
);
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid, record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x5291-SW', 'shaikh_warsi_verified_abha', 'Shaikh Mohammad Warsi', '91-7712-4890-3318',
    '8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e', 'QmWarsiLeadISinusRhythmElectrocardiogram2026', 'Continuous Sinus Rhythm Electrocardiogram & QTc Digest', '2026-08-25 09:45 UTC', 'OnePlus Watch 2 Wearables Gateway', TRUE
);
INSERT INTO abha_profiles (
    id, name, age, gender, dob, year_of_birth, blood_type,
    abha_id, abha_address, policy_number, plan_type, state_code,
    linked_hip, residence, avatar_url, device, status,
    kyc_status, kyc_verified, pmjay_coverage, pmjay_eligible,
    vitals, conditions, visual_analytics, blockchain_records
) VALUES (
    'jiya_jaiswal_verified_abha', 'Jiya Jaiswal', 23, 'Female', 'August 22, 2003', 2003, 'B+',
    '91-5519-3820-9104', 'jiyajaiswal@abdm', 'PM-JAY-2026-IND-6120', 'Ayushman Bharat PM-JAY (ABDM Verified)', 'UP',
    'Jaypee Hospital Noida & AIIMS New Delhi', 'Noida / New Delhi, India', '/images/jiya_jaiswal.jpg', 'Apple Watch Series 9 & Health Connect', 'ABDM_VERIFIED_ACTIVE',
    'VERIFIED_BIOMETRIC', TRUE, 'INR 5,00,000 / Year Free Coverage', TRUE,
    $${}$$::jsonb, $$[]$$::jsonb, $${}$$::jsonb, $$[{"id": "REC-0x6120-JJ", "patient": "Jiya Jaiswal", "abha": "91-5519-3820-9104", "hash": "2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e", "cid": "QmJiyaPulmonaryOxygenationDiffusionReport2026", "type": "Pulmonary Oxygenation & Diaphragmatic Excursion Report", "timestamp": "2026-08-23 10:30 UTC", "facility": "Jaypee Hospital Pulmonology Node", "verified": true}, {"id": "REC-0x6121-JJ", "patient": "Jiya Jaiswal", "abha": "91-5519-3820-9104", "hash": "7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f", "cid": "QmJiyaPolysomnographyRestorativeSleepDigest2026", "type": "Polysomnography & Circadian Restorative Sleep Profile", "timestamp": "2026-08-26 07:15 UTC", "facility": "Apple Watch 9 Biometric Synapse Stream", "verified": true}]$$::jsonb
);
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid, record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x6120-JJ', 'jiya_jaiswal_verified_abha', 'Jiya Jaiswal', '91-5519-3820-9104',
    '2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e', 'QmJiyaPulmonaryOxygenationDiffusionReport2026', 'Pulmonary Oxygenation & Diaphragmatic Excursion Report', '2026-08-23 10:30 UTC', 'Jaypee Hospital Pulmonology Node', TRUE
);
INSERT INTO blockchain_records (
    id, profile_id, patient_name, abha_number, tx_hash, cid, record_type, timestamp_raw, facility, verified
) VALUES (
    'REC-0x6121-JJ', 'jiya_jaiswal_verified_abha', 'Jiya Jaiswal', '91-5519-3820-9104',
    '7e6d5c4b3a2f1e0d9c8b7a3e9c1f8d4b2e6a5c0f9e8d7c6b5a4f3e2d1c0b9a8f', 'QmJiyaPolysomnographyRestorativeSleepDigest2026', 'Polysomnography & Circadian Restorative Sleep Profile', '2026-08-26 07:15 UTC', 'Apple Watch 9 Biometric Synapse Stream', TRUE
);
COMMIT;
