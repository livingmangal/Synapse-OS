import { MockHealthProfile } from './types';

export const surabhiProfile: MockHealthProfile = {
  profileId: 'surabhi_verified_abha',
  title: 'Surabhi (Verified ABHA Profile)',
  subtitle: 'ABHA: 91-4478-2910-6351 • PM-JAY Verified • Optimal Vitals',
  jsonPath: '/data/mockHealthData/surabhi_abha_profile.json',
  badge: {
    label: 'ABDM Verified Citizen',
    color: '#0284c7',
    bg: '#e0f2fe',
    border: '#bae6fd'
  },
  patient: {
    name: 'Surabhi',
    age: 24,
    gender: 'Female',
    dob: 'March 15, 2002',
    yearOfBirth: 2002,
    bloodType: 'O+',
    abhaId: '91-4478-2910-6351',
    abhaAddress: 'surabhi@abdm',
    policyNumber: 'PM-JAY-2026-IND-4891',
    linkedHip: 'NIMHANS & Manipal Hospital Bengaluru',
    stateCode: 'KA'
  },
  device: {
    name: 'Google Fitbit Sense 2 & Health Connect',
    brand: 'google',
    firmware: 'FitbitOS-ABDM v2.4',
    battery: 91
  },
  observationCount: 4760,
  vitals: {
    steps: 9800,
    stepGoal: 10000,
    restingHeartRate: 68,
    currentHeartRate: 74,
    hrvMs: 68,
    spo2: 98.6,
    vo2Max: 45.8,
    respiratoryRate: 16,
    activeCalories: 620,
    calorieGoal: 600,
    sleepScore: 88,
    sleepDuration: '7h 45m',
    sleepStages: {
      deep: '1h 50m (24%)',
      rem: '1h 45m (23%)',
      light: '3h 45m (48%)',
      awake: '25m (5%)'
    },
    bloodGlucose: 90,
    bloodPressure: '116/75 mmHg',
    wristTempDeviation: '+0.1°F'
  },
  ecgStatus: '🟢 Normal Sinus Rhythm (HR 74 BPM) • QTc 404ms • Healthy Autonomic Tone',
  aiAnalysis: {
    type: 'optimal',
    title: 'Robust Cardiovascular Homeostasis',
    description: 'Patient Surabhi demonstrates verified ABDM registration. Balanced hemodynamic parameters (116/75 mmHg BP, 98.6% SpO2) and consistent autonomic metrics confirm healthy vital equilibrium.'
  },
  visualAnalytics: {
    healthScore: 93,
    nextAppointment: {
      doctor: 'Dr. Rajesh K. Varma',
      date: 'Thursday, 22 Jan, 02:00 PM',
      type: 'Biometric Checkup',
      photoUrl: '/images/surabhi.jpg'
    },
    heartRateAvg: '74 BPM',
    heartRatePath: 'M 0 98 Q 25 78, 50 82 T 100 64 T 150 88 T 200 46 T 250 78 T 300 68 T 350 86 T 400 58',
    sleepAvg: '7h 45m',
    sleepBars: [68, 80, 85, 92, 88, 95, 90],
    stressAvg: '18 / 100',
    stressPoints: [
      { x: 40, y: 113, isHigh: false },
      { x: 110, y: 107, isHigh: false },
      { x: 190, y: 119, isHigh: false },
      { x: 270, y: 103, isHigh: false },
      { x: 340, y: 111, isHigh: false }
    ],
    stressPath: 'M 0 122 Q 30 112, 60 115 T 120 105 T 180 120 T 240 102 T 300 115 T 350 110',
    stepsAvg: '9,800',
    stepsBars: [76, 86, 90, 80, 96, 84, 88],
    insights: {
      positive: {
        title: 'Optimal Biomarker Equilibrium',
        desc: 'Blood pressure (116/75 mmHg) and SpO2 (98.6%) confirm robust cardiovascular baseline.'
      },
      action: {
        title: 'Daily Step Consistency',
        desc: 'Maintain 10,000 steps daily average with regular evening walks.'
      },
      monitor: {
        title: 'Postural Alignment',
        desc: 'Incorporate upper body stretches during extended sitting.'
      }
    },
    carePlan: {
      medication: {
        title: 'Daily Nutrition & Omega-3 Complete',
        desc: '1 capsule daily with meal',
        completed: true
      },
      hydration: {
        title: 'Hydration Target (2.3L / 2.7L)',
        desc: '84% of daily objective completed',
        progress: 84
      }
    }
  },
  conditions: [
    {
      id: 'cond-lungs',
      title: 'Aerobic Diffusion & Vital Capacity',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Pulmonology',
      organ: 'lungs',
      status: 'Stable',
      notes: 'O2 Saturation: 98.6%, FEV1: 4.4L. Normal spirometry parameters and airway conductance.',
      lastUpdated: 'Nov 18, 2025 at 1:15 PM',
      metrics: {
        fev1: '4.4 L',
        o2: '98.6%',
        heartRate: '74 BPM',
        trendThisMonth: '98.6%',
        trendPrevMonth: '97.0%'
      }
    },
    {
      id: 'cond-shoulder',
      title: 'Upper Back Posture & Scapular Balance',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Physical Medicine',
      organ: 'shoulder',
      painLevel: 2,
      status: 'Stable',
      notes: 'Good postural alignment. Stretching exercises maintaining upper thoracic flexibility.'
    },
    {
      id: 'cond-knee',
      title: 'Patellofemoral Joint Biomechanics',
      doctor: 'Dr. Naresh Trehan',
      specialty: 'Rheumatology & Orthopedics',
      organ: 'knee',
      angleCurrent: 120,
      angleNormal: 120,
      status: 'Stable',
      notes: 'Preserved articular cartilage. Normal smooth patellar tracking with 120° extension.'
    }
  ]
};
