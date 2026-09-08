export interface Project {
  id: string;
  name: string;
  category: string;
  tag: string;
  year: string;
  description: string;
  services: string[];
  image: string;
  liveUrl?: string;
  highlights: string[];
  fullDetails: string;
}

export interface Service {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export interface Founder {
  name: string;
  role: string;
  title: string;
  image: string;
  bio: string;
  quote: string;
  responsibilities: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface Technology {
  name: string;
  category: 'Frontend' | 'Architecture' | 'Backend' | 'Creative';
  desc: string;
}

export const CAPABILITIES = [
  'Web Design',
  'UI/UX',
  'Frontend',
  'Development',
  'Brand Identity',
  'Graphic Design',
  'Motion',
  'Strategy',
];

export const PROJECTS: Project[] = [
  {
    id: 'greenside',
    name: 'GreenSide',
    category: 'Clean Tech & Sustainable Commerce',
    tag: 'Web Design · Full-Stack',
    year: '2025',
    description:
      'A next-generation digital flagship for a sustainable materials innovator. We engineered a headless Shopify storefront with sub-second page transitions, an interactive environmental impact calculator, and high-contrast editorial typography.',
    services: ['UI/UX Design', 'Headless Next.js', 'Brand Identity', 'Motion Choreography'],
    image: '/images/greenside.jpg',
    highlights: ['99/100 Lighthouse Performance', 'Custom Carbon Calculator', 'Sub-second Transitions'],
    fullDetails:
      'GreenSide needed to break away from generic green-leaf eco tropes. We established a bold, high-contrast visual architecture pairing stark typography with vivid electric lime highlights. Omar engineered a zero-layout-shift architecture running on Next.js 15, while Mateo directed the product storytelling and interactive materials library.',
  },
  {
    id: 'foodie-eats',
    name: 'Foodie Eats',
    category: 'Culinary Lifestyle & Ordering',
    tag: 'Web App · Design System',
    year: '2025',
    description:
      'An elevated dining and chef-curated delivery platform. We built a synchronized web application featuring live order status dispatching, interactive chef menus, and immersive sensory food photography layouts.',
    services: ['Web App Development', 'Real-Time APIs', 'UI/UX Architecture', 'Design System'],
    image: '/images/foodie.jpg',
    highlights: ['Sub-50ms Cart Updates', 'Modular Component System', 'Dynamic Reservation Flow'],
    fullDetails:
      'Traditional delivery platforms are cluttered and uninspiring. Foodie Eats approached Pinnacle to create a Michelin-standard digital experience. We delivered a clean editorial interface with gesture-driven menus, real-time cart synchronization, and bespoke typography.',
  },
  {
    id: 'northstar-properties',
    name: 'Northstar Properties',
    category: 'Luxury Architecture & Developments',
    tag: 'Editorial Web Design · Performance',
    year: '2024',
    description:
      'A digital portfolio and property acquisition portal for an ultra-luxury architectural developer. Features interactive spatial floor plans, curated material palettes, and smooth neighborhood exploration.',
    services: ['Editorial Web Design', 'Frontend Engineering', 'Interactive Map', 'Performance Optimization'],
    image: '/images/northstar.jpg',
    highlights: ['Curated High-Res Visuals', 'Interactive Floorplan Visualizer', 'Global Edge Caching'],
    fullDetails:
      'Northstar constructs architect-designed residences across the Pacific Northwest and Scandinavia. Their digital platform demanded the same level of restraint, precision, and tactile luxury as their physical buildings. We engineered high-density layouts that scale seamlessly from 4K displays to mobile screens.',
  },
  {
    id: 'pinnacle-concepts',
    name: 'Pinnacle Concepts',
    category: 'Interactive Design Lab & Prototypes',
    tag: 'Creative Direction · WebGL',
    year: '2025',
    description:
      'Our studio experimental laboratory exploring the outer frontiers of web interaction, typographic physics, WebGL shader transitions, and generative client-side tooling.',
    services: ['Creative Direction', 'Creative Coding', 'WebGL / Canvas', 'Experimental UX'],
    image: '/images/concepts.jpg',
    highlights: ['GPU-Accelerated Shaders', 'Kinetic Typography Engine', 'Open Source Design Tokens'],
    fullDetails:
      'Pinnacle Concepts is our sandbox where Mateo and Omar stress-test emerging web technologies before deploying them to client projects. It represents our conviction that true engineering excellence and daring visual craft inform one another.',
  },
];

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Web Design & UI/UX',
    subtitle: 'Editorial aesthetic with purposeful user journeys',
    description:
      'We craft interfaces with surgical precision, typographic discipline, and intuitive user psychology. Every layout is purpose-built to communicate value and convert ambitious audiences.',
    deliverables: [
      'Bespoke Visual Direction',
      'Figma Design Systems & Components',
      'Wireframing & Low-to-High Fidelity UX',
      'Mobile-First Responsive Layouts',
      'Accessibility & WCAG AA Compliance',
    ],
    tools: ['Figma', 'Protopie', 'Design Tokens', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Web Development',
    subtitle: 'Production-ready full-stack architectures',
    description:
      'Modern, type-safe web applications built on Next.js, React, and TypeScript. Fast, maintainable code architectures with clean API integrations, zero bloat, and rock-solid stability.',
    deliverables: [
      'Next.js 15 App Router Architecture',
      'TypeScript End-to-End Type Safety',
      'REST & GraphQL API Integrations',
      'Custom Database Schema & ORM',
      'Vercel Edge Deployment & Caching',
    ],
    tools: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    number: '03',
    title: 'Brand Identity',
    subtitle: 'Memorable brand systems that endure',
    description:
      'Distinctive identity systems that cut through market noise. We design logotypes, typographic pairings, color palettes, and brand guidelines that translate flawlessly across digital and physical touchpoints.',
    deliverables: [
      'Primary & Secondary Logotypes',
      'Typographic Pairing & Hierarchy Rules',
      'Digital-Ready Color System',
      'Comprehensive Brand Guidelines Book',
      'Social & Collateral Asset Packages',
    ],
    tools: ['Illustrator', 'Figma', 'Typography Curation', 'Vector Craft'],
  },
  {
    number: '04',
    title: 'Graphic Design & Motion',
    subtitle: 'Kinetic storytelling & tactile micro-interactions',
    description:
      'Subtle, expensive-feeling micro-interactions and kinetic storytelling. We design motion that clarifies hierarchy, rewards user action, and makes digital experiences feel alive.',
    deliverables: [
      'Restrained Page Transitions',
      'Micro-Interactions & Hover Dynamics',
      'Kinetic Typography Choreography',
      'SVG & Vector Canvas Animations',
      'Performance-Optimized CSS Motion',
    ],
    tools: ['Motion / React', 'Canvas API', 'CSS Keyframes', 'After Effects'],
  },
  {
    number: '05',
    title: 'Digital Experience',
    subtitle: 'End-to-end technical strategy & optimization',
    description:
      'End-to-end digital infrastructure planning. We align hosting, security, caching, third-party integrations, and performance budgets so your platform effortlessly scales with business growth.',
    deliverables: [
      'Core Web Vitals Optimization',
      'Comprehensive Performance Audit',
      'Technical SEO & OpenGraph Setup',
      'Analytics & Conversion Tracking',
      'Ongoing Security & Maintenance',
    ],
    tools: ['Google Lighthouse', 'Vercel Analytics', 'Sentry', 'Web Vitals'],
  },
];

export const FOUNDERS: Founder[] = [
  {
    name: 'Mateo',
    role: 'Co-Founder · Creative & Frontend',
    title: 'Visual Direction, UI/UX & Frontend Craft',
    image: '/images/mateo.jpg',
    bio: 'Mateo leads the visual identity, art direction, and frontend interaction at Pinnacle. With a deep foundation in graphic design and high-contrast editorial typography, he obsesses over spatial rhythm, micro-details, and making digital interfaces feel effortless and unforgettable.',
    quote:
      'Design without technical discipline is just decoration. When we shape both the visual identity and the frontend code, every pixel performs exactly as intended.',
    responsibilities: [
      'UI/UX Design',
      'Website Design',
      'Frontend Development',
      'Visual Direction',
      'Brand Identity & Logo',
      'Graphic Design',
      'Motion & Interaction',
      'Creative Direction',
    ],
  },
  {
    name: 'Omar',
    role: 'Co-Founder · Development & Engineering',
    title: 'Technical Architecture & Full-Stack Systems',
    image: '/images/omar.jpg',
    bio: 'Omar directs the engineering systems and technical architecture at Pinnacle. Specializing in high-performance full-stack web applications, he ensures that every build is lightning-fast, securely integrated, type-safe, and architected for rock-solid long-term scalability.',
    quote:
      'Speed, reliability, and clean code are not afterthoughts. They are fundamental design features that users feel on every click, scroll, and transaction.',
    responsibilities: [
      'Web Development',
      'Full-Stack Development',
      'React & TypeScript',
      'Next.js Systems',
      'APIs & Integrations',
      'Databases & Backend',
      'Performance Optimization',
      'Technical Architecture',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Understand the business, audience & core challenge',
    description:
      'We dive deep into your business objectives, target audience, competitive landscape, and technical constraints. We extract the single core value proposition that will guide the entire build.',
    deliverables: [
      'Strategic Discovery Brief',
      'Information Architecture Map',
      'Content Strategy & Flow',
      'Technical Feasibility Plan',
    ],
  },
  {
    number: '02',
    title: 'Design',
    tagline: 'Create the visual direction, UX & interface',
    description:
      'Mateo develops bespoke editorial visual directions, high-contrast typography pairings, and interactive Figma prototypes. We test spatial rhythms and interaction models in high fidelity.',
    deliverables: [
      'Interactive Figma Prototypes',
      'Design System & Tokens',
      'Responsive Mobile & Desktop Views',
      'Motion & Micro-Interaction Guide',
    ],
  },
  {
    number: '03',
    title: 'Develop',
    tagline: 'Build the experience using modern technology',
    description:
      'Omar translates the approved design into clean, type-safe TypeScript and Next.js code. Every API, database query, and animation is tuned for maximum speed, security, and maintainability.',
    deliverables: [
      'Production Next.js Codebase',
      'Type-Safe Component Library',
      'Clean API & Database Handlers',
      'Zero-Layout-Shift Animation',
    ],
  },
  {
    number: '04',
    title: 'Deliver',
    tagline: 'Test, refine, optimize & launch',
    description:
      'We execute comprehensive cross-device QA, Core Web Vitals audits, and security validation before conducting a seamless production launch on edge infrastructure.',
    deliverables: [
      'Production Edge Deployment',
      'Lighthouse Performance 95+',
      'Full Documentation & Code Handover',
      '30-Day Post-Launch Support',
    ],
  },
];

export const TECHNOLOGIES: Technology[] = [
  { name: 'Next.js 15', category: 'Frontend', desc: 'App router, server components, and edge rendering' },
  { name: 'React 19', category: 'Frontend', desc: 'Modern component architecture and concurrent features' },
  { name: 'TypeScript', category: 'Architecture', desc: 'Strict end-to-end type safety across the entire stack' },
  { name: 'Tailwind CSS', category: 'Frontend', desc: 'Utility-first styling with custom design tokens' },
  { name: 'Node.js', category: 'Backend', desc: 'Fast, asynchronous backend runtimes and server scripts' },
  { name: 'PostgreSQL', category: 'Backend', desc: 'Reliable relational data persistence and migrations' },
  { name: 'REST & GraphQL APIs', category: 'Backend', desc: 'Clean, secure, and predictable interface contracts' },
  { name: 'Vercel Edge', category: 'Architecture', desc: 'Global content delivery and sub-millisecond routing' },
  { name: 'Git & GitHub', category: 'Architecture', desc: 'Disciplined version control and automated CI/CD' },
  { name: 'Motion / React', category: 'Creative', desc: 'Hardware-accelerated physics and micro-interactions' },
  { name: 'Figma', category: 'Creative', desc: 'Precision vector systems, autolayout, and design tokens' },
];
