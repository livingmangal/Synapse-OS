import { MockHealthProfile } from './types';

export const rachitTiwariProfile: MockHealthProfile = {
  profileId: 'rachit_tiwari_verified_abha',
  isAdmin: false,
  role: 'Verified ABDM Citizen / Patient',
  title: 'Rachit Tiwari (Verified ABHA Profile)',
  subtitle: 'ABHA: 91-8842-1920-7463 • PM-JAY Verified • Optimal Vitals',
  jsonPath: '/data/mockHealthData/rachit_tiwari_abha_profile.json',
  badge: {
    label: 'ABDM Verified Citizen',
    color: '#0284c7',
    bg: '#e0f2fe',
    border: '#bae6fd'
  },
  patient: {
    name: 'Rachit Tiwari',
    age: 23,
    gender: 'Male',
    dob: 'June 18, 2003',
    yearOfBirth: 2003,
    bloodType: 'O+',
    abhaId: '91-8842-1920-7463',
    abhaAddress: 'rachittiwari@abdm',
    policyNumber: 'PM-JAY-2026-IND-9924',
    linkedHip: "King George's Medical University (KGMU) & AIIMS Node",
    stateCode: 'UP'
  },
  device: {
    name: 'Google Pixel Watch 3 & Health Connect',
    brand: 'google',
    firmware: 'WearOS-ABDM v3.8',
    battery: 94
  },
  observationCount: 4980,
  vitals: {
    steps: 12450,
    stepGoal: 10000,
    restingHeartRate: 62,
    currentHeartRate: 70,
    hrvMs: 72,
    spo2: 99.0,
    vo2Max: 51.4,
    respiratoryRate: 15,
    activeCalories: 740,
    calorieGoal: 650,
    sleepScore: 91,
    sleepDuration: '8h 05m',
    sleepStages: {
      deep: '2h 10m (27%)',
      rem: '2h 00m (25%)',
      light: '3h 30m (43%)',
      awake: '25m (5%)'
    },
    bloodGlucose: 90,
    bloodPressure: '116/74 mmHg',
    wristTempDeviation: '-0.1°F'
  },
  ecgStatus: '🟢 Normal Sinus Rhythm (HR 70 BPM) • QTc 402ms • High Autonomic Tone',
  aiAnalysis: {
    type: 'optimal',
    title: 'High-Endurance Athletic Homeostasis',
    description: 'Patient Rachit Tiwari demonstrates verified ABDM registration. Resting heart rate (62 BPM), VO2 Max (51.4), and robust HRV (72ms) indicate prime cardiorespiratory endurance and rapid recovery kinetics.'
  },
  visualAnalytics: {
    healthScore: 95,
    nextAppointment: {
      "doctor": "Dr. Amitava Roy",
      "initials": "AR",
      "specialty": "Sports Medicine & Rehab",
      "date": "Wednesday, 21 Jan, 03:30 PM",
      "type": "Thoracic & Deltoid Mobility",
      "mode": "In-Clinic",
      "color": "#7c3aed"
},
    upcomingAppointments: [
      {
            "doctor": "Dr. Amitava Roy",
            "initials": "AR",
            "specialty": "Sports Medicine & Rehab",
            "date": "Wednesday, 21 Jan, 03:30 PM",
            "type": "Thoracic & Deltoid Mobility",
            "mode": "In-Clinic",
            "color": "#7c3aed"
      },
      {
            "doctor": "Dr. Sunita Kapoor",
            "initials": "SK",
            "specialty": "Diagnostic Cardiology",
            "date": "Saturday, 24 Jan, 11:15 AM",
            "type": "Resting HRV & Rhythm Check",
            "mode": "Hospital Review",
            "color": "#ef4444"
      },
      {
            "doctor": "Dr. Rohit Sen",
            "initials": "RS",
            "specialty": "Primary Health Care",
            "date": "Tuesday, 27 Jan, 02:00 PM",
            "type": "Comprehensive ABDM Checkup",
            "mode": "Teleconsultation",
            "color": "#059669"
      }
],
    heartRateAvg: '70 BPM',
    heartRatePath: 'M 0 95 Q 25 75, 50 80 T 100 60 T 150 85 T 200 40 T 250 75 T 300 65 T 350 82 T 400 55',
    sleepAvg: '8h 05m',
    sleepBars: [70, 82, 88, 95, 91, 98, 93],
    stressAvg: '15 / 100',
    stressPoints: [
      { x: 40, y: 115, isHigh: false },
      { x: 110, y: 108, isHigh: false },
      { x: 190, y: 122, isHigh: false },
      { x: 270, y: 105, isHigh: false },
      { x: 340, y: 112, isHigh: false }
    ],
    stressPath: 'M 0 125 Q 30 115, 60 118 T 120 108 T 180 122 T 240 105 T 300 118 T 350 112',
    stepsAvg: '12,450',
    stepsBars: [80, 90, 95, 85, 100, 88, 92],
    insights: {
      positive: {
        title: 'Cardio-Respiratory Endurance',
        desc: 'VO2 Max at 51.4 mL/kg/min and 72ms HRV reflect outstanding athletic autonomic balance.'
      },
      action: {
        title: 'Electrolyte Replenishment',
        desc: 'Daily step target exceeded (12.4k). Maintain magnesium and hydration intake.'
      },
      monitor: {
        title: 'Ergonomic Lumbar Alignment',
        desc: 'Maintain lumbar support during coding/screen sessions.'
      }
    },
    carePlan: {
      medication: {
        title: 'Electrolytes & Vitamin D3 Complete',
        desc: '1 tablet daily with morning hydration',
        completed: true
      },
      hydration: {
        title: 'Hydration Target (2.7L / 3.0L)',
        desc: '90% of daily objective completed',
        progress: 90
      }
    }
  },
  conditions: [
    {
      id: 'cond-lungs',
      title: 'High-Endurance VO2 Max Pulmonary Reserve',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Sports Pulmonology',
      organ: 'lungs',
      status: 'Stable',
      notes: 'O2 Saturation: 99.0%, FEV1: 5.2L. Peak athletic respiratory capacity and rapid ventilatory recovery.',
      lastUpdated: 'Nov 02, 2025 at 10:45 AM',
      metrics: {
        fev1: '5.2 L',
        o2: '99.0%',
        heartRate: '70 BPM',
        trendThisMonth: '99.2%',
        trendPrevMonth: '98.0%'
      }
    },
    {
      id: 'cond-shoulder',
      title: 'Thoracic & Deltoid Athletic Mobility',
      doctor: 'Dr. Rajesh K. Varma',
      specialty: 'Sports Medicine',
      organ: 'shoulder',
      painLevel: 2,
      status: 'Stable',
      notes: 'Optimal rotator cuff function. Minimal athletic muscular tension.'
    },
    {
      id: 'cond-knee',
      title: 'Lower Kinetic Chain & Patellar Dynamics',
      doctor: 'Dr. Naresh Trehan',
      specialty: 'Sports Orthopedics',
      organ: 'knee',
      angleCurrent: 120,
      angleNormal: 120,
      status: 'Stable',
      notes: 'Optimal quadriceps force transfer. 120° full physiological range without crepitus.'
    }
  ]
};
