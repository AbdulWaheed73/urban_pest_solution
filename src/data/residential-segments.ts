import { ResidentialSegment, TermiteService } from "@/types";

export const residentialSegments: ResidentialSegment[] = [
  {
    id: "home-protection",
    title: "Home Protection",
    subtitle: "Safeguarding your home from unwanted guests",
    description:
      "Comprehensive pest control solutions for residential properties, ensuring your home remains a safe and comfortable haven for your family.",
    icon: "Home",
  },
  {
    id: "apartments",
    title: "Apartments",
    subtitle: "Maintaining pest-free living spaces for all tenants",
    description:
      "Tailored pest management solutions for multi-unit buildings, addressing shared spaces and individual units with equal care and attention.",
    icon: "Building",
  },
  {
    id: "single-family",
    title: "Single-Family Homes",
    subtitle: "Personalized pest control for your unique home",
    description:
      "Custom pest control plans designed for your specific home environment, addressing current issues and preventing future infestations.",
    icon: "House",
  },
];

export const termiteServices: TermiteService[] = [
  {
    id: "pre-construction",
    title: "Pre-Construction Treatment",
    description:
      "Creates protective barriers for new structures, preventing termite infiltration from the ground up during the building phase.",
    icon: "HardHat",
  },
  {
    id: "post-construction",
    title: "Post-Construction Treatment",
    description:
      "Eliminates current infestations in existing structures and applies barriers for long-term future prevention.",
    icon: "Hammer",
  },
  {
    id: "lawn-garden",
    title: "Lawn & Garden Treatment",
    description:
      "Extends termite protection beyond your building to outdoor spaces, protecting vegetation, fences, and landscape elements.",
    icon: "TreePine",
  },
  {
    id: "baiting",
    title: "Termite Baiting System",
    description:
      "Advanced termite baiting system that targets termites at their source, monitoring and controlling long-term colony activity.",
    icon: "Target",
  },
];

export const seasonalPests = [
  {
    season: "Spring",
    icon: "Flower2",
    pests: ["Ants", "Termites", "Mosquitoes"],
    tip: "Spring brings moisture and warmth \u2014 seal entry points and clear standing water around your home.",
  },
  {
    season: "Summer",
    icon: "Sun",
    pests: ["Flies", "Mosquitoes", "Wasps"],
    tip: "Keep food covered, maintain screens, and eliminate standing water to reduce summer pest pressure.",
  },
  {
    season: "Fall",
    icon: "Leaf",
    pests: ["Rodents", "Spiders", "Cockroaches"],
    tip: "Pests seek warmth indoors as temperatures drop. Seal cracks and declutter storage areas.",
  },
  {
    season: "Winter",
    icon: "Snowflake",
    pests: ["Rodents", "Bed Bugs", "Silverfish"],
    tip: "Inspect firewood, seal gaps, and maintain dry conditions to prevent overwintering pests.",
  },
];
