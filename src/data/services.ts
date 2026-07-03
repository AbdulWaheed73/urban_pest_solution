import { Service } from "@/types";

export const services: Service[] = [
  // General & Preventive
  {
    id: "general-pest-control",
    title: "General Pest Control",
    standard: "IPM Program",
    description:
      "Routine, science-driven control of ants, cockroaches, spiders and other everyday crawling pests — built on inspection, prevention and targeted, low-toxicity treatment.",
    icon: "Bug",
    category: "general",
  },
  {
    id: "cockroach-management",
    title: "Cockroach Management",
    description:
      "Gel baiting and residual treatments that break the breeding cycle in kitchens, drains and voids — protecting hygiene-sensitive spaces without disruptive fogging.",
    icon: "Bug",
    category: "general",
  },
  {
    id: "ant-control",
    title: "Ant Control",
    description:
      "Colony-level ant management that traces trails back to the nest, eliminating the source rather than just the ants you see.",
    icon: "Bug",
    category: "general",
  },
  {
    id: "crawling-insect-control",
    title: "Crawling Insect Control",
    description:
      "Perimeter and crack-and-crevice treatment for spiders, silverfish, beetles and other crawling insects, tuned to your building's entry points.",
    icon: "Footprints",
    category: "general",
  },

  // Specialized Treatments
  {
    id: "termite-control",
    title: "Anti-Termite Treatment",
    standard: "Pre & Post Construction",
    description:
      "Complete subterranean termite protection — soil barriers, in-ground baiting and structural treatment for both new builds and existing properties.",
    icon: "ShieldCheck",
    category: "specialized",
  },
  {
    id: "bed-bug-treatment",
    title: "Bed Bug Treatment",
    description:
      "Targeted heat and residual treatments that reach every harborage in mattresses, frames and furniture, with follow-up inspection to confirm eradication.",
    icon: "BedDouble",
    category: "specialized",
  },
  {
    id: "rodent-management",
    title: "Rodent Management",
    standard: "Rats & Mice",
    description:
      "Tamper-resistant baiting, trapping and proofing that removes existing rats and mice and seals the gaps that let them back in.",
    icon: "Rat",
    category: "specialized",
  },
  {
    id: "wood-borer-treatment",
    title: "Wood Borer Treatment",
    description:
      "Injection and surface treatment to stop wood-boring beetles destroying furniture, fixtures and structural timber.",
    icon: "TreePine",
    category: "specialized",
  },

  // Commercial & Facility
  {
    id: "commercial-ipm",
    title: "Commercial IPM Programs",
    standard: "Audit-Ready",
    description:
      "Ongoing, documented integrated pest management for facilities — monitoring, trend reporting and preventive action that stands up to third-party audits.",
    icon: "Building2",
    category: "commercial",
  },
  {
    id: "fumigation",
    title: "Fumigation & Commodity Treatment",
    description:
      "Controlled fumigation for warehouses, containers and stored commodities, eliminating infestation deep within bulk goods and export shipments.",
    icon: "Wind",
    category: "commercial",
  },
  {
    id: "warehouse-pest-control",
    title: "Warehouse & Storage Control",
    description:
      "Stored-product pest management and pheromone monitoring that protect inventory across warehousing and distribution operations.",
    icon: "Warehouse",
    category: "commercial",
  },
  {
    id: "food-safety-pest",
    title: "Food Safety Pest Management",
    standard: "HACCP-Aligned",
    description:
      "Pest programs designed for food manufacturing, restaurants and QSR — aligned with food-safety standards and the documentation auditors expect.",
    icon: "UtensilsCrossed",
    category: "commercial",
  },

  // Public Health & Sanitation
  {
    id: "mosquito-dengue-control",
    title: "Mosquito & Dengue Control",
    standard: "Fogging & Source Reduction",
    description:
      "Larviciding, fogging and breeding-site reduction that cut mosquito populations and get ahead of dengue during peak season.",
    icon: "Droplets",
    category: "public-health",
  },
  {
    id: "fly-management",
    title: "Fly Management",
    description:
      "Fly control combining sanitation guidance, insect light traps and targeted treatment for kitchens, waste areas and public spaces.",
    icon: "Bug",
    category: "public-health",
  },
  {
    id: "bird-control",
    title: "Bird Control & Proofing",
    description:
      "Netting, spikes and deterrents that humanely keep pigeons and other birds off ledges, signage and rooftops.",
    icon: "Bird",
    category: "public-health",
  },
  {
    id: "sanitization",
    title: "Sanitization & Disinfection",
    description:
      "Surface and space disinfection services that complement pest management to keep high-traffic environments hygienic.",
    icon: "Sparkles",
    category: "public-health",
  },
];

export const serviceCategories: { key: string; label: string }[] = [
  { key: "general", label: "General & Preventive" },
  { key: "specialized", label: "Specialized Treatments" },
  { key: "commercial", label: "Commercial & Facility" },
  { key: "public-health", label: "Public Health & Sanitation" },
];
