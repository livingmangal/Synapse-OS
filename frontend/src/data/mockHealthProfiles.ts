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
        doctor: 'Dr. Maya Chen (Cardiologist)',
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
        doctor: 'Dr. Maya Chen',
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
