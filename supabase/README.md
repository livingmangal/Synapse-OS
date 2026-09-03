# Supabase Health Data Schema & Seeds

This directory contains the database migration and seed data for **Sanjeevni-OS / ABDM**.

## Files
- **`mock_health_data.sql`**: Complete, self-contained SQL script that:
  1. Creates all tables (`abha_registry`, `abha_profiles`, `patient_vitals`, `patient_conditions`, `blockchain_records`, `patient_appointments`).
  2. Creates high-performance indexes and views (`view_abdm_registry_citizens`, `view_citizen_clinical_overview`).
  3. Configures Row Level Security (RLS) public `SELECT` policies for Supabase client queries.
  4. Populates all mock health data from `frontend/public/data/mockHealthData/*.json` (6 citizen profiles, vitals, diagnostics, and blockchain audit trails).

## How to Run in Supabase
1. Open your Supabase Dashboard -> **SQL Editor**.
2. Click **+ New Query**.
3. Paste the contents of `mock_health_data.sql` and click **Run**.
