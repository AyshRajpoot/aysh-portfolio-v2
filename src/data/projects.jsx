export const PROJECTS = [
  {
    id: 'petronas',
    tagIcon: 'fa-solid fa-fire',
    tagLabel: 'Featured Project',
    title: 'Petronas — Malaysia Bid Round (MBR 2026)',
    sub: 'Corporate Upstream Bidding Platform · MERN Stack',
    desc: (
      <>
        I built the <b style={{ color: '#fff' }}>complete MERN stack backend</b> for the{' '}
        <b style={{ color: '#fff' }}>PETRONAS Malaysia Bid Round 2026</b> — Node.js, Express & MongoDB with{' '}
        <b style={{ color: '#fff' }}>RESTful APIs</b>, Cloudinary media handling, email templates, JWT auth and full
        input validation — powering the 3D island map, exploration blocks & clusters, the myPROdata data platform,
        media gallery and contact modules.
      </>
    ),
    link: {
      href: 'https://malaysiabidround.com/',
      label: 'Visit Live Website',
      icon: 'fa-solid fa-arrow-up-right-from-square',
    },
    reversed: false,
    tags: [
      ['fa-brands fa-node-js', 'Node.js'],
      ['fa-solid fa-server', 'Express'],
      ['fa-solid fa-leaf', 'MongoDB'],
      ['fa-solid fa-cloud', 'Cloudinary'],
      ['fa-solid fa-envelope-open-text', 'Email Templates'],
      ['fa-solid fa-plug', 'REST API'],
      ['fa-solid fa-key', 'JWT Auth'],
      ['fa-solid fa-shield-halved', 'Validation'],
    ],
    slides: [
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790231491/Screenshot_132.png', cap: 'Home — Interactive 3D Island Map Navigation' },
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790231494/Screenshot_137.png', cap: 'Opportunities on Offer — Exploration Blocks & Clusters Map' },
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790231495/Screenshot_136.png', cap: 'PETRONAS myPROdata — E&P Data Platform with AI Features' },
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790231499/Screenshot_134.png', cap: 'Media Gallery — MBR Video Playlists (2021 – 2026)' },
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790231502/Screenshot_135.png', cap: 'Contact — Exploration Blocks & DRO Teams' },
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790231491/Screenshot_133.png', cap: 'MBR 2026 — Platform Sections Overview' },
    ],
  },
  {
    id: 'cab-site',
    groupDivider: {
      icon: 'fa-solid fa-layer-group',
      label: 'Create A Button (CAB) — Complete Platform',
    },
    tagIcon: 'fa-solid fa-globe',
    tagLabel: 'Official Website',
    title: 'CAB — Marketing Website',
    sub: 'Brand Presence · createabutton.com',
    desc: (
      <>
        I handled the <b style={{ color: '#fff' }}>order flow frontend & backend</b> of the CAB marketing website —
        building the complete order section and integrating the <b style={{ color: '#fff' }}>Stripe payment API</b>{' '}
        end-to-end, with Next.js frontend and a MERN backend (Node.js, Express, MongoDB, JWT).
      </>
    ),
    link: {
      href: 'https://createabutton.com/',
      label: 'Visit Official Website',
      icon: 'fa-solid fa-globe',
    },
    reversed: true,
    tags: [
      ['fa-brands fa-react', 'Next.js'],
      ['fa-brands fa-node-js', 'Node.js'],
      ['fa-solid fa-server', 'Express'],
      ['fa-solid fa-leaf', 'MongoDB'],
      ['fa-solid fa-key', 'JWT Auth'],
      ['fa-brands fa-stripe-s', 'Stripe'],
    ],
    slides: [
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790231367/Screenshot_140.png', cap: 'Official Website — Home Page' },
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790231367/Screenshot_141.png', cap: 'Official Website — Design & Order Showcase' },
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790231368/Screenshot_142.png', cap: 'Official Website — Product Features' },
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790231368/Screenshot_143.png', cap: 'Official Website — How It Works' },
    ],
  },
  {
    id: 'cab-studio',
    tagIcon: 'fa-solid fa-palette',
    tagLabel: 'User Panel · Design Studio',
    title: 'CAB — Interactive Design Studio',
    sub: 'Browser-Based Custom Button Designer',
    desc: (
      <>
        I designed and built the CAB user panel <b style={{ color: '#fff' }}>completely frontend & backend</b> on
        Next.js + MERN — a browser-based designer for{' '}
        <b style={{ color: '#fff' }}>custom QR pin buttons & fridge magnets</b> with templates, live editing,
        real-time pricing, QR engine, Cloudinary media and a Stripe-powered checkout flow.
      </>
    ),
    link: {
      href: 'https://app.createabutton.com/',
      label: 'Live Design Studio',
      icon: 'fa-solid fa-palette',
    },
    reversed: false,
    tags: [
      ['fa-brands fa-react', 'Next.js'],
      ['fa-brands fa-node-js', 'Node.js'],
      ['fa-solid fa-server', 'Express'],
      ['fa-solid fa-leaf', 'MongoDB'],
      ['fa-solid fa-qrcode', 'QR Engine'],
      ['fa-solid fa-cloud', 'Cloudinary'],
      ['fa-brands fa-stripe-s', 'Stripe'],
    ],
    slides: [
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790230715/Screenshot_129.png', cap: 'User Panel — QR Button Design Studio' },
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790230714/Screenshot_130.png', cap: 'User Panel — Templates & Elements' },
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790230714/Screenshot_131.png', cap: 'User Panel — Live Design Editor' },
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790231036/Screenshot_139.png', cap: 'User Panel — Preview & Order Flow' },
    ],
  },
  {
    id: 'cab-admin',
    tagIcon: 'fa-solid fa-gauge-high',
    tagLabel: 'Admin Panel',
    title: 'CAB — Admin Dashboard',
    sub: 'Platform Control Center · Next.js · MERN',
    desc: (
      <>
        I built the CAB admin panel <b style={{ color: '#fff' }}>complete frontend & backend</b> on Next.js + MERN —
        a live leads & orders dashboard with CSV export, plus template, category, product and feedback management,
        with <b style={{ color: '#fff' }}>email templates</b>, <b style={{ color: '#fff' }}>Cloudinary</b> and{' '}
        <b style={{ color: '#fff' }}>JWT auth</b> throughout.
      </>
    ),
    link: {
      href: 'https://admin.createabutton.com/en/dashboard',
      label: 'Live Admin Panel',
      icon: 'fa-solid fa-gauge-high',
    },
    reversed: true,
    tags: [
      ['fa-brands fa-react', 'Next.js'],
      ['fa-brands fa-node-js', 'Node.js'],
      ['fa-solid fa-server', 'Express'],
      ['fa-solid fa-leaf', 'MongoDB'],
      ['fa-solid fa-key', 'JWT Auth'],
      ['fa-solid fa-envelope-open-text', 'Email Templates'],
      ['fa-solid fa-cloud', 'Cloudinary'],
      ['fa-solid fa-chart-line', 'Analytics'],
    ],
    slides: [
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790230713/Screenshot_126.png', cap: 'Admin Panel — Dashboard Analytics' },
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790230713/Screenshot_127.png', cap: 'Admin Panel — Leads & Orders Management' },
      { img: 'https://res.cloudinary.com/erspxhnu/image/upload/v1790230713/Screenshot_128.png', cap: 'Admin Panel — Templates & Categories Management' },
    ],
  },
  {
    id: 'luna',
    groupDivider: { icon: 'fa-solid fa-folder-open', label: 'More Projects' },
    tagIcon: 'fa-solid fa-heart-pulse',
    tagLabel: 'AI Health Platform',
    title: 'Luna — AI Health Platform',
    sub: 'MERN Backend · Voice AI · Wearables Integration',
    desc: (
      <>
        I developed the MERN backend for an <b style={{ color: '#fff' }}>AI health platform</b> — integrating the
        Terra wearables API for real-time health data and ElevenLabs voice AI for chatbot & call agent, secured with
        JWT and role-based access.
      </>
    ),
    link: null,
    reversed: false,
    tags: [
      ['fa-brands fa-node-js', 'Node.js'],
      ['fa-solid fa-server', 'Express'],
      ['fa-solid fa-leaf', 'MongoDB'],
      ['fa-solid fa-heart-pulse', 'Terra API'],
      ['fa-solid fa-microphone-lines', 'ElevenLabs'],
    ],
    slides: [
      { icon: 'fa-solid fa-heart-pulse', label: 'Luna — Screenshots Coming Soon', cap: 'Luna — AI Health Platform (Wearables + Voice AI)' },
    ],
  },
  {
    id: 'personas',
    tagIcon: 'fa-solid fa-id-badge',
    tagLabel: 'Auth & Media Systems',
    title: "Persona's MBR-2K26",
    sub: 'Authentication · Email Integration · Media Handling',
    desc: (
      <>
        I'm building JWT & cookie-based <b style={{ color: '#fff' }}>authentication</b>, Nodemailer transactional
        email integration, and Cloudinary secure file & image handling for the platform's protected user flows.
      </>
    ),
    link: null,
    reversed: true,
    tags: [
      ['fa-solid fa-key', 'JWT'],
      ['fa-solid fa-envelope-open-text', 'Nodemailer'],
      ['fa-solid fa-cloud', 'Cloudinary'],
      ['fa-brands fa-node-js', 'Node.js'],
    ],
    slides: [
      { icon: 'fa-solid fa-id-badge', label: "Persona's MBR-2K26 — Screenshots Coming Soon", cap: "Persona's MBR-2K26 — Auth, Email & Media Systems" },
    ],
  },
  {
    id: 'zeolit',
    tagIcon: 'fa-solid fa-cart-shopping',
    tagLabel: 'Full-Stack E-Commerce',
    title: 'Zeolit — Dropshipping Platform',
    sub: 'Next.js · Node.js · Supplier Integration · Stripe',
    desc: (
      <>
        I built the full-stack <b style={{ color: '#fff' }}>dropshipping e-commerce platform</b> — storefront & admin
        with auth, Stripe checkout, Ingram Micro supplier sync, automated inventory/pricing, order fulfilment,
        commissions and analytics.
      </>
    ),
    link: null,
    reversed: false,
    tags: [
      ['fa-brands fa-react', 'Next.js'],
      ['fa-brands fa-node-js', 'Node.js'],
      ['fa-brands fa-stripe-s', 'Stripe'],
      ['fa-solid fa-truck-fast', 'Ingram Micro'],
      ['fa-solid fa-leaf', 'MongoDB'],
    ],
    slides: [
      { icon: 'fa-solid fa-cart-shopping', label: 'Zeolit — Screenshots Coming Soon', cap: 'Zeolit — Full-Stack Dropshipping E-Commerce Platform' },
    ],
  },
  {
    id: 'ufund',
    tagIcon: 'fa-solid fa-hand-holding-dollar',
    tagLabel: 'Crowdfunding Platform',
    title: 'UFund — Crowdfunding App',
    sub: 'NestJS · Prisma · PostgreSQL',
    desc: (
      <>
        Working on the <b style={{ color: '#fff' }}>UFund crowdfunding platform</b> built with{' '}
        <b style={{ color: '#fff' }}>NestJS, Prisma & PostgreSQL</b> — I created the dynamic email templates,
        integrated them into the campaign and donor flows, and worked on the UI for the frontend.
      </>
    ),
    link: null,
    reversed: true,
    tags: [
      ['fa-solid fa-layer-group', 'NestJS'],
      ['fa-solid fa-database', 'Prisma'],
      ['fa-solid fa-table', 'PostgreSQL'],
      ['fa-solid fa-envelope-open-text', 'Email Templates'],
    ],
    slides: [
      { icon: 'fa-solid fa-hand-holding-dollar', label: 'UFund — Screenshots Coming Soon', cap: 'UFund — Crowdfunding REST APIs & Email System' },
    ],
  },
  {
    id: 'gesture',
    tagIcon: 'fa-solid fa-hand',
    tagLabel: 'AI / Computer Vision',
    title: 'Gesture Control',
    sub: 'AI-Based Hand Gesture Recognition',
    desc: (
      <>
        I developed the <b style={{ color: '#fff' }}>AI-based hand gesture recognition</b> system — real-time finger
        tracking mapped to system volume control, no touch required.
      </>
    ),
    link: null,
    reversed: false,
    tags: [
      ['fa-brands fa-python', 'Python'],
      ['fa-solid fa-eye', 'OpenCV'],
      ['fa-solid fa-robot', 'AI'],
    ],
    slides: [
      { icon: 'fa-solid fa-hand', label: 'Gesture Control — Screenshots Coming Soon', cap: 'Gesture Control — AI Hand Movement Volume Control' },
    ],
  },
  {
    id: 'swift',
    tagIcon: 'fa-brands fa-android',
    tagLabel: 'Mobile Application',
    title: 'Swift Services',
    sub: 'Android Application · Java',
    desc: (
      <>
        I built the services app with <b style={{ color: '#fff' }}>Android Studio & Java</b> — from UI design and
        backend connectivity to deployment across the full mobile lifecycle.
      </>
    ),
    link: null,
    reversed: true,
    tags: [
      ['fa-brands fa-android', 'Android Studio'],
      ['fa-brands fa-java', 'Java'],
      ['fa-solid fa-mobile-screen-button', 'Mobile UI'],
    ],
    slides: [
      { icon: 'fa-brands fa-android', label: 'Swift Services — Screenshots Coming Soon', cap: 'Swift Services — Android Mobile Application' },
    ],
  },
]