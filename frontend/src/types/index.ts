export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectChapter {
  number: string; // e.g. "01", "Chapter One"
  subtitle: string;
  title: string;
  description: string;
  highlight?: string;
  images?: string[];
  features?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  status: 'Available' | 'Sold Out' | 'Upcoming' | 'In Construction';
  statusText?: string;
  units?: string;
  specs: ProjectSpec[];
  heroImage: string;
  thumbnailImage: string;
  galleryImages: string[];
  description: string;
  chapters: ProjectChapter[];
  downloadBrochureUrl?: string;
  accentColor?: string;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    province: string;
    country: string;
  };
  socials: {
    instagram: string;
    linkedin?: string;
  };
}
