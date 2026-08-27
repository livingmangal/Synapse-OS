import { MockHealthProfile } from './types';

export const mausamKarProfile: MockHealthProfile = {
  profileId: 'mausam_kar_verified_abha',
  title: 'Mausam Kar (Verified ABHA Profile)',
  subtitle: 'ABHA: 91-7294-8102-5309 • PM-JAY Verified • Optimal Vitals',
  jsonPath: '/data/mockHealthData/mausam_kar_abha_profile.json',
  badge: {
    label: 'ABDM Verified Citizen',
    color: '#0284c7',
    bg: '#e0f2fe',
    border: '#bae6fd'
  },
  patient: {
    name: 'Mausam Kar',
    age: 24,
    gender: 'Male',
    dob: 'April 14, 2002',
    yearOfBirth: 2002,
    bloodType: 'B+',
    abhaId: '91-7294-8102-5309',
    abhaAddress: 'mausamkar@abdm',
    policyNumber: 'PM-JAY-2026-IND-8841',
    linkedHip: 'All India Institute of Medical Sciences (AIIMS) - Central Node, New Delhi',
    stateCode: 'DL'
  },
  device: {
    name: 'Apple Watch Ultra 2 & Google Health Connect',
    brand: 'apple',
    firmware: 'ABDM-Bridge v4.2',
    battery: 96
  },
  observationCount: 5120,
  vitals: {
    steps: 10480,
    stepGoal: 10000,
    restingHeartRate: 64,
    currentHeartRate: 74,
    hrvMs: 68,
    spo2: 98.5,
    vo2Max: 48.2,
    respiratoryRate: 16,
    activeCalories: 680,
    calorieGoal: 600,
    sleepScore: 88,
    sleepDuration: '7h 48m',
    sleepStages: {
      deep: '1h 55m (25%)',
      rem: '1h 50m (23%)',
      light: '3h 40m (47%)',
      awake: '23m (5%)'
    },
    bloodGlucose: 92,
    bloodPressure: '118/76 mmHg',
    wristTempDeviation: '0.0°F'
  },
  ecgStatus: '🟢 Normal Sinus Rhythm (HR 74 BPM) • QTc 410ms • ST-Isoelectric',
  aiAnalysis: {
    type: 'optimal',
    title: 'Optimal Physiological Baseline Profile',
    description: 'Patient Mausam Kar demonstrates verified ABDM registration. Resting heart rate (64 BPM) and HRV (68ms) indicate excellent autonomic nervous tone and recovery. Arterial oxygen saturation stable at 98.5% with healthy metabolic biomarkers.'
  },
  visualAnalytics: {
    healthScore: 92,
    nextAppointment: {
      doctor: 'Dr. Rajesh K. Varma',
      date: 'Friday, 16 Jan, 04:00 PM',
      type: 'Annual Preventive Review',
      photoUrl: '/images/mausam_kar.jpg'
    },
    heartRateAvg: '74 BPM',
    heartRatePath: 'M 0 100 Q 25 80, 50 85 T 100 65 T 150 90 T 200 45 T 250 80 T 300 70 T 350 88 T 400 60',
    sleepAvg: '7h 48m',
    sleepBars: [65, 78, 85, 92, 88, 95, 90],
    stressAvg: '18 / 100',
    stressPoints: [
      { x: 40, y: 112, isHigh: false },
      { x: 110, y: 106, isHigh: false },
      { x: 190, y: 118, isHigh: false },
      { x: 270, y: 102, isHigh: false },
      { x: 340, y: 110, isHigh: false }
    ],
    stressPath: 'M 0 120 Q 30 110, 60 115 T 120 105 T 180 120 T 240 100 T 300 115 T 350 110',
    stepsAvg: '10,480',
    stepsBars: [75, 88, 92, 78, 98, 84, 90],
    insights: {
      positive: {
        title: 'Cardiovascular Stamina',
        desc: 'Resting heart rate (74 BPM) and HRV (68 ms) indicate excellent cardiovascular conditioning and recovery.'
      },
      action: {
        title: 'Hydration Balance',
        desc: 'Daily hydration goal at 82%. Target 500ml additional water intake during afternoon focus hours.'
      },
      monitor: {
        title: 'Postural Ergonomics',
        desc: 'Continue desk stretches every 90 minutes to maintain optimal cervical spinal alignment.'
      }
    },
    carePlan: {
      medication: {
        title: 'Multivitamin & Omega-3 Complete',
        desc: '1 tablet with breakfast daily (PM-JAY Scheme Dispensed)',
        completed: true
      },
      hydration: {
        title: 'Hydration Target (2.4L / 3.0L)',
        desc: '82% of daily objective completed',
        progress: 82
      }
    }
  },
  conditions: [
    {
      id: 'cond-lungs',
      title: 'Pulmonary Aerobic Function',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Pulmonology & Critical Care',
      organ: 'lungs',
      status: 'Stable',
      notes: 'O2 Saturation: 98.5%, FEV1: 4.8L. Clear bilateral breath sounds with normal alveolar diffusion.',
      lastUpdated: 'Oct 27, 2025 at 2:15 PM',
      metrics: {
        fev1: '4.8 L',
        o2: '98.5%',
        heartRate: '74 BPM',
        trendThisMonth: '98.5%',
        trendPrevMonth: '96.8%'
      }
    },
    {
      id: 'cond-shoulder',
      title: 'Cervical & Trapezius Desk Ergonomics',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Orthopedics & Sports Medicine',
      organ: 'shoulder',
      painLevel: 4,
      status: 'Monitoring',
      notes: 'Mild trapezius stiffness from display work. Ergonomic desk setup and scapular stretches recommended.'
    },
    {
      id: 'cond-knee',
      title: 'Patellar Biomechanics & Joint Cartilage',
      doctor: 'Dr. Naresh Trehan',
      specialty: 'Orthopedics & Joint Care',
      organ: 'knee',
      angleCurrent: 118,
      angleNormal: 120,
      status: 'Stable',
      notes: 'Healthy joint space. Full physiological range of motion with preserved articular cartilage.'
    }
  ]
};
