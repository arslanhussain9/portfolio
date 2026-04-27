/* ============================================================
   PROJECT DATA — Single source of truth
   Portfolio v2 · Arslan Hussain
   ============================================================ */

const PROJECTS = [
  {
    id: 'product-rater',
    number: '01',
    featured: true,
    title: 'Product Rating & Ingredient Analyzer',
    timeline: 'Apr 2026 – Present',
    tagline: 'AI-powered label scanner that flags harmful additives in under 2 seconds.',
    problem: 'Consumers have no quick way to verify product safety. Manual ingredient checking is slow, inaccessible, and requires expertise most people don\'t have.',
    solution: 'End-to-end AI pipeline: image upload → OCR extraction → NLP ingredient parsing → database matching → risk scoring → visual health report.',
    architecture: 'Node.js backend → OCR Engine → Google Gemini NLP → MongoDB ingredient DB → REST API → React frontend',
    results: [
      { metric: '~90%', label: 'OCR Accuracy' },
      { metric: '<2s',  label: 'Analysis Speed' },
      { metric: '10/min', label: 'Products Processed' }
    ],
    learnings: 'OCR accuracy is highly dependent on image quality. Fine-tuned preprocessing (grayscale, contrast boost) improved accuracy by ~15%.',
    future: 'Barcode scanning, React Native mobile app, crowdsourced ingredient database.',
    stack: ['Node.js', 'MongoDB', 'Google Gemini', 'OCR', 'Vercel'],
    categories: ['ai', 'fullstack'],
    github: 'https://github.com/arslanhussain9/NutriRate',
    live: null,
    thumbnail: 'assets/NutriRate.png',
    gallery: [
      { src: 'assets/NutriRate.png',   label: 'Main Interface' },
      { src: 'assets/NutriRate.png',   label: 'AI Analysis' }
    ],
    pipeline: [
      { step: '01', label: 'Image Upload',     icon: '📸' },
      { step: '02', label: 'OCR Extraction',   icon: '🔍' },
      { step: '03', label: 'NLP Parsing',      icon: '🧠' },
      { step: '04', label: 'DB Matching',      icon: '🗄️' },
      { step: '05', label: 'Health Score',     icon: '⚡' }
    ]
  },
  {
    id: 'scholarship-finder',
    number: '02',
    featured: false,
    title: 'Scholarship Finder Web App',
    timeline: 'Jan 2026 – Jun 2026',
    tagline: 'Centralised scholarship discovery platform — 500+ records, 3-minute search.',
    problem: 'Students waste 20+ minutes searching scattered, outdated scholarship sources with no unified filtering.',
    solution: 'Centralised platform aggregating 500+ records from Govt. Open Data APIs with an intelligent Express.js filtering engine.',
    architecture: 'Node.js + Express.js → Open Data APIs → Filter Engine → REST API → Vanilla JS frontend',
    results: [
      { metric: '500+',  label: 'Scholarships Indexed' },
      { metric: '~70%',  label: 'Irrelevant Results Cut' },
      { metric: '<3 min', label: 'Search Time (was 20 min)' }
    ],
    learnings: 'Government Open Data APIs often have inconsistent schemas — building a normalisation layer early saved significant debugging time.',
    future: 'AI-powered eligibility matching, email alerts for new scholarships, student profile creation.',
    stack: ['Node.js', 'Express.js', 'Open Data APIs', 'MongoDB'],
    categories: ['fullstack'],
    github: 'https://github.com/arslanhussain9/scholarship-finder-app',
    live: 'https://myscholarships.vercel.app/',
    thumbnail: 'assets/scholarship finder.png',
    gallery: [
      { src: 'assets/scholarship finder.png', label: 'Search Interface' }
    ],
    pipeline: []
  },
  {
    id: 'recipe-extractor',
    number: '03',
    featured: false,
    title: 'AI Ingredient & Recipe Extractor',
    timeline: 'Jan 2026 – Apr 2026',
    tagline: 'NLP pipeline that parses cooking reels and generates a shopping list in 10 seconds.',
    problem: 'Manually noting ingredients from cooking videos is tedious — pausing, rewinding, and transcribing wastes 10–20 minutes per recipe.',
    solution: 'NLP + scraping pipeline parses Instagram & YouTube cooking videos, detects ingredients with ~85% accuracy, and generates a ready shopping checklist.',
    architecture: 'Next.js frontend → Web Scraping → NLP pipeline → AI APIs → Ingredient Parser → Shopping List',
    results: [
      { metric: '~85%', label: 'Ingredient Detection' },
      { metric: '<10s',  label: 'List Generated' },
      { metric: '95%',  label: 'Time Saved vs Manual' }
    ],
    learnings: 'Scraping social platforms requires robust rate-limiting and fallback strategies. Ingredient disambiguation (e.g., "spring onion" vs "scallion") was the hardest NLP challenge.',
    future: 'Browser extension, recipe history, nutrition calculation, meal planner integration.',
    stack: ['Next.js', 'React.js', 'AI APIs', 'Web Scraping', 'NLP'],
    categories: ['ai', 'frontend'],
    github: 'https://github.com/arslanhussain9/ai-recipe-extractor',
    live: null,
    thumbnail: 'assets/Recipe AI.png',
    gallery: [
      { src: 'assets/Recipe AI.png', label: 'Main Interface' }
    ],
    pipeline: []
  },
  {
    id: 'watch-verse',
    number: '04',
    featured: false,
    title: 'Watch Verse — E-Commerce Platform',
    timeline: 'Jan 2025 – Jun 2025',
    tagline: 'Premium wristwatch storefront with category, brand, and price filtering.',
    problem: 'Most watch e-commerce UIs lack granular filtering — users can\'t narrow by brand, price, and category simultaneously.',
    solution: 'Responsive storefront with combined filter system, detailed product views, and cart management — built entirely in vanilla web technologies.',
    architecture: 'HTML5 + CSS Grid/Flexbox → Vanilla JS filter engine → LocalStorage cart → Vercel deploy',
    results: [
      { metric: '100%', label: 'Cross-Browser Compatible' },
      { metric: '3+',   label: 'Filter Dimensions' },
      { metric: '0',    label: 'Frameworks Used' }
    ],
    learnings: 'Building a multi-dimensional filter system without a framework requires careful state management. Vanilla JS performance surprised me — faster than expected at scale.',
    future: 'React migration, backend + database, user accounts, wishlist.',
    stack: ['HTML5', 'CSS3', 'JavaScript ES6+'],
    categories: ['frontend'],
    github: 'https://github.com/arslanhussain9/WatchVerse',
    live: 'https://watchverse9.vercel.app/',
    thumbnail: 'assets/Watchverse.png',
    gallery: [
      { src: 'assets/Watchverse.png', label: 'Homepage' }
    ],
    pipeline: []
  },
  {
    id: 'portfolio',
    number: '05',
    featured: false,
    title: 'Personal Developer Portfolio',
    timeline: 'Apr 2026',
    tagline: 'High-end, editorial-style personal portfolio with a premium UI.',
    problem: 'Needed a professional web presence to showcase projects with detailed case studies, smooth animations, and an Apple-inspired aesthetic.',
    solution: 'Designed and built a custom portfolio using Vanilla web technologies, implementing an advanced dynamic design system and custom interactive components.',
    architecture: 'HTML5 → CSS3 (Custom Design System) → Vanilla JavaScript → Vercel',
    results: [
      { metric: '100', label: 'Lighthouse Score' },
      { metric: '0', label: 'Framework Dependencies' },
      { metric: '<1s', label: 'Load Time' }
    ],
    learnings: 'Implementing complex micro-animations and a unified design system entirely without frameworks requires strict CSS organisation and performant DOM manipulation.',
    future: 'CMS integration for project management, automated case study generation.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    categories: ['frontend'],
    github: 'https://github.com/arslanhussain9/Portfolio',
    live: null,
    thumbnail: 'assets/Portfolio.png',
    gallery: [
      { src: 'assets/Portfolio.png', label: 'Main Interface' }
    ],
    pipeline: []
  }
];

const CERTIFICATIONS = [
  { name: 'Google Digital Marketing & E-commerce', issuer: 'Google', platform: 'Coursera', year: '2024' },
  { name: 'Meta Front-End Developer',              issuer: 'Meta',   platform: 'Coursera', year: '2024' },
  { name: 'Full-Stack Web Development',            issuer: '',       platform: 'Udemy',    year: '2023' },
  { name: 'JavaScript Algorithms & Data Structures',issuer: '',      platform: 'freeCodeCamp', year: '2023' },
  { name: 'Responsive Web Design',                 issuer: '',       platform: 'freeCodeCamp', year: '2022' },
  { name: 'Python for Everybody',                  issuer: '',       platform: 'Coursera', year: '2023' }
];

const EXPERIENCE = [
  {
    year: '2023',
    role: 'WordPress Developer',
    company: 'Ciscajewels',
    type: 'Freelance · Remote',
    stack: ['WordPress', 'WooCommerce', 'PHP', 'CSS', 'ACF', 'Elementor'],
    achievements: [
      'Built full jewellery e-commerce store — custom PHP templates, ACF fields, Elementor layouts',
      'Achieved <strong>~95% Lighthouse mobile score</strong> through performance optimisation',
      'Cut time-to-market by <strong>~40%</strong> with reusable component system'
    ]
  },
  {
    year: '2022',
    role: 'UI Developer — Redesign',
    company: 'Elinor Jewels',
    type: 'Freelance · Remote',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Flexbox'],
    achievements: [
      'Complete frontend UI overhaul across <strong>30+ pages</strong>',
      'Modernised typography, colour system, and navigation architecture',
      'Improved mobile usability by <strong>~35%</strong>, reduced page load time by <strong>~25%</strong>'
    ]
  },
  {
    year: '2022',
    role: 'Web Developer — Built from Scratch',
    company: 'The Sparkle Story',
    type: 'Freelance · Remote',
    stack: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Flexbox', 'DOM API'],
    achievements: [
      'Designed and coded fashion e-commerce site from zero — homepage, catalogue, cart UI',
      'Reusable vanilla JS component system reduced future update effort by <strong>~50%</strong>',
      '<strong>100% cross-browser</strong> compatible with no polyfill dependencies'
    ]
  },
  {
    year: '2022',
    role: 'Web Developer — Built from Scratch',
    company: 'The Haute Bling',
    type: 'Freelance · Remote',
    stack: ['HTML5', 'CSS3', 'JavaScript ES6+', 'CSS Animations', 'LocalStorage API'],
    achievements: [
      'Premium accessories e-commerce with emphasis on micro-interactions and luxury-feel UI',
      'Modular JS architecture — clean, framework-free, maintainable codebase',
      'Custom hover states and CSS animation system — <strong>zero dependencies</strong>'
    ]
  }
];
