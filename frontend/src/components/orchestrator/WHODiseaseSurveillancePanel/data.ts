import { DiseaseProfile } from './types';
import { Heart, Bug, Wind, Biohazard, AlertTriangle } from 'lucide-react';

export   // Top 5 WHO Monitored Priority Diseases with interactive trajectories
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
      diagnostics: [
        '12-Lead Electrocardiography (ECG) for ischemia detection',
        'High-Sensitivity Cardiac Troponin-I/T assays',
        '2D-Echocardiography for ventricular function assessment',
        'Coronary CT Angiography (CCTA) and stress testing'
      ],
      firstLineTherapy: [
        'Dual Antiplatelet Therapy (Aspirin + Clopidogrel/Ticagrelor)',
        'High-Intensity Statins (Atorvastatin 80mg or Rosuvastatin 40mg)',
        'ACE Inhibitors and Beta-Blockers for cardiac remodeling',
        'Nitrates for acute symptomatic angina relief'
      ],
      vaccineStatus: [
        'Annual Quadrivalent Influenza vaccination',
        'Pneumococcal vaccines (PCV15/PCV20) recommended',
        'Routine immunization to reduce acute coronary events',
        'COVID-19 boosters per regional health guidelines'
      ],
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
      diagnostics: [
        'Dengue NS1 Antigen ELISA & IgM/IgG Capture ELISA',
        'Malaria Rapid Diagnostic Tests (HRP-2 / pLDH)',
        'Multiplex RT-PCR for Flavivirus differentiation',
        'Serial Platelet and Hematocrit counts monitoring'
      ],
      firstLineTherapy: [
        'Artemisinin-Based Combination Therapy (ACT) for Malaria',
        'Isotonic IV Fluid titration for Dengue Hemorrhagic Fever',
        'Acetaminophen for antipyresis (avoiding NSAIDs)',
        'Strict hemodynamic monitoring and supportive care'
      ],
      vaccineStatus: [
        'R21/Matrix-M & RTS,S Malaria Vaccines Approved',
        'Qdenga (TAK-003) Dengue Vaccine in Endemic Zones',
        'Dengvaxia (CYD-TDV) for seropositive individuals',
        'Ongoing development for universal Chikungunya vaccines'
      ],
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
      diagnostics: [
        'GeneXpert MTB/RIF Ultra for rapid resistance profiling',
        'Sputum AFB Smear Microscopy (Ziehl-Neelsen stain)',
        'Digital Chest Radiography (CXR) and CT Chest',
        'Multiplex Viral RT-PCR for Influenza and RSV'
      ],
      firstLineTherapy: [
        'Directly Observed Therapy (DOTS: 2HRZE / 4HR regimen) for TB',
        'Inhaled Long-Acting Bronchodilators (LABA/LAMA for COPD)',
        'Inhaled Corticosteroids (ICS) for severe exacerbations',
        'Neuraminidase inhibitors (Oseltamivir) for Influenza'
      ],
      vaccineStatus: [
        'BCG Immunization at birth for TB meningitis prevention',
        'Annual Quadrivalent Inactivated Influenza vaccine',
        'Pneumococcal conjugate (PCV) and polysaccharide vaccines',
        'RSV vaccines for adults >60 years in high-risk zones'
      ],
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
      diagnostics: [
        'Real-Time Clade-Specific PCR (Mpox Clade Ib/IIb)',
        'Avian H5 Multiplex RT-PCR for viral subtyping',
        'Next-Generation Viral Genomic Sequencing (NGS)',
        'Serological assays for epidemiological surveillance'
      ],
      firstLineTherapy: [
        'Tecovirimat (TPOXX 600mg BID) for severe Mpox disease',
        'Early Oseltamivir (75mg BID) for Avian Influenza H5N1',
        'Broad-spectrum antivirals (Brincidofovir) under EIND',
        'Aggressive supportive care and secondary infection control'
      ],
      vaccineStatus: [
        'MVA-BN (JYNNEOS) 2-dose subcutaneous vaccine (Mpox)',
        'Pre/post-exposure prophylaxis approved by WHO',
        'Stockpiled pandemic H5N1 vaccines (zoonotic prep)',
        'Ongoing Phase I/II trials for Nipah virus vaccines'
      ],
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
      diagnostics: [
        'Automated MicroScan/VITEK Antimicrobial Susceptibility Testing',
        'MALDI-TOF Mass Spectrometry for rapid species identification',
        'Carbapenemase PCR assays (blaNDM, blaKPC, blaOXA-48)',
        'Broth microdilution (Gold Standard for Colistin MIC)'
      ],
      firstLineTherapy: [
        'Targeted combinations (Ceftazidime-Avibactam, Cefiderocol)',
        'Meropenem-Vaborbactam for KPC-producing Enterobacteriaceae',
        'Polymyxins (Colistin) as salvage therapy for pan-resistant strains',
        'Infectious Disease consult for optimal dosing and de-escalation'
      ],
      vaccineStatus: [
        'Investigational bacterial vaccines in global clinical development',
        'Phase III trials for nosocomial Staphylococcus aureus vaccines',
        'Klebsiella pneumoniae glycoconjugate vaccine candidates',
        'Focus on strict infection prevention over immunization currently'
      ],
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