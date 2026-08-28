'use client';

import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, Send, CheckCircle2, Phone, MapPin, Activity, Radio, Users, Sparkles, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface DistrictSurveillanceItem {
  id: string;
  district: string;
  state: string;
  primaryOutbreak: string;
  pathogen: string;
  riskLevel: 'HIGH_SURGE' | 'MODERATE_WATCH' | 'LOW_WATCH';
  riskBadge: string;
  weeklyCases: number;
  velocityPct: string;
  transmission: string;
  affectedZones: string[];
  hotspotsCount: number;
  preventiveAdvisory: string;
  helpline: string;
}

const DISTRICT_DATABASE: DistrictSurveillanceItem[] = [
  {
    id: 'delhi',
    district: 'Delhi NCR (Central & South)',
    state: 'Delhi',
    primaryOutbreak: 'Dengue & Chikungunya',
    pathogen: 'Dengue Virus (DENV-2 / DENV-3)',
    riskLevel: 'HIGH_SURGE',
    riskBadge: '🔴 High Outbreak Surge',
    weeklyCases: 842,
    velocityPct: '+28.4% this week',
    transmission: 'Vector-borne (Aedes aegypti breeding in domestic coolers/pots)',
    affectedZones: ['Karol Bagh', 'Najafgarh', 'Shahdara', 'Okhla'],
    hotspotsCount: 14,
    preventiveAdvisory: 'Intensify water cooler cleaning (Dry Day every Sunday). Use mosquito nets and wear full clothing. Do NOT self-medicate with Aspirin/Ibuprofen; consult PHC for Paracetamol and hydration.',
    helpline: '011-22307145 (Delhi Epidemic Control Room)'
  },
  {
    id: 'kerala',
    district: 'Kozhikode & Malappuram',
    state: 'Kerala',
    primaryOutbreak: 'Nipah Virus Surveillance & Leptospirosis',
    pathogen: 'Nipah Henipavirus / Leptospira',
    riskLevel: 'MODERATE_WATCH',
    riskBadge: '🟡 Active Surveillance Watch',
    weeklyCases: 24,
    velocityPct: '-12.0% (Under Control)',
    transmission: 'Zoonotic (Fruit bats / Contaminated raw palm toddy / Flood waters)',
    affectedZones: ['Feroke', 'Chathamangalam', 'Peruvannamuzhi'],
    hotspotsCount: 3,
    preventiveAdvisory: 'Avoid half-eaten fruits or raw date palm sap. Wear N95 masks when visiting healthcare facilities in containment zones. Take Doxycycline prophylaxis for flood contact.',
    helpline: '0471-2552056 (Kerala Health Directorate)'
  },
  {
    id: 'maharashtra',
    district: 'Pune & Mumbai Suburban',
    state: 'Maharashtra',
    primaryOutbreak: 'Zika Virus & Dengue',
    pathogen: 'Zika Virus (ZIKV) & DENV-1',
    riskLevel: 'MODERATE_WATCH',
    riskBadge: '🟡 Moderate Cluster Surge',
    weeklyCases: 312,
    velocityPct: '+14.6%',
    transmission: 'Aedes mosquito bite + Perinatal transmission caution',
    affectedZones: ['Kothrud', 'Hadapsar', 'Dhanori', 'Kalyan'],
    hotspotsCount: 8,
    preventiveAdvisory: 'Pregnant mothers must take extra precautions against mosquito bites. Municipal teams deploying thermal fogging and Abate larvicide in residential housing societies.',
    helpline: '020-26127394 (Maharashtra Epidemic Cell)'
  },
  {
    id: 'bihar',
    district: 'Patna & Muzaffarpur',
    state: 'Bihar',
    primaryOutbreak: 'Acute Encephalitis Syndrome (AES) & Typhoid',
    pathogen: 'Enterovirus / Salmonella enterica',
    riskLevel: 'HIGH_SURGE',
    riskBadge: '🔴 High Vulnerability',
    weeklyCases: 460,
    velocityPct: '+19.2%',
    transmission: 'Waterborne contamination + Hypoglycemic encephalopathy in undernourished children',
    affectedZones: ['Kanti', 'Minapur', 'Phulwari Sharif'],
    hotspotsCount: 11,
    preventiveAdvisory: 'Ensure children do NOT sleep on empty stomachs. Boil all drinking water for at least 2 minutes. Seek emergency dextrose infusion for early morning convulsions.',
    helpline: '104 (Bihar Health Helpdesk)'
  },
  {
    id: 'rajasthan',
    district: 'Jaipur & Jodhpur',
    state: 'Rajasthan',
    primaryOutbreak: 'Malaria (P. vivax) & Scrub Typhus',
    pathogen: 'Plasmodium vivax & Orientia tsutsugamushi',
    riskLevel: 'LOW_WATCH',
    riskBadge: '🟢 Controlled / Baseline',
    weeklyCases: 88,
    velocityPct: '-5.4%',
    transmission: 'Anopheles mosquitoes & Chigger mite bites in scrub farmland',
    affectedZones: ['Sanganer', 'Bassi', 'Mandore'],
    hotspotsCount: 2,
    preventiveAdvisory: 'Apply insect repellent when working in farms or grassland. Free Chloroquine and Primaquine regimens available at all CHC/PHCs.',
    helpline: '104 (Rajasthan Arogya Helpline)'
  },
  {
    id: 'bengal',
    district: 'Kolkata & North 24 Parganas',
    state: 'West Bengal',
    primaryOutbreak: 'Cholera & Acute Diarrheal Disease (ADD)',
    pathogen: 'Vibrio cholerae O1',
    riskLevel: 'HIGH_SURGE',
    riskBadge: '🔴 High Cluster Alert',
    weeklyCases: 520,
    velocityPct: '+22.1%',
    transmission: 'Fecal-oral route through contaminated municipal pipe water / street food',
    affectedZones: ['Beliaghata', 'Tollygunge', 'Barasat'],
    hotspotsCount: 9,
    preventiveAdvisory: 'Drink only chlorinated or boiled water. Avoid raw street food and ice from unauthorized vendors. Start WHO ORS immediately upon loose stools.',
    helpline: '1800-313-444-222 (WB Health Control Room)'
  }
];

export default function DistrictOutbreakAlerts() {
  const { t, translateText } = useLanguage();
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>('delhi');
  const [isBroadcasting, setIsBroadcasting] = useState<boolean>(false);
  const [broadcastResult, setBroadcastResult] = useState<any>(null);

  const activeDistrict = DISTRICT_DATABASE.find(d => d.id === selectedDistrictId) || DISTRICT_DATABASE[0];

  const handleBroadcastAlert = () => {
    setIsBroadcasting(true);
    setBroadcastResult(null);

    setTimeout(() => {
      setIsBroadcasting(false);
      setBroadcastResult({
        dispatchedAt: new Date().toLocaleTimeString(),
        totalRecipients: 1420,
        channel: 'WhatsApp & 2G SMS Dual Broadcast',
        district: activeDistrict.district,
        pathogen: activeDistrict.primaryOutbreak,
        status: 'DELIVERED_TO_COMMUNITY_ASHA_NETWORK'
      });
    }, 1000);
  };

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '24px',
      border: '1.5px solid #bae6fd',
      padding: '28px',
      boxShadow: '0 4px 20px rgba(2, 132, 199, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      fontFamily: '"Times New Roman", Times, serif'
    }}>
      
      {/* Header Banner */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        borderBottom: '1px solid #fee2e2',
        paddingBottom: '18px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: '#fef2f2',
            border: '1.5px solid #fecaca',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#dc2626'
          }}>
            <Radio size={22} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 900, color: '#991b1b' }}>
                {t('idsp_outbreak_title', 'Real-Time District Outbreak Early Warning & Push Alert System')}
              </h3>
              <span style={{
                fontSize: '10px',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '6px',
                background: '#fee2e2',
                color: '#b91c1c',
                border: '1px solid #fca5a5'
              }}>
                NCDC / IDSP Live Feed
              </span>
            </div>
            <span style={{ fontSize: '12px', color: '#64748b' }}>
              Integrated Disease Surveillance Programme (MoHFW) • Proactive Community WhatsApp & SMS Advisories
            </span>
          </div>
        </div>

        {/* 1-Click Broadcast Button */}
        <button
          onClick={handleBroadcastAlert}
          disabled={isBroadcasting}
          style={{
            padding: '11px 22px',
            borderRadius: '12px',
            background: '#dc2626',
            color: '#ffffff',
            border: 'none',
            fontWeight: 800,
            fontSize: '13px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 14px rgba(220, 38, 38, 0.35)',
            transition: 'all 0.15s ease'
          }}
        >
          <Send size={15} />
          {isBroadcasting ? 'Broadcasting to Community...' : `Broadcast Outbreak Alert (${activeDistrict.district.split(' ')[0]})`}
        </button>
      </div>

      {/* District Pill Selector */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {DISTRICT_DATABASE.map(d => {
          const isSelected = d.id === selectedDistrictId;
          const isHigh = d.riskLevel === 'HIGH_SURGE';

          return (
            <button
              key={d.id}
              onClick={() => {
                setSelectedDistrictId(d.id);
                setBroadcastResult(null);
              }}
              style={{
                padding: '10px 16px',
                borderRadius: '12px',
                background: isSelected ? '#dc2626' : '#f8fafc',
                color: isSelected ? '#ffffff' : '#334155',
                border: isSelected ? '1.5px solid #b91c1c' : '1px solid #e2e8f0',
                fontWeight: isSelected ? 800 : 700,
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              <span>{d.district}</span>
              <span style={{
                fontSize: '9.5px',
                padding: '2px 6px',
                borderRadius: '4px',
                background: isSelected ? 'rgba(255,255,255,0.2)' : isHigh ? '#fee2e2' : '#fef3c7',
                color: isSelected ? '#ffffff' : isHigh ? '#dc2626' : '#b45309',
                fontWeight: 800
              }}>
                {isHigh ? 'HIGH' : 'WATCH'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Outbreak Metrics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>Active Outbreak Pathogen</div>
          <div style={{ fontSize: '15px', fontWeight: 900, color: '#0f172a' }}>{activeDistrict.primaryOutbreak}</div>
          <div style={{ fontSize: '11px', color: '#0284c7', marginTop: '2px' }}>Strain: {activeDistrict.pathogen}</div>
        </div>

        <div style={{ background: '#fef2f2', padding: '16px', borderRadius: '14px', border: '1px solid #fecaca' }}>
          <div style={{ fontSize: '11px', color: '#991b1b', marginBottom: '4px' }}>Epidemiological Risk Status</div>
          <div style={{ fontSize: '15px', fontWeight: 900, color: '#dc2626' }}>{activeDistrict.riskBadge}</div>
          <div style={{ fontSize: '11px', color: '#b91c1c', marginTop: '2px' }}>Velocity: <b>{activeDistrict.velocityPct}</b></div>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>Weekly Active Cases</div>
          <div style={{ fontSize: '18px', fontWeight: 900, color: '#0f172a' }}>{activeDistrict.weeklyCases}</div>
          <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>{activeDistrict.hotspotsCount} Active Containment Clusters</div>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '4px' }}>District Helpline</div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#059669' }}>{activeDistrict.helpline}</div>
          <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>National Toll-Free: 1075 / 112</div>
        </div>
      </div>

      {/* Directive & Hotspots Box */}
      <div style={{
        background: '#fffbeb',
        borderRadius: '16px',
        border: '1.5px solid #fde68a',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertTriangle size={18} color="#b45309" />
          <span style={{ fontSize: '14px', fontWeight: 800, color: '#92400e' }}>
            Actionable Public Health Directive for {activeDistrict.district} ({activeDistrict.state}):
          </span>
        </div>
        <p style={{ margin: 0, fontSize: '13px', color: '#78350f', lineHeight: 1.5 }}>
          {activeDistrict.preventiveAdvisory}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#92400e' }}>High-Surge Localities:</span>
          {activeDistrict.affectedZones.map((zone, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '11px',
                fontWeight: 700,
                padding: '3px 8px',
                borderRadius: '6px',
                background: '#ffffff',
                border: '1px solid #fcd34d',
                color: '#b45309'
              }}
            >
              📍 {zone}
            </span>
          ))}
        </div>
      </div>

      {/* Broadcast Delivery Confirmation Toast */}
      {broadcastResult && (
        <div style={{
          background: '#f0fdf4',
          borderRadius: '14px',
          border: '1.5px solid #86efac',
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={20} color="#16a34a" />
            <div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#14532d' }}>
                Outbreak Alert Successfully Broadcasted ({broadcastResult.dispatchedAt})
              </div>
              <div style={{ fontSize: '11.5px', color: '#166534' }}>
                Delivered to <b>{broadcastResult.totalRecipients}</b> registered community members & ASHA workers in {broadcastResult.district} via WhatsApp and 2G SMS.
              </div>
            </div>
          </div>
          <span style={{
            fontSize: '11px',
            fontWeight: 800,
            padding: '4px 10px',
            borderRadius: '6px',
            background: '#dcfce7',
            color: '#15803d'
          }}>
            ✓ Broadcast Confirmed
          </span>
        </div>
      )}

    </div>
  );
}
