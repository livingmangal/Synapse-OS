'use client';

import React, { useState, useEffect } from 'react';
import { ShieldAlert, AlertTriangle, Send, CheckCircle2, Phone, MapPin, Activity, Radio, Users, Sparkles, MessageSquare, Lock, ShieldCheck, Info, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { MOCK_HEALTH_PROFILES, MockHealthProfile, mausamKarProfile } from '@/data/mockHealthProfiles';

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
  const [showAdminNoticeModal, setShowAdminNoticeModal] = useState<boolean>(false);

  // Active Profile & Admin Verification State
  const [activeProfileId, setActiveProfileId] = useState<string>('mausam_kar_verified_abha');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('synapseos_selected_profile_id');
        if (stored) {
          setActiveProfileId(stored);
        }
      } catch (err) {
        // localStorage not available
      }

      const handleProfileChange = (e: any) => {
        if (e.detail?.profileId) {
          setActiveProfileId(e.detail.profileId);
          setBroadcastResult(null);
        }
      };

      window.addEventListener('synapseos-profile-switch', handleProfileChange);
      return () => window.removeEventListener('synapseos-profile-switch', handleProfileChange);
    }
  }, []);

  const activeProfile = MOCK_HEALTH_PROFILES.find(p => p.profileId === activeProfileId) || mausamKarProfile;
  // Admin is strictly Mausam Kar (or profile where isAdmin is true)
  const isAdmin = activeProfile.isAdmin === true || activeProfile.profileId === 'mausam_kar_verified_abha';

  const activeDistrict = DISTRICT_DATABASE.find(d => d.id === selectedDistrictId) || DISTRICT_DATABASE[0];

  const handleBroadcastAlert = () => {
    if (!isAdmin) {
      setShowAdminNoticeModal(true);
      return;
    }

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
        authorizedAdmin: activeProfile.patient.name,
        status: 'DELIVERED_TO_COMMUNITY_ASHA_NETWORK'
      });
    }, 1000);
  };

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '24px',
      border: '1.5px solid #bae6fd',
      padding: '26px 30px',
      boxShadow: '0 8px 32px rgba(2, 132, 199, 0.05), 0 2px 8px rgba(219, 39, 119, 0.03)',
      display: 'flex',
      flexDirection: 'column',
      gap: '22px'
    }}>
      
      {/* Header Banner */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        borderBottom: '1px solid #f1f5f9',
        paddingBottom: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #e0f2fe 0%, #fce7f3 100%)',
            border: '1.5px solid #bae6fd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0284c7',
            boxShadow: '0 2px 10px rgba(2, 132, 199, 0.12)'
          }}>
            <Radio size={22} color="#0284c7" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0, fontSize: '19px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.01em' }}>
                {t('idsp_outbreak_title', 'Real-Time District Outbreak Early Warning & Push Alert System')}
              </h3>
              <span style={{
                fontSize: '10px',
                fontWeight: 800,
                padding: '3px 9px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #fce7f3 0%, #fdf2f8 100%)',
                color: '#db2777',
                border: '1px solid #fbcfe8',
                textTransform: 'uppercase',
                letterSpacing: '0.04em'
              }}>
                NCDC / IDSP Live Feed
              </span>
            </div>
            <span style={{ fontSize: '12.5px', color: '#475569', fontWeight: 500, marginTop: '3px', display: 'block' }}>
              Integrated Disease Surveillance Programme (MoHFW) • Proactive Community WhatsApp & SMS Advisories
            </span>
          </div>
        </div>

        {/* 1-Click Broadcast Button (Role-Based Admin Gated) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {isAdmin ? (
            <button
              onClick={handleBroadcastAlert}
              disabled={isBroadcasting}
              style={{
                padding: '11px 22px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0284c7 0%, #db2777 100%)',
                color: '#ffffff',
                border: 'none',
                fontWeight: 800,
                fontSize: '13px',
                cursor: isBroadcasting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 18px rgba(219, 39, 119, 0.28)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                opacity: isBroadcasting ? 0.8 : 1
              }}
            >
              <Send size={15} />
              <span>{isBroadcasting ? 'Broadcasting Push Advisory...' : `Broadcast Outbreak Alert (${activeDistrict.district.split(' ')[0]})`}</span>
              <span style={{
                fontSize: '9.5px',
                fontWeight: 900,
                background: 'rgba(255, 255, 255, 0.25)',
                padding: '2px 6px',
                borderRadius: '4px',
                letterSpacing: '0.04em'
              }}>
                ADMIN
              </span>
            </button>
          ) : (
            <button
              onClick={handleBroadcastAlert}
              style={{
                padding: '10px 18px',
                borderRadius: '12px',
                background: '#f8fafc',
                color: '#64748b',
                border: '1px solid #e2e8f0',
                fontWeight: 700,
                fontSize: '12.5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.15s ease'
              }}
              title="Broadcast functionality is restricted to Admin (Mausam Kar)"
            >
              <Lock size={14} color="#94a3b8" />
              <span>Broadcast Outbreak Alert</span>
              <span style={{
                fontSize: '9.5px',
                fontWeight: 800,
                background: '#f1f5f9',
                border: '1px solid #cbd5e1',
                color: '#64748b',
                padding: '2px 7px',
                borderRadius: '4px'
              }}>
                Admin Access Required
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Non-Admin Security Notice Banner (When viewing as Rachit or non-admin) */}
      {!isAdmin && (
        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #fdf2f8 100%)',
          borderRadius: '14px',
          border: '1px solid #bae6fd',
          padding: '10px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Info size={16} color="#0284c7" />
            <span style={{ fontSize: '12px', color: '#334155', fontWeight: 600 }}>
              Viewing in Read-Only Telemetry Mode as <b>{activeProfile.patient.name}</b> ({activeProfile.role || 'Patient Profile'}).
            </span>
          </div>
          <span style={{ fontSize: '11px', color: '#db2777', fontWeight: 700 }}>
            🔒 Public 2G SMS/WhatsApp broadcasting restricted to Admin (Mausam Kar)
          </span>
        </div>
      )}

      {/* District Pill Selector */}
      <div 
        onWheel={(e) => {
          if (e.deltaY) {
            e.currentTarget.scrollLeft += e.deltaY * 0.8;
          }
        }}
        style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}
      >
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
                padding: '9px 16px',
                borderRadius: '12px',
                background: isSelected ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' : '#ffffff',
                color: isSelected ? '#ffffff' : '#334155',
                border: isSelected ? '1px solid #0284c7' : '1px solid #e2e8f0',
                fontWeight: isSelected ? 800 : 600,
                fontSize: '12.5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                whiteSpace: 'nowrap',
                boxShadow: isSelected ? '0 4px 14px rgba(2, 132, 199, 0.25)' : '0 1px 3px rgba(0,0,0,0.02)',
                transition: 'all 0.15s ease'
              }}
            >
              <span>{d.district}</span>
              <span style={{
                fontSize: '9.5px',
                padding: '2px 7px',
                borderRadius: '999px',
                background: isSelected 
                  ? (isHigh ? 'rgba(219, 39, 119, 0.35)' : 'rgba(255, 255, 255, 0.25)')
                  : (isHigh ? '#fdf2f8' : '#f0f9ff'),
                color: isSelected ? '#ffffff' : (isHigh ? '#db2777' : '#0284c7'),
                border: isSelected 
                  ? '1px solid rgba(255,255,255,0.3)' 
                  : (isHigh ? '1px solid #fbcfe8' : '1px solid #bae6fd'),
                fontWeight: 800
              }}>
                {isHigh ? 'HIGH' : 'WATCH'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Outbreak Metrics Grid in Bluish & Pinkish Theme */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)',
          padding: '16px 18px',
          borderRadius: '16px',
          border: '1.2px solid #bae6fd',
          boxShadow: '0 2px 8px rgba(2, 132, 199, 0.04)'
        }}>
          <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
            Active Outbreak Pathogen
          </div>
          <div style={{ fontSize: '15.5px', fontWeight: 900, color: '#0f172a' }}>{activeDistrict.primaryOutbreak}</div>
          <div style={{ fontSize: '11.5px', color: '#0369a1', fontWeight: 600, marginTop: '2px' }}>Strain: {activeDistrict.pathogen}</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #fdf2f8 0%, #ffffff 100%)',
          padding: '16px 18px',
          borderRadius: '16px',
          border: '1.2px solid #fbcfe8',
          boxShadow: '0 2px 8px rgba(219, 39, 119, 0.04)'
        }}>
          <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
            Epidemiological Risk Status
          </div>
          <div style={{ fontSize: '15.5px', fontWeight: 900, color: '#be185d' }}>{activeDistrict.riskBadge}</div>
          <div style={{ fontSize: '11.5px', color: '#9d174d', fontWeight: 600, marginTop: '2px' }}>Velocity: {activeDistrict.velocityPct}</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)',
          padding: '16px 18px',
          borderRadius: '16px',
          border: '1.2px solid #bae6fd',
          boxShadow: '0 2px 8px rgba(2, 132, 199, 0.04)'
        }}>
          <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
            Weekly Active Cases
          </div>
          <div style={{ fontSize: '19px', fontWeight: 900, color: '#0f172a' }}>{activeDistrict.weeklyCases}</div>
          <div style={{ fontSize: '11.5px', color: '#475569', fontWeight: 500, marginTop: '2px' }}>{activeDistrict.hotspotsCount} Active Containment Clusters</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #fdf2f8 0%, #ffffff 100%)',
          padding: '16px 18px',
          borderRadius: '16px',
          border: '1.2px solid #fbcfe8',
          boxShadow: '0 2px 8px rgba(219, 39, 119, 0.04)'
        }}>
          <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
            District Helpline
          </div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#db2777' }}>{activeDistrict.helpline}</div>
          <div style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 500, marginTop: '2px' }}>National Toll-Free: 1075 / 112</div>
        </div>
      </div>

      {/* Directive & Hotspots Box in Luminous Bluish-Pinkish Gradient */}
      <div style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #fdf2f8 50%, #e0f2fe 100%)',
        borderRadius: '18px',
        border: '1.5px solid #bae6fd',
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        boxShadow: '0 2px 12px rgba(2, 132, 199, 0.04)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertTriangle size={18} color="#0284c7" />
          <span style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>
            Actionable Public Health Directive for {activeDistrict.district} ({activeDistrict.state}):
          </span>
        </div>
        <p style={{ margin: 0, fontSize: '13px', color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>
          {activeDistrict.preventiveAdvisory}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '2px' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#db2777', textTransform: 'uppercase', letterSpacing: '0.04em' }}>High-Surge Localities:</span>
          {activeDistrict.affectedZones.map((zone, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '11.5px',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid #fbcfe8',
                color: '#db2777',
                boxShadow: '0 2px 6px rgba(219, 39, 119, 0.08)'
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
          background: 'linear-gradient(135deg, #f0fdf4 0%, #fdf2f8 100%)',
          borderRadius: '16px',
          border: '1.5px solid #86efac',
          padding: '18px 22px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          boxShadow: '0 4px 16px rgba(22, 163, 74, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <CheckCircle2 size={22} color="#16a34a" />
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#14532d' }}>
                Outbreak Alert Successfully Broadcasted ({broadcastResult.dispatchedAt})
              </div>
              <div style={{ fontSize: '12px', color: '#166534', marginTop: '2px' }}>
                Dispatched by <b>{broadcastResult.authorizedAdmin}</b> (Admin) • Delivered to <b>{broadcastResult.totalRecipients}</b> registered community members & ASHA workers in {broadcastResult.district} via WhatsApp and 2G SMS.
              </div>
            </div>
          </div>
          <span style={{
            fontSize: '11px',
            fontWeight: 800,
            padding: '5px 12px',
            borderRadius: '8px',
            background: '#dcfce7',
            color: '#15803d',
            border: '1px solid #86efac'
          }}>
            ✓ Broadcast Confirmed
          </span>
        </div>
      )}

      {/* Admin Access Restriction Notice Modal */}
      {showAdminNoticeModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '1.5px solid #bae6fd',
            maxWidth: '500px',
            width: '100%',
            padding: '28px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            position: 'relative'
          }}>
            <button
              onClick={() => setShowAdminNoticeModal(false)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '8px',
                padding: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#64748b'
              }}
            >
              <X size={16} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #fce7f3 0%, #fdf2f8 100%)',
                border: '1.5px solid #fbcfe8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#db2777'
              }}>
                <Lock size={22} color="#db2777" />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '17px', fontWeight: 900, color: '#0f172a' }}>
                  Admin Authorization Required
                </h4>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  Access Restricted • National Epidemic Warning Protocol
                </span>
              </div>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '14px',
              border: '1px solid #e2e8f0',
              padding: '14px 16px',
              fontSize: '12.5px',
              color: '#334155',
              lineHeight: 1.6
            }}>
              Outbreak push-broadcasting to multi-channel 2G GSM SMS & WhatsApp community networks is privileged to prevent unauthorized or unintended public panic.
              <br /><br />
              <b>Current Active User:</b> {activeProfile.patient.name} ({activeProfile.patient.abhaId})<br />
              <b>Authorized Admin:</b> Mausam Kar (National IDSP Epidemiologist)
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={() => setShowAdminNoticeModal(false)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '12.5px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(2, 132, 199, 0.2)'
                }}
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
