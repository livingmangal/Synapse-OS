'use client';

import React, { useState } from 'react';
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker, 
  ZoomableGroup 
} from 'react-simple-maps';
import { 
  Globe, 
  ShieldAlert, 
  Activity, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  MapPin, 
  Download, 
  Layers, 
  Search, 
  Plus, 
  Minus, 
  RotateCcw,
  Heart,
  Wind,
  Bug,
  Biohazard,
  ShieldCheck,
  Stethoscope,
  Pill,
  Syringe,
  ChevronRight,
  Flame,
  AlertCircle
} from 'lucide-react';

const GEO_URL = '/data/world-110m.json';

interface DiseaseProfile {
  id: string;
  rank: number;
  name: string;
  shortName: string;
  category: string;
  icon: any;
  annualDeaths: string;
  globalCases: string;
  recoveryRate: number;
  mortalityRate: number;
  whoThreatLevel: 'Low' | 'Moderate' | 'High' | 'Critical';
  transmission: string;
  precautions: string[];
  diagnostics: string;
  firstLineTherapy: string;
  vaccineStatus: string;
  globalHubs: RegionalHub[];
  indiaHubs: RegionalHub[];
}

interface RegionalHub {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number]; // [lng, lat]
  activeCases: string;
  recoveryRate: number;
  testPositivity: number;
  icuOccupancy: number;
  riskLevel: 'Low' | 'Moderate' | 'High';
  trend: string;
}

export default function WHODiseaseSurveillancePanel() {
  // Top 10 WHO Monitored Priority Diseases
  const diseases: DiseaseProfile[] = [
    {
      id: 'ihd',
      rank: 1,
      name: 'Ischemic Heart Disease (Coronary Artery Disease)',
      shortName: 'Ischemic Heart Disease',
      category: 'Non-Communicable (Global #1 Cause of Mortality)',
      icon: Heart,
      annualDeaths: '8.9 Million / yr',
      globalCases: '126 Million Monitored',
      recoveryRate: 78.4,
      mortalityRate: 4.8,
      whoThreatLevel: 'High',
      transmission: 'Non-communicable (Atherosclerosis, Hypertension, Dyslipidemia & Genetic predisposition)',
      precautions: [
        'Maintain Blood Pressure < 130/80 mmHg and dietary sodium restriction (< 2g/day)',
        'Lipid profiling with target LDL-C < 70 mg/dL (< 55 mg/dL in very-high-risk patients)',
        'Complete cessation of tobacco use and avoidance of secondary smoke',
        'At least 150 minutes of moderate-intensity aerobic exercise per week'
      ],
      diagnostics: '12-Lead ECG, High-Sensitivity Cardiac Troponin-I/T, 2D-Echocardiography, Coronary CT Angiography',
      firstLineTherapy: 'Dual Antiplatelet Therapy (Aspirin + Clopidogrel/Ticagrelor), High-Intensity Statins (Atorvastatin 80mg), ACE Inhibitors / Beta-Blockers',
      vaccineStatus: 'Annual Influenza & Pneumococcal vaccines recommended to reduce acute coronary events',
      globalHubs: [
        { id: 'g_india', name: 'South Asia (India)', country: 'India', coordinates: [78.96, 20.59], activeCases: '32.4 Million', recoveryRate: 79.2, testPositivity: 4.8, icuOccupancy: 62, riskLevel: 'Moderate', trend: '-1.4%' },
        { id: 'g_usa', name: 'North America (USA)', country: 'United States', coordinates: [-95.71, 37.09], activeCases: '20.1 Million', recoveryRate: 82.5, testPositivity: 3.1, icuOccupancy: 54, riskLevel: 'Low', trend: '-2.1%' },
        { id: 'g_europe', name: 'Western Europe (EU)', country: 'European Union', coordinates: [10.45, 51.16], activeCases: '18.6 Million', recoveryRate: 84.1, testPositivity: 2.8, icuOccupancy: 48, riskLevel: 'Low', trend: '-3.0%' },
        { id: 'g_latam', name: 'Latin America (Brazil Hub)', country: 'Brazil', coordinates: [-51.92, -14.23], activeCases: '12.8 Million', recoveryRate: 74.6, testPositivity: 5.4, icuOccupancy: 68, riskLevel: 'Moderate', trend: '+0.5%' },
        { id: 'g_africa', name: 'Sub-Saharan Africa', country: 'South Africa', coordinates: [24.67, -28.47], activeCases: '9.4 Million', recoveryRate: 68.2, testPositivity: 6.8, icuOccupancy: 74, riskLevel: 'High', trend: '+1.8%' },
        { id: 'g_eastasia', name: 'East Asia (Japan/China)', country: 'Japan', coordinates: [138.25, 36.20], activeCases: '24.2 Million', recoveryRate: 86.8, testPositivity: 2.2, icuOccupancy: 41, riskLevel: 'Low', trend: '-2.4%' },
        { id: 'g_oceania', name: 'Oceania (Australia)', country: 'Australia', coordinates: [133.77, -25.27], activeCases: '2.1 Million', recoveryRate: 88.4, testPositivity: 1.6, icuOccupancy: 32, riskLevel: 'Low', trend: '-3.2%' }
      ],
      indiaHubs: [
        { id: 'in_north', name: 'North Zone (Delhi NCR / Punjab / Haryana)', country: 'India', coordinates: [77.10, 28.70], activeCases: '5.8 Million', recoveryRate: 81.2, testPositivity: 4.2, icuOccupancy: 58, riskLevel: 'Low', trend: '-1.8%' },
        { id: 'in_west', name: 'West Zone (Maharashtra & Gujarat)', country: 'India', coordinates: [73.85, 19.75], activeCases: '8.4 Million', recoveryRate: 78.6, testPositivity: 5.1, icuOccupancy: 66, riskLevel: 'Moderate', trend: '+0.2%' },
        { id: 'in_south', name: 'South Zone (Kerala, Karnataka & Tamil Nadu)', country: 'India', coordinates: [77.59, 13.00], activeCases: '7.9 Million', recoveryRate: 83.4, testPositivity: 3.6, icuOccupancy: 52, riskLevel: 'Low', trend: '-2.4%' },
        { id: 'in_east', name: 'East Zone (West Bengal & Odisha)', country: 'India', coordinates: [87.85, 22.98], activeCases: '4.6 Million', recoveryRate: 76.1, testPositivity: 5.8, icuOccupancy: 69, riskLevel: 'Moderate', trend: '+0.8%' },
        { id: 'in_central', name: 'Central Zone (Uttar Pradesh & MP)', country: 'India', coordinates: [80.33, 24.50], activeCases: '5.7 Million', recoveryRate: 74.8, testPositivity: 5.4, icuOccupancy: 64, riskLevel: 'Moderate', trend: '-0.5%' }
      ]
    },
    {
      id: 'vector',
      rank: 2,
      name: 'Vector-Borne Pathogens (Dengue, Malaria & Chikungunya)',
      shortName: 'Dengue & Malaria',
      category: 'Arboviral & Protozoan Epidemics',
      icon: Bug,
      annualDeaths: '608,000 / yr',
      globalCases: '249 Million Endemic Cases',
      recoveryRate: 98.6,
      mortalityRate: 0.4,
      whoThreatLevel: 'Moderate',
      transmission: 'Vector transmission via infected female Aedes aegypti & Anopheles mosquitoes',
      precautions: [
        'Destruction and clearing of domestic/peri-domestic stagnant water containers weekly',
        'Topical insect repellents (DEET 20-30% or Picaridin) and long-sleeved protective clothing',
        'Use of insecticide-treated bed nets (ITNs) in endemic transmission clusters',
        'Community bio-larviciding using Bacillus thuringiensis israelensis (BTI)'
      ],
      diagnostics: 'Dengue NS1 Antigen ELISA, Malaria RDT (HRP-2 / pLDH), RT-PCR, Serial Platelet and Hematocrit counts',
      firstLineTherapy: 'Artemisinin-Based Combination Therapy (ACT: Artemether-Lumefantrine for Malaria); Isotonic IV Fluid titration (Dengue)',
      vaccineStatus: 'R21/Matrix-M & RTS,S Malaria Vaccines Approved; Qdenga Dengue Vaccine in Endemic Zones',
      globalHubs: [
        { id: 'g_india', name: 'South Asia (India / SEARO)', country: 'India', coordinates: [78.96, 20.59], activeCases: '14.2 Million', recoveryRate: 98.7, testPositivity: 3.4, icuOccupancy: 42, riskLevel: 'Low', trend: '-3.8%' },
        { id: 'g_africa', name: 'Sub-Saharan Africa (Endemic Belt)', country: 'Nigeria', coordinates: [8.67, 9.08], activeCases: '185 Million', recoveryRate: 97.2, testPositivity: 8.9, icuOccupancy: 68, riskLevel: 'High', trend: '+2.1%' },
        { id: 'g_latam', name: 'Latin America (Brazil / PAHO)', country: 'Brazil', coordinates: [-51.92, -14.23], activeCases: '4.8 Million', recoveryRate: 98.4, testPositivity: 6.2, icuOccupancy: 59, riskLevel: 'Moderate', trend: '+1.4%' },
        { id: 'g_seasia', name: 'Southeast Asia (Indonesia/Thailand)', country: 'Thailand', coordinates: [100.99, 15.87], activeCases: '3.1 Million', recoveryRate: 98.9, testPositivity: 4.1, icuOccupancy: 38, riskLevel: 'Low', trend: '-1.5%' },
        { id: 'g_europe', name: 'Southern Europe (Imported / Local Surveillance)', country: 'Italy', coordinates: [12.56, 41.87], activeCases: '42,000', recoveryRate: 99.6, testPositivity: 0.8, icuOccupancy: 12, riskLevel: 'Low', trend: '-5.0%' }
      ],
      indiaHubs: [
        { id: 'in_north', name: 'Delhi NCR & North Plains', country: 'India', coordinates: [77.10, 28.70], activeCases: '142,500', recoveryRate: 98.8, testPositivity: 2.8, icuOccupancy: 36, riskLevel: 'Low', trend: '-4.2%' },
        { id: 'in_west', name: 'Maharashtra & Coastal Konkan', country: 'India', coordinates: [73.85, 19.75], activeCases: '310,200', recoveryRate: 98.2, testPositivity: 4.6, icuOccupancy: 48, riskLevel: 'Moderate', trend: '+0.8%' },
        { id: 'in_south', name: 'Kerala & Tamil Nadu Corridor', country: 'India', coordinates: [77.59, 13.00], activeCases: '182,300', recoveryRate: 99.1, testPositivity: 2.1, icuOccupancy: 28, riskLevel: 'Low', trend: '-5.1%' },
        { id: 'in_east', name: 'West Bengal & Eastern Delta', country: 'India', coordinates: [87.85, 22.98], activeCases: '215,000', recoveryRate: 97.9, testPositivity: 5.2, icuOccupancy: 54, riskLevel: 'Moderate', trend: '+1.2%' }
      ]
    },
    {
      id: 'respiratory',
      rank: 3,
      name: 'Respiratory Pathogens (Tuberculosis, Severe COPD & Influenza)',
      shortName: 'Tuberculosis & COPD',
      category: 'Airborne Bacterial & Viral Infections',
      icon: Wind,
      annualDeaths: '3.9 Million / yr',
      globalCases: '10.6 Million Active TB / 212M COPD',
      recoveryRate: 88.2,
      mortalityRate: 3.1,
      whoThreatLevel: 'High',
      transmission: 'Aerosolized respiratory droplet nuclei (< 5 µm) during coughing, sneezing, speech',
      precautions: [
        'N95 / FFP3 particulate respirators in clinical triage and crowded indoor facilities',
        'Adequate natural and mechanical room ventilation (minimum 6-12 air changes/hour)',
        'Prompt airborne isolation of active smear-positive pulmonary cases',
        'Strict adherence to cough etiquette and respiratory hygiene'
      ],
      diagnostics: 'GeneXpert MTB/RIF Ultra, Sputum AFB Microscopy, Chest Radiography, Multiplex Viral RT-PCR',
      firstLineTherapy: 'Directly Observed Therapy (DOTS: 2HRZE / 4HR regimen); Inhaled Long-Acting Bronchodilators (LABA/LAMA for COPD)',
      vaccineStatus: 'BCG Immunization at birth; Annual Quadrivalent Inactivated Influenza & Pneumococcal conjugate',
      globalHubs: [
        { id: 'g_india', name: 'South Asia (India)', country: 'India', coordinates: [78.96, 20.59], activeCases: '2.8 Million TB', recoveryRate: 88.4, testPositivity: 5.8, icuOccupancy: 58, riskLevel: 'Moderate', trend: '-2.4%' },
        { id: 'g_africa', name: 'Sub-Saharan Africa', country: 'South Africa', coordinates: [24.67, -28.47], activeCases: '2.4 Million TB', recoveryRate: 82.1, testPositivity: 7.9, icuOccupancy: 72, riskLevel: 'High', trend: '+0.6%' },
        { id: 'g_europe', name: 'European Region (WHO EURO)', country: 'Germany', coordinates: [10.45, 51.16], activeCases: '240,000 TB', recoveryRate: 92.4, testPositivity: 1.4, icuOccupancy: 34, riskLevel: 'Low', trend: '-4.1%' },
        { id: 'g_usa', name: 'North America (US CDC)', country: 'United States', coordinates: [-95.71, 37.09], activeCases: '180,000 TB', recoveryRate: 94.1, testPositivity: 1.1, icuOccupancy: 38, riskLevel: 'Low', trend: '-3.8%' },
        { id: 'g_eastasia', name: 'Western Pacific (China/Japan)', country: 'China', coordinates: [104.19, 35.86], activeCases: '1.9 Million TB', recoveryRate: 90.2, testPositivity: 3.2, icuOccupancy: 46, riskLevel: 'Low', trend: '-2.8%' }
      ],
      indiaHubs: [
        { id: 'in_north', name: 'Northern States (UP, Delhi, Bihar)', country: 'India', coordinates: [77.10, 28.70], activeCases: '940,000', recoveryRate: 86.8, testPositivity: 6.2, icuOccupancy: 61, riskLevel: 'Moderate', trend: '-1.2%' },
        { id: 'in_west', name: 'Western States (Maharashtra, Gujarat)', country: 'India', coordinates: [73.85, 19.75], activeCases: '620,000', recoveryRate: 89.2, testPositivity: 4.8, icuOccupancy: 53, riskLevel: 'Low', trend: '-2.6%' },
        { id: 'in_south', name: 'Southern States (Kerala, TN, Karnataka)', country: 'India', coordinates: [77.59, 13.00], activeCases: '480,000', recoveryRate: 93.1, testPositivity: 3.1, icuOccupancy: 42, riskLevel: 'Low', trend: '-3.8%' },
        { id: 'in_east', name: 'Eastern & North-East States', country: 'India', coordinates: [87.85, 22.98], activeCases: '510,000', recoveryRate: 87.4, testPositivity: 5.6, icuOccupancy: 59, riskLevel: 'Moderate', trend: '-0.9%' }
      ]
    },
    {
      id: 'viral_zoonotic',
      rank: 4,
      name: 'Emerging Zoonotic & Viral Pathogens (Mpox, Avian H5N1 & Nipah)',
      shortName: 'Emerging Mpox & H5N1',
      category: 'WHO PHEIC & Pandemic Watch',
      icon: Biohazard,
      annualDeaths: '3,200 Monitored',
      globalCases: '98,400 Monitored Cases',
      recoveryRate: 95.8,
      mortalityRate: 1.2,
      whoThreatLevel: 'Critical',
      transmission: 'Direct mucosal/skin contact with lesions, bodily fluids, respiratory aerosols, animal spillover',
      precautions: [
        'Immediate contact and droplet isolation for suspected vesicular/pustular rash patients',
        'Full PPE for clinical teams: Impermeable gown, double gloves, eye protection, fit-tested N95',
        'Rigorous contact tracing within a 21-day incubation monitoring cycle',
        'Avoidance of unprotected contact with sick/dead domestic poultry or wild mammals'
      ],
      diagnostics: 'Real-Time Clade-Specific PCR (Mpox Clade Ib/IIb), Avian H5 Multiplex RT-PCR, Viral Sequencing',
      firstLineTherapy: 'Tecovirimat (TPOXX 600mg BID) for severe disease; Early Oseltamivir (75mg BID) for Avian Influenza',
      vaccineStatus: 'MVA-BN (JYNNEOS) 2-dose subcutaneous vaccine pre/post-exposure prophylaxis approved by WHO',
      globalHubs: [
        { id: 'g_africa', name: 'Central & West Africa (Endemic Focus)', country: 'DR Congo', coordinates: [21.75, -4.03], activeCases: '24,800', recoveryRate: 93.2, testPositivity: 12.4, icuOccupancy: 78, riskLevel: 'High', trend: '+4.2%' },
        { id: 'g_europe', name: 'European Union (ECDC Alert)', country: 'Sweden', coordinates: [18.64, 60.12], activeCases: '1,240', recoveryRate: 98.4, testPositivity: 1.2, icuOccupancy: 18, riskLevel: 'Low', trend: '-1.1%' },
        { id: 'g_usa', name: 'North America (US CDC)', country: 'United States', coordinates: [-95.71, 37.09], activeCases: '3,420', recoveryRate: 98.1, testPositivity: 1.6, icuOccupancy: 22, riskLevel: 'Low', trend: '-0.8%' },
        { id: 'g_seasia', name: 'Southeast Asia (Thailand/India)', country: 'Thailand', coordinates: [100.99, 15.87], activeCases: '680', recoveryRate: 97.6, testPositivity: 1.9, icuOccupancy: 24, riskLevel: 'Low', trend: '0.0%' }
      ],
      indiaHubs: [
        { id: 'in_south', name: 'Kerala Surveillance Hub (Point of Entry)', country: 'India', coordinates: [76.27, 10.85], activeCases: '14 Isolated', recoveryRate: 100.0, testPositivity: 0.4, icuOccupancy: 12, riskLevel: 'Low', trend: '0.0%' },
        { id: 'in_north', name: 'Delhi NCR International Airport Triage', country: 'India', coordinates: [77.10, 28.70], activeCases: '8 Isolated', recoveryRate: 100.0, testPositivity: 0.2, icuOccupancy: 8, riskLevel: 'Low', trend: '0.0%' }
      ]
    },
    {
      id: 'amr',
      rank: 5,
      name: 'Antimicrobial Resistance (AMR Critical Priority Superbugs: CRE, MRSA)',
      shortName: 'AMR Superbugs',
      category: 'WHO Critical Priority 1',
      icon: AlertTriangle,
      annualDeaths: '1.27 Million Direct / 4.95M Associated',
      globalCases: '4.95 Million Attributed',
      recoveryRate: 69.5,
      mortalityRate: 8.4,
      whoThreatLevel: 'High',
      transmission: 'Nosocomial cross-transmission, clinical surface colonization, agricultural antibiotic misuse',
      precautions: [
        'Strict antimicrobial stewardship: Mandatory pre-authorization for carbapenems and colistin',
        'Contact precautions & single-room cohorting for CRE / MRSA / Candida auris colonizations',
        'Enhanced environmental terminal disinfection using vaporized hydrogen peroxide or sporicidals',
        'Early de-escalation of empiric therapy within 48-72h based on microbiological sensitivity'
      ],
      diagnostics: 'Automated MicroScan/VITEK Antimicrobial Susceptibility Testing, MALDI-TOF Mass Spectrometry, Carbapenemase PCR (blaNDM, blaKPC, blaOXA-48)',
      firstLineTherapy: 'Targeted sensitivity-directed combinations (Ceftazidime-Avibactam, Meropenem-Vaborbactam, Cefiderocol, Colistin)',
      vaccineStatus: 'Investigational bacterial vaccines in global clinical development',
      globalHubs: [
        { id: 'g_india', name: 'South Asia (India)', country: 'India', coordinates: [78.96, 20.59], activeCases: '1.2 Million', recoveryRate: 71.4, testPositivity: 8.4, icuOccupancy: 74, riskLevel: 'High', trend: '+1.6%' },
        { id: 'g_europe', name: 'European Union (ECDC Zone)', country: 'Greece', coordinates: [21.82, 39.07], activeCases: '420,000', recoveryRate: 78.2, testPositivity: 4.2, icuOccupancy: 56, riskLevel: 'Moderate', trend: '-1.0%' },
        { id: 'g_usa', name: 'North America (CDC AR Network)', country: 'United States', coordinates: [-95.71, 37.09], activeCases: '680,000', recoveryRate: 79.5, testPositivity: 3.8, icuOccupancy: 52, riskLevel: 'Moderate', trend: '-0.5%' },
        { id: 'g_latam', name: 'Latin America (PAHO Hub)', country: 'Argentina', coordinates: [-63.61, -38.41], activeCases: '390,000', recoveryRate: 68.9, testPositivity: 7.6, icuOccupancy: 69, riskLevel: 'High', trend: '+2.0%' }
      ],
      indiaHubs: [
        { id: 'in_north', name: 'North Tertiary Care Centers (Delhi / UP)', country: 'India', coordinates: [77.10, 28.70], activeCases: '340,000', recoveryRate: 70.8, testPositivity: 8.9, icuOccupancy: 76, riskLevel: 'High', trend: '+1.4%' },
        { id: 'in_west', name: 'West Tertiary Care Centers (Mumbai / Pune)', country: 'India', coordinates: [73.85, 19.75], activeCases: '380,000', recoveryRate: 72.1, testPositivity: 7.8, icuOccupancy: 72, riskLevel: 'High', trend: '+0.8%' },
        { id: 'in_south', name: 'South Tertiary Care Centers (Bengaluru / Chennai)', country: 'India', coordinates: [77.59, 13.00], activeCases: '260,000', recoveryRate: 76.4, testPositivity: 5.6, icuOccupancy: 61, riskLevel: 'Moderate', trend: '-0.4%' }
      ]
    }
  ];

  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>('ihd');
  const [mapScope, setMapScope] = useState<'global' | 'india'>('global');
  const [selectedHubId, setSelectedHubId] = useState<string>('g_india');

  const activeDisease = diseases.find(d => d.id === selectedDiseaseId) || diseases[0];
  const activeHubList = mapScope === 'global' ? activeDisease.globalHubs : activeDisease.indiaHubs;
  const activeHub = activeHubList.find(h => h.id === selectedHubId) || activeHubList[0];

  // Map coordinates & zoom based on scope
  const mapCenter: [number, number] = mapScope === 'global' ? [20, 15] : [79, 22];
  const mapScale = mapScope === 'global' ? 145 : 680;

  const handleSelectDisease = (id: string) => {
    setSelectedDiseaseId(id);
    const d = diseases.find(item => item.id === id);
    if (d) {
      setSelectedHubId(mapScope === 'global' ? d.globalHubs[0]?.id : d.indiaHubs[0]?.id);
    }
  };

  const handleSwitchScope = (scope: 'global' | 'india') => {
    setMapScope(scope);
    setSelectedHubId(scope === 'global' ? activeDisease.globalHubs[0]?.id : activeDisease.indiaHubs[0]?.id);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '100%',
      maxWidth: '1600px',
      margin: '0 auto',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* 1. Official WHO Dashboard Header */}
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        border: '1px solid #e2e8f0',
        padding: '20px 28px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: '#008dc9',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,141,201,0.25)'
          }}>
            <Globe size={24} />
          </div>
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
              WHO Global Disease & Pathogen Surveillance Dashboard
            </h1>
            <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>
              World Health Organization (WHO) & ICMR Live Epidemiological Feed • Real-Time Synchronized
            </span>
          </div>
        </div>

        {/* Global Summary Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          background: '#f8fafc',
          padding: '8px 16px',
          borderRadius: '12px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Surveillance Mode</div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#008dc9' }}>194 Member States Active</div>
          </div>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
        </div>
      </div>

      {/* 2. Step 1: Top Disease Selection Bar (Clean, Interactive Cards) */}
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        border: '1px solid #e2e8f0',
        padding: '20px 24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#008dc9', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Step 1: Select Monitored Condition
            </span>
            <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', margin: '2px 0 0 0' }}>
              WHO Top Priority Diseases & Pathogens
            </h2>
          </div>
          <span style={{ fontSize: '11.5px', color: '#64748b' }}>
            Click on any condition to load live global records & maps
          </span>
        </div>

        {/* Disease Selection Horizontal Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '12px'
        }}>
          {diseases.map((d) => {
            const isSelected = d.id === selectedDiseaseId;
            const Icon = d.icon;

            return (
              <div
                key={d.id}
                onClick={() => handleSelectDisease(d.id)}
                style={{
                  padding: '14px 16px',
                  borderRadius: '14px',
                  border: isSelected ? '2px solid #008dc9' : '1px solid #e2e8f0',
                  background: isSelected ? '#f0f9ff' : '#f8fafc',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 4px 14px rgba(0,141,201,0.12)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: isSelected ? '#008dc9' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#008dc9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                  }}>
                    <Icon size={16} />
                  </div>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '2px 6px',
                    borderRadius: '6px',
                    background: isSelected ? '#008dc9' : '#e2e8f0',
                    color: isSelected ? '#ffffff' : '#475569'
                  }}>
                    WHO #{d.rank}
                  </span>
                </div>

                <div>
                  <h3 style={{
                    fontSize: '13px',
                    fontWeight: 800,
                    color: isSelected ? '#0369a1' : '#1e293b',
                    margin: '0 0 2px 0',
                    lineHeight: 1.3
                  }}>
                    {d.shortName}
                  </h3>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600 }}>
                    {d.annualDeaths}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Step 2: Global Disease Intelligence & Interactive Map Viewport */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.6fr 1fr',
        gap: '24px',
        alignItems: 'start'
      }}>
        {/* Left Side: Interactive TopoJSON Vector Map */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          {/* Map Scope Selector & Title */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#008dc9', textTransform: 'uppercase' }}>
                Epidemiological Map
              </span>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', margin: '2px 0 0 0' }}>
                {activeDisease.name}
              </h3>
            </div>

            {/* Scope Switcher: Global World vs India Regional */}
            <div style={{ display: 'flex', gap: '6px', background: '#f1f5f9', padding: '3px', borderRadius: '10px' }}>
              <button
                onClick={() => handleSwitchScope('global')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: mapScope === 'global' ? 800 : 600,
                  background: mapScope === 'global' ? '#008dc9' : 'transparent',
                  color: mapScope === 'global' ? '#ffffff' : '#64748b',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                🌐 Global Surveillance
              </button>
              <button
                onClick={() => handleSwitchScope('india')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: mapScope === 'india' ? 800 : 600,
                  background: mapScope === 'india' ? '#008dc9' : 'transparent',
                  color: mapScope === 'india' ? '#ffffff' : '#64748b',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                🇮🇳 India Regional Focus
              </button>
            </div>
          </div>

          {/* Map Canvas with TopoJSON Geographies */}
          <div style={{
            background: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            position: 'relative',
            height: '420px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ComposableMap
              projection={mapScope === 'global' ? 'geoEqualEarth' : 'geoMercator'}
              projectionConfig={{ scale: mapScale, center: mapCenter }}
              style={{ width: '100%', height: '100%' }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#e2e8f0"
                      stroke="#ffffff"
                      strokeWidth={0.8}
                      style={{
                        default: { fill: '#e2e8f0', outline: 'none' },
                        hover: { fill: '#cbd5e1', outline: 'none' },
                        pressed: { fill: '#94a3b8', outline: 'none' }
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Clean, Non-Overlapping Regional Hub Markers */}
              {activeHubList.map((hub) => {
                const isSelected = hub.id === selectedHubId;
                const bubbleRadius = isSelected ? 22 : 16;
                const bubbleColor = hub.riskLevel === 'High' ? '#ef4444' : hub.riskLevel === 'Moderate' ? '#f59e0b' : '#008dc9';

                return (
                  <Marker
                    key={hub.id}
                    coordinates={hub.coordinates}
                    onClick={() => setSelectedHubId(hub.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Outer Glow Halo */}
                    <circle
                      r={bubbleRadius + 8}
                      fill={bubbleColor}
                      opacity={isSelected ? 0.35 : 0.15}
                    />

                    {/* Main Bubble */}
                    <circle
                      r={bubbleRadius}
                      fill={bubbleColor}
                      stroke="#ffffff"
                      strokeWidth={2}
                    />

                    {/* Center Dot */}
                    <circle
                      r={3}
                      fill="#ffffff"
                    />

                    {/* Clean Pill Label (Only for Selected or Zoomed) */}
                    <text
                      textAnchor="middle"
                      y={bubbleRadius + 14}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: isSelected ? '11px' : '9.5px',
                        fontWeight: 800,
                        fill: isSelected ? '#008dc9' : '#1e293b',
                        stroke: '#ffffff',
                        strokeWidth: 3,
                        paintOrder: 'stroke fill'
                      }}
                    >
                      {hub.name.split('(')[0].trim()}
                    </text>
                  </Marker>
                );
              })}
            </ComposableMap>

            {/* Bottom Legend */}
            <div style={{
              position: 'absolute',
              bottom: '12px',
              left: '14px',
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(6px)',
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '11px',
              fontWeight: 700,
              color: '#334155'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#008dc9' }} />
                <span>Low / Standard Watch</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
                <span>Moderate</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                <span>High Alert</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#64748b' }}>
            <span>💡 Click any regional bubble on the map to inspect surveillance metrics.</span>
            <button
              onClick={() => alert(`Downloading WHO Global Data for ${activeDisease.name}...`)}
              style={{
                background: 'none',
                border: 'none',
                color: '#008dc9',
                fontSize: '12px',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer'
              }}
            >
              <Download size={14} />
              <span>Download Dataset</span>
            </button>
          </div>
        </div>

        {/* Right Side: Selected Region Inspector & Global KPIs */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {/* Global Summary Card for Selected Disease */}
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: '20px 24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
          }}>
            <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
              Global Monitored Load
            </span>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#0f172a', marginTop: '2px', lineHeight: 1.2 }}>
              {activeDisease.globalCases}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '14px' }}>
              <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Recovery / Resolution</div>
                <div style={{ fontSize: '16px', fontWeight: 900, color: '#16a34a', marginTop: '2px' }}>{activeDisease.recoveryRate}%</div>
              </div>
              <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Case Fatality (CFR)</div>
                <div style={{ fontSize: '16px', fontWeight: 900, color: '#d97706', marginTop: '2px' }}>{activeDisease.mortalityRate}%</div>
              </div>
            </div>
          </div>

          {/* Regional Hub Inspector Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: '20px 24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} color="#008dc9" />
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#008dc9', textTransform: 'uppercase' }}>
                    Selected Hub
                  </span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#0f172a', margin: '4px 0 0 0' }}>
                  {activeHub?.name || 'Regional Hub'}
                </h3>
              </div>

              <span style={{
                fontSize: '10px',
                fontWeight: 800,
                padding: '3px 8px',
                borderRadius: '6px',
                background: activeHub?.riskLevel === 'High' ? '#fef2f2' : activeHub?.riskLevel === 'Moderate' ? '#fffbeb' : '#ecfdf5',
                color: activeHub?.riskLevel === 'High' ? '#ef4444' : activeHub?.riskLevel === 'Moderate' ? '#d97706' : '#059669',
                border: `1px solid ${activeHub?.riskLevel === 'High' ? '#fecaca' : activeHub?.riskLevel === 'Moderate' ? '#fde68a' : '#a7f3d0'}`
              }}>
                ● {activeHub?.riskLevel} Risk
              </span>
            </div>

            {/* Hub Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
              <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Active Cases</div>
                <div style={{ fontSize: '15px', fontWeight: 900, color: '#0f172a', marginTop: '2px' }}>{activeHub?.activeCases}</div>
                <span style={{ fontSize: '10px', color: '#008dc9', fontWeight: 700 }}>Trend: {activeHub?.trend}</span>
              </div>
              <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Recovery Rate</div>
                <div style={{ fontSize: '15px', fontWeight: 900, color: '#16a34a', marginTop: '2px' }}>{activeHub?.recoveryRate}%</div>
                <span style={{ fontSize: '10px', color: '#16a34a', fontWeight: 700 }}>Clinical Target Met</span>
              </div>
              <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Test Positivity</div>
                <div style={{ fontSize: '15px', fontWeight: 900, color: '#d97706', marginTop: '2px' }}>{activeHub?.testPositivity}%</div>
                <span style={{ fontSize: '10px', color: '#64748b' }}>Benchmark &lt; 5%</span>
              </div>
              <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>ICU Bed Reserve</div>
                <div style={{ fontSize: '15px', fontWeight: 900, color: '#2563eb', marginTop: '2px' }}>{100 - (activeHub?.icuOccupancy || 50)}% Avail</div>
                <span style={{ fontSize: '10px', color: '#64748b' }}>{activeHub?.icuOccupancy}% in use</span>
              </div>
            </div>

            {/* 7-Day Trend Spline */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', fontWeight: 700, marginBottom: '6px' }}>
                <span>7-Day Trajectory</span>
                <span style={{ color: '#16a34a' }}>Stable & Controlled</span>
              </div>
              <div style={{ width: '100%', height: '45px', background: '#f8fafc', borderRadius: '8px', padding: '4px', border: '1px solid #f1f5f9' }}>
                <svg viewBox="0 0 300 40" style={{ width: '100%', height: '100%' }}>
                  <path d="M 10 30 Q 70 15 140 24 T 220 18 T 290 12" fill="none" stroke="#008dc9" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="10" cy="30" r="3" fill="#008dc9" />
                  <circle cx="140" cy="24" r="3" fill="#008dc9" />
                  <circle cx="290" cy="12" r="3" fill="#008dc9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Step 3: WHO Official Precautions & Evidence-Based Guidelines Matrix */}
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        border: '1px solid #e2e8f0',
        padding: '24px 28px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', borderBottom: '1px solid #f1f5f9', paddingBottom: '14px' }}>
          <div>
            <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#008dc9', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Step 2: Clinical Protocols & Evidence-Based Directives
            </span>
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', margin: '2px 0 0 0' }}>
              WHO Clinical Guidelines & Precautions: {activeDisease.name}
            </h3>
          </div>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#008dc9', background: '#e0f2fe', padding: '4px 10px', borderRadius: '8px' }}>
            WHO Essential Guidance 2026
          </span>
        </div>

        {/* 4 Clean Clinical Directives Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px'
        }}>
          {/* Card 1: Precautions & Prevention */}
          <div style={{
            background: '#f8fafc',
            borderRadius: '14px',
            border: '1px solid #e2e8f0',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#008dc9', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={15} />
              <span>1. Primary Precautions</span>
            </div>
            <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '12px', color: '#334155', lineHeight: 1.6 }}>
              {activeDisease.precautions.map((p, idx) => (
                <li key={idx} style={{ marginBottom: '6px' }}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Card 2: Diagnostics & Screening */}
          <div style={{
            background: '#f8fafc',
            borderRadius: '14px',
            border: '1px solid #e2e8f0',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#7c3aed', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Stethoscope size={15} />
              <span>2. Diagnostics & Labs</span>
            </div>
            <p style={{ fontSize: '12px', color: '#334155', margin: 0, lineHeight: 1.6 }}>
              {activeDisease.diagnostics}
            </p>
            <div style={{ marginTop: 'auto', fontSize: '10.5px', fontWeight: 700, color: '#7c3aed', background: '#f5f3ff', padding: '6px 10px', borderRadius: '8px', border: '1px solid #ddd6fe' }}>
              ✓ Gold Standard Sensitivity &gt; 96%
            </div>
          </div>

          {/* Card 3: First-Line Therapeutics */}
          <div style={{
            background: '#f8fafc',
            borderRadius: '14px',
            border: '1px solid #e2e8f0',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#059669', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Pill size={15} />
              <span>3. First-Line Therapeutics</span>
            </div>
            <p style={{ fontSize: '12px', color: '#334155', margin: 0, lineHeight: 1.6 }}>
              {activeDisease.firstLineTherapy}
            </p>
            <div style={{ marginTop: 'auto', fontSize: '10.5px', fontWeight: 700, color: '#059669', background: '#ecfdf5', padding: '6px 10px', borderRadius: '8px', border: '1px solid #a7f3d0' }}>
              ✓ WHO Essential Medicines 2026
            </div>
          </div>

          {/* Card 4: Vaccine & Immunization */}
          <div style={{
            background: '#f8fafc',
            borderRadius: '14px',
            border: '1px solid #e2e8f0',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#ea580c', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Syringe size={15} />
              <span>4. Vaccine & Prophylaxis</span>
            </div>
            <p style={{ fontSize: '12px', color: '#334155', margin: 0, lineHeight: 1.6 }}>
              {activeDisease.vaccineStatus}
            </p>
            <div style={{ marginTop: 'auto', fontSize: '10.5px', fontWeight: 700, color: '#ea580c', background: '#fff7ed', padding: '6px 10px', borderRadius: '8px', border: '1px solid #ffedd5' }}>
              ✓ Strategic Global Advisory
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
