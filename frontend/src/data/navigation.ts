import { NavItem } from '@/types';

export const mainNavItems: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Available Homes', href: '/projects' },
  { label: 'Contact', href: '#contact' },
];

export const projectNavItems: NavItem[] = [
  { label: 'La Solana', href: '/projects/la-solana', badge: 'Available' },
  { label: 'Plaza España 9', href: '/projects/plaza-espana', badge: 'Available' },
  { label: 'Rúa Pexegueiro', href: '/projects/rua-pexegueiro', badge: 'Upcoming' },
  { label: 'Juno / Icaria IV', href: '/projects', badge: 'Sold Out' },
  { label: 'Pol43 Montrove', href: '/projects', badge: 'Sold Out' },
];

export const legalNavItems: NavItem[] = [
  { label: 'Legal Notice', href: '/legal-notice' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];
