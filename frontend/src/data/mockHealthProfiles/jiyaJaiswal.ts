import { MockHealthProfile } from './types';

export const jiyaJaiswalProfile: MockHealthProfile = {
  profileId: 'jiya_jaiswal_verified_abha',
  title: 'Jiya Jaiswal (Verified ABHA Profile)',
  subtitle: 'ABHA: 91-5519-3820-9104 • PM-JAY Verified • Optimal Vitals',
  jsonPath: '/data/mockHealthData/jiya_jaiswal_abha_profile.json',
  badge: {
    label: 'ABDM Verified Citizen',
    color: '#0284c7',
    bg: '#e0f2fe',
    border: '#bae6fd'
  },
  patient: {
    name: 'Jiya Jaiswal',
    age: 23,
    gender: 'Female',
    dob: 'August 22, 2003',
    yearOfBirth: 2003,
    bloodType: 'B+',
    abhaId: '91-5519-3820-9104',
    abhaAddress: 'jiyajaiswal@abdm',
    policyNumber: 'PM-JAY-2026-IND-6120',
    linkedHip: 'Jaypee Hospital Noida & AIIMS New Delhi',
    stateCode: 'UP'
  },
  device: {
    name: 'Apple Watch Series 9 & Health Connect',
    brand: 'apple',
    firmware: 'WatchOS-ABDM v4.1',
    battery: 95
  },
  observationCount: 4890,
  vitals: {
    steps: 10800,
    stepGoal: 10000,
    restingHeartRate: 66,
    currentHeartRate: 72,
    hrvMs: 70,
    spo2: 99.2,
    vo2Max: 46.5,
    respiratoryRate: 15,
    activeCalories: 640,
    calorieGoal: 600,
    sleepScore: 92,
    sleepDuration: '8h 12m',
    sleepStages: {
      deep: '2h 05m (25%)',
      rem: '2h 00m (24%)',
      light: '3h 45m (46%)',
      awake: '22m (5%)'
    },
    bloodGlucose: 88,
    bloodPressure: '114/72 mmHg',
    wristTempDeviation: '0.0°F'
  },
  ecgStatus: '🟢 Normal Sinus Rhythm (HR 72 BPM) • QTc 398ms • Stable Rhythm',
  aiAnalysis: {
    type: 'optimal',
    title: 'Optimal Biomarker Profile & Restorative Sleep',
    description: 'Patient Jiya Jaiswal demonstrates verified ABDM registration. High sleep efficiency score (92/100), 70ms HRV, and stable arterial oxygenation (99.2%) reflect exceptional physiological recovery.'
  },
  visualAnalytics: {
    healthScore: 96,
    nextAppointment: {
      "doctor": "Dr. Sneha Roy",
      "initials": "SR",
      "specialty": "Orthopedics & Sports",
      "date": "Monday, 19 Jan, 10:30 AM",
      "type": "Patellar Kinetic Screening",
      "mode": "In-Clinic",
      "color": "#0284c7"
},
    upcomingAppointments: [
      {
            "doctor": "Dr. Sneha Roy",
            "initials": "SR",
            "specialty": "Orthopedics & Sports",
            "date": "Monday, 19 Jan, 10:30 AM",
            "type": "Patellar Kinetic Screening",
            "mode": "In-Clinic",
            "color": "#0284c7"
      },
      {
            "doctor": "Dr. Manish Gupta",
            "initials": "MG",
            "specialty": "Preventive Pulmonology",
            "date": "Thursday, 22 Jan, 04:15 PM",
            "type": "Aerobic Diffusion Evaluation",
            "mode": "Teleconsultation",
            "color": "#059669"
      },
      {
            "doctor": "Dr. Deepa Nair",
            "initials": "DN",
            "specialty": "Clinical Nutrition",
            "date": "Monday, 26 Jan, 01:45 PM",
            "type": "Hydration & Metabolic Plan",
            "mode": "Teleconsultation",
            "color": "#db2777"
      }
],
    heartRateAvg: '72 BPM',
    heartRatePath: 'M 0 96 Q 25 76, 50 80 T 100 62 T 150 86 T 200 44 T 250 76 T 300 66 T 350 84 T 400 56',
    sleepAvg: '8h 12m',
    sleepBars: [72, 84, 88, 96, 92, 98, 94],
    stressAvg: '14 / 100',
    stressPoints: [
      { x: 40, y: 114, isHigh: false },
      { x: 110, y: 106, isHigh: false },
      { x: 190, y: 120, isHigh: false },
      { x: 270, y: 104, isHigh: false },
      { x: 340, y: 110, isHigh: false }
    ],
    stressPath: 'M 0 124 Q 30 114, 60 116 T 120 106 T 180 120 T 240 104 T 300 116 T 350 110',
    stepsAvg: '10,800',
    stepsBars: [82, 90, 94, 86, 100, 88, 92],
    insights: {
      positive: {
        title: 'Restorative Sleep Rhythm',
        desc: 'Deep & REM sleep cycles exceed 92% benchmark, promoting optimal cognitive and immune recovery.'
      },
      action: {
        title: 'Hydration Balance',
        desc: 'Target 2.5L daily hydration goal during peak daytime intervals.'
      },
      monitor: {
        title: 'Cervical Spine Ergonomics',
        desc: 'Maintain eye-level monitor height during screen work.'
      }
    },
    carePlan: {
      medication: {
        title: 'Daily Multivitamin Complete',
        desc: '1 capsule daily with water',
        completed: true
      },
      hydration: {
        title: 'Hydration Target (2.4L / 2.7L)',
        desc: '88% of daily objective completed',
        progress: 88
      }
    }
  },
  conditions: [
    {
      id: 'cond-lungs',
      title: 'Pulmonary Oxygenation & Diffusion Index',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Pulmonology & Wellness',
      organ: 'lungs',
      status: 'Stable',
      notes: 'O2 Saturation: 99.2%, FEV1: 4.3L. Peak arterial oxygenation and efficient diaphragmatic excursion.',
      lastUpdated: 'Nov 28, 2025 at 11:20 AM',
      metrics: {
        fev1: '4.3 L',
        o2: '99.2%',
        heartRate: '72 BPM',
        trendThisMonth: '99.2%',
        trendPrevMonth: '98.0%'
      }
    },
    {
      id: 'cond-shoulder',
      title: 'Cervical Spine & Rotator Alignment',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Orthopedic Rehabilitation',
      organ: 'shoulder',
      painLevel: 1,
      status: 'Stable',
      notes: 'Excellent cervical and shoulder range of motion. Zero functional limitation or nerve entrapment.'
    },
    {
      id: 'cond-knee',
      title: 'Bilateral Knee & Quadriceps Stability',
      doctor: 'Dr. Naresh Trehan',
      specialty: 'Orthopedics',
      organ: 'knee',
      angleCurrent: 120,
      angleNormal: 120,
      status: 'Stable',
      notes: 'Full 120° physiological flexion. Excellent ligamentous stability and bilateral weight distribution.'
    }
  ]
};
