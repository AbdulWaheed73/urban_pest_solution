export interface Service {
  id: string;
  title: string;
  standard?: string;
  description: string;
  icon: string;
  category: ServiceCategory;
}

export type ServiceCategory =
  | "core-management"
  | "food-safety"
  | "it-security"
  | "laboratory"
  | "industry-specific"
  | "continuous-improvement"
  | "sustainability";

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
