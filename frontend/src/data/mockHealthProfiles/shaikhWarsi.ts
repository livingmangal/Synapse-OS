import { MockHealthProfile } from './types';

export const shaikhWarsiProfile: MockHealthProfile = {
  profileId: 'shaikh_warsi_verified_abha',
  title: 'Shaikh Mohammad Warsi (Verified ABHA Profile)',
  subtitle: 'ABHA: 91-7712-4890-3318 • PM-JAY Verified • Optimal Vitals',
  jsonPath: '/data/mockHealthData/shaikh_warsi_abha_profile.json',
  badge: {
    label: 'ABDM Verified Citizen',
    color: '#0284c7',
    bg: '#e0f2fe',
    border: '#bae6fd'
  },
  patient: {
    name: 'Shaikh Mohammad Warsi',
    age: 24,
    gender: 'Male',
    dob: 'December 10, 2001',
    yearOfBirth: 2001,
    bloodType: 'AB+',
    abhaId: '91-7712-4890-3318',
    abhaAddress: 'shaikhwarsi@abdm',
    policyNumber: 'PM-JAY-2026-IND-5290',
    linkedHip: 'King Edward Memorial (KEM) Hospital & Tata Memorial Centre',
    stateCode: 'MH'
  },
  device: {
    name: 'Google Pixel Watch 2 & Health Connect',
    brand: 'google',
    firmware: 'WearOS-ABDM v3.9',
    battery: 93
  },
  observationCount: 5110,
  vitals: {
    steps: 11500,
    stepGoal: 10000,
    restingHeartRate: 67,
    currentHeartRate: 76,
    hrvMs: 65,
    spo2: 98.4,
    vo2Max: 47.0,
    respiratoryRate: 16,
    activeCalories: 690,
    calorieGoal: 600,
    sleepScore: 87,
    sleepDuration: '7h 30m',
    sleepStages: {
      deep: '1h 50m (24%)',
      rem: '1h 45m (23%)',
      light: '3h 30m (47%)',
      awake: '25m (6%)'
    },
    bloodGlucose: 92,
    bloodPressure: '120/80 mmHg',
    wristTempDeviation: '0.0°F'
  },
  ecgStatus: '🟢 Normal Sinus Rhythm (HR 76 BPM) • QTc 406ms • Isoelectric ST Segment',
  aiAnalysis: {
    type: 'optimal',
    title: 'Healthy Metabolic & Autonomic Equilibrium',
    description: 'Patient Shaikh Mohammad Warsi demonstrates verified ABDM registration. Strong daily activity (11.5k steps), normal sinus ECG profile, and stable hemodynamic parameters denote optimal wellness.'
  },
  visualAnalytics: {
    healthScore: 93,
    nextAppointment: {
      doctor: 'Dr. Rajesh K. Varma',
      date: 'Friday, 23 Jan, 04:00 PM',
      type: 'Preventive Health Assessment',
      photoUrl: '/images/shaikh_warsi.jpg'
    },
    heartRateAvg: '76 BPM',
    heartRatePath: 'M 0 100 Q 25 80, 50 84 T 100 66 T 150 90 T 200 48 T 250 80 T 300 70 T 350 88 T 400 60',
    sleepAvg: '7h 30m',
    sleepBars: [65, 78, 84, 90, 86, 92, 88],
    stressAvg: '20 / 100',
    stressPoints: [
      { x: 40, y: 112, isHigh: false },
      { x: 110, y: 106, isHigh: false },
      { x: 190, y: 118, isHigh: false },
      { x: 270, y: 102, isHigh: false },
      { x: 340, y: 110, isHigh: false }
    ],
    stressPath: 'M 0 120 Q 30 110, 60 114 T 120 104 T 180 118 T 240 100 T 300 114 T 350 108',
    stepsAvg: '11,500',
    stepsBars: [80, 88, 94, 84, 98, 86, 90],
    insights: {
      positive: {
        title: 'Cardiorespiratory Stamina',
        desc: 'Resting heart rate (76 BPM) and 11.5k average steps reflect healthy activity levels and endurance.'
      },
      action: {
        title: 'Hydration Balance',
        desc: 'Daily hydration goal at 82%. Target 500ml additional water intake during afternoon focus hours.'
      },
      monitor: {
        title: 'Ergonomic Desk Posture',
        desc: 'Take 2-minute standing breaks every 90 minutes to relieve trapezius tension.'
      }
    },
    carePlan: {
      medication: {
        title: 'Daily Multivitamin & Omega-3 Complete',
        desc: '1 tablet daily after lunch',
        completed: true
      },
      hydration: {
        title: 'Hydration Target (2.45L / 3.0L)',
        desc: '82% of daily objective completed',
        progress: 82
      }
    }
  },
  conditions: [
    {
      id: 'cond-lungs',
      title: 'Bronchial Dynamics & Ventilation Index',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Pulmonology & Critical Care',
      organ: 'lungs',
      status: 'Stable',
      notes: 'O2 Saturation: 98.4%, FEV1: 4.8L. Healthy bronchial tone and baseline physiological ventilation.',
      lastUpdated: 'Nov 24, 2025 at 4:00 PM',
      metrics: {
        fev1: '4.8 L',
        o2: '98.4%',
        heartRate: '76 BPM',
        trendThisMonth: '98.4%',
        trendPrevMonth: '96.5%'
      }
    },
    {
      id: 'cond-shoulder',
      title: 'Right Trapezius Workstation Posture',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Orthopedics',
      organ: 'shoulder',
      painLevel: 3,
      status: 'Monitoring',
      notes: 'Slight stiffness from prolonged terminal coding. Active standing breaks and thoracic mobility prescribed.'
    },
    {
      id: 'cond-knee',
      title: 'Meniscal Kinetics & Knee Extension',
      doctor: 'Dr. Naresh Trehan',
      specialty: 'Joint Surgery & Orthopedics',
      organ: 'knee',
      angleCurrent: 119,
      angleNormal: 120,
      status: 'Stable',
      notes: 'Smooth articular glide. No effusion or mechanical restriction with 119° extension.'
    }
  ]
};
