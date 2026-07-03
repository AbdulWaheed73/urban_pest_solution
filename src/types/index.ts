export interface Service {
  id: string;
  title: string;
  standard?: string;
  description: string;
  icon: string;
  category: ServiceCategory;
}

export type ServiceCategory =
  | "general"
  | "specialized"
  | "commercial"
  | "public-health";

export interface CommercialSector {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  airBreakdown: {
    assess: string;
    implement: string;
    review: string;
  };
}

export interface ResidentialSegment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface TermiteService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Pest {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
}

export type PestCategory =
  | "flying"
  | "crawling"
  | "rodents"
  | "reptiles"
  | "vertebrates";

export interface PestFAQ {
  question: string;
  answer: string;
}

export interface PestDetail {
  slug: string;
  name: string;
  category: PestCategory;
  tagline: string;
  shortDescription: string;
  scientificName: string;
  size: string;
  appearance: string;
  wings?: string;
  feeding: string;
  behavior: string;
  habitat: string;
  signs: string[];
  healthRisks: string;
  airTreatment: {
    assess: string;
    implement: string;
    review: string;
  };
  faqs: PestFAQ[];
  icon: string;
  accentColor: "danger" | "forest" | "amber" | "indigo" | "rose";
}

export type TrainingCategory =
  | "fundamentals"
  | "food-safety"
  | "restaurants"
  | "public-health"
  | "academic"
  | "collaboration";

export interface TrainingSession {
  slug: string;
  title: string;
  category: TrainingCategory;
  host: string;
  tagline: string;
  summary: string;
  overview: string;
  location: string;
  duration: string;
  format: string;
  image: string;
  gallery?: string[];
  topics: string[];
  outcomes: string[];
  accentColor: "danger" | "forest" | "amber" | "indigo" | "rose";
}

export interface AtPlace {
  id: string;
  title: string;
  client: string;
  location: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  businessHours: { day: string; hours: string }[];
  socialLinks: { platform: string; url: string; icon: string }[];
  navLinks: { label: string; href: string }[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  icon: string;
  category: ProductCategory;
  badge?: string;
  inStock: boolean;
}

export type ProductCategory =
  | "traps"
  | "bait-stations"
  | "sprays"
  | "repellents"
  | "monitoring"
  | "protective-gear";

export interface CartItem {
  product: Product;
  quantity: number;
}
