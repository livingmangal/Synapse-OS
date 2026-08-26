export interface VisualAnalyticsData {
  healthScore: number;
  nextAppointment: {
    doctor: string;
    date: string;
    type: string;
    photoUrl: string;
  };
  heartRateAvg: string;
  heartRatePath: string;
  sleepAvg: string;
  sleepBars: number[];
  stressAvg: string;
  stressPoints: { x: number; y: number; isHigh?: boolean }[];
  stressPath: string;
  stepsAvg: string;
  stepsBars: number[];
  insights: {
    positive: { title: string; desc: string };
    action: { title: string; desc: string };
    monitor: { title: string; desc: string };
  };
  carePlan: {
    medication: { title: string; desc: string; completed: boolean };
    hydration: { title: string; desc: string; progress: number };
  };
}

export interface MockHealthProfile {
  profileId: string;
  title: string;
  subtitle: string;
  jsonPath: string;
  badge: {
    label: string;
    color: string;
    bg: string;
    border: string;
  };
  patient: {
    name: string;
    age: number;
    gender: string;
    abhaId: string;
  };
  device: {
    name: string;
    brand: 'apple' | 'google' | 'samsung';
    firmware: string;
    battery: number;
  };
  observationCount: number;
  vitals: {
    steps: number;
    stepGoal: number;
    restingHeartRate: number;
    currentHeartRate: number;
    hrvMs: number;
    spo2: number;
    vo2Max: number;
    respiratoryRate: number;
    activeCalories: number;
    calorieGoal: number;
    sleepScore: number;
    sleepDuration: string;
    sleepStages: {
      deep: string;
      rem: string;
      light: string;
      awake: string;
    };
    bloodGlucose: number;
    bloodPressure: string;
    wristTempDeviation: string;
  };
  ecgStatus: string;
  aiAnalysis: {
    type: 'optimal' | 'warning' | 'alert';
    title: string;
    description: string;
  };
  visualAnalytics: VisualAnalyticsData;
}

export const MOCK_HEALTH_PROFILES: MockHealthProfile[] = [
  {
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
      abhaId: '91-7294-8102-5309'
    },
    device: {
      name: 'Apple Watch Ultra & Google Health Connect',
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
    }
  },
  {
    profileId: 'rachit_tiwari_verified_abha',
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
      abhaId: '91-8842-1920-7463'
    },
    device: {
      name: 'Pixel Watch 3 & Health Connect',
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
        doctor: 'Dr. Rajesh K. Varma',
        date: 'Monday, 19 Jan, 11:00 AM',
        type: 'Biometric Wellness Check',
        photoUrl: '/images/rachit_tiwari.jpg'
      },
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
    }
  },
  {
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
      abhaId: '91-6310-9284-5172'
    },
    device: {
      name: 'Galaxy Watch 6 & Health Connect',
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
    }
  },
  {
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
      abhaId: '91-5519-3820-9104'
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
        doctor: 'Dr. Rajesh K. Varma',
        date: 'Wednesday, 21 Jan, 10:30 AM',
        type: 'Routine Wellness Review',
        photoUrl: ''
      },
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
    }
  },
  {
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
      abhaId: '91-4478-2910-6351'
    },
    device: {
      name: 'Fitbit Sense 2 & Health Connect',
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
        photoUrl: ''
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
    }
  },
  {
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
      abhaId: '91-7712-4890-3318'
    },
    device: {
      name: 'OnePlus Watch 2 & Health Connect',
      brand: 'oneplus',
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
        photoUrl: ''
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
    }
  },
  {
    profileId: 'marathon_runner_apple_health',
    title: 'Marathon Athlete Profile',
    subtitle: 'High HRV (88ms), Bradycardia (46 BPM), 18.4k Steps',
    jsonPath: '/data/mockHealthData/marathon_runner_apple_health.json',
    badge: {
      label: 'Athletic Conditioning',
      color: '#0284c7',
      bg: '#e0f2fe',
      border: '#bae6fd'
    },
    patient: {
      name: 'Aryan Mehta',
      age: 32,
      gender: 'Male',
      abhaId: '91-3829-4910-1120'
    },
    device: {
      name: 'Apple Watch Ultra 2',
      brand: 'apple',
      firmware: 'watchOS 11.2',
      battery: 92
    },
    observationCount: 4820,
    vitals: {
      steps: 18420,
      stepGoal: 15000,
      restingHeartRate: 46,
      currentHeartRate: 54,
      hrvMs: 88,
      spo2: 99.2,
      vo2Max: 56.4,
      respiratoryRate: 13,
      activeCalories: 1140,
      calorieGoal: 1000,
      sleepScore: 94,
      sleepDuration: '8h 20m',
      sleepStages: {
        deep: '2h 30m (30%)',
        rem: '2h 10m (26%)',
        light: '3h 15m (39%)',
        awake: '25m (5%)'
      },
      bloodGlucose: 88,
      bloodPressure: '112/68 mmHg',
      wristTempDeviation: '-0.1°F'
    },
    ecgStatus: '🟢 Sinus Bradycardia (HR 54 BPM) • Athletic Conditioning',
    aiAnalysis: {
      type: 'optimal',
      title: 'Elite Endurance Conditioning Profile',
      description: 'Marked physiological bradycardia (Resting HR: 46 BPM) indicative of robust left-ventricular stroke volume. HRV at 88ms demonstrates superior parasympathetic recovery. SpO2 stable at 99.2% with exceptional VO2 max (56.4 mL/kg/min).'
    },
    visualAnalytics: {
      healthScore: 94,
      nextAppointment: {
        doctor: 'Dr. Kabir Anand',
        date: 'Sep 12, 2026 09:30 AM',
        type: 'SPORTS MEDICINE',
        photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80'
      },
      heartRateAvg: '54bpm',
      heartRatePath: 'M 0 58 Q 20 60 40 56 T 80 62 T 120 48 T 160 58 T 200 54 T 240 56',
      sleepAvg: '8.20h',
      sleepBars: [75, 90, 85, 95, 88, 92, 98, 85],
      stressAvg: '+0.08',
      stressPath: 'M 0 55 L 35 52 L 70 58 L 105 50 L 140 56 L 175 48 L 210 54 L 240 50',
      stressPoints: [
        { x: 35, y: 52 },
        { x: 70, y: 58 },
        { x: 105, y: 50 },
        { x: 140, y: 56 },
        { x: 175, y: 48 },
        { x: 210, y: 54 }
      ],
      stepsAvg: '18,420',
      stepsBars: [70, 85, 90, 95, 80, 85, 95, 100, 90, 88, 96],
      insights: {
        positive: { title: 'Optimal Recovery', desc: 'HRV at 88ms indicates superior athletic adaptation.' },
        action: { title: 'Electrolyte Balance', desc: 'Hydration goal increased for high calorie burn.' },
        monitor: { title: 'Resting Pulse Stable', desc: 'Bradycardia is normal for trained athlete.' }
      },
      carePlan: {
        medication: { title: 'Multivitamins & Omega-3', desc: 'Morning athletic supplements taken', completed: true },
        hydration: { title: 'Electrolyte Hydration', desc: '3.2 / 3.5L completed', progress: 91 }
      }
    }
  },
  {
    profileId: 'cardiac_arrhythmia_google_fitbit',
    title: 'Cardiac Arrhythmia & Tachycardia',
    subtitle: 'Resting Tachycardia (106 BPM), Suppressed HRV (24ms)',
    jsonPath: '/data/mockHealthData/cardiac_arrhythmia_google_fitbit.json',
    badge: {
      label: 'Cardiac Warning',
      color: '#dc2626',
      bg: '#fee2e2',
      border: '#fca5a5'
    },
    patient: {
      name: 'Rajiv Sen',
      age: 58,
      gender: 'Male',
      abhaId: '91-8840-2911-5832'
    },
    device: {
      name: 'Google Pixel Watch 3',
      brand: 'google',
      firmware: 'Wear OS 5.1',
      battery: 68
    },
    observationCount: 3240,
    vitals: {
      steps: 3840,
      stepGoal: 8000,
      restingHeartRate: 84,
      currentHeartRate: 106,
      hrvMs: 24,
      spo2: 95.1,
      vo2Max: 29.8,
      respiratoryRate: 19,
      activeCalories: 290,
      calorieGoal: 600,
      sleepScore: 58,
      sleepDuration: '5h 45m',
      sleepStages: {
        deep: '45m (13%)',
        rem: '50m (14%)',
        light: '3h 10m (55%)',
        awake: '1h 00m (18%)'
      },
      bloodGlucose: 114,
      bloodPressure: '142/88 mmHg',
      wristTempDeviation: '+0.6°F'
    },
    ecgStatus: '⚠️ Sinus Tachycardia (HR 106 BPM) • Irregular Pulse Alert',
    aiAnalysis: {
      type: 'alert',
      title: 'Cardiac Arrhythmia & Autonomic Stress Alert',
      description: 'Resting tachycardia episode detected (peak 106 BPM). Suppressed HRV of 24ms denotes sympathetic overdrive and elevated cardiovascular strain. Elevated nocturnal temperature (+0.6°F) and fragmented sleep score (58/100). Tele-cardiology consultation recommended.'
    },
    visualAnalytics: {
      healthScore: 58,
      nextAppointment: {
        doctor: 'Dr. Naresh Trehan (Cardiologist)',
        date: 'Tomorrow, 10:00 AM',
        type: 'URGENT TELECONSULT',
        photoUrl: 'https://images.unsplash.com/photo-1594824813689-d102e3b2e535?w=150&auto=format&fit=crop&q=80'
      },
      heartRateAvg: '106bpm',
      heartRatePath: 'M 0 35 Q 20 20 40 15 T 80 40 T 120 18 T 160 25 T 200 15 T 240 22',
      sleepAvg: '5.45h',
      sleepBars: [40, 55, 30, 60, 45, 50, 65, 35],
      stressAvg: '+0.74',
      stressPath: 'M 0 40 L 35 25 L 70 45 L 105 18 L 140 30 L 175 14 L 210 35 L 240 20',
      stressPoints: [
        { x: 35, y: 25, isHigh: true },
        { x: 70, y: 45 },
        { x: 105, y: 18, isHigh: true },
        { x: 140, y: 30 },
        { x: 175, y: 14, isHigh: true },
        { x: 210, y: 35 }
      ],
      stepsAvg: '3,840',
      stepsBars: [25, 35, 40, 30, 45, 35, 50, 40, 30, 35, 40],
      insights: {
        positive: { title: 'Baseline Sync Active', desc: 'Fitbit PPG sensor transmitting real-time rhythm.' },
        action: { title: 'Limit Exertion', desc: 'Avoid heavy cardiovascular loads during tachycardia episodes.' },
        monitor: { title: 'Arrhythmia Traces', desc: 'Irregular rhythm notifications logged in ABHA locker.' }
      },
      carePlan: {
        medication: { title: 'Beta-Blocker (Metoprolol 25mg)', desc: 'Evening dose pending', completed: false },
        hydration: { title: 'Cardiac Fluid Limit', desc: '1.4 / 2.0L completed', progress: 70 }
      }
    }
  },
  {
    profileId: 'diabetic_continuous_glucose_export',
    title: 'Type-2 Glycemic & CGM Profile',
    subtitle: 'Post-Prandial Spike (158 mg/dL), 7.9k Steps',
    jsonPath: '/data/mockHealthData/diabetic_continuous_glucose_export.json',
    badge: {
      label: 'Glycemic Note',
      color: '#d97706',
      bg: '#fef3c7',
      border: '#fde68a'
    },
    patient: {
      name: 'Sunita Verma',
      age: 47,
      gender: 'Female',
      abhaId: '91-2291-8840-7712'
    },
    device: {
      name: 'Apple Watch Series 9',
      brand: 'apple',
      firmware: 'watchOS 11.1',
      battery: 82
    },
    observationCount: 5610,
    vitals: {
      steps: 7920,
      stepGoal: 10000,
      restingHeartRate: 68,
      currentHeartRate: 76,
      hrvMs: 52,
      spo2: 98.0,
      vo2Max: 36.2,
      respiratoryRate: 16,
      activeCalories: 490,
      calorieGoal: 650,
      sleepScore: 79,
      sleepDuration: '7h 10m',
      sleepStages: {
        deep: '1h 20m (19%)',
        rem: '1h 35m (22%)',
        light: '3h 45m (52%)',
        awake: '30m (7%)'
      },
      bloodGlucose: 158,
      bloodPressure: '124/80 mmHg',
      wristTempDeviation: '-0.1°F'
    },
    ecgStatus: '🟢 Normal Sinus Rhythm (HR 76 BPM) • No AFib detected',
    aiAnalysis: {
      type: 'warning',
      title: 'Post-Prandial Glycemic Excursion Detected',
      description: 'Continuous glucose monitoring flags a post-meal glycemic peak at 158 mg/dL with 72% time-in-range (TIR: 70-140 mg/dL). Cardiovascular biomarkers, SpO2 (98%), and resting pulse (68 BPM) remain within safe physiological limits.'
    },
    visualAnalytics: {
      healthScore: 79,
      nextAppointment: {
        doctor: 'Dr. Rekha Bansal (Endocrinologist)',
        date: 'Aug 28, 2026 11:00 AM',
        type: 'IN-PERSON CHECKUP',
        photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80'
      },
      heartRateAvg: '76bpm',
      heartRatePath: 'M 0 48 Q 20 45 40 42 T 80 50 T 120 38 T 160 46 T 200 40 T 240 44',
      sleepAvg: '7.10h',
      sleepBars: [60, 75, 65, 80, 70, 75, 85, 60],
      stressAvg: '+0.28',
      stressPath: 'M 0 50 L 35 42 L 70 48 L 105 32 L 140 45 L 175 28 L 210 46 L 240 38',
      stressPoints: [
        { x: 35, y: 42 },
        { x: 70, y: 48 },
        { x: 105, y: 32 },
        { x: 140, y: 45 },
        { x: 175, y: 28, isHigh: true },
        { x: 210, y: 46 }
      ],
      stepsAvg: '7,920',
      stepsBars: [50, 65, 55, 75, 60, 70, 80, 85, 65, 75, 80],
      insights: {
        positive: { title: 'Post-Meal Walking', desc: '15-min walks successfully blunt glucose spikes.' },
        action: { title: 'Carb Intake Target', desc: 'Maintain complex carbohydrates for dinner meal.' },
        monitor: { title: 'CGM Sensor Expiry', desc: 'Dexcom G7 sensor replacement in 3 days.' }
      },
      carePlan: {
        medication: { title: 'Metformin 500mg ER', desc: 'Taken with dinner', completed: true },
        hydration: { title: 'Daily Water Balance', desc: '2.1 / 2.5L completed', progress: 84 }
      }
    }
  },
  {
    profileId: 'sleep_apnea_hypoxemia_dataset',
    title: 'Sleep Apnea & Hypoxemia Dataset',
    subtitle: 'Nocturnal SpO2 Nadir (86%), Disrupted Architecture (49 Score)',
    jsonPath: '/data/mockHealthData/sleep_apnea_hypoxemia_dataset.json',
    badge: {
      label: 'Hypoxemia Risk',
      color: '#dc2626',
      bg: '#fee2e2',
      border: '#fca5a5'
    },
    patient: {
      name: 'Vikramaditya Rao',
      age: 52,
      gender: 'Male',
      abhaId: '91-4920-3319-9021'
    },
    device: {
      name: 'Galaxy Watch 6 Pro',
      brand: 'samsung',
      firmware: 'One UI Watch 5.0',
      battery: 75
    },
    observationCount: 3980,
    vitals: {
      steps: 5120,
      stepGoal: 8000,
      restingHeartRate: 72,
      currentHeartRate: 78,
      hrvMs: 34,
      spo2: 91.4,
      vo2Max: 31.5,
      respiratoryRate: 21,
      activeCalories: 340,
      calorieGoal: 600,
      sleepScore: 49,
      sleepDuration: '6h 05m',
      sleepStages: {
        deep: '35m (9%)',
        rem: '40m (11%)',
        light: '3h 30m (58%)',
        awake: '1h 20m (22%)'
      },
      bloodGlucose: 104,
      bloodPressure: '138/86 mmHg',
      wristTempDeviation: '+0.3°F'
    },
    ecgStatus: '⚠️ Sinus Arrhythmia with Hypoxemic Drops (HR 78 BPM)',
    aiAnalysis: {
      type: 'alert',
      title: 'Nocturnal Hypoxemia & Sleep Architecture Disruption',
      description: 'Critical nocturnal SpO2 desaturations detected with nadir of 86% and mean overnight saturation of 91.4%. Frequent awakenings (1h 20m awake) and suppressed deep sleep (9%) strongly indicate obstructive sleep apnea (OSA). Polysomnography recommended.'
    },
    visualAnalytics: {
      healthScore: 49,
      nextAppointment: {
        doctor: 'Dr. Tariq Farooq (Pulmonologist)',
        date: 'Aug 30, 2026 02:00 PM',
        type: 'SLEEP STUDY (HSAT)',
        photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150&auto=format&fit=crop&q=80'
      },
      heartRateAvg: '78bpm',
      heartRatePath: 'M 0 52 Q 20 48 40 40 T 80 56 T 120 32 T 160 52 T 200 44 T 240 50',
      sleepAvg: '6.05h',
      sleepBars: [35, 45, 25, 55, 40, 48, 50, 30],
      stressAvg: '+0.62',
      stressPath: 'M 0 45 L 35 32 L 70 50 L 105 22 L 140 38 L 175 18 L 210 42 L 240 28',
      stressPoints: [
        { x: 35, y: 32 },
        { x: 70, y: 50 },
        { x: 105, y: 22, isHigh: true },
        { x: 140, y: 38 },
        { x: 175, y: 18, isHigh: true },
        { x: 210, y: 42 }
      ],
      stepsAvg: '5,120',
      stepsBars: [30, 45, 35, 55, 40, 50, 60, 65, 45, 55, 60],
      insights: {
        positive: { title: 'Continuous Pulse Oximetry', desc: 'Galaxy Watch captured full nocturnal SpO2 trends.' },
        action: { title: 'CPAP Clinical Trial', desc: 'Discuss CPAP pressure titration with sleep clinic.' },
        monitor: { title: 'Oxygen Nadir 86%', desc: 'Hypoxemia events cluster between 02:30 AM - 04:45 AM.' }
      },
      carePlan: {
        medication: { title: 'Nasal Corticosteroid', desc: 'Pre-bed spray administered', completed: true },
        hydration: { title: 'Hydration Target', desc: '1.9 / 2.2L completed', progress: 86 }
      }
    }
  },
  {
    profileId: 'elderly_hypertension_profile',
    title: 'Elderly Hypertension Profile',
    subtitle: 'Systolic BP (154/94 mmHg), Low Activity (4.3k Steps)',
    jsonPath: '/data/mockHealthData/elderly_hypertension_profile.json',
    badge: {
      label: 'Stage-2 Hypertension',
      color: '#d97706',
      bg: '#fef3c7',
      border: '#fde68a'
    },
    patient: {
      name: 'Meenakshi Iyer',
      age: 71,
      gender: 'Female',
      abhaId: '91-7712-4029-3381'
    },
    device: {
      name: 'Withings ScanWatch 2',
      brand: 'google',
      firmware: 'Health OS 3.2',
      battery: 89
    },
    observationCount: 2750,
    vitals: {
      steps: 4350,
      stepGoal: 6000,
      restingHeartRate: 76,
      currentHeartRate: 79,
      hrvMs: 38,
      spo2: 96.5,
      vo2Max: 25.0,
      respiratoryRate: 17,
      activeCalories: 260,
      calorieGoal: 450,
      sleepScore: 72,
      sleepDuration: '6h 50m',
      sleepStages: {
        deep: '1h 10m (17%)',
        rem: '1h 20m (20%)',
        light: '3h 40m (54%)',
        awake: '40m (9%)'
      },
      bloodGlucose: 108,
      bloodPressure: '154/94 mmHg',
      wristTempDeviation: '+0.1°F'
    },
    ecgStatus: '⚠️ Stage-2 Systolic Hypertension Alert (BP 154/94)',
    aiAnalysis: {
      type: 'warning',
      title: 'Stage-2 Systolic Blood Pressure Elevation',
      description: 'Continuous and cuff measurements confirm systolic BP exceeding 150 mmHg (154/94 mmHg). Pulse pressure widened to 60 mmHg. Vitals auto-forwarded to attending geriatric specialist via ABHA clinical gateway for dosage review.'
    },
    visualAnalytics: {
      healthScore: 72,
      nextAppointment: {
        doctor: 'Dr. Anand Joshi (Geriatrician)',
        date: 'Sep 04, 2026 10:30 AM',
        type: 'IN-PERSON CLINIC',
        photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80'
      },
      heartRateAvg: '79bpm',
      heartRatePath: 'M 0 46 Q 20 44 40 40 T 80 48 T 120 36 T 160 44 T 200 38 T 240 42',
      sleepAvg: '6.50h',
      sleepBars: [50, 65, 55, 70, 60, 68, 72, 55],
      stressAvg: '+0.45',
      stressPath: 'M 0 48 L 35 38 L 70 52 L 105 28 L 140 42 L 175 24 L 210 48 L 240 34',
      stressPoints: [
        { x: 35, y: 38 },
        { x: 70, y: 52 },
        { x: 105, y: 28, isHigh: true },
        { x: 140, y: 42 },
        { x: 175, y: 24, isHigh: true },
        { x: 210, y: 48 }
      ],
      stepsAvg: '4,350',
      stepsBars: [25, 40, 30, 50, 35, 45, 55, 60, 40, 45, 50],
      insights: {
        positive: { title: 'Daily Step Consistency', desc: 'Elderly walking target maintained above 4,000 steps.' },
        action: { title: 'Sodium Reduction', desc: 'DASH diet recommended to assist BP management.' },
        monitor: { title: 'Systolic Trend > 150', desc: 'BP logs forwarded to attending physician.' }
      },
      carePlan: {
        medication: { title: 'Telmisartan 40mg + Amlodipine', desc: 'Morning dose confirmed', completed: true },
        hydration: { title: 'Fluid & Electrolytes', desc: '1.6 / 2.0L completed', progress: 80 }
      }
    }
  },
  {
    profileId: 'healthy_adult_baseline',
    title: 'Healthy Adult Baseline Profile',
    subtitle: 'Homeostasis (HRV 66ms, SpO2 99%, 10.4k Steps)',
    jsonPath: '/data/mockHealthData/healthy_adult_baseline.json',
    badge: {
      label: 'Optimal Homeostasis',
      color: '#15803d',
      bg: '#dcfce7',
      border: '#86efac'
    },
    patient: {
      name: 'Siddharth Sharma',
      age: 29,
      gender: 'Male',
      abhaId: '91-5829-3910-4821'
    },
    device: {
      name: 'Apple Watch Ultra 2',
      brand: 'apple',
      firmware: 'watchOS 11.2',
      battery: 88
    },
    observationCount: 6420,
    vitals: {
      steps: 10480,
      stepGoal: 10000,
      restingHeartRate: 60,
      currentHeartRate: 70,
      hrvMs: 66,
      spo2: 99.0,
      vo2Max: 48.0,
      respiratoryRate: 14,
      activeCalories: 680,
      calorieGoal: 700,
      sleepScore: 90,
      sleepDuration: '7h 50m',
      sleepStages: {
        deep: '1h 55m (24%)',
        rem: '2h 05m (27%)',
        light: '3h 25m (43%)',
        awake: '25m (6%)'
      },
      bloodGlucose: 92,
      bloodPressure: '116/74 mmHg',
      wristTempDeviation: '-0.2°F'
    },
    ecgStatus: '🟢 Sinus Rhythm (HR 70 BPM) • No AFib detected',
    aiAnalysis: {
      type: 'optimal',
      title: 'Optimal Physiological Homeostasis',
      description: 'All systemic biomarkers are in the optimal clinical target ranges. HRV (66ms) confirms robust autonomic parasympathetic balance. Restorative sleep score (90/100) with healthy deep/REM cycles. SpO2 consistent at 99%.'
    },
    visualAnalytics: {
      healthScore: 68,
      nextAppointment: {
        doctor: 'Dr. Ananya Sen',
        date: 'Aug 20, 2026 10:00 AM',
        type: 'IN-PERSON',
        photoUrl: 'https://images.unsplash.com/photo-1594824813689-d102e3b2e535?w=150&auto=format&fit=crop&q=80'
      },
      heartRateAvg: '72bpm',
      heartRatePath: 'M 0 50 Q 20 52 40 45 T 80 55 T 120 30 T 160 50 T 200 42 T 240 48',
      sleepAvg: '7.30h',
      sleepBars: [45, 65, 30, 80, 55, 70, 90, 40],
      stressAvg: '+0.34',
      stressPath: 'M 0 50 L 35 40 L 70 55 L 105 25 L 140 45 L 175 20 L 210 50 L 240 35',
      stressPoints: [
        { x: 35, y: 40 },
        { x: 70, y: 55 },
        { x: 105, y: 25, isHigh: true },
        { x: 140, y: 45 },
        { x: 175, y: 20, isHigh: true },
        { x: 210, y: 50 }
      ],
      stepsAvg: '4,060',
      stepsBars: [35, 60, 45, 80, 25, 40, 75, 95, 50, 70, 85],
      insights: {
        positive: { title: 'Recovery Improving', desc: 'Resting HR down 4% this week.' },
        action: { title: 'Sleep Debt', desc: 'Target 8h sleep tonight.' },
        monitor: { title: 'Stress Elevated', desc: 'Evening cortisol peaks detected.' }
      },
      carePlan: {
        medication: { title: 'Medication', desc: 'Morning dose taken', completed: true },
        hydration: { title: 'Hydration', desc: '1.8 / 2.5L completed', progress: 72 }
      }
    }
  }
];
