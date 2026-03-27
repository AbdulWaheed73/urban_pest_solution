import { CommercialSector } from "@/types";

export const commercialSectors: CommercialSector[] = [
  {
    id: "food-beverage",
    title: "Food & Beverage",
    subtitle: "Safeguarding Food Quality and Safety",
    description:
      "Specialized pest control for restaurants, food processing plants, and storage facilities complying with strict industry standards.",
    icon: "UtensilsCrossed",
    airBreakdown: {
      assess:
        "Inspect processing areas, storage facilities, and dining spaces for pest risks and vulnerabilities.",
      implement:
        "Apply targeted measures to prevent contamination and maintain the highest hygiene standards.",
      review:
        "Continuously monitor and update strategies ensuring full regulatory compliance.",
    },
  },
  {
    id: "retail",
    title: "Retail",
    subtitle: "Protecting Your Merchandise & Customer Experience",
    description:
      "Pest control solutions for retail stores and shopping centers ensuring pleasant, pest-free shopping experiences.",
    icon: "Store",
    airBreakdown: {
      assess:
        "Inspect retail spaces, storage areas, and high-traffic zones for pest issues.",
      implement:
        "Apply tailored solutions protecting merchandise and enhancing customer satisfaction.",
      review:
        "Continuously monitor and adjust to maintain a clean, inviting environment.",
    },
  },
  {
    id: "hospitality",
    title: "Hospitality",
    subtitle: "Ensure Guest Satisfaction with a Pest-Free Experience",
    description:
      "Tailored pest control for hotels, resorts, and hospitality establishments ensuring clean, welcoming environments for every guest.",
    icon: "Hotel",
    airBreakdown: {
      assess:
        "Evaluate guest rooms, common areas, and dining facilities for potential pest issues.",
      implement:
        "Deploy targeted solutions to maintain a pristine, welcoming atmosphere.",
      review:
        "Regularly monitor and adjust strategies ensuring ongoing guest satisfaction.",
    },
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Warehousing",
    subtitle: "Protecting Your Assets & Production Process",
    description:
      "Pest control for manufacturing plants and warehouses safeguarding products and ensuring smooth, uninterrupted operations.",
    icon: "Factory",
    airBreakdown: {
      assess:
        "Thoroughly inspect production lines, storage areas, and supply chains for pest risks.",
      implement:
        "Apply targeted measures to protect equipment and products from pest damage.",
      review:
        "Continuously monitor and adapt strategies to maintain operational efficiency.",
    },
  },
  {
    id: "transport",
    title: "Transportation & Logistics",
    subtitle: "Ensuring Pest-Free Transit & Storage",
    description:
      "Pest control services ensuring goods are stored and transported in completely pest-free environments.",
    icon: "Truck",
    airBreakdown: {
      assess:
        "Inspect storage facilities, transit areas, and vehicles for pest issues.",
      implement:
        "Implement measures to protect goods during storage and transportation.",
      review:
        "Continuously monitor and adjust to maintain a pest-free supply chain.",
    },
  },
  {
    id: "offices",
    title: "Commercial Offices",
    subtitle: "Maintaining a Professional, Pest-Free Workspace",
    description:
      "Services for office buildings and business centers creating clean, productive work environments free from pests.",
    icon: "Building2",
    airBreakdown: {
      assess:
        "Inspect office areas, break rooms, and common spaces for potential pest issues.",
      implement:
        "Deploy effective solutions to maintain a clean, professional workspace.",
      review:
        "Continuously review and adjust to address any new or recurring pest challenges.",
    },
  },
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Creating a Healthy, Pest-Free Environment",
    description:
      "Pest management services for hospitals, clinics, and healthcare facilities maintaining sterile, safe environments for patients and staff.",
    icon: "Heart",
    airBreakdown: {
      assess:
        "Evaluate patient areas, laboratories, and common spaces for potential pest issues.",
      implement:
        "Utilize precise, non-intrusive control measures ensuring a sterile environment.",
      review:
        "Regularly review and adjust to uphold the highest cleanliness and safety standards.",
    },
  },
  {
    id: "education",
    title: "Education",
    subtitle: "Promoting Safe & Clean Learning Environments",
    description:
      "Pest control services for schools, colleges, and universities ensuring safe, hygienic environments for students and staff.",
    icon: "GraduationCap",
    airBreakdown: {
      assess:
        "Evaluate classrooms, cafeterias, and grounds for potential pest issues.",
      implement:
        "Develop and apply solutions that minimize disruption while maintaining a clean learning environment.",
      review:
        "Regularly review and update strategies ensuring a healthy educational space.",
    },
  },
  {
    id: "real-estate",
    title: "Real Estate & Property Management",
    subtitle: "Enhancing Property Value & Tenant Satisfaction",
    description:
      "Pest control for residential and commercial properties helping managers maintain high cleanliness and safety standards.",
    icon: "Key",
    airBreakdown: {
      assess:
        "Evaluate residential and commercial properties for current and potential pest issues.",
      implement:
        "Apply tailored solutions that enhance property value and tenant satisfaction.",
      review:
        "Regularly review and update strategies ensuring long-term property cleanliness.",
    },
  },
];

export const commercialPests = [
  {
    id: "rodents",
    name: "Rodents",
    description:
      "Rats are a major threat in commercial food and storage facilities, known for contaminating products and causing structural damage. Their adaptability and resilience make them difficult to control, leading to serious health risks and potential regulatory violations.",
    icon: "Rat",
  },
  {
    id: "flies",
    name: "Flies",
    description:
      "Flies are a serious concern in commercial facilities, particularly in food environments. They are notorious for spreading bacteria and contaminating surfaces and products, which can lead to significant health risks.",
    icon: "Bug",
  },
  {
    id: "roaches",
    name: "Cockroaches",
    description:
      "Cockroaches are persistent pests that thrive in hidden areas of commercial facilities, especially those handling food. They contaminate food with allergens, pathogens, and waste, posing severe health risks.",
    icon: "Bug",
  },
];
