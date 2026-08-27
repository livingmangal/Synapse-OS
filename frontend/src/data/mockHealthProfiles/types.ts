import { DetectedCondition } from '@/components/orchestrator/types';

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
    dob?: string;
    yearOfBirth?: number;
    bloodType?: string;
    policyNumber?: string;
    abhaAddress?: string;
    linkedHip?: string;
    stateCode?: string;
    blockchainRecords?: any[];
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
  conditions?: DetectedCondition[];
}
