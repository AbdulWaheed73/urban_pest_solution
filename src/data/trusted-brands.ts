export type Brand = {
  name: string;
  logo: string;
  url: string | null;
};

// Most recognizable / high-profile clients — placed on the inner ring (closer to center, higher visibility)
export const INNER_RING: Brand[] = [
  { name: "Haleeb Foods", logo: "/brand-logos/haleeb-foods.png", url: "https://haleebfoods.com" },
  { name: "Matco Foods", logo: "/brand-logos/matco-foods.png", url: "https://matcofoods.com" },
  { name: "Interloop", logo: "/brand-logos/interloop.png", url: "https://interloop-pk.com" },
  { name: "Bureau Veritas", logo: "/brand-logos/bureau-veritas.png", url: "https://www.bureauveritas.com" },
  { name: "SGS Pakistan", logo: "/brand-logos/sgs.png", url: "https://www.sgs.com" },
  { name: "Subway", logo: "/brand-logos/subway.png", url: "https://www.subway.com" },
  { name: "Mitchell's Fruit Farms", logo: "/brand-logos/mitchells-fruit-farm.jpg", url: "https://www.mitchells.com.pk" },
  { name: "Gourmet Foods", logo: "/brand-logos/gourmet-foods.webp", url: "https://www.gourmetpakistan.com" },
  { name: "Highnoon Laboratories", logo: "/brand-logos/high-noon-labs.png", url: "https://highnoon-labs.com" },
  { name: "Fauji Foods", logo: "/brand-logos/fauji-cereals.svg", url: "https://www.faujifoods.com" },
  { name: "AFIC", logo: "/brand-logos/afic.png", url: "https://afic.gov.pk" },
  { name: "Bahria Hospital", logo: "/brand-logos/bahria-hospital.png", url: "https://bahriatown.com" },
];

// Supporting clients — outer ring, supporting visual mass
export const OUTER_RING: Brand[] = [
  { name: "Roshan Packages", logo: "/brand-logos/roshan-packages.png", url: "https://www.roshanpackages.com.pk" },
  { name: "Golden Packages", logo: "/brand-logos/golden-packages.png", url: "https://www.goldenpackages.pk" },
  { name: "Irshad Saeed Packaging", logo: "/brand-logos/irshad-saeed-packaging.png", url: "https://irshadsaeedpackaging.com" },
  { name: "Six B Foods", logo: "/brand-logos/six-b-foods.png", url: "https://six-b.com" },
  { name: "Yummy Ice Cream", logo: "/brand-logos/yummy-ice-cream.png", url: "https://yummy.com.pk" },
  { name: "Nuts & Legumes", logo: "/brand-logos/nuts-and-legumes.png", url: "https://nuts-legumes.pk" },
  { name: "Aiman Food & Beverage", logo: "/brand-logos/aiman-food.webp", url: "https://afabco.biz" },
  { name: "Ramzan Sugar Mills", logo: "/brand-logos/ramzan-sugar.png", url: "https://sgroup.pk" },
  { name: "Hunza Sugar Mills", logo: "/brand-logos/hunza-sugar.jpg", url: "https://www.hunzasugar.com.pk" },
  { name: "Ittefaq Sugar Mills", logo: "/brand-logos/ittefaq-sugar.png", url: "https://alshafigroup.com/IttefaqSugar.php" },
  { name: "Itehad Sugar Mills", logo: "/brand-logos/itehad-sugar.png", url: "https://etihadsugar.com.pk" },
  { name: "Two Star Sugar Mills", logo: "/brand-logos/two-star-sugar.png", url: "http://www.twostar.com.pk" },
  { name: "JK Sugar Mills", logo: "/brand-logos/jk-sugar.png", url: "https://jksugarmills.com" },
  { name: "Supreme Flour Mills", logo: "/brand-logos/supreme-flour.png", url: "https://www.seasonsgroup.com.pk" },
  { name: "Islamabad Sunny Flour Mills", logo: "/brand-logos/islamabad-sunny-flour.png", url: "https://sunnyflourmills.com" },
  { name: "Season Foods", logo: "/brand-logos/season-foods.png", url: "https://www.seasonsgroup.com.pk" },
  { name: "Barkat Rice", logo: "/brand-logos/barkat-rice.png", url: "https://barkatrice.com" },
  { name: "Waqar Rice", logo: "/brand-logos/waqar-rice.png", url: "https://waqarrice.com" },
  { name: "Majeed Foods", logo: "/brand-logos/majeed-foods.png", url: "https://majeedfoods.com" },
  { name: "Salva Foods", logo: "/brand-logos/salva-foods.png", url: "https://salvasfoods.com" },
  { name: "Marigold", logo: "/brand-logos/marigold.png", url: "https://marigold.pk" },
  { name: "Aimabadi Sweets & Bakery", logo: "/brand-logos/aimabadi-sweets.png", url: "https://eminabadi.com" },
  { name: "Khilafat Cola", logo: "/brand-logos/khilafat-cola.png", url: "https://khilafatcola.com" },
  { name: "Panaforce", logo: "/brand-logos/panaforce.png", url: null },
  { name: "Total Nutrition", logo: "/brand-logos/total-nutrition.png", url: "https://totalnutrition.pk" },
  { name: "Zia Foods", logo: "/brand-logos/zia-foods.png", url: "https://ziafoods.com" },
  { name: "Circle Club", logo: "/brand-logos/circle-club.png", url: "https://thecircleclub.pk" },
  { name: "Etihad Club RYK", logo: "/brand-logos/etihad-club-ryk.png", url: "https://etihadclub.com.pk" },
  { name: "Gujranwala Food Industries", logo: "/brand-logos/gujranwala-food.png", url: "https://www.ism-me.com/exhibitors/gujranwala-food-industries-pvt-ltd-1" },
];

export const ALL_BRANDS: Brand[] = [...INNER_RING, ...OUTER_RING];
