import { Product } from "@/types";

export const products: Product[] = [
  // Traps
  {
    id: "snap-trap-rat",
    name: "Professional Rat Snap Trap",
    description:
      "Heavy-duty reusable snap trap for rats. Quick-kill design ensures humane elimination. Weather-resistant for indoor and outdoor use.",
    price: 850,
    originalPrice: 1100,
    icon: "Target",
    category: "traps",
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "snap-trap-mouse",
    name: "Mouse Snap Trap (Pack of 4)",
    description:
      "Compact snap traps designed for mice. Easy to set, easy to clean. Suitable for kitchens, storerooms, and garages.",
    price: 600,
    icon: "Target",
    category: "traps",
    inStock: true,
  },
  {
    id: "glue-board-rat",
    name: "Rat Glue Board — Extra Strong",
    description:
      "High-tack adhesive glue board for capturing rats. Non-toxic, disposable, and odorless. Place along walls and runways.",
    price: 350,
    originalPrice: 450,
    icon: "Layers",
    category: "traps",
    inStock: true,
  },
  {
    id: "live-catch-trap",
    name: "Humane Live Catch Trap",
    description:
      "Multi-catch live trap for rats and mice. Galvanized steel construction. Capture and release without harm.",
    price: 2200,
    icon: "Box",
    category: "traps",
    badge: "Eco-Friendly",
    inStock: true,
  },
  // Bait Stations
  {
    id: "bait-station-tamper",
    name: "Tamper-Resistant Bait Station",
    description:
      "Lockable bait station for safe rodenticide placement. Child and pet resistant. Ideal for commercial and residential perimeters.",
    price: 1500,
    originalPrice: 1800,
    icon: "ShieldCheck",
    category: "bait-stations",
    badge: "Commercial Grade",
    inStock: true,
  },
  {
    id: "bait-station-indoor",
    name: "Indoor Mouse Bait Station",
    description:
      "Low-profile bait station for discreet indoor placement. Pre-loaded with bait block. Safe around children and pets.",
    price: 750,
    icon: "Home",
    category: "bait-stations",
    inStock: true,
  },
  {
    id: "termite-bait-station",
    name: "In-Ground Termite Bait Station",
    description:
      "Subterranean termite monitoring and baiting station. Installs flush with soil. Includes monitoring cartridge.",
    price: 3500,
    icon: "Crosshair",
    category: "bait-stations",
    badge: "Pro Series",
    inStock: true,
  },
  // Sprays
  {
    id: "cockroach-spray",
    name: "Cockroach Killer Spray — 500ml",
    description:
      "Fast-acting residual spray for cockroaches, ants, and crawling insects. Water-based formula safe for indoor surfaces.",
    price: 950,
    icon: "Spray",
    category: "sprays",
    inStock: true,
  },
  {
    id: "bed-bug-spray",
    name: "Bed Bug Treatment Spray — 300ml",
    description:
      "Targeted bed bug spray with residual action. Kills on contact and provides lasting protection for mattresses and furniture.",
    price: 1200,
    originalPrice: 1500,
    icon: "Spray",
    category: "sprays",
    badge: "New",
    inStock: true,
  },
  {
    id: "termite-spray",
    name: "Termite Barrier Spray — 1L",
    description:
      "Professional-grade soil treatment spray for termite prevention. Creates a lasting chemical barrier around foundations.",
    price: 2800,
    icon: "Spray",
    category: "sprays",
    inStock: true,
  },
  // Repellents
  {
    id: "mosquito-repellent",
    name: "Mosquito Repellent Coils (Pack of 10)",
    description:
      "Long-burning mosquito coils for outdoor use. Each coil provides up to 8 hours of protection. Low smoke formula.",
    price: 400,
    icon: "Wind",
    category: "repellents",
    inStock: true,
  },
  {
    id: "rat-repellent-granules",
    name: "Rodent Repellent Granules — 1kg",
    description:
      "Natural peppermint-based granules that deter rats and mice. Safe for gardens, attics, and storage areas. Non-toxic.",
    price: 1100,
    icon: "Leaf",
    category: "repellents",
    badge: "Eco-Friendly",
    inStock: true,
  },
  // Monitoring
  {
    id: "uv-flashlight",
    name: "UV Pest Detection Flashlight",
    description:
      "Professional UV flashlight for detecting rodent urine trails, scorpions, and bed bugs. Rechargeable with belt clip.",
    price: 1800,
    originalPrice: 2200,
    icon: "Flashlight",
    category: "monitoring",
    inStock: true,
  },
  {
    id: "insect-monitor",
    name: "Sticky Insect Monitor (Pack of 12)",
    description:
      "Non-toxic adhesive monitors for tracking crawling insect activity. Foldable design with grid for counting. Ideal for IPM programs.",
    price: 650,
    icon: "BarChart3",
    category: "monitoring",
    inStock: true,
  },
  // Protective Gear
  {
    id: "respirator-mask",
    name: "Chemical Respirator Mask",
    description:
      "Half-face respirator with dual cartridge filters for protection during pesticide application. Adjustable straps for secure fit.",
    price: 2500,
    icon: "Shield",
    category: "protective-gear",
    inStock: true,
  },
  {
    id: "spray-gloves",
    name: "Chemical-Resistant Gloves (Pair)",
    description:
      "Heavy-duty nitrile gloves for safe handling of pesticides and chemicals. Textured grip, elbow-length protection.",
    price: 650,
    originalPrice: 800,
    icon: "Hand",
    category: "protective-gear",
    inStock: true,
  },
];

export const productCategories: { key: string; label: string; icon: string }[] = [
  { key: "all", label: "All Products", icon: "LayoutGrid" },
  { key: "traps", label: "Traps & Catchers", icon: "Target" },
  { key: "bait-stations", label: "Bait Stations", icon: "ShieldCheck" },
  { key: "sprays", label: "Sprays & Treatments", icon: "Spray" },
  { key: "repellents", label: "Repellents", icon: "Wind" },
  { key: "monitoring", label: "Monitoring Tools", icon: "BarChart3" },
  { key: "protective-gear", label: "Protective Gear", icon: "Shield" },
];
