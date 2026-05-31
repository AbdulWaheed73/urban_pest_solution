import { TrainingSession, AtPlace, TrainingCategory } from "@/types";

export const trainingCategories: {
  key: TrainingCategory | "all";
  label: string;
}[] = [
  { key: "all", label: "All Sessions" },
  { key: "fundamentals", label: "IPM Fundamentals" },
  { key: "food-safety", label: "Food Safety" },
  { key: "restaurants", label: "Restaurants" },
  { key: "public-health", label: "Public Health" },
  { key: "academic", label: "Academic" },
  { key: "collaboration", label: "Collaboration" },
];

export const trainingSessions: TrainingSession[] = [
  {
    slug: "ipm-fundamentals",
    title: "IPM Fundamentals Workshop",
    category: "fundamentals",
    host: "Facility & Operations Teams",
    tagline: "The foundation every pest program is built on",
    summary:
      "A hands-on introduction to Integrated Pest Management — why prevention beats reaction, and how targeted, low-toxicity methods outperform traditional spraying.",
    overview:
      "Our flagship workshop walks teams through the core philosophy of Integrated Pest Management from the ground up. Participants learn how IPM requires greater knowledge than conventional programs, why its techniques are less toxic and more targeted, and how a coordinated team effort delivers more effective, longer-lasting, and lower-risk results. Through live discussion and worked examples, attendees leave able to recognise conducive conditions and act on them before an infestation ever takes hold.",
    location: "Urban Pest Academy, Lahore",
    duration: "Half day (4 hours)",
    format: "Classroom + interactive discussion",
    image: "/trainings/ipm-fundamentals.jpeg",
    gallery: ["/trainings/ipm-fundamentals-2.jpeg"],
    topics: [
      "What IPM is — and how it differs from conventional pest control",
      "The five components of an integrated programme",
      "Reading conducive conditions and pest pressure",
      "Why targeted treatments lower toxicity and cost",
      "Building a team-based prevention culture",
    ],
    outcomes: [
      "Understand the full IPM cycle end to end",
      "Identify prevention opportunities before pests arrive",
      "Communicate pest risks confidently across a facility",
    ],
    accentColor: "forest",
  },
  {
    slug: "components-of-ipm",
    title: "The Components of IPM",
    category: "fundamentals",
    host: "Pest Management Technicians",
    tagline: "Inspection, identification, action — done right",
    summary:
      "A deep dive into the working parts of an IPM programme: monitoring, identification, thresholds, intervention, and review.",
    overview:
      "This session breaks IPM down into its working components and shows how each one feeds the next. Technicians study the IPM cycle in detail — accurate monitoring, correct species identification, action thresholds, the hierarchy of control methods, and structured review. Using real site data, the group practises deciding when and how to intervene so that every treatment is justified, measured, and documented.",
    location: "Urban Pest Academy, Lahore",
    duration: "Full day (6 hours)",
    format: "Classroom + case studies",
    image: "/trainings/components-of-ipm.jpeg",
    gallery: ["/trainings/components-of-ipm-2.jpeg"],
    topics: [
      "Monitoring and inspection techniques",
      "Correct pest identification",
      "Setting and using action thresholds",
      "The control hierarchy: physical, cultural, biological, chemical",
      "Documentation and programme review",
    ],
    outcomes: [
      "Map any infestation to the right component of the IPM cycle",
      "Choose proportionate, justified interventions",
      "Keep audit-ready treatment records",
    ],
    accentColor: "indigo",
  },
  {
    slug: "food-safety-ipm",
    title: "Food Safety & IPM for Manufacturing",
    category: "food-safety",
    host: "Food Manufacturing & QA Teams",
    tagline: "Protecting product, plant, and compliance",
    summary:
      "Tailored for food plants — the economic damage pests cause and the controls that keep production lines audit-ready.",
    overview:
      "Designed for food manufacturing environments, this training connects pest activity directly to economic loss: contaminated raw materials, packaging and finished-goods damage, machinery breakdowns, stoppages during processing, and failed audits. Plant and QA teams learn the pest-prevention controls expected under modern food-safety standards, and how a disciplined IPM programme protects both product integrity and certification.",
    location: "On-site — client food plant",
    duration: "Half day (4 hours)",
    format: "On-site briefing + floor walk",
    image: "/trainings/food-safety-ipm.jpeg",
    gallery: ["/trainings/food-safety-ipm-2.jpeg"],
    topics: [
      "Economic damage and loss caused by pests in food plants",
      "Pest-prevention controls for food-safety standards",
      "Hygiene zoning and proofing of production areas",
      "Monitoring devices and trend analysis",
      "Audit readiness and corrective action",
    ],
    outcomes: [
      "Link pest activity to real production and compliance risk",
      "Maintain pest controls expected by food-safety auditors",
      "Respond to non-conformances with confidence",
    ],
    accentColor: "amber",
  },
  {
    slug: "restaurant-ipm",
    title: "IPM Anatomy of Restaurants",
    category: "restaurants",
    host: "Restaurant & QSR Teams",
    tagline: "From back-of-house to dining floor",
    summary:
      "An activity-based course for restaurant and QSR teams covering the pest pressure points unique to food service.",
    overview:
      "Restaurants face pest pressure from every direction — deliveries, drains, storage, waste handling, and dining areas. This activity-based course dissects the anatomy of a restaurant zone by zone, showing teams exactly where pests enter, harbour, and feed, and what daily practices shut those opportunities down. The engaging, hands-on format keeps front-line staff involved and turns pest awareness into everyday habit.",
    location: "Urban Pest Academy, Lahore",
    duration: "Half day (3 hours)",
    format: "Activity-based workshop",
    image: "/trainings/restaurant-ipm.jpeg",
    gallery: ["/trainings/restaurant-ipm-2.jpeg"],
    topics: [
      "Mapping pest entry and harbourage points in a restaurant",
      "Receiving, storage, and waste-handling controls",
      "Drain management and kitchen hygiene",
      "Daily staff checks and reporting",
      "Front-of-house and dining-area protection",
    ],
    outcomes: [
      "Run a zone-by-zone pest check of any outlet",
      "Embed pest awareness in daily kitchen routines",
      "Reduce the risk of pest sightings in dining areas",
    ],
    accentColor: "danger",
  },
  {
    slug: "dengue-awareness",
    title: "Stop Dengue Awareness Session",
    category: "public-health",
    host: "Community & Corporate Groups",
    tagline: "Public-health pest control that saves lives",
    summary:
      "A focused session on mosquito biology, breeding-site reduction, and the community action that keeps dengue at bay.",
    overview:
      "Dengue is a public-health emergency that pest management is uniquely placed to fight. This awareness session covers the biology and behaviour of the Aedes mosquito, how to find and eliminate breeding sites around homes and workplaces, and the seasonal surveillance that gets ahead of an outbreak. Practical and community-focused, it equips groups to take coordinated action where it matters most.",
    location: "Urban Pest Academy / on-site",
    duration: "2 hours",
    format: "Awareness briefing",
    image: "/trainings/dengue-awareness.jpeg",
    gallery: ["/trainings/dengue-awareness-2.jpeg"],
    topics: [
      "Aedes mosquito biology and breeding habits",
      "Finding and eliminating breeding sites",
      "Seasonal surveillance and source reduction",
      "Personal and community protection measures",
      "Coordinated workplace response",
    ],
    outcomes: [
      "Spot and remove mosquito breeding sites",
      "Lead a workplace anti-dengue drive",
      "Understand when professional treatment is needed",
    ],
    accentColor: "rose",
  },
  {
    slug: "university-collaboration",
    title: "University IPM Course",
    category: "academic",
    host: "University Students & Faculty",
    tagline: "Growing the next generation of IPM professionals",
    summary:
      "An academic collaboration introducing students to the science, practice, and career paths of integrated pest management.",
    overview:
      "Delivered in partnership with leading universities, this course bridges classroom theory and field practice. Students explore the science behind IPM, the technology now reshaping the industry, and the real-world career paths open to them. Internships and research projects extend the learning beyond the lecture, helping build a stronger, more resilient pest-management ecosystem for Pakistan.",
    location: "Partner university / Urban Pest Academy",
    duration: "Multi-session course",
    format: "Lecture + lab + field visit",
    image: "/trainings/university-collaboration.jpeg",
    gallery: ["/trainings/university-collaboration-2.jpeg"],
    topics: [
      "The science of integrated pest management",
      "Technology and data in modern pest control",
      "Research methods and field study",
      "Sustainability and the environment",
      "Careers and internships in the industry",
    ],
    outcomes: [
      "Grasp IPM from first principles to field application",
      "Access internships and research opportunities",
      "Connect academic study with industry practice",
    ],
    accentColor: "forest",
  },
  {
    slug: "international-exchange",
    title: "International Knowledge Exchange",
    category: "collaboration",
    host: "Global & National Partners",
    tagline: "World-class standards, shared locally",
    summary:
      "Strategic collaborations that bring global best practice and research into the Urban Pest Academy's curriculum.",
    overview:
      "The Urban Pest Academy maintains top-tier learning quality through strategic global collaborations and strong partnerships with leading national institutes. These knowledge exchanges — including joint sessions and shared research with international partners — keep our curriculum aligned with the latest science and technology in pest management, so the training delivered locally reflects standards recognised worldwide.",
    location: "Urban Pest Academy, Lahore",
    duration: "Varies by programme",
    format: "Partner workshops & exchange",
    image: "/trainings/international-exchange.jpeg",
    topics: [
      "Global best practice in integrated pest management",
      "Joint research and knowledge sharing",
      "International standards and certification",
      "Technology transfer and innovation",
      "Building a national network of expertise",
    ],
    outcomes: [
      "Learn from globally recognised practitioners",
      "Apply international standards locally",
      "Join a growing professional network",
    ],
    accentColor: "indigo",
  },
];

export const atPlaces: AtPlace[] = [
  {
    id: "aib-pepsico-audit",
    title: "AIB Audit Support at PepsiCo",
    client: "PepsiCo / Frito Lay",
    location: "Lahore Plant",
    image: "/at-places/aib-pepsico-audit.jpeg",
    description:
      "Our specialists worked alongside PepsiCo's team to prepare and support their AIB audit — aligning pest-management controls with international food-safety standards.",
  },
  {
    id: "aib-pepsico-plant",
    title: "A Pest-Free Frito Lay Plant",
    client: "PepsiCo / Frito Lay",
    location: "Lahore Plant",
    image: "/at-places/aib-pepsico-plant.jpeg",
    description:
      "The Frito Lay production team after a successful AIB audit — a result of disciplined, documented integrated pest management on the plant floor.",
  },
  {
    id: "bunny-bread-ceremony",
    title: "Bunny Bread Certificate Ceremony",
    client: "Bunny's Bread",
    location: "Lahore",
    image: "/at-places/bunny-bread-ceremony.jpeg",
    description:
      "Graduates of our on-site IPM training at Bunny's Bread receive their certificates — recognising teams who completed the programme and raised their pest-awareness standards.",
  },
  {
    id: "gymkhana-gathering",
    title: "Industry Get-Together",
    client: "Gymkhana, Lahore",
    location: "Lahore",
    image: "/at-places/gymkhana-gathering.jpeg",
    description:
      "Building relationships beyond the classroom — our team meets industry partners and clients to share knowledge and strengthen the pest-management community.",
  },
];
