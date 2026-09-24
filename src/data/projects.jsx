export const PROJECTS = [
  {
    id: 'petronas',
    tagIcon: 'fa-solid fa-fire',
    tagLabel: 'Featured Project',
    title: 'Petronas — Malaysia Bid Round (MBR 2026)',
    sub: 'Corporate Upstream Bidding Platform · MERN Stack',
    desc: (
      <>
        Developed the web platform for <b style={{ color: '#fff' }}>PETRONAS Malaysia Bid Round 2026</b> — a
        corporate-grade application for petroleum exploration bid rounds. Built scalable backend services and REST
        APIs with Node.js, Express and MongoDB, powering the interactive 3D island map, Opportunities on Offer with
        exploration blocks and clusters, the PETRONAS myPROdata data platform with AI-powered features, media gallery
        with video playlists (MBR 2021–2026), and contact modules — all live in production.
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
      ['fa-solid fa-plug', 'REST API'],
      ['fa-solid fa-key', 'JWT Auth'],
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
        The public face of the brand — a polished marketing website showcasing{' '}
        <b style={{ color: '#fff' }}>custom buttons, personalized pins & trade show giveaways</b>. It explains the
        design-to-delivery process, highlights key features like fast production, no minimum orders and bulk
        discounts, builds trust with real customer stats, and funnels visitors straight into the design studio to
        start creating.
      </>
    ),
    link: {
      href: 'https://createabutton.com/',
      label: 'Visit Official Website',
      icon: 'fa-solid fa-globe',
    },
    reversed: true,
    tags: [
      ['fa-solid fa-globe', 'Responsive UI'],
      ['fa-solid fa-bullhorn', 'Marketing'],
      ['fa-solid fa-cart-shopping', 'E-Commerce'],
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
        An interactive design studio where customers{' '}
        <b style={{ color: '#fff' }}>create custom QR pin buttons & fridge magnets</b> right in the browser — pick
        from ready-made templates, edit text and colors, add elements and upload their own artwork with a live
        editor. Choose button size (1 to 3 inch) and back type (Pin or Fridge Magnet), see{' '}
        <b style={{ color: '#fff' }}>real-time pricing</b>, preview the final product, and place the order through a
        smooth checkout flow.
      </>
    ),
    link: {
      href: 'https://app.createabutton.com/',
      label: 'Live Design Studio',
      icon: 'fa-solid fa-palette',
    },
    reversed: false,
    tags: [
      ['fa-brands fa-node-js', 'Node.js'],
      ['fa-solid fa-cloud', 'Cloudinary'],
      ['fa-brands fa-stripe-s', 'Stripe'],
      ['fa-solid fa-qrcode', 'QR Engine'],
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
    sub: 'Platform Control Center · Node.js · MongoDB',
    desc: (
      <>
        Powerful control center for the entire Create A Button platform. Track every order in real time with a{' '}
        <b style={{ color: '#fff' }}>leads & orders dashboard</b> — statuses like Awaiting Contact, Pending,
        Delivered and Cancelled with one-click CSV export. Manage <b style={{ color: '#fff' }}>button templates</b>{' '}
        (add, edit, duplicate, delete), organize them into categories, and control products, custom fonts, image
        assets and customer feedback — all from one secure, JWT-protected dashboard.
      </>
    ),
    link: {
      href: 'https://admin.createabutton.com/en/dashboard',
      label: 'Live Admin Panel',
      icon: 'fa-solid fa-gauge-high',
    },
    reversed: true,
    tags: [
      ['fa-brands fa-node-js', 'Node.js'],
      ['fa-solid fa-leaf', 'MongoDB'],
      ['fa-solid fa-key', 'JWT Auth'],
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
        Developed the MERN backend for an <b style={{ color: '#fff' }}>AI-based health platform</b> with wearable
        integrations, voice AI chatbot, AI call agent and notification systems. Integrated{' '}
        <b style={{ color: '#fff' }}>Terra wearables API</b> to sync real-time health data from fitness devices, and{' '}
        <b style={{ color: '#fff' }}>ElevenLabs voice AI</b> to power natural conversational chat and calling features
        — all secured with JWT authentication and role-based access.
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
        Working on <b style={{ color: '#fff' }}>authentication and authorization</b> systems with JWT tokens and
        cookie-based sessions, <b style={{ color: '#fff' }}>email integration</b> for transactional communications,
        and <b style={{ color: '#fff' }}>Cloudinary integration</b> for secure file and image handling across the
        platform — ensuring scalable and protected user data flows.
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
        Developed a <b style={{ color: '#fff' }}>full-stack dropshipping e-commerce platform</b> with Next.js,
        Node.js, Express and MongoDB. Built the customer storefront and admin dashboard with authentication,
        product/category management, card & Stripe checkout,{' '}
        <b style={{ color: '#fff' }}>Ingram Micro supplier integration</b>, automated inventory/price synchronization,
        order & fulfilment management, commissions, email templates, search, filtering and dashboard analytics.
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
    sub: 'REST APIs · Dynamic Email Templates',
    desc: (
      <>
        Working on <b style={{ color: '#fff' }}>dynamic email templates</b> and{' '}
        <b style={{ color: '#fff' }}>RESTful APIs</b> for a fundraising platform — handling campaign flows, donor
        communications and transactional email systems that keep backers informed at every stage of the funding
        lifecycle.
      </>
    ),
    link: null,
    reversed: true,
    tags: [
      ['fa-brands fa-node-js', 'Node.js'],
      ['fa-solid fa-plug', 'REST API'],
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
        Developed an <b style={{ color: '#fff' }}>AI-based gesture control project</b> that uses hand movements in the
        air to control system volume — allowing it to be increased or decreased through hand gestures, no touch
        required. Real-time hand tracking processes each frame to detect finger positions and map them to volume
        actions.
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
        A services mobile application built with <b style={{ color: '#fff' }}>Android Studio</b>, covering the
        complete mobile development lifecycle from UI design to backend connectivity and deployment.
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