import { Service, Industry, Testimonial, IndustryRiskRow, IndustrySolutionRow, IndustryManagedServiceRow, IndustryInfraSection, IndustryApproachPhase, HealthcareContent, SolutionsEcosystemItem } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Savvtek Services has been a crucial partner in securing our digital infrastructure. Their expertise in cybersecurity and cloud ecosystems is unparalleled.",
    author: "Director of IT",
    role: "Govt & Public Sector",
    company: "Public Sector Enterprise",
    image: "/images/strategic_expertise_us_1777468846673.png"
  },
  {
    id: 2,
    quote: "The team at Savvtek understands our unique operational realities. Their scalable IT and intelligent automation solutions have significantly improved our efficiency.",
    author: "CTO",
    role: "Corporate Enterprise",
    company: "Enterprise Client",
    image: "/images/mission_vision_us_1777468862412.png"
  },
  {
    id: 3,
    quote: "Transitioning to intelligent, automated ecosystems was seamless with Savvtek. Their AI & RPA solutions delivered measurable efficiency for our operations.",
    author: "Head of Operations",
    role: "Retail & Ecommerce",
    company: "Retail Group",
    image: "/images/cybersecurity_hero_card_1777468690258.png"
  }
];

export const SERVICES: Service[] = [
  {
    slug: "cybersecurity-solutions",
    title: "Cybersecurity Solutions",
    description: "In a landscape where cyber threats evolve daily, resilience is not optional. Our cybersecurity solutions are designed to strengthen your digital perimeter, protect sensitive data, and support regulatory compliance and business continuity.",
    icon: "Shield",
    features: [
      "Endpoint Protection & Extended Detection and Response (XDR)",
      "Email Security & Anti Phishing Systems",
      "Next Gen Firewalls (NGFW)",
      "Identity and Access Management",
      "Zero Trust Architecture",
      "Brand Protection & Digital Risk Monitoring",
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "GRC Framework Implementation",
      "Red Team & Blue Team Exercises",
      "Security Audits & Policy Development",
      "Data Protection & Privacy Readiness",
      "Risk Advisory & Cyber Maturity Assessments"
    ],
    image: "/images/cyber_security_banner.png",
    detailedContent: "In a landscape where cyber threats evolve daily, resilience is not optional. Our cybersecurity solutions are designed to strengthen your digital perimeter, protect sensitive data, and support regulatory compliance and business continuity.",
    footerText: "Protect your business with proactive cybersecurity built for today's evolving digital threats.",
    solutionsTitle: "Solutions",
    solutions: [
      "Endpoint Protection & Extended Detection and Response (XDR)",
      "Email Security & Anti Phishing Systems",
      "Next Gen Firewalls (NGFW)",
      "Identity and Access Management",
      "Zero Trust Architecture",
      "Brand Protection & Digital Risk Monitoring"
    ],
    servicesTitle: "Services",
    services: [
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "GRC Framework Implementation",
      "Red Team & Blue Team Exercises",
      "Security Audits & Policy Development",
      "Data Protection & Privacy Readiness",
      "Risk Advisory & Cyber Maturity Assessments"
    ]
  },
  {
    slug: "infrastructure-cloud",
    title: "Infrastructure & Cloud Services",
    description: "We design and implement secure, high performance infrastructure environments that balance scalability with operational efficiency. Whether on premise, hybrid, or fully cloud based, our solutions enable seamless digital operations.",
    icon: "Cloud",
    features: [
      "Hybrid & Public Cloud Deployment",
      "Private Cloud Infrastructure",
      "Backup & Disaster Recovery",
      "Cloud Migration & Managed Services",
      "Network Architecture & Secure Connectivity",
      "Server Virtualization & Containerization",
      "Remote Monitoring & Management (RMM)"
    ],
    image: "/images/infra_and_cloud_banner.png",
    detailedContent: "We design and implement secure, high performance infrastructure environments that balance scalability with operational efficiency. Whether on premise, hybrid, or fully cloud based, our solutions enable seamless digital operations.",
    footerText: "Our focus is to build a resilient IT foundation that supports performance, flexibility, and long term growth.",
    solutionsTitle: "Includes",
    solutions: [
      "Hybrid & Public Cloud Deployment",
      "Private Cloud Infrastructure",
      "Backup & Disaster Recovery",
      "Cloud Migration & Managed Services",
      "Network Architecture & Secure Connectivity",
      "Server Virtualization & Containerization",
      "Remote Monitoring & Management (RMM)"
    ],
    servicesTitle: "",
    services: []
  },
  {
    slug: "ai-intelligent-automation",
    title: "AI & Intelligent Automation",
    description: "We help organizations transform manual, fragmented operations into intelligent, automated ecosystems. By combining Artificial Intelligence (AI) with Intelligent Automation and Robotic Process Automation (RPA), we enable faster decision-making, improved accuracy, enhanced customer experiences, and measurable operational efficiency.",
    icon: "Cpu",
    features: [
      "AI / ML Solutions",
      "Gen AI & LLMs",
      "Conversational AI & AI Contact Centers",
      "Smart Analytics & Predictive Insights",
      "AI Strategy & Readiness Assessment",
      "Market Trend Analysis & Intelligence Models",
      "Intelligent Automation",
      "Robotic Process Automation (RPA)",
      "Business Process Automation",
      "Enterprise Workflow Integration",
      "Custom Automation Frameworks"
    ],
    image: "/images/ai_banner.png",
    detailedContent: "We help organizations transform manual, fragmented operations into intelligent, automated ecosystems. By combining Artificial Intelligence (AI) with Intelligent Automation and Robotic Process Automation (RPA), we enable faster decision-making, improved accuracy, enhanced customer experiences, and measurable operational efficiency.",
    footerText: "Our automation solutions eliminate repetitive tasks, reduce operational errors and empower teams to focus on high-value strategic initiatives that drive business growth.",
    solutionsTitle: "Artificial Intelligence",
    solutions: [
      "AI / ML Solutions",
      "Gen AI & LLMs",
      "Conversational AI & AI Contact Centers",
      "Smart Analytics & Predictive Insights",
      "AI Strategy & Readiness Assessment",
      "Market Trend Analysis & Intelligence Models"
    ],
    servicesTitle: "Automation",
    services: [
      "Intelligent Automation",
      "Robotic Process Automation (RPA)",
      "Business Process Automation",
      "Enterprise Workflow Integration",
      "Custom Automation Frameworks"
    ]
  },
  {
    slug: "enterprise-applications",
    title: "Enterprise Applications & Digital Engineering",
    description: "We help organizations modernize business applications, accelerate digital transformation, and deliver seamless user experiences. Our expertise spans enterprise platforms, custom application development, integration services, and managed application support, enabling businesses to innovate faster and operate more efficiently.",
    icon: "Layers",
    features: [
      "Dynamics 365 CRM",
      "Dynamics Business Central",
      "Microsoft Power Platform",
      "Power Apps & Low Code Solutions",
      "Application Development & Modernization",
      "Agile & DevSecOps Implementation",
      "Mobile Application Development",
      "Digital Experience Platforms",
      "API & System Integration",
      "Application Managed Services",
      "Application Maintenance Services",
      "Managed Application Support",
      "Application Security Monitoring",
      "Quality Engineering & Testing Services",
      "Mobile Device Management (MDM)"
    ],
    image: "/images/application_engineering.png",
    detailedContent: "We help organizations modernize business applications, accelerate digital transformation, and deliver seamless user experiences. Our expertise spans enterprise platforms, custom application development, integration services, and managed application support.",
    footerText: "Modernize applications, accelerate digital transformation, and deliver seamless user experiences.",
    solutionsTitle: "Business Applications",
    solutions: [
      "Dynamics 365 CRM",
      "Dynamics Business Central",
      "Microsoft Power Platform",
      "Power Apps & Low Code Solutions"
    ],
    servicesTitle: "Application Engineering & Support",
    services: [
      "Application Development & Modernization",
      "Agile & DevSecOps Implementation",
      "Mobile Application Development",
      "Digital Experience Platforms",
      "API & System Integration",
      "Application Managed Services",
      "Application Maintenance Services",
      "Managed Application Support",
      "Application Security Monitoring",
      "Quality Engineering & Testing Services",
      "Mobile Device Management (MDM)"
    ]
  },
  {
    slug: "data-intelligence-analytics",
    title: "Data Intelligence & Market Research",
    description: "Data becomes a competitive advantage when transformed into actionable insights. We transform operational and market data into intelligence that supports better decisions, stronger positioning, and sustainable growth.",
    icon: "BarChart3",
    features: [
      "Data Engineering & Data Architecture",
      "Business Intelligence & Executive Dashboards",
      "Competitive Intelligence & Market Monitoring",
      "Pricing Intelligence & Benchmark Analysis",
      "Market Research & Industry Insights",
      "Data Analytics & Reporting",
      "Forecasting & Performance Insights",
      "Data Governance & Compliance"
    ],
    image: "/images/data_intelligence.png",
    detailedContent: "Data becomes a competitive advantage when transformed into actionable insights. We transform operational and market data into intelligence that supports better decisions, stronger positioning, and sustainable growth.",
    footerText: "We transform operational and market data into intelligence that supports better decisions, stronger positioning, and sustainable growth.",
    solutionsTitle: "Solutions & Insights",
    solutions: [
      "Data Engineering & Data Architecture",
      "Business Intelligence & Executive Dashboards",
      "Competitive Intelligence & Market Monitoring",
      "Pricing Intelligence & Benchmark Analysis",
      "Market Research & Industry Insights",
      "Data Analytics & Reporting",
      "Forecasting & Performance Insights",
      "Data Governance & Compliance"
    ],
    servicesTitle: "",
    services: []
  },
  {
    slug: "digital-workplace-solutions",
    title: "Digital Workplace Solutions",
    description: "Modern workplaces require seamless collaboration, secure access, and connected employee experiences. We help organizations build intelligent digital workplaces that empower employees to work efficiently from anywhere while maintaining security, compliance, and productivity.",
    icon: "Monitor",
    features: [
      "Workplace Collaboration Platforms",
      "Document & Record Management Systems",
      "Enterprise Content Management",
      "Secure Remote Access Solutions",
      "Employee Experience Platforms",
      "Virtual Meeting & Unified Communication Solutions"
    ],
    image: "/images/digital_workspace.png",
    detailedContent: "Modern workplaces require seamless collaboration, secure access, and connected employee experiences. We help organizations build intelligent digital workplaces that empower employees to work efficiently from anywhere while maintaining security, compliance, and productivity.",
    footerText: "Build intelligent digital workplaces that empower employees to work efficiently from anywhere.",
    solutionsTitle: "Solutions",
    solutions: [
      "Workplace Collaboration Platforms",
      "Document & Record Management Systems",
      "Enterprise Content Management",
      "Secure Remote Access Solutions",
      "Employee Experience Platforms",
      "Virtual Meeting & Unified Communication Solutions"
    ],
    servicesTitle: "",
    services: []
  },
  {
    slug: "managed-it-cloud-services",
    title: "Managed IT and Cloud Services",
    description: "We provide proactive IT and cloud management services that enhance system reliability, optimize performance, and ensure business continuity. Our managed services approach enables organizations to reduce operational complexity, improve uptime, and focus on core business priorities.",
    icon: "Server",
    features: [
      "Cloud Migration & Deployment",
      "Backup & Disaster Recovery",
      "Remote Monitoring & Management",
      "Managed IT Support",
      "Infrastructure Optimization"
    ],
    image: "/images/managed_it_services.png",
    detailedContent: "We provide proactive IT and cloud management services that enhance system reliability, optimize performance, and ensure business continuity. Our managed services approach enables organizations to reduce operational complexity, improve uptime, and focus on core business priorities.",
    footerText: "Proactive IT and cloud management services that enhance system reliability, optimize performance, and ensure business continuity.",
    solutionsTitle: "Includes",
    solutions: [
      "Cloud Migration & Deployment",
      "Backup & Disaster Recovery",
      "Remote Monitoring & Management",
      "Managed IT Support",
      "Infrastructure Optimization"
    ],
    servicesTitle: "",
    services: []
  },
  {
    slug: "hardware-peripherals",
    title: "Hardware & IT Peripherals",
    description: "We provide enterprise-grade IT hardware and infrastructure solutions sourced from globally recognized technology brands. From end-user devices to data center infrastructure, we deliver reliable, scalable, and secure hardware solutions backed by expert deployment, configuration, and lifecycle support.",
    icon: "HardDrive",
    features: [
      "Desktops & High Performance Workstations",
      "Business Laptops & Tablets",
      "Gaming Series & Custom Built Systems",
      "Enterprise Servers & Storage Solutions",
      "Server Accessories & Infrastructure Components",
      "Smart Boards & Interactive Displays",
      "Meeting Room Solutions",
      "Printers, Scanners & Office Accessories",
      "Signature Pads & Biometric Devices",
      "Networking Equipment"
    ],
    image: "/images/hardware_and_IT_peripherals.png",
    detailedContent: "We provide enterprise-grade IT hardware and infrastructure solutions sourced from globally recognized technology brands. From end-user devices to data center infrastructure, we deliver reliable, scalable, and secure hardware solutions backed by expert deployment, configuration, and lifecycle support.",
    footerText: "We ensure authenticity, transparent pricing, rapid delivery, and dependable after sales support to maximize uptime.",
    solutionsTitle: "Product Portfolio",
    solutions: [
      "Desktops & High Performance Workstations",
      "Business Laptops & Tablets",
      "Gaming Series & Custom Built Systems",
      "Enterprise Servers & Storage Solutions",
      "Server Accessories & Infrastructure Components",
      "Smart Boards & Interactive Displays",
      "Meeting Room Solutions",
      "Printers, Scanners & Office Accessories",
      "Signature Pads & Biometric Devices",
      "Networking Equipment"
    ],
    servicesTitle: "",
    services: []
  },
  {
    slug: "surveillance-physical-security",
    title: "Surveillance and Physical Security",
    description: "We deliver integrated surveillance and physical security solutions that help organizations protect people, assets, and critical infrastructure. Our solutions provide real-time visibility, enhanced control, and proactive threat detection to ensure a safe and secure operating environment.",
    icon: "Camera",
    features: [
      "CCTV Design & Installation",
      "Access Control Systems",
      "Video Monitoring",
      "Compliance & Maintenance"
    ],
    image: "/images/surveilance_and_physical_security.png",
    detailedContent: "We deliver integrated surveillance and physical security solutions that help organizations protect people, assets, and critical infrastructure. Our solutions provide real-time visibility, enhanced control, and proactive threat detection to ensure a safe and secure operating environment.",
    footerText: "Integrated surveillance and physical security solutions that protect people, assets, and critical infrastructure.",
    solutionsTitle: "Includes",
    solutions: [
      "CCTV Design & Installation",
      "Access Control Systems",
      "Video Monitoring",
      "Compliance & Maintenance"
    ],
    servicesTitle: "",
    services: []
  },
  {
    slug: "document-management-system",
    title: "Document Management System (DMS)",
    description: "Our Document Management System (DMS) enables organizations to securely capture, store, manage, and retrieve enterprise documents from a centralized platform. By digitizing document workflows, businesses gain greater visibility, control, compliance, and operational efficiency.",
    icon: "FileText",
    features: [
      "Digital Operations",
      "Cloud Database Integration",
      "Role Based Access Control (RBAC)",
      "Faster Workflows",
      "Reduced Paperwork",
      "Enhanced Compliance",
      "Secure Access Anywhere"
    ],
    image: "/images/dms_banner.png",
    detailedContent: "Our Document Management System (DMS) enables organizations to securely capture, store, manage, and retrieve enterprise documents from a centralized platform. By digitizing document workflows, businesses gain greater visibility, control, compliance, and operational efficiency.",
    footerText: "Digitize document workflows to gain greater visibility, control, compliance, and operational efficiency.",
    solutionsTitle: "Includes",
    solutions: [
      "Digital Operations",
      "Cloud Database Integration",
      "Role Based Access Control (RBAC)",
      "Faster Workflows",
      "Reduced Paperwork",
      "Enhanced Compliance",
      "Secure Access Anywhere"
    ],
    servicesTitle: "",
    services: []
  }
];

export const INDUSTRIES: Industry[] = [
  {
    slug: "government-public-sector",
    title: "Government & Public Sector",
    description: "Empowering public sector organizations with secure, resilient, and compliant technology ecosystems.",
    image: "/images/mission_vision_us_1777468862412.png",
    details: "Empowering public sector organizations with secure, resilient, and compliant technology ecosystems.",
    icon: "Building2",
    features: [
      "Government-Grade Cybersecurity & Zero Trust",
      "Public & Hybrid Cloud Infrastructure",
      "Smart City & Physical Security Integration",
      "Regulatory Compliance & Data Protection",
      "Digital Citizen Services Infrastructure"
    ],
    tagline: "Empowering government organizations with secure, resilient, and compliant technology",
    badges: [
      "Zero Trust Architecture — High-security government frameworks",
      "Regulatory Compliance — Aligned to national cybersecurity standards",
      "Mission-Critical Resilience — 99.999% uptime for public services"
    ],
    aboutText: [
      "Savvtek Services supports public sector and government institutions with robust, highly secure IT and cybersecurity frameworks. We enable public entities to modernize digital services while upholding stringent security, governance, and operational standards.",
      "From infrastructure design to managed security services, our team delivers solutions that safeguard critical public data and maintain continuous service availability."
    ],
    whatWeBring: [
      "Proven experience in government infrastructure and security standards",
      "End-to-end compliance management and cyber maturity assessments",
      "24x7 monitoring and incident response capabilities"
    ]
  },
  {
    slug: "banking-finance",
    title: "Banking & Finance",
    description: "Securing financial assets, transactions, and regulatory compliance for modern banking institutions.",
    image: "/images/bfsi_industry.jpg",
    details: "Securing financial assets, transactions, and regulatory compliance for modern banking institutions.",
    icon: "Landmark",
    features: [
      "BFSI Security & Compliance",
      "High-Performance Cloud & Data Architecture",
      "Real-time Fraud & Risk Monitoring",
      "Core Banking Infrastructure Resilience",
      "Secure API & System Integration"
    ],
    tagline: "Securing financial assets, transactions, and regulatory compliance",
    badges: [
      "Financial Data Protection — PCI-DSS & Central Bank compliance",
      "Zero Trust Banking Security — Multi-layer defense",
      "High Uptime Infrastructure — Continuous transactional availability"
    ],
    aboutText: [
      "Savvtek Services designs and delivers secure, resilient, and high-performance IT ecosystems purpose-built for the banking, financial services, and insurance sector. We partner with financial institutions to strengthen digital operations and safeguard sensitive financial data."
    ]
  },
  {
    slug: "it-ites",
    title: "IT / ITES",
    description: "Powering technology and enabled services companies with scalable, agile, and high-performance infrastructure.",
    image: "/images/strategic_expertise_us_1777468846673.png",
    details: "Powering technology and enabled services companies with scalable, agile, and high-performance infrastructure.",
    icon: "Laptop",
    features: [
      "Cloud Infrastructure & DevSecOps",
      "High-Density Compute & AI Workloads",
      "Enterprise Application Engineering",
      "Remote Workplace & MDM",
      "24x7 Managed Support & RMM"
    ],
    tagline: "Powering technology and enabled services with scalable infrastructure",
    badges: [
      "DevSecOps Ready — Rapid application lifecycle deployment",
      "Scalable Cloud Architecture — Hybrid & multi-cloud deployment",
      "Global Security Standards — ISO 27001 & SOC 2 readiness"
    ]
  },
  {
    slug: "education-institutions",
    title: "Education Institutions",
    description: "Connecting and protecting campuses, classrooms, student data, and digital learning environments.",
    image: "/images/education_industry.jpg",
    details: "Connecting and protecting campuses, classrooms, student data, and digital learning environments.",
    icon: "GraduationCap",
    features: [
      "Campus Network & Wi-Fi Infrastructure",
      "Student & Staff Identity Management",
      "E-Learning & Smart Board Solutions",
      "Student Data Privacy & Protection",
      "Document Management System (DMS)"
    ],
    tagline: "Connecting and protecting campuses, classrooms & student data",
    badges: [
      "K-12 & Higher Ed — Scaled solutions for schools & universities",
      "Student Data Privacy — Compliance with data protection norms",
      "Smart Campus AV — Interactive boards and collaboration"
    ]
  },
  {
    slug: "retail-ecommerce",
    title: "Retail & Ecommerce",
    description: "Optimizing retail operations, digital store platforms, supply chain visibility, and customer data security.",
    image: "/images/retail_ecommerce_industry_new_1777472979277.png",
    details: "Optimizing retail operations, digital store platforms, supply chain visibility, and customer data security.",
    icon: "ShoppingBag",
    features: [
      "Omnichannel Digital Experience Platforms",
      "POS & Hardware Peripheral Deployment",
      "Pricing & Competitive Intelligence",
      "E-commerce Cloud Architecture & Uptime",
      "Customer Data Security & Compliance"
    ],
    tagline: "Optimizing retail operations, ecommerce platforms & customer data security",
    badges: [
      "High-Consequential Uptime — Peak sales season readiness",
      "Data & Pricing Intelligence — Market benchmark analytics",
      "POS & Store Tech — Enterprise hardware integration"
    ]
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Safeguarding patient data, clinical systems, medical imaging storage, and hospital infrastructure.",
    image: "/images/healthcare_industry.jpg",
    details: "Safeguarding patient data, clinical systems, medical imaging storage, and hospital infrastructure.",
    icon: "Activity",
    features: [
      "Healthcare Data Privacy & Security",
      "Electronic Health Record (EHR) Storage",
      "Hospital Network & Telehealth Infrastructure",
      "Surveillance & Access Control Systems",
      "Document & Record Management"
    ],
    tagline: "Safeguarding patient data, clinical systems & hospital infrastructure",
    badges: [
      "Patient Data Security — HIPAA & regional healthcare compliance",
      "24/7 Clinical Uptime — Zero-downtime infrastructure",
      "Medical Grade AV & Security — Hospital campus protection"
    ]
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Driving smart factory automation, industrial IoT security, supply chain efficiency, and ERP integration.",
    image: "/images/cybersecurity_hero_card_1777468690258.png",
    details: "Driving smart factory automation, industrial IoT security, supply chain efficiency, and ERP integration.",
    icon: "Factory",
    features: [
      "OT & Industrial Cybersecurity",
      "Robotic Process Automation (RPA)",
      "ERP & Dynamics Business Central",
      "Factory Surveillance & Access Control",
      "Supply Chain Data Intelligence"
    ],
    tagline: "Smart factory automation, OT security & ERP integration",
    badges: [
      "OT/IT Security Convergence — Industrial network defense",
      "Process Automation — RPA & workflow optimization",
      "ERP Integration — End-to-end operational visibility"
    ]
  },
  {
    slug: "food-technology",
    title: "Food Technology",
    description: "Enabling cloud kitchens, food tech platforms, and quick service restaurants with scalable tech and analytics.",
    image: "/images/mission.png",
    details: "Enabling cloud kitchens, food tech platforms, and quick service restaurants with scalable tech and analytics.",
    icon: "Utensils",
    features: [
      "Order Management & Integration APIs",
      "Cloud Infrastructure & High Availability",
      "Intelligent Process Automation",
      "Pricing & Market Research Analytics",
      "Hardware POS & Kiosk Systems"
    ],
    tagline: "Scalable tech, intelligent automation & analytics for food tech",
    badges: [
      "Cloud Kitchen Tech — Multi-brand delivery infrastructure",
      "Automated Order Flow — API & workflow integration",
      "Real-Time Analytics — Demand & pricing intelligence"
    ]
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    description: "Elevating guest experiences with unified communications, Wi-Fi, property management integration, and security.",
    image: "/images/vision.png",
    details: "Elevating guest experiences with unified communications, Wi-Fi, property management integration, and security.",
    icon: "Hotel",
    features: [
      "High-Density Guest Wi-Fi & Access",
      "Unified Communications & Room Tech",
      "Property CCTV & Physical Security",
      "Guest Data Protection & Compliance",
      "Property Management Systems Support"
    ],
    tagline: "Elevating guest experiences with connected digital workplace & security",
    badges: [
      "Seamless Guest Wi-Fi — Frictionless onboarding",
      "Smart Room & AV Tech — Premium hospitality AV",
      "24x7 Infrastructure Support — Zero downtime for guests"
    ]
  },
  {
    slug: "shipping-logistics",
    title: "Shipping & Logistics",
    description: "Streamlining warehouse automation, fleet tracking security, document management, and supply chain intelligence.",
    image: "/images/deploy.png",
    details: "Streamlining warehouse automation, fleet tracking security, document management, and supply chain intelligence.",
    icon: "Truck",
    features: [
      "Supply Chain Document Management (DMS)",
      "Warehouse Network & Mobile Barcode Scanners",
      "Logistics Analytics & Benchmark Tracking",
      "Cloud & Hybrid Server Infrastructure",
      "Cybersecurity for Logistics Networks"
    ],
    tagline: "Streamlining warehouse automation, document management & supply chain intelligence",
    badges: [
      "DMS Integration — Digital waybills & customs documents",
      "Warehouse Mobility — Rugged handhelds & wireless coverage",
      "Track & Trace Analytics — Data intelligence & dashboards"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Strategic Expertise",
    text: "We align technology, automation, and business intelligence with your objectives, delivering solutions that solve real operational challenges.",
    button: "Learn More",
    img: "/images/about-team.png",
    icon: "Target"
  },
  {
    title: "Client-First Approach",
    text: "We prioritize transparency, responsiveness, and long-term relationships built on trust and reliability.",
    button: "Learn More",
    img: "/images/client-first.png",
    icon: "Heart"
  },
  {
    title: "Data-Driven Decision Support",
    text: "From competitive intelligence and pricing analysis to market research and forecasting, we help organizations make informed strategic decisions.",
    button: "Learn More",
    img: "/images/security-focused.png",
    icon: "BarChart2"
  },
  {
    title: "Innovation",
    text: "Future-ready technologies that keep you ahead of the curve. Whether it's AI, automation, or market intelligence, we help you stay competitive.",
    button: "Learn More",
    img: "/images/innovation.png",
    icon: "Zap"
  },
  {
    title: "End-to-End Capabilities",
    text: "From advisory and implementation to managed services and ongoing support, we provide complete lifecycle support.",
    button: "Learn More",
    img: "/images/optimize.png",
    icon: "Layers"
  }
];

export const MISSION_VISION = [
  {
    title: "Our Mission",
    text: "Our mission is to help organizations leverage technology, automation, and intelligence to drive growth, improve efficiency, and strengthen decision making.",
    text1: "We deliver dependable solutions across cybersecurity, cloud, data, applications, hardware, and digital environments, ensuring our clients remain secure, agile, and future ready.",
    button: "Read More",
    img: "/images/mission.png",
    icon: "Flag"
  },
  {
    title: "Our Vision",
    text: "Our vision is to become a trusted technology and business intelligence partner, helping organizations navigate digital transformation with confidence.",
    text1: "Through secure, intelligent, and scalable solutions that support long term growth, we empower enterprises to thrive in a digital-first world.",
    button: "Read More",
    img: "/images/vision.png",
    icon: "Eye"
  }
];

export const STATS = [
  { label: "Founded", value: "2018" },
  { label: "Support", value: "24/7" },
  { label: "Industries Served", value: "10+" },
  { label: "Projects", value: "250+" }
];

export const HOW_WE_WORK: import('../types').StackedCard[] = [
  {
    title: 'Advisory',
    text: 'We begin with strategic consulting and digital roadmap development, understanding your unique operational realities to chart a clear path forward.',
    button: 'Learn More',
    img: '/images/about-team.png',
    icon: 'Compass',
    features: ['Technology Assessment', 'Digital Roadmap', 'Risk Analysis']
  },
  {
    title: 'Design',
    text: 'Architecting secure and scalable IT ecosystems tailored to your business, ensuring every component aligns with your growth trajectory.',
    button: 'Learn More',
    img: '/images/design.png',
    icon: 'PenTool',
    features: ['Solution Architecture', 'Security Blueprint', 'Scalability Planning']
  },
  {
    title: 'Deploy',
    text: 'Professional implementation and seamless integration with minimal disruption to your operations, backed by rigorous testing and validation.',
    button: 'Learn More',
    img: '/images/deploy.png',
    icon: 'Rocket',
    features: ['Agile Implementation', 'Seamless Integration', 'Quality Assurance']
  },
  {
    title: 'Manage',
    text: '24/7 managed services and proactive IT support ensuring your systems run at peak performance with industry-leading uptime.',
    button: 'Learn More',
    img: '/images/manage.png',
    icon: 'Settings',
    features: ['24/7 Monitoring', 'Proactive Support', 'Incident Management']
  },
  {
    title: 'Optimize',
    text: 'Continuous automation and performance improvement through data-driven insights, keeping you ahead in an ever-evolving technology landscape.',
    button: 'Learn More',
    img: '/images/optimize.png',
    icon: 'TrendingUp',
    features: ['Performance Tuning', 'Process Automation', 'Innovation Pipeline']
  }
];

export const PARTNERS: import('../types').Partner[] = [
  // Cybersecurity
  { id: 1, name: 'CrowdStrike', domain: 'crowdstrike.com' },
  { id: 2, name: 'Netskope', domain: 'netskope.com' },
  { id: 3, name: 'Fortinet', domain: 'fortinet.com' },
  { id: 4, name: 'Palo Alto Networks', domain: 'paloaltonetworks.com' },
  { id: 5, name: 'Arcon', domain: 'arconnet.com' },
  { id: 6, name: 'PICUS', domain: 'picussecurity.com' },
  { id: 7, name: 'Varonis', domain: 'varonis.com' },
  { id: 8, name: 'Sophos', domain: 'sophos.com' },

  // Infrastructure & Cloud
  { id: 9, name: 'Dell Technologies', domain: 'dell.com' },
  { id: 10, name: 'HP', domain: 'hp.com' },
  { id: 11, name: 'Cisco', domain: 'cisco.com' },
  { id: 12, name: 'Veeam', domain: 'veeam.com' },
  { id: 13, name: 'AWS', domain: 'amazon.com' },

  // Networking
  { id: 14, name: 'Cisco', domain: 'cisco.com' },
  { id: 15, name: 'Ruckus', domain: 'commscope.com' },
  { id: 16, name: 'HPE', domain: 'hpe.com' },

  // Hardware & End User Computing
  { id: 17, name: 'HP', domain: 'hp.com' },
  { id: 18, name: 'Dell', domain: 'dell.com' },
  { id: 19, name: 'ASUS', domain: 'asus.com' },
  { id: 20, name: 'Acer', domain: 'acer.com' },
  { id: 21, name: 'Samsung', domain: 'samsung.com' },

  // Collaboration & Audio Visual
  { id: 22, name: 'Crestron', domain: 'crestron.com' },
  { id: 23, name: 'Logitech', domain: 'logitech.com' },
  { id: 24, name: 'Polycom', domain: 'poly.com' },
  { id: 25, name: 'Jabra', domain: 'jabra.com' },

  // AI & Automation
  { id: 26, name: 'Microsoft', domain: 'microsoft.com' },
  { id: 27, name: 'Google', domain: 'google.com' }
];

export const CLIENTS: import('../types').Client[] = [
  { name: 'Government & Public Sector Enterprise 1', domain: 'gov.ae' },
  { name: 'Government & Public Sector Enterprise 2', domain: 'gov.ae' },
  { name: 'Corporate Enterprise Client 1', domain: 'corporate.com' },
  { name: 'Corporate Enterprise Client 2', domain: 'corporate.com' },
  { name: 'Retail & Ecommerce Brand 1', domain: 'retail.com' },
  { name: 'Retail & Ecommerce Brand 2', domain: 'retail.com' },
  { name: 'Technology Company 1', domain: 'tech.com' },
  { name: 'Technology Company 2', domain: 'tech.com' },
  { name: 'Healthcare Organization 1', domain: 'health.org' },
  { name: 'Healthcare Organization 2', domain: 'health.org' },
  { name: 'Financial Services Firm 1', domain: 'finance.com' },
  { name: 'Financial Services Firm 2', domain: 'finance.com' },
  { name: 'Education Institution 1', domain: 'edu.ac' },
  { name: 'Education Institution 2', domain: 'edu.ac' },
  { name: 'Logistics & Supply Chain Co. 1', domain: 'logistics.com' },
  { name: 'Logistics & Supply Chain Co. 2', domain: 'logistics.com' }
];

export const EDUCATION_CLIENTS = [
  { src: '/logos/ajman uni.png', name: 'Ajman University' },
  { src: '/logos/athena edy.png', name: 'Athena EDY' },
  { src: '/logos/elizabeth school.png', name: 'Elizabeth School' },
  { src: '/logos/middlesex uni.png', name: 'Middlesex University Dubai' },
  { src: '/logos/sceffield.avif', name: 'Sheffield University' },
  { src: '/logos/scholar school.png', name: 'Scholar School' }
];

export const HEALTHCARE_CONTENT: HealthcareContent = {
  slug: "healthcare",
  title: "Healthcare Technology & Security",
  subtitle: "Empowering Healthcare Organizations with Secure & Scalable IT",
  tagline: "Safeguarding patient data, clinical systems & hospital infrastructure",
  badges: [
    "Patient Data Security — HIPAA & regional healthcare compliance",
    "24/7 Clinical Uptime — Zero-downtime infrastructure",
    "Medical Grade AV & Security — Hospital campus protection"
  ],
  whoWeAre: {
    title: "Who We Are",
    text: [
      "Savvtek Services designs and delivers secure, scalable, and high-performance IT ecosystems purpose-built for the realities of modern healthcare.",
      "We partner with hospitals, clinics, and healthcare groups to modernize clinical and operational technology without compromising on patient data security or system uptime."
    ],
    stats: [
      { value: "24/7", label: "Clinical Support" },
      { value: "100%", label: "Compliance Focus" }
    ],
    mission: "To equip healthcare providers with reliable, secure, and modern technology infrastructure.",
    vision: "To be the leading technology partner for healthcare digital transformation."
  },
  whatThisMeans: [
    {
      title: "Patient Data Security",
      description: "Robust encryption, Zero Trust access, and compliance frameworks to protect medical records.",
      icon: "Shield"
    },
    {
      title: "24/7 Clinical Availability",
      description: "High-availability infrastructure ensuring continuous access to EHR and clinical databases.",
      icon: "Activity"
    }
  ],
  offeringsTitle: "Healthcare Solutions",
  offeringsIntro: "Tailored IT, cybersecurity, and physical security solutions for healthcare facilities.",
  offerings: [
    {
      title: "EHR & Clinical Systems Hosting",
      description: "Secure cloud and hybrid infrastructure for electronic health records and PACS imaging.",
      icon: "Server"
    },
    {
      title: "Hospital Security & Surveillance",
      description: "CCTV, access control, and campus perimeter monitoring for patient and staff safety.",
      icon: "Camera"
    }
  ],
  offeringsFooter: "Build a resilient IT foundation for your healthcare organization with Savvtek.",
  details: [],
  focusTitle: "Why Choose Savvtek for Healthcare",
  focusIntro: "Our domain expertise ensures seamless integration with clinical workflows.",
  focusAreas: [
    { name: "Compliance & Audit Readiness", icon: "CheckCircle" },
    { name: "Proactive Managed Support", icon: "Headphones" }
  ],
  focusFooter: "Empowering healthcare providers to focus on what matters most — patient care.",
  whyChooseUs: [
    {
      title: "Domain Expertise",
      description: "Deep understanding of hospital operations, clinical workflows, and data protection requirements."
    }
  ],
  cta: {
    title: "Connect With Us",
    subtitle: "Empowering Growth Through Technology, Intelligence & Innovation",
    company: "Savvtek Services Pvt. Ltd.",
    address: "[Address]",
    website: "[Website]",
    phone: "[Phone Number]",
    steps: [
      { number: "01", title: "Consultation", description: "Schedule a discussion with our technical team." },
      { number: "02", title: "Assessment", description: "Receive a tailored assessment of your IT landscape." },
      { number: "03", title: "Execution", description: "Deploy secure, scalable, and high-performance solutions." }
    ]
  }
};

export const SOLUTIONS_ECOSYSTEM_ITEMS: SolutionsEcosystemItem[] = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    subtitle: 'Resilience is not optional',
    description: 'Our cybersecurity solutions strengthen your digital perimeter, protect sensitive data, and support regulatory compliance.',
    features: ['Endpoint Protection & XDR', 'Zero Trust Architecture', 'Vulnerability Assessment (VAPT)'],
    img: '/images/cyber_security_banner.png',
    reverse: false
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Cloud Services',
    subtitle: 'Secure & Scalable Foundation',
    description: 'We design and implement high-performance infrastructure environments balancing scalability with operational efficiency.',
    features: ['Hybrid & Public Cloud', 'Backup & Disaster Recovery', 'Remote Monitoring & Management'],
    img: '/images/infra_and_cloud_banner.png',
    reverse: true
  },
  {
    id: 'ai-automation',
    title: 'AI & Intelligent Automation',
    subtitle: 'Transform Manual Operations',
    description: 'Combining AI with Intelligent Automation and RPA to enable faster decisions, accuracy, and operational efficiency.',
    features: ['Gen AI & LLMs', 'Robotic Process Automation (RPA)', 'Predictive Insights & Analytics'],
    img: '/images/ai_banner.png',
    reverse: false
  },
  {
    id: 'enterprise-applications',
    title: 'Enterprise Applications & Digital Engineering',
    subtitle: 'Modernize Business Apps',
    description: 'Spanning Dynamics 365, Power Platform, custom application development, and managed support services.',
    features: ['Dynamics 365 CRM & Business Central', 'App Development & Modernization', 'API & System Integration'],
    img: '/images/application_engineering.png',
    reverse: true
  },
  {
    id: 'data-intelligence',
    title: 'Data Intelligence & Market Research',
    subtitle: 'Actionable Business Insights',
    description: 'Transforming operational and market data into intelligence that supports better decisions and sustainable growth.',
    features: ['Business Intelligence Dashboards', 'Competitive & Pricing Intelligence', 'Market Research & Analytics'],
    img: '/images/data_intelligence.png',
    reverse: false
  },
  {
    id: 'digital-workplace',
    title: 'Digital Workplace Solutions',
    subtitle: 'Seamless Collaboration',
    description: 'Empower employees to work efficiently from anywhere with secure collaboration, remote access, and ECM.',
    features: ['Workplace Collaboration Platforms', 'Enterprise Content Management', 'Secure Remote Access'],
    img: '/images/digital_workspace.png',
    reverse: true
  }
];
