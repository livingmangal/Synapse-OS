import { NavItem } from '@/types';

export const mainNavItems: NavItem[] = [
  { label: 'Voice Doctor', href: '/voice-doctor' },
  { label: 'Emergency SOS', href: '/emergency-sos' },
  { label: 'Sanctuary (Mental)', href: '/sanctuary' },
  { label: 'Medical Scans', href: '/medical-scan-agent' },
  { label: 'Symptom Triage', href: '/symptom-triage-agent' },
  { label: 'FHIR R4 EHR', href: '/fhir-export' },
  { label: '3D Digital Twin', href: '/vibrant' },
  { label: 'Health Passport', href: '/records' }
];

export const projectNavItems: NavItem[] = [
  { label: 'Voice-to-Voice AI Doctor', href: '/voice-doctor', badge: 'Live' },
  { label: '1-Click Emergency SOS', href: '/emergency-sos', badge: 'Critical' },
  { label: 'WHO Tele-MANAS Sanctuary', href: '/sanctuary', badge: 'Live' },
  { label: 'FractureNet YOLOv8 Vision', href: '/medical-scan-agent', badge: 'Live' },
  { label: 'Clinical Symptom Triage', href: '/symptom-triage-agent', badge: 'Live' },
  { label: 'HL7 FHIR R4 EHR Exporter', href: '/fhir-export', badge: 'Standards' },
  { label: '3D Digital Health Twin', href: '/vibrant', badge: '3D Live' },
  { label: 'Verifiable ABDM Passport', href: '/records', badge: 'ABHA' },
];

export const legalNavItems: NavItem[] = [
  { label: 'Legal Notice', href: '/legal-notice' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];
