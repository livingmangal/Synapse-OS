import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'la-solana',
    slug: 'la-solana',
    title: 'La Solana',
    subtitle: 'Exclusive Single-Family Villas in a Natural Sanctuary',
    tagline: 'Homes that invite you to stop time and disconnect',
    location: 'Oleiros, A Coruña',
    status: 'Available',
    statusText: 'Under Construction · Available Homes',
    units: '10 Exclusive Homes',
    specs: [
      { label: 'Location', value: 'Oleiros, A Coruña' },
      { label: 'Units', value: '10 Single-Family Villas' },
      { label: 'Bedrooms', value: '4 - 5 Bedrooms' },
      { label: 'Plot Size', value: 'From 500 m² to 800 m²' },
      { label: 'Built Area', value: 'From 320 m²' },
      { label: 'Features', value: 'Private Pool, Aerothermal HVAC, Garage' },
    ],
    heroImage: '/uploads/2026/02/la-solana-hero.webp',
    thumbnailImage: '/uploads/2026/02/la-solana-thumb.webp',
    galleryImages: [
      '/uploads/2026/02/la-solana-1.webp',
      '/uploads/2026/02/la-solana-2.webp',
      '/uploads/2026/02/la-solana-3.webp',
      '/uploads/2026/02/la-solana-4.webp',
      '/uploads/2026/02/la-solana-5.webp',
    ],
    description:
      'La Solana is a luxury residential development conceived to harmonize modern architectural purity with the serenity of Galician nature. Featuring expansive floor-to-ceiling windows, private gardens, and sustainable energy systems.',
    chapters: [
      {
        number: '01',
        subtitle: 'The Environment',
        title: 'Where Nature Meets Modern Life',
        description:
          'Located in the privileged municipality of Oleiros, La Solana combines tranquility, pristine green surroundings, and immediate access to top beaches, schools, and urban amenities.',
        images: ['/uploads/2026/02/la-solana-env-1.webp', '/uploads/2026/02/la-solana-env-2.webp'],
        features: ['5 min to Santa Cruz beach', '15 min to A Coruña city center', 'Quiet cul-de-sac privacy'],
      },
      {
        number: '02',
        subtitle: 'Architecture & Spaces',
        title: 'Light, Volume, and Fluid Transitions',
        description:
          'Designed around open-plan layouts that blur the boundaries between interior living spaces and private outdoor landscapes. Noble materials such as natural stone, untreated oak, and high-efficiency thermal glass define the ambiance.',
        images: ['/uploads/2026/02/la-solana-arch-1.webp'],
        features: ['Double-height ceilings', 'Seamless indoor-outdoor living', 'Bespoke custom cabinetry'],
      },
      {
        number: '03',
        subtitle: 'Finishes & Comfort',
        title: 'Crafted Down to the Smallest Detail',
        description:
          'From designer kitchens with integrated premium appliances to minimalist spa-like bathrooms, every texture and surface is selected for its tactile warmth, durability, and timeless aesthetic.',
        images: ['/uploads/2026/02/la-solana-finishes-1.webp'],
        features: ['Italian designer porcelain tiles', 'Integrated smart home system', 'Underfloor heating & aerothermal cooling'],
      },
      {
        number: '04',
        subtitle: 'Sustainability',
        title: 'A-Class Energy Efficiency',
        description:
          'Constructed according to the highest bioclimatic and environmental standards, optimizing solar orientation, cross-ventilation, and renewable energy generation.',
        images: ['/uploads/2026/02/la-solana-sust-1.webp'],
        features: ['Solar photovoltaic ready', 'A-Class energy rating', 'Rainwater harvesting system'],
      },
    ],
  },
  {
    id: 'plaza-espana',
    slug: 'plaza-espana',
    title: 'Plaza España 9',
    subtitle: 'Restoration of an Architectural Gem in the City Heart',
    tagline: 'Timeless Heritage Meets Contemporary Elegance',
    location: 'Plaza de España, Santiago de Compostela',
    status: 'Available',
    statusText: 'Restoration Project · 1 & 2 Bedroom Apartments and Duplexes',
    units: 'Bespoke Residential Units',
    specs: [
      { label: 'Location', value: 'Plaza de España 9, Santiago de Compostela' },
      { label: 'Typologies', value: '1 & 2 Bedroom Apartments, Duplexes with Terrace' },
      { label: 'Duplex Area', value: '181 m² with Private Terrace' },
      { label: 'Building', value: 'Historic Stone Facade Fully Restored' },
      { label: 'Energy Rating', value: 'A - Ultra High Efficiency' },
    ],
    heroImage: '/uploads/2026/02/plaza-espana-hero.webp',
    thumbnailImage: '/uploads/2026/02/plaza-espana-thumb.webp',
    galleryImages: [
      '/uploads/2026/02/plaza-espana-1.webp',
      '/uploads/2026/02/plaza-espana-2.webp',
      '/uploads/2026/02/plaza-espana-3.webp',
    ],
    description:
      'Plaza España 9 revitalizes a distinguished historic building in the heart of Santiago. Combining grand masonry traditions with contemporary open-concept interiors and sunny private terraces.',
    chapters: [
      {
        number: '01',
        subtitle: 'The Heritage',
        title: 'Historic Soul, Contemporary Vision',
        description:
          'Preserving noble ashlar stone facades and historical proportions while completely re-engineering the structural core and thermal envelope to deliver the ultimate modern living comfort.',
        features: ['Restored stone gallery', 'Prime city center location', 'Unobstructed historic views'],
      },
      {
        number: '02',
        subtitle: 'The Duplex & Penthouses',
        title: 'Duplex with Terrace - 181 m²',
        description:
          'Sober, clean, and elegant aesthetics in harmony with the historic character of the building. The duplex features generous sunny terraces overlooking the skyline.',
        features: ['181 m² total layout', 'Panoramic private terrace', 'Custom oak architectural millwork'],
      },
      {
        number: '03',
        subtitle: 'Material Warmth',
        title: 'Natural Textures & Pure Lines',
        description:
          'Just like a well-tailored suit, the materials that dress our homes directly influence the comfort we experience. Wood, natural stone, and neutral tones shape beautiful, healthy, and eco-conscious spaces.',
        features: ['Marble countertops', 'Concealed LED architectural lighting', 'Acoustic triple glazing'],
      },
      {
        number: '04',
        subtitle: 'Modern Lifestyle',
        title: 'Warmth Without Excess',
        description:
          'The homes exude warmth and elegance rather than coldness. The result is welcoming beauty with a neutral color palette, diverse textures, and volumes that soften the architecture.',
        features: ['Private lift access', 'Underfloor climate control', 'Storage room and parking options'],
      },
    ],
  },
  {
    id: 'rua-pexegueiro',
    slug: 'rua-pexegueiro',
    title: 'Rúa Pexegueiro',
    subtitle: 'Urban Sanctuary Near Historical Centers',
    tagline: 'Quiet Living In The Heart Of The City',
    location: 'Santiago de Compostela',
    status: 'Upcoming',
    statusText: 'Upcoming Launch · Register Your Interest',
    specs: [
      { label: 'Location', value: 'Rúa Pexegueiro, Santiago de Compostela' },
      { label: 'Status', value: 'Upcoming Project' },
      { label: 'Concept', value: 'Contemporary Urban Living' },
      { label: 'Efficiency', value: 'Class A' },
    ],
    heroImage: '/uploads/2026/02/pexegueiro-hero.webp',
    thumbnailImage: '/uploads/2026/02/pexegueiro-thumb.webp',
    galleryImages: [
      '/uploads/2026/02/pexegueiro-1.webp',
      '/uploads/2026/02/pexegueiro-2.webp',
    ],
    description:
      'At Normal is Boring, finding the right setting and creating homes that invite you to disconnect is our passion. Rúa Pexegueiro offers an intimate residential retreat in one of the most charming streets of the historic quarter.',
    chapters: [
      {
        number: '01',
        subtitle: 'The Vision',
        title: 'Finding the Essence of Living',
        description:
          'Carefully planned to balance central urban connectivity with secluded private terraces and serene internal courtyards.',
        features: ['Pedestrian access to historic district', 'Sunlit orientation', 'Tranquil garden courtyards'],
      },
      {
        number: '02',
        subtitle: 'Heritage & Legacy',
        title: 'Over 40 Years, Hundreds of Homes',
        description:
          'Backed by four decades of construction excellence and architectural precision, this upcoming project sets a new benchmark in sustainable city living.',
        features: ['Master craftsman finishes', 'Custom space optimization', 'Turnkey delivery'],
      },
    ],
  },
  {
    id: 'icaria-iv',
    slug: 'icaria-iv',
    title: 'Juno / Icaria IV',
    subtitle: 'Delivered Boutique Residential Community',
    tagline: 'Architectural Distinctiveness Completed',
    location: 'Oleiros, A Coruña',
    status: 'Sold Out',
    statusText: 'Completed Project · 100% Sold',
    specs: [
      { label: 'Location', value: 'Oleiros, A Coruña' },
      { label: 'Status', value: 'Completed & Delivered' },
      { label: 'Typology', value: 'Single-Family Designer Homes' },
    ],
    heroImage: '/uploads/2026/02/icaria-hero.webp',
    thumbnailImage: '/uploads/2026/02/icaria-thumb.webp',
    galleryImages: ['/uploads/2026/02/icaria-1.webp'],
    description:
      'An iconic residential development celebrated for its avant-garde cubist architecture, cantilevered volumes, and integrated landscaped gardens.',
    chapters: [],
  },
  {
    id: 'pol43-montrove',
    slug: 'pol43-montrove',
    title: 'Pol43 Montrove',
    subtitle: 'Contemporary Horizon Residences',
    tagline: 'Panoramic Views and Pure Geometry',
    location: 'Montrove, Oleiros',
    status: 'Sold Out',
    statusText: 'Completed Project · 100% Sold',
    specs: [
      { label: 'Location', value: 'Montrove, Oleiros' },
      { label: 'Status', value: 'Delivered' },
      { label: 'Typology', value: 'Luxury Residential Complex' },
    ],
    heroImage: '/uploads/2026/02/montrove-hero.webp',
    thumbnailImage: '/uploads/2026/02/montrove-thumb.webp',
    galleryImages: ['/uploads/2026/02/montrove-1.webp'],
    description:
      'Pol43 Montrove showcases stunning panoramic views across the bay with refined, minimalist finishes and expansive private outdoor terraces.',
    chapters: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(
    (p) =>
      p.slug.toLowerCase() === slug.toLowerCase() ||
      p.id.toLowerCase() === slug.toLowerCase() ||
      p.slug.replace('-', '').toLowerCase() === slug.replace('-', '').toLowerCase()
  );
}
