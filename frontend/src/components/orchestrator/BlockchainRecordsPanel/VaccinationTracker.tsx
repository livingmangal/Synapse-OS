'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle, Clock, Calendar, Download, QrCode, Baby, Heart, Sparkles, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface VaccineItem {
  name: string;
  fullName: string;
  protectsAgainst: string;
  route: string;
  status: 'completed' | 'due_now' | 'upcoming';
  dueDate?: string;
  batch?: string;
}

interface Milestone {
  id: string;
  label: string;
  ageLabel: string;
  targetWeeks: number;
  vaccines: VaccineItem[];
}

const CHILD_MILESTONES: Milestone[] = [
  {
    id: 'birth',
    label: 'At Birth',
    ageLabel: 'Within 24 Hours of Birth',
    targetWeeks: 0,
    vaccines: [
      { name: 'BCG', fullName: 'Bacillus Calmette-Guérin', protectsAgainst: 'Severe Childhood Tuberculosis (TB Meningitis)', route: 'Intradermal (Left Arm)', status: 'completed', batch: 'BCG-2024-88A' },
      { name: 'OPV-0', fullName: 'Oral Polio Vaccine (Birth Dose)', protectsAgainst: 'Poliomyelitis Paralysis', route: 'Oral Drops (2 drops)', status: 'completed', batch: 'OPV-IND-401' },
      { name: 'Hep B-0', fullName: 'Hepatitis B Birth Dose', protectsAgainst: 'Perinatal Hepatitis B Liver Infection', route: 'Intramuscular (Thigh)', status: 'completed', batch: 'HEPB-992-B' }
    ]
  },
  {
    id: '6_weeks',
    label: '6 Weeks',
    ageLabel: '1.5 Months Old',
    targetWeeks: 6,
    vaccines: [
      { name: 'Pentavalent-1', fullName: 'DPT + Hep B + Hib (5-in-1)', protectsAgainst: 'Diphtheria, Pertussis, Tetanus, Hep B, Hib Pneumonia', route: 'Intramuscular (Left Thigh)', status: 'due_now', dueDate: 'Due This Week' },
      { name: 'Rotavirus-1', fullName: 'Rotavirus Vaccine (RVV)', protectsAgainst: 'Severe Childhood Rotaviral Diarrhea & Dehydration', route: 'Oral Drops (5 drops)', status: 'due_now', dueDate: 'Due This Week' },
      { name: 'fIPV-1', fullName: 'Fractional Inactivated Polio Vaccine', protectsAgainst: 'Poliomyelitis (Types 1, 2, 3)', route: 'Intradermal (Right Arm)', status: 'due_now', dueDate: 'Due This Week' },
      { name: 'PCV-1', fullName: 'Pneumococcal Conjugate Vaccine', protectsAgainst: 'Pneumococcal Pneumonia & Sepsis', route: 'Intramuscular (Right Thigh)', status: 'due_now', dueDate: 'Due This Week' }
    ]
  },
  {
    id: '10_weeks',
    label: '10 Weeks',
    ageLabel: '2.5 Months Old',
    targetWeeks: 10,
    vaccines: [
      { name: 'Pentavalent-2', fullName: 'DPT + Hep B + Hib (Dose 2)', protectsAgainst: '5 Core Childhood Infections Booster', route: 'Intramuscular (Left Thigh)', status: 'upcoming', dueDate: 'Projected: 4 weeks after Dose 1' },
      { name: 'Rotavirus-2', fullName: 'Rotavirus Vaccine (Dose 2)', protectsAgainst: 'Severe Diarrheal Protection', route: 'Oral Drops (5 drops)', status: 'upcoming', dueDate: 'Projected: 4 weeks after Dose 1' }
    ]
  },
  {
    id: '14_weeks',
    label: '14 Weeks',
    ageLabel: '3.5 Months Old',
    targetWeeks: 14,
    vaccines: [
      { name: 'Pentavalent-3', fullName: 'DPT + Hep B + Hib (Dose 3)', protectsAgainst: 'Primary 5-in-1 Course Completion', route: 'Intramuscular (Left Thigh)', status: 'upcoming', dueDate: 'Projected: 8 weeks after Dose 1' },
      { name: 'Rotavirus-3', fullName: 'Rotavirus Vaccine (Dose 3)', protectsAgainst: 'Rotaviral Gastroenteritis', route: 'Oral Drops (5 drops)', status: 'upcoming', dueDate: 'Projected: 8 weeks after Dose 1' },
      { name: 'fIPV-2', fullName: 'Fractional Inactivated Polio (Dose 2)', protectsAgainst: 'Polio Secondary Reinforcement', route: 'Intradermal (Right Arm)', status: 'upcoming', dueDate: 'Projected: 8 weeks after Dose 1' },
      { name: 'PCV-2', fullName: 'Pneumococcal Vaccine (Dose 2)', protectsAgainst: 'Pneumonia Prevention', route: 'Intramuscular (Right Thigh)', status: 'upcoming', dueDate: 'Projected: 8 weeks after Dose 1' }
    ]
  },
  {
    id: '9_12_months',
    label: '9-12 Months',
    ageLabel: '9 to 12 Months Old',
    targetWeeks: 40,
    vaccines: [
      { name: 'MR-1', fullName: 'Measles & Rubella Vaccine (Dose 1)', protectsAgainst: 'Measles & Congenital Rubella Syndrome', route: 'Subcutaneous (Right Arm)', status: 'upcoming', dueDate: 'At 9 Completed Months' },
      { name: 'PCV Booster', fullName: 'Pneumococcal Booster', protectsAgainst: 'Lifelong Pneumococcal Immunity', route: 'Intramuscular (Right Thigh)', status: 'upcoming', dueDate: 'At 9 Completed Months' },
      { name: 'JE-1', fullName: 'Japanese Encephalitis Vaccine (Dose 1)', protectsAgainst: 'Brain Fever in Endemic Districts', route: 'Subcutaneous (Left Arm)', status: 'upcoming', dueDate: 'At 9 Completed Months' },
      { name: 'Vitamin A-1', fullName: 'Vitamin A Supplementation (1 Lakh IU)', protectsAgainst: 'Night Blindness & Immunity', route: 'Oral Syrup (1 ml)', status: 'upcoming', dueDate: 'At 9 Completed Months' }
    ]
  },
  {
    id: '16_24_months',
    label: '16-24 Months',
    ageLabel: '1.5 to 2 Years Old',
    targetWeeks: 72,
    vaccines: [
      { name: 'MR-2', fullName: 'Measles & Rubella (Dose 2)', protectsAgainst: 'Measles & Rubella Secondary Shield', route: 'Subcutaneous (Right Arm)', status: 'upcoming', dueDate: 'At 16-24 Months' },
      { name: 'DPT Booster-1', fullName: 'DPT First Booster', protectsAgainst: 'Diphtheria, Pertussis, Tetanus Renewal', route: 'Intramuscular (Mid-Thigh)', status: 'upcoming', dueDate: 'At 16-24 Months' },
      { name: 'OPV Booster', fullName: 'Oral Polio Booster', protectsAgainst: 'Lifelong Polio Protection', route: 'Oral Drops (2 drops)', status: 'upcoming', dueDate: 'At 16-24 Months' }
    ]
  },
  {
    id: '5_16_years',
    label: '5 - 16 Years',
    ageLabel: 'School Age & Adolescence',
    targetWeeks: 260,
    vaccines: [
      { name: 'DPT Booster-2', fullName: 'DPT Second Booster (5-6 Years)', protectsAgainst: 'School-entry Diphtheria & Tetanus', route: 'Intramuscular (Upper Arm)', status: 'upcoming', dueDate: 'At 5-6 Years' },
      { name: 'Td (10 Yrs)', fullName: 'Tetanus & adult Diphtheria (10 Years)', protectsAgainst: 'Adolescent Tetanus', route: 'Intramuscular (Upper Arm)', status: 'upcoming', dueDate: 'At 10 Years' },
      { name: 'Td (16 Yrs)', fullName: 'Tetanus & adult Diphtheria (16 Years)', protectsAgainst: 'Adult Tetanus Booster', route: 'Intramuscular (Upper Arm)', status: 'upcoming', dueDate: 'At 16 Years' }
    ]
  }
];

const PREGNANCY_VACCINES: VaccineItem[] = [
  { name: 'Td-1', fullName: 'Tetanus & adult Diphtheria (Dose 1)', protectsAgainst: 'Maternal & Neonatal Tetanus Mortality', route: 'Intramuscular (Upper Arm)', status: 'due_now', dueDate: 'Early in First Trimester' },
  { name: 'Td-2', fullName: 'Tetanus & adult Diphtheria (Dose 2)', protectsAgainst: 'Complete Neonatal Tetanus Shield', route: 'Intramuscular (Upper Arm)', status: 'upcoming', dueDate: '4 Weeks after Td-1' },
  { name: 'Td Booster', fullName: 'Td Booster Dose', protectsAgainst: 'For mothers with 2 Td doses within last 3 years', route: 'Intramuscular (Upper Arm)', status: 'upcoming', dueDate: 'Single Dose in Current Pregnancy' }
];

export default function VaccinationTracker({ patientName = 'Aarav Sharma', abhaId = '91-7294-8102-5309' }: { patientName?: string; abhaId?: string }) {
  const { t, translateText } = useLanguage();
  const [category, setCategory] = useState<'child' | 'pregnant'>('child');
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>('6_weeks');
  const [customDob, setCustomDob] = useState<string>('2026-07-15');
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  const activeMilestone = CHILD_MILESTONES.find(m => m.id === selectedMilestoneId) || CHILD_MILESTONES[1];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontFamily: '"Times New Roman", Times, serif' }}>
      
      {/* Header Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
        borderRadius: '20px',
        padding: '24px',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        boxShadow: '0 8px 24px rgba(2, 132, 199, 0.2)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span style={{ fontSize: '20px' }}>💉</span>
            <h3 style={{ fontSize: '20px', fontWeight: 900, margin: 0 }}>
              {t('uip_title', 'Universal Immunization Programme (UIP) & U-WIN')}
            </h3>
            <span style={{
              fontSize: '10.5px',
              fontWeight: 800,
              padding: '3px 8px',
              borderRadius: '6px',
              background: 'rgba(255,255,255,0.2)',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.3)'
            }}>
              MoHFW Govt of India Standard
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.9)', maxWidth: '650px', lineHeight: 1.5 }}>
            {t('uip_desc', 'Dynamic age-milestone vaccine calculation, maternal immunization protocols, and digital U-WIN immunization certificate generation with QR validation.')}
          </p>
        </div>

        {/* Quick Action Badges */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setCategory('child')}
            style={{
              padding: '9px 16px',
              borderRadius: '10px',
              background: category === 'child' ? '#ffffff' : 'rgba(255,255,255,0.15)',
              color: category === 'child' ? '#0369a1' : '#ffffff',
              border: 'none',
              fontWeight: 800,
              fontSize: '12.5px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Baby size={15} /> Child UIP Schedule
          </button>
          <button
            onClick={() => setCategory('pregnant')}
            style={{
              padding: '9px 16px',
              borderRadius: '10px',
              background: category === 'pregnant' ? '#ffffff' : 'rgba(255,255,255,0.15)',
              color: category === 'pregnant' ? '#0369a1' : '#ffffff',
              border: 'none',
              fontWeight: 800,
              fontSize: '12.5px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Heart size={15} /> Maternal Td Schedule
          </button>
        </div>
      </div>

      {/* Child Mode Content */}
      {category === 'child' && (
        <>
          {/* Milestone Navigator Bar */}
          <div 
            onWheel={(e) => {
              if (e.deltaY) {
                e.currentTarget.scrollLeft += e.deltaY * 0.8;
              }
            }}
            style={{
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
              paddingBottom: '6px'
            }}
          >
            {CHILD_MILESTONES.map((m) => {
              const isSelected = m.id === selectedMilestoneId;
              const hasDue = m.vaccines.some(v => v.status === 'due_now');
              const isCompleted = m.vaccines.every(v => v.status === 'completed');

              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMilestoneId(m.id)}
                  style={{
                    padding: '10px 16px',
                    borderRadius: '12px',
                    background: isSelected ? '#0284c7' : '#f8fafc',
                    color: isSelected ? '#ffffff' : '#334155',
                    border: isSelected ? '1.5px solid #0369a1' : '1px solid #e2e8f0',
                    cursor: 'pointer',
                    fontWeight: isSelected ? 800 : 700,
                    fontSize: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '4px',
                    minWidth: '130px',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <span>{m.label}</span>
                    {isCompleted && <CheckCircle2 size={13} color={isSelected ? '#ffffff' : '#16a34a'} />}
                    {hasDue && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: isSelected ? '#ffffff' : '#ef4444' }} />}
                  </div>
                  <span style={{ fontSize: '10px', color: isSelected ? 'rgba(255,255,255,0.85)' : '#64748b' }}>
                    {m.vaccines.length} Vaccines
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Detail Box */}
          <div style={{
            background: '#ffffff',
            borderRadius: '18px',
            border: '1px solid #e2e8f0',
            padding: '24px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '17px', fontWeight: 900, color: '#0f172a' }}>
                  {activeMilestone.label} Milestone ({activeMilestone.ageLabel})
                </h4>
                <p style={{ margin: '4px 0 0 0', fontSize: '12.5px', color: '#64748b' }}>
                  {t('uip_free_notice', 'Free immunization available at all Anganwadi Centres, Primary Health Centres (PHC), & CHCs.')}
                </p>
              </div>

              <button
                onClick={() => setShowCertificate(!showCertificate)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  background: '#f0fdf4',
                  color: '#16a34a',
                  border: '1px solid #bbf7d0',
                  fontWeight: 800,
                  fontSize: '12px',
                  cursor: 'pointer'
                }}
              >
                <QrCode size={14} /> {showCertificate ? 'Hide U-WIN Card' : 'View U-WIN Digital Card'}
              </button>
            </div>

            {/* Vaccine Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
              {activeMilestone.vaccines.map((v, idx) => (
                <div
                  key={idx}
                  style={{
                    background: v.status === 'due_now' ? '#fffbeb' : v.status === 'completed' ? '#f0fdf4' : '#f8fafc',
                    borderRadius: '14px',
                    border: v.status === 'due_now' ? '1.5px solid #fde68a' : v.status === 'completed' ? '1px solid #bbf7d0' : '1px solid #e2e8f0',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <span style={{ fontSize: '15px', fontWeight: 900, color: '#0f172a' }}>{v.name}</span>
                      <span style={{
                        fontSize: '10px',
                        fontWeight: 800,
                        padding: '2px 7px',
                        borderRadius: '5px',
                        background: v.status === 'completed' ? '#dcfce7' : v.status === 'due_now' ? '#fef3c7' : '#e2e8f0',
                        color: v.status === 'completed' ? '#15803d' : v.status === 'due_now' ? '#b45309' : '#475569'
                      }}>
                        {v.status === 'completed' ? '✓ Completed' : v.status === 'due_now' ? '🚨 DUE NOW' : '⏳ Upcoming'}
                      </span>
                    </div>

                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#0284c7', marginBottom: '4px' }}>
                      {v.fullName}
                    </div>

                    <div style={{ fontSize: '11.5px', color: '#475569', lineHeight: 1.4 }}>
                      🛡️ <b>Protects against:</b> {v.protectsAgainst}
                    </div>
                  </div>

                  <div style={{
                    fontSize: '11px',
                    color: '#64748b',
                    borderTop: '1px dashed #cbd5e1',
                    paddingTop: '8px',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                    <span>📍 {v.route}</span>
                    {v.batch && <span>Batch: <b>{v.batch}</b></span>}
                    {v.dueDate && <span style={{ color: '#b45309', fontWeight: 700 }}>{v.dueDate}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Maternal Mode Content */}
      {category === 'pregnant' && (
        <div style={{
          background: '#ffffff',
          borderRadius: '18px',
          border: '1px solid #e2e8f0',
          padding: '24px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
        }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '17px', fontWeight: 900, color: '#0f172a' }}>
            Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) — Maternal Td Immunization
          </h4>
          <p style={{ margin: '0 0 20px 0', fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>
            Tetanus and adult Diphtheria (Td) toxoid is universally provided to all pregnant women in India to prevent Maternal and Neonatal Tetanus mortality.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
            {PREGNANCY_VACCINES.map((v, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fdf2f8',
                  borderRadius: '14px',
                  border: '1px solid #fbcfe8',
                  padding: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '16px', fontWeight: 900, color: '#9d174d' }}>{v.name}</span>
                  <span style={{ fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '6px', background: '#fce7f3', color: '#be185d' }}>
                    {v.dueDate}
                  </span>
                </div>
                <div style={{ fontSize: '12.5px', color: '#334155', lineHeight: 1.4 }}>
                  {v.fullName}
                </div>
                <div style={{ fontSize: '11.5px', color: '#475569' }}>
                  🛡️ <b>Indication:</b> {v.protectsAgainst}
                </div>
                <div style={{ fontSize: '11px', color: '#64748b', borderTop: '1px solid #fbcfe8', paddingTop: '6px' }}>
                  📍 Route: {v.route}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* U-WIN Verifiable Digital Card Modal/Box */}
      {showCertificate && (
        <div style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)',
          borderRadius: '20px',
          border: '2px solid #86efac',
          padding: '28px',
          boxShadow: '0 8px 30px rgba(22, 163, 74, 0.08)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', borderBottom: '1.5px dashed #86efac', paddingBottom: '16px', marginBottom: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <ShieldCheck size={22} color="#16a34a" />
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 900, color: '#14532d' }}>
                  U-WIN Official Digital Immunization Certificate
                </h3>
              </div>
              <span style={{ fontSize: '11.5px', color: '#166534' }}>
                Ministry of Health & Family Welfare (MoHFW), Government of India • ABHA Linked
              </span>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>Certificate ID: UWIN-2026-884920</div>
              <div style={{ fontSize: '11px', color: '#64748b' }}>Issued to: <b>{patientName}</b></div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
            <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
              <div style={{ fontSize: '11px', color: '#64748b' }}>Beneficiary ABHA ID</div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>{abhaId}</div>
            </div>
            <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
              <div style={{ fontSize: '11px', color: '#64748b' }}>Next Vaccine Due</div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#b45309' }}>Pentavalent-1 + RVV-1 (6 Weeks)</div>
            </div>
            <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
              <div style={{ fontSize: '11px', color: '#64748b' }}>Vaccination Facility</div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>AIIMS & Anganwadi Central Node</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              onClick={handlePrint}
              style={{
                padding: '10px 20px',
                borderRadius: '10px',
                background: '#16a34a',
                color: '#ffffff',
                border: 'none',
                fontWeight: 800,
                fontSize: '13px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(22, 163, 74, 0.25)'
              }}
            >
              <Download size={15} /> Download & Print U-WIN Immunization Card
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
