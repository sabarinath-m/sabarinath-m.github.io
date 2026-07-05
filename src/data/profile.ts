// Single source of truth for the whole site. Update content here —
// components only render this data, they don't hardcode copy.

export const profile = {
  name: 'Sabarinath M',
  roles: [
    'Frontend Engineer, React',
    'React Native Engineer',
    'Full-Stack Product Engineer',
  ],
  location: 'Kochi, India',
  tagline:
    "I take products from a blank screen to production — React and React Native on the front end, Go services behind them, and full ownership of everything in between.",
  email: 'sabarinath.m97@gmail.com',
  links: {
    github: 'https://github.com/sabarinath-m',
    linkedin: 'https://linkedin.com/in/sabarinath-m',
  },
  stats: [
    { label: 'Years shipping production apps', value: '6+' },
    { label: 'Users across products owned', value: '1M+' },
    { label: 'Production products led', value: '4+' },
    { label: 'Stacks owned end-to-end', value: 'React · RN · Go' },
  ],
} as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experience: Experience = {
  company: 'KeyValue Software Systems',
  role: 'Senior Software Engineer',
  period: 'Aug 2020 — Present',
  location: 'Kochi, India',
  summary:
    'Six years as the frontend and, increasingly, full-stack owner across four-plus production products — hired for React, trusted to ship React Native, and extended into Go backend services because the fastest way to unblock a feature was to own the whole path.',
  highlights: [
    'Sole frontend owner on multiple products from zero to production, later extending ownership into Golang REST APIs and PostgreSQL schemas to ship features end-to-end without cross-team handoff delays.',
    'Architected React Native codebases with modular state management and reusable component libraries adopted across 4+ projects, cutting new-project setup time.',
    'Engineered high-performance UIs with Reanimated and Gesture Handler, delivering native-quality experiences from a single codebase on Android and iOS.',
    'Built offline-first workflows with local data sync, background tasks, and barcode scanning for field-operations teams.',
    'Set up a CodePush-based hotfix pipeline shipping critical fixes to production within minutes, bypassing multi-day app store review cycles.',
    'Led code reviews and mentored engineers across React, React Native, Flutter, and Golang — set frontend/mobile architecture standards team-wide.',
    'Owned release management across the App Store and Play Store, coordinating phased rollouts and production monitoring.',
  ],
};

export type CaseStudy = {
  id: string;
  name: string;
  scale: string;
  description: string;
  stack: string[];
  emphasis: ('react' | 'rn' | 'go')[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce',
    name: 'E-Commerce Platform',
    scale: '1M+ users',
    description:
      'Seller console built in React for sellers managing catalog, orders and inventory, plus the React Native merchant and storefront apps sharing UI and business logic with the web console — backed by Golang services I helped ship.',
    stack: ['React', 'TypeScript', 'Redux', 'React Native', 'Golang', 'PostgreSQL'],
    emphasis: ['react', 'rn', 'go'],
  },
  {
    id: 'fintech',
    name: 'FinTech Fee Collection Platform',
    scale: '15K+ users, enterprise clients',
    description:
      'React dashboard and a React Native collections app for a fee-collection product used by enterprise clients, with Golang services handling core payment flows on PostgreSQL and Redis.',
    stack: ['React', 'TypeScript', 'React Native', 'Golang', 'PostgreSQL', 'Redis', 'AWS'],
    emphasis: ['react', 'rn', 'go'],
  },
  {
    id: 'd2c',
    name: 'D2C Health & Wellness',
    scale: 'Consumer storefront + companion app',
    description:
      'Conversion-optimised React/Next.js storefront paired with a React Native companion app, tuned for smooth animation and fast checkout — Golang and Firebase Analytics behind both.',
    stack: ['React', 'Next.js', 'React Native', 'Reanimated', 'Golang', 'Firebase Analytics'],
    emphasis: ['react', 'rn'],
  },
  {
    id: 'logistics',
    name: 'Logistics & Delivery System',
    scale: 'Field-agent operations',
    description:
      'Offline-first React Native app for field agents — barcode scanning, route management and local sync — talking to high-concurrency Golang services over WebSockets, with a React ops console on top.',
    stack: ['React Native', 'React', 'Golang', 'WebSockets', 'Google Maps SDK', 'PostgreSQL'],
    emphasis: ['rn', 'go', 'react'],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  url: string;
  urlLabel: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  stat?: string;
};

export type ProjectTrack = {
  key: 'react' | 'react-native' | 'golang' | 'flutter';
  label: string;
  color: 'accent' | 'rn' | 'go' | 'flutter';
  blurb: string;
  projects: Project[];
};

export const projectTracks: ProjectTrack[] = [
  {
    key: 'react',
    label: 'React',
    color: 'accent',
    blurb:
      'Web interfaces — from real-time collaborative tools to the seller/ops consoles listed above.',
    projects: [
      {
        id: 'collaborative-code-editor',
        name: 'Collaborative Code Editor',
        tagline: 'Google-Docs-style live code editing, built from scratch',
        description:
          'A real-time multi-user code editor: React, TypeScript, Vite and Monaco Editor on the front end, talking to a Go service (Gin, GORM, PostgreSQL, Gorilla WebSocket) that fans out live edits to every client in a room, debounces persistence, and tracks presence.',
        stack: ['React', 'TypeScript', 'Vite', 'Monaco Editor', 'Go', 'Gin', 'PostgreSQL', 'WebSocket'],
        url: 'https://github.com/sabarinath-m/collaborative-code-editor',
        urlLabel: 'View source',
      },
    ],
  },
  {
    key: 'react-native',
    label: 'React Native',
    color: 'rn',
    blurb:
      'Five apps, five deliberately different state-management approaches — a portfolio built to show independent architectural judgment, not one template copy-pasted five times.',
    projects: [
      {
        id: 'meridian',
        name: 'Meridian',
        tagline: 'Offline-first field inspections with CRDT sync',
        description:
          'A field-inspection app with a dynamic form builder, photo capture with GPS tagging, and a Yjs-based CRDT sync engine that resolves conflicts between two offline clients automatically. State lives entirely in WatermelonDB\'s reactive queries — no client state library at all.',
        stack: ['React Native', 'WatermelonDB', 'Yjs (CRDT)', 'TypeScript'],
        url: 'https://github.com/sabarinath-m/meridian-app',
        urlLabel: 'View source',
        stat: 'WatermelonDB reactive queries',
      },
      {
        id: 'frameforge',
        name: 'Frameforge',
        tagline: 'Native document scanner with live edge detection',
        description:
          'Points the camera at a document and tracks its edges live via a hand-rolled native OpenCV frame processor (Kotlin/Swift), auto-capturing once the edges hold steady, then applies perspective correction and on-device OCR.',
        stack: ['React Native', 'VisionCamera', 'OpenCV (native)', 'Redux Toolkit', 'ML Kit OCR'],
        url: 'https://github.com/sabarinath-m/frameforge-app',
        urlLabel: 'View source',
        stat: 'Redux Toolkit',
      },
      {
        id: 'kinetiq',
        name: 'Kinetiq',
        tagline: 'Live pose-tracking rep counter',
        description:
          'Tracks joints live via an ML Kit/Vision native frame processor and counts reps with a hysteresis-based joint-angle state machine — all per-frame data stays in Reanimated shared values so the 30fps pose stream never triggers a React re-render.',
        stack: ['React Native', 'VisionCamera', 'ML Kit Pose Detection', 'Reanimated', 'Skia'],
        url: 'https://github.com/sabarinath-m/Kinetiq-app',
        urlLabel: 'View source',
        stat: 'Context + useReducer',
      },
      {
        id: 'ritual',
        name: 'Ritual',
        tagline: 'Production-grade habit tracker, Turborepo monorepo',
        description:
          'A habit tracker built as a proper monorepo — shared UI and config packages, feature flags, Sentry, Fastlane release automation and ADRs documenting real decisions, including a Recoil-to-Jotai migration forced by a React 19 incompatibility caught on-device.',
        stack: ['React Native', 'Turborepo', 'Jotai', 'Fastlane', 'Sentry'],
        url: 'https://github.com/sabarinath-m/ritual-app',
        urlLabel: 'View source',
        stat: 'Jotai (migrated from Recoil)',
      },
      {
        id: 'offledger',
        name: 'Offledger',
        tagline: 'On-device receipt scanner and expense classifier',
        description:
          'Photographs a receipt, runs on-device OCR, then a pure heuristic layer parses vendor/date/total and a keyword classifier suggests a category — every field stays editable, nothing is auto-saved, and nothing ever leaves the phone.',
        stack: ['React Native', 'ML Kit OCR', 'Context + useReducer', 'TypeScript'],
        url: 'https://github.com/sabarinath-m/offledger-app',
        urlLabel: 'View source',
        stat: 'Context + useReducer',
      },
    ],
  },
  {
    key: 'golang',
    label: 'Golang',
    color: 'go',
    blurb:
      'The backend half of full-stack ownership — Go services that hold up under real concurrency, not just REST wrappers.',
    projects: [
      {
        id: 'go-tunnel',
        name: 'Go Tunnel',
        tagline: 'A self-hosted ngrok, written from scratch',
        description:
          'Exposes a local dev server to the internet through your own domain — a Go server on any VPS auto-provisions Let\'s Encrypt TLS and proxies subdomain traffic over WebSockets to a lightweight client, with a live request-inspector dashboard for debugging traffic in real time.',
        stack: ['Go', 'Gorilla WebSocket', 'Let\'s Encrypt / autocert', 'Docker'],
        url: 'https://github.com/sabarinath-m/go-tunnel',
        urlLabel: 'View source',
      },
    ],
  },
  {
    key: 'flutter',
    label: 'Flutter',
    color: 'flutter',
    blurb: 'A published, actively-maintained package — not just a demo repo.',
    projects: [
      {
        id: 'alphabet-slider',
        name: 'Alphabet Slider',
        tagline: 'Published Flutter package · 160/160 pub points',
        description:
          'A contacts-app-style alphabet index for scrollable lists — drag or tap a letter to jump straight to that section. Published on pub.dev under a verified publisher with a perfect pub score, full docs, and support across all six Flutter platforms.',
        stack: ['Flutter', 'Dart'],
        url: 'https://pub.dev/packages/alphabet_slider',
        urlLabel: 'View on pub.dev',
        secondaryUrl: 'https://github.com/sabarinath-m/alphabet_slider',
        secondaryLabel: 'Source',
        stat: '160/160 pub points',
      },
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript (ES6+)', 'Go', 'Dart'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Redux', 'React Query', 'Tailwind CSS'] },
  {
    label: 'Mobile',
    items: ['React Native', 'Flutter', 'Reanimated', 'Gesture Handler', 'CodePush', 'Fastlane'],
  },
  { label: 'Backend', items: ['Go', 'REST APIs', 'PostgreSQL', 'Redis', 'Microservices'] },
  { label: 'Cloud & DevOps', items: ['AWS', 'Docker', 'CI/CD'] },
];

export const education = {
  degree: 'B.Tech, Computer Science and Engineering',
  institution: 'Mar Athanasius College of Engineering',
  period: '2016 — 2020',
  detail: 'CGPA 8.46',
  achievement: {
    title: 'College Training & Placement Cell Platform',
    description:
      'Built and implemented a recruitment-drive platform for the college Training & Placement Cell, later adopted for an actual campus recruitment drive — awarded a certificate of recognition for the implementation.',
  },
};
