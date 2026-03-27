import { Service } from "@/types";

export const services: Service[] = [
  // Core Management Systems
  {
    id: "iso-9001",
    title: "Quality Management",
    standard: "ISO 9001",
    description:
      "Process improvement based on customer focus, with a documented quality management system that drives consistency and excellence.",
    icon: "Award",
    category: "core-management",
  },
  {
    id: "iso-14001",
    title: "Environmental Management",
    standard: "ISO 14001",
    description:
      "The most widely implemented standard to ensure safe and better environmental practices across your organization.",
    icon: "Leaf",
    category: "core-management",
  },
  {
    id: "iso-45001",
    title: "Occupational Health & Safety",
    standard: "ISO 45001",
    description:
      "Providing safe and healthy working conditions for the workforce to prevent work-related injury and ill health.",
    icon: "HardHat",
    category: "core-management",
  },
  {
    id: "iso-50001",
    title: "Energy Management",
    standard: "ISO 50001",
    description:
      "Systematically improve energy efficiency, reduce energy consumption and lower costs through structured energy management.",
    icon: "Zap",
    category: "core-management",
  },
  // Food Safety
  {
    id: "fssc-22000",
    title: "FSSC 22000",
    standard: "FSSC 22000",
    description:
      "A worldwide-recognized, GFSI-benchmarked food safety certification scheme for food manufacturers.",
    icon: "ShieldCheck",
    category: "food-safety",
  },
  {
    id: "brc-food",
    title: "BRC Global Standard for Food Safety",
    standard: "BRC Food",
    description:
      "The leading global standard for food safety, widely adopted by UK and international retailers for supplier qualification.",
    icon: "ClipboardCheck",
    category: "food-safety",
  },
  {
    id: "iso-22000",
    title: "Food Safety Management",
    standard: "ISO 22000",
    description:
      "An international food safety management system applicable to all organizations in the food chain.",
    icon: "UtensilsCrossed",
    category: "food-safety",
  },
  {
    id: "halal",
    title: "Halal Food Management",
    standard: "PS 3733 / MS 1500",
    description:
      "Ensuring food products meet Halal requirements through proper management systems and compliance frameworks.",
    icon: "CheckCircle",
    category: "food-safety",
  },
  {
    id: "gmp",
    title: "Good Manufacturing Practices",
    standard: "Codex Alimentarius",
    description:
      "Foundational practices ensuring products are consistently produced and controlled according to quality standards.",
    icon: "Factory",
    category: "food-safety",
  },
  // IT & Information Security
  {
    id: "iso-27001",
    title: "Information Security Management",
    standard: "ISO 27001",
    description:
      "Protect your organization\u2019s information assets with a systematic approach to managing sensitive data.",
    icon: "Lock",
    category: "it-security",
  },
  {
    id: "iso-20000",
    title: "IT Service Management",
    standard: "ISO 20000-1",
    description:
      "The international standard for IT service management, ensuring effective delivery of managed services.",
    icon: "Server",
    category: "it-security",
  },
  {
    id: "iso-27701",
    title: "Privacy Information Management",
    standard: "ISO 27701",
    description:
      "Extension to ISO 27001 for establishing and maintaining a privacy information management system (PIMS).",
    icon: "Eye",
    category: "it-security",
  },
  // Laboratory
  {
    id: "iso-17025",
    title: "Testing & Calibration Laboratories",
    standard: "ISO 17025",
    description:
      "The standard for competence of testing and calibration laboratories, ensuring reliable and accurate results.",
    icon: "FlaskConical",
    category: "laboratory",
  },
  {
    id: "iso-15189",
    title: "Medical Laboratories",
    standard: "ISO 15189",
    description:
      "Quality and competence requirements specific to medical laboratories for reliable diagnostic results.",
    icon: "Microscope",
    category: "laboratory",
  },
  // Industry Specific
  {
    id: "ims",
    title: "Integrated Management Systems",
    description:
      "Combine multiple management system standards into one cohesive framework for streamlined operations and auditing.",
    icon: "Layers",
    category: "industry-specific",
  },
  {
    id: "api-q1-q2",
    title: "API Q1 & Q2",
    standard: "API Q1 / Q2",
    description:
      "Quality management system requirements for manufacturing and service supply organizations in the petroleum and natural gas industry.",
    icon: "Fuel",
    category: "industry-specific",
  },
  // Continuous Improvement
  {
    id: "six-sigma",
    title: "6 Sigma, Kaizen, 5S",
    description:
      "Lean manufacturing and continuous improvement methodologies to eliminate waste, reduce variation, and optimize processes.",
    icon: "TrendingUp",
    category: "continuous-improvement",
  },
  {
    id: "iso-42001",
    title: "AI Management System",
    standard: "ISO/IEC 42001",
    description:
      "The emerging standard for responsible development and use of artificial intelligence management systems.",
    icon: "Brain",
    category: "continuous-improvement",
  },
  // Sustainability
  {
    id: "esg",
    title: "ESG & Sustainability",
    description:
      "Environmental, Social, and Governance frameworks to demonstrate your organization\u2019s commitment to sustainable practices.",
    icon: "Globe",
    category: "sustainability",
  },
  {
    id: "ecovadis",
    title: "EcoVadis",
    description:
      "Evidence-based assessment of your company\u2019s sustainability management system covering environment, labor, ethics, and procurement.",
    icon: "TreePine",
    category: "sustainability",
  },
  {
    id: "bsci",
    title: "BSCI - Business Social Compliance",
    description:
      "A leading supply chain management system that helps companies drive social compliance and improvements in their global supply chains.",
    icon: "Handshake",
    category: "sustainability",
  },
];

export const serviceCategories: { key: string; label: string }[] = [
  { key: "core-management", label: "Core Management Systems" },
  { key: "food-safety", label: "Food Safety & Manufacturing" },
  { key: "it-security", label: "Information & Technology" },
  { key: "laboratory", label: "Laboratory Standards" },
  { key: "industry-specific", label: "Industry Specific" },
  { key: "continuous-improvement", label: "Continuous Improvement" },
  { key: "sustainability", label: "Sustainability & Compliance" },
];
