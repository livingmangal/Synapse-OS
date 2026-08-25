import { DiseaseProfile, RegionalHub } from './types';
import { Heart, Bug, Wind, Biohazard, AlertTriangle, ShieldAlert, Activity, Flame, Skull } from 'lucide-react';

export const diseases: DiseaseProfile[] = [
  // 1. COVID-19 (SARS-CoV-2)
  {
    id: 'covid19',
    rank: 1,
    name: 'COVID-19 (SARS-CoV-2 JN.1 & KP.3.1.1 Variants)',
    shortName: 'COVID-19',
    category: 'Respiratory Viral Pandemic (WHO Monitored)',
    icon: Biohazard,
    annualDeaths: '7.05 Million Deaths',
    globalCases: '775.6 Million Confirmed',
    recoveryRate: 98.4,
    mortalityRate: 0.91,
    whoThreatLevel: 'High',
    transmission: 'Airborne aerosol respiratory droplet inhalation and micro-particle suspension.',
    precautions: [
      'N95 / FFP2 airborne filtration mask in healthcare settings and crowded indoor hubs',
      'Updated JN.1 / KP.2 monovalent mRNA booster immunization',
      'High-efficiency particulate air (HEPA) air exchange (> 6 air changes/hour)',
      'Immediate isolation upon symptom onset and rapid antigen / RT-PCR confirmation'
    ],
    diagnostics: [
      'Real-Time Reverse Transcription Polymerase Chain Reaction (RT-PCR)',
      'Rapid Chromatographic Antigen Immunoassay',
      'Whole Genome Sequencing (WGS) for lineage & immune-evasion surveillance',
      'High-resolution Chest CT (Ground-Glass Opacities scoring)'
    ],
    firstLineTherapy: [
      'Oral Paxlovid (Nirmatrelvir 300mg + Ritonavir 100mg) within 5 days',
      'Intravenous Remdesivir for high-risk progression or hospitalization',
      'Dexamethasone (6mg daily for 10 days) with supplemental oxygen'
    ],
    vaccineStatus: [
      'WHO SAGE recommended variant-adapted vaccines',
      'Over 13.5 Billion vaccine doses administered globally'
    ],
    globalHubs: [
      {
        id: 'g_india',
        name: 'India (South Asia Hub)',
        country: 'India',
        coordinates: [78.96, 20.59],
        activeCases: '1,240,000',
        activeNumber: 1240000,
        cumulativeCases: '45,035,400 Cases',
        deathsCount: '533,570 Deaths',
        recoveryRate: 98.8,
        testPositivity: 3.4,
        icuOccupancy: 42,
        riskLevel: 'Moderate',
        trend: '+2.1%',
        r0Index: 1.28,
        genomicStrain: 'Omicron JN.1.4',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 1.12, recovered: 43.8, icu: 38 },
          { day: 'Tue', date: 'Aug 15', active: 1.16, recovered: 43.9, icu: 39 },
          { day: 'Wed', date: 'Aug 16', active: 1.20, recovered: 44.0, icu: 41 },
          { day: 'Thu', date: 'Aug 17', active: 1.22, recovered: 44.1, icu: 42 },
          { day: 'Fri', date: 'Aug 18', active: 1.23, recovered: 44.2, icu: 42 },
          { day: 'Sat', date: 'Aug 19', active: 1.24, recovered: 44.3, icu: 42 },
          { day: 'Sun', date: 'Aug 20', active: 1.25, recovered: 44.4, icu: 43 }
        ]
      },
      {
        id: 'g_usa',
        name: 'United States (CDC Hub)',
        country: 'United States',
        coordinates: [-95.71, 37.09],
        activeCases: '840,000',
        activeNumber: 840000,
        cumulativeCases: '103,440,000 Cases',
        deathsCount: '1,192,000 Deaths',
        recoveryRate: 97.8,
        testPositivity: 5.6,
        icuOccupancy: 51,
        riskLevel: 'Moderate',
        trend: '+4.3%',
        r0Index: 1.34,
        genomicStrain: 'KP.3.1.1',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 780, recovered: 101.2, icu: 48 },
          { day: 'Tue', date: 'Aug 15', active: 800, recovered: 101.3, icu: 49 },
          { day: 'Wed', date: 'Aug 16', active: 815, recovered: 101.4, icu: 50 },
          { day: 'Thu', date: 'Aug 17', active: 825, recovered: 101.5, icu: 50 },
          { day: 'Fri', date: 'Aug 18', active: 835, recovered: 101.6, icu: 51 },
          { day: 'Sat', date: 'Aug 19', active: 840, recovered: 101.7, icu: 51 },
          { day: 'Sun', date: 'Aug 20', active: 845, recovered: 101.8, icu: 52 }
        ]
      },
      {
        id: 'g_brazil',
        name: 'Brazil (Fiocruz Hub)',
        country: 'Brazil',
        coordinates: [-51.92, -14.23],
        activeCases: '410,000',
        activeNumber: 410000,
        cumulativeCases: '38,100,000 Cases',
        deathsCount: '702,400 Deaths',
        recoveryRate: 96.9,
        testPositivity: 6.2,
        icuOccupancy: 58,
        riskLevel: 'Moderate',
        trend: '+1.4%',
        r0Index: 1.24,
        genomicStrain: 'JN.1 / BA.2.86',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 395, recovered: 37.1, icu: 55 },
          { day: 'Tue', date: 'Aug 15', active: 400, recovered: 37.2, icu: 56 },
          { day: 'Wed', date: 'Aug 16', active: 405, recovered: 37.2, icu: 57 },
          { day: 'Thu', date: 'Aug 17', active: 408, recovered: 37.3, icu: 57 },
          { day: 'Fri', date: 'Aug 18', active: 410, recovered: 37.4, icu: 58 },
          { day: 'Sat', date: 'Aug 19', active: 412, recovered: 37.4, icu: 58 },
          { day: 'Sun', date: 'Aug 20', active: 415, recovered: 37.5, icu: 59 }
        ]
      },
      {
        id: 'g_uk',
        name: 'United Kingdom (UKHSA)',
        country: 'United Kingdom',
        coordinates: [-1.17, 52.35],
        activeCases: '240,000',
        activeNumber: 240000,
        cumulativeCases: '24,900,000 Cases',
        deathsCount: '232,000 Deaths',
        recoveryRate: 98.6,
        testPositivity: 4.8,
        icuOccupancy: 46,
        riskLevel: 'Moderate',
        trend: '+3.1%',
        r0Index: 1.22,
        genomicStrain: 'KP.3',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 220, recovered: 24.3, icu: 42 },
          { day: 'Tue', date: 'Aug 15', active: 226, recovered: 24.4, icu: 43 },
          { day: 'Wed', date: 'Aug 16', active: 232, recovered: 24.4, icu: 44 },
          { day: 'Thu', date: 'Aug 17', active: 236, recovered: 24.5, icu: 45 },
          { day: 'Fri', date: 'Aug 18', active: 238, recovered: 24.5, icu: 45 },
          { day: 'Sat', date: 'Aug 19', active: 240, recovered: 24.6, icu: 46 },
          { day: 'Sun', date: 'Aug 20', active: 242, recovered: 24.6, icu: 46 }
        ]
      },
      {
        id: 'g_germany',
        name: 'Germany (Robert Koch Institut)',
        country: 'Germany',
        coordinates: [10.45, 51.16],
        activeCases: '310,000',
        activeNumber: 310000,
        cumulativeCases: '38,800,000 Cases',
        deathsCount: '184,000 Deaths',
        recoveryRate: 98.4,
        testPositivity: 3.9,
        icuOccupancy: 44,
        riskLevel: 'Low',
        trend: '-0.8%',
        r0Index: 1.05,
        genomicStrain: 'JN.1',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 320, recovered: 38.1, icu: 46 },
          { day: 'Tue', date: 'Aug 15', active: 318, recovered: 38.2, icu: 45 },
          { day: 'Wed', date: 'Aug 16', active: 315, recovered: 38.2, icu: 45 },
          { day: 'Thu', date: 'Aug 17', active: 312, recovered: 38.3, icu: 44 },
          { day: 'Fri', date: 'Aug 18', active: 310, recovered: 38.3, icu: 44 },
          { day: 'Sat', date: 'Aug 19', active: 310, recovered: 38.4, icu: 44 },
          { day: 'Sun', date: 'Aug 20', active: 308, recovered: 38.4, icu: 43 }
        ]
      },
      {
        id: 'g_france',
        name: 'France (Santé Publique)',
        country: 'France',
        coordinates: [2.21, 46.22],
        activeCases: '280,000',
        activeNumber: 280000,
        cumulativeCases: '40,100,000 Cases',
        deathsCount: '167,000 Deaths',
        recoveryRate: 98.2,
        testPositivity: 4.2,
        icuOccupancy: 47,
        riskLevel: 'Moderate',
        trend: '+1.5%',
        r0Index: 1.18,
        genomicStrain: 'KP.3',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 270, recovered: 39.4, icu: 44 },
          { day: 'Tue', date: 'Aug 15', active: 274, recovered: 39.5, icu: 45 },
          { day: 'Wed', date: 'Aug 16', active: 278, recovered: 39.5, icu: 46 },
          { day: 'Thu', date: 'Aug 17', active: 280, recovered: 39.6, icu: 47 },
          { day: 'Fri', date: 'Aug 18', active: 280, recovered: 39.6, icu: 47 },
          { day: 'Sat', date: 'Aug 19', active: 280, recovered: 39.7, icu: 47 },
          { day: 'Sun', date: 'Aug 20', active: 282, recovered: 39.7, icu: 48 }
        ]
      },
      {
        id: 'g_italy',
        name: 'Italy (Istituto Superiore di Sanità)',
        country: 'Italy',
        coordinates: [12.56, 41.87],
        activeCases: '190,000',
        activeNumber: 190000,
        cumulativeCases: '26,700,000 Cases',
        deathsCount: '196,000 Deaths',
        recoveryRate: 98.1,
        testPositivity: 4.6,
        icuOccupancy: 49,
        riskLevel: 'Moderate',
        trend: '+2.0%',
        r0Index: 1.20,
        genomicStrain: 'JN.1.4',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 180, recovered: 26.1, icu: 46 },
          { day: 'Tue', date: 'Aug 15', active: 184, recovered: 26.2, icu: 47 },
          { day: 'Wed', date: 'Aug 16', active: 188, recovered: 26.2, icu: 48 },
          { day: 'Thu', date: 'Aug 17', active: 190, recovered: 26.3, icu: 49 },
          { day: 'Fri', date: 'Aug 18', active: 190, recovered: 26.3, icu: 49 },
          { day: 'Sat', date: 'Aug 19', active: 190, recovered: 26.4, icu: 49 },
          { day: 'Sun', date: 'Aug 20', active: 192, recovered: 26.4, icu: 50 }
        ]
      },
      {
        id: 'g_japan',
        name: 'Japan (NIID Tokyo)',
        country: 'Japan',
        coordinates: [138.25, 36.20],
        activeCases: '320,000',
        activeNumber: 320000,
        cumulativeCases: '33,800,000 Cases',
        deathsCount: '74,690 Deaths',
        recoveryRate: 99.1,
        testPositivity: 3.0,
        icuOccupancy: 36,
        riskLevel: 'Low',
        trend: '-3.1%',
        r0Index: 0.98,
        genomicStrain: 'KP.3',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 340, recovered: 33.4, icu: 39 },
          { day: 'Tue', date: 'Aug 15', active: 335, recovered: 33.5, icu: 38 },
          { day: 'Wed', date: 'Aug 16', active: 330, recovered: 33.5, icu: 37 },
          { day: 'Thu', date: 'Aug 17', active: 326, recovered: 33.6, icu: 37 },
          { day: 'Fri', date: 'Aug 18', active: 322, recovered: 33.6, icu: 36 },
          { day: 'Sat', date: 'Aug 19', active: 320, recovered: 33.7, icu: 36 },
          { day: 'Sun', date: 'Aug 20', active: 318, recovered: 33.7, icu: 35 }
        ]
      },
      {
        id: 'g_skorea',
        name: 'South Korea (KDCA Seoul)',
        country: 'South Korea',
        coordinates: [127.76, 35.90],
        activeCases: '210,000',
        activeNumber: 210000,
        cumulativeCases: '34,500,000 Cases',
        deathsCount: '35,900 Deaths',
        recoveryRate: 99.3,
        testPositivity: 3.8,
        icuOccupancy: 38,
        riskLevel: 'Low',
        trend: '+1.2%',
        r0Index: 1.12,
        genomicStrain: 'KP.3',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 200, recovered: 34.1, icu: 36 },
          { day: 'Tue', date: 'Aug 15', active: 204, recovered: 34.2, icu: 37 },
          { day: 'Wed', date: 'Aug 16', active: 208, recovered: 34.2, icu: 37 },
          { day: 'Thu', date: 'Aug 17', active: 210, recovered: 34.3, icu: 38 },
          { day: 'Fri', date: 'Aug 18', active: 210, recovered: 34.3, icu: 38 },
          { day: 'Sat', date: 'Aug 19', active: 210, recovered: 34.4, icu: 38 },
          { day: 'Sun', date: 'Aug 20', active: 212, recovered: 34.4, icu: 39 }
        ]
      },
      {
        id: 'g_china',
        name: 'China (China CDC Beijing)',
        country: 'China',
        coordinates: [104.19, 35.86],
        activeCases: '480,000',
        activeNumber: 480000,
        cumulativeCases: '99,300,000 Cases',
        deathsCount: '121,900 Deaths',
        recoveryRate: 98.9,
        testPositivity: 2.8,
        icuOccupancy: 41,
        riskLevel: 'Low',
        trend: '-1.4%',
        r0Index: 1.02,
        genomicStrain: 'JN.1.1',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 495, recovered: 98.1, icu: 43 },
          { day: 'Tue', date: 'Aug 15', active: 490, recovered: 98.2, icu: 42 },
          { day: 'Wed', date: 'Aug 16', active: 486, recovered: 98.3, icu: 42 },
          { day: 'Thu', date: 'Aug 17', active: 483, recovered: 98.4, icu: 41 },
          { day: 'Fri', date: 'Aug 18', active: 481, recovered: 98.5, icu: 41 },
          { day: 'Sat', date: 'Aug 19', active: 480, recovered: 98.6, icu: 41 },
          { day: 'Sun', date: 'Aug 20', active: 478, recovered: 98.7, icu: 40 }
        ]
      },
      {
        id: 'g_safrica',
        name: 'South Africa (NICD Johannesburg)',
        country: 'South Africa',
        coordinates: [24.67, -28.47],
        activeCases: '140,000',
        activeNumber: 140000,
        cumulativeCases: '4,070,000 Cases',
        deathsCount: '102,590 Deaths',
        recoveryRate: 97.2,
        testPositivity: 5.1,
        icuOccupancy: 53,
        riskLevel: 'Moderate',
        trend: '+2.8%',
        r0Index: 1.25,
        genomicStrain: 'BA.2.86',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 130, recovered: 3.9, icu: 49 },
          { day: 'Tue', date: 'Aug 15', active: 134, recovered: 3.9, icu: 50 },
          { day: 'Wed', date: 'Aug 16', active: 138, recovered: 3.9, icu: 51 },
          { day: 'Thu', date: 'Aug 17', active: 140, recovered: 4.0, icu: 52 },
          { day: 'Fri', date: 'Aug 18', active: 140, recovered: 4.0, icu: 53 },
          { day: 'Sat', date: 'Aug 19', active: 140, recovered: 4.0, icu: 53 },
          { day: 'Sun', date: 'Aug 20', active: 142, recovered: 4.0, icu: 54 }
        ]
      },
      {
        id: 'g_australia',
        name: 'Australia (DOHAC Canberra)',
        country: 'Australia',
        coordinates: [133.77, -25.27],
        activeCases: '88,000',
        activeNumber: 88000,
        cumulativeCases: '11,800,000 Cases',
        deathsCount: '25,240 Deaths',
        recoveryRate: 99.2,
        testPositivity: 3.4,
        icuOccupancy: 32,
        riskLevel: 'Low',
        trend: '-2.0%',
        r0Index: 0.94,
        genomicStrain: 'KP.3',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 94, recovered: 11.6, icu: 35 },
          { day: 'Tue', date: 'Aug 15', active: 92, recovered: 11.6, icu: 34 },
          { day: 'Wed', date: 'Aug 16', active: 90, recovered: 11.7, icu: 33 },
          { day: 'Thu', date: 'Aug 17', active: 89, recovered: 11.7, icu: 33 },
          { day: 'Fri', date: 'Aug 18', active: 88, recovered: 11.7, icu: 32 },
          { day: 'Sat', date: 'Aug 19', active: 88, recovered: 11.8, icu: 32 },
          { day: 'Sun', date: 'Aug 20', active: 87, recovered: 11.8, icu: 31 }
        ]
      },
      {
        id: 'g_russia',
        name: 'Russia (Rospotrebnadzor Moscow)',
        country: 'Russia',
        coordinates: [105.31, 61.52],
        activeCases: '260,000',
        activeNumber: 260000,
        cumulativeCases: '24,100,000 Cases',
        deathsCount: '402,000 Deaths',
        recoveryRate: 97.4,
        testPositivity: 4.7,
        icuOccupancy: 54,
        riskLevel: 'Moderate',
        trend: '+1.8%',
        r0Index: 1.19,
        genomicStrain: 'JN.1',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 250, recovered: 23.4, icu: 51 },
          { day: 'Tue', date: 'Aug 15', active: 254, recovered: 23.5, icu: 52 },
          { day: 'Wed', date: 'Aug 16', active: 258, recovered: 23.5, icu: 53 },
          { day: 'Thu', date: 'Aug 17', active: 260, recovered: 23.6, icu: 54 },
          { day: 'Fri', date: 'Aug 18', active: 260, recovered: 23.6, icu: 54 },
          { day: 'Sat', date: 'Aug 19', active: 260, recovered: 23.7, icu: 54 },
          { day: 'Sun', date: 'Aug 20', active: 262, recovered: 23.7, icu: 55 }
        ]
      },
      {
        id: 'g_indonesia',
        name: 'Indonesia (Ministry of Health Jakarta)',
        country: 'Indonesia',
        coordinates: [113.92, -0.78],
        activeCases: '160,000',
        activeNumber: 160000,
        cumulativeCases: '6,820,000 Cases',
        deathsCount: '161,900 Deaths',
        recoveryRate: 97.5,
        testPositivity: 5.4,
        icuOccupancy: 50,
        riskLevel: 'Moderate',
        trend: '+2.4%',
        r0Index: 1.21,
        genomicStrain: 'JN.1',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 152, recovered: 6.5, icu: 47 },
          { day: 'Tue', date: 'Aug 15', active: 155, recovered: 6.6, icu: 48 },
          { day: 'Wed', date: 'Aug 16', active: 158, recovered: 6.6, icu: 49 },
          { day: 'Thu', date: 'Aug 17', active: 160, recovered: 6.6, icu: 50 },
          { day: 'Fri', date: 'Aug 18', active: 160, recovered: 6.7, icu: 50 },
          { day: 'Sat', date: 'Aug 19', active: 160, recovered: 6.7, icu: 50 },
          { day: 'Sun', date: 'Aug 20', active: 162, recovered: 6.7, icu: 51 }
        ]
      }
    ],
    indiaHubs: [
      {
        id: 'in_delhi',
        name: 'Delhi NCR (AIIMS / NCDC Hub)',
        country: 'India',
        coordinates: [77.20, 28.61],
        activeCases: '142,000',
        activeNumber: 142000,
        cumulativeCases: '2,040,000 Cases',
        deathsCount: '26,680 Deaths',
        recoveryRate: 98.6,
        testPositivity: 4.1,
        icuOccupancy: 48,
        riskLevel: 'Moderate',
        trend: '+2.2%',
        r0Index: 1.30,
        genomicStrain: 'JN.1.1',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 132, recovered: 1.88, icu: 44 },
          { day: 'Tue', date: 'Aug 15', active: 136, recovered: 1.89, icu: 45 },
          { day: 'Wed', date: 'Aug 16', active: 140, recovered: 1.89, icu: 47 },
          { day: 'Thu', date: 'Aug 17', active: 142, recovered: 1.90, icu: 48 },
          { day: 'Fri', date: 'Aug 18', active: 142, recovered: 1.90, icu: 48 },
          { day: 'Sat', date: 'Aug 19', active: 142, recovered: 1.91, icu: 48 },
          { day: 'Sun', date: 'Aug 20', active: 144, recovered: 1.91, icu: 49 }
        ]
      },
      {
        id: 'in_maha',
        name: 'Maharashtra (Mumbai & Pune Hub)',
        country: 'India',
        coordinates: [72.87, 19.07],
        activeCases: '280,000',
        activeNumber: 280000,
        cumulativeCases: '8,170,000 Cases',
        deathsCount: '148,560 Deaths',
        recoveryRate: 98.2,
        testPositivity: 4.8,
        icuOccupancy: 52,
        riskLevel: 'Moderate',
        trend: '+3.1%',
        r0Index: 1.34,
        genomicStrain: 'JN.1.4',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 260, recovered: 7.7, icu: 48 },
          { day: 'Tue', date: 'Aug 15', active: 268, recovered: 7.8, icu: 49 },
          { day: 'Wed', date: 'Aug 16', active: 275, recovered: 7.8, icu: 51 },
          { day: 'Thu', date: 'Aug 17', active: 278, recovered: 7.8, icu: 52 },
          { day: 'Fri', date: 'Aug 18', active: 280, recovered: 7.9, icu: 52 },
          { day: 'Sat', date: 'Aug 19', active: 280, recovered: 7.9, icu: 52 },
          { day: 'Sun', date: 'Aug 20', active: 284, recovered: 7.9, icu: 53 }
        ]
      },
      {
        id: 'in_karnataka',
        name: 'Karnataka (Bengaluru Tech Hub)',
        country: 'India',
        coordinates: [77.59, 12.97],
        activeCases: '160,000',
        activeNumber: 160000,
        cumulativeCases: '4,080,000 Cases',
        deathsCount: '40,350 Deaths',
        recoveryRate: 98.9,
        testPositivity: 3.2,
        icuOccupancy: 41,
        riskLevel: 'Low',
        trend: '+0.9%',
        r0Index: 1.14,
        genomicStrain: 'JN.1',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 154, recovered: 3.88, icu: 39 },
          { day: 'Tue', date: 'Aug 15', active: 156, recovered: 3.89, icu: 40 },
          { day: 'Wed', date: 'Aug 16', active: 158, recovered: 3.90, icu: 40 },
          { day: 'Thu', date: 'Aug 17', active: 160, recovered: 3.90, icu: 41 },
          { day: 'Fri', date: 'Aug 18', active: 160, recovered: 3.91, icu: 41 },
          { day: 'Sat', date: 'Aug 19', active: 160, recovered: 3.91, icu: 41 },
          { day: 'Sun', date: 'Aug 20', active: 162, recovered: 3.92, icu: 42 }
        ]
      },
      {
        id: 'in_kerala',
        name: 'Kerala (Kozhikode & Kochi Hub)',
        country: 'India',
        coordinates: [76.27, 9.93],
        activeCases: '185,000',
        activeNumber: 185000,
        cumulativeCases: '6,900,000 Cases',
        deathsCount: '72,050 Deaths',
        recoveryRate: 98.9,
        testPositivity: 3.6,
        icuOccupancy: 45,
        riskLevel: 'Moderate',
        trend: '+1.6%',
        r0Index: 1.18,
        genomicStrain: 'JN.1',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 178, recovered: 6.64, icu: 43 },
          { day: 'Tue', date: 'Aug 15', active: 180, recovered: 6.65, icu: 44 },
          { day: 'Wed', date: 'Aug 16', active: 183, recovered: 6.66, icu: 44 },
          { day: 'Thu', date: 'Aug 17', active: 185, recovered: 6.67, icu: 45 },
          { day: 'Fri', date: 'Aug 18', active: 185, recovered: 6.67, icu: 45 },
          { day: 'Sat', date: 'Aug 19', active: 185, recovered: 6.68, icu: 45 },
          { day: 'Sun', date: 'Aug 20', active: 187, recovered: 6.68, icu: 46 }
        ]
      },
      {
        id: 'in_bengal',
        name: 'West Bengal (Kolkata Hub)',
        country: 'India',
        coordinates: [88.36, 22.57],
        activeCases: '110,000',
        activeNumber: 110000,
        cumulativeCases: '2,120,000 Cases',
        deathsCount: '21,550 Deaths',
        recoveryRate: 98.8,
        testPositivity: 3.1,
        icuOccupancy: 39,
        riskLevel: 'Low',
        trend: '-0.5%',
        r0Index: 1.06,
        genomicStrain: 'JN.1',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 114, recovered: 1.98, icu: 41 },
          { day: 'Tue', date: 'Aug 15', active: 112, recovered: 1.99, icu: 40 },
          { day: 'Wed', date: 'Aug 16', active: 111, recovered: 1.99, icu: 40 },
          { day: 'Thu', date: 'Aug 17', active: 110, recovered: 2.00, icu: 39 },
          { day: 'Fri', date: 'Aug 18', active: 110, recovered: 2.00, icu: 39 },
          { day: 'Sat', date: 'Aug 19', active: 110, recovered: 2.01, icu: 39 },
          { day: 'Sun', date: 'Aug 20', active: 109, recovered: 2.01, icu: 38 }
        ]
      },
      {
        id: 'in_tamilnadu',
        name: 'Tamil Nadu (Chennai Hub)',
        country: 'India',
        coordinates: [80.27, 13.08],
        activeCases: '135,000',
        activeNumber: 135000,
        cumulativeCases: '3,600,000 Cases',
        deathsCount: '38,080 Deaths',
        recoveryRate: 98.9,
        testPositivity: 3.3,
        icuOccupancy: 40,
        riskLevel: 'Low',
        trend: '+0.8%',
        r0Index: 1.12,
        genomicStrain: 'JN.1',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 130, recovered: 3.42, icu: 38 },
          { day: 'Tue', date: 'Aug 15', active: 132, recovered: 3.43, icu: 39 },
          { day: 'Wed', date: 'Aug 16', active: 134, recovered: 3.44, icu: 40 },
          { day: 'Thu', date: 'Aug 17', active: 135, recovered: 3.44, icu: 40 },
          { day: 'Fri', date: 'Aug 18', active: 135, recovered: 3.45, icu: 40 },
          { day: 'Sat', date: 'Aug 19', active: 135, recovered: 3.45, icu: 40 },
          { day: 'Sun', date: 'Aug 20', active: 136, recovered: 3.46, icu: 41 }
        ]
      }
    ]
  },

  // 2. HANTAVIRUS (HPS & HFRS)
  {
    id: 'hantavirus',
    rank: 2,
    name: 'Hantavirus (HPS & HFRS / Bunyavirales)',
    shortName: 'Hantavirus',
    category: 'Zoonotic Hemorrhagic & Pulmonary (38% CFR)',
    icon: AlertTriangle,
    annualDeaths: '1,850 Deaths',
    globalCases: '18,400 Cases Monitored',
    recoveryRate: 61.5,
    mortalityRate: 38.5,
    whoThreatLevel: 'High',
    transmission: 'Inhalation of aerosolized rodent excretions (saliva, urine, feces) from deer mice & rats.',
    precautions: [
      'Avoid sweeping rodent-infested areas; mist with 10% bleach solution before wiping',
      'Seal home entry points greater than 1/4 inch with steel wool and cement',
      'Wear N95 / HEPA respirator during rural barn or grain silo cleanouts',
      'Rodent population trapping and environmental sanitation'
    ],
    diagnostics: [
      'Serum IgM/IgG ELISA for Hantavirus nucleocapsid antigen',
      'Reverse-Transcriptase PCR on blood or lung tissue biopsy',
      'Chest X-Ray showing bilateral interstitial pulmonary edema'
    ],
    firstLineTherapy: [
      'Immediate Intensive Care Unit (ICU) admission with early mechanical ventilation',
      'Extracorporeal Membrane Oxygenation (ECMO) for refractory hypoxemic collapse',
      'Meticulous fluid balance management'
    ],
    vaccineStatus: [
      'Inactivated HFRS vaccines licensed in China and South Korea (Hantavax)',
      'No FDA/EMA approved universal vaccine for Andes / Sin Nombre strains'
    ],
    globalHubs: [
      {
        id: 'g_chile',
        name: 'Chile & Argentina (Andes Virus Epicenter)',
        country: 'Chile',
        coordinates: [-70.66, -33.44],
        activeCases: '1,240',
        activeNumber: 1240,
        cumulativeCases: '4,820 Cases',
        deathsCount: '1,850 Deaths (38.4% CFR)',
        recoveryRate: 61.6,
        testPositivity: 8.4,
        icuOccupancy: 82,
        riskLevel: 'High',
        trend: '+6.2%',
        r0Index: 1.45,
        genomicStrain: 'Andes Orthohantavirus (ANDV)',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 1120, recovered: 2800, icu: 76 },
          { day: 'Tue', date: 'Aug 15', active: 1150, recovered: 2840, icu: 78 },
          { day: 'Wed', date: 'Aug 16', active: 1180, recovered: 2880, icu: 80 },
          { day: 'Thu', date: 'Aug 17', active: 1200, recovered: 2910, icu: 81 },
          { day: 'Fri', date: 'Aug 18', active: 1220, recovered: 2940, icu: 81 },
          { day: 'Sat', date: 'Aug 19', active: 1240, recovered: 2970, icu: 82 },
          { day: 'Sun', date: 'Aug 20', active: 1260, recovered: 3000, icu: 83 }
        ]
      },
      {
        id: 'g_usa_fourcorners',
        name: 'US Four Corners (Sin Nombre Strain)',
        country: 'United States',
        coordinates: [-109.04, 37.00],
        activeCases: '420',
        activeNumber: 420,
        cumulativeCases: '1,840 Cases',
        deathsCount: '680 Deaths (37% CFR)',
        recoveryRate: 63.0,
        testPositivity: 6.8,
        icuOccupancy: 78,
        riskLevel: 'Moderate',
        trend: '+2.8%',
        r0Index: 1.22,
        genomicStrain: 'Sin Nombre Virus (SNV)',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 390, recovered: 1120, icu: 74 },
          { day: 'Tue', date: 'Aug 15', active: 400, recovered: 1130, icu: 75 },
          { day: 'Wed', date: 'Aug 16', active: 408, recovered: 1140, icu: 76 },
          { day: 'Thu', date: 'Aug 17', active: 414, recovered: 1150, icu: 77 },
          { day: 'Fri', date: 'Aug 18', active: 418, recovered: 1155, icu: 78 },
          { day: 'Sat', date: 'Aug 19', active: 420, recovered: 1160, icu: 78 },
          { day: 'Sun', date: 'Aug 20', active: 424, recovered: 1165, icu: 79 }
        ]
      },
      {
        id: 'g_china_shaanxi',
        name: 'China (Shaanxi & Hubei HFRS Zone)',
        country: 'China',
        coordinates: [108.94, 34.34],
        activeCases: '4,800',
        activeNumber: 4800,
        cumulativeCases: '12,400 Cases',
        deathsCount: '1,120 Deaths',
        recoveryRate: 91.0,
        testPositivity: 4.5,
        icuOccupancy: 66,
        riskLevel: 'Moderate',
        trend: '-1.4%',
        r0Index: 1.15,
        genomicStrain: 'Hantaan Virus (HTNV)',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 4950, recovered: 10800, icu: 69 },
          { day: 'Tue', date: 'Aug 15', active: 4900, recovered: 10900, icu: 68 },
          { day: 'Wed', date: 'Aug 16', active: 4860, recovered: 11000, icu: 67 },
          { day: 'Thu', date: 'Aug 17', active: 4830, recovered: 11100, icu: 67 },
          { day: 'Fri', date: 'Aug 18', active: 4810, recovered: 11200, icu: 66 },
          { day: 'Sat', date: 'Aug 19', active: 4800, recovered: 11280, icu: 66 },
          { day: 'Sun', date: 'Aug 20', active: 4780, recovered: 11350, icu: 65 }
        ]
      },
      {
        id: 'g_skorea_hantaan',
        name: 'South Korea (Hantaan River Basin)',
        country: 'South Korea',
        coordinates: [127.12, 38.10],
        activeCases: '340',
        activeNumber: 340,
        cumulativeCases: '1,420 Cases',
        deathsCount: '118 Deaths',
        recoveryRate: 91.7,
        testPositivity: 3.8,
        icuOccupancy: 58,
        riskLevel: 'Low',
        trend: '-2.1%',
        r0Index: 1.08,
        genomicStrain: 'HTNV Seoul Strain',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 360, recovered: 1260, icu: 61 },
          { day: 'Tue', date: 'Aug 15', active: 355, recovered: 1270, icu: 60 },
          { day: 'Wed', date: 'Aug 16', active: 350, recovered: 1280, icu: 59 },
          { day: 'Thu', date: 'Aug 17', active: 345, recovered: 1290, icu: 59 },
          { day: 'Fri', date: 'Aug 18', active: 342, recovered: 1295, icu: 58 },
          { day: 'Sat', date: 'Aug 19', active: 340, recovered: 1300, icu: 58 },
          { day: 'Sun', date: 'Aug 20', active: 338, recovered: 1305, icu: 57 }
        ]
      },
      {
        id: 'g_germany_puumala',
        name: 'Germany (Bavaria & Baden-Württemberg)',
        country: 'Germany',
        coordinates: [11.58, 48.13],
        activeCases: '580',
        activeNumber: 580,
        cumulativeCases: '2,890 Cases',
        deathsCount: '14 Deaths (Nephropathia)',
        recoveryRate: 99.5,
        testPositivity: 4.2,
        icuOccupancy: 42,
        riskLevel: 'Low',
        trend: '+1.1%',
        r0Index: 1.05,
        genomicStrain: 'Puumala Virus (PUUV)',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 560, recovered: 2280, icu: 40 },
          { day: 'Tue', date: 'Aug 15', active: 565, recovered: 2290, icu: 41 },
          { day: 'Wed', date: 'Aug 16', active: 570, recovered: 2300, icu: 41 },
          { day: 'Thu', date: 'Aug 17', active: 575, recovered: 2310, icu: 42 },
          { day: 'Fri', date: 'Aug 18', active: 578, recovered: 2315, icu: 42 },
          { day: 'Sat', date: 'Aug 19', active: 580, recovered: 2320, icu: 42 },
          { day: 'Sun', date: 'Aug 20', active: 584, recovered: 2325, icu: 43 }
        ]
      }
    ],
    indiaHubs: [
      {
        id: 'in_tamilnadu_hanta',
        name: 'Tamil Nadu (Madurai Serosurveillance Unit)',
        country: 'India',
        coordinates: [78.11, 9.92],
        activeCases: '128',
        activeNumber: 128,
        cumulativeCases: '480 Cases',
        deathsCount: '38 Deaths',
        recoveryRate: 92.1,
        testPositivity: 3.2,
        icuOccupancy: 68,
        riskLevel: 'Moderate',
        trend: '+0.8%',
        r0Index: 1.18,
        genomicStrain: 'Thottapalayam Hantavirus',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 118, recovered: 420, icu: 64 },
          { day: 'Tue', date: 'Aug 15', active: 122, recovered: 426, icu: 65 },
          { day: 'Wed', date: 'Aug 16', active: 124, recovered: 432, icu: 66 },
          { day: 'Thu', date: 'Aug 17', active: 126, recovered: 438, icu: 67 },
          { day: 'Fri', date: 'Aug 18', active: 127, recovered: 440, icu: 68 },
          { day: 'Sat', date: 'Aug 19', active: 128, recovered: 442, icu: 68 },
          { day: 'Sun', date: 'Aug 20', active: 129, recovered: 445, icu: 69 }
        ]
      }
    ]
  },

  // 3. NIPAH VIRUS (NiV)
  {
    id: 'nipah',
    rank: 3,
    name: 'Nipah Virus (NiV Henipavirus Encephalitis)',
    shortName: 'Nipah Virus',
    category: 'High-Consequence Zoonotic Pathogen (68-75% CFR)',
    icon: Biohazard,
    annualDeaths: '19 Deaths (Surge Alert)',
    globalCases: '730 Cases Monitored',
    recoveryRate: 32.0,
    mortalityRate: 68.0,
    whoThreatLevel: 'Critical',
    transmission: 'Fruit bats (Pteropus), raw date palm sap, and close human-to-human bodily fluids.',
    precautions: [
      'Complete avoidance of consuming raw date palm sap or fallen fruits',
      'Level-4 Biosafety personal protective equipment (PPE) for healthcare staff',
      'Stringent 21-day quarantine of primary contacts'
    ],
    diagnostics: [
      'RT-PCR from throat swabs, CSF, and urine samples',
      'Serum IgM/IgG ELISA detection at NIV Pune',
      'Brain MRI showing punctate confluent T2 FLAIR lesions'
    ],
    firstLineTherapy: [
      'Monoclonal Antibody m102.4 emergency infusion',
      'Oral Ribavirin adjuvant therapy'
    ],
    vaccineStatus: [
      'WHO Priority Blueprint Pathogen (No licensed vaccine worldwide)',
      'CEPI-funded HeV-sG in Phase I trials'
    ],
    globalHubs: [
      {
        id: 'g_india_kerala',
        name: 'India (Kozhikode & Malappuram Outbreak)',
        country: 'India',
        coordinates: [75.78, 11.25],
        activeCases: '28 Quarantined',
        activeNumber: 28,
        cumulativeCases: '47 Confirmed',
        deathsCount: '19 Deaths (68% CFR)',
        recoveryRate: 32.1,
        testPositivity: 14.8,
        icuOccupancy: 88,
        riskLevel: 'High',
        trend: '+12.4%',
        r0Index: 1.62,
        genomicStrain: 'Nipah Indian Clade (NiV-I)',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 18, recovered: 12, icu: 82 },
          { day: 'Tue', date: 'Aug 15', active: 21, recovered: 12, icu: 84 },
          { day: 'Wed', date: 'Aug 16', active: 24, recovered: 13, icu: 86 },
          { day: 'Thu', date: 'Aug 17', active: 26, recovered: 14, icu: 87 },
          { day: 'Fri', date: 'Aug 18', active: 27, recovered: 14, icu: 88 },
          { day: 'Sat', date: 'Aug 19', active: 28, recovered: 15, icu: 88 },
          { day: 'Sun', date: 'Aug 20', active: 29, recovered: 15, icu: 89 }
        ]
      },
      {
        id: 'g_bangladesh_faridpur',
        name: 'Bangladesh (Faridpur & Rajshahi)',
        country: 'Bangladesh',
        coordinates: [89.84, 23.60],
        activeCases: '42 Quarantined',
        activeNumber: 42,
        cumulativeCases: '74 Confirmed',
        deathsCount: '52 Deaths (70% CFR)',
        recoveryRate: 29.8,
        testPositivity: 16.2,
        icuOccupancy: 92,
        riskLevel: 'High',
        trend: '+8.1%',
        r0Index: 1.58,
        genomicStrain: 'Nipah Bangladesh Clade (NiV-B)',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 34, recovered: 18, icu: 88 },
          { day: 'Tue', date: 'Aug 15', active: 37, recovered: 19, icu: 90 },
          { day: 'Wed', date: 'Aug 16', active: 39, recovered: 20, icu: 91 },
          { day: 'Thu', date: 'Aug 17', active: 40, recovered: 21, icu: 91 },
          { day: 'Fri', date: 'Aug 18', active: 41, recovered: 21, icu: 92 },
          { day: 'Sat', date: 'Aug 19', active: 42, recovered: 22, icu: 92 },
          { day: 'Sun', date: 'Aug 20', active: 43, recovered: 22, icu: 93 }
        ]
      },
      {
        id: 'g_malaysia_nipah',
        name: 'Malaysia (Sungai Nipah Historic Site)',
        country: 'Malaysia',
        coordinates: [101.97, 2.72],
        activeCases: '6 Monitored',
        activeNumber: 6,
        cumulativeCases: '265 Historical',
        deathsCount: '105 Deaths',
        recoveryRate: 60.4,
        testPositivity: 1.8,
        icuOccupancy: 34,
        riskLevel: 'Low',
        trend: 'Stable',
        r0Index: 0.90,
        genomicStrain: 'NiV-M Strain',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 6, recovered: 160, icu: 34 },
          { day: 'Tue', date: 'Aug 15', active: 6, recovered: 160, icu: 34 },
          { day: 'Wed', date: 'Aug 16', active: 6, recovered: 160, icu: 34 },
          { day: 'Thu', date: 'Aug 17', active: 6, recovered: 160, icu: 34 },
          { day: 'Fri', date: 'Aug 18', active: 6, recovered: 160, icu: 34 },
          { day: 'Sat', date: 'Aug 19', active: 6, recovered: 160, icu: 34 },
          { day: 'Sun', date: 'Aug 20', active: 6, recovered: 160, icu: 34 }
        ]
      }
    ],
    indiaHubs: [
      {
        id: 'in_kerala_nipah',
        name: 'Kerala (Kozhikode Containment Zone)',
        country: 'India',
        coordinates: [75.78, 11.25],
        activeCases: '28 Quarantined',
        activeNumber: 28,
        cumulativeCases: '47 Confirmed',
        deathsCount: '19 Deaths',
        recoveryRate: 32.1,
        testPositivity: 14.8,
        icuOccupancy: 88,
        riskLevel: 'High',
        trend: '+12.4%',
        r0Index: 1.62,
        genomicStrain: 'NiV-I',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 18, recovered: 12, icu: 82 },
          { day: 'Tue', date: 'Aug 15', active: 21, recovered: 12, icu: 84 },
          { day: 'Wed', date: 'Aug 16', active: 24, recovered: 13, icu: 86 },
          { day: 'Thu', date: 'Aug 17', active: 26, recovered: 14, icu: 87 },
          { day: 'Fri', date: 'Aug 18', active: 27, recovered: 14, icu: 88 },
          { day: 'Sat', date: 'Aug 19', active: 28, recovered: 15, icu: 88 },
          { day: 'Sun', date: 'Aug 20', active: 29, recovered: 15, icu: 89 }
        ]
      }
    ]
  },

  // 4. AVIAN INFLUENZA (H5N1)
  {
    id: 'avian_flu',
    rank: 4,
    name: 'Avian Influenza A(H5N1 Clade 2.3.4.4b)',
    shortName: 'Bird Flu (H5N1)',
    category: 'Zoonotic Pandemic Threat (52% CFR in Humans)',
    icon: Wind,
    annualDeaths: '463 Human Deaths',
    globalCases: '890 Human Cases',
    recoveryRate: 48.0,
    mortalityRate: 52.0,
    whoThreatLevel: 'High',
    transmission: 'Direct contact with infected waterfowl, poultry, and unpasteurized raw dairy milk.',
    precautions: [
      'Mandatory PPE for dairy & poultry farm workers',
      'Strict consumption of only pasteurized milk and cooked poultry (> 74°C)'
    ],
    diagnostics: [
      'RT-PCR with H5 specific primer probes at reference laboratories',
      'Viral Genome Sequencing for PB2 E627K mammalian mutations'
    ],
    firstLineTherapy: [
      'Oral Oseltamivir (Tamiflu 150mg BID) within 48h',
      'IV Peramivir in critical cases'
    ],
    vaccineStatus: [
      'Stockpiled candidate vaccines (Audenz / CSL Seqirus)'
    ],
    globalHubs: [
      {
        id: 'g_usa_dairy',
        name: 'United States (Dairy Spillover Zone)',
        country: 'United States',
        coordinates: [-100.00, 40.00],
        activeCases: '184 Monitored',
        activeNumber: 184,
        cumulativeCases: '48 Confirmed',
        deathsCount: '1 Death',
        recoveryRate: 97.9,
        testPositivity: 7.2,
        icuOccupancy: 34,
        riskLevel: 'Moderate',
        trend: '+5.4%',
        r0Index: 1.14,
        genomicStrain: 'H5N1 Clade 2.3.4.4b B3.13',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 160, recovered: 42, icu: 30 },
          { day: 'Tue', date: 'Aug 15', active: 168, recovered: 43, icu: 31 },
          { day: 'Wed', date: 'Aug 16', active: 174, recovered: 44, icu: 32 },
          { day: 'Thu', date: 'Aug 17', active: 179, recovered: 45, icu: 33 },
          { day: 'Fri', date: 'Aug 18', active: 182, recovered: 46, icu: 33 },
          { day: 'Sat', date: 'Aug 19', active: 184, recovered: 47, icu: 34 },
          { day: 'Sun', date: 'Aug 20', active: 188, recovered: 47, icu: 34 }
        ]
      },
      {
        id: 'g_cambodia',
        name: 'Cambodia (Prey Veng Cluster)',
        country: 'Cambodia',
        coordinates: [104.92, 11.55],
        activeCases: '34 Confirmed',
        activeNumber: 34,
        cumulativeCases: '64 Cases',
        deathsCount: '41 Deaths (64% CFR)',
        recoveryRate: 36.0,
        testPositivity: 12.0,
        icuOccupancy: 84,
        riskLevel: 'High',
        trend: '+3.1%',
        r0Index: 1.38,
        genomicStrain: 'H5N1 Clade 2.3.2.1c',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 28, recovered: 21, icu: 80 },
          { day: 'Tue', date: 'Aug 15', active: 30, recovered: 22, icu: 81 },
          { day: 'Wed', date: 'Aug 16', active: 31, recovered: 22, icu: 82 },
          { day: 'Thu', date: 'Aug 17', active: 32, recovered: 23, icu: 83 },
          { day: 'Fri', date: 'Aug 18', active: 33, recovered: 23, icu: 83 },
          { day: 'Sat', date: 'Aug 19', active: 34, recovered: 23, icu: 84 },
          { day: 'Sun', date: 'Aug 20', active: 35, recovered: 24, icu: 85 }
        ]
      }
    ],
    indiaHubs: [
      {
        id: 'in_bengal_poultry',
        name: 'West Bengal & Assam Poultry Surveillance',
        country: 'India',
        coordinates: [88.36, 22.57],
        activeCases: '14 Monitored',
        activeNumber: 14,
        cumulativeCases: '3 Confirmed',
        deathsCount: '1 Death',
        recoveryRate: 66.7,
        testPositivity: 5.8,
        icuOccupancy: 62,
        riskLevel: 'Moderate',
        trend: '+1.2%',
        r0Index: 1.16,
        genomicStrain: 'H5N1 Clade 2.3.4.4b',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 11, recovered: 2, icu: 58 },
          { day: 'Tue', date: 'Aug 15', active: 12, recovered: 2, icu: 59 },
          { day: 'Wed', date: 'Aug 16', active: 13, recovered: 2, icu: 60 },
          { day: 'Thu', date: 'Aug 17', active: 13, recovered: 2, icu: 61 },
          { day: 'Fri', date: 'Aug 18', active: 14, recovered: 2, icu: 62 },
          { day: 'Sat', date: 'Aug 19', active: 14, recovered: 2, icu: 62 },
          { day: 'Sun', date: 'Aug 20', active: 15, recovered: 2, icu: 63 }
        ]
      }
    ]
  },

  // 5. MPOX (CLADE I & IB)
  {
    id: 'mpox',
    rank: 5,
    name: 'Mpox (Monkeypox Clade I & Clade Ib PHEIC)',
    shortName: 'Mpox Outbreak',
    category: 'WHO Public Health Emergency of International Concern',
    icon: Flame,
    annualDeaths: '740 Deaths',
    globalCases: '104,200 Cases',
    recoveryRate: 96.8,
    mortalityRate: 3.2,
    whoThreatLevel: 'High',
    transmission: 'Close skin-to-skin physical contact, respiratory droplets, and contaminated bedding.',
    precautions: [
      'Vaccination with 2-dose MVA-BN (JYNNEOS / Imvanex)',
      'Strict contact isolation until skin lesions crust'
    ],
    diagnostics: [
      'Real-Time PCR detection of Orthopoxvirus DNA'
    ],
    firstLineTherapy: [
      'Oral Tecovirimat (TPOXX 600mg BID for 14 days)'
    ],
    vaccineStatus: [
      'MVA-BN Bavarian Nordic vaccine deployed'
    ],
    globalHubs: [
      {
        id: 'g_drc_mpox',
        name: 'DR Congo (Equateur & South Kivu)',
        country: 'DR Congo',
        coordinates: [23.63, -2.87],
        activeCases: '18,400',
        activeNumber: 18400,
        cumulativeCases: '26,800 Cases',
        deathsCount: '724 Deaths (3.6% CFR)',
        recoveryRate: 94.2,
        testPositivity: 18.5,
        icuOccupancy: 76,
        riskLevel: 'High',
        trend: '+9.4%',
        r0Index: 1.48,
        genomicStrain: 'Clade Ib',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 16200, recovered: 7200, icu: 70 },
          { day: 'Tue', date: 'Aug 15', active: 16800, recovered: 7400, icu: 72 },
          { day: 'Wed', date: 'Aug 16', active: 17300, recovered: 7600, icu: 73 },
          { day: 'Thu', date: 'Aug 17', active: 17700, recovered: 7800, icu: 74 },
          { day: 'Fri', date: 'Aug 18', active: 18100, recovered: 8000, icu: 75 },
          { day: 'Sat', date: 'Aug 19', active: 18400, recovered: 8200, icu: 76 },
          { day: 'Sun', date: 'Aug 20', active: 18800, recovered: 8400, icu: 77 }
        ]
      },
      {
        id: 'g_burundi_mpox',
        name: 'Burundi (Bujumbura Focus)',
        country: 'Burundi',
        coordinates: [29.36, -3.38],
        activeCases: '1,420',
        activeNumber: 1420,
        cumulativeCases: '2,180 Cases',
        deathsCount: '18 Deaths',
        recoveryRate: 96.2,
        testPositivity: 14.1,
        icuOccupancy: 64,
        riskLevel: 'High',
        trend: '+11.2%',
        r0Index: 1.42,
        genomicStrain: 'Clade Ib',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 1200, recovered: 680, icu: 58 },
          { day: 'Tue', date: 'Aug 15', active: 1260, recovered: 700, icu: 60 },
          { day: 'Wed', date: 'Aug 16', active: 1310, recovered: 720, icu: 61 },
          { day: 'Thu', date: 'Aug 17', active: 1360, recovered: 735, icu: 62 },
          { day: 'Fri', date: 'Aug 18', active: 1390, recovered: 745, icu: 63 },
          { day: 'Sat', date: 'Aug 19', active: 1420, recovered: 755, icu: 64 },
          { day: 'Sun', date: 'Aug 20', active: 1460, recovered: 765, icu: 65 }
        ]
      }
    ],
    indiaHubs: [
      {
        id: 'in_delhi_mpox',
        name: 'Delhi NCR Isolation & Surveillance',
        country: 'India',
        coordinates: [77.10, 28.70],
        activeCases: '4 Isolated',
        activeNumber: 4,
        cumulativeCases: '6 Cases',
        deathsCount: '0 Deaths',
        recoveryRate: 100,
        testPositivity: 2.1,
        icuOccupancy: 32,
        riskLevel: 'Low',
        trend: 'Stable',
        r0Index: 0.92,
        genomicStrain: 'Clade Ib Travel Strain',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 3, recovered: 2, icu: 30 },
          { day: 'Tue', date: 'Aug 15', active: 3, recovered: 2, icu: 30 },
          { day: 'Wed', date: 'Aug 16', active: 4, recovered: 2, icu: 31 },
          { day: 'Thu', date: 'Aug 17', active: 4, recovered: 2, icu: 32 },
          { day: 'Fri', date: 'Aug 18', active: 4, recovered: 2, icu: 32 },
          { day: 'Sat', date: 'Aug 19', active: 4, recovered: 2, icu: 32 },
          { day: 'Sun', date: 'Aug 20', active: 4, recovered: 2, icu: 32 }
        ]
      }
    ]
  },

  // 6. DENGUE HEMORRHAGIC FEVER
  {
    id: 'dengue',
    rank: 6,
    name: 'Dengue Hemorrhagic Fever & Vector Surge',
    shortName: 'Dengue Fever',
    category: 'Arboviral Vector-Borne Pandemic (Aedes aegypti)',
    icon: Bug,
    annualDeaths: '8,400 Deaths',
    globalCases: '12.8 Million Cases',
    recoveryRate: 97.2,
    mortalityRate: 2.8,
    whoThreatLevel: 'High',
    transmission: 'Bite of infected female Aedes aegypti day-biting mosquitoes.',
    precautions: [
      'Eliminate stagnant water breeding sites weekly',
      'Application of DEET repellent on exposed skin'
    ],
    diagnostics: [
      'Dengue NS1 Antigen ELISA',
      'Serial Complete Blood Count (CBC) monitoring platelets'
    ],
    firstLineTherapy: [
      'Crystalloid fluid resuscitation',
      'Avoidance of NSAIDs and Aspirin'
    ],
    vaccineStatus: [
      'QDENGA (TAK-003) licensed in EU and Brazil'
    ],
    globalHubs: [
      {
        id: 'g_brazil_dengue',
        name: 'Brazil (Brasília & São Paulo)',
        country: 'Brazil',
        coordinates: [-47.92, -15.78],
        activeCases: '4,200,000',
        activeNumber: 4200000,
        cumulativeCases: '6,200,000 Cases',
        deathsCount: '4,800 Deaths',
        recoveryRate: 96.5,
        testPositivity: 14.2,
        icuOccupancy: 84,
        riskLevel: 'High',
        trend: '+14.2%',
        r0Index: 1.68,
        genomicStrain: 'DENV-1 & DENV-2',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 3.4, recovered: 1.8, icu: 76 },
          { day: 'Tue', date: 'Aug 15', active: 3.6, recovered: 1.9, icu: 78 },
          { day: 'Wed', date: 'Aug 16', active: 3.8, recovered: 2.0, icu: 80 },
          { day: 'Thu', date: 'Aug 17', active: 4.0, recovered: 2.0, icu: 82 },
          { day: 'Fri', date: 'Aug 18', active: 4.1, recovered: 2.1, icu: 83 },
          { day: 'Sat', date: 'Aug 19', active: 4.2, recovered: 2.1, icu: 84 },
          { day: 'Sun', date: 'Aug 20', active: 4.3, recovered: 2.2, icu: 85 }
        ]
      },
      {
        id: 'g_india_dengue',
        name: 'India (Monsoon Vector Matrix)',
        country: 'India',
        coordinates: [78.96, 20.59],
        activeCases: '142,000',
        activeNumber: 142000,
        cumulativeCases: '289,000 Cases',
        deathsCount: '310 Deaths',
        recoveryRate: 98.6,
        testPositivity: 8.5,
        icuOccupancy: 56,
        riskLevel: 'Moderate',
        trend: '+6.5%',
        r0Index: 1.42,
        genomicStrain: 'DENV-2 & DENV-3',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 122, recovered: 135, icu: 50 },
          { day: 'Tue', date: 'Aug 15', active: 128, recovered: 138, icu: 52 },
          { day: 'Wed', date: 'Aug 16', active: 134, recovered: 140, icu: 54 },
          { day: 'Thu', date: 'Aug 17', active: 138, recovered: 142, icu: 55 },
          { day: 'Fri', date: 'Aug 18', active: 140, recovered: 144, icu: 55 },
          { day: 'Sat', date: 'Aug 19', active: 142, recovered: 146, icu: 56 },
          { day: 'Sun', date: 'Aug 20', active: 145, recovered: 148, icu: 57 }
        ]
      }
    ],
    indiaHubs: [
      {
        id: 'in_delhi_dengue',
        name: 'Delhi NCR Monsoon Vector Zone',
        country: 'India',
        coordinates: [77.10, 28.70],
        activeCases: '48,000',
        activeNumber: 48000,
        cumulativeCases: '92,000 Cases',
        deathsCount: '84 Deaths',
        recoveryRate: 98.4,
        testPositivity: 9.2,
        icuOccupancy: 62,
        riskLevel: 'High',
        trend: '+8.4%',
        r0Index: 1.48,
        genomicStrain: 'DENV-2',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 38, recovered: 48, icu: 55 },
          { day: 'Tue', date: 'Aug 15', active: 41, recovered: 49, icu: 57 },
          { day: 'Wed', date: 'Aug 16', active: 44, recovered: 51, icu: 59 },
          { day: 'Thu', date: 'Aug 17', active: 46, recovered: 52, icu: 61 },
          { day: 'Fri', date: 'Aug 18', active: 47, recovered: 53, icu: 61 },
          { day: 'Sat', date: 'Aug 19', active: 48, recovered: 54, icu: 62 },
          { day: 'Sun', date: 'Aug 20', active: 50, recovered: 55, icu: 63 }
        ]
      }
    ]
  },

  // 7. MARBURG VIRUS
  {
    id: 'marburg',
    rank: 7,
    name: 'Marburg Virus Disease (MVD Filoviridae)',
    shortName: 'Marburg Virus',
    category: 'Filovirus Hemorrhagic Fever (88% CFR)',
    icon: Biohazard,
    annualDeaths: '15 Deaths (Kigali Surge)',
    globalCases: '66 Confirmed Cases',
    recoveryRate: 22.0,
    mortalityRate: 88.0,
    whoThreatLevel: 'Critical',
    transmission: 'Rousettus fruit bats, contact with bodily fluids, and contaminated surfaces.',
    precautions: [
      'Full BSL-4 protective barrier gear and isolation',
      'Strict burial protocols for deceased victims'
    ],
    diagnostics: ['RT-PCR at Reference Biosafety Level 4 Labs', 'Antigen Capture ELISA'],
    firstLineTherapy: ['Emergency Remdesivir and Monoclonal Infusions', 'Intensive electrolyte stabilization'],
    vaccineStatus: ['Experimental candidate vaccines (Sabin Institute / IAVI) in trial deployment'],
    globalHubs: [
      {
        id: 'g_rwanda_marburg',
        name: 'Rwanda (Kigali Healthcare Outbreak)',
        country: 'Rwanda',
        coordinates: [30.06, -1.94],
        activeCases: '38 Isolated',
        activeNumber: 38,
        cumulativeCases: '66 Cases',
        deathsCount: '15 Deaths (22.7% CFR with Early ICU)',
        recoveryRate: 77.3,
        testPositivity: 18.0,
        icuOccupancy: 94,
        riskLevel: 'High',
        trend: '+6.5%',
        r0Index: 1.55,
        genomicStrain: 'Marburgvirus Mt Lengue',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 26, recovered: 8, icu: 88 },
          { day: 'Tue', date: 'Aug 15', active: 29, recovered: 9, icu: 90 },
          { day: 'Wed', date: 'Aug 16', active: 32, recovered: 11, icu: 92 },
          { day: 'Thu', date: 'Aug 17', active: 35, recovered: 12, icu: 93 },
          { day: 'Fri', date: 'Aug 18', active: 37, recovered: 13, icu: 94 },
          { day: 'Sat', date: 'Aug 19', active: 38, recovered: 13, icu: 94 },
          { day: 'Sun', date: 'Aug 20', active: 39, recovered: 14, icu: 95 }
        ]
      }
    ],
    indiaHubs: [
      {
        id: 'in_delhi_marburg',
        name: 'Delhi NCR International Travel Screening',
        country: 'India',
        coordinates: [77.10, 28.70],
        activeCases: '0 Active (Quarantine Ready)',
        activeNumber: 0,
        cumulativeCases: '0 Cases',
        deathsCount: '0 Deaths',
        recoveryRate: 100,
        testPositivity: 0.0,
        icuOccupancy: 24,
        riskLevel: 'Low',
        trend: 'Zero Spread',
        r0Index: 0.0,
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 0, recovered: 0, icu: 24 },
          { day: 'Tue', date: 'Aug 15', active: 0, recovered: 0, icu: 24 },
          { day: 'Wed', date: 'Aug 16', active: 0, recovered: 0, icu: 24 },
          { day: 'Thu', date: 'Aug 17', active: 0, recovered: 0, icu: 24 },
          { day: 'Fri', date: 'Aug 18', active: 0, recovered: 0, icu: 24 },
          { day: 'Sat', date: 'Aug 19', active: 0, recovered: 0, icu: 24 },
          { day: 'Sun', date: 'Aug 20', active: 0, recovered: 0, icu: 24 }
        ]
      }
    ]
  },

  // 8. ISCHEMIC HEART DISEASE
  {
    id: 'ihd',
    rank: 8,
    name: 'Ischemic Heart Disease (Coronary Artery Disease)',
    shortName: 'Heart Disease',
    category: 'Non-Communicable (Global #1 Cause of Mortality)',
    icon: Heart,
    annualDeaths: '8.9 Million Deaths / yr',
    globalCases: '126 Million Monitored',
    recoveryRate: 78.4,
    mortalityRate: 4.8,
    whoThreatLevel: 'High',
    transmission: 'Non-communicable (Atherosclerosis, Hypertension, Dyslipidemia & Genetic predisposition)',
    precautions: [
      'Maintain Blood Pressure < 130/80 mmHg and dietary sodium restriction (< 2g/day)',
      'Lipid profiling with target LDL-C < 70 mg/dL',
      'At least 150 minutes of moderate-intensity aerobic exercise per week'
    ],
    diagnostics: ['12-Lead ECG for ischemia detection', 'High-Sensitivity Cardiac Troponin-I/T assays'],
    firstLineTherapy: ['Dual Antiplatelet Therapy (Aspirin + Clopidogrel)', 'High-Intensity Statins'],
    vaccineStatus: ['Annual Quadrivalent Influenza & Pneumococcal vaccination'],
    globalHubs: [
      {
        id: 'g_india_ihd',
        name: 'South Asia (India Hub)',
        country: 'India',
        coordinates: [78.96, 20.59],
        activeCases: '32,400,000',
        activeNumber: 32400000,
        cumulativeCases: '68,400,000 Monitored',
        deathsCount: '1,450,000 Deaths / yr',
        recoveryRate: 79.2,
        testPositivity: 4.8,
        icuOccupancy: 62,
        riskLevel: 'Moderate',
        trend: '-1.4%',
        r0Index: 1.0,
        genomicStrain: 'Atherosclerotic CAD CAD-IV',
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 38.4, recovered: 24.1, icu: 52 },
          { day: 'Tue', date: 'Aug 15', active: 42.6, recovered: 25.4, icu: 58 },
          { day: 'Wed', date: 'Aug 16', active: 46.8, recovered: 26.8, icu: 66 },
          { day: 'Thu', date: 'Aug 17', active: 41.2, recovered: 28.5, icu: 64 },
          { day: 'Fri', date: 'Aug 18', active: 36.5, recovered: 29.8, icu: 62 },
          { day: 'Sat', date: 'Aug 19', active: 32.4, recovered: 31.2, icu: 62 },
          { day: 'Sun', date: 'Aug 20', active: 29.1, recovered: 32.6, icu: 59 }
        ]
      }
    ],
    indiaHubs: [
      {
        id: 'in_north_ihd',
        name: 'North Zone (Delhi NCR & Punjab)',
        country: 'India',
        coordinates: [77.10, 28.70],
        activeCases: '5,800,000',
        activeNumber: 5800000,
        cumulativeCases: '12,400,000 Monitored',
        deathsCount: '280,000 Deaths / yr',
        recoveryRate: 81.2,
        testPositivity: 4.2,
        icuOccupancy: 58,
        riskLevel: 'Low',
        trend: '-1.8%',
        r0Index: 1.0,
        trajectory: [
          { day: 'Mon', date: 'Aug 14', active: 7.2, recovered: 3.8, icu: 50 },
          { day: 'Tue', date: 'Aug 15', active: 8.5, recovered: 4.1, icu: 56 },
          { day: 'Wed', date: 'Aug 16', active: 9.1, recovered: 4.4, icu: 64 },
          { day: 'Thu', date: 'Aug 17', active: 7.4, recovered: 4.7, icu: 61 },
          { day: 'Fri', date: 'Aug 18', active: 6.3, recovered: 4.9, icu: 58 },
          { day: 'Sat', date: 'Aug 19', active: 5.8, recovered: 5.0, icu: 58 },
          { day: 'Sun', date: 'Aug 20', active: 5.1, recovered: 5.2, icu: 55 }
        ]
      }
    ]
  }
];
