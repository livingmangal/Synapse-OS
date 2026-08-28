'use client';

import React, { useState } from 'react';
import { Smartphone, BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import OmnichannelGatewaySimulator from '../HealthSyncPanel/OmnichannelGatewaySimulator';
import RuralPreventiveHub from '../ClinicalConditionsPanel/RuralPreventiveHub';

export default function RuralHealthPanel() {
  const { t, translateText } = useLanguage();
  const [activeSubView, setActiveSubView] = useState<'all' | 'literacy' | 'omnichannel'>('all');

  return (
    <div style={{
      width: '100%',
      maxWidth: '1600px',
      margin: '0 auto',
      fontFamily: '"Times New Roman", Times, serif'
    }}>
      
      {/* Single Master Surface Container */}
      <div style={{
        background: '#ffffff',
        borderRadius: '24px',
        border: '1px solid #bae6fd',
        padding: '28px 32px',
        boxShadow: '0 4px 24px rgba(14, 165, 233, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>

        {/* 1. Header Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #fdf2f8 50%, #e0f2fe 100%)',
          borderRadius: '20px',
          padding: '22px 28px',
          border: '1px solid #bae6fd',
          color: '#0f172a',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #e0f2fe 0%, #fce7f3 100%)',
                border: '1.5px solid #bae6fd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(2, 132, 199, 0.12)'
              }}>
                <BookOpen size={18} color="#0284c7" />
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: 900, margin: 0, color: '#0f172a', letterSpacing: '-0.01em' }}>
                {t('rural_hub_title', 'Rural & Semi-Urban AI Healthcare Hub')}
              </h2>
              <span style={{
                fontSize: '10.5px',
                fontWeight: 800,
                padding: '2px 9px',
                borderRadius: '999px',
                background: '#fce7f3',
                border: '1px solid #fbcfe8',
                color: '#db2777'
              }}>
                {t('rural_badge', 'Ayushman Arogya • NHM • 2G Offline SMS')}
              </span>
            </div>

            <p style={{ margin: 0, fontSize: '13px', color: '#475569', maxWidth: '780px', lineHeight: 1.5 }}>
              {t('rural_hub_subtitle', 'Empowering rural and semi-urban populations with accessible healthcare education, symptom triage, vaccination milestones, and outbreak advisories via zero-data 2G GSM SMS, WhatsApp, and regional Indian languages.')}
            </p>
          </div>

          {/* View Filter Switcher */}
          <div style={{
            display: 'flex',
            gap: '4px',
            background: '#ffffff',
            padding: '3px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
          }}>
            {[
              { id: 'all', label: t('filter_all', 'All Modules') },
              { id: 'literacy', label: t('filter_literacy', '🌿 Health Literacy & Quiz') },
              { id: 'omnichannel', label: t('filter_omnichannel', '📱 WhatsApp & 2G SMS') }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSubView(tab.id as any)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '9px',
                  border: 'none',
                  background: activeSubView === tab.id ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' : 'transparent',
                  color: activeSubView === tab.id ? '#ffffff' : '#64748b',
                  fontWeight: 800,
                  fontSize: '11.5px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: activeSubView === tab.id ? '0 2px 6px rgba(2, 132, 199, 0.2)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Unified Key Metrics Ribbon */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          background: '#f8fafc',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          padding: '14px 20px',
          gap: '16px'
        }}>
          <div style={{ borderRight: '1px solid #e2e8f0', paddingRight: '14px' }}>
            <div style={{ fontSize: '10.5px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>
              {t('metric_target_accuracy', 'Target Accuracy')}
            </div>
            <div style={{ fontSize: '18px', fontWeight: 900, color: '#0284c7', marginTop: '2px' }}>
              91.4% <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 600 }}>({translateText('Req')}: ≥80%)</span>
            </div>
            <div style={{ fontSize: '10.5px', color: '#0369a1', marginTop: '1px' }}>
              {t('metric_accuracy_sub', '✓ BioBERT + AI Council Consensus')}
            </div>
          </div>

          <div style={{ borderRight: '1px solid #e2e8f0', paddingRight: '14px' }}>
            <div style={{ fontSize: '10.5px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>
              {t('metric_awareness_gain', 'Community Awareness Gain')}
            </div>
            <div style={{ fontSize: '18px', fontWeight: 900, color: '#db2777', marginTop: '2px' }}>
              +25.4% <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 600 }}>({translateText('Req')}: ≥20%)</span>
            </div>
            <div style={{ fontSize: '10.5px', color: '#be185d', marginTop: '1px' }}>
              {t('metric_awareness_sub', '✓ 5 Core NHM Education Modules')}
            </div>
          </div>

          <div style={{ borderRight: '1px solid #e2e8f0', paddingRight: '14px' }}>
            <div style={{ fontSize: '10.5px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>
              {t('metric_access_channels', 'Access Channels')}
            </div>
            <div style={{ fontSize: '18px', fontWeight: 900, color: '#0284c7', marginTop: '2px' }}>
              WhatsApp + 2G SMS
            </div>
            <div style={{ fontSize: '10.5px', color: '#0284c7', marginTop: '1px' }}>
              {t('metric_access_sub', '✓ 160-Char Plain Text Fallback')}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '10.5px', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>
              {t('metric_languages', 'Supported Indian Languages')}
            </div>
            <div style={{ fontSize: '18px', fontWeight: 900, color: '#7c3aed', marginTop: '2px' }}>
              {translateText('9 Regional Scripts')}
            </div>
            <div style={{ fontSize: '10.5px', color: '#7c3aed', marginTop: '1px' }}>
              {t('metric_languages_sub', '✓ Auto-Unicode Detection')}
            </div>
          </div>
        </div>

        {/* 3. SECTION 1: Rural Health Literacy, Preventive Guides & Awareness Quiz Engine */}
        {(activeSubView === 'all' || activeSubView === 'literacy') && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#e0f2fe', border: '1px solid #bae6fd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={15} color="#0284c7" />
              </div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 900, color: '#0f172a' }}>
                {t('section_1_title', '1. Rural Health Literacy, Preventive Guides & Awareness Quiz Engine')}
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
              <RuralPreventiveHub />

              {/* Quick Summary of Integrated National Health Initiatives */}
              <div style={{
                background: '#f8fafc',
                borderRadius: '18px',
                border: '1px solid #e2e8f0',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>
                  {t('gov_schemes_title', '🏛️ Integrated Government Health Databases & Schematics')}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ background: '#ffffff', padding: '10px 12px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#0284c7' }}>
                      {translateText('ABDM & 14-Digit ABHA ID')}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                      {translateText('Seamless consent-based access to longitudinal EHRs via Ayushman Bharat Digital Mission.')}
                    </div>
                  </div>
                  <div style={{ background: '#ffffff', padding: '10px 12px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#059669' }}>
                      {translateText('U-WIN & UIP Universal Immunization')}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                      {translateText('Digitized child & maternal immunization tracking from birth to 16 years with verified QR certificates.')}
                    </div>
                  </div>
                  <div style={{ background: '#ffffff', padding: '10px 12px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626' }}>
                      {translateText('IDSP / NCDC Real-Time Surveillance')}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                      {translateText('Automated early warning triggers for localized dengue, cholera, nipah, and zika cluster outbreaks.')}
                    </div>
                  </div>
                  <div style={{ background: '#ffffff', padding: '10px 12px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#7c3aed' }}>
                      {translateText('Ayushman Bharat PM-JAY & Jan Aushadhi')}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                      {translateText('₹5 Lakh secondary/tertiary hospital cashless coverage + 80% discounted generic medicines.')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Divider if both sections visible */}
        {activeSubView === 'all' && (
          <div style={{ height: '1px', background: '#e2e8f0', margin: '6px 0' }} />
        )}

        {/* 4. SECTION 2: Omnichannel WhatsApp & 2G GSM SMS Interactive Gateway */}
        {(activeSubView === 'all' || activeSubView === 'omnichannel') && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#fdf2f8', border: '1px solid #fbcfe8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Smartphone size={15} color="#db2777" />
              </div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 900, color: '#0f172a' }}>
                {t('section_2_title', '2. Omnichannel WhatsApp & 2G GSM SMS Interactive Gateway')}
              </h3>
            </div>
            <OmnichannelGatewaySimulator />
          </div>
        )}

      </div>
    </div>
  );
}
