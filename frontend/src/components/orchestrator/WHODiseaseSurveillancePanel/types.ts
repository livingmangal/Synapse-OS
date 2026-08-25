export interface TrajectoryPoint {
  day: string;
  date: string;
  active: number;
  recovered: number;
  icu: number;
}

export interface DiseaseProfile {
  id: string;
  rank: number;
  name: string;
  shortName: string;
  category: string;
  icon: any;
  annualDeaths: string;
  globalCases: string;
  recoveryRate: number;
  mortalityRate: number;
  whoThreatLevel: 'Low' | 'Moderate' | 'High' | 'Critical';
  transmission: string;
  precautions: string[];
  diagnostics: string[];
  firstLineTherapy: string[];
  vaccineStatus: string[];
  globalHubs: RegionalHub[];
  indiaHubs: RegionalHub[];
}

export interface ContagionVector {
  targetHubId: string;
  targetCoords: [number, number];
  volume: string;
}

export interface RegionalHub {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number]; // [lng, lat]
  activeCases: string;
  activeNumber: number;
  recoveryRate: number;
  testPositivity: number;
  icuOccupancy: number;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Critical';
  trend: string;
  trajectory: TrajectoryPoint[];
  cumulativeCases?: string;
  deathsCount?: string;
  hospitalBedsAvailable?: number;
  hospitalBedsTotal?: number;
  r0Index?: number;
  genomicStrain?: string;
  aqiIndex?: number;
  contagionVectors?: ContagionVector[];
  nearestICMRLab?: string;
}
