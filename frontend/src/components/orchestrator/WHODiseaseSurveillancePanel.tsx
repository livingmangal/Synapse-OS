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
  Filter,
  BarChart2,
  Calendar,
  Sparkles
} from 'lucide-react';

const GEO_URL = '/data/world-110m.json';

interface TrajectoryPoint {
  day: string;
  date: string;
  active: number;
  recovered: number;
  icu: number;
}

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
  activeNumber: number;
  recoveryRate: number;
  testPositivity: number;
  icuOccupancy: number;
  riskLevel: 'Low' | 'Moderate' | 'High';
  trend: string;
  trajectory: TrajectoryPoint[];
}

export default function WHODiseaseSurveillancePanel() {
  // Top 5 WHO Monitored Priority Diseases with interactive trajectories
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
        {
          id: 'g_india',
          name: 'South Asia (India Hub)',
          country: 'India',
          coordinates: [78.96, 20.59],
          activeCases: '32.4 Million',
          activeNumber: 32400000,
          recoveryRate: 79.2,
          testPositivity: 4.8,
          icuOccupancy: 62,
          riskLevel: 'Moderate',
          trend: '-1.4%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 38.4, recovered: 24.1, icu: 52 },
            { day: 'Tue', date: 'Aug 15', active: 42.6, recovered: 25.4, icu: 58 },
            { day: 'Wed', date: 'Aug 16', active: 46.8, recovered: 26.8, icu: 66 },
            { day: 'Thu', date: 'Aug 17', active: 41.2, recovered: 28.5, icu: 64 },
            { day: 'Fri', date: 'Aug 18', active: 36.5, recovered: 29.8, icu: 62 },
            { day: 'Sat', date: 'Aug 19', active: 32.4, recovered: 31.2, icu: 62 },
            { day: 'Sun', date: 'Aug 20', active: 29.1, recovered: 32.6, icu: 59 }
          ]
        },
        {
          id: 'g_usa',
          name: 'North America (US CDC)',
          country: 'United States',
          coordinates: [-95.71, 37.09],
          activeCases: '20.1 Million',
          activeNumber: 20100000,
          recoveryRate: 82.5,
          testPositivity: 3.1,
          icuOccupancy: 54,
          riskLevel: 'Low',
          trend: '-2.1%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 20.6, recovered: 17.0, icu: 56 },
            { day: 'Tue', date: 'Aug 15', active: 20.5, recovered: 17.1, icu: 56 },
            { day: 'Wed', date: 'Aug 16', active: 20.4, recovered: 17.2, icu: 55 },
            { day: 'Thu', date: 'Aug 17', active: 20.3, recovered: 17.3, icu: 55 },
            { day: 'Fri', date: 'Aug 18', active: 20.2, recovered: 17.4, icu: 54 },
            { day: 'Sat', date: 'Aug 19', active: 20.1, recovered: 17.5, icu: 54 },
            { day: 'Sun', date: 'Aug 20', active: 20.0, recovered: 17.6, icu: 53 }
          ]
        },
        {
          id: 'g_europe',
          name: 'Western Europe (ECDC Zone)',
          country: 'European Union',
          coordinates: [10.45, 51.16],
          activeCases: '18.6 Million',
          activeNumber: 18600000,
          recoveryRate: 84.1,
          testPositivity: 2.8,
          icuOccupancy: 48,
          riskLevel: 'Low',
          trend: '-3.0%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 19.2, recovered: 16.1, icu: 51 },
            { day: 'Tue', date: 'Aug 15', active: 19.0, recovered: 16.2, icu: 50 },
            { day: 'Wed', date: 'Aug 16', active: 18.9, recovered: 16.3, icu: 49 },
            { day: 'Thu', date: 'Aug 17', active: 18.8, recovered: 16.4, icu: 49 },
            { day: 'Fri', date: 'Aug 18', active: 18.7, recovered: 16.5, icu: 48 },
            { day: 'Sat', date: 'Aug 19', active: 18.6, recovered: 16.6, icu: 48 },
            { day: 'Sun', date: 'Aug 20', active: 18.5, recovered: 16.7, icu: 47 }
          ]
        },
        {
          id: 'g_latam',
          name: 'Latin America (PAHO Brazil Hub)',
          country: 'Brazil',
          coordinates: [-51.92, -14.23],
          activeCases: '12.8 Million',
          activeNumber: 12800000,
          recoveryRate: 74.6,
          testPositivity: 5.4,
          icuOccupancy: 68,
          riskLevel: 'Moderate',
          trend: '+0.5%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 12.6, recovered: 9.4, icu: 66 },
            { day: 'Tue', date: 'Aug 15', active: 12.7, recovered: 9.5, icu: 67 },
            { day: 'Wed', date: 'Aug 16', active: 12.7, recovered: 9.5, icu: 67 },
            { day: 'Thu', date: 'Aug 17', active: 12.8, recovered: 9.6, icu: 68 },
            { day: 'Fri', date: 'Aug 18', active: 12.8, recovered: 9.6, icu: 68 },
            { day: 'Sat', date: 'Aug 19', active: 12.8, recovered: 9.7, icu: 68 },
            { day: 'Sun', date: 'Aug 20', active: 12.9, recovered: 9.7, icu: 69 }
          ]
        },
        {
          id: 'g_africa',
          name: 'Sub-Saharan Africa (Africa CDC)',
          country: 'South Africa',
          coordinates: [24.67, -28.47],
          activeCases: '9.4 Million',
          activeNumber: 9400000,
          recoveryRate: 68.2,
          testPositivity: 6.8,
          icuOccupancy: 74,
          riskLevel: 'High',
          trend: '+1.8%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 9.1, recovered: 6.2, icu: 71 },
            { day: 'Tue', date: 'Aug 15', active: 9.2, recovered: 6.3, icu: 72 },
            { day: 'Wed', date: 'Aug 16', active: 9.3, recovered: 6.3, icu: 73 },
            { day: 'Thu', date: 'Aug 17', active: 9.3, recovered: 6.4, icu: 73 },
            { day: 'Fri', date: 'Aug 18', active: 9.4, recovered: 6.4, icu: 74 },
            { day: 'Sat', date: 'Aug 19', active: 9.4, recovered: 6.5, icu: 74 },
            { day: 'Sun', date: 'Aug 20', active: 9.5, recovered: 6.5, icu: 75 }
          ]
        },
        {
          id: 'g_eastasia',
          name: 'East Asia (Japan & Pacific)',
          country: 'Japan',
          coordinates: [138.25, 36.20],
          activeCases: '24.2 Million',
          activeNumber: 24200000,
          recoveryRate: 86.8,
          testPositivity: 2.2,
          icuOccupancy: 41,
          riskLevel: 'Low',
          trend: '-2.4%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 24.8, recovered: 21.4, icu: 43 },
            { day: 'Tue', date: 'Aug 15', active: 24.7, recovered: 21.5, icu: 43 },
            { day: 'Wed', date: 'Aug 16', active: 24.5, recovered: 21.6, icu: 42 },
            { day: 'Thu', date: 'Aug 17', active: 24.4, recovered: 21.7, icu: 42 },
            { day: 'Fri', date: 'Aug 18', active: 24.3, recovered: 21.8, icu: 41 },
            { day: 'Sat', date: 'Aug 19', active: 24.2, recovered: 21.9, icu: 41 },
            { day: 'Sun', date: 'Aug 20', active: 24.1, recovered: 22.0, icu: 40 }
          ]
        }
      ],
      indiaHubs: [
        {
          id: 'in_north',
          name: 'North Zone (Delhi NCR & Punjab)',
          country: 'India',
          coordinates: [77.10, 28.70],
          activeCases: '5.8 Million',
          activeNumber: 5800000,
          recoveryRate: 81.2,
          testPositivity: 4.2,
          icuOccupancy: 58,
          riskLevel: 'Low',
          trend: '-1.8%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 7.2, recovered: 3.8, icu: 50 },
            { day: 'Tue', date: 'Aug 15', active: 8.5, recovered: 4.1, icu: 56 },
            { day: 'Wed', date: 'Aug 16', active: 9.1, recovered: 4.4, icu: 64 },
            { day: 'Thu', date: 'Aug 17', active: 7.4, recovered: 4.7, icu: 61 },
            { day: 'Fri', date: 'Aug 18', active: 6.3, recovered: 4.9, icu: 58 },
            { day: 'Sat', date: 'Aug 19', active: 5.8, recovered: 5.0, icu: 58 },
            { day: 'Sun', date: 'Aug 20', active: 5.1, recovered: 5.2, icu: 55 }
          ]
        },
        {
          id: 'in_west',
          name: 'West Zone (Maharashtra & Gujarat)',
          country: 'India',
          coordinates: [73.85, 19.75],
          activeCases: '8.4 Million',
          activeNumber: 8400000,
          recoveryRate: 78.6,
          testPositivity: 5.1,
          icuOccupancy: 66,
          riskLevel: 'Moderate',
          trend: '+0.2%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 6.8, recovered: 5.5, icu: 59 },
            { day: 'Tue', date: 'Aug 15', active: 7.6, recovered: 5.8, icu: 63 },
            { day: 'Wed', date: 'Aug 16', active: 9.4, recovered: 6.2, icu: 68 },
            { day: 'Thu', date: 'Aug 17', active: 9.8, recovered: 6.4, icu: 71 },
            { day: 'Fri', date: 'Aug 18', active: 8.9, recovered: 6.6, icu: 68 },
            { day: 'Sat', date: 'Aug 19', active: 8.4, recovered: 6.8, icu: 66 },
            { day: 'Sun', date: 'Aug 20', active: 7.9, recovered: 7.1, icu: 63 }
          ]
        },
        {
          id: 'in_south',
          name: 'South Zone (Kerala, TN & Karnataka)',
          country: 'India',
          coordinates: [77.59, 13.00],
          activeCases: '7.9 Million',
          activeNumber: 7900000,
          recoveryRate: 83.4,
          testPositivity: 3.6,
          icuOccupancy: 52,
          riskLevel: 'Low',
          trend: '-2.4%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 9.6, recovered: 5.8, icu: 62 },
            { day: 'Tue', date: 'Aug 15', active: 8.9, recovered: 6.2, icu: 59 },
            { day: 'Wed', date: 'Aug 16', active: 8.4, recovered: 6.5, icu: 56 },
            { day: 'Thu', date: 'Aug 17', active: 7.9, recovered: 6.9, icu: 52 },
            { day: 'Fri', date: 'Aug 18', active: 7.1, recovered: 7.2, icu: 48 },
            { day: 'Sat', date: 'Aug 19', active: 6.6, recovered: 7.5, icu: 45 },
            { day: 'Sun', date: 'Aug 20', active: 6.1, recovered: 7.8, icu: 42 }
          ]
        },
        {
          id: 'in_east',
          name: 'East Zone (West Bengal & Odisha)',
          country: 'India',
          coordinates: [87.85, 22.98],
          activeCases: '4.6 Million',
          activeNumber: 4600000,
          recoveryRate: 76.1,
          testPositivity: 5.8,
          icuOccupancy: 69,
          riskLevel: 'Moderate',
          trend: '+0.8%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 3.6, recovered: 2.8, icu: 58 },
            { day: 'Tue', date: 'Aug 15', active: 4.1, recovered: 3.1, icu: 63 },
            { day: 'Wed', date: 'Aug 16', active: 5.2, recovered: 3.3, icu: 72 },
            { day: 'Thu', date: 'Aug 17', active: 5.6, recovered: 3.5, icu: 75 },
            { day: 'Fri', date: 'Aug 18', active: 4.9, recovered: 3.6, icu: 71 },
            { day: 'Sat', date: 'Aug 19', active: 4.6, recovered: 3.7, icu: 69 },
            { day: 'Sun', date: 'Aug 20', active: 4.2, recovered: 3.9, icu: 65 }
          ]
        }
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
        {
          id: 'g_india',
          name: 'South Asia (India Hub)',
          country: 'India',
          coordinates: [78.96, 20.59],
          activeCases: '14.2 Million',
          activeNumber: 14200000,
          recoveryRate: 98.7,
          testPositivity: 3.4,
          icuOccupancy: 42,
          riskLevel: 'Low',
          trend: '-3.8%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 14.8, recovered: 14.6, icu: 45 },
            { day: 'Tue', date: 'Aug 15', active: 14.6, recovered: 14.5, icu: 44 },
            { day: 'Wed', date: 'Aug 16', active: 14.5, recovered: 14.4, icu: 43 },
            { day: 'Thu', date: 'Aug 17', active: 14.4, recovered: 14.3, icu: 43 },
            { day: 'Fri', date: 'Aug 18', active: 14.3, recovered: 14.2, icu: 42 },
            { day: 'Sat', date: 'Aug 19', active: 14.2, recovered: 14.1, icu: 42 },
            { day: 'Sun', date: 'Aug 20', active: 14.1, recovered: 14.0, icu: 41 }
          ]
        },
        {
          id: 'g_africa',
          name: 'Sub-Saharan Africa (Endemic Belt)',
          country: 'Nigeria',
          coordinates: [8.67, 9.08],
          activeCases: '185 Million',
          activeNumber: 185000000,
          recoveryRate: 97.2,
          testPositivity: 8.9,
          icuOccupancy: 68,
          riskLevel: 'High',
          trend: '+2.1%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 181, recovered: 176, icu: 66 },
            { day: 'Tue', date: 'Aug 15', active: 182, recovered: 177, icu: 66 },
            { day: 'Wed', date: 'Aug 16', active: 183, recovered: 178, icu: 67 },
            { day: 'Thu', date: 'Aug 17', active: 184, recovered: 179, icu: 67 },
            { day: 'Fri', date: 'Aug 18', active: 185, recovered: 180, icu: 68 },
            { day: 'Sat', date: 'Aug 19', active: 185, recovered: 180, icu: 68 },
            { day: 'Sun', date: 'Aug 20', active: 186, recovered: 181, icu: 69 }
          ]
        },
        {
          id: 'g_latam',
          name: 'Latin America (Brazil Hub)',
          country: 'Brazil',
          coordinates: [-51.92, -14.23],
          activeCases: '4.8 Million',
          activeNumber: 4800000,
          recoveryRate: 98.4,
          testPositivity: 6.2,
          icuOccupancy: 59,
          riskLevel: 'Moderate',
          trend: '+1.4%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 4.6, recovered: 4.5, icu: 57 },
            { day: 'Tue', date: 'Aug 15', active: 4.7, recovered: 4.6, icu: 58 },
            { day: 'Wed', date: 'Aug 16', active: 4.7, recovered: 4.6, icu: 58 },
            { day: 'Thu', date: 'Aug 17', active: 4.8, recovered: 4.7, icu: 59 },
            { day: 'Fri', date: 'Aug 18', active: 4.8, recovered: 4.7, icu: 59 },
            { day: 'Sat', date: 'Aug 19', active: 4.8, recovered: 4.7, icu: 59 },
            { day: 'Sun', date: 'Aug 20', active: 4.9, recovered: 4.8, icu: 60 }
          ]
        },
        {
          id: 'g_seasia',
          name: 'Southeast Asia (Thailand Hub)',
          country: 'Thailand',
          coordinates: [100.99, 15.87],
          activeCases: '3.1 Million',
          activeNumber: 3100000,
          recoveryRate: 98.9,
          testPositivity: 4.1,
          icuOccupancy: 38,
          riskLevel: 'Low',
          trend: '-1.5%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 3.2, recovered: 3.1, icu: 40 },
            { day: 'Tue', date: 'Aug 15', active: 3.2, recovered: 3.1, icu: 39 },
            { day: 'Wed', date: 'Aug 16', active: 3.1, recovered: 3.0, icu: 39 },
            { day: 'Thu', date: 'Aug 17', active: 3.1, recovered: 3.0, icu: 38 },
            { day: 'Fri', date: 'Aug 18', active: 3.1, recovered: 3.0, icu: 38 },
            { day: 'Sat', date: 'Aug 19', active: 3.1, recovered: 3.0, icu: 38 },
            { day: 'Sun', date: 'Aug 20', active: 3.0, recovered: 2.9, icu: 37 }
          ]
        }
      ],
      indiaHubs: [
        {
          id: 'in_north',
          name: 'Delhi NCR & North Plains',
          country: 'India',
          coordinates: [77.10, 28.70],
          activeCases: '142,500',
          activeNumber: 142500,
          recoveryRate: 98.8,
          testPositivity: 2.8,
          icuOccupancy: 36,
          riskLevel: 'Low',
          trend: '-4.2%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 152, recovered: 150, icu: 40 },
            { day: 'Tue', date: 'Aug 15', active: 150, recovered: 148, icu: 39 },
            { day: 'Wed', date: 'Aug 16', active: 148, recovered: 146, icu: 38 },
            { day: 'Thu', date: 'Aug 17', active: 145, recovered: 143, icu: 37 },
            { day: 'Fri', date: 'Aug 18', active: 144, recovered: 142, icu: 36 },
            { day: 'Sat', date: 'Aug 19', active: 143, recovered: 141, icu: 36 },
            { day: 'Sun', date: 'Aug 20', active: 142, recovered: 140, icu: 35 }
          ]
        },
        {
          id: 'in_west',
          name: 'Maharashtra & Konkan Hub',
          country: 'India',
          coordinates: [73.85, 19.75],
          activeCases: '310,200',
          activeNumber: 310200,
          recoveryRate: 98.2,
          testPositivity: 4.6,
          icuOccupancy: 48,
          riskLevel: 'Moderate',
          trend: '+0.8%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 302, recovered: 296, icu: 46 },
            { day: 'Tue', date: 'Aug 15', active: 305, recovered: 299, icu: 47 },
            { day: 'Wed', date: 'Aug 16', active: 308, recovered: 302, icu: 47 },
            { day: 'Thu', date: 'Aug 17', active: 309, recovered: 303, icu: 48 },
            { day: 'Fri', date: 'Aug 18', active: 310, recovered: 304, icu: 48 },
            { day: 'Sat', date: 'Aug 19', active: 310, recovered: 304, icu: 48 },
            { day: 'Sun', date: 'Aug 20', active: 311, recovered: 305, icu: 49 }
          ]
        },
        {
          id: 'in_south',
          name: 'Kerala & Tamil Nadu Zone',
          country: 'India',
          coordinates: [77.59, 13.00],
          activeCases: '182,300',
          activeNumber: 182300,
          recoveryRate: 99.1,
          testPositivity: 2.1,
          icuOccupancy: 28,
          riskLevel: 'Low',
          trend: '-5.1%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 194, recovered: 192, icu: 32 },
            { day: 'Tue', date: 'Aug 15', active: 191, recovered: 189, icu: 31 },
            { day: 'Wed', date: 'Aug 16', active: 188, recovered: 186, icu: 30 },
            { day: 'Thu', date: 'Aug 17', active: 185, recovered: 183, icu: 29 },
            { day: 'Fri', date: 'Aug 18', active: 183, recovered: 181, icu: 28 },
            { day: 'Sat', date: 'Aug 19', active: 182, recovered: 180, icu: 28 },
            { day: 'Sun', date: 'Aug 20', active: 180, recovered: 178, icu: 27 }
          ]
        }
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
        {
          id: 'g_india',
          name: 'South Asia (India Hub)',
          country: 'India',
          coordinates: [78.96, 20.59],
          activeCases: '2.8 Million TB',
          activeNumber: 2800000,
          recoveryRate: 88.4,
          testPositivity: 5.8,
          icuOccupancy: 58,
          riskLevel: 'Moderate',
          trend: '-2.4%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 2.88, recovered: 2.54, icu: 60 },
            { day: 'Tue', date: 'Aug 15', active: 2.86, recovered: 2.55, icu: 59 },
            { day: 'Wed', date: 'Aug 16', active: 2.84, recovered: 2.56, icu: 59 },
            { day: 'Thu', date: 'Aug 17', active: 2.82, recovered: 2.57, icu: 58 },
            { day: 'Fri', date: 'Aug 18', active: 2.81, recovered: 2.58, icu: 58 },
            { day: 'Sat', date: 'Aug 19', active: 2.80, recovered: 2.59, icu: 58 },
            { day: 'Sun', date: 'Aug 20', active: 2.78, recovered: 2.60, icu: 57 }
          ]
        },
        {
          id: 'g_africa',
          name: 'Sub-Saharan Africa',
          country: 'South Africa',
          coordinates: [24.67, -28.47],
          activeCases: '2.4 Million TB',
          activeNumber: 2400000,
          recoveryRate: 82.1,
          testPositivity: 7.9,
          icuOccupancy: 72,
          riskLevel: 'High',
          trend: '+0.6%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 2.37, recovered: 1.94, icu: 71 },
            { day: 'Tue', date: 'Aug 15', active: 2.38, recovered: 1.95, icu: 71 },
            { day: 'Wed', date: 'Aug 16', active: 2.39, recovered: 1.96, icu: 72 },
            { day: 'Thu', date: 'Aug 17', active: 2.40, recovered: 1.97, icu: 72 },
            { day: 'Fri', date: 'Aug 18', active: 2.40, recovered: 1.97, icu: 72 },
            { day: 'Sat', date: 'Aug 19', active: 2.41, recovered: 1.98, icu: 73 },
            { day: 'Sun', date: 'Aug 20', active: 2.42, recovered: 1.98, icu: 73 }
          ]
        },
        {
          id: 'g_europe',
          name: 'European Region (WHO EURO)',
          country: 'Germany',
          coordinates: [10.45, 51.16],
          activeCases: '240,000 TB',
          activeNumber: 240000,
          recoveryRate: 92.4,
          testPositivity: 1.4,
          icuOccupancy: 34,
          riskLevel: 'Low',
          trend: '-4.1%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 252, recovered: 232, icu: 36 },
            { day: 'Tue', date: 'Aug 15', active: 249, recovered: 233, icu: 35 },
            { day: 'Wed', date: 'Aug 16', active: 246, recovered: 234, icu: 35 },
            { day: 'Thu', date: 'Aug 17', active: 243, recovered: 235, icu: 34 },
            { day: 'Fri', date: 'Aug 18', active: 241, recovered: 236, icu: 34 },
            { day: 'Sat', date: 'Aug 19', active: 240, recovered: 236, icu: 34 },
            { day: 'Sun', date: 'Aug 20', active: 238, recovered: 237, icu: 33 }
          ]
        }
      ],
      indiaHubs: [
        {
          id: 'in_north',
          name: 'Northern States (UP, Delhi, Bihar)',
          country: 'India',
          coordinates: [77.10, 28.70],
          activeCases: '940,000',
          activeNumber: 940000,
          recoveryRate: 86.8,
          testPositivity: 6.2,
          icuOccupancy: 61,
          riskLevel: 'Moderate',
          trend: '-1.2%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 955, recovered: 828, icu: 63 },
            { day: 'Tue', date: 'Aug 15', active: 950, recovered: 831, icu: 62 },
            { day: 'Wed', date: 'Aug 16', active: 947, recovered: 834, icu: 62 },
            { day: 'Thu', date: 'Aug 17', active: 944, recovered: 836, icu: 61 },
            { day: 'Fri', date: 'Aug 18', active: 942, recovered: 838, icu: 61 },
            { day: 'Sat', date: 'Aug 19', active: 940, recovered: 840, icu: 61 },
            { day: 'Sun', date: 'Aug 20', active: 938, recovered: 842, icu: 60 }
          ]
        },
        {
          id: 'in_south',
          name: 'Southern States (Kerala, TN, Karnataka)',
          country: 'India',
          coordinates: [77.59, 13.00],
          activeCases: '480,000',
          activeNumber: 480000,
          recoveryRate: 93.1,
          testPositivity: 3.1,
          icuOccupancy: 42,
          riskLevel: 'Low',
          trend: '-3.8%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 501, recovered: 466, icu: 45 },
            { day: 'Tue', date: 'Aug 15', active: 496, recovered: 468, icu: 44 },
            { day: 'Wed', date: 'Aug 16', active: 492, recovered: 470, icu: 43 },
            { day: 'Thu', date: 'Aug 17', active: 487, recovered: 472, icu: 43 },
            { day: 'Fri', date: 'Aug 18', active: 483, recovered: 474, icu: 42 },
            { day: 'Sat', date: 'Aug 19', active: 480, recovered: 475, icu: 42 },
            { day: 'Sun', date: 'Aug 20', active: 476, recovered: 477, icu: 41 }
          ]
        }
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
        {
          id: 'g_africa',
          name: 'Central & West Africa (Endemic Focus)',
          country: 'DR Congo',
          coordinates: [21.75, -4.03],
          activeCases: '24,800',
          activeNumber: 24800,
          recoveryRate: 93.2,
          testPositivity: 12.4,
          icuOccupancy: 78,
          riskLevel: 'High',
          trend: '+4.2%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 23.6, recovered: 22.0, icu: 75 },
            { day: 'Tue', date: 'Aug 15', active: 23.9, recovered: 22.2, icu: 76 },
            { day: 'Wed', date: 'Aug 16', active: 24.2, recovered: 22.5, icu: 76 },
            { day: 'Thu', date: 'Aug 17', active: 24.4, recovered: 22.8, icu: 77 },
            { day: 'Fri', date: 'Aug 18', active: 24.6, recovered: 23.0, icu: 77 },
            { day: 'Sat', date: 'Aug 19', active: 24.8, recovered: 23.1, icu: 78 },
            { day: 'Sun', date: 'Aug 20', active: 25.1, recovered: 23.4, icu: 79 }
          ]
        },
        {
          id: 'g_europe',
          name: 'European Union (ECDC Alert)',
          country: 'Sweden',
          coordinates: [18.64, 60.12],
          activeCases: '1,240',
          activeNumber: 1240,
          recoveryRate: 98.4,
          testPositivity: 1.2,
          icuOccupancy: 18,
          riskLevel: 'Low',
          trend: '-1.1%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 1.28, recovered: 1.25, icu: 20 },
            { day: 'Tue', date: 'Aug 15', active: 1.27, recovered: 1.25, icu: 19 },
            { day: 'Wed', date: 'Aug 16', active: 1.26, recovered: 1.24, icu: 19 },
            { day: 'Thu', date: 'Aug 17', active: 1.25, recovered: 1.23, icu: 18 },
            { day: 'Fri', date: 'Aug 18', active: 1.24, recovered: 1.22, icu: 18 },
            { day: 'Sat', date: 'Aug 19', active: 1.24, recovered: 1.22, icu: 18 },
            { day: 'Sun', date: 'Aug 20', active: 1.23, recovered: 1.21, icu: 17 }
          ]
        }
      ],
      indiaHubs: [
        {
          id: 'in_south',
          name: 'Kerala Surveillance (Airport Triage)',
          country: 'India',
          coordinates: [76.27, 10.85],
          activeCases: '14 Isolated',
          activeNumber: 14,
          recoveryRate: 100.0,
          testPositivity: 0.4,
          icuOccupancy: 12,
          riskLevel: 'Low',
          trend: '0.0%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 14, recovered: 14, icu: 12 },
            { day: 'Tue', date: 'Aug 15', active: 14, recovered: 14, icu: 12 },
            { day: 'Wed', date: 'Aug 16', active: 14, recovered: 14, icu: 12 },
            { day: 'Thu', date: 'Aug 17', active: 14, recovered: 14, icu: 12 },
            { day: 'Fri', date: 'Aug 18', active: 14, recovered: 14, icu: 12 },
            { day: 'Sat', date: 'Aug 19', active: 14, recovered: 14, icu: 12 },
            { day: 'Sun', date: 'Aug 20', active: 14, recovered: 14, icu: 12 }
          ]
        }
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
        {
          id: 'g_india',
          name: 'South Asia (India Hub)',
          country: 'India',
          coordinates: [78.96, 20.59],
          activeCases: '1.2 Million',
          activeNumber: 1200000,
          recoveryRate: 71.4,
          testPositivity: 8.4,
          icuOccupancy: 74,
          riskLevel: 'High',
          trend: '+1.6%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 1.16, recovered: 0.82, icu: 72 },
            { day: 'Tue', date: 'Aug 15', active: 1.17, recovered: 0.83, icu: 73 },
            { day: 'Wed', date: 'Aug 16', active: 1.18, recovered: 0.84, icu: 73 },
            { day: 'Thu', date: 'Aug 17', active: 1.19, recovered: 0.85, icu: 74 },
            { day: 'Fri', date: 'Aug 18', active: 1.20, recovered: 0.85, icu: 74 },
            { day: 'Sat', date: 'Aug 19', active: 1.20, recovered: 0.86, icu: 74 },
            { day: 'Sun', date: 'Aug 20', active: 1.21, recovered: 0.86, icu: 75 }
          ]
        },
        {
          id: 'g_europe',
          name: 'European Union (ECDC Zone)',
          country: 'Greece',
          coordinates: [21.82, 39.07],
          activeCases: '420,000',
          activeNumber: 420000,
          recoveryRate: 78.2,
          testPositivity: 4.2,
          icuOccupancy: 56,
          riskLevel: 'Moderate',
          trend: '-1.0%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 432, recovered: 338, icu: 58 },
            { day: 'Tue', date: 'Aug 15', active: 429, recovered: 339, icu: 57 },
            { day: 'Wed', date: 'Aug 16', active: 426, recovered: 340, icu: 57 },
            { day: 'Thu', date: 'Aug 17', active: 423, recovered: 341, icu: 56 },
            { day: 'Fri', date: 'Aug 18', active: 421, recovered: 342, icu: 56 },
            { day: 'Sat', date: 'Aug 19', active: 420, recovered: 342, icu: 56 },
            { day: 'Sun', date: 'Aug 20', active: 418, recovered: 343, icu: 55 }
          ]
        }
      ],
      indiaHubs: [
        {
          id: 'in_north',
          name: 'North Tertiary Care Centers',
          country: 'India',
          coordinates: [77.10, 28.70],
          activeCases: '340,000',
          activeNumber: 340000,
          recoveryRate: 70.8,
          testPositivity: 8.9,
          icuOccupancy: 76,
          riskLevel: 'High',
          trend: '+1.4%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 332, recovered: 235, icu: 74 },
            { day: 'Tue', date: 'Aug 15', active: 335, recovered: 237, icu: 75 },
            { day: 'Wed', date: 'Aug 16', active: 338, recovered: 239, icu: 75 },
            { day: 'Thu', date: 'Aug 17', active: 339, recovered: 240, icu: 76 },
            { day: 'Fri', date: 'Aug 18', active: 340, recovered: 241, icu: 76 },
            { day: 'Sat', date: 'Aug 19', active: 340, recovered: 241, icu: 76 },
            { day: 'Sun', date: 'Aug 20', active: 342, recovered: 242, icu: 77 }
          ]
        },
        {
          id: 'in_south',
          name: 'South Tertiary Care Centers',
          country: 'India',
          coordinates: [77.59, 13.00],
          activeCases: '260,000',
          activeNumber: 260000,
          recoveryRate: 76.4,
          testPositivity: 5.6,
          icuOccupancy: 61,
          riskLevel: 'Moderate',
          trend: '-0.4%',
          trajectory: [
            { day: 'Mon', date: 'Aug 14', active: 264, recovered: 201, icu: 62 },
            { day: 'Tue', date: 'Aug 15', active: 262, recovered: 202, icu: 62 },
            { day: 'Wed', date: 'Aug 16', active: 261, recovered: 203, icu: 61 },
            { day: 'Thu', date: 'Aug 17', active: 260, recovered: 204, icu: 61 },
            { day: 'Fri', date: 'Aug 18', active: 260, recovered: 204, icu: 61 },
            { day: 'Sat', date: 'Aug 19', active: 259, recovered: 205, icu: 60 },
            { day: 'Sun', date: 'Aug 20', active: 258, recovered: 206, icu: 60 }
          ]
        }
      ]
    }
  ];

  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>('ihd');
  const [mapScope, setMapScope] = useState<'global' | 'india'>('global');
  const [selectedHubId, setSelectedHubId] = useState<string>('g_india');
  const [hoveredHub, setHoveredHub] = useState<RegionalHub | null>(null);

  // Graph Interactivity State
  const [activeGraphTab, setActiveGraphTab] = useState<'active' | 'recovery' | 'icu'>('active');
  const [hoveredGraphIndex, setHoveredGraphIndex] = useState<number | null>(5); // defaults to Sat / current

  // Zoom & Pan state
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 15]);

  const activeDisease = diseases.find(d => d.id === selectedDiseaseId) || diseases[0];
  const activeHubList = mapScope === 'global' ? activeDisease.globalHubs : activeDisease.indiaHubs;
  const activeHub = activeHubList.find(h => h.id === selectedHubId) || activeHubList[0];

  const handleSelectDisease = (id: string) => {
    setSelectedDiseaseId(id);
    const d = diseases.find(item => item.id === id);
    if (d) {
      setSelectedHubId(mapScope === 'global' ? d.globalHubs[0]?.id : d.indiaHubs[0]?.id);
    }
  };

  const handleSwitchScope = (scope: 'global' | 'india') => {
    setMapScope(scope);
    if (scope === 'global') {
      setMapCenter([20, 15]);
      setZoomLevel(1);
      setSelectedHubId(activeDisease.globalHubs[0]?.id);
    } else {
      setMapCenter([79, 22]);
      setZoomLevel(3.2);
      setSelectedHubId(activeDisease.indiaHubs[0]?.id);
    }
  };

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev * 1.4, 5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev / 1.4, 1));
  const handleResetZoom = () => {
    if (mapScope === 'global') {
      setMapCenter([20, 15]);
      setZoomLevel(1);
    } else {
      setMapCenter([79, 22]);
      setZoomLevel(3.2);
    }
  };

  // Trajectory points for the active hub
  const trajectory = activeHub?.trajectory || [
    { day: 'Mon', date: 'Aug 14', active: 30, recovered: 25, icu: 60 },
    { day: 'Tue', date: 'Aug 15', active: 31, recovered: 26, icu: 61 },
    { day: 'Wed', date: 'Aug 16', active: 30, recovered: 26, icu: 60 },
    { day: 'Thu', date: 'Aug 17', active: 29, recovered: 27, icu: 59 },
    { day: 'Fri', date: 'Aug 18', active: 29, recovered: 27, icu: 58 },
    { day: 'Sat', date: 'Aug 19', active: 28, recovered: 28, icu: 58 },
    { day: 'Sun', date: 'Aug 20', active: 28, recovered: 28, icu: 57 }
  ];

  // Dynamic Full-Width SVG Curve Generation
  const svgWidth = 600;
  const svgHeight = 190;
  const paddingLeft = 24;
  const paddingRight = 24;
  const paddingTop = 18;
  const paddingBottom = 28;

  // Calculate points for the selected metric
  const graphValues = trajectory.map(p => 
    activeGraphTab === 'active' ? p.active : activeGraphTab === 'recovery' ? p.recovered : p.icu
  );
  const minVal = Math.min(...graphValues);
  const maxVal = Math.max(...graphValues);
  const range = (maxVal - minVal) || 1;
  // Use 15% margin so waves have bold, beautiful crests & troughs
  const plotMin = minVal - range * 0.15;
  const plotMax = maxVal + range * 0.15;
  const plotRange = (plotMax - plotMin) || 1;

  const points = trajectory.map((p, idx) => {
    const val = activeGraphTab === 'active' ? p.active : activeGraphTab === 'recovery' ? p.recovered : p.icu;
    const x = paddingLeft + (idx / (trajectory.length - 1)) * (svgWidth - paddingLeft - paddingRight);
    const y = svgHeight - paddingBottom - ((val - plotMin) / plotRange) * (svgHeight - paddingTop - paddingBottom);
    return { x, y, point: p, val };
  });

  // Construct smooth cubic SVG path covering entire left to right
  const pathD = points.reduce((acc, p, idx) => {
    if (idx === 0) return `M ${p.x} ${p.y}`;
    const prev = points[idx - 1];
    const cpX1 = prev.x + (p.x - prev.x) / 2;
    const cpY1 = prev.y;
    const cpX2 = prev.x + (p.x - prev.x) / 2;
    const cpY2 = p.y;
    return `${acc} C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p.x} ${p.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${svgHeight - paddingBottom} L ${points[0].x} ${svgHeight - paddingBottom} Z`;

  const hoveredPoint = hoveredGraphIndex !== null ? points[hoveredGraphIndex] : points[points.length - 1];

  const graphColor = activeGraphTab === 'active' ? '#008dc9' : activeGraphTab === 'recovery' ? '#16a34a' : '#ea580c';

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
      {/* 1. Unified WHO Header & Disease Selection Container */}
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        border: '1px solid #e2e8f0',
        padding: '24px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
      }}>
        {/* Top Header Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          borderBottom: '1px solid #f1f5f9',
          paddingBottom: '18px'
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
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Surveillance Telemetry</div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#008dc9' }}>194 Member States Active</div>
            </div>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
          </div>
        </div>

        {/* Disease Selection Section */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#008dc9', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Step 1: Select Monitored Condition
              </span>
              <h2 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: '2px 0 0 0' }}>
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
      </div>

      {/* 2. Step 2: Global Disease Intelligence & Interactive Map Viewport (Matching Height Grid) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.55fr 1.05fr',
        gap: '24px',
        alignItems: 'stretch'
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
          justifyContent: 'space-between',
          gap: '14px',
          height: '100%'
        }}>
          {/* Map Scope Selector & Title */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#008dc9', textTransform: 'uppercase' }}>
                Interactive Epidemiological Map
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

          {/* Map Canvas with TopoJSON Geographies & Floating Controls */}
          <div style={{
            background: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            position: 'relative',
            flex: 1,
            minHeight: '430px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Interactive Floating Zoom Controls */}
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              zIndex: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <button
                onClick={handleZoomIn}
                title="Zoom In"
                style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}
              >
                <Plus size={16} />
              </button>
              <button
                onClick={handleZoomOut}
                title="Zoom Out"
                style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}
              >
                <Minus size={16} />
              </button>
              <button
                onClick={handleResetZoom}
                title="Reset Map Orientation"
                style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ffffff', border: '1px solid #cbd5e1', color: '#008dc9', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}
              >
                <RotateCcw size={14} />
              </button>
            </div>

            {/* Hover Tooltip Overlay */}
            {hoveredHub && (
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                zIndex: 20,
                background: '#0f172a',
                color: '#ffffff',
                padding: '8px 14px',
                borderRadius: '10px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                fontSize: '11px',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontWeight: 800 }}>{hoveredHub.name}</span>
                <span style={{ color: '#38bdf8', fontWeight: 700 }}>{hoveredHub.activeCases}</span>
                <span style={{ color: '#4ade80' }}>{hoveredHub.recoveryRate}% Recovery</span>
              </div>
            )}

            <ComposableMap
              projection={mapScope === 'global' ? 'geoEqualEarth' : 'geoMercator'}
              projectionConfig={{ scale: mapScope === 'global' ? 145 : 680, center: mapCenter }}
              style={{ width: '100%', height: '100%' }}
            >
              <ZoomableGroup
                zoom={zoomLevel}
                center={mapCenter}
                onMoveEnd={(pos) => {
                  setMapCenter(pos.coordinates);
                  setZoomLevel(pos.zoom);
                }}
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
                          hover: { fill: '#cbd5e1', outline: 'none', cursor: 'pointer' },
                          pressed: { fill: '#94a3b8', outline: 'none' }
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Clean, Interactive Regional Hub Markers */}
                {activeHubList.map((hub) => {
                  const isSelected = hub.id === selectedHubId;
                  const bubbleRadius = isSelected ? 20 : 15;
                  const bubbleColor = hub.riskLevel === 'High' ? '#ef4444' : hub.riskLevel === 'Moderate' ? '#f59e0b' : '#008dc9';

                  return (
                    <Marker
                      key={hub.id}
                      coordinates={hub.coordinates}
                      onClick={() => setSelectedHubId(hub.id)}
                      onMouseEnter={() => setHoveredHub(hub)}
                      onMouseLeave={() => setHoveredHub(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Animated Ripple Halo */}
                      <circle
                        r={bubbleRadius + (isSelected ? 10 : 5)}
                        fill={bubbleColor}
                        opacity={isSelected ? 0.38 : 0.18}
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

                      {/* Label under bubble */}
                      <text
                        textAnchor="middle"
                        y={bubbleRadius + 13}
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
              </ZoomableGroup>
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
                <span>Moderate Watch</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                <span>High Alert</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#64748b' }}>
            <span>💡 Pan & zoom the map or click any node to inspect telemetry.</span>
            <button
              onClick={() => alert(`Downloading WHO Dataset for ${activeDisease.name}...`)}
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

        {/* Right Side: Interactive Regional Telemetry & Edge-to-Edge Graph Canvas */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '16px',
          height: '100%'
        }}>
          {/* Header & Risk Badge */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={14} color="#008dc9" />
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#008dc9', textTransform: 'uppercase' }}>
                  Active Hub Telemetry
                </span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 900, color: '#0f172a', margin: '4px 0 0 0' }}>
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

          {/* 4 Metric Badges */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Active Cases</div>
              <div style={{ fontSize: '15px', fontWeight: 900, color: '#0f172a', marginTop: '2px' }}>{activeHub?.activeCases}</div>
              <span style={{ fontSize: '10px', color: '#008dc9', fontWeight: 700 }}>Trend: {activeHub?.trend}</span>
            </div>
            <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Recovery Rate</div>
              <div style={{ fontSize: '15px', fontWeight: 900, color: '#16a34a', marginTop: '2px' }}>{activeHub?.recoveryRate}%</div>
              <span style={{ fontSize: '10px', color: '#16a34a', fontWeight: 700 }}>Optimal</span>
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

          {/* Interactive Graph Controls & Edge-to-Edge SVG Spline */}
          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a' }}>
                7-Day Interactive Epidemic Trajectory
              </span>
              
              {/* Metric Switcher Tabs for Graph */}
              <div style={{ display: 'flex', gap: '4px', background: '#f1f5f9', padding: '2px', borderRadius: '6px' }}>
                <button
                  onClick={() => setActiveGraphTab('active')}
                  style={{
                    padding: '3px 8px',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: '10px',
                    fontWeight: activeGraphTab === 'active' ? 800 : 600,
                    background: activeGraphTab === 'active' ? '#008dc9' : 'transparent',
                    color: activeGraphTab === 'active' ? '#ffffff' : '#64748b',
                    cursor: 'pointer'
                  }}
                >
                  Active
                </button>
                <button
                  onClick={() => setActiveGraphTab('recovery')}
                  style={{
                    padding: '3px 8px',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: '10px',
                    fontWeight: activeGraphTab === 'recovery' ? 800 : 600,
                    background: activeGraphTab === 'recovery' ? '#16a34a' : 'transparent',
                    color: activeGraphTab === 'recovery' ? '#ffffff' : '#64748b',
                    cursor: 'pointer'
                  }}
                >
                  Recovered
                </button>
                <button
                  onClick={() => setActiveGraphTab('icu')}
                  style={{
                    padding: '3px 8px',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: '10px',
                    fontWeight: activeGraphTab === 'icu' ? 800 : 600,
                    background: activeGraphTab === 'icu' ? '#ea580c' : 'transparent',
                    color: activeGraphTab === 'icu' ? '#ffffff' : '#64748b',
                    cursor: 'pointer'
                  }}
                >
                  ICU %
                </button>
              </div>
            </div>

            {/* Hover Live Data Readout */}
            <div style={{
              background: '#f8fafc',
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px',
              fontSize: '11px'
            }}>
              <span style={{ color: '#64748b', fontWeight: 600 }}>
                📅 {hoveredPoint.point.date} ({hoveredPoint.point.day})
              </span>
              <span style={{ fontWeight: 800, color: graphColor }}>
                {activeGraphTab === 'active' ? `${hoveredPoint.point.active}M Active` : activeGraphTab === 'recovery' ? `${hoveredPoint.point.recovered}M Recovered` : `${hoveredPoint.point.icu}% ICU Load`}
              </span>
            </div>

            {/* Full-Width Enhanced Interactive Clinical Spline Canvas */}
            <div style={{
              width: '100%',
              height: '210px',
              background: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              position: 'relative',
              overflow: 'hidden',
              padding: '8px 0'
            }}>
              <svg
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                preserveAspectRatio="none"
                style={{ width: '100%', height: '100%', display: 'block' }}
              >
                <defs>
                  <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={graphColor} stopOpacity="0.32" />
                    <stop offset="60%" stopColor={graphColor} stopOpacity="0.08" />
                    <stop offset="100%" stopColor={graphColor} stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={graphColor} stopOpacity="0.8" />
                    <stop offset="50%" stopColor={graphColor} stopOpacity="1" />
                    <stop offset="100%" stopColor={graphColor} stopOpacity="0.85" />
                  </linearGradient>
                </defs>

                {/* Subtle Background Gridlines */}
                {[0.25, 0.5, 0.75].map((ratio, gIdx) => {
                  const yPos = paddingTop + ratio * (svgHeight - paddingTop - paddingBottom);
                  return (
                    <line
                      key={gIdx}
                      x1={paddingLeft}
                      y1={yPos}
                      x2={svgWidth - paddingRight}
                      y2={yPos}
                      stroke="#f1f5f9"
                      strokeWidth="1.2"
                      strokeDasharray="4 4"
                    />
                  );
                })}

                {/* Area fill spanning full width */}
                <path d={areaD} fill="url(#curveGradient)" />

                {/* Secondary Baseline Comparison Spline (Dashed Green/Slate) */}
                <path
                  d={points.reduce((acc, p, idx) => {
                    const baselineY = svgHeight - paddingBottom - ((p.point.recovered - (minVal * 0.8)) / ((maxVal * 1.1) - (minVal * 0.8) || 1)) * (svgHeight - paddingTop - paddingBottom);
                    if (idx === 0) return `M ${p.x} ${baselineY}`;
                    const prev = points[idx - 1];
                    const prevBaseY = svgHeight - paddingBottom - ((prev.point.recovered - (minVal * 0.8)) / ((maxVal * 1.1) - (minVal * 0.8) || 1)) * (svgHeight - paddingTop - paddingBottom);
                    const cpX1 = prev.x + (p.x - prev.x) / 2;
                    const cpX2 = prev.x + (p.x - prev.x) / 2;
                    return `${acc} C ${cpX1} ${prevBaseY}, ${cpX2} ${baselineY}, ${p.x} ${baselineY}`;
                  }, '')}
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.6"
                />

                {/* Primary Spline Path with dynamic curvature */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="url(#lineGlow)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Vertical Guide Line on Hover */}
                {hoveredGraphIndex !== null && (
                  <line
                    x1={hoveredPoint.x}
                    y1={paddingTop}
                    x2={hoveredPoint.x}
                    y2={svgHeight - paddingBottom}
                    stroke={graphColor}
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    opacity="0.75"
                  />
                )}

                {/* Interactive Day Points */}
                {points.map((p, idx) => {
                  const isPointHovered = idx === hoveredGraphIndex;
                  return (
                    <g
                      key={idx}
                      onMouseEnter={() => setHoveredGraphIndex(idx)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Invisible larger hit area for easy hover */}
                      <circle cx={p.x} cy={p.y} r="22" fill="transparent" />

                      {/* Point Outer Pulsing Halo */}
                      {isPointHovered && (
                        <circle cx={p.x} cy={p.y} r="14" fill={graphColor} opacity="0.25" />
                      )}

                      {/* Point Core */}
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={isPointHovered ? 7 : 5}
                        fill={isPointHovered ? '#ffffff' : graphColor}
                        stroke={graphColor}
                        strokeWidth={isPointHovered ? 3.5 : 2}
                      />

                      {/* Day Label */}
                      <text
                        x={p.x}
                        y={svgHeight - 6}
                        textAnchor="middle"
                        fontSize="11"
                        fontWeight={isPointHovered ? "900" : "700"}
                        fill={isPointHovered ? graphColor : "#64748b"}
                      >
                        {p.point.day}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Step 3: WHO Official Precautions & Evidence-Based Guidelines Matrix */}
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
