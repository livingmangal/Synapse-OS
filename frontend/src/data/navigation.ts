import { NavItem } from '@/types';

export const mainNavItems: NavItem[] = [
  { label: 'Agents', href: '/projects' },
  { label: '3D Model', href: '/vibrant' },
  { label: 'Platform Vision', href: '/about-us' },
  { label: 'Core Features', href: '/projects' },
  { label: 'Contact', href: '#contact' },
];

export const projectNavItems: NavItem[] = [
  { label: 'Sanjeevani Orchestrator', href: '/projects/orchestrator-agent', badge: 'Active' },
  { label: 'Sanjeevani AI Assistant', href: '/projects/sanjeevani-assistant', badge: 'Active' },
  { label: 'Nutrition & Fitness', href: '/projects/nutrition-fitness-assistant', badge: 'Active' },
  { label: 'Medical Scan Agent', href: '/projects/medical-scan-agent', badge: 'Active' },
  { label: 'Symptom Triage Agent', href: '/projects/symptom-triage-agent', badge: 'Beta' },
  { label: '3D Body Explorer', href: '/vibrant', badge: '3D Live' },
  { label: 'Blockchain Records', href: '/projects', badge: 'WIP' },
  { label: 'Outbreak Predictive', href: '/projects', badge: 'WIP' },
];

export const legalNavItems: NavItem[] = [
  { label: 'Legal Notice', href: '/legal-notice' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];
