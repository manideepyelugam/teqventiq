import { Service, Industry, Testimonial, IndustryRiskRow, IndustrySolutionRow, IndustryManagedServiceRow, IndustryInfraSection, IndustryApproachPhase, HealthcareContent, SolutionsEcosystemItem } from '../types';


export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "MindLabs has been a crucial partner in securing our digital infrastructure. Their expertise in cybersecurity and cloud ecosystems is unparalleled in the region.",
    author: "Director of IT",
    role: "Govt & PSC",
    company: "Dubai World Trade Center",
    image: "/images/strategic_expertise_us_1777468846673.png"
  },
  {
    id: 2,
    quote: "The team at MindLabs understands the unique operational realities of real estate. Their scalable IT solutions have significantly improved our efficiency.",
    author: "CTO",
    role: "Real Estate",
    company: "Danube Group",
    image: "/images/mission_vision_us_1777468862412.png"
  },
  {
    id: 3,
    quote: "Transitioning to intelligent, automated ecosystems was seamless with MindLabs. Their AI & RPA solutions delivered measurable efficiency for our operations.",
    author: "Head of Operations",
    role: "FoodTech",
    company: "Kitopi",
    image: "/images/cybersecurity_hero_card_1777468690258.png"
  }
];

export const SERVICES: Service[] = [
   {
    slug: "hardware-peripherals",
    title: "IT and Hardware",
    description: "Deliver enterprise technology with reliable hardware, expert deployment, and ongoing support.",
    icon: "Cpu",
    features: [
      "Desktops & High Performance Workstations",
      "Business Laptops, Tablets & Mobile Devices",
      "Enterprise Servers & Storage Solutions",
      "Server Accessories & Infrastructure Components",
      "Smart Boards & Interactive Displays",
      "Meeting Room Solutions",
      "Printers, Scanners & Office Accessories",
      "Signature Pads & Biometric Devices",
      "POS Systems",
      "Warranty & Lifecycle Services"
    ],
    image: "/images/hardware_and_IT_peripherals.png",
    detailedContent: "We supply enterprise-grade IT hardware sourced from globally trusted brands. Every deployment is backed by expert configuration and continued support.",
    footerText:'',
    solutionsTitle: "Product Portfolio",
    solutions: [
      "Desktops & High Performance Workstations",
      "Business Laptops, Tablets & Mobile Devices",
      "Enterprise Servers & Storage Solutions",
      "Server Accessories & Infrastructure Components",
      "Smart Boards & Interactive Displays",
      "Meeting Room Solutions",
      "Printers, Scanners & Office Accessories",
      "Signature Pads & Biometric Devices",
      "POS Systems",
      "Warranty & Lifecycle Services"
    ],
    servicesTitle: "",
    services: [
      
    ]
  },
  {
    slug: "networking",
    title: "Networking",
    description: "Enable secure, high-performance connectivity that keeps your business always connected seamlessly.",
    icon: "Network",
    features: [
      "Campus Networking",
      "Data Center Networking",
      "SD-WAN",
      "Enterprise Wi-Fi",
      "Routing & Switching",
      "Network Access Control",
      "Load Balancers",
      "VPN Solutions",
      "Structured Cabling",
      "Network Architecture & Design",
      "Wireless Site Surveys",
      "Network Monitoring",
      "Network Optimization",
      "Deployment & Support"
    ],
    image: "/images/networking.png",
    detailedContent: "In today's connected enterprise, a reliable and secure network is the foundation of every digital initiative. Our networking solutions are designed to deliver high-performance connectivity, enhanced security, and business resilience. Our focus is to build secure, scalable, and high-performing network environments that keep businesses connected and operations running efficiently.",
    footerText:'Our focus is to build secure, scalable, and high-performing network environments that keep businesses connected and operations running efficiently.',
    solutionsTitle: "Solutions",
    solutions: [
      "Campus Networking",
      "Data Center Networking",
      "SD-WAN",
      "Enterprise Wi-Fi",
      "Routing & Switching",
      "Network Access Control",
      "Load Balancers",
      "VPN Solutions"
    ],
    servicesTitle: "Services",
    services: [
      "Structured Cabling",
      "Network Architecture & Design",
      "Wireless Site Surveys",
      "Network Monitoring",
      "Network Optimization",
      "Deployment & Support"
    ]
  },
  {
    slug: "cybersecurity-solutions",
    title: "Cybersecurity Solutions",
    description: "Protect your business with proactive cybersecurity built for today’s evolving digital threats.",
    icon: "Shield",
    features: [
      "Endpoint Protection & Extended Detection and Response (XDR)",
      "Email Security & Anti-Phishing Systems",
      "Next-Gen Firewalls (NGFW)",
      "Identity and Access Management",
      "Zero Trust Architecture",
      "Brand Protection & Digital Risk Monitoring",
      "Security Operations Center (SOC) Enablement",
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "GRC Framework Implementation",
      "Red Team & Blue Team Exercises",
      "Security Audits & Policy Development",
      "Risk Advisory & Cyber Maturity Assessments",
      "Data Protection & Privacy Readiness"
    ],
    image: "/images/cyber_security_banner.png",
    detailedContent: "In a landscape where cyber threats evolve daily, resilience is not optional. Our cybersecurity solutions are designed to strengthen your digital perimeter, protect sensitive data, and ensure regulatory compliance and brand trust.",
    footerText:'',
    solutionsTitle: "Solutions",
    solutions: [
      "Endpoint Protection & Extended Detection and Response (XDR)",
      "Email Security & Anti-Phishing Systems",
      "Next-Gen Firewalls (NGFW)",
      "Identity and Access Management",
      "Zero Trust Architecture",
      "Brand Protection & Digital Risk Monitoring",
      "Security Operations Center (SOC) Enablement"
    ],
    servicesTitle: "Services",
    services: [
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "GRC Framework Implementation",
      "Red Team & Blue Team Exercises",
      "Security Audits & Policy Development",
      "Risk Advisory & Cyber Maturity Assessments",
      "Data Protection & Privacy Readiness"
    ]
  },
  {
    slug: "infrastructure-cloud",
    title: "Infrastructure",
    description: "Build secure, scalable infrastructure that powers resilient and future-ready digital transformation.",
    icon: "Cloud",
    features: [
      "Hybrid & Public Cloud Deployment",
      "Private Cloud Infrastructure",
      "Network Architecture & Secure Connectivity",
      "Server Virtualisation & Containerisation",
      "Cloud Migration & Managed Services",
      "Remote Monitoring & Management (RMM)",
      "Backup & Disaster Recovery"
    ],
    image: "/images/infra_and_cloud_banner.png",
    detailedContent: "We design and implement secure, high-performance infrastructure environments that balance scalability with operational efficiency. Whether on-premise, hybrid, or fully cloud native, our solutions enable seamless digital operations. Our focus is to build a resilient IT backbone that supports performance, flexibility, and long-term growth.",
    footerText:'Our focus is to build a resilient IT backbone that supports performance, flexibility, and long-term growth.',
    solutionsTitle: "Includes",
    solutions: [
      "Hybrid & Public Cloud Deployment",
      "Private Cloud Infrastructure",
      "Network Architecture & Secure Connectivity",
      "Server Virtualisation & Containerisation","Cloud Migration & Managed Services",
      "Remote Monitoring & Management (RMM)",
      "Backup & Disaster Recovery"
    ],
    servicesTitle: "",
    services: [
      
    ]
  },
  {
    slug: "audio-visual-solutions",
    title: "Audio Visual Solutions",
    description: "Create immersive collaboration spaces with intelligent audio visual solutions for every workplace.",
    icon: "Tv",
    features: [
      "Smart Classrooms",
      "Interactive Displays",
      "LED Walls",
      "Video Conferencing",
      "Boardrooms",
      "Auditoriums",
      "Digital Signage",
      "Command & Control Centers",
      "Room Automation",
      "Wireless Presentation",
      "Professional Audio Systems",
      "DSP",
      "Ceiling Microphones",
      "PTZ Cameras",
      "AV over IP",
      "Installation & Support"
    ],
    image: "/images/audio_visual.jpeg",
    detailedContent: "We design and implement intelligent audio visual environments that enhance communication, collaboration, and user experience. From meeting rooms to large enterprise spaces, our solutions deliver seamless, reliable, and engaging AV experiences. Our focus is to create integrated AV environments that enable effective communication, seamless collaboration, and immersive experiences across every workspace.",
    footerText:'Our focus is to create integrated AV environments that enable effective communication, seamless collaboration, and immersive experiences across every workspace.',
    solutionsTitle: "Solutions",
    solutions: [
      "Smart Classrooms",
      "Interactive Displays",
      "LED Walls",
      "Video Conferencing",
      "Boardrooms",
      "Auditoriums",
      "Digital Signage",
      "Command & Control Centers"
    ],
    servicesTitle: "Services",
    services: [
      "Room Automation",
      "Wireless Presentation",
      "Professional Audio Systems",
      "DSP",
      "Ceiling Microphones",
      "PTZ Cameras",
      "AV over IP",
      "Installation & Support"
    ]
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    description: "Accelerate innovation through intelligent automation that transforms productivity and business outcomes.",
    icon: "Zap",
    features: [
      "AI / ML Solutions",
      "Gen AI & LLMs",
      "Conversational AI & AI Contact Centers",
      "Smart Analytics & Predictive Insights",
      "AI Strategy & Readiness Assessment",
      "Intelligent Automation",
      "Robotic Process Automation (RPA)",
      "Business Process Automation",
      "Enterprise Workflow Integration",
      "Custom Automation Frameworks"
    ],
    image: "/images/ai_banner.png",
    detailedContent: "We enable organizations to transition from manual processes to intelligent, automated ecosystems. By combining Artificial Intelligence with Robotic Process Automation, we deliver operational speed, accuracy, and measurable efficiency. Our automation programs are designed to reduce repetitive workloads, minimize errors, and allow teams to focus on strategic initiatives.",
    footerText:'Our automation programs are designed to reduce repetitive workloads, minimize errors, and allow teams to focus on strategic initiatives.',
    solutionsTitle: "Artificial Intelligence",
    solutions: [
      "AI / ML Solutions",
      "Gen AI & LLMs",
      "Conversational AI & AI Contact Centers",
      "Smart Analytics & Predictive Insights",
      "AI Strategy & Readiness Assessment"
    ],
    servicesTitle: "Automation",
    services: [
      "Intelligent Automation",
      "Robotic Process Automation (RPA)",
      "Business Process Automation",
      "Enterprise Workflow Integration",
      "Custom Automation Frameworks"
    ]
  }
];

export const INDUSTRIES: Industry[] = [
 
  {
    slug: "education",
    title: "Education",
    description: "Connecting and protecting campuses, classrooms & student data.",
    image: "/images/education_industry.jpg",
    details: "Connecting and protecting campuses, classrooms & student data.",
    icon: "GraduationCap",
    features: [
      "Campus Network Infrastructure",
      "Student & Staff Identity Management",
      "E-Learning Platform Infrastructure",
      "Digital Classroom & Smart Board Solutions",
      "Student Data Privacy & Compliance",
      "Backup & Ransomware Recovery",
      "Content Filtering & DNS Security",
      "Device Management (MDM / BYOD)"
    ],
    tagline: "Connecting and protecting campuses, classrooms & student data",
    badges: [
      "K–12 to Higher-Ed — Scaled solutions for schools, colleges & universities",
      "Student Data Privacy — Aligned to regional data-protection requirements",
      "Budget-Conscious — Right-sized licensing & lifecycle models"
    ],
    aboutText: [
      "MindLabs Technologies designs and delivers secure, scalable, and future-ready IT ecosystems purpose-built for the evolving needs of modern education. Since 2017, we have partnered with schools, colleges, universities, and educational institutions across the UAE to transform digital learning environments while ensuring secure access, reliable connectivity, and uninterrupted academic operations.",
      "From smart classrooms to campus-wide infrastructure, our expertise spans enterprise networking, cybersecurity, cloud solutions, classroom technology, AI and robotics education, IT infrastructure, and fully managed services. Every solution is engineered to support collaborative learning, protect student and institutional data, simplify IT management, and provide the performance, resilience, and scalability required by today’s connected educational environments."
    ],
    whatWeBring: [
      "Experience deploying campus-wide and multi-site networks for K–12 schools, colleges and universities",
      "Pragmatic, budget-aware architecture and licensing recommendations suited to education funding cycles",
      "OEM-certified engineers across networking, security, data centre, and classroom/end-user computing",
      "Managed security services scoped to protect student data and support lean in-house IT teams",
      "Familiarity with the unique BYOD, guest-access, and high-density connectivity demands of campus life"
    ],
    whyNeedTitle: "Why Education Needs a Specialised Technology Partner",
    whyNeedIntro: "Education institutions face a distinct combination of open, high-volume access requirements and growing data-protection obligations:",
    riskTable: [
      { driver: "High-density, diverse users", why: "Thousands of student, staff and guest devices connect daily, demanding scalable Wi-Fi and identity controls." },
      { driver: "BYOD & open access culture", why: "Campuses are inherently open environments, increasing exposure to malware, rogue devices and lateral movement." },
      { driver: "Student & research data protection", why: "Academic records, health data and research IP require strong access control and data-loss prevention." },
      { driver: "Ransomware targeting", why: "Education is consistently among the most-targeted sectors for ransomware globally, often due to under-resourced IT security." },
      { driver: "Lean IT teams & constrained budgets", why: "Many institutions run large estates with comparatively small IT and security teams, increasing the value of managed services." },
      { driver: "Distributed / multi-campus estates", why: "Schools, faculties and dormitories often span multiple buildings or sites needing consistent policy enforcement." }
    ],
    solutionsIntro: "Our recommended stack for education clients, with representative best-fit OEM brands per category:",
    solutionsTable: [
      { category: "Campus Networking (LAN/WAN)", useCase: "Resilient connectivity across faculties, dorms & multi-campus estates", brands: "Cisco, Aruba (HPE), Juniper" },
      { category: "High-Density Campus Wi-Fi", useCase: "Classroom, library & lecture-hall connectivity at scale", brands: "Cisco Meraki, Aruba, Ruckus (CommScope)" },
      { category: "Data Centre & Compute", useCase: "Hosting for learning management systems (LMS), ERP & research workloads", brands: "Dell Technologies, HPE, Lenovo" },
      { category: "Storage & Backup/DR", useCase: "Protection for student records, research data & administrative systems", brands: "Dell EMC, NetApp, Veeam, Commvault" },
      { category: "Virtualization & Cloud / VDI", useCase: "Computer-lab and remote-learning desktop delivery", brands: "VMware (Broadcom), Citrix, Microsoft Azure" },
      { category: "Classroom & End-User Computing", useCase: "Classroom AV, interactive displays & student/staff devices", brands: "Dell, HP, Lenovo, Promethean, Logitech" },
      { category: "Unified Communications & Collaboration", useCase: "Hybrid learning, lecture capture & administrative collaboration", brands: "Microsoft Teams, Zoom, Cisco Webex" },
      { category: "Network Security (Firewall/NGFW)", useCase: "Perimeter protection across open, high-traffic campus networks", brands: "Fortinet, Palo Alto Networks, Sophos" },
      { category: "Identity & Access (IAM)", useCase: "Single sign-on across LMS, email & administrative systems for students & staff", brands: "Microsoft Entra ID, Okta, Google Workspace Identity" },
      { category: "Endpoint & Content Filtering", useCase: "Protecting student devices and enforcing safe-browsing policy", brands: "CrowdStrike, Microsoft Defender, Cisco Umbrella, Securly" }
    ],
    infraIntro: "Education infrastructure must scale to large, diverse user populations while remaining manageable for lean IT teams and sustainable within institutional budgets. Our recommended approach:",
    infraSections: [
      {
        title: "1. Campus-Wide Network Fabric",
        items: [
          "Centrally managed, high-density Wi-Fi across classrooms, libraries, halls and dormitories — Cisco Meraki or Aruba Central",
          "Segmented VLANs separating student/guest, staff/administrative, and IoT/AV device traffic",
          "Resilient WAN connectivity between multiple campuses or faculties where applicable"
        ]
      },
      {
        title: "2. Data Centre, Cloud & Virtual Desktop Infrastructure",
        items: [
          "Centralised hosting for LMS, ERP/SIS (student information systems) and research computing workloads",
          "VDI deployment for computer labs and remote/hybrid learning, reducing endpoint management overhead",
          "Cloud adoption (Microsoft 365 / Google Workspace + Azure/AWS) to reduce on-premises infrastructure burden"
        ]
      },
      {
        title: "3. Classroom & End-User Technology",
        items: [
          "Standardised, centrally managed classroom devices, interactive displays and lecture-capture systems",
          "Mobile device management (MDM) for student and staff devices, including BYOD policy enforcement"
        ]
      },
      {
        title: "4. Business Continuity & Disaster Recovery",
        items: [
          "Automated backup for student records, research data and administrative systems",
          "DR planning to ensure continuity of LMS and examination systems during disruption"
        ]
      }
    ],
    managedSecurityIntro: "Given typically lean in-house IT security teams, education institutions benefit significantly from managed services that extend coverage without requiring large internal headcount. Our recommended prioritisation:",
    managedSecurityTable: [
      { service: "Backup & Ransomware Recovery Readiness", priority: "Critical", why: "Education is among the most ransomware-targeted sectors globally; tested recovery capability is the highest-priority control." },
      { service: "SOC (Security Operations Centre)", priority: "Critical", why: "24/7 monitoring compensates for typically small in-house security teams, covering LMS, ERP and campus network activity." },
      { service: "IAM (Identity & Access Management)", priority: "Critical", why: "Single sign-on and lifecycle management across the high-churn student/staff population (enrolments, graduations, staff turnover)." },
      { service: "Email & Anti-Phishing Protection", priority: "Critical", why: "Phishing remains the leading initial-access vector for ransomware incidents against schools and universities." },
      { service: "Content Filtering & DNS Security", priority: "High", why: "Enforces safe-browsing and duty-of-care obligations for student internet access, particularly for K–12." },
      { service: "SIEM", priority: "High", why: "Centralised log visibility across campus network, LMS and administrative systems to support the SOC's detection capability." },
      { service: "NAC (Network Access Control)", priority: "High", why: "Manages the high volume of BYOD, guest and IoT/AV devices connecting to open campus networks." },
      { service: "VAPT (Vulnerability Assessment & Penetration Testing)", priority: "High", why: "Periodic testing of student portals, LMS and administrative systems, often required for funding or accreditation." },
      { service: "PAM (Privileged Access Management)", priority: "Medium", why: "Protects administrative access to SIS, ERP and research systems from compromised credentials." },
      { service: "WAF (Web Application Firewall)", priority: "Medium", why: "Protects student/parent portals, application and admissions systems from web-based attacks." },
      { service: "DLP (Data Loss Prevention)", priority: "Medium", why: "Protects student records, exam content and research data from accidental or malicious exfiltration." }
    ],
    approachIntro: "Given typical budget cycles and lean IT teams in education, we recommend a phased programme that prioritises the highest-impact, most cost-effective protections first:",
    approach: [
      {
        phase: "Phase 1 (0–3 months) — Foundational Protection",
        items: [
          "Deploy or validate backup and recovery for student records, LMS and administrative systems, with a tested restore process",
          "Roll out email security and anti-phishing protection given its outsized role in ransomware incidents",
          "Baseline VAPT on student/parent portals and admissions systems"
        ]
      },
      {
        phase: "Phase 2 (3–6 months) — Identity & Network Hardening",
        items: [
          "Implement IAM with single sign-on across LMS, email and administrative systems, automating enrolment/graduation lifecycle changes",
          "Deploy NAC and network segmentation to manage BYOD, guest and IoT/AV devices safely",
          "Introduce content filtering and DNS security for duty-of-care compliance"
        ]
      },
      {
        phase: "Phase 3 (6–12 months) — Managed Operations & Maturity",
        items: [
          "Transition to 24/7 managed SOC, extending coverage beyond in-house team capacity",
          "Implement PAM for administrative and research-system access",
          "Establish a recurring VAPT cycle aligned to accreditation or funding-body requirements"
        ]
      }
    ],
    suggestions: [
      "Lead with backup and email security, not the most advanced tooling: given budget constraints, the highest return for education clients consistently comes from ransomware-recovery readiness and phishing defence.",
      "Treat managed SOC as a force-multiplier for a small team: rather than competing for security hires, a managed service extends coverage to 24/7 without growing headcount.",
      "Automate identity lifecycle events: the constant churn of enrolments, graduations and staff turnover makes manual access management one of the largest hidden risks on campus.",
      "Plan licensing around academic calendars and funding cycles: align procurement and renewal timing with budget approval cycles to avoid coverage gaps."
    ],
    whyPartner: [
      "A single accountable partner across campus networking, infrastructure and managed security",
      "Pragmatic, budget-aware recommendations suited to institutional funding cycles",
      "24x7x365 SOC that extends the reach of lean in-house IT teams",
      "Flexible commercial models: project-based deployment, managed services, or co-managed arrangements"
    ],
    ctaText: "Let's discuss a tailored assessment for your institution."
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Secure, compliant, and always-on technology foundations for the UAE's healthcare sector.",
    image: "/images/healthcare_industry.jpg",
    details: "Secure, compliant, and always-on technology foundations for the UAE's healthcare sector — from bedside to data center.",
    features: [
      "Clinical Mobility",
      "IT Infrastructure",
      "Cybersecurity",
      "24x7 SOC",
      "Cloud & BC",
      "Managed Services"
    ]
  },
  {
    slug: "bfsi",
    title: "BFSI",
    description: "Engineering resilient, compliant technology for banking, financial services & insurance.",
    image: "/images/bfsi_industry.jpg",
    details: "Engineering resilient, compliant technology for banking, financial services & insurance.",
    features: [
      "Regulatory Compliance (PCI-DSS / SWIFT CSP)",
      "Zero Trust Architecture",
      "Identity & Access Management (IAM / PAM)",
      "Core Banking Infrastructure",
      "Fraud & Transaction Monitoring",
      "24/7 SOC Operations",
      "Data Loss Prevention",
      "VAPT & Penetration Testing"
    ],
    tagline: "Engineering resilient, compliant technology for banking, financial services & insurance",
    badges: [
      "PCI-DSS & SWIFT CSP — Aligned controls for payment & messaging systems",
      "Zero-Trust Ready — Identity-first architecture for regulated environments",
      "24x7x365 SOC — Coverage for transaction-critical systems"
    ],
    aboutText: [
      "MindLabs Technologies designs and delivers secure, resilient, and high-performance IT ecosystems purpose-built for the demanding requirements of the banking, financial services, and insurance (BFSI) sector. Since 2017, we have partnered with financial institutions across the UAE to strengthen digital operations, safeguard sensitive financial data, and ensure uninterrupted access to mission-critical systems.",
      "Our expertise spans enterprise networking, cybersecurity, cloud infrastructure, identity and access management, security operations, business continuity, and fully managed IT services. Every solution is engineered to support regulatory compliance, strengthen cyber resilience, protect customer and financial information, and provide the availability, scalability, and operational excellence required in today’s rapidly evolving financial landscape."
    ],
    whatWeBring: [
      "Deep familiarity with core banking, payments, and insurance policy/claims systems and their compliance obligations",
      "Proven delivery against PCI-DSS, SWIFT CSP, central bank cybersecurity frameworks, and ISO 27001",
      "OEM-certified engineers across networking, security, data centre, and end-user computing",
      "Managed security services built around fraud prevention, transaction integrity, and regulatory audit readiness",
      "Experience supporting multi-branch, multi-channel (branch, ATM, mobile, online) financial operations"
    ],
    whyNeedTitle: "Why BFSI Needs a Specialised Technology Partner",
    whyNeedIntro: "Financial institutions operate under a unique combination of high-value targeting, strict regulation, and low tolerance for downtime:",
    riskTable: [
      { driver: "High-value target for cybercrime", why: "Direct access to funds and sensitive financial data makes BFSI one of the most consistently attacked sectors globally." },
      { driver: "Heavy regulatory obligation", why: "PCI-DSS, SWIFT CSP, central bank cybersecurity frameworks and data-protection law impose strict, audited controls." },
      { driver: "Transaction-critical uptime", why: "Core banking, payments and trading systems require near-zero downtime; outages have direct financial and reputational cost." },
      { driver: "Multi-channel attack surface", why: "Branch networks, ATMs, mobile and online banking each introduce distinct security and fraud-monitoring requirements." },
      { driver: "Third-party & fintech integration", why: "Open banking, payment gateways and fintech partnerships expand the perimeter beyond the institution's direct control." },
      { driver: "Insider & privileged-access risk", why: "Financial fraud frequently involves abuse of legitimate privileged access, not just external attack." }
    ],
    solutionsIntro: "Our recommended stack for BFSI clients, with representative best-fit OEM brands per category:",
    solutionsTable: [
      { category: "Core Networking (LAN/WAN/SD-WAN)", useCase: "Resilient connectivity across HQ, branches & data centres", brands: "Cisco, Juniper, Fortinet SD-WAN, Aruba (HPE)" },
      { category: "Data Centre & Compute", useCase: "High-availability compute for core banking & trading systems", brands: "Dell Technologies, HPE, Lenovo, Cisco UCS" },
      { category: "Storage & Backup/DR", useCase: "Resilient, auditable data protection for financial records", brands: "Dell EMC, NetApp, Veeam, Commvault, Pure Storage" },
      { category: "Virtualization & Private/Hybrid Cloud", useCase: "Resilient, compliant hosting for regulated workloads", brands: "VMware (Broadcom), Microsoft Azure, AWS, Nutanix" },
      { category: "Branch & ATM Infrastructure", useCase: "Reliable, secure connectivity and hardware for branch networks", brands: "Cisco, Fortinet, NCR Atleos, Diebold Nixdorf" },
      { category: "Unified Communications & Collaboration", useCase: "Secure communication for trading floors, branches & back-office", brands: "Cisco Webex, Microsoft Teams, Avaya" },
      { category: "Network Security (Firewall/NGFW)", useCase: "Perimeter & segmentation for core banking and payment zones", brands: "Palo Alto Networks, Fortinet, Check Point" },
      { category: "Identity & Access (IAM/PAM)", useCase: "Zero-trust access control for staff, vendors & privileged admins", brands: "CyberArk, Okta, Microsoft Entra ID, SailPoint, BeyondTrust" },
      { category: "Fraud Detection & Transaction Monitoring", useCase: "Real-time detection of fraudulent transactions & account activity", brands: "SAS, NICE Actimize, Feedzai" },
      { category: "Endpoint & Email Security", useCase: "Protecting branch, back-office and executive endpoints from targeted attack", brands: "CrowdStrike, Microsoft Defender, Proofpoint" }
    ],
    infraIntro: "BFSI infrastructure must deliver near-zero downtime, strong compliance evidencing, and consistent security posture across branch, data-centre and digital channels. Our recommended approach:",
    infraSections: [
      {
        title: "1. Resilient Multi-Site Network Fabric",
        items: [
          "Redundant SD-WAN connectivity between HQ, data centres and branch network — Cisco / Fortinet SD-WAN",
          "Strict network segmentation isolating core banking, payment switching and cardholder data environments (CDE)",
          "Secure, resilient ATM and branch connectivity with dedicated monitoring"
        ]
      },
      {
        title: "2. Data Centre & Compute Infrastructure",
        items: [
          "Active-active data centre design for core banking, payments and trading systems with strict RPO/RTO targets",
          "Private or hybrid cloud architecture for regulated workloads, with data residency controls where mandated",
          "Hardware security module (HSM) integration for key management and payment cryptography"
        ]
      },
      {
        title: "3. Branch & Channel Infrastructure",
        items: [
          "Standardised, centrally managed branch network and endpoint hardware for consistent security posture",
          "Secure ATM infrastructure and monitoring in partnership with leading ATM/self-service OEMs"
        ]
      },
      {
        title: "4. Business Continuity & Disaster Recovery",
        items: [
          "Tested, regulator-aligned DR/BCP programme for core banking, payments and customer-facing channels",
          "Geo-redundant backup with immutable copies to withstand ransomware-driven recovery scenarios"
        ]
      }
    ],
    managedSecurityIntro: "BFSI's combination of regulatory obligation, fraud exposure, and high-value targeting makes a comprehensive, audit-ready managed security model essential. Our recommended prioritisation for this sector:",
    managedSecurityTable: [
      { service: "SOC (Security Operations Centre)", priority: "Critical", why: "24/7 monitoring across core banking, payments and digital channels, with regulator-aligned incident reporting." },
      { service: "SIEM", priority: "Critical", why: "Centralised log correlation across core banking, payment switching and channel systems to detect fraud and intrusion patterns." },
      { service: "PAM (Privileged Access Management)", priority: "Critical", why: "Controls and records privileged access to core banking and payment systems — a primary control point for both external attack and insider fraud." },
      { service: "IAM (Identity & Access Management)", priority: "Critical", why: "Enforces least-privilege, zero-trust access across staff, branches, vendors and fintech integrations." },
      { service: "WAF (Web Application Firewall)", priority: "Critical", why: "Protects online banking, mobile banking APIs and payment gateways from web-based attack — typically a PCI-DSS requirement." },
      { service: "VAPT (Vulnerability Assessment & Penetration Testing)", priority: "Critical", why: "Mandated or expected by regulators and card schemes; regular testing of core banking, mobile and payment systems." },
      { service: "NAC (Network Access Control)", priority: "High", why: "Controls device admission across branch networks and back-office environments." },
      { service: "DLP (Data Loss Prevention)", priority: "High", why: "Protects customer financial data, KYC documentation and transaction records from exfiltration." },
      { service: "Fraud & Transaction Monitoring", priority: "High", why: "Real-time analytics to detect anomalous transactions, account takeover and payment fraud." },
      { service: "Email & Anti-Phishing Protection", priority: "High", why: "Financial institutions are leading targets for business email compromise (BEC) and executive-impersonation fraud." },
      { service: "DDoS Protection", priority: "Medium", why: "Protects online and mobile banking channel availability against volumetric attack." }
    ],
    approachIntro: "Given the regulatory and fraud-risk profile of BFSI, we recommend a phased programme that prioritises identity, privileged access, and compliance-critical controls before broadening into full managed operations:",
    approach: [
      {
        phase: "Phase 1 (0–3 months) — Compliance Baseline & Quick Wins",
        items: [
          "Gap assessment against PCI-DSS, SWIFT CSP and applicable central bank cybersecurity framework",
          "Baseline VAPT across core banking, online/mobile banking and payment systems",
          "Deploy or tune WAF in front of customer-facing digital banking channels"
        ]
      },
      {
        phase: "Phase 2 (3–6 months) — Identity & Privileged Access Hardening",
        items: [
          "Implement PAM across all administrative access to core banking, payment and database systems",
          "Roll out IAM with zero-trust policies across staff, branch and third-party/fintech access",
          "Deploy NAC across branch and back-office networks"
        ]
      },
      {
        phase: "Phase 3 (6–12 months) — Managed Operations & Continuous Assurance",
        items: [
          "Transition to 24/7 managed SOC with fraud-aware and compliance-aligned detection use cases",
          "Establish a continuous VAPT and penetration-testing cycle aligned to regulatory and card-scheme calendars",
          "Layer in fraud and transaction-monitoring analytics for real-time detection of account takeover and payment fraud"
        ]
      }
    ],
    suggestions: [
      "Treat PAM as the single highest-leverage control: in our experience, privileged-access abuse — external or insider — is the common thread across the most damaging BFSI incidents.",
      "Align every security investment to a named compliance requirement: mapping controls explicitly to PCI-DSS, SWIFT CSP or central bank frameworks accelerates both budget approval and audit outcomes.",
      "Don't separate fraud monitoring from security operations: the strongest outcomes come from correlating SOC/SIEM telemetry with transaction-fraud analytics rather than running them as isolated functions.",
      "Plan for fintech and open-banking integration risk explicitly: each new API or partner integration should go through the same security and access-governance process as internal systems."
    ],
    whyPartner: [
      "A single accountable partner across hardware, networking, infrastructure and managed security",
      "OEM-certified engineering teams with BFSI-sector delivery and compliance experience",
      "24x7x365 SOC with regulator-aligned incident response and reporting practices",
      "Flexible commercial models: project-based deployment, managed services, or hybrid co-managed arrangements"
    ],
    ctaText: "Let's discuss a tailored compliance and security assessment for your institution."
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    description: "Securing upstream, midstream & downstream operations end to end.",
    image: "/images/oil_gas_industry.jpg",
    details: "Securing upstream, midstream & downstream operations end to end.",
    features: [
      "IT/OT Convergence & Segmentation",
      "SCADA & ICS Cybersecurity",
      "Remote Site Connectivity (SD-WAN / Satellite)",
      "Ruggedised & Hazardous-Area Hardware",
      "OT-aware 24/7 SOC",
      "IEC 62443 / NCA Compliance",
      "Industrial DMZ Architecture",
      "Backup & Ransomware Recovery"
    ],
    tagline: "Securing upstream, midstream & downstream operations end to end",
    badges: [
      "IT/OT Converged — Unified security across enterprise & industrial control systems",
      "IEC 62443 Aligned — Industrial cybersecurity best-practice controls",
      "Remote-Site Ready — Rugged infrastructure for fields, rigs & pipelines"
    ],
    aboutText: [
      "MindLabs is an IT systems integrator, value-added reseller (VAR), and managed services provider (MSP) delivering technology infrastructure and cybersecurity for oil & gas operators, drilling contractors, refineries, and midstream/pipeline companies across the region. We design and operate IT and OT-aware infrastructure that keeps production, refining, and distribution systems running safely, securely, and continuously.",
      "Oil & gas environments combine remote, harsh-condition sites with highly sensitive industrial control systems (ICS/SCADA). A cyber incident here carries safety, environmental, and production-continuity consequences far beyond typical IT downtime. Our approach is built around that reality — segmented IT/OT architectures, layered security, and infrastructure engineered for field conditions."
    ],
    whatWeBring: [
      "Proven IT/OT convergence expertise — securing the boundary between corporate IT and ICS/SCADA environments",
      "Infrastructure designed for remote, harsh-condition sites: rigs, pipelines, terminals, refineries",
      "OEM-certified engineers across networking, industrial security, data centre, and field connectivity",
      "Managed security operations tuned to safety-critical and regulatory (IEC 62443 / NCA / NESA-aligned) requirements",
      "Experience integrating multi-vendor ICS, SCADA, and enterprise IT estates"
    ],
    whyNeedTitle: "Why Oil & Gas Needs a Specialised Technology Partner",
    whyNeedIntro: "Energy operators face a risk profile shaped by industrial control exposure, remote operations, and national critical-infrastructure status:",
    riskTable: [
      { driver: "IT/OT convergence risk", why: "SCADA, DCS and PLC systems increasingly connect to corporate IT, widening the attack surface into production environments." },
      { driver: "Critical infrastructure status", why: "Oil & gas is designated critical national infrastructure, drawing nation-state and ransomware targeting." },
      { driver: "Remote & harsh-site operations", why: "Rigs, pipelines and remote terminals require resilient connectivity and ruggedised hardware with limited on-site IT support." },
      { driver: "Safety & environmental stakes", why: "A control-system compromise can risk physical safety, environmental incidents, and production shutdown — not just data loss." },
      { driver: "Regulatory & insurance pressure", why: "IEC 62443, NCA ECC, and operator/insurer requirements increasingly mandate formal OT security programmes." },
      { driver: "Third-party & vendor access", why: "Drilling contractors, EPC firms and equipment vendors require remote access into operational environments." }
    ],
    solutionsIntro: "Our recommended stack for energy-sector clients, with representative best-fit OEM brands per category:",
    solutionsTable: [
      { category: "Industrial Networking & OT Switching", useCase: "Ruggedised, deterministic networking for field & plant environments", brands: "Cisco (IR/IE series), Moxa, Hirschmann (Belden)" },
      { category: "IT/OT Segmentation & Firewalls", useCase: "Secure boundary between corporate IT and ICS/SCADA zones", brands: "Fortinet, Palo Alto Networks, Claroty, Nozomi Networks" },
      { category: "Remote & Field Connectivity", useCase: "Resilient links to rigs, pipelines & remote terminals", brands: "Cisco SD-WAN, Cradlepoint, satellite/cellular failover (VSAT, Starlink Business)" },
      { category: "Data Centre & Compute", useCase: "Resilient compute for SCADA historian, ERP & engineering workloads", brands: "Dell Technologies, HPE, Lenovo" },
      { category: "Storage & Backup/DR", useCase: "Protection for historian, engineering and compliance data", brands: "Dell EMC, NetApp, Veeam, Commvault" },
      { category: "Virtualization & Cloud", useCase: "Hybrid cloud for enterprise workloads, kept separate from OT", brands: "VMware (Broadcom), Microsoft Azure, AWS" },
      { category: "Ruggedised End-User & Field Devices", useCase: "Rig-floor, plant & field-rated computing and handhelds", brands: "Panasonic TOUGHBOOK, Getac, Zebra" },
      { category: "OT-Aware Network Security & Monitoring", useCase: "Visibility & threat detection purpose-built for ICS/SCADA traffic", brands: "Claroty, Nozomi Networks, Dragos" },
      { category: "Identity & Access (IAM/PAM)", useCase: "Controlling vendor, engineer & operator access to OT and IT systems", brands: "CyberArk, Microsoft Entra ID, BeyondTrust, Okta" },
      { category: "Endpoint & Email Security", useCase: "Protecting engineering workstations and corporate endpoints", brands: "CrowdStrike, Microsoft Defender, Proofpoint" }
    ],
    infraIntro: "Energy-sector infrastructure must withstand remote, harsh-condition deployment while maintaining a clean separation between IT and OT domains. Our recommended approach:",
    infraSections: [
      {
        title: "1. Segmented IT/OT Network Architecture",
        items: [
          "Industrial DMZ design separating corporate IT from SCADA/DCS/PLC environments, aligned to IEC 62443 zones & conduits",
          "Ruggedised, deterministic switching for plant floors and wellsites — Cisco IE/IR series, Moxa, Hirschmann",
          "Redundant field connectivity (SD-WAN with cellular/satellite failover) for remote rigs and pipeline stations"
        ]
      },
      {
        title: "2. Data Centre & Compute Infrastructure",
        items: [
          "Resilient compute for SCADA historian, engineering and ERP workloads, physically and logically isolated from OT",
          "Hyperconverged infrastructure at remote sites to reduce on-site hardware footprint and support requirements",
          "Hybrid cloud extension for enterprise workloads, kept strictly outside the OT trust boundary"
        ]
      },
      {
        title: "3. Ruggedised & Field Hardware",
        items: [
          "Field-rated laptops and tablets for rig floor, plant and pipeline inspection use — Panasonic TOUGHBOOK, Getac",
          "Explosion-proof / hazardous-area rated devices where required for upstream and refinery environments"
        ]
      },
      {
        title: "4. Business Continuity & Disaster Recovery",
        items: [
          "Replicated backup for historian and engineering data with RTOs aligned to production continuity needs",
          "DR planning that accounts for both cyber incidents and physical site-loss scenarios"
        ]
      }
    ],
    managedSecurityIntro: "Oil & gas requires a managed security model that explicitly accounts for OT visibility alongside traditional IT controls. Our recommended prioritisation for this sector:",
    managedSecurityTable: [
      { service: "OT/ICS Security Monitoring", priority: "Critical", why: "Purpose-built visibility into SCADA/DCS/PLC traffic to detect anomalies that traditional IT tools miss — Claroty, Nozomi, Dragos." },
      { service: "SOC (Security Operations Centre)", priority: "Critical", why: "24/7 monitoring spanning both IT and OT-aware telemetry, with escalation paths suited to safety-critical environments." },
      { service: "SIEM", priority: "Critical", why: "Centralised correlation across corporate IT, engineering systems and OT-boundary logs to detect cross-domain attack paths." },
      { service: "PAM (Privileged Access Management)", priority: "Critical", why: "Locks down and records vendor, contractor and engineer privileged access into OT and engineering systems." },
      { service: "IAM (Identity & Access Management)", priority: "Critical", why: "Governs lifecycle access for employees, drilling contractors, EPC firms and equipment vendors." },
      { service: "NAC (Network Access Control)", priority: "High", why: "Controls and verifies devices connecting at wellsites, plants and remote terminals before network admission." },
      { service: "VAPT (Vulnerability Assessment & Penetration Testing)", priority: "High", why: "Regular, safely-scoped testing of IT and IT/OT boundary systems without disrupting live production." },
      { service: "WAF (Web Application Firewall)", priority: "Medium", why: "Protects enterprise portals, vendor extranets and engineering document-management web applications." },
      { service: "Email & Anti-Phishing Protection", priority: "High", why: "Energy firms are high-value targets for spear-phishing aimed at engineers and finance/procurement staff." },
      { service: "DLP (Data Loss Prevention)", priority: "Medium", why: "Protects seismic data, reserve estimates, engineering drawings and commercially sensitive contracts." },
      { service: "Backup & Ransomware Recovery Readiness", priority: "Critical", why: "Given ransomware's documented history of halting energy operations, tested recovery is treated as a security control in its own right." }
    ],
    approachIntro: "Given the safety and continuity stakes involved, we recommend a phased programme that prioritises OT visibility and segmentation before layering on broader managed operations:",
    approach: [
      {
        phase: "Phase 1 (0–3 months) — Visibility & Segmentation Baseline",
        items: [
          "Asset discovery and network mapping across both IT and OT/ICS environments",
          "Deploy OT-aware monitoring (Claroty / Nozomi / Dragos) at key sites to establish a traffic baseline",
          "Validate and formalise the IT/OT segmentation (industrial DMZ) design"
        ]
      },
      {
        phase: "Phase 2 (3–6 months) — Access & Boundary Hardening",
        items: [
          "Implement PAM for all vendor, contractor and engineer access into OT and engineering systems",
          "Roll out IAM with formal lifecycle management for the full contractor/vendor ecosystem",
          "Deploy NAC at key field and plant locations to control device admission"
        ]
      },
      {
        phase: "Phase 3 (6–12 months) — Managed Operations & Resilience",
        items: [
          "Transition to 24/7 SOC with combined IT/OT detection use cases and safety-aware escalation runbooks",
          "Establish a tested backup and ransomware-recovery programme for historian and engineering systems",
          "Begin a recurring, safely-scoped VAPT cycle aligned to IEC 62443 and regulatory expectations"
        ]
      }
    ],
    suggestions: [
      "Treat OT visibility as the foundation, not an add-on: without OT-aware monitoring, a SOC is effectively blind to the systems that matter most in this sector.",
      "Formalise the industrial DMZ before adding more tools: many operators we assess have informal or eroded IT/OT segmentation — this should be validated and hardened first.",
      "Make ransomware recovery a tested capability, not a backup policy: given the sector's documented exposure to production-halting ransomware, recovery time should be rehearsed, not assumed.",
      "Plan procurement around field conditions from day one: standard enterprise hardware has a short service life at wellsites and plants — budget for ruggedised, hazardous-area-rated equipment where applicable."
    ],
    whyPartner: [
      "A single accountable partner spanning IT, OT-aware security, networking and managed services",
      "Engineers experienced with both enterprise IT and industrial control environments",
      "24x7x365 SOC capable of safety-aware escalation for production-critical environments",
      "Flexible engagement models: project deployment, managed services, or co-managed operations alongside your in-house team"
    ],
    ctaText: "Let's discuss a tailored OT/IT security assessment for your operation."
  },
  {
    slug: "aviation-airlines",
    title: "Aviation & Airlines",
    description: "Engineering resilient, compliant, always-on technology for the skies.",
    image: "/images/aviation_industry.jpg",
    details: "Engineering resilient, compliant, always-on technology for the skies.",
    features: [
      "Multi-Site Network Fabric",
      "Passenger Data Protection (PII & Payment)",
      "Reservation & Crew System Resilience",
      "MRO & Ground Operations Integration",
      "Ruggedised Ramp & Ground Hardware",
      "Identity & Access Management (IAM / PAM)",
      "Brand & Digital Risk Monitoring",
      "24/7 NOC/SOC for Flight-Critical Systems"
    ],
    tagline: "Engineering resilient, compliant, always-on technology for the skies",
    badges: [
      "24x7x365 NOC / SOC — Coverage for flight-critical systems",
      "PCI-DSS & GDPR Aligned — Controls for passenger data",
      "Multi-Vendor — Best-of-breed OEM partnerships"
    ],
    aboutText: [
      "MindLabs is an IT systems integrator, value-added reseller (VAR), and managed services provider (MSP) delivering end-to-end technology infrastructure and cybersecurity for aviation, MRO, ground handling, and airline operators across the GCC and wider region. We combine certified engineering talent, top-tier OEM partnerships, and a 24x7 Network & Security Operations Centre (NOC/SOC) to keep mission-critical aviation systems available, compliant, and protected.",
      "Aviation is a uniquely demanding environment: a single outage or breach can ground flights, compromise passenger safety data, or disrupt time-critical operations such as crew scheduling, dispatch, and offshore/medevac flight tracking. Our practice is purpose-built around that reality — high-availability infrastructure, layered security, and rapid incident response."
    ],
    whatWeBring: [
      "Deep familiarity with airline / airport operational technology (OT) and IT convergence, including reservation, crew, MRO, and ground-ops systems",
      "Proven delivery for regulated, safety-critical, and high-availability environments",
      "OEM-certified engineers across networking, security, data centre, and end-user computing",
      "Managed security services tailored to passenger data protection and operational resilience",
      "Regional presence with the ability to support multi-site operations (hubs, outstations, hangars, lounges)"
    ],
    whyNeedTitle: "Why Aviation Needs a Specialised Technology Partner",
    whyNeedIntro: "Airlines and aviation operators sit at the intersection of critical infrastructure, high-value customer data, and intense regulatory scrutiny. The sector faces a distinct risk and compliance profile:",
    riskTable: [
      { driver: "Operational continuity", why: "Booking, dispatch, crew, and MRO systems must run 24/7; downtime directly grounds revenue and safety operations." },
      { driver: "Passenger data protection", why: "PII, payment, passport and loyalty data require PCI-DSS, GDPR-aligned, and national data-protection controls." },
      { driver: "OT/IT convergence", why: "Avionics-adjacent ground systems, fuel, baggage, and SCADA-linked ground equipment widen the attack surface." },
      { driver: "Third-party ecosystem risk", why: "GDSs, OTAs, ground handlers, caterers, and MRO partners all connect into core systems." },
      { driver: "Brand & passenger trust", why: "Phishing, fake booking sites, and loyalty fraud directly damage customer confidence and revenue." },
      { driver: "Regulatory oversight", why: "GACA / GCAA / ICAO-aligned cybersecurity expectations are increasing for aviation operators region-wide." }
    ],
    solutionsIntro: "Our recommended stack for aviation clients, with representative best-fit OEM brands per category:",
    solutionsTable: [
      { category: "Core Networking (LAN/WAN/SD-WAN)", useCase: "Resilient multi-site connectivity for hubs, outstations & hangars", brands: "Cisco, Juniper, Aruba (HPE), Fortinet SD-WAN" },
      { category: "Wireless & Airport/Terminal Connectivity", useCase: "High-density Wi-Fi for terminals, lounges & crew areas", brands: "Cisco Meraki, Aruba, Ruckus (CommScope)" },
      { category: "Data Centre & Compute", useCase: "Resilient compute for reservation, crew & MRO workloads", brands: "Dell Technologies, HPE, Lenovo, Cisco UCS" },
      { category: "Storage & Backup/DR", useCase: "Always-on data protection for flight & passenger records", brands: "Dell EMC, NetApp, Veeam, Commvault" },
      { category: "Virtualization & Cloud", useCase: "Hybrid cloud for scalable, resilient operations", brands: "VMware (Broadcom), Microsoft Azure, AWS, Nutanix" },
      { category: "Unified Communications & Collaboration", useCase: "Crew, dispatch & ops-centre communication", brands: "Cisco Webex, Microsoft Teams, Avaya, Poly" },
      { category: "End-User Computing & Ruggedised Devices", useCase: "Ground crew, ramp & MRO mobile/rugged hardware", brands: "Panasonic TOUGHBOOK, Zebra, Lenovo, HP" },
      { category: "Network Security (Firewall/NGFW)", useCase: "Perimeter & segmentation for OT/IT convergence zones", brands: "Fortinet, Palo Alto Networks, Check Point" },
      { category: "Identity & Access (IAM/PAM)", useCase: "Controlling crew, vendor & admin access to critical systems", brands: "Okta, CyberArk, Microsoft Entra ID, BeyondTrust" },
      { category: "Endpoint & Email Security", useCase: "Protecting crew/ops endpoints and phishing-prone inboxes", brands: "CrowdStrike, Microsoft Defender, Proofpoint" }
    ],
    infraIntro: "For aviation operators, infrastructure design must account for multi-site sprawl (terminals, hangars, lounges, remote outstations), strict uptime SLAs, and harsh ramp/hangar operating conditions. Our recommended approach:",
    infraSections: [
      {
        title: "1. Resilient Multi-Site Network Fabric",
        items: [
          "Redundant SD-WAN connectivity between HQ, hubs, hangars, lounges and outstations — Cisco / Fortinet SD-WAN or Aruba EdgeConnect",
          "Segmented VLANs separating passenger Wi-Fi, corporate IT, and OT/ground-equipment networks",
          "High-density access points for terminals and lounges sized for peak passenger load — Cisco Meraki or Aruba"
        ]
      },
      {
        title: "2. Data Centre & Compute Infrastructure",
        items: [
          "Active-active or active-passive data centre design for reservation, crew-scheduling and MRO systems",
          "Hyperconverged infrastructure (Nutanix, Dell VxRail) to simplify scaling at outstations and smaller sites",
          "Hybrid cloud extension (Azure / AWS) for burst capacity and disaster recovery"
        ]
      },
      {
        title: "3. Ruggedised & Mobility Hardware",
        items: [
          "Ramp, baggage and ground-crew handheld/rugged devices (Zebra, Panasonic TOUGHBOOK) rated for tarmac conditions",
          "Mobile device management (MDM) for crew tablets, EFBs-adjacent ground systems, and ramp scanners"
        ]
      },
      {
        title: "4. Business Continuity & Disaster Recovery",
        items: [
          "Replicated backup (Veeam / Commvault) with recovery-time objectives aligned to flight-ops criticality",
          "Geo-redundant DR site or cloud-based DR for reservation and crew systems"
        ]
      }
    ],
    managedSecurityIntro: "Aviation's blend of passenger data, third-party integrations, and OT-adjacent systems makes a layered, managed security model essential. Below is our recommended prioritisation for this sector:",
    managedSecurityTable: [
      { service: "SOC (Security Operations Centre)", priority: "Critical", why: "24/7 monitoring across reservation, crew, ground-ops & passenger-facing systems; correlates alerts across the full estate." },
      { service: "SIEM", priority: "Critical", why: "Centralised log correlation across booking, ground-ops, OT-adjacent and corporate IT to detect cross-system attack patterns." },
      { service: "IAM (Identity & Access Management)", priority: "Critical", why: "Governs crew, ground-staff, contractor and third-party (GDS/OTA/MRO) access with strong lifecycle controls." },
      { service: "PAM (Privileged Access Management)", priority: "Critical", why: "Locks down admin access to dispatch, crew-scheduling and core reservation systems — a frequent ransomware entry point." },
      { service: "WAF (Web Application Firewall)", priority: "High", why: "Protects booking engines, loyalty portals and customer-facing APIs from web-based attack and credential-stuffing." },
      { service: "VAPT (Vulnerability Assessment & Penetration Testing)", priority: "High", why: "Regular testing of booking systems, customer apps and ground-ops platforms ahead of regulatory and partner audits." },
      { service: "NAC (Network Access Control)", priority: "High", why: "Controls device admission across hangars, ramps and terminals where contractor and third-party devices connect." },
      { service: "Email & Anti-Phishing Protection", priority: "High", why: "Aviation brands are frequent phishing/smishing targets impersonating booking, loyalty and crew communications." },
      { service: "DDoS Protection", priority: "Medium", why: "Safeguards booking and check-in availability against volumetric attacks, particularly during peak travel periods." },
      { service: "DLP (Data Loss Prevention)", priority: "Medium", why: "Protects passenger PII, payment data and crew/operational records from exfiltration." },
      { service: "Brand & Digital Risk Monitoring", priority: "Medium", why: "Detects fake booking sites, rogue mobile apps and executive/loyalty impersonation targeting passengers." }
    ],
    approachIntro: "Based on common maturity gaps we see across regional aviation operators, we recommend a phased engagement that builds visibility first, then hardens access and resilience, then matures into continuous managed protection:",
    approach: [
      {
        phase: "Phase 1 (0–3 months) — Visibility & Quick Wins",
        items: [
          "Network and asset discovery across IT and OT-adjacent ground systems",
          "Baseline VAPT on customer-facing booking and loyalty platforms",
          "Deploy / tune SIEM log ingestion across reservation, crew and ground-ops systems",
          "Quick-win WAF deployment in front of booking engine and APIs"
        ]
      },
      {
        phase: "Phase 2 (3–6 months) — Access & Perimeter Hardening",
        items: [
          "Roll out IAM with lifecycle management for crew, ground-staff and third-party access",
          "Implement PAM for all administrative access to dispatch, crew and reservation systems",
          "Segment OT-adjacent ground equipment networks with NAC and firewall policy enforcement"
        ]
      },
      {
        phase: "Phase 3 (6–12 months) — Managed Operations & Resilience",
        items: [
          "Transition to 24/7 managed SOC with aviation-tuned detection use cases",
          "Establish DR/BCP testing cadence for reservation and crew-scheduling systems",
          "Layer in brand & digital risk monitoring to protect passengers from booking fraud and impersonation",
          "Continuous VAPT cycle aligned to regulatory and partner audit calendars"
        ]
      }
    ],
    suggestions: [
      "Prioritise PAM and IAM first: in aviation environments, third-party and contractor access (GDS, OTA, MRO, ground handlers) is consistently the highest-risk gap we encounter.",
      "Treat SOC + SIEM as inseparable: fragmented monitoring across booking, crew and ground-ops platforms is the most common blind spot leading to delayed breach detection.",
      "Budget for brand protection alongside infrastructure: passenger-facing fraud (fake booking sites, loyalty fraud, smishing) causes reputational damage that infrastructure security alone won't prevent.",
      "Plan hardware refresh around rugged/ramp environments: standard enterprise devices underperform in hangar and tarmac conditions — budget for purpose-built ruggedised hardware from day one."
    ],
    whyPartner: [
      "Single accountable partner across hardware, networking, infrastructure and managed security — no finger-pointing between vendors",
      "OEM-certified engineering teams with aviation-sector delivery experience",
      "24x7x365 NOC/SOC with defined SLAs for flight-critical and passenger-facing systems",
      "Flexible commercial models: project-based deployment, managed services, or hybrid co-managed arrangements"
    ],
    ctaText: "Let's discuss a tailored assessment for your operation."
  }
];


export const WHY_CHOOSE_US = [
  {
    title: 'Strategic Expertise',
    text: 'We align technology with your business objectives, delivering solutions that solve real operational challenges.',
    button: 'Start Journey',
    img: '/images/about-team.png',
    icon: 'Target'
  },
  {
    title: 'Client-First Approach',
    text: 'We prioritize transparency, responsiveness, and long-term relationships built on trust and reliability.',
    button: 'Start Journey',
    img: '/images/client-first.png',
    icon: 'Heart'
  },
  {
    title: 'Security Focused',
    text: 'We adopt industry best practices and evolving standards to ensure your data and infrastructure remain protected.',
    button: 'Start Journey',
    img: '/images/security-focused.png',
    icon: 'Shield'
  },
  {
    title: 'Innovation',
    text: "Future-ready technologies that keep you ahead of the curve. Whether it's AI or market intelligence, we've got you covered.",
    button: 'Start Journey',
    img: '/images/innovation.png',
    icon: 'Zap'
  }
];

export const MISSION_VISION = [
  {
    title: 'Our Mission',
    text: "Our mission is to equip enterprises with resilient cybersecurity frameworks and modern infrastructure solutions that enable sustainable growth.",
    text1:'We aim to deliver dependable technology experiences across cloud, data, hardware, applications, and digital environments, ensuring our clients remain secure, agile, and future-ready.',
    button: 'Read More',
    img: '/images/mission.png',
    icon: 'Flag'
  },
  {
    title: 'Our Vision',
    text: 'Our vision is to become a trusted innovation partner in Information Technology, Cybersecurity, Cloud, and Intelligent Automation across the region.',
     text1:'We envision a business landscape where technology is seamlessly integrated, intelligently automated, and securely governed, empowering organizations to scale with confidence.',
    button: 'Read More',
    img: '/images/vision.png',
    icon: 'Eye'
  }
];

export const STATS = [
  { label: 'Founded', value: '2017' },
  { label: 'Support', value: '24/7' },
  { label: 'Industries Served', value: '7+' },
  { label: 'Projects', value: '200+' },
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
  { id: 1, name: 'Fortinet', domain: 'fortinet.com' },
  { id: 2, name: 'SonicWall', domain: 'sonicwall.com' },
  { id: 3, name: 'ESET', domain: 'eset.com' },
  { id: 4, name: 'SentinelOne', domain: 'sentinelone.com' },
  { id: 5, name: 'WatchGuard', domain: 'watchguard.com' },
  { id: 6, name: 'Trend Micro', domain: 'trendmicro.com' },
  { id: 7, name: 'Sophos', domain: 'sophos.com' },
  { id: 8, name: 'ZeroFOX', domain: 'zerofox.com' },
  { id: 9, name: 'Cloudmon', domain: 'cloudmon' },
  { id: 10, name: 'BluSapphire', domain: 'blusapphire.com' },

  // Infrastructure
  { id: 11, name: 'Huawei', domain: 'huawei.com' },
  { id: 12, name: 'Dell Technologies', domain: 'dell.com' },
  { id: 13, name: 'HP', domain: 'hp.com' },
  { id: 14, name: 'Lenovo', domain: 'lenovo.com' },
  { id: 15, name: 'Citrix', domain: 'citrix.com' },
  { id: 16, name: 'Veeam', domain: 'veeam.com' },
  { id: 17, name: 'Sangfor', domain: 'sangfor.com' },

  // Networking
  { id: 18, name: 'Cisco', domain: 'cisco.com' },
  { id: 19, name: 'TP-Link', domain: 'tp-link.com' },

  // Hardware & End User Computing
  { id: 20, name: 'ASUS', domain: 'asus.com' },
  { id: 21, name: 'Acer', domain: 'acer.com' },
  { id: 22, name: 'Samsung', domain: 'samsung.com' },
  { id: 23, name: 'LG', domain: 'lg.com' },
  { id: 24, name: 'Epson', domain: 'epson.com' },
  { id: 25, name: 'Zebra', domain: 'zebra.com' },
  { id: 26, name: 'SUNMI', domain: 'sunmi.com' },

  // ELV, Collaboration & Audio Visual
  { id: 27, name: 'Crestron', domain: 'crestron.com' },
  { id: 28, name: 'Extron', domain: 'extron.com' },
  { id: 29, name: 'Shure', domain: 'shure.com' },
  { id: 30, name: 'Bose', domain: 'bose.com' },
  { id: 31, name: 'Fohhn', domain: 'fohhn' },
  { id: 32, name: 'ClearOne', domain: 'clearone.com' },
  { id: 33, name: 'Yealink', domain: 'yealink.com' },
  { id: 34, name: 'Logitech', domain: 'logitech.com' },
  { id: 35, name: 'ZKTeco', domain: 'zkteco.com' },
  { id: 36, name: 'Hikvision', domain: 'hikvision.com' },

  // AI & Automation
  { id: 37, name: 'Microsoft', domain: 'microsoft.com' },
  { id: 38, name: 'Google', domain: 'google.com' },
  { id: 39, name: 'Anthropic', domain: 'anthropic.com' },

  // Healthcare
  { id: 40, name: 'apar', domain: 'apar' },
];

export const CLIENTS: import('../types').Client[] = [
  { name: 'Dubai World Trade Centre', domain: 'dwtc.com' },
  { name: 'Government of Dubai', domain: 'dubai.ae' },
  { name: 'RTA (Roads and Transport Authority)', domain: 'rta.ae' },
  { name: 'Sharjah Museums Authority', domain: 'sharjahmuseums.ae' },
  { name: 'Danube Group', domain: 'aldanube.com' },
  { name: 'Arada', domain: 'arada.com' },
  { name: 'Kitopi', domain: 'kitopi.com' },
  { name: 'American-Kuwait Food Co.', domain: 'americana-group.com' },
  { name: 'Thumbay Hospital', domain: 'thumbayhospital.com' },
  { name: 'Brands For Less', domain: 'brandsforless.ae' },
];
export const EDUCATION_CLIENTS = [
  { src: '/logos/ajman uni.png', name: 'Ajman University' },
  { src: '/logos/athena edy.png', name: 'Athena EDY' },
  { src: '/logos/elizabeth school.png', name: 'Elizabeth School' },
  { src: '/logos/middlesex uni.png', name: 'Middlesex University Dubai' },
  { src: '/logos/sceffield.avif', name: 'Sheffield University' },
  { src: '/logos/scholar school.png', name: 'Scholar School' },
  { src: '/logos/symbiosis-logo.png', name: 'Symbiosis' },
  { src: '/logos/UD.png', name: 'University of Dubai' },
  { src: '/logos/UOWD.webp', name: 'University of Wollongong Dubai' },
  { src: '/logos/habitat-schools.png',name:'Habitat Schools'},
  { src: '/logos/taaleem.png',name:'Taaleem'},
  { src: '/logos/new-indian-model-school.png',name:'New Indian Model School'},  
];


export const HEALTHCARE_CONTENT: HealthcareContent = {
  slug: "healthcare",
  title: "Healthcare",
  subtitle: "for Hospitals, Clinics & Care Networks",
  tagline: "Secure, compliant, and always-on technology foundations for the UAE's healthcare sector — from bedside to data center.",
  badges: ["Clinical Mobility", "IT Infrastructure", "Cybersecurity", "24x7 SOC", "Cloud & BC", "Managed Services"],
  whoWeAre: {
    title: "ENGINEERING TRUST INTO HEALTHCARE IT",
    text: [
      "MindLabs Technologies designs and delivers secure, scalable, and high-performance IT ecosystems purpose-built for the realities of modern healthcare. Since 2017, we have partnered with hospitals, clinics, and healthcare groups across the UAE to modernize clinical and operational technology without compromising on patient data security or system uptime.",
      "From the bedside to the data center, our scope spans clinical mobility hardware, IT infrastructure, cybersecurity, 24x7 monitored security operations, cloud and business continuity, and fully managed services — engineered to meet the compliance, availability, and operational demands unique to healthcare environments."
    ],
    stats: [
      { value: "2017", label: "Serving healthcare clients since" },
      { value: "24x7", label: "SOC & infrastructure monitoring" },
      { value: "UAE-wide", label: "Government to private healthcare networks" }
    ],
    mission: "",
    vision: ""
  },
  whatThisMeans: [
    { title: "Regulatory Compliance", description: "Built around healthcare data protection standards", icon: "ShieldAlert" },
    { title: "Continuous Uptime", description: "Resilient systems for round-the-clock care", icon: "Activity" },
    { title: "Patient Data Security", description: "Zero Trust protection at every layer", icon: "Lock" },
    { title: "Always-On Support", description: "24x7 monitoring and responsive service", icon: "Headphones" }
  ],
  offeringsTitle: "END-TO-END TECHNOLOGY, BUILT FOR HEALTHCARE",
  offeringsIntro: "Every healthcare facility carries unique compliance obligations, clinical workflows, and uptime requirements. We architect technology around those realities — not the other way around.",
  offerings: [
    { title: "Clinical Mobility & Workstations", description: "Ergotron medical carts, mobile workstations & point-of-care computing", icon: "Smartphone" },
    { title: "IT Infrastructure & Hardware", description: "Servers, storage, networking & end-user computing", icon: "Cpu" },
    { title: "Cybersecurity Solutions", description: "NGFW, EDR/XDR, email security, PAM, IAM & vulnerability management", icon: "ShieldCheck" },
    { title: "24x7 Managed SOC & SIEM", description: "Round-the-clock threat monitoring and incident response", icon: "Eye" },
    { title: "Cloud, Data Center & BC", description: "Hybrid cloud, data center modernization & business continuity", icon: "Cloud" },
    { title: "Managed & Professional Services", description: "End-to-end IT operations, support, and project delivery", icon: "Wrench" }
  ],
  offeringsFooter: "One accountable partner across hardware, security, cloud, and support — so your IT and biomedical teams manage fewer vendors and resolve issues faster.",
  details: [
  
  ],
  focusTitle: "PURPOSE-BUILT FOR HEALTHCARE",
  focusIntro: "Our solutions are shaped around the regulatory frameworks, clinical workflows, and continuous-operation demands specific to healthcare delivery across the UAE.",
  focusAreas: [
    { name: "Hospitals & Multi-Specialty Care", icon: "HeartPulse" },
    { name: "Government Healthcare Networks", icon: "Building2" },
    { name: "Private Clinics & Day-Care Centers", icon: "Stethoscope" },
    { name: "Diagnostic & Imaging Centers", icon: "ScanFace" },
    { name: "Healthcare Education & Training", icon: "GraduationCap" },
    { name: "Pharma & Medical Logistics", icon: "Truck" }
  ],
  focusFooter: "Our sector-specific expertise allows us to design compliant, scalable, and secure solutions for real-time clinical operations.",
  whyChooseUs: [
    { title: "Strategic Expertise", description: "We align technology with clinical and operational objectives, solving real-world healthcare challenges." },
    { title: "Client-First Approach", description: "Transparency, responsiveness, and long-term relationships built on trust and reliability." },
    { title: "Security-Focused Innovation", description: "Industry best practices and evolving standards keep patient data protected, backed by continuous monitoring." },
    { title: "End-to-End Capabilities", description: "From advisory to implementation and managed services — complete lifecycle support under one roof." }
  ],
  cta: {
    title: "Connect With Us",
    subtitle: "Build a stronger, smarter, and more secure IT foundation for your healthcare facility with MindLabs.",
    company: "MindLabs Technologies LLC",
    address: "2312, B2B Tower, Business Bay, Dubai, UAE",
    website: "www.mindlabs-me.com",
    phone: "+971 50 658 2200",
    steps: [
      { number: "1", title: "Discovery Call", description: "Share your facility’s current IT and clinical workflow priorities" },
      { number: "2", title: "Site Assessment", description: "We evaluate infrastructure, security posture, and compliance gaps" },
      { number: "3", title: "Tailored Proposal", description: "A scoped solution and roadmap aligned to your budget and timeline" }
    ]
  }
};

export const SOLUTIONS_ECOSYSTEM_ITEMS: SolutionsEcosystemItem[] = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    subtitle: 'Resilience is not optional',
    description: 'Our cybersecurity solutions are designed to strengthen your digital perimeter, protect sensitive data, and ensure regulatory compliance and brand trust.',
    features: ['Endpoint Protection & XDR', 'Zero Trust Architecture', 'Vulnerability Assessment (VAPT)'],
    img: '/images/cyber_security_banner.png',
    reverse: false
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    subtitle: 'Secure & Scalable Backbone',
    description: 'We design high-performance environments that balance scalability with operational efficiency, whether on-premise, hybrid, or cloud native.',
    features: ['Network Architecture', 'Cloud Migration & Managed Services', 'Backup & Disaster Recovery'],
    img: '/images/infra_and_cloud_banner.png',
    reverse: true
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    subtitle: 'Transition to Intelligent Ecosystems',
    description: 'By combining AI with RPA, we deliver operational speed, accuracy, and measurable efficiency across your organization.',
    features: ['Gen AI & LLM Solutions', 'Robotic Process Automation (RPA)', 'Predictive Insights & Analytics'],
    img: '/images/ai_banner.png',
    reverse: false
  },
  {
    id: 'hardware-peripherals',
    title: 'IT and Hardware',
    subtitle: 'Enterprise-Grade Procurement',
    description: 'We supply enterprise-grade IT hardware sourced from globally trusted brands with expert configuration and support.',
    features: ['High-Performance Workstations', 'Enterprise Servers & Storage', 'Smart Boards & Displays'],
    img: '/images/managed_it_and_hardware.png',
    reverse: true
  },
  {
    id: 'networking',
    title: 'Networking',
    subtitle: 'Secure & Resilient Connectivity',
    description: 'We build secure, scalable, and high-performing network environments to deliver connectivity, security, and resilience.',
    features: ['Campus & Data Center Networks', 'SD-WAN & Enterprise Wi-Fi', 'Network Access Control (NAC)'],
    img: '/images/managed_it_and_hardware.png',
    reverse: false
  },
  {
    id: 'audio-visual',
    title: 'Audio Visual Solutions',
    subtitle: 'Intelligent Collaboration Spaces',
    description: 'We design and implement audio visual environments that enhance communication, collaboration, and user experience.',
    features: ['Smart Classrooms & LED Walls', 'Video Conferencing & Boardrooms', 'Professional Audio & DSP'],
    img: '/images/digital_workspace.png',
    reverse: true
  }
];


