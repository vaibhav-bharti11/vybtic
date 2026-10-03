export const productsData = [
  {
    id: 'cop-ai',
    name: 'Cop AI',
    tagline: 'Autonomous Field Intelligence & Public Safety Copilot',
    badge: 'Public Safety AI',
    icon: 'solar:shield-user-bold-duotone',
    image: '/assets/products/cop-ai.jpg',
    description: 'An air-gapped, voice-enabled sovereign tactical assistant designed for law enforcement officers, control room dispatchers, and first responders.',
    problemSolved: 'First responders and command centers suffer from high cognitive load, delayed evidence compilation, fragmented incident logs, and reliance on vulnerable commercial cloud assistants.',
    features: [
      'Sub-second real-time video and audio incident triage',
      'Voice-to-action dispatch & automated situational logging',
      'Standardized automated case report & dossier synthesis',
      'Tamper-proof, cryptographic evidentiary chain of custody',
      '100% air-gapped on-premise/edge device operation'
    ],
    differentiators: [
      'Zero third-party cloud data transmission or leakage',
      'Domain-adapted for Indian penal & procedural frameworks (BNS, BNSS, BSA)',
      'Ultra-low-latency on edge hardware (NVIDIA Jetson/x86/ARM)',
      'Interoperable with legacy CAD and police dispatch ecosystems'
    ],
    targetCustomers: [
      'State & Federal Police Departments',
      'Border & Perimeter Security Forces',
      'Smart City Integrated Command & Control Centers (ICCC)',
      'Critical Infrastructure Security Operations Centers (SOC)'
    ],
    useCases: [
      'Real-time suspect lookups and field tactical briefings',
      'Automated first information and incident summary reporting',
      'Live control room audio stream transcription and SOP prompting',
      'Cross-jurisdictional evidence package generation'
    ],
    benefits: [
      'Reduces officer report paperwork time by up to 75%',
      'Eliminates cross-border cloud security compliance risks',
      'Accelerates emergency dispatch response time by 4x',
      'Improves evidential court-readiness with cryptographic hashing'
    ],
    deploymentModel: 'Edge Appliance / Air-Gapped On-Premises Server / Sovereign Police Intranet',
    status: 'Pitch & Enterprise Trials Ready'
  },
  {
    id: 'video-forensics',
    name: 'Video Forensics',
    tagline: 'High-Precision Sub-Second Multi-Camera Forensic Search',
    badge: 'Forensic Vision',
    icon: 'solar:videocamera-record-bold-duotone',
    image: '/assets/products/video-forensics.jpg',
    description: 'Post-event video intelligence platform capable of indexing petabytes of video streams and conducting sub-second multi-attribute searches.',
    problemSolved: 'Investigating crimes and incidents across thousands of CCTV feeds traditionally takes hundreds of human hours, leading to cold trails and missed evidence.',
    features: [
      'Sub-second query across millions of indexed surveillance frames',
      'Cross-camera Person Re-Identification (Re-ID) & path trajectory mapping',
      'Vehicle attribute recognition: make, model, color, license plate (ANPR)',
      'Facial recognition with occluded & low-light neural restoration',
      'Immutable audit logs with courtroom-ready time-stamped exports'
    ],
    differentiators: [
      'Patented vector compression reducing storage overhead by 65%',
      'Operates seamlessly on existing legacy analog and IP camera feeds',
      'Air-gapped compute guarantees sensitive forensic data never leaves premises',
      'Cryptographic watermark on every exported video clip'
    ],
    targetCustomers: [
      'Criminal Investigation Departments (CID) & Forensics Labs',
      'Homeland Security & Defense Agencies',
      'Airport, Metro, & Railway Transport Authorities',
      'High-Risk Enterprise Facilities & Data Centers'
    ],
    useCases: [
      'Instant tracking of suspects across multi-kilometer municipal networks',
      'Hit-and-run and vehicle theft route reconstruction',
      'Missing person recovery in crowded public spaces',
      'Forensic validation of security breaches in restricted zones'
    ],
    benefits: [
      'Cuts video review investigation duration from days to under 5 minutes',
      'Maintains 99.4% precision even on low-resolution 720p streams',
      'Zero recurring cloud ingestion fees through local edge indexing',
      'Full legal defensibility under digital evidence statutes'
    ],
    deploymentModel: 'On-Premise GPU Cluster / Central Sovereign Forensics Hub / Hybrid Gov Cloud',
    status: 'Production & Active Pitching'
  },
  {
    id: 'video-prevention',
    name: 'Video Prevention & Threat Detection',
    tagline: 'Proactive Situational Awareness & Pre-Incident Anomaly Alerts',
    badge: 'Proactive Defense',
    icon: 'solar:shield-warning-bold-duotone',
    image: '/assets/products/video-prevention.jpg',
    description: 'Autonomous edge-vision neural pipeline that detects anomalies, intrusions, perimeter breaches, and safety threats before incidents escalate.',
    problemSolved: 'Traditional CCTV monitoring is passive and reactive. Security operators miss 95% of screen activity after 20 minutes of continuous monitoring.',
    features: [
      'Pre-incident anomaly detection (unattended baggage, loitering, perimeter crossing)',
      'Crowd surge, panic movement, and abnormal density spike alerts',
      'Weapon, sharp object, and hazardous smoke/fire recognition',
      'Virtual tripwires and dynamic exclusion zone monitoring',
      'Instant multi-channel notifications (SMS, Radio, Control Console, WhatsApp)'
    ],
    differentiators: [
      'Sub-50 millisecond edge inference latency',
      'Adaptive false-alarm suppression using multi-frame temporal reasoning',
      'Zero dependency on external internet connection for critical alarm triggering',
      'Hardware-agnostic deployment on cameras, NVRs, and edge servers'
    ],
    targetCustomers: [
      'Defense Installations & Ammunition Depots',
      'Oil Refineries, Power Plants, & Critical Utilities',
      'Religious Gathering Sites, Stadiums, & Public Venues',
      'Manufacturing Plants & Hazardous Work Environments'
    ],
    useCases: [
      'Perimeter intrusion warning along military and industrial boundaries',
      'Stampede prevention in mass religious and civic gatherings',
      'Unauthorized access alert in restricted server rooms & vaults',
      'Real-time industrial PPE compliance and fall hazard alerts'
    ],
    benefits: [
      'Transforms passive cameras into an active 24/7 intelligent perimeter guard',
      'Reduces false alarms by over 88% compared to standard motion sensors',
      'Prevents loss of life and equipment damage through pre-emptive alerting',
      'Enables single operators to monitor up to 500 camera feeds effortlessly'
    ],
    deploymentModel: 'Edge Box Appliance / Embedded Camera NPU / On-Premise NVR Stack',
    status: 'Market Ready & Partner Empanelment Open'
  },
  {
    id: 'video-analytics',
    name: 'Video Analytics',
    tagline: 'Enterprise Spatial Intelligence & Operational Optimization',
    badge: 'Operational AI',
    icon: 'solar:chart-square-bold-duotone',
    image: '/assets/products/video-analytics.jpg',
    description: 'High-throughput computer vision engine delivering spatial analytics, crowd dynamics, dwell times, and operational metrics for modern enterprises.',
    problemSolved: 'Enterprises lack granular visibility into physical space utilization, customer footfall flows, queue bottlenecks, and facility efficiency.',
    features: [
      'Dynamic heatmapping and spatial footfall journey tracking',
      'Automated queue length detection and average wait time calculation',
      'Demographic distribution, gender/age estimation, and sentiment signals',
      'Vehicle dwell time and parking bay turnover metrics',
      'Real-time enterprise dashboard with automated weekly KPI reports'
    ],
    differentiators: [
      'Privacy-preserving architecture: automated face & license plate blurring at source',
      'Edge compute extracts lightweight metadata without streaming heavy video feeds',
      'Seamless REST API and Webhook integration with ERPs and BI tools',
      'Customizable trigger thresholds and business rule logic'
    ],
    targetCustomers: [
      'Retail Chains, Supermarkets, & Shopping Malls',
      'Airports, Metro Stations, & Transit Hubs',
      'Smart Commercial Real Estate & Corporate Campuses',
      'Hospitality, Banking Branches, & Theme Parks'
    ],
    useCases: [
      'Optimizing retail floor layouts and high-converting product placements',
      'Automated cashier station scaling based on live queue depth',
      'Airport gate congestion management and passenger flow balancing',
      'Corporate desk and conference room occupancy optimization'
    ],
    benefits: [
      'Boosts operational staff efficiency by 30% through predictive scheduling',
      'Increases retail conversion rates by 15-22% with flow analytics',
      '100% compliant with global privacy laws via irreversible edge anonymization',
      'Scales to thousands of locations with unified cloud or on-prem telemetry'
    ],
    deploymentModel: 'Edge Micro-Servers / On-Premise Hybrid / Private Sovereign Cloud',
    status: 'Live & Scaling'
  },
  {
    id: 'clm',
    name: 'CLM — Contract Lifecycle Management',
    tagline: 'Autonomous Sovereign Contract Governance & Risk Extraction',
    badge: 'Legal & Governance',
    icon: 'solar:document-medicine-bold-duotone',
    image: '/assets/products/clm.jpg',
    description: 'AI-driven contract management ecosystem providing automated clause extraction, risk profiling, SLA tracking, and statutory compliance.',
    problemSolved: 'Manual contract reviews are slow, prone to costly human oversight, susceptible to regulatory non-compliance, and vulnerable to confidentiality breaches on public AI tools.',
    features: [
      'Automated clause identification, deviation analysis, and risk scoring',
      'Multi-party redlining with AI-suggested defensible compromise clauses',
      'Milestone, SLA, penalty, and renewal expiration automated tracking',
      'Sovereign on-premise LLM fine-tuned on corporate and procurement law',
      'Role-based granular permissions with immutable cryptographic audit trail'
    ],
    differentiators: [
      'Zero exposure to commercial cloud LLMs (100% data sovereign)',
      'Pre-loaded with Indian standard procurement, GFR, and enterprise legal templates',
      'Bi-directional synchronization with ERP (SAP, Oracle) and finance systems',
      'Automated DPDP and cross-border vendor risk assessment'
    ],
    targetCustomers: [
      'Corporate Legal Departments & General Counsels',
      'Government Procurement & Tender Execution Bodies',
      'BFSI, Telecom, & Energy Infrastructure Conglomerates',
      'Supply Chain & Heavy Manufacturing Enterprises'
    ],
    useCases: [
      'High-volume vendor and supplier agreement vetting in minutes',
      'Government RFP/Tender contract compliance verification',
      'Automated post-signature milestone tracking and SLA penalty calculation',
      'Corporate M&A due diligence contract repository indexing'
    ],
    benefits: [
      'Shortens contract cycle time from weeks to under 48 hours',
      'Eliminates missed renewals and uncollected SLA penalty revenues',
      'Protects confidential business trade secrets with sovereign LLM inference',
      'Reduces legal external counsel expenditure by over 60%'
    ],
    deploymentModel: 'Air-Gapped Corporate Server / Private Enterprise Cloud / Dedicated Appliance',
    status: 'Enterprise Pitching & Integration Ready'
  },
  {
    id: 'dpdp-shield',
    name: 'DPDP Shield',
    tagline: "India's Digital Personal Data Protection Act 2023 Compliance Engine",
    badge: 'Statutory Shield',
    icon: 'solar:shield-check-bold-duotone',
    image: '/assets/products/dpdp-shield.jpg',
    description: 'Comprehensive compliance and privacy automation platform engineered specifically for the Digital Personal Data Protection Act (DPDP Act 2023).',
    problemSolved: 'The DPDP Act 2023 imposes statutory penalties up to ₹250 Crores per breach. Companies struggle with manual consent tracking, data mapping, and Data Principal requests.',
    features: [
      'Dynamic multi-lingual Consent Management System (CMS) with verifiable receipts',
      'Automated Data Principal Request (DPR) fulfillment portal (access, erase, correct)',
      'Automated PII discovery, classification, and cryptographic tokenization',
      'Statutory Data Breach notification workflow with forensic impact reports',
      'Immutable compliance audit logging formatted for Data Protection Board (DPB)'
    ],
    differentiators: [
      'Purpose-built specifically for the Indian DPDP statutory mandate & rules',
      'Plug-and-play SDKs for Web, Android, iOS, and legacy database architectures',
      'Zero data custody: operates on customer infrastructure with no external telemetry',
      'Built-in localized notice generators across all 22 scheduled languages'
    ],
    targetCustomers: [
      'Banks, NBFCs, FinTechs, & Insurance Companies',
      'Healthcare Providers, Telehealth, & Diagnostics Networks',
      'E-Commerce, EdTech, & Consumer Platforms',
      'Public Sector Undertakings (PSUs) & Government Agencies'
    ],
    useCases: [
      'Turnkey consent collection on customer on-boarding and mobile apps',
      'Automated execution of Right to Erasure requests across distributed SQL/NoSQL databases',
      'Legacy database scanning to tokenize sensitive personal identifiers',
      'Readiness reporting and risk audits for corporate board compliance committees'
    ],
    benefits: [
      'Shields enterprise from devastating statutory fines (up to ₹250 Crores)',
      'Automates 90% of Data Principal privacy operations without adding headcount',
      'Establishes immediate consumer trust and brand credibility',
      'Deploys in days with non-intrusive proxy and microservice architecture'
    ],
    deploymentModel: 'On-Premise Container Cluster / Customer VPC / Sovereign Cloud',
    status: 'Active Deployment & Market Certification Ready'
  },
  {
    id: 'hrms',
    name: 'HRMS — Sovereign Human Resource Suite',
    tagline: 'High-Security Workforce Governance, Payroll & Biometric Operations',
    badge: 'Enterprise Operations',
    icon: 'solar:users-group-rounded-bold-duotone',
    image: '/assets/products/hrms.jpg',
    description: 'An enterprise-grade human resource management system tailored for defense organizations, high-security infrastructure, and compliance-first enterprises.',
    problemSolved: 'High-security institutions cannot risk hosting sensitive employee personnel files, payroll structures, biometric credentials, and clearance levels on commercial SaaS clouds.',
    features: [
      'Sovereign on-premise biometric attendance synchronization with edge vision',
      'Statutory payroll engine with automated tax, provident fund, and gratuity calculations',
      'Clearance-level access control & sensitive document compartmentalization',
      'Performance evaluation, OKR tracking, and shift roster optimization',
      'Self-service employee mobile portal with encrypted biometric authentication'
    ],
    differentiators: [
      'Air-gapped database deployment prevents employee data leaks to third-party clouds',
      'Direct integration with Vyntiq edge cameras for frictionless biometric clock-ins',
      'Compliant with Indian labour codes, defense security protocols, and DPDP rules',
      'Granular audit trails for every salary, promotion, and file modification'
    ],
    targetCustomers: [
      'Defense Laboratories & Strategic Manufacturing Units',
      'Public Sector Enterprises (PSUs) & Government Departments',
      'High-Security IT & Data Center Campuses',
      'Hospitals, Pharmaceuticals, & Heavy Industrial Facilities'
    ],
    useCases: [
      'Touchless biometric check-in for thousands of staff at security gates',
      'Confidential executive and strategic personnel payroll processing',
      'Contract worker verification and statutory compliance tracking',
      'Shift planning and automated overtime calculation in 24/7 control rooms'
    ],
    benefits: [
      '100% protection of sensitive defense & corporate personnel intelligence',
      'Eliminates ghost worker payroll leakages through biometric validation',
      'Reduces monthly payroll cycle execution from 5 days to 2 hours',
      'Seamless single pane of glass from guard gate to corporate ledger'
    ],
    deploymentModel: 'Air-Gapped On-Premises Server / Dedicated Local Appliance / Sovereign Intranet',
    status: 'Production Ready'
  },
  {
    id: 'upcoming-solutions',
    name: 'Upcoming Vyntiq Technology Solutions',
    tagline: 'Next-Gen Edge Vision Boxes & Sovereign Intelligence Gateways',
    badge: 'R&D Pipeline',
    icon: 'solar:atom-bold-duotone',
    image: '/assets/products/upcoming-solutions.jpg',
    description: 'Vyntiq Sovereign Labs is continuously expanding our sovereign hardware and software architectures to pioneer next-generation sovereign computing.',
    problemSolved: 'Organizations seeking sovereign AI face hardware fragmentation, complex model deployments, and high hardware barriers.',
    features: [
      'Vyntiq EdgeBox-4K: Turnkey plug-and-play AI appliance for legacy CCTV racks',
      'Sovereign LLM Gateway: Air-gapped enterprise proxy with local hallucination filtering',
      'Autonomous Drone Video Stream Forensics Engine for border surveillance',
      'Edge Acoustic Threat Classifier for industrial and security perimeter alerts'
    ],
    differentiators: [
      'Built specifically for zero-trust environments',
      'Engineered in-house with sovereign hardware-software co-design',
      'Turnkey firmware updates with cryptographic hardware signature verification'
    ],
    targetCustomers: [
      'Government Smart Infrastructure Initiatives',
      'Defense System Integrators & Hardware OEMs',
      'Critical Utility Operators & Sovereign Data Centers'
    ],
    useCases: [
      'Drop-in intelligence upgrades for existing 16-channel CCTV NVRs in 10 minutes',
      'Sovereign AI research and internal corporate document intelligence',
      'Aerial border patrol real-time threat telemetry'
    ],
    benefits: [
      'Future-proof sovereign roadmap for technology partners and enterprise clients',
      'Immediate OEM empanelment opportunities for hardware manufacturers'
    ],
    deploymentModel: 'Proprietary Edge Hardware / Certified Sovereign Cloud / Embedded Firmware',
    status: 'In Active R&D & Pilot Empanelment'
  }
];
