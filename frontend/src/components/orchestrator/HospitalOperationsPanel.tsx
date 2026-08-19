'use client';

import React from 'react';
import { 
  Users, 
  Bed, 
  DollarSign, 
  HeartHandshake, 
  Activity, 
  ChevronRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { HospitalMetrics } from './types';

export default function HospitalOperationsPanel() {
  const metrics: HospitalMetrics = {
    totalAdmitted: 859,
    malePatients: 529,
    femalePatients: 330,
    waiting: 89,
    discharge: 109,
    transfer: 16,
    activeStaff: 83,
    doctors: 38,
    nursing: 45,
    operationalCost: '$75,256',
    avgCostPerPatient: '$2k',
    patientSatisfactionRate: 76,
    satisfactionBreakdown: {
      excellent: 54,
      good: 23,
      average: 20,
      poor: 3
    },
    criticalPatients: {
      active: 118,
      recovered: 209,
      ventilatorsInUse: 21,
      ventilatorsTotal: 33
    },
    bedOccupancy: {
      occupied: 938,
      total: 1797,
      categories: [
        { label: 'Not Ready', count: 128, color: '#4ade80' },
        { label: 'Arrived', count: 35, color: '#6366f1' },
        { label: 'Open', count: 502, color: '#facc15' },
        { label: 'Admitted', count: 859, color: '#f87171' },
        { label: 'Hold', count: 11, color: '#38bdf8' },
        { label: 'Wait', count: 38, color: '#a3e635' },
        { label: 'Registered', count: 224, color: '#fb923c' }
      ]
    },
    admittedList: [
      { name: 'Edward Parker', age: 32, gender: 'M', id: '25698', room: 'ICU-11', doctor: 'Dr. ChrisGeller', nurse: 'Kip Andrews', division: 'Surgery', critical: true },
      { name: 'Maria Dorothy', age: 35, gender: 'F', id: '56965', room: 'Ge. Ward- 9', doctor: 'Dr. Dorene Thirlaway', nurse: 'Kevin Burrow', division: 'Gynecology', critical: false },
      { name: 'Alasteir Swinglehurst', age: 54, gender: 'M', id: '68956', room: 'Private A- 5', doctor: 'Dr. Elmo Canedo', nurse: 'Stacey Izzatt', division: 'Dermatology', critical: false },
      { name: 'Broddie Philpon', age: 29, gender: 'M', id: '10023', room: 'Covid- 10', doctor: 'Dr. Emilio Grabiec', nurse: 'Stefaniee Heamus', division: 'COVID-19', critical: true },
      { name: 'Edena Smorthwaite', age: 41, gender: 'F', id: '23056', room: 'Ge. Ward- 15', doctor: 'Dr. Lara Eagger', nurse: 'Toinette Antonsen', division: 'Neurology', critical: false }
    ]
  };

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '100%'
    }}>
      {/* 1. Top KPI Row (Matching Reference Image 4) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '18px'
      }}>
        
        {/* KPI 1: Admitted Patients */}
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
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
            Total Admitted Patients
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
            <span style={{ fontSize: '28px', fontWeight: 900, color: '#2563eb' }}>{metrics.totalAdmitted}</span>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#059669' }}>+2%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', marginTop: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
            <span>{metrics.malePatients} Male • {metrics.femalePatients} Female</span>
            <span>{metrics.waiting} Waiting • {metrics.discharge} Discharge</span>
          </div>
        </div>

        {/* KPI 2: Active Staff */}
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
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
            Total Active Staff
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
            <span style={{ fontSize: '28px', fontWeight: 900, color: '#0f172a' }}>{metrics.activeStaff}</span>
          </div>
          <div style={{ display: 'flex', gap: '14px', fontSize: '11px', color: '#64748b', marginTop: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
            <span><strong>{metrics.doctors}</strong> Doctors</span>
            <span><strong>{metrics.nursing}</strong> Nursing</span>
          </div>
        </div>

        {/* KPI 3: Operational Cost */}
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
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
            Operational Cost
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
            <span style={{ fontSize: '28px', fontWeight: 900, color: '#0f172a' }}>{metrics.operationalCost}</span>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#059669' }}>+5%</span>
          </div>
          <div style={{ fontSize: '11px', color: '#64748b', marginTop: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
            Avg cost per patient: <strong>{metrics.avgCostPerPatient}</strong>
          </div>
        </div>

        {/* KPI 4: Patient Satisfaction */}
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
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
            Patient Satisfaction Rate
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '6px' }}>
            <span style={{ fontSize: '28px', fontWeight: 900, color: '#059669' }}>{metrics.patientSatisfactionRate}%</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', fontSize: '10px', color: '#64748b', marginTop: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
            <span style={{ color: '#059669', fontWeight: 700 }}>Excellent {metrics.satisfactionBreakdown.excellent}%</span>
            <span style={{ color: '#f59e0b', fontWeight: 700 }}>Good {metrics.satisfactionBreakdown.good}%</span>
          </div>
        </div>

      </div>

      {/* 2. Recently Admitted Patients Table (Matching Image 4) */}
      <div 
        className="orch-card-interactive"
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '22px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Recently Admitted Patients
            </h3>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Live ER and Ward Admissions</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              ● Critical Flag
            </span>
            <span style={{ fontSize: '12px', color: '#2563eb', fontWeight: 700, cursor: 'pointer' }}>Details →</span>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #f1f5f9', color: '#64748b', textAlign: 'left' }}>
                <th style={{ padding: '8px 12px' }}>Patient Name</th>
                <th style={{ padding: '8px 12px' }}>Patient ID</th>
                <th style={{ padding: '8px 12px' }}>Ward-Room No.</th>
                <th style={{ padding: '8px 12px' }}>Assigned Doctor</th>
                <th style={{ padding: '8px 12px' }}>Assigned Nurse</th>
                <th style={{ padding: '8px 12px' }}>Division</th>
              </tr>
            </thead>
            <tbody>
              {metrics.admittedList.map((p, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f8fafc' }}>
                  <td style={{ padding: '12px', fontWeight: 700, color: '#0f172a' }}>{p.name}</td>
                  <td style={{ padding: '12px', color: '#64748b' }}>{p.id}</td>
                  <td style={{ padding: '12px', color: '#334155', fontWeight: 600 }}>{p.room}</td>
                  <td style={{ padding: '12px', color: '#2563eb', fontWeight: 600 }}>{p.doctor}</td>
                  <td style={{ padding: '12px', color: '#64748b' }}>{p.nurse}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{
                      padding: '2px 8px',
                      borderRadius: '6px',
                      fontSize: '10px',
                      fontWeight: 800,
                      background: p.critical ? '#fef2f2' : '#f1f5f9',
                      color: p.critical ? '#ef4444' : '#475569'
                    }}>
                      {p.division}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Bottom Row: Bed Occupancy & Critical Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px' }}>
        
        {/* Bed Occupancy Bar Breakdown */}
        <div 
          className="orch-card-interactive"
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: '22px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Bed Occupancy ({metrics.bedOccupancy.occupied}/{metrics.bedOccupancy.total})
            </h3>
            <span style={{ fontSize: '12px', color: '#2563eb', fontWeight: 700 }}>Details →</span>
          </div>

          <div style={{ height: '140px', position: 'relative' }}>
            <svg viewBox="0 0 320 140" style={{ width: '100%', height: '100%' }}>
              {metrics.bedOccupancy.categories.map((c, i) => {
                const height = (c.count / 859) * 90;
                const x = 20 + i * 42;
                const y = 110 - height;
                return (
                  <g key={i}>
                    <rect x={x} y={y} width="24" height={height} rx="4" fill={c.color} />
                    <text x={x + 12} y="125" fill="#64748b" fontSize="8" textAnchor="middle">{c.label.slice(0, 5)}</text>
                    <text x={x + 12} y={y - 3} fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">{c.count}</text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Critical Patient Status */}
        <div 
          className="orch-card-interactive"
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: '22px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>
              Critical Patient Management
            </h3>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: 'conic-gradient(#ef4444 0% 30%, #facc15 30% 83%, #e2e8f0 83% 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(239,68,68,0.2)'
              }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: 900,
                  color: '#0f172a'
                }}>
                  396
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ color: '#475569' }}>Active ICU: <strong>{metrics.criticalPatients.active} (30%)</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#facc15' }} />
                  <span style={{ color: '#475569' }}>Recovered: <strong>{metrics.criticalPatients.recovered} (53%)</strong></span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px' }}>
            <span>Ventilators in Use: <strong>{metrics.criticalPatients.ventilatorsInUse}/{metrics.criticalPatients.ventilatorsTotal}</strong></span>
            <span style={{ color: '#2563eb', fontWeight: 700 }}>Usage Rate →</span>
          </div>
        </div>

      </div>
    </div>
  );
}
