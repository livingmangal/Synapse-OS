import { MockHealthProfile } from './types';

export const mangalSinghProfile: MockHealthProfile = {
  profileId: 'mangal_singh_verified_abha',
  title: 'Mangal Singh (Verified ABHA Profile)',
  subtitle: 'ABHA: 91-6310-9284-5172 • PM-JAY Verified • Optimal Vitals',
  jsonPath: '/data/mockHealthData/mangal_singh_abha_profile.json',
  badge: {
    label: 'ABDM Verified Citizen',
    color: '#0284c7',
    bg: '#e0f2fe',
    border: '#bae6fd'
  },
  patient: {
    name: 'Mangal Singh',
    age: 25,
    gender: 'Male',
    dob: 'November 05, 2001',
    yearOfBirth: 2001,
    bloodType: 'A+',
    abhaId: '91-6310-9284-5172',
    abhaAddress: 'mangalsingh@abdm',
    policyNumber: 'PM-JAY-2026-IND-7732',
    linkedHip: 'Sawai Man Singh (SMS) Medical College & AIIMS Jodhpur',
    stateCode: 'RJ'
  },
  device: {
    name: 'Samsung Galaxy Watch 6 & Health Connect',
    brand: 'samsung',
    firmware: 'WearOS-ABDM v4.0',
    battery: 92
  },
  observationCount: 5040,
  vitals: {
    steps: 11200,
    stepGoal: 10000,
    restingHeartRate: 65,
    currentHeartRate: 72,
    hrvMs: 66,
    spo2: 98.8,
    vo2Max: 49.0,
    respiratoryRate: 16,
    activeCalories: 710,
    calorieGoal: 600,
    sleepScore: 89,
    sleepDuration: '7h 55m',
    sleepStages: {
      deep: '2h 00m (25%)',
      rem: '1h 55m (24%)',
      light: '3h 35m (45%)',
      awake: '25m (6%)'
    },
    bloodGlucose: 94,
    bloodPressure: '118/78 mmHg',
    wristTempDeviation: '+0.1°F'
  },
  ecgStatus: '🟢 Normal Sinus Rhythm (HR 72 BPM) • QTc 408ms • ST-Isoelectric',
  aiAnalysis: {
    type: 'optimal',
    title: 'Optimal Autonomic Regulation & Vitality',
    description: 'Patient Mangal Singh demonstrates verified ABDM registration. Resting heart rate (65 BPM) and HRV (66ms) denote consistent autonomic balance. Oxygen saturation stable at 98.8% with excellent respiratory endurance.'
  },
  visualAnalytics: {
    healthScore: 94,
    nextAppointment: {
      doctor: 'Dr. Rajesh K. Varma',
      date: 'Tuesday, 20 Jan, 03:30 PM',
      type: 'Preventive Health Assessment',
      photoUrl: '/images/mangal_singh.jpg'
    },
    heartRateAvg: '72 BPM',
    heartRatePath: 'M 0 98 Q 25 78, 50 82 T 100 62 T 150 88 T 200 42 T 250 78 T 300 68 T 350 85 T 400 58',
    sleepAvg: '7h 55m',
    sleepBars: [68, 80, 86, 94, 90, 96, 92],
    stressAvg: '16 / 100',
    stressPoints: [
      { x: 40, y: 114, isHigh: false },
      { x: 110, y: 107, isHigh: false },
      { x: 190, y: 120, isHigh: false },
      { x: 270, y: 104, isHigh: false },
      { x: 340, y: 111, isHigh: false }
    ],
    stressPath: 'M 0 122 Q 30 112, 60 116 T 120 106 T 180 120 T 240 102 T 300 116 T 350 110',
    stepsAvg: '11,200',
    stepsBars: [78, 88, 92, 82, 98, 86, 90],
    insights: {
      positive: {
        title: 'Cardiovascular Conditioning',
        desc: 'Resting heart rate (72 BPM) and 66ms HRV indicate strong autonomic regulation and consistent recovery.'
      },
      action: {
        title: 'Hydration Balance',
        desc: 'Daily hydration goal at 85%. Add 400ml water during afternoon work intervals.'
      },
      monitor: {
        title: 'Neck & Shoulder Ergonomics',
        desc: 'Perform cervical stretches every 90 minutes to maintain optimal neck posture.'
      }
    },
    carePlan: {
      medication: {
        title: 'Daily Multivitamin & Omega-3 Complete',
        desc: '1 tablet daily after breakfast',
        completed: true
      },
      hydration: {
        title: 'Hydration Target (2.55L / 3.0L)',
        desc: '85% of daily objective completed',
        progress: 85
      }
    }
  },
  conditions: [
    {
      id: 'cond-lungs',
      title: 'Cardiorespiratory Stamina & Gas Exchange',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Pulmonology',
      organ: 'lungs',
      status: 'Stable',
      notes: 'O2 Saturation: 98.8%, FEV1: 4.9L. Clear bilateral breath sounds, optimal tidal volume.',
      lastUpdated: 'Nov 12, 2025 at 3:30 PM',
      metrics: {
        fev1: '4.9 L',
        o2: '98.8%',
        heartRate: '72 BPM',
        trendThisMonth: '98.8%',
        trendPrevMonth: '97.2%'
      }
    },
    {
      id: 'cond-shoulder',
      title: 'Left Scapular & Trapezius Tone',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Physiotherapy & Orthopedics',
      organ: 'shoulder',
      painLevel: 3,
      status: 'Monitoring',
      notes: 'Slight desk posture tension. Ergonomic keyboard setup and scapular retractions recommended.'
    },
    {
      id: 'cond-knee',
      title: 'Patellar Tendon & Meniscal Mechanics',
      doctor: 'Dr. Naresh Trehan',
      specialty: 'Orthopedics',
      organ: 'knee',
      angleCurrent: 119,
      angleNormal: 120,
      status: 'Stable',
      notes: 'Normal joint space. Intact ligamentous stability with zero lateral deviation.'
    }
  ]
};
