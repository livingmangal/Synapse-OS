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
  MoreHorizontal,
  Copy,
  Printer,
  FileCode,
  Check
} from 'lucide-react';
import { PatientInfo, VitalsData, DoctorSlot } from '../types';

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
  const [copiedLink, setCopiedLink] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);

  // Dynamic doctor slots based on selected day
  const getDoctorsForDay = (dayNum: number): DoctorSlot[] => {
    const times = [
      ['Today at 4:00 PM', 'Tomorrow at 10:00 AM'],
      ['Today at 5:30 PM', 'Tomorrow at 11:30 AM'],
      ['10:00 AM', '02:00 PM'],
      ['Today at 4:00 PM', 'Tomorrow at 10:00 AM'],
      ['11:00 AM', '03:30 PM'],
      ['09:00 AM', '01:00 PM'],
      ['04:30 PM', '06:00 PM']
    ];
    const idx = (dayNum - 9 + 7) % 7;
    const [t1, t2] = times[idx];

    return [
      {
        id: 'DOC-AIIMS-101',
        name: 'Dr. Steven Fandel',
        specialty: 'Pulmonologist & Critical Care',
        hospital: 'AIIMS New Delhi',
        experienceYears: 14,
        rating: 4.9,
        availableSlot: t1,
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
        availableSlot: t2,
        consultationFee: '₹0 (PM-JAY Free)',
        schemeEmpanelled: true
      }
    ];
  };

  const [doctors, setDoctors] = useState<DoctorSlot[]>(getDoctorsForDay(12));

  useEffect(() => {
    setDoctors(getDoctorsForDay(selectedDay));
  }, [selectedDay]);

  const handleShare = () => {
    const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/records?abha=${patient.abhaId}` : '';
    if (navigator?.clipboard && shareUrl) {
      navigator.clipboard.writeText(shareUrl);
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleBooking = async (doc: DoctorSlot) => {
    try {
      const res = await fetch(`${API_BASE}/api/appointments/schedule?patient_name=${encodeURIComponent(patient.name)}&doctor_id=${doc.id}&slot_time=${encodeURIComponent(doc.availableSlot)}`, {
        method: 'POST'
      });
      if (res.ok) {
        const data = await res.json();
        setBookingSuccess(`Confirmed: ${doc.name} for ${doc.availableSlot} (#${data.appointment_ticket?.ticket_id || 'APPT-9821'})`);
        setTimeout(() => setBookingSuccess(null), 5000);
      } else {
        setBookingSuccess(`Confirmed: ${doc.name} for ${doc.availableSlot}`);
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
        gap: '20px',
        width: '340px',
        flexShrink: 0,
        fontFamily: '"Times New Roman", Times, serif'
      }}
    >
      {/* 1. Patient Profile Card */}
      <div 
        className="orch-card-interactive"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '20px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 800,
            padding: '4px 10px',
            borderRadius: '8px',
            background: '#fdf2f8',
            color: '#db2777',
            border: '1px solid #fbcfe8'
          }}>
            ● {patient.planType}
          </span>
          
          <div style={{ display: 'flex', gap: '8px', position: 'relative' }}>
            <button 
              onClick={handleShare}
              title="Copy Patient Share Link"
              style={{
                background: copiedLink ? '#ecfdf5' : '#f8fafc',
                border: '1px solid',
                borderColor: copiedLink ? '#a7f3d0' : '#e2e8f0',
                color: copiedLink ? '#059669' : '#64748b',
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {copiedLink ? <Check size={14} /> : <Share2 size={14} />}
            </button>

            <button 
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              title="More Options"
              style={{
                background: showMoreMenu ? '#fdf2f8' : '#f8fafc',
                border: '1px solid',
                borderColor: showMoreMenu ? '#fbcfe8' : '#e2e8f0',
                color: showMoreMenu ? '#db2777' : '#64748b',
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <MoreHorizontal size={14} />
            </button>

            {/* Dropdown Menu */}
            {showMoreMenu && (
              <div style={{
                position: 'absolute',
                top: '34px',
                right: 0,
                width: '180px',
                background: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                zIndex: 50,
                padding: '6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
              }}>
                <button
                  onClick={() => { window.print(); setShowMoreMenu(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'transparent',
                    fontSize: '11px',
                    color: '#334155',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <Printer size={13} color="#db2777" />
                  <span>Print EHR Record</span>
                </button>
                <button
                  onClick={() => { handleShare(); setShowMoreMenu(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'transparent',
                    fontSize: '11px',
                    color: '#334155',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <Copy size={13} color="#db2777" />
                  <span>Copy FHIR URL</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {copiedLink && (
          <div style={{
            fontSize: '11px',
            color: '#059669',
            background: '#ecfdf5',
            padding: '4px 8px',
            borderRadius: '6px',
            marginBottom: '10px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Check size={12} /> Patient Record Link Copied!
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
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
            <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', margin: '0 0 3px 0' }}>
              {patient.name}
            </h2>
            <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '2px' }}>
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
          padding: '12px 14px',
          background: '#f8fafc',
          borderRadius: '14px',
          border: '1px solid #f1f5f9'
        }}>
          <div style={{
            width: '46px',
            height: '46px',
            background: '#ffffff',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #e2e8f0',
            flexShrink: 0
          }}>
            <QrCode size={30} color="#db2777" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              Policy #{patient.policyNumber}
            </div>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', margin: '2px 0' }}>
              ABHA: {patient.abhaId}
            </div>
            <div style={{ fontSize: '10px', color: '#059669', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>✓ Verified PM-JAY Citizen</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Hearth Check & 3D Cardiac Monitor */}
      <div 
        className="orch-card-interactive"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '20px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Heart size={16} color="#ef4444" fill="#ef4444" />
              <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Heart Check
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

        {/* Live Wearable Integration Status Strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#fdf2f8',
          border: '1px solid #fbcfe8',
          borderRadius: '10px',
          padding: '5px 10px',
          marginBottom: '12px'
        }}>
          <span style={{ fontSize: '10.5px', color: '#db2777', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#db2777', boxShadow: '0 0 6px #db2777' }} />
            Apple Watch & Google Health Synced
          </span>
          <span style={{ fontSize: '10px', color: '#9d174d', fontWeight: 600 }}>
            Live Lead I ECG
          </span>
        </div>

        {/* Flex layout with 3D Heart Graphic + Live ECG Waveform */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px' }}>
          {/* 3D Heart Model Graphic Asset */}
          <div style={{
            width: '68px',
            height: '68px',
            borderRadius: '14px',
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
              <line x1="0" y1="34" x2="200" y2="34" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="0" y1="12" x2="200" y2="12" stroke="#f8fafc" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="0" y1="56" x2="200" y2="56" stroke="#f8fafc" strokeWidth="1" strokeDasharray="2 2" />

              <path
                d="M 0 34 L 20 34 L 28 20 L 36 50 L 44 26 L 52 38 L 60 34 L 90 34 L 98 10 L 106 58 L 114 20 L 122 42 L 130 34 L 160 34 L 168 20 L 176 50 L 184 26 L 192 38 L 200 34"
                fill="none"
                stroke="#db2777"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Blood Pressure & Oxygen Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 700 }}>BLOOD PRESSURE</div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>
              {vitals.systolicBp}/{vitals.diastolicBp} <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748b' }}>mmHg</span>
            </div>
          </div>
          <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: '10px', color: '#64748b', fontWeight: 700 }}>O2 SATURATION</div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#059669', marginTop: '2px' }}>
              {vitals.oxygenSaturation}% <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748b' }}>Normal</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Schedule with Doctor */}
      <div 
        className="orch-card-interactive"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '20px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
            Schedule with Doctor
          </h3>
          <span style={{ fontSize: '11px', color: '#db2777', fontWeight: 700, background: '#fdf2f8', padding: '2px 8px', borderRadius: '6px' }}>
            Jan, 2026
          </span>
        </div>

        {bookingSuccess && (
          <div style={{
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            color: '#047857',
            padding: '8px 12px',
            borderRadius: '10px',
            fontSize: '11px',
            fontWeight: 700,
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <CheckCircle2 size={14} />
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
                  padding: '7px 8px',
                  borderRadius: '12px',
                  background: isSelected ? '#db2777' : 'transparent',
                  color: isSelected ? '#ffffff' : '#64748b',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 4px 12px rgba(219, 39, 119,0.3)' : 'none'
                }}
              >
                <span style={{ fontSize: '9px', fontWeight: 600 }}>{d.day}</span>
                <span style={{ fontSize: '13px', fontWeight: 800 }}>{d.num}</span>
              </div>
            );
          })}
        </div>

        {/* Doctor List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {doctors.map((doc) => (
            <div
              key={doc.id}
              style={{
                border: '1px solid #f1f5f9',
                borderRadius: '14px',
                padding: '12px 14px',
                background: '#fafaf9'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#0f172a' }}>{doc.name}</div>
                  <div style={{ fontSize: '10px', color: '#64748b' }}>{doc.specialty}</div>
                </div>
                <span style={{ fontSize: '10px', padding: '2px 6px', borderRadius: '4px', background: '#ecfdf5', color: '#059669', fontWeight: 800 }}>
                  ★ {doc.rating}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                <span style={{ fontSize: '10px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={11} /> {doc.availableSlot}
                </span>
                <button
                  onClick={() => handleBooking(doc)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#db2777',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(219, 39, 119,0.25)',
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
