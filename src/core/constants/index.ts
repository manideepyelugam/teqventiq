import { 
  Service, 
  Industry, 
  Testimonial, 
  Partner,
  CategorizedPartner,
  Client,
  FivePillarItem,
  HealthcareContent
} from '../types';

export const COMPANY_INFO = {
  name: "TEQVENTIQ SERVICES PRIVATE LIMITED",
  shortName: "Teqventiq",
  tagline: "Where Technology Meets Business Intelligence",
  founded: "2026",
  email: "info@teqventiq.com",
  phone: "+91 98186 69400",
  phoneRaw: "+919818669400",
  whatsappUrl: "https://wa.me/919818669400",
  address: {
    line1: "24/9 & 24/10",
    line2: "MCIE, Mathura Road",
    area: "Badarpur (South Delhi)",
    cityStateZip: "South Delhi - 110044",
    full: "24/9 & 24/10, MCIE, Mathura Road, Badarpur (South Delhi), South Delhi - 110044"
  }
};

export const FIVE_PILLARS: FivePillarItem[] = [
  {
    id: "networking",
    title: "Networking",
    description: "Active and passive infrastructure that keeps every connection fast, secure, and always on.",
    tags: ["Active", "Passive", "Structured Cabling"]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Defence layered across endpoint, network, and identity, built for how threats actually move.",
    tags: ["NGFW", "XDR", "Zero Trust"]
  },
  {
    id: "data-ai",
    title: "Data & AI",
    description: "Turning scattered enterprise data into decisions, automation, and intelligence you can act on.",
    tags: ["Analytics", "AI/ML", "Automation"]
  },
  {
    id: "datacentre",
    title: "Datacentre",
    description: "Servers, storage, backup, and virtualization engineered for uptime, not just capacity.",
    tags: ["Servers", "Storage", "Backup & DR"]
  },
  {
    id: "managed-support",
    title: "Managed Support Services",
    description: "Day-to-day monitoring, maintenance, and support so your systems stay someone else's problem to worry about.",
    tags: ["Monitoring", "Helpdesk", "AMC"]
  }
];

export const ONE_PROMISE = {
  title: "One Promise",
  headline: "One partner. Every layer.",
  body: "We don't hand you off between five different vendors for five different problems. Teqventiq designs, deploys, and supports every layer of your technology stack — network to cloud to endpoint — under one roof, one point of contact, and one standard of accountability.\n\nThat's the difference between a vendor and a partner: a vendor solves the problem you called about. A partner notices the next one coming."
};

export const STATS = [
  { label: "Founded", value: "2026" },
  { label: "Support", value: "24/7" },
  { label: "Industries Served", value: "7+" },
  { label: "Projects", value: "200+" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Teqventiq Services has been a crucial partner in securing our digital infrastructure. Their expertise in cybersecurity and cloud ecosystems is unparalleled.",
    author: "Director of IT",
    role: "Govt & Public Sector",
    company: "Public Sector Enterprise",
    image: "/images/strategic_expertise_us_1777468846673.png"
  },
  {
    id: 2,
    quote: "The team at Teqventiq understands our unique operational realities. Their scalable IT and intelligent automation solutions have significantly improved our efficiency.",
    author: "CTO",
    role: "Corporate Enterprise",
    company: "Enterprise Client",
    image: "/images/mission_vision_us_1777468862412.png"
  },
  {
    id: 3,
    quote: "Transitioning to intelligent, automated ecosystems was seamless with Teqventiq. Their AI & RPA solutions delivered measurable efficiency for our operations.",
    author: "Head of Operations",
    role: "Retail & Ecommerce",
    company: "Retail Group",
    image: "/images/cybersecurity_hero_card_1777468690258.png"
  }
];

export const SERVICES: Service[] = [
  {
    slug: "networking",
    title: "Networking (Active / Passive)",
    description: "From structured cabling to enterprise-grade routing and switching, we design networks that don't buckle under growth — engineered for uptime, security, and room to scale.",
    icon: "Network",
    image: "/images/networking.png",
    heroHeadline: "The network is the business. Build it right.",
    heroSubhead: "From structured cabling to enterprise-grade routing and switching, we design networks that don't buckle under growth — engineered for uptime, security, and room to scale.",
    openingContext: "Every system your business runs on — email, ERP, POS, video, cloud apps, security cameras — depends on a network that was designed to carry it, not just connect it. Most network problems organizations experience aren't hardware failures; they're the result of infrastructure that was scaled up in pieces, patched together over years, and never re-architected for what the business actually became. We design networks the way they should be designed the first time: as a single system, not a collection of add-ons.",
    features: [
      "Enterprise Switching & Routing (Cisco, Aruba, Arista)",
      "High-Density Wireless Systems (Ruckus, Aruba)",
      "Structured Cabling Infrastructure (CommScope, Legrand, R&M)",
      "Fiber Optic Backbones & Site Audits (Molex, CommScope)",
      "SD-WAN Multi-Site Connectivity",
      "Network Segmentation & VLAN Security"
    ],
    valueProps: [
      {
        title: "OEM-Agnostic Design",
        description: "We carry no vendor allegiance. With hands-on expertise across Cisco, Aruba, Ruckus, and Arista, we specify what your environment actually needs — not the platform that pays us the best margin."
      },
      {
        title: "Both Layers, One Team",
        description: "The same engineers who terminate your passive cabling configure the active layer running on top of it. Nothing gets lost in the handoff between 'who ran the cable' and 'who configured the switch.'"
      },
      {
        title: "Designed for Headroom",
        description: "Every network we build accounts for three years of growth, not just today's device count — because re-architecting a network mid-business is far more disruptive than over-provisioning it upfront."
      },
      {
        title: "Documentation as Standard",
        description: "Every deployment ships with as-built diagrams, IP schemas, and configuration backups — so your team is never locked out of understanding your own network."
      }
    ],
    capabilities: [
      {
        category: "Active Networking",
        description: "The layer that makes traffic move — switching, routing, wireless, and policies. We design enterprise switching/routing (Cisco, Aruba, Arista), architect segmented networks with proper VLAN design, and roll out high-density enterprise wireless (Ruckus, Aruba). SD-WAN ties multi-site locations together with centralized policy."
      },
      {
        category: "Passive Networking",
        description: "The physical foundation everything else depends on. We design and install structured cabling (CommScope, Legrand, R&M) and fiber optic backbones (Molex, CommScope) to certified standards, build maintainable server room rack cabling, and run comprehensive site surveys."
      }
    ],
    deliverySteps: [
      { step: "01", title: "Assess", description: "Site survey, existing infrastructure audit, and requirements gathering across current and projected load." },
      { step: "02", title: "Design", description: "A network architecture (active + passive) sized for your environment and growth trajectory." },
      { step: "03", title: "Deploy", description: "Structured cabling, hardware installation, and configuration with minimal disruption to live operations." },
      { step: "04", title: "Validate", description: "Performance testing, certification, and complete documentation handover." },
      { step: "05", title: "Support", description: "Ongoing monitoring and optimization through Managed Support Services." }
    ],
    outcomes: [
      "Reduced downtime and network bottlenecks",
      "Faster, more reliable connectivity across sites",
      "Infrastructure that scales without a rebuild",
      "Lower long-term maintenance costs",
      "Simplified vendor management — one partner, not five"
    ],
    ctaText: "Get a Network Assessment →"
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "We design and operate security postures that protect the perimeter, the endpoint, and everything in between — grounded in real-world threat patterns, not checkbox compliance.",
    icon: "Shield",
    image: "/images/cyber_security_banner.png",
    heroHeadline: "Threats don't wait. Neither should your defences.",
    heroSubhead: "We design and operate security postures that protect the perimeter, the endpoint, and everything in between — grounded in real-world threat patterns, not checkbox compliance.",
    openingContext: "Cybersecurity has stopped being a single product decision and become a design discipline — the firewall, the endpoint agent, the identity policy, and the monitoring layer all have to work as one coherent system, or the gaps between them become exactly where an attacker gets in. We build security postures the way attackers think: end to end, not tool by tool.",
    features: [
      "Next-Generation Firewalls (NGFW - Fortinet, Palo Alto, Check Point)",
      "Endpoint Protection & XDR (CrowdStrike, Sophos)",
      "Zero Trust Access & Secure Web Gateways (Zscaler, Netskope)",
      "Identity & Access Management / PAM (Arcon, Saviynt)",
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "Brand Protection, Phishing Defense & DPDP Act Compliance"
    ],
    valueProps: [
      {
        title: "Risk-Outcome Driven",
        description: "Every recommendation is mapped to a business risk, not a technical spec sheet — so security investment stays proportionate and defensible to leadership."
      },
      {
        title: "Multi-OEM Independence",
        description: "Hands-on expertise across Fortinet, Palo Alto, Check Point, Zscaler, Netskope, CrowdStrike, Barracuda, F5, Imperva, Indusface, Forcepoint, Akamai, Arcon, and Saviynt."
      },
      {
        title: "Compliance as a Foundation",
        description: "DPDP Act alignment and industry-standard frameworks are factored into architecture from day one, so audit-readiness is a byproduct of good design."
      },
      {
        title: "End-to-End Coverage",
        description: "Endpoint, network, cloud, identity, and data — treated as one programme with one accountability model, not siloed tools."
      }
    ],
    capabilities: [
      {
        category: "Protect",
        description: "Next-gen firewalls (Fortinet, Palo Alto) enforce policy. Endpoint protection & XDR (CrowdStrike) isolate compromised devices in real time. Phishing defense stops entry points, and Zero Trust access (Zscaler, Netskope) continuously verifies identity."
      },
      {
        category: "Detect & Respond",
        description: "Threat detection & monitoring tuned to your environment, incident response support, and digital risk monitoring for external threats targeting your business."
      },
      {
        category: "Assess & Comply",
        description: "Vulnerability Assessment & Penetration Testing (VAPT), security audits, DPDP Act readiness assessments, and cyber maturity benchmarking."
      }
    ],
    deliverySteps: [
      { step: "01", title: "Discover & Assess", description: "Structured review of current posture, exposure, and existing controls against your environment." },
      { step: "02", title: "Architect & Design", description: "Security architecture built around Zero Trust principles, proportionate to your risk profile." },
      { step: "03", title: "Implement", description: "Hands-on deployment, configuration, and integration across chosen platforms." },
      { step: "04", title: "Validate", description: "VAPT, control testing, and validation to confirm defences hold under attack conditions." },
      { step: "05", title: "Operate & Improve", description: "Ongoing monitoring, patching, and periodic maturity reviews." }
    ],
    outcomes: [
      "Reduced exposure to breaches and downtime",
      "Regulatory and compliance readiness",
      "Faster detection and response to incidents",
      "Stronger identity and access controls",
      "Board-level visibility into security posture"
    ],
    ctaText: "Request a Security Assessment →"
  },
  {
    slug: "data-ai",
    title: "Data & AI",
    description: "We build the pipelines, platforms, and intelligence layers that turn scattered operational data into forecasts, automation, and answers your teams can act on immediately.",
    icon: "Cpu",
    image: "/images/ai_banner.png",
    platformPartner: "Quiler.AI",
    heroHeadline: "Turn data into your next decision — not your next backlog.",
    heroSubhead: "We build the pipelines, platforms, and intelligence layers that turn scattered operational data into forecasts, automation, and answers your teams can act on immediately.",
    openingContext: "Most organizations don't have a data shortage — they have a data-in-the-wrong-places problem. Sales data sits in one system, operations data in another, finance in a spreadsheet nobody else can access. Before AI or automation can add value, the underlying data has to be structured, connected, and trustworthy. We build that foundation first, then layer intelligence on top of it — in that order, deliberately, because AI built on disorganized data just automates the disorder faster.",
    features: [
      "AI / ML Solutions & Demand Forecasting",
      "GenAI & LLMs Enterprise Integration",
      "Conversational AI & AI Contact Centers",
      "Smart Analytics & Executive Dashboards",
      "RPA & Intelligent Process Automation",
      "Market Intelligence & Data Governance (Quiler.AI)"
    ],
    valueProps: [
      {
        title: "Outcome Over Output",
        description: "We build for the decision the data needs to support — a dashboard nobody acts on is a failed project, regardless of how clean it looks."
      },
      {
        title: "Automation Mapped to Reality",
        description: "Workflows are mapped to how your teams actually operate before writing scripts, so automation removes friction instead of creating new exceptions."
      },
      {
        title: "Right-Sized AI",
        description: "From a single predictive model to a fuller automation programme, scope is set to what will genuinely move your business forward."
      },
      {
        title: "Governed by Design",
        description: "Data governance and compliance are built into the pipeline from the start, so data access is deliberately managed."
      }
    ],
    capabilities: [
      {
        category: "Data Foundation",
        description: "Data engineering connecting fragmented systems into a coherent queryable structure, executive dashboards, data governance, and market intelligence models."
      },
      {
        category: "AI & Intelligent Automation",
        description: "Demand forecasting, anomaly detection, GenAI/LLM integration, conversational AI contact centers, RPA workflow automation, and enterprise process orchestration."
      }
    ],
    deliverySteps: [
      { step: "01", title: "Audit", description: "Map where data lives, how clean it is, and where operational friction occurs." },
      { step: "02", title: "Architect", description: "Design data pipeline and governance model to support the intelligence layer." },
      { step: "03", title: "Build", description: "Implement dashboards, models, or automation workflows against a defined outcome." },
      { step: "04", title: "Validate", description: "Test against real operational data before rollout, not synthetic examples." },
      { step: "05", title: "Scale", description: "Expand automation and intelligence coverage once the foundation is proven." }
    ],
    outcomes: [
      "Faster, evidence-based decision-making",
      "Reduced manual, repetitive work",
      "Improved forecasting accuracy",
      "Better customer experience through automation",
      "A single source of truth across teams"
    ],
    ctaText: "Explore What Your Data Can Do →"
  },
  {
    slug: "datacentre",
    title: "Datacentre",
    description: "From servers and storage to backup and virtualization, we design datacentre environments built for resilience first, capacity second.",
    icon: "Server",
    image: "/images/infra_and_cloud_banner.png",
    heroHeadline: "Infrastructure that doesn't go down when it matters most.",
    heroSubhead: "From servers and storage to backup and virtualization, we design datacentre environments built for resilience first, capacity second.",
    openingContext: "A datacentre environment is judged on the one day it's tested — a hardware failure, a ransomware event, a power outage — not the 364 days it runs quietly. Most infrastructure failures aren't about buying the wrong server; they're about backup, redundancy, and recovery planning that was treated as optional. We plan for that one bad day from the first design conversation, not after it happens.",
    features: [
      "Enterprise Servers & Storage (Dell, NetApp, HP)",
      "Backup & Disaster Recovery (Commvault, Veeam)",
      "Server Virtualization & Containerization (VMware)",
      "End-User Computing (Laptops, Desktops, Peripherals)",
      "Hyperconverged Infrastructure (HCI)",
      "Hardware Lifecycle Management & Refresh"
    ],
    valueProps: [
      {
        title: "Resilience by Design",
        description: "Backup and disaster recovery are planned alongside infrastructure, not added as an afterthought."
      },
      {
        title: "Right-Sized, Not Over-Sold",
        description: "Capacity planning based on actual growth trajectory and workload patterns — not the biggest configuration."
      },
      {
        title: "Vendor-Backed, Not Vendor-Locked",
        description: "Relationships with Dell, NetApp, HP, Commvault, Veeam, and VMware mean platform selection based on fit."
      },
      {
        title: "Full Lifecycle Ownership",
        description: "From procurement to deployment to eventual refresh, one partner manages hardware end to end."
      }
    ],
    capabilities: [
      {
        category: "Compute & Storage",
        description: "Enterprise servers and storage (Dell, NetApp, HP) sized to workload demand, with HCI options consolidating compute, storage, and virtualization."
      },
      {
        category: "Backup & Continuity",
        description: "Backup & DR on Commvault and Veeam designed against real recovery time objectives (RTO/RPO) and failover testing."
      },
      {
        category: "Virtualization & End-User Computing",
        description: "VMware server virtualization, workload consolidation, plus enterprise desktop, laptop, and office hardware deployment."
      }
    ],
    deliverySteps: [
      { step: "01", title: "Assess", description: "Current infrastructure audit, capacity analysis, and recovery-readiness review." },
      { step: "02", title: "Design", description: "Compute, storage, backup, and virtualization architecture matched to RTO/RPO targets." },
      { step: "03", title: "Deploy", description: "Procurement, installation, and configuration with minimal operational disruption." },
      { step: "04", title: "Test", description: "Recovery drills and failover testing before go-live." },
      { step: "05", title: "Maintain", description: "Lifecycle management and monitoring through Managed Support Services." }
    ],
    outcomes: [
      "Reduced risk of data loss and downtime",
      "Optimized infrastructure spend",
      "Faster recovery from failures or incidents",
      "Scalable capacity as business grows",
      "Simplified hardware lifecycle management"
    ],
    ctaText: "Talk to Us About Your Infrastructure →"
  },
  {
    slug: "managed-support",
    title: "Managed Support Services",
    description: "Proactive monitoring, maintenance, and support that keeps your technology running quietly in the background — so your team can focus on the business, not the ticket queue.",
    icon: "Headphones",
    image: "/images/managed_it_services.png",
    heroHeadline: "Your systems, someone else's 2 a.m. problem.",
    heroSubhead: "Proactive monitoring, maintenance, and support that keeps your technology running quietly in the background — so your team can focus on the business, not the ticket queue.",
    openingContext: "Most internal IT teams spend the majority of their time firefighting instead of improving anything — because nobody's watching the systems until something breaks. Managed support flips that: issues get caught in monitoring before they become a 9 a.m. crisis, and the people watching your systems are doing it as their full-time job, not as one more thing squeezed between everything else.",
    features: [
      "24/7 Remote Monitoring & Management (RMM)",
      "Managed IT Support Desk & Incident Escalation",
      "Comprehensive Annual Maintenance Contracts (AMC)",
      "Patch & Vulnerability Management",
      "Cloud Migration & Hybrid Cloud Cost Optimization",
      "IT Asset & Lifecycle Management"
    ],
    valueProps: [
      {
        title: "Proactive, Not Reactive",
        description: "Continuous monitoring catches degradation and anomalies before they become outages — most issues are resolved before anyone notices."
      },
      {
        title: "One AMC, Full Stack",
        description: "A single support agreement covers network, security, and infrastructure — not three separate vendor contracts."
      },
      {
        title: "Transparent Reporting",
        description: "You see the same uptime, ticket, and system-health data we do. No black box, no 'trust us.'"
      },
      {
        title: "Scales With You",
        description: "Support scope grows as your infrastructure does, without renegotiating from scratch every time."
      }
    ],
    capabilities: [
      {
        category: "Monitoring & Support Desk",
        description: "RMM across network, servers, and endpoints, backed by a responsive helpdesk, patch management, and infrastructure optimization."
      },
      {
        category: "Continuity & Lifecycle",
        description: "Actively maintained backup/DR monitoring, high-availability checks, and proactive IT asset lifecycle management."
      },
      {
        category: "Cloud & Migration",
        description: "Cloud migration support, hybrid cloud management, and continuous cloud cost optimization."
      }
    ],
    deliverySteps: [
      { step: "01", title: "Onboard", description: "Full infrastructure audit and documentation baseline before support begins." },
      { step: "02", title: "Monitor", description: "24/7 (or business-hours) monitoring across agreed scope." },
      { step: "03", title: "Maintain", description: "Scheduled patching, updates, and optimization on defined cadence." },
      { step: "04", title: "Respond", description: "Defined SLAs for issue triage, escalation, and resolution." },
      { step: "05", title: "Report", description: "Regular uptime and system-health reporting with periodic reviews." }
    ],
    outcomes: [
      "Reduced downtime and faster issue resolution",
      "Predictable IT support costs",
      "Less internal overhead on day-to-day IT",
      "Improved system reliability and uptime",
      "One number to call, regardless of the problem"
    ],
    ctaText: "Get a Support Plan →"
  }
];

export const INDUSTRIES: Industry[] = [
  {
    slug: "it-ites",
    title: "IT / ITES",
    description: "Infrastructure built to scale as fast as you hire. IT and ITES businesses live and die by uptime, security, and onboarding capacity.",
    image: "/images/strategic_expertise_us_1777468846673.png",
    details: "Powering technology and enabled services companies with scalable, agile, and high-performance infrastructure.",
    icon: "Laptop",
    headline: "Infrastructure built to scale as fast as you hire.",
    subhead: "IT and ITES businesses live and die by uptime, security, and the ability to onboard capacity overnight.",
    context: "IT and ITES operations run on a different clock than most industries — client SLAs measured in minutes, headcount that can double in a quarter, and infrastructure that has to be ready before new seats are filled. The organizations that struggle here aren't the ones without technology budgets; they're the ones whose infrastructure was built for the headcount they had a year ago.",
    challenges: [
      { title: "Scaling without lag", description: "Rapid headcount and seat growth that infrastructure needs to be provisioned ahead of, not behind." },
      { title: "Client-grade data security", description: "Especially for outsourced or BPO work, where client contracts mandate specific security and audit standards." },
      { title: "24/7 uptime across shifts", description: "Multi-shift, multi-geography operations that can't tolerate maintenance windows during business hours." },
      { title: "Multi-tenant separation", description: "Managing several client environments securely and separately without data cross-contamination." }
    ],
    howWeHelp: "Networking infrastructure designed for rapid seat provisioning; Cybersecurity built around client-contract compliance; Datacentre and backup architecture sized for 24/7 operations; Managed Support Services providing round-the-clock shift monitoring.",
    outcomes: [
      "Faster seat & workstation provisioning",
      "Client-grade data security",
      "Reduced downtime across shifts",
      "Simplified multi-environment management"
    ],
    features: ["Rapid Seat Provisioning", "Client Security Audits", "24/7 Multi-Shift Support", "Multi-Tenant Isolation"]
  },
  {
    slug: "bfsi",
    title: "BFSI (Banking, Financial Services & Insurance)",
    description: "Where security isn't a feature — it's the license to operate. Securing financial assets, transactions, and regulatory compliance.",
    image: "/images/bfsi_industry.jpg",
    details: "Securing financial assets, transactions, and regulatory compliance for modern banking institutions.",
    icon: "Landmark",
    headline: "Where security isn't a feature — it's the license to operate.",
    subhead: "Banking, financial services, and insurance run on trust and regulation in equal measure.",
    context: "In BFSI, a security gap isn't just an operational risk — it's a regulatory and reputational one, often simultaneously. Every technology decision has to satisfy two audiences at once: the customer who needs their transaction to go through instantly, and the regulator who needs to see it was handled correctly. We design for both from the start.",
    challenges: [
      { title: "Regulatory compliance & DPDP Act", description: "RBI/IRDAI-aligned practices and DPDP Act compliance built into architecture." },
      { title: "Zero tolerance for downtime", description: "Transaction systems where minutes of unavailability cause financial and reputational cost." },
      { title: "Protecting sensitive financial data", description: "Customer financial records that require layered, continuously verified protection." },
      { title: "Legacy modernization without disruption", description: "Core systems that can't simply be switched off for upgrade windows." }
    ],
    howWeHelp: "Cybersecurity architecture designed around regulatory frameworks from day one; Datacentre infrastructure with high availability and disaster recovery; Data & AI for fraud pattern detection; Managed Support Services for continuous transaction system monitoring.",
    outcomes: [
      "Regulatory and audit readiness",
      "Reduced fraud and breach exposure",
      "High-availability transaction systems",
      "Safer, faster digital transformation"
    ],
    features: ["DPDP Act & Regulatory Alignment", "High-Availability Datacentre", "Real-Time Fraud Pattern Detection", "Zero-Downtime Core Modernization"]
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Keep the plant floor running, and the data flowing. Blending IT and operational technology under one secure roof.",
    image: "/images/cybersecurity_hero_card_1777468690258.png",
    details: "Driving smart factory automation, industrial OT security, supply chain efficiency, and ERP integration.",
    icon: "Factory",
    headline: "Keep the plant floor running, and the data flowing.",
    subhead: "Manufacturing environments blend IT and operational technology under one roof.",
    context: "Manufacturing has a problem most industries don't: the systems keeping the plant floor running (OT) and the systems keeping the business running (IT) were historically built separately — and now they need to talk to each other for efficiency gains, which is exactly where new security gaps open up. We connect them without creating new vulnerabilities.",
    challenges: [
      { title: "Secure OT/IT convergence", description: "Connecting plant-floor systems with enterprise IT without exposing OT to IT-side threats." },
      { title: "Legacy machinery security gaps", description: "Older industrial equipment never designed with network security in mind." },
      { title: "Supply chain visibility", description: "Fragmented data across procurement, production, and logistics." },
      { title: "Minimizing production downtime", description: "IT/network failures on the plant floor cause direct, measurable production costs." }
    ],
    howWeHelp: "Networking infrastructure that segments OT from IT properly; Cybersecurity designed around industrial realities; Datacentre and backup systems sized for production-critical uptime; Data & AI for supply chain forecasting and predictive maintenance.",
    outcomes: [
      "Reduced unplanned downtime",
      "Better production and supply chain visibility",
      "Secured OT/IT convergence",
      "Predictive maintenance readiness"
    ],
    features: ["Industrial OT/IT Segmentation", "Plant-Floor Network Security", "Supply Chain Data Integration", "Predictive Maintenance Modeling"]
  },
  {
    slug: "food-industry",
    title: "Food Industry",
    description: "Technology that keeps up with a business that never stops moving. Reliable multi-site infrastructure for plants, warehouses, and POS.",
    image: "/images/mission.png",
    details: "Enabling food processors, cloud kitchens, and distribution networks with dependable tech and analytics.",
    icon: "Utensils",
    headline: "Technology that keeps up with a business that never stops moving.",
    subhead: "From processing plants to distribution to point of sale, food businesses need infrastructure as reliable as their supply chain.",
    context: "Food businesses run on thin margins and tight timelines — a POS outage during peak hours or a distribution visibility gap doesn't just cost time, it costs product. Infrastructure here needs to be as dependable as the cold chain itself.",
    challenges: [
      { title: "Multi-location connectivity", description: "Reliable networking across processing plants, warehouses, distribution centers, and POS locations." },
      { title: "Supply chain & inventory visibility", description: "Real-time data on stock, spoilage risk, and distribution status across sites." },
      { title: "Food safety & compliance data", description: "Traceability data that needs to be accurate, accessible, and audit-ready." },
      { title: "POS and network reliability at scale", description: "Systems that cannot afford downtime during peak trading hours." }
    ],
    howWeHelp: "Networking for reliable multi-site connectivity between plants, warehouses, and retail; Datacentre infrastructure for inventory and supply chain systems; Data & AI for real-time inventory visibility and demand forecasting; Managed Support Services to keep POS uptime high.",
    outcomes: [
      "Reliable multi-site connectivity",
      "Real-time inventory and supply chain insight",
      "Simplified compliance documentation",
      "Reduced POS and network downtime"
    ],
    features: ["Multi-Site Network Backbone", "Real-Time Inventory Forecasting", "Traceability & Safety Data", "Peak-Hour POS Uptime Guarantee"]
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description: "Smarter buildings start with smarter infrastructure. Connecting sales offices, smart buildings, and multi-site portfolios.",
    image: "/images/vision.png",
    details: "Connecting sales offices, smart buildings, surveillance, and multi-site real estate portfolios.",
    icon: "Building",
    headline: "Smarter buildings start with smarter infrastructure.",
    subhead: "From sales offices to smart buildings to multi-site portfolios, we connect and secure every property in the network.",
    context: "Real estate technology needs span two very different worlds: the sales and CRM side managing leads and transactions, and the physical building side managing surveillance, access, and smart-building systems. Both need to be reliable, and both need to scale as the portfolio grows.",
    challenges: [
      { title: "Multi-site connectivity", description: "Reliable networking across sales offices, project sites, and completed properties." },
      { title: "Surveillance and access control", description: "Centralized security across buildings and sites, not separate siloed systems." },
      { title: "CRM & sales data management", description: "Lead and transaction data visible and reportable across multiple ongoing projects." },
      { title: "Smart building integration", description: "IoT and building-management systems networked securely as adoption grows." }
    ],
    howWeHelp: "Networking connecting every site into one managed infrastructure; Physical security & surveillance for centralized monitoring; Data & AI for sales pipeline visibility; Managed Support Services for infrastructure scaling.",
    outcomes: [
      "Secure, connected multi-site operations",
      "Centralized surveillance and access control",
      "Better sales and lead data visibility",
      "Scalable infrastructure as portfolios grow"
    ],
    features: ["Portfolio-Wide Site Networking", "Centralized Access & CCTV", "Real Estate CRM Integration", "Smart Building IoT Security"]
  },
  {
    slug: "education",
    title: "Education",
    description: "Secure campuses. Connected classrooms. Protected data. Campus Wi-Fi, student privacy, and hybrid learning infrastructure.",
    image: "/images/education_industry.jpg",
    details: "Connecting and protecting campuses, classrooms, student data, and digital learning environments.",
    icon: "GraduationCap",
    headline: "Secure campuses. Connected classrooms. Protected data.",
    subhead: "Educational institutions manage sensitive student data, distributed campuses, and always-on connectivity demands.",
    context: "Education technology has to satisfy competing pressures: budgets that rarely match ambitions of a modern digital campus, connectivity demands from thousands of concurrent devices, and student data protection obligations. We design within those constraints, not around them.",
    challenges: [
      { title: "Campus-wide reliable connectivity", description: "Wi-Fi coverage holding up under high device density across classrooms and hostels." },
      { title: "Student & staff data protection", description: "Privacy compliance for sensitive personal and academic data." },
      { title: "Budget-conscious planning", description: "Getting enterprise reliability without an enterprise IT budget." },
      { title: "Hybrid & digital learning support", description: "Infrastructure supporting in-person and digital teaching models without duplication." }
    ],
    howWeHelp: "Networking for high-density campus Wi-Fi; Cybersecurity for student data protection; Managed Support Services for reliable day-to-day operation; Datacentre infrastructure sized appropriately for institutional budgets.",
    outcomes: [
      "Reliable campus-wide connectivity",
      "Protected student and institutional data",
      "Lower total cost of IT ownership",
      "Infrastructure ready for digital learning"
    ],
    features: ["High-Density Campus Wi-Fi", "Student Privacy Compliance", "Budget-Optimized Datacentre", "Hybrid Classroom AV & Network"]
  },
  {
    slug: "psu-government",
    title: "PSU & Government Sector",
    description: "Public infrastructure. Private-sector discipline. Compliant, documented, and resilient public technology deployments.",
    image: "/images/govt_public_sector_industry_new_1777473095832.png",
    details: "Empowering public sector organizations with secure, resilient, and compliant technology ecosystems.",
    icon: "Building2",
    headline: "Public infrastructure. Private-sector discipline.",
    subhead: "Government and public sector organizations need technology partners who understand procurement rigor and public accountability.",
    context: "Public sector technology projects carry a different kind of scrutiny — every deployment needs to be compliant, documented, and defensible, because it's ultimately accountable to the public it serves. We bring private-sector delivery discipline to that standard.",
    challenges: [
      { title: "Government IT standards compliance", description: "Deployments satisfying defined government IT and data protection frameworks." },
      { title: "Legacy infrastructure modernization", description: "Updating aging systems without disrupting public-facing services during transition." },
      { title: "Citizen & public data security", description: "Data carrying a higher standard of protection given public accountability." },
      { title: "Transparent, audit-ready delivery", description: "Procurement and project delivery withstanding scrutiny at every stage." }
    ],
    howWeHelp: "Networking and Cybersecurity built to satisfy compliance frameworks from the outset; Datacentre infrastructure for modernizing legacy systems without downtime; Managed Support Services providing transparent, auditable reporting.",
    outcomes: [
      "Compliance-ready technology deployments",
      "Modernized, secure infrastructure",
      "Protected citizen and institutional data",
      "Transparent, auditable delivery process"
    ],
    features: ["Government Compliance Frameworks", "Zero-Downtime Migration", "Public Data Protection & Zero Trust", "Auditable Lifecycle Delivery"]
  }
];

export const CATEGORIZED_PARTNERS: CategorizedPartner[] = [
  {
    category: "Networking — Active",
    partners: [
      { id: 1, name: 'Cisco', domain: 'cisco.com' },
      { id: 2, name: 'Aruba', domain: 'arubanetworks.com' },
      { id: 3, name: 'Ruckus', domain: 'commscope.com' },
      { id: 4, name: 'Arista', domain: 'arista.com' }
    ]
  },
  {
    category: "Networking — Passive",
    partners: [
      { id: 5, name: 'CommScope', domain: 'commscope.com' },
      { id: 6, name: 'Molex', domain: 'molex.com' },
      { id: 7, name: 'R&M', domain: 'rdm.com' },
      { id: 8, name: 'Legrand', domain: 'legrand.com' }
    ]
  },
  {
    category: "Cybersecurity",
    partners: [
      { id: 9, name: 'Fortinet', domain: 'fortinet.com' },
      { id: 10, name: 'Palo Alto Networks', domain: 'paloaltonetworks.com' },
      { id: 11, name: 'Arcon', domain: 'arconnet.com' },
      { id: 12, name: 'Saviynt', domain: 'saviynt.com' },
      { id: 13, name: 'Akamai', domain: 'akamai.com' },
      { id: 14, name: 'CrowdStrike', domain: 'crowdstrike.com' },
      { id: 15, name: 'Check Point', domain: 'checkpoint.com' },
      { id: 16, name: 'Zscaler', domain: 'zscaler.com' },
      { id: 17, name: 'Netskope', domain: 'netskope.com' },
      { id: 18, name: 'Barracuda', domain: 'barracuda.com' },
      { id: 19, name: 'F5', domain: 'f5.com' },
      { id: 20, name: 'Imperva', domain: 'imperva.com' },
      { id: 21, name: 'Indusface', domain: 'indusface.com' },
      { id: 22, name: 'Forcepoint', domain: 'forcepoint.com' }
    ]
  },
  {
    category: "Datacentre (Compute, Storage & DR)",
    partners: [
      { id: 23, name: 'Dell Technologies', domain: 'dell.com' },
      { id: 24, name: 'NetApp', domain: 'netapp.com' },
      { id: 25, name: 'HP', domain: 'hp.com' },
      { id: 26, name: 'Commvault', domain: 'commvault.com' },
      { id: 27, name: 'Veeam', domain: 'veeam.com' },
      { id: 28, name: 'VMware', domain: 'vmware.com' }
    ]
  },
  {
    category: "Data & AI",
    partners: [
      { id: 29, name: 'Quiler.AI', domain: 'quiler.ai' }
    ]
  },
  {
    category: "Hardware & End-User Computing",
    partners: [
      { id: 30, name: 'Dell', domain: 'dell.com' },
      { id: 31, name: 'HP', domain: 'hp.com' },
      { id: 32, name: 'Lenovo', domain: 'lenovo.com' },
      { id: 33, name: 'Samsung', domain: 'samsung.com' }
    ]
  }
];

export const PARTNERS: Partner[] = CATEGORIZED_PARTNERS.flatMap(cat => cat.partners);

export const CLIENTS_BY_VERTICAL = [
  { vertical: "IT / ITES", clients: [{ name: "Technology Enterprise Partner", domain: "tech.com" }, { name: "Global Services Center", domain: "global.com" }] },
  { vertical: "BFSI", clients: [{ name: "National Financial Institution", domain: "bank.com" }, { name: "Enterprise Insurance Group", domain: "insurance.com" }] },
  { vertical: "Manufacturing", clients: [{ name: "Industrial Manufacturing Ltd.", domain: "industry.com" }, { name: "Auto Systems Group", domain: "autosys.com" }] },
  { vertical: "Food Industry", clients: [{ name: "Food Processing Corp.", domain: "foodcorp.com" }, { name: "FMCG Distribution Network", domain: "fmcg.com" }] },
  { vertical: "Real Estate", clients: [{ name: "Commercial Property Group", domain: "realty.com" }, { name: "Smart Infra Developers", domain: "smartinfra.com" }] },
  { vertical: "Education", clients: [{ name: "Leading Technological University", domain: "univ.edu" }, { name: "International Campus Group", domain: "campus.edu" }] },
  { vertical: "PSU & Government Sector", clients: [{ name: "Public Sector Enterprise", domain: "gov.in" }, { name: "National Utilities Board", domain: "psu.in" }] }
];

export const CLIENTS: Client[] = CLIENTS_BY_VERTICAL.flatMap(v => v.clients);

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
    text: "To help organizations leverage technology, automation, and intelligence to drive growth, improve efficiency, and strengthen decision making — delivering dependable solutions across cybersecurity, cloud, data, applications, hardware, and digital environments.",
    text1: "We deliver dependable solutions across cybersecurity, cloud, data, applications, hardware, and digital environments, ensuring our clients remain secure, agile, and future ready.",
    button: "Read More",
    img: "/images/mission.png",
    icon: "Flag"
  },
  {
    title: "Our Vision",
    text: "To become a trusted technology and business intelligence partner, helping organizations navigate digital transformation with confidence through secure, intelligent, and scalable solutions that support long-term growth.",
    text1: "Through secure, intelligent, and scalable solutions that support long term growth, we empower enterprises to thrive in a digital-first world.",
    button: "Read More",
    img: "/images/vision.png",
    icon: "Eye"
  }
];

export const SOLUTIONS_ECOSYSTEM_ITEMS = SERVICES.map((s, idx) => ({
  id: s.slug,
  title: s.title,
  subtitle: s.heroHeadline || s.title,
  description: s.description,
  features: s.features.slice(0, 3),
  img: s.image,
  reverse: idx % 2 !== 0
}));

export const HEALTHCARE_CONTENT: HealthcareContent = {
  slug: "healthcare",
  title: "Healthcare Technology & Security",
  subtitle: "Empowering Healthcare Organizations with Secure & Scalable IT",
  tagline: "Safeguarding patient data, clinical systems & hospital infrastructure",
  badges: [
    "Patient Data Security — Compliance focus",
    "24/7 Clinical Uptime — Zero-downtime infrastructure"
  ],
  whoWeAre: {
    title: "Who We Are",
    text: [
      "Teqventiq Services Private Limited designs and delivers secure, scalable, and high-performance IT ecosystems purpose-built for healthcare.",
      "We partner with healthcare groups to modernize clinical technology without compromising data security or uptime."
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
      description: "Encryption, Zero Trust access, and compliance frameworks to protect medical records.",
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
    }
  ],
  offeringsFooter: "Build a resilient IT foundation for your healthcare organization with Teqventiq.",
  details: [],
  focusTitle: "Why Choose Teqventiq for Healthcare",
  focusIntro: "Our domain expertise ensures seamless integration with clinical workflows.",
  focusAreas: [
    { name: "Compliance & Audit Readiness", icon: "CheckCircle" },
    { name: "Proactive Managed Support", icon: "Headphones" }
  ],
  focusFooter: "Empowering healthcare providers to focus on patient care.",
  whyChooseUs: [
    {
      title: "Domain Expertise",
      description: "Deep understanding of hospital operations, clinical workflows, and data protection requirements."
    }
  ],
  cta: {
    title: "Connect With Us",
    subtitle: "Empowering Growth Through Technology, Intelligence & Innovation",
    company: "TEQVENTIQ SERVICES PRIVATE LIMITED",
    address: "24/9 & 24/10, MCIE, Mathura Road, Badarpur (South Delhi), South Delhi - 110044",
    website: "https://teqventiq.com",
    phone: "+91 98186 69400",
    steps: [
      { number: "01", title: "Consultation", description: "Schedule a discussion with our technical team." },
      { number: "02", title: "Assessment", description: "Receive a tailored assessment of your IT landscape." },
      { number: "03", title: "Execution", description: "Deploy secure, scalable, and high-performance solutions." }
    ]
  }
};
