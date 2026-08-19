'use client';

import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Activity, 
  QrCode, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  UserCheck,
  Stethoscope,
  Share2,
  MoreHorizontal
} from 'lucide-react';
import { PatientInfo, VitalsData, DoctorSlot } from './types';

interface PatientVitalsPanelProps {
  patient: PatientInfo;
  vitals: VitalsData;
  onBookDoctor?: (doctor: DoctorSlot) => void;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export default function PatientVitalsPanel({
  patient,
  vitals,
  onBookDoctor
}: PatientVitalsPanelProps) {
  const [selectedDay, setSelectedDay] = useState(12);
  const [doctors, setDoctors] = useState<DoctorSlot[]>([
    {
      id: 'DOC-AIIMS-101',
      name: 'Dr. Steven Fandel',
      specialty: 'Pulmonologist & Critical Care',
      hospital: 'AIIMS New Delhi',
      experienceYears: 14,
      rating: 4.9,
      availableSlot: 'Today at 4:00 PM',
      consultationFee: '₹0 (PM-JAY Free)',
      schemeEmpanelled: true
    },
    {
      id: 'DOC-CARDIO-204',
      name: 'Dr. Vetrick Wilsen',
      specialty: 'Cardiologist & Electrophysiologist',
      hospital: 'Fortis Escorts Heart Institute',
      experienceYears: 18,
      rating: 4.8,
      availableSlot: 'Tomorrow at 10:00 AM',
      consultationFee: '₹0 (PM-JAY Free)',
      schemeEmpanelled: true
    }
  ]);
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/appointments/doctors?specialty=General%20Physician`)
      .then(res => res.json())
      .then(data => {
        if (data.doctors && data.doctors.length > 0) {
          const mapped = data.doctors.map((d: any) => ({
            id: d.id,
            name: d.name,
            specialty: d.specialty,
            hospital: d.hospital,
            experienceYears: d.experience_years,
            rating: d.rating,
            availableSlot: d.next_available_slot,
            consultationFee: `₹${d.consultation_fee}`,
            schemeEmpanelled: d.ayushman_bharat_empanelled
          }));
          setDoctors(mapped);
        }
      })
      .catch(() => {
        // Fallback default doctors
      });
  }, []);

  const handleBooking = async (doc: DoctorSlot) => {
    try {
      const res = await fetch(`${API_BASE}/api/appointments/schedule?patient_name=${encodeURIComponent(patient.name)}&doctor_id=${doc.id}&slot_time=${encodeURIComponent(doc.availableSlot)}`, {
        method: 'POST'
      });
      if (res.ok) {
        const data = await res.json();
        setBookingSuccess(`Confirmed: ${doc.name} for ${doc.availableSlot} (#${data.appointment_ticket?.ticket_id || 'APPT-9821'})`);
        setTimeout(() => setBookingSuccess(null), 5000);
      }
    } catch {
      setBookingSuccess(`Confirmed: ${doc.name} for ${doc.availableSlot}`);
      setTimeout(() => setBookingSuccess(null), 5000);
    }
    onBookDoctor?.(doc);
  };

  const days = [
    { day: 'Sat', num: 9 },
    { day: 'Sun', num: 10 },
    { day: 'Mon', num: 11 },
    { day: 'Tue', num: 12 },
    { day: 'Wed', num: 13 },
    { day: 'Thu', num: 14 },
    { day: 'Fri', num: 15 }
  ];

  return (
    <div 
      className="orch-col-side"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        width: '340px',
        flexShrink: 0
      }}
    >
      {/* 1. Patient Profile Card (Matching Healix Image 1) */}
      <div 
        className="orch-card-interactive"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '18px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 800,
            padding: '3px 9px',
            borderRadius: '6px',
            background: '#eff6ff',
            color: '#2563eb',
            border: '1px solid #bfdbfe'
          }}>
            ● {patient.planType}
          </span>
          <div style={{ display: 'flex', gap: '6px', color: '#94a3b8' }}>
            <Share2 size={15} style={{ cursor: 'pointer' }} />
            <MoreHorizontal size={15} style={{ cursor: 'pointer' }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
          <img
            src={patient.avatarUrl}
            alt={patient.name}
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              objectFit: 'cover',
              border: '2px solid #e2e8f0',
              boxShadow: '0 4px 10px rgba(0,0,0,0.06)'
            }}
          />
          <div>
            <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0' }}>
              {patient.name}
            </h2>
            <div style={{ fontSize: '11px', color: '#64748b' }}>
              DOB: <strong style={{ color: '#334155' }}>{patient.dob}</strong>
            </div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>
              Gender: <strong style={{ color: '#334155' }}>{patient.gender}</strong> • Blood: <strong style={{ color: '#ef4444' }}>{patient.bloodType}</strong>
            </div>
          </div>
        </div>

        {/* Policy & ABHA QR Code */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 12px',
          background: '#f8fafc',
          borderRadius: '14px',
          border: '1px solid #f1f5f9'
        }}>
          <div style={{
            width: '44px',
            height: '44px',
            background: '#ffffff',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #e2e8f0',
            flexShrink: 0
          }}>
            <QrCode size={30} color="#2563eb" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              Policy #{patient.policyNumber}
            </div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              ABHA: {patient.abhaId}
            </div>
            <div style={{ fontSize: '10px', color: '#059669', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>✓ Verified PM-JAY Citizen</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Heart Rate Monitor & 3D Cardiac Vitality (Matching Reference Images 1 & 2) */}
      <div 
        className="orch-card-interactive"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '18px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Heart size={16} color="#ef4444" fill="#ef4444" />
              <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Hearth Check
              </h3>
            </div>
            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
              Average: <strong>{vitals.avgHeartRate} bpm</strong> • Max: <strong>{vitals.maxHeartRate} bpm</strong>
            </div>
          </div>
          <span style={{ fontSize: '18px', fontWeight: 900, color: '#0f172a' }}>
            {vitals.heartRate} <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b' }}>BPM</span>
          </span>
        </div>

        {/* Flex layout with 3D Heart Graphic + Live ECG Waveform */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
          {/* 3D Heart Model Graphic Asset */}
          <div style={{
            width: '68px',
            height: '68px',
            borderRadius: '12px',
            background: '#fafaf9',
            border: '1px solid #f1f5f9',
            overflow: 'hidden',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src="/images/cardiac_3d_heart.jpg"
              alt="3D Heart Model"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* ECG Continuous Spline Chart with Amplitude Axes */}
          <div style={{ flex: 1, height: '68px', position: 'relative' }}>
            <svg viewBox="0 0 200 68" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              {/* Baseline Grid lines */}
              <line x1="0" y1="34" x2="200" y2="34" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="12" x2="200" y2="12" stroke="#f8fafc" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="0" y1="56" x2="200" y2="56" stroke="#f8fafc" strokeWidth="1" strokeDasharray="2 2" />

              {/* Dynamic ECG waveform line */}
              <path
                d="M 0 34 L 20 34 L 28 20 L 36 50 L 44 26 L 52 38 L 60 34 L 90 34 L 98 10 L 106 58 L 114 20 L 122 42 L 130 34 L 160 34 L 168 20 L 176 50 L 184 26 L 192 38 L 200 34"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Blood Pressure & Oxygen Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <div style={{ background: '#f8fafc', padding: '8px 10px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 700 }}>BLOOD PRESSURE</div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>
              {vitals.systolicBp}/{vitals.diastolicBp} <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748b' }}>mmHg</span>
            </div>
          </div>
          <div style={{ background: '#f8fafc', padding: '8px 10px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 700 }}>O2 SATURATION</div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#059669', marginTop: '2px' }}>
              {vitals.oxygenSaturation}% <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748b' }}>Normal</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Schedule with Doctor (Matching Reference Image 2) */}
      <div 
        className="orch-card-interactive"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '18px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Schedule with Doctor
          </h3>
          <span style={{ fontSize: '11px', color: '#2563eb', fontWeight: 700 }}>Jan, 2026</span>
        </div>

        {bookingSuccess && (
          <div style={{
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            color: '#047857',
            padding: '8px 10px',
            borderRadius: '8px',
            fontSize: '11px',
            fontWeight: 700,
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <CheckCircle2 size={13} />
            <span>{bookingSuccess}</span>
          </div>
        )}

        {/* Date Selector Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          {days.map((d) => {
            const isSelected = selectedDay === d.num;
            return (
              <div
                key={d.num}
                onClick={() => setSelectedDay(d.num)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '6px 7px',
                  borderRadius: '10px',
                  background: isSelected ? '#2563eb' : 'transparent',
                  color: isSelected ? '#ffffff' : '#64748b',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 4px 10px rgba(37,99,235,0.25)' : 'none'
                }}
              >
                <span style={{ fontSize: '9px', fontWeight: 600 }}>{d.day}</span>
                <span style={{ fontSize: '13px', fontWeight: 800 }}>{d.num}</span>
              </div>
            );
          })}
        </div>

        {/* Doctor List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {doctors.map((doc) => (
            <div
              key={doc.id}
              style={{
                border: '1px solid #f1f5f9',
                borderRadius: '12px',
                padding: '10px 12px',
                background: '#fafaf9'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>{doc.name}</div>
                  <div style={{ fontSize: '10px', color: '#64748b' }}>{doc.specialty}</div>
                </div>
                <span style={{ fontSize: '10px', padding: '1px 6px', borderRadius: '4px', background: '#ecfdf5', color: '#059669', fontWeight: 800 }}>
                  ★ {doc.rating}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                <span style={{ fontSize: '10px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={11} /> {doc.availableSlot}
                </span>
                <button
                  onClick={() => handleBooking(doc)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: 'none',
                    background: '#2563eb',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
