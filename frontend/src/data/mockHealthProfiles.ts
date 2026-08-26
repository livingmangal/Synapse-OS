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
    }
  }
];
