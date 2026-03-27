import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  companyName: "Urban Pest Solution",
  tagline: "An Environmental Perspective",
  phone: "+92 321 882 2080",
  email: "info@urbanpestsolution.com",
  address: "106-A, Str. 15, State Life Housing Society, Lahore, Pakistan",
  businessHours: [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  socialLinks: [
    { platform: "Facebook", url: "#", icon: "Facebook" },
    { platform: "LinkedIn", url: "#", icon: "Linkedin" },
    { platform: "Instagram", url: "#", icon: "Instagram" },
    { platform: "YouTube", url: "#", icon: "Youtube" },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Commercial", href: "/commercial" },
    { label: "Residential", href: "/residential" },
    { label: "Shop", href: "/shop" },
    { label: "Contact", href: "/contact" },
  ],
};
