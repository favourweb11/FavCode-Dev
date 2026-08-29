import { ProjectCaseStudy, ServiceItem, PricingPlan, TestimonialItem, FaqItem, AutomationWorkflow } from '../types';

import heroWorkspaceImg from '../assets/images/hero_developer_workspace_1787843279993.jpg';
import favourProfileImg from '../assets/images/favour_developer_profile_1787843292538.jpg';
import dealershipImg from '../assets/images/project_dealership_mockup_1787843306662.jpg';
import restaurantImg from '../assets/images/project_restaurant_mockup_1787843338819.jpg';
import ecommerceImg from '../assets/images/project_ecommerce_mockup_1787843324407.jpg';
import automationBannerImg from '../assets/images/automation_pipeline_banner_1787843350970.jpg';
import servicesBannerImg from '../assets/images/services_fullstack_banner_1787843365174.jpg';

export const ASSET_IMAGES = {
  heroWorkspace: heroWorkspaceImg,
  developerProfile: favourProfileImg,
  dealership: dealershipImg,
  restaurant: restaurantImg,
  ecommerce: ecommerceImg,
  automationBanner: automationBannerImg,
  servicesBanner: servicesBannerImg,
};

export const DEVELOPER_INFO = {
  name: 'Favour Ogunmola',
  brandName: 'FavCode Dev',
  role: 'Senior Full-Stack Developer & Automation Architect',
  experienceYears: 5,
  projectsDelivered: 45,
  clientSatisfaction: '99%',
  avgResponseTime: '< 2 Hours',
  phone: '+234 816 766 8000',
  email: 'favourcode111@gmail.com',
  location: 'Lagos, Nigeria & Serving Clients Globally',
  bio: "I build high-converting digital products, custom web applications, and automated cloud workflows that solve complex business bottlenecks and turn visitors into paying customers.",
  bankDetails: {
    bankName: 'WEMA BANK',
    accountNumber: '0251427478',
    accountName: 'OGUNMOLA FAVOUR',
    currency: 'NGN (Naira)',
    note: 'For USD / International transfers: Contact on WhatsApp for instant Wise or USD virtual card link.'
  },
  socials: {
    whatsapp: 'https://wa.me/2348167668000?text=Hello%20FavCode%20Dev%2C%20I%20have%20a%20project%20I%27d%20like%20to%20discuss.',
    github: 'https://github.com/ogunmolafavour',
    linkedin: 'https://www.linkedin.com/in/favour-ogunmola',
    facebook: 'https://www.facebook.com/favcodedev'
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'business-website',
    title: 'High-Converting Business Websites',
    category: 'Web Presence',
    shortDesc: 'Fast, responsive, SEO-ready websites designed to build brand authority and generate quality client enquiries.',
    fullDesc: 'Custom-designed responsive websites engineered for speed, mobile responsiveness, and search engine optimization. Includes clean design systems, contact form automations, Google Analytics 4, and instant WhatsApp booking integration.',
    iconName: 'Globe',
    turnaround: '1–2 Weeks',
    deliverables: [
      'Custom UI design with responsive layouts',
      'SEO & Google Search Console configuration',
      'Automated contact & lead capture forms',
      'High-speed CDN hosting & SSL setup',
      '14-day post-launch technical support'
    ],
    startingPriceUsd: 450,
    startingPriceNgn: 350000,
    featured: false
  },
  {
    id: 'web-application',
    title: 'Custom Web Applications & SaaS',
    category: 'Product Engineering',
    shortDesc: 'Full-featured web apps with secure user authentication, role-based admin portals, dynamic dashboards, and cloud databases.',
    fullDesc: 'Robust single-page and server-rendered SaaS web applications. Built with TypeScript, React 19, Node.js, and PostgreSQL/MongoDB to handle complex workflows, user roles, real-time updates, and high concurrency.',
    iconName: 'LayoutGrid',
    turnaround: '3–5 Weeks',
    deliverables: [
      'Role-based Access Control (Admin / User / Manager)',
      'Interactive analytical dashboards & charts',
      'RESTful & GraphQL API integrations',
      'Cloud database with automated backups',
      '30-day comprehensive support window'
    ],
    startingPriceUsd: 1200,
    startingPriceNgn: 950000,
    featured: true
  },
  {
    id: 'ecommerce',
    title: 'Modern E-Commerce Storefronts',
    category: 'E-Commerce',
    shortDesc: 'Scalable online stores with seamless product catalogs, smart search, cart flows, Stripe / Paystack payments, and order management.',
    fullDesc: 'End-to-end e-commerce solutions built for conversion. Features high-speed product catalogs, variant selectors, multi-currency support, cart persistence, automated invoice generation, and real-time inventory tracking.',
    iconName: 'ShoppingCart',
    turnaround: '2–4 Weeks',
    deliverables: [
      'Stripe & Paystack multi-gateway payment processing',
      'Customer account portal & order tracking history',
      'Admin inventory, discount & coupon manager',
      'Automated email receipts and shipping updates',
      'Abandoned cart recovery webhooks'
    ],
    startingPriceUsd: 950,
    startingPriceNgn: 750000,
    featured: false
  },
  {
    id: 'ai-automation',
    title: 'AI & Workflow Automation',
    category: 'Automation',
    shortDesc: 'Connect your website to AI models, CRMs, WhatsApp webhooks, and automated email sequences to eliminate manual tasks.',
    fullDesc: 'Supercharge your digital operations with automated pipelines: AI chatbot assistants, lead routing to Google Sheets/Notion, automatic PDF invoicing, webhook triggers, and automated SMS/WhatsApp customer notifications.',
    iconName: 'Cpu',
    turnaround: '1–3 Weeks',
    deliverables: [
      'Gemini / OpenAI API smart features integration',
      'Webhook synchronization with CRM & Slack/WhatsApp',
      'Automated client onboarding & email sequences',
      'Background cron tasks & automated report generation',
      'Zero-maintenance serverless cloud functions'
    ],
    startingPriceUsd: 650,
    startingPriceNgn: 500000,
    featured: true
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Prototyping',
    category: 'Design Systems',
    shortDesc: 'Bespoke interface designs with high-fidelity components, intuitive micro-interactions, and conversion-centered layouts.',
    fullDesc: 'Modern UI/UX designed in Figma with complete design tokens, fluid typography, dark/light themes, and accessible color contrasts before writing a single line of production code.',
    iconName: 'PenTool',
    turnaround: '1–2 Weeks',
    deliverables: [
      'Figma source files with full component library',
      'Clickable interactive prototype',
      'Mobile, tablet, and desktop responsive specs',
      'Developer handoff assets & SVG icons'
    ],
    startingPriceUsd: 400,
    startingPriceNgn: 300000,
    featured: false
  }
];

export const PROJECTS_LIST: ProjectCaseStudy[] = [
  {
    id: 'dealership',
    title: 'Apex Motors Auto Dealership Platform',
    client: 'Apex Automotive Group',
    category: 'Automotive & Inventory System',
    image: ASSET_IMAGES.dealership,
    summary: 'Comprehensive vehicle showroom and dealership inventory platform with dynamic vehicle filtering, booking test drives, and financing calculator.',
    description: 'Developed an enterprise-grade car dealership digital showroom for a multi-branch automotive dealer. Reduced enquiry response time by 75% and enabled customers to browse over 400+ vehicle specifications with instant car loan calculators.',
    tags: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'WhatsApp API'],
    metrics: [
      { label: 'Enquiry Surge', value: '+142%' },
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Inventory Loaded', value: '400+ Cars' },
      { label: 'Booking Time', value: '< 45 Secs' }
    ],
    challenge: 'The client had an outdated WordPress site where vehicle listings took over 8 seconds to load, losing qualified buyers on mobile connections.',
    solution: 'Built a headless decoupled application using React with server-side caching, automated vehicle image compression, and an instant WhatsApp lead webhook.',
    features: [
      'Live vehicle search by Make, Model, Year, Fuel Type, and Price range',
      'Interactive Monthly Financing & Repayment loan calculator',
      'Automated Test-Drive scheduler syncing with Google Calendar',
      'Admin portal for instant multi-photo vehicle upload and sold status toggle'
    ]
  },
  {
    id: 'restaurant',
    title: 'Gourmet Kitchen Online Food Ordering & Table Booking',
    client: 'Bistrot Parisien & Lounge',
    category: 'Food & Beverage SaaS',
    image: ASSET_IMAGES.restaurant,
    summary: 'Modern digital dining experience featuring visual culinary menus, live table reservations, kitchen order ticketing, and delivery dispatch.',
    description: 'Engineered a full-service food ordering web application with digital QR-code dining menus, real-time kitchen order tickets, automated customer SMS status updates, and integrated card payments.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'WebSockets', 'Stripe', 'MongoDB'],
    metrics: [
      { label: 'Online Sales Growth', value: '+215%' },
      { label: 'Order Accuracy', value: '99.4%' },
      { label: 'Average Order Value', value: '+$18.50' },
      { label: 'Order Time', value: 'Under 1 min' }
    ],
    challenge: 'Third-party delivery apps were taking 28% commissions on every meal order, significantly shrinking restaurant profit margins.',
    solution: 'Created an independent branded ordering platform with zero third-party commissions, integrated Stripe checkout, and automated kitchen receipt printing.',
    features: [
      'Visual menu with dietary filters (Vegan, Gluten-Free, Halal, Chef Special)',
      'Real-time live order status tracking (Received -> Kitchen -> Out for Delivery)',
      'Table reservation calendar with automated email confirmations',
      'Customer rewards loyalty points and coupon promo engine'
    ]
  },
  {
    id: 'ecommerce',
    title: 'Aura Luxury Fashion & Apparel Store',
    client: 'Aura Collective London',
    category: 'High-End E-Commerce',
    image: ASSET_IMAGES.ecommerce,
    summary: 'High-performance luxury apparel store featuring 3D product previews, multi-currency checkout, automated inventory sync, and Stripe integration.',
    description: 'Designed and deployed a minimalist luxury fashion storefront. Optimized for sub-second page loads, global shipping calculations, automated currency conversions, and automated customer receipt dispatch.',
    tags: ['React 19', 'TypeScript', 'Stripe API', 'Tailwind CSS', 'Motion', 'Cloudflare Edge'],
    metrics: [
      { label: 'Cart Conversion', value: '+38%' },
      { label: 'Bounce Rate', value: '18.2%' },
      { label: 'Page Load Speed', value: '0.6s' },
      { label: 'Checkout Success', value: '99.8%' }
    ],
    challenge: 'International shoppers experienced high cart abandonment due to complex checkout flows and lack of local currency transparency.',
    solution: 'Implemented 1-click Apple Pay/Google Pay/Stripe checkout, automated geolocation currency detection, and abandoned cart reminder sequences.',
    features: [
      'Smart size & color variant selector with real-time stock availability',
      'Persistent cross-device shopping bag and wishlist sync',
      'Automated tax, duty & global express courier rate calculator',
      'Stripe webhooks for automated receipt generation and inventory reduction'
    ]
  }
];

export const AUTOMATION_WORKFLOWS: AutomationWorkflow[] = [
  {
    id: 'lead-qualification',
    title: 'Instant Lead Notification & WhatsApp Dispatch',
    trigger: 'User submits project enquiry on website',
    action: 'AI parses requirements, calculates estimated cost tier, and sends WhatsApp & Email webhook',
    outcome: 'Client receives instant reference ID; developer gets alerted in < 3 seconds',
    icon: 'MessageSquareShare',
    badge: 'Real-Time Sync',
    tech: ['WhatsApp Business Webhook', 'Node.js', 'Resend API']
  },
  {
    id: 'cicd-deploy',
    title: 'Continuous Integration & Zero-Downtime Deployment',
    trigger: 'Code pushed to GitHub main branch',
    action: 'Automated test suite runs linting, type-checks, asset compression, and builds production bundle',
    outcome: 'Updated website is live across global edge servers in under 45 seconds',
    icon: 'GitPullRequest',
    badge: 'DevOps Automation',
    tech: ['GitHub Actions', 'Docker', 'Google Cloud Run']
  },
  {
    id: 'invoice-billing',
    title: 'Automated Invoicing & Milestone Receipts',
    trigger: 'Client confirms project or approves development milestone',
    action: 'System generates branded PDF agreement and invoice with dynamic bank transfer & card links',
    outcome: 'Secure payment confirmation dispatched to client email and accounting ledger updated',
    icon: 'Receipt',
    badge: 'Financial Flow',
    tech: ['PDF Generation API', 'Stripe Webhooks', 'Automated Ledger']
  },
  {
    id: 'seo-sitemap',
    title: 'Automated SEO & Schema Metadata Generation',
    trigger: 'New blog post or portfolio case study published',
    action: 'Dynamic XML sitemap regenerated, schema.org JSON-LD updated, and Google Indexing API pinged',
    outcome: 'New pages indexed on Google search results within hours instead of weeks',
    icon: 'Sparkles',
    badge: 'Search Optimization',
    tech: ['Google Indexing API', 'Dynamic Schema', 'Next-Sitemap']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Site',
    tagline: 'Ideal for small businesses, personal brands, and professional portfolios',
    priceUsd: 450,
    priceNgn: 350000,
    features: [
      'Up to 5 custom-designed responsive pages',
      'Mobile-first layout & smooth entering animations',
      'Automated contact form with WhatsApp / Email sync',
      'Google Search Console & Meta Tag SEO setup',
      'Sub-second page load speed optimization',
      'High-speed cloud hosting setup & Free SSL',
      '2 weeks of post-launch warranty & bug fixes'
    ],
    supportDuration: '2 Weeks Technical Support',
    targetAudience: 'Startups, Consultants, Solopreneurs'
  },
  {
    id: 'growth',
    name: 'Growth & E-Commerce',
    tagline: 'For growing brands that require custom workflows, store checkouts, or portals',
    priceUsd: 1200,
    priceNgn: 950000,
    featured: true,
    badge: 'Most Popular',
    features: [
      'Everything in Starter Site package',
      'Full e-commerce or custom web app features',
      'Stripe / Paystack multi-gateway payment integration',
      'Role-based admin management dashboard',
      'User authentication & account profiles',
      'Automated email receipts & order status notifications',
      'Database integration (PostgreSQL / MongoDB)',
      '1 month of priority support & feature tweaks'
    ],
    supportDuration: '30 Days Priority Support',
    targetAudience: 'Growing Businesses & Online Stores'
  },
  {
    id: 'enterprise',
    name: 'Full-Stack & Custom SaaS',
    tagline: 'Bespoke software architecture, AI integrations, and high-scale applications',
    priceUsd: 2400,
    priceNgn: 1900000,
    isCustom: true,
    features: [
      'Custom architecture tailored to your specific business logic',
      'AI models integration (Gemini 3.7 Flash, intelligent agents)',
      'Complex multi-step workflow automations & webhooks',
      'High-concurrency microservices & API gateways',
      'Interactive analytical data visualizers & reports',
      'Complete CI/CD automated deployment pipeline',
      'Full source code ownership, documentation & video walkthrough',
      '2 months of dedicated engineering maintenance'
    ],
    supportDuration: '60 Days Dedicated Engineering Support',
    targetAudience: 'Enterprise Brands & Funded Tech Startups'
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Michael Johnson',
    role: 'Managing Director',
    company: 'Apex Automotive Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    comment: 'FavCode Dev completely revolutionized our digital showroom. The site is blazing fast, and test drive inquiries increased by over 140% in our first month after launch. Favour is an exceptional engineer.',
    projectDelivered: 'Auto Dealership Platform'
  },
  {
    id: 't2',
    name: 'Sarah Williams',
    role: 'Founder & Creative Director',
    company: 'Aura Luxury Apparel',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    comment: 'Working with Favour was smooth from start to finish. He did not just deliver code; he understood the luxury aesthetic our brand required and built an effortless checkout flow.',
    projectDelivered: 'E-Commerce Storefront'
  },
  {
    id: 't3',
    name: 'Dr. David Adebayo',
    role: 'Co-Founder & CEO',
    company: 'HealthVitals Telemed',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    comment: 'The automated WhatsApp notification flow and patient booking portal built by FavCode Dev saved our clinic dozens of admin hours each week. Unmatched speed and code quality.',
    projectDelivered: 'Healthcare Web Portal'
  }
];

export const TECH_STACK = [
  { name: 'TypeScript', category: 'Language', icon: 'FileCode2', proficiency: 95, color: '#3178c6' },
  { name: 'React 19', category: 'Frontend', icon: 'Atom', proficiency: 98, color: '#22d3ee' },
  { name: 'Node.js', category: 'Backend', icon: 'Server', proficiency: 92, color: '#22c55e' },
  { name: 'Next.js', category: 'Full-Stack', icon: 'Layers', proficiency: 94, color: '#ffffff' },
  { name: 'Tailwind CSS', category: 'Styling', icon: 'Palette', proficiency: 98, color: '#38bdf8' },
  { name: 'PostgreSQL', category: 'Database', icon: 'Database', proficiency: 90, color: '#60a5fa' },
  { name: 'MongoDB', category: 'Database', icon: 'HardDrive', proficiency: 88, color: '#34d399' },
  { name: 'Gemini AI SDK', category: 'AI & ML', icon: 'Sparkles', proficiency: 92, color: '#a855f7' },
  { name: 'Stripe & Paystack', category: 'Payments', icon: 'CreditCard', proficiency: 95, color: '#6366f1' },
  { name: 'Docker & CI/CD', category: 'DevOps', icon: 'Box', proficiency: 86, color: '#38bdf8' },
  { name: 'Git & GitHub', category: 'Version Control', icon: 'GitBranch', proficiency: 96, color: '#f97316' },
  { name: 'REST & GraphQL', category: 'APIs', icon: 'Network', proficiency: 94, color: '#eab308' }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'timeline',
    question: 'How long does a typical project take from start to finish?',
    answer: 'Standard business websites take 1 to 2 weeks. Custom e-commerce platforms and web applications typically take 3 to 5 weeks, broken down into clearly defined iterative milestones where you review live staging previews.'
  },
  {
    id: 'faq-2',
    category: 'ownership',
    question: 'Will I own 100% of the code, domain, and assets?',
    answer: 'Yes! Upon final project completion and invoice settlement, you receive complete full ownership of all source code repositories, design files, domain configurations, and cloud hosting accounts. Zero vendor lock-in.'
  },
  {
    id: 'faq-3',
    category: 'pricing',
    question: 'How do project milestone payments work?',
    answer: 'Projects usually begin with a 50% deposit to commence discovery and development, with the remaining 50% due upon final testing and domain launch. For larger custom applications, payments can be split into 3 manageable milestones (30% start / 40% mid-review / 30% launch).'
  },
  {
    id: 'faq-4',
    category: 'technical',
    question: 'Do you implement automations like WhatsApp alerts, AI chatbots, and email receipts?',
    answer: 'Yes, automation is one of our primary core strengths. We integrate webhooks, automated CRM lead capture, AI query assistants (using Gemini), WhatsApp notifications, and automated invoice dispatch into your application.'
  },
  {
    id: 'faq-5',
    category: 'process',
    question: 'Do you offer post-launch technical support and maintenance?',
    answer: 'Every project comes with an included complimentary warranty support window (2 to 8 weeks depending on the package) to address any bugs, tweaks, or hosting questions. Ongoing monthly maintenance and feature expansion plans are also available.'
  },
  {
    id: 'faq-6',
    category: 'pricing',
    question: 'How can I pay for my project?',
    answer: 'We accept instant Direct Bank Transfer to WEMA Bank (Naira), as well as international debit/credit cards, Wise transfers, and USD wire payments. Detailed bank details are accessible directly in the payment modal on this website.'
  }
];
