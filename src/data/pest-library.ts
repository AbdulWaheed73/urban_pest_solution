import { PestDetail, PestCategory } from "@/types";

export const pestCategories: { key: PestCategory | "all"; label: string; icon: string }[] = [
  { key: "all", label: "All Pests", icon: "LayoutGrid" },
  { key: "flying", label: "Flying Insects", icon: "Bug" },
  { key: "crawling", label: "Crawling Insects", icon: "Bug" },
  { key: "rodents", label: "Rodents", icon: "Rat" },
  { key: "reptiles", label: "Reptiles", icon: "Worm" },
  { key: "vertebrates", label: "Vertebrates", icon: "Dog" },
];

export const pestLibrary: PestDetail[] = [
  // ============== FLYING INSECTS ==============
  {
    slug: "drain-fly",
    name: "Drain Fly",
    category: "flying",
    tagline: "Tiny moth-like fliers in damp drains",
    shortDescription:
      "Small fuzzy flies that breed in clogged drains, sink traps, and stagnant water — a clear signal of hidden sanitation issues.",
    scientificName: "Psychodidae",
    size: "1.5–5 mm",
    appearance: "Grayish to dark brown, fuzzy and moth-like with a unique leaf-pattern on the wings.",
    wings: "Broad, oval, covered in fine hairs; folded over the body at rest.",
    feeding:
      "Feeds on organic debris and microbial films inside drains, traps, and damp organic buildup.",
    behavior:
      "Weak fliers that hover near drains. Mostly active at night and stay close to their breeding source. They do not bite or sting.",
    habitat:
      "Clogged drains, septic tanks, sewer lines, sink traps, shower drains, and any spot with stagnant water — kitchens, bathrooms, basements.",
    signs: [
      "Small moth-like flies near sinks, showers, or floor drains",
      "Slimy organic film around drain openings",
      "Fly activity that returns despite cleaning surfaces",
    ],
    healthRisks:
      "While they don't bite, drain flies can transfer bacteria from unsanitary breeding sites onto food and surfaces.",
    airTreatment: {
      assess: "Locate every breeding site — drains, traps, septic lines — and gauge infestation severity.",
      implement:
        "Apply enzyme-based drain cleaners, mechanically remove organic buildup, and treat plumbing voids.",
      review: "Re-inspect drains weekly and maintain a sanitation schedule to prevent recurrence.",
    },
    faqs: [
      {
        question: "Why do drain flies keep coming back after I clean?",
        answer:
          "Surface cleaning doesn't reach the organic film inside drain pipes where eggs and larvae develop. A deep enzymatic treatment of the pipe interior is required.",
      },
      {
        question: "Are drain flies dangerous?",
        answer:
          "They don't bite or sting, but their presence indicates poor sanitation and they can mechanically transfer bacteria.",
      },
      {
        question: "How fast do they reproduce?",
        answer: "An egg-to-adult cycle can complete in 7–14 days under warm, moist conditions.",
      },
    ],
    icon: "Bug",
    accentColor: "indigo",
  },
  {
    slug: "house-fly",
    name: "House Fly",
    category: "flying",
    tagline: "The classic disease-spreading household pest",
    shortDescription:
      "A common gray fly with sponging mouthparts that lands on food, waste, and surfaces — a major mechanical vector of bacterial disease.",
    scientificName: "Musca domestica",
    size: "6–7 mm",
    appearance:
      "Gray to blackish body with four dark longitudinal stripes on the thorax, large reddish-brown compound eyes, and short antennae.",
    wings: "Two transparent wings with prominent veins, slightly overlapping at rest.",
    feeding:
      "Liquefies solid food using saliva and feeds on rotting organic matter, sugary residues, dairy, and garbage. Cannot bite or chew.",
    behavior:
      "Active during the day, attracted to warmth and odor. Females can lay up to 1,000 eggs in a lifetime, enabling rapid population growth.",
    habitat:
      "Areas rich in organic waste — urban kitchens, farms, landfills, food processing sites, and any warm moist environment.",
    signs: [
      "Adult flies near food, garbage, or animal waste",
      "Small black fecal specks on walls and surfaces",
      "Maggots in decaying organic matter",
      "Persistent buzzing in living spaces",
    ],
    healthRisks:
      "Mechanically carry pathogens including Salmonella, E. coli, and cholera, contaminating food and prep surfaces.",
    airTreatment: {
      assess: "Inspect for breeding sites — garbage, food waste, animal waste — and identify entry points.",
      implement:
        "Deploy fly traps and targeted insecticides, and overhaul sanitation around bins and prep areas.",
      review: "Monitor populations and adjust treatments through warm seasons.",
    },
    faqs: [
      {
        question: "How long do house flies live?",
        answer: "15–30 days depending on temperature and food availability.",
      },
      {
        question: "Why do flies keep coming inside?",
        answer:
          "They follow CO₂ and food odors through doors and windows. Screens, air curtains, and tight bin lids reduce entry.",
      },
      {
        question: "Are they actually dangerous?",
        answer:
          "Yes — a single fly can carry over a million bacteria from waste sites onto food, making them a serious hygiene hazard.",
      },
    ],
    icon: "Bug",
    accentColor: "indigo",
  },
  {
    slug: "fruit-fly",
    name: "Fruit Fly",
    category: "flying",
    tagline: "Tiny hovering flies on overripe produce",
    shortDescription:
      "Small tan flies with red eyes that breed in fermenting fruit, drains, and sugary residues — capable of explosive population growth.",
    scientificName: "Drosophila spp.",
    size: "3–4 mm (≈ 1/8 inch)",
    appearance: "Tan to light brown body with a darker abdomen and bright red eyes.",
    wings: "Transparent, longer than the body.",
    feeding:
      "Overripe fruits, vegetables, sugary spills, and fermenting liquids like beer and wine.",
    behavior:
      "Erratic hovering near food sources. Eggs reach adulthood in 8–10 days; one female can lay up to 500 eggs in a 2-week lifespan.",
    habitat:
      "Kitchens, grocery stores, food prep zones, compost piles, recycling bins, and drains with organic buildup.",
    signs: [
      "Small flies hovering above fruit bowls or trash",
      "Larvae or eggs on the surface of decaying produce",
      "Activity around drains, recycling, and bin liners",
    ],
    healthRisks:
      "Can transfer bacteria from fermenting matter to fresh food, creating a food-safety hazard in kitchens and food businesses.",
    airTreatment: {
      assess: "Trace breeding sites — fruit, drains, bins, mop heads — and grade the infestation.",
      implement:
        "Set apple-cider vinegar traps, apply professional drain treatments, and remove all fermenting matter.",
      review: "Verify drain sanitation weekly during warm months.",
    },
    faqs: [
      {
        question: "How are fruit flies different from gnats?",
        answer:
          "Fruit flies are drawn to fermenting matter; fungus gnats prefer moist soil and houseplants.",
      },
      {
        question: "Why won't they go away?",
        answer:
          "Hidden breeding sites — drains, mop water, recycling bins — sustain the population even after visible fruit is removed.",
      },
      {
        question: "Can they get inside through closed doors?",
        answer: "Yes, they enter via groceries, deliveries, and tiny window gaps.",
      },
    ],
    icon: "Bug",
    accentColor: "indigo",
  },
  {
    slug: "phorid-fly",
    name: "Phorid Fly",
    category: "flying",
    tagline: "The humpbacked drain dweller",
    shortDescription:
      "A small humpbacked fly that runs more than it flies, breeding in decay and posing a contamination risk in food and healthcare settings.",
    scientificName: "Phoridae",
    size: "0.5–5 mm",
    appearance: "Yellowish, brown, or black with a distinctive humpbacked thorax and small dark side eyes.",
    wings: "Transparent with visible veins.",
    feeding:
      "Decomposing organic material — rotting food, drain residue, and damp waste in cracks and voids.",
    behavior:
      "Erratic, scurrying movement that resembles running. Egg-to-adult cycle can complete in as little as two weeks.",
    habitat:
      "Damp areas with organic matter — leaky plumbing, neglected drains, garbage rooms, basements, utility areas, and crevices.",
    signs: [
      "Small humpbacked flies running on surfaces near drains",
      "Activity around bins, leaks, or decaying matter",
      "Persistent flies despite surface cleaning",
    ],
    healthRisks:
      "Can transfer bacteria and pathogens from decaying matter to surfaces — a particular concern in kitchens, hospitals, and waste facilities.",
    airTreatment: {
      assess: "Inspect drains, garbage holding, and decaying matter for breeding sites.",
      implement: "Apply drain cleaners, targeted insecticides, and a deep-clean of organic buildup.",
      review: "Monitor regularly and tune treatments for high-risk areas.",
    },
    faqs: [
      {
        question: "Why are phorid flies a serious problem in food businesses?",
        answer:
          "They breed in pipe biofilms and waste that's hard to reach, and can transfer pathogens directly into food prep zones.",
      },
      {
        question: "How do they differ from drain flies?",
        answer:
          "Phorid flies have a humped thorax and run before flying; drain flies are fuzzy and moth-like.",
      },
      {
        question: "How quickly can an infestation grow?",
        answer: "An entire generation can mature in two weeks, so populations explode if breeding sites aren't removed.",
      },
    ],
    icon: "Bug",
    accentColor: "indigo",
  },
  {
    slug: "paper-wasp",
    name: "Paper Wasp",
    category: "flying",
    tagline: "Slender stingers with umbrella-shaped nests",
    shortDescription:
      "Slender wasps that build open paper nests in eaves and corners — beneficial pollinators, but capable of repeated stings when nests are disturbed.",
    scientificName: "Polistes",
    size: "1.5–2.5 cm",
    appearance: "Reddish-brown, yellow, or black with distinct markings; slender body with a narrow waist.",
    wings: "Long and translucent, resting flat over the body.",
    feeding:
      "Adults sip nectar; they hunt caterpillars and other insects to feed larvae. Drawn to sugary residues and ripened fruit.",
    behavior:
      "Slow and deliberate flight. Stingers are not barbed, so they can sting multiple times without dying. Most active in late spring and summer.",
    habitat:
      "Open umbrella-shaped nests of chewed wood pulp under eaves, ceilings, window frames, structural gaps, and outdoor furniture.",
    signs: [
      "Open papery nests under eaves or in corners",
      "Wasps repeatedly entering one location",
      "Chewed wood scrapings near nesting material",
    ],
    healthRisks:
      "Stings can cause severe allergic reactions in sensitive individuals. Generally non-aggressive unless the nest is threatened.",
    airTreatment: {
      assess: "Inspect sheltered exterior corners for nests and grade the threat level.",
      implement: "Apply targeted treatments and perform professional nest removal in protective gear.",
      review: "Seal entry points, remove attractants, and re-check seasonally.",
    },
    faqs: [
      {
        question: "Are paper wasps beneficial?",
        answer: "Yes — they control caterpillar populations and assist with pollination, so removal should target only nests near human activity.",
      },
      {
        question: "Should I remove a nest myself?",
        answer:
          "No. Disturbed nests trigger defensive swarming and multi-sting attacks. Always call a professional.",
      },
      {
        question: "How can I prevent nests next year?",
        answer:
          "Seal eave gaps, remove old nests in winter, and treat common nesting points before spring.",
      },
    ],
    icon: "Bug",
    accentColor: "amber",
  },
  {
    slug: "honey-bees",
    name: "Honey Bees",
    category: "flying",
    tagline: "Vital pollinators best relocated, not killed",
    shortDescription:
      "Essential pollinators that occasionally nest in cavities and walls — should be relocated by beekeepers rather than exterminated.",
    scientificName: "Apis spp.",
    size: "1.2–1.6 cm",
    appearance: "Golden-brown with black bands, compact and hairy body that aids pollen collection.",
    wings: "Transparent, neatly folded at rest.",
    feeding: "Nectar for energy and pollen for protein, gathered from flowering plants and trees.",
    behavior:
      "Direct flight toward flowers or hive. Foragers travel up to 5 km from the colony. Swarming is part of natural reproduction.",
    habitat:
      "Tree cavities, building crevices, wall voids, and chimneys — anywhere providing a sheltered cavity near flowering plants.",
    signs: [
      "Steady bee traffic in and out of a single wall or eave gap",
      "A swarm cluster on a tree limb or fence",
      "Wax or honey staining inside walls",
    ],
    healthRisks:
      "Stings can trigger severe allergic reactions. Honey bees sting only defensively — most contact is harmless.",
    airTreatment: {
      assess: "Identify hive location and behavior — swarming, foraging, or established colony.",
      implement:
        "Coordinate with licensed beekeepers for live relocation. Avoid pesticides on healthy colonies.",
      review: "Seal cavity entrances after removal and monitor for re-entry.",
    },
    faqs: [
      {
        question: "Will you kill the bees?",
        answer:
          "No — wherever possible we partner with beekeepers to relocate live colonies, given their critical role in pollination.",
      },
      {
        question: "There's a swarm on my tree — is it dangerous?",
        answer:
          "Resting swarms are typically docile and move on within 1–3 days. Keep distance and call a beekeeper for safe removal.",
      },
      {
        question: "How do I bee-proof my home?",
        answer: "Seal cavity entrances, screen vents, and address gaps before swarming season (spring).",
      },
    ],
    icon: "Bug",
    accentColor: "amber",
  },
  {
    slug: "mosquitoes",
    name: "Mosquitoes",
    category: "flying",
    tagline: "Dawn-and-dusk biters and disease carriers",
    shortDescription:
      "Slender biting flies that breed in any standing water and transmit diseases like dengue, malaria, and chikungunya across South Asia.",
    scientificName: "Culicidae",
    size: "2–10 mm",
    appearance: "Slender, elongated body with long legs, gray to black or brown coloring, and a piercing proboscis.",
    wings: "Thin, membranous, capable of near-silent flight.",
    feeding:
      "Females feed on blood, attracted by body heat, sweat, CO₂, and skin odor. Males feed on plant nectar.",
    behavior: "Most active at dawn and dusk. Drawn to warmth, moisture, and exposed skin.",
    habitat:
      "Stagnant water — gutters, flowerpots, birdbaths, tires, blocked drains — plus shaded vegetation near human activity.",
    signs: [
      "Itchy bite welts at dawn or dusk",
      "Visible larvae wriggling in standing water",
      "Adults resting on shaded walls and ceilings",
    ],
    healthRisks:
      "Major vectors of dengue, malaria, chikungunya, Zika, and West Nile virus, especially during monsoon and post-rainfall periods.",
    airTreatment: {
      assess: "Survey the property for every standing-water source and breeding site.",
      implement:
        "Apply larvicides, residual insecticides, and barrier sprays. Eliminate standing water and install screens.",
      review: "Re-treat through monsoon season and audit drainage monthly.",
    },
    faqs: [
      {
        question: "What attracts mosquitoes to me specifically?",
        answer: "Body heat, exhaled CO₂, sweat lactic acid, and certain skin bacteria all increase attraction.",
      },
      {
        question: "How do I stop them breeding around my home?",
        answer:
          "Empty standing water weekly — pots, gutters, AC trays, buckets — and treat ornamental water features.",
      },
      {
        question: "Why are bites worse after rain?",
        answer:
          "Rain creates dozens of new breeding pools, and a generation can mature in under 10 days post-rainfall.",
      },
    ],
    icon: "Bug",
    accentColor: "danger",
  },

  // ============== CRAWLING INSECTS ==============
  {
    slug: "american-roach",
    name: "American Roach",
    category: "crawling",
    tagline: "The large reddish-brown 'palmetto bug'",
    shortDescription:
      "Large fast-running roaches that can fly short distances and thrive in damp, dark spaces near plumbing — a major contamination risk.",
    scientificName: "Periplaneta americana",
    size: "3.8–5 cm (1.5–2 in)",
    appearance:
      "Reddish-brown with a glossy sheen, oval body, long slender legs, large eyes, and long thin antennae.",
    wings: "Functional in adults; capable of short flights.",
    feeding:
      "Highly opportunistic — crumbs, spills, sweet and starchy foods, proteins in grease, garbage, and decaying matter.",
    behavior:
      "Nocturnal, very fast on the ground, with short flight capability. A single female lays up to 30 egg cases (~40 eggs each).",
    habitat:
      "Warm, moist, dark spaces — drains, sewers, basements, machinery rooms, plumbing voids, and crawlspaces.",
    signs: [
      "Live roaches scurrying when lights flick on",
      "Droppings resembling small black specks or coffee grounds",
      "Musty odor in cabinets or basements",
      "Egg cases (oothecae) tucked in cracks",
    ],
    healthRisks:
      "Spread bacteria and pathogens through droppings, urine, and contact with food surfaces. Trigger allergies and asthma.",
    airTreatment: {
      assess: "Inspect kitchens, bathrooms, basements, and plumbing voids for droppings, egg cases, and live roaches.",
      implement: "Apply gel baits, residual insecticides, and traps; eliminate water sources; seal entry points.",
      review: "Monitor monthly and maintain sanitation, leak repair, and food sealing protocols.",
    },
    faqs: [
      {
        question: "How did they get inside?",
        answer:
          "American roaches commonly enter through drains, sewer lines, vents, and gaps around plumbing.",
      },
      {
        question: "Are sprays from the store enough?",
        answer:
          "Surface sprays kill visible roaches but not the colony. Gel baits and IGRs are needed to break the breeding cycle.",
      },
      {
        question: "Can they really fly?",
        answer:
          "Yes — adults can glide short distances, especially in warm weather. They typically fly to escape or move to a new harborage.",
      },
    ],
    icon: "Bug",
    accentColor: "danger",
  },
  {
    slug: "german-roach",
    name: "German Roach",
    category: "crawling",
    tagline: "The small kitchen-dwelling fast breeder",
    shortDescription:
      "The most common indoor cockroach worldwide — small, light brown, and the fastest-breeding species, requiring professional control.",
    scientificName: "Blattella germanica",
    size: "1.2–1.5 cm (≈ 0.5 in)",
    appearance:
      "Light brown to tan with two dark parallel stripes on the thorax. Small, oval, flat body with long threadlike antennae.",
    feeding:
      "Opportunistic — sugary spills, grease, leftover food, and even glue or toothpaste. Survives on minimal resources.",
    behavior:
      "Hides in tight cracks behind appliances and inside cabinets. Reproduces faster than any other roach species — a single egg case can hold 30+ eggs.",
    habitat:
      "Warm humid spaces near food and water — kitchens, bathrooms, behind refrigerators, dishwashers, and inside cabinetry.",
    signs: [
      "Small light-brown roaches in kitchens at night",
      "Droppings resembling fine coffee grounds",
      "Egg cases (oothecae) glued in tight spaces",
      "Strong musty smell in cabinets",
    ],
    healthRisks:
      "Spread Salmonella, E. coli, and trigger asthma and allergies. The fastest breeders among indoor roaches.",
    airTreatment: {
      assess: "Locate harborages behind appliances, in cabinet hinges, and around plumbing.",
      implement:
        "Apply professional gel baits, IGRs (insect growth regulators), and dust formulations. Avoid sprays that scatter the colony.",
      review: "Re-treat at the egg-hatch interval (4–6 weeks) and audit sanitation.",
    },
    faqs: [
      {
        question: "How did I get them?",
        answer:
          "Most often via grocery deliveries, used appliances, cardboard boxes, or shared plumbing in multi-unit buildings.",
      },
      {
        question: "Why won't store sprays work?",
        answer:
          "Sprays cause survivors to scatter and breed elsewhere. Professional gel baits are eaten and shared through the colony.",
      },
      {
        question: "How long until they're gone?",
        answer: "Heavy infestations typically require 2–3 treatments over 6–8 weeks for full elimination.",
      },
    ],
    icon: "Bug",
    accentColor: "danger",
  },
  {
    slug: "brown-banded-roach",
    name: "Brown-Banded Roach",
    category: "crawling",
    tagline: "The dry-loving roach found high and hidden",
    shortDescription:
      "A small banded roach that prefers dry, warm, elevated locations — often found in bedrooms, electronics, and high cabinets, unlike kitchen roaches.",
    scientificName: "Supella longipalpa",
    size: "1.2–1.5 cm",
    appearance:
      "Light brown with two darker bands across the body and wings. Small, oval, smooth-bodied with threadlike antennae.",
    feeding:
      "Opportunistic — sugary residues, grease, food scraps, paper, and glue. Tolerates very low moisture.",
    behavior:
      "Excellent climbers on vertical surfaces. Unlike German roaches, they prefer dry, elevated, warm spots.",
    habitat:
      "Bedrooms, living rooms, cabinets, ceiling crevices, electronics, and behind picture frames — anywhere warm and dry.",
    signs: [
      "Roaches found high — in cabinets, ceilings, electronics",
      "Egg cases glued under furniture or shelves",
      "Droppings on walls and ceilings, not just floors",
    ],
    healthRisks: "Carry bacteria and pathogens that contaminate food and surfaces; trigger asthma and allergies.",
    airTreatment: {
      assess: "Inspect elevated harborages — top cabinet shelves, ceiling corners, picture backs, electronics.",
      implement: "Apply gel baits, IGRs, and targeted dusts to high and dry harborages. Seal entry cracks.",
      review: "Re-inspect at 4-week intervals across the full home, not just kitchens.",
    },
    faqs: [
      {
        question: "How are they different from German roaches?",
        answer:
          "German roaches stay in damp kitchens and bathrooms; brown-banded roaches spread throughout the whole home and prefer dry, elevated spots.",
      },
      {
        question: "Why are they in my bedroom?",
        answer:
          "They tolerate dry conditions and follow warmth — they often nest near electronics, books, and furniture, far from kitchens.",
      },
      {
        question: "Are they harder to treat?",
        answer:
          "Yes — because they're spread across the whole home, treatment must cover every room, not just food areas.",
      },
    ],
    icon: "Bug",
    accentColor: "danger",
  },
  {
    slug: "ants",
    name: "Ants",
    category: "crawling",
    tagline: "Trail-following invaders of the home",
    shortDescription:
      "Highly social colony insects that follow chemical trails into homes for food and water — control requires targeting the entire colony, not workers.",
    scientificName: "Formicidae",
    size: "2 mm – 5 cm depending on species",
    appearance:
      "Segmented body with a narrow waist; black, brown, red, or yellow. Elbowed antennae; small to prominent eyes.",
    feeding:
      "Sweet residues, grease, protein crumbs, and sugary liquids. Workers retrieve food and share with the colony.",
    behavior:
      "Highly organized — workers forage along chemical trails. Discarded wings near windows often indicate a nearby colony swarming.",
    habitat:
      "Nest in soil, wall voids, behind appliances, under floors, and in cracks. Drawn to undisturbed areas near food and water.",
    signs: [
      "Visible trails of ants moving toward food",
      "Discarded wings on window sills (swarmer ants)",
      "Small piles of soil/sawdust near nest entries",
      "Activity around sinks and pet food",
    ],
    healthRisks:
      "Mechanically transfer bacteria to food. Carpenter ants damage wood structures; fire ants deliver painful stings.",
    airTreatment: {
      assess: "Identify species, trail entry points, and nest location.",
      implement:
        "Apply species-specific baits that workers carry back to the colony. Treat nest sites and seal entry points.",
      review: "Verify trail elimination over 2–3 weeks; spraying alone is rarely enough.",
    },
    faqs: [
      {
        question: "Why does spraying ants make it worse?",
        answer:
          "Spraying kills only foragers and triggers 'budding' — the colony splits into multiple new nests, multiplying the problem.",
      },
      {
        question: "What attracts ants the most?",
        answer:
          "Sugary spills, pet food, grease, and water leaks. Even invisible residue on counters draws scout ants.",
      },
      {
        question: "Do home remedies work?",
        answer:
          "Vinegar and chalk may disrupt trails temporarily but won't eliminate the colony — only species-matched bait does.",
      },
    ],
    icon: "Bug",
    accentColor: "danger",
  },
  {
    slug: "bed-bugs",
    name: "Bed Bugs",
    category: "crawling",
    tagline: "Nighttime blood feeders that hitch on luggage",
    shortDescription:
      "Reddish-brown blood-feeders that hide in mattress seams and furniture, feeding at night — extremely difficult to eliminate without professional treatment.",
    scientificName: "Cimex lectularius",
    size: "4–5 mm (adult)",
    appearance: "Reddish-brown, oval, flat, and wingless. Darkens after a blood meal.",
    feeding:
      "Feed exclusively on blood from humans and warm-blooded animals. Most active at night; can survive weeks without feeding.",
    behavior:
      "Hide in mattress seams, headboards, baseboards, and electrical outlets. Spread through luggage, used furniture, and shared walls.",
    habitat:
      "Bedrooms, hotels, hostels, cinemas, and any location with regular human rest. Presence is unrelated to cleanliness.",
    signs: [
      "Small reddish-brown insects in mattress seams",
      "Dark fecal spots on bedding and walls",
      "Lines of small itchy bite welts on arms or legs",
      "Blood smears on sheets",
      "Shed exoskeletons near sleeping areas",
    ],
    healthRisks:
      "Bites cause itching, sleep disturbance, and anxiety. They are not known to transmit disease but secondary skin infections are common.",
    airTreatment: {
      assess: "Inspect mattress seams, bed frames, baseboards, and adjacent furniture for live bugs, eggs, and stains.",
      implement:
        "Combine targeted insecticides, professional steam/heat treatment, mattress encasements, and laundering at high heat.",
      review: "Re-inspect at 2 and 6 weeks to break the egg-hatch cycle and confirm eradication.",
    },
    faqs: [
      {
        question: "Does an infestation mean my home is dirty?",
        answer:
          "No — bed bugs spread by hitchhiking on luggage and used furniture, completely independent of cleanliness.",
      },
      {
        question: "Can I get rid of them with sprays from the store?",
        answer:
          "DIY treatments rarely succeed. Eggs are resistant to many sprays, and survivors quickly repopulate. Professional heat or chemical treatment is typically required.",
      },
      {
        question: "How can I avoid bringing them home from travel?",
        answer:
          "Inspect hotel mattress seams on arrival, keep luggage off the floor, and bag-and-launder all clothes on hot wash when you return.",
      },
    ],
    icon: "Bug",
    accentColor: "danger",
  },
  {
    slug: "termites",
    name: "Termites",
    category: "crawling",
    tagline: "Silent destroyers of wooden structures",
    shortDescription:
      "Cellulose-eating colony insects that quietly hollow out wood, drywall, and insulation — capable of major structural damage in months.",
    scientificName: "Isoptera",
    size: "4–12 mm",
    appearance:
      "Soft-bodied, pale cream to brown or black, with straight bead-like antennae. Workers most common; soldiers have larger jaws.",
    wings: "Only swarmers have wings — transparent, with uniform vein patterns. Discarded wings are a key infestation sign.",
    feeding:
      "Cellulose — wooden beams, furniture, drywall paper, books, insulation. Drawn to wood with moisture exposure.",
    behavior:
      "Live in large colonies with workers, soldiers, and reproductives. Build mud tubes for protected travel between soil and wood.",
    habitat:
      "Damp, dark spaces — beneath buildings, near leaky pipes, in poorly ventilated voids, and soil close to structural wood.",
    signs: [
      "Mud tubes on foundations or walls",
      "Hollow-sounding or crumbling wood",
      "Piles of discarded wings near windows",
      "Tiny exit holes with frass (sawdust-like debris)",
      "Bubbling or sagging paint",
    ],
    healthRisks:
      "Don't transmit disease but can cause severe structural damage. Damage from a mature colony can total millions of rupees.",
    airTreatment: {
      assess: "Inspect foundations, basements, crawlspaces, and wood structures for tubes, damage, and moisture.",
      implement:
        "Deploy liquid termiticide barriers, in-ground baiting systems, or fumigation depending on species and severity. Repair structural damage and reduce moisture.",
      review: "Annual inspections and bait monitoring; reapply barrier treatments per chemistry lifespan.",
    },
    faqs: [
      {
        question: "How quickly can termites damage my home?",
        answer:
          "A mature colony can cause visible structural damage within months. Annual inspections are critical for early detection.",
      },
      {
        question: "Pre-construction or post-construction treatment — what's the difference?",
        answer:
          "Pre-construction creates a chemical barrier under the foundation slab; post-construction targets active infestations and creates a perimeter barrier.",
      },
      {
        question: "Are flying termites dangerous?",
        answer:
          "They don't bite, but they signal an established colony nearby seeking to spawn new ones. Take swarmers seriously.",
      },
    ],
    icon: "Bug",
    accentColor: "amber",
  },
  {
    slug: "spider",
    name: "Spider",
    category: "crawling",
    tagline: "Eight-legged web builders and hunters",
    shortDescription:
      "Predatory arachnids that control insect populations but become unwanted when webs accumulate or venomous species are found indoors.",
    scientificName: "Araneae",
    size: "2–30 mm depending on species",
    appearance:
      "Eight jointed legs, segmented body with distinct head and abdomen, multiple eyes (typically 8), and venomous fangs.",
    feeding:
      "Flies, moths, ants, beetles, and other small insects — caught in webs or actively hunted.",
    behavior:
      "Web-builders stay in one location; hunters roam for prey. Most species are reclusive and avoid humans.",
    habitat: "Basements, garages, attics, gardens, overgrown vegetation, and sheltered indoor corners with prey access.",
    signs: ["Webs in corners, basements, and attics", "Egg sacs in undisturbed areas", "Direct sightings near light sources"],
    healthRisks:
      "Most species are harmless. A few — like the brown recluse and black widow — have medically significant venom and warrant professional removal.",
    airTreatment: {
      assess: "Survey for webs, egg sacs, and species identification — especially around basements, garages, and gardens.",
      implement:
        "Apply residual insecticides to harborages, remove webs and sacs, control insect prey populations, and seal entry points.",
      review: "Maintain reduced clutter and screen vents to prevent re-entry.",
    },
    faqs: [
      {
        question: "Should I kill every spider I see?",
        answer:
          "Most species are beneficial predators. Identify before acting — only venomous species warrant aggressive control.",
      },
      {
        question: "Why do I keep finding webs?",
        answer:
          "Spiders follow prey. Heavy web buildup signals a hidden insect issue — solving the insect problem reduces spiders.",
      },
      {
        question: "Are spider bites common?",
        answer: "Bites are very rare and most spiders cannot pierce human skin. Avoid handling any spider directly.",
      },
    ],
    icon: "Bug",
    accentColor: "indigo",
  },

  // ============== RODENTS ==============
  {
    slug: "roof-rat",
    name: "Roof Rat",
    category: "rodents",
    tagline: "The agile climber that nests up high",
    shortDescription:
      "Slender black rats that climb expertly and nest in attics, ceilings, and roof voids — major carriers of disease and structural damage.",
    scientificName: "Rattus rattus",
    size: "33–46 cm (13–18 in) including tail",
    appearance:
      "Grayish to black fur with a lighter underside. Large dark eyes and ears, pointed snout, and a long slender tail nearly matching body length.",
    feeding:
      "Grains, fruits, vegetables, meats, and sweets. Targets pantries, warehouses, and kitchens. Contaminates 10× what they eat.",
    behavior:
      "Excellent climbers — nest high in attics, ceilings, and roof voids. Primarily nocturnal; foraging at night.",
    habitat:
      "High sheltered areas — attics, ceilings, behind walls, and rafters. Use insulation, cardboard, and fabric for nests.",
    signs: [
      "Droppings (pointed ends, ~1 cm) in attics and on rafters",
      "Gnaw marks on wires, packaging, and beams",
      "Scratching or running noises from ceilings at night",
      "Greasy rub marks along vertical paths",
    ],
    healthRisks:
      "Transmit leptospirosis, salmonella, hantavirus, and host fleas/ticks. Gnaw electrical wiring, creating fire hazards.",
    airTreatment: {
      assess: "Inspect roofs, attics, ceiling voids, and outdoor climbing routes (vines, wires, branches).",
      implement: "Deploy snap traps, professional bait stations, and seal openings ≥1.5 cm with steel wool/hardware cloth.",
      review: "Trim climbing routes, monitor monthly, and maintain rooftop and attic exclusions.",
    },
    faqs: [
      {
        question: "How do they get on my roof?",
        answer: "Via tree branches, wires, vines, and adjacent walls. Trimming branches 1.5 m back from the roof is critical.",
      },
      {
        question: "How can I tell roof rats from Norway rats?",
        answer:
          "Roof rats are slender with tails longer than the body and nest high; Norway rats are heavier with shorter tails and nest at ground level.",
      },
      {
        question: "Why are they a fire hazard?",
        answer:
          "They gnaw electrical wiring constantly, exposing live wires in attic insulation — a common cause of structural fires.",
      },
    ],
    icon: "Rat",
    accentColor: "rose",
  },
  {
    slug: "norway-rat",
    name: "Norway Rat",
    category: "rodents",
    tagline: "The heavy ground-dwelling burrower",
    shortDescription:
      "Large brown rats that burrow at ground level near foundations, sewers, and waste areas — aggressive scavengers and vectors of disease.",
    scientificName: "Rattus norvegicus",
    size: "40–50 cm (16–20 in); 340–450 g",
    appearance:
      "Brown or grayish-brown fur with a lighter underside. Stocky heavy body, blunt snout, small ears and eyes, and a thick scaly tail shorter than head+body.",
    feeding:
      "Cereals, grains, meat, sugary substances, food remnants, and waste. Requires water daily; survives ~4 days without food.",
    behavior:
      "Ground-dwelling burrower. A breeding pair produces 6–12 litters per year (7–14 pups each), enabling rapid population growth.",
    habitat:
      "Burrows near foundations, basements, sewer lines, storage rooms, under machinery, and in waste zones.",
    signs: [
      "Burrows along foundations and walls",
      "Gnaw marks on wood, wiring, and packaging",
      "Greasy rub marks on baseboards",
      "Droppings (blunt ends, ~2 cm) near food storage",
      "Scratching sounds from lower levels",
    ],
    healthRisks:
      "Transmit leptospirosis, salmonella, plague, and rat-bite fever. Damage wiring, plumbing, and structural materials.",
    airTreatment: {
      assess: "Inspect foundations, basements, sewer connections, and waste areas for burrows and droppings.",
      implement:
        "Deploy professional bait stations, traps, and rodenticides. Seal entry points ≥1.2 cm; remove food and water access.",
      review: "Audit perimeter exclusion monthly and partner with municipal sewer baiting where applicable.",
    },
    faqs: [
      {
        question: "Why do I keep seeing rats even after I bait?",
        answer:
          "Surface baiting alone fails when burrows aren't sealed and food sources remain. Integrated trapping plus exclusion is essential.",
      },
      {
        question: "How big can a colony get?",
        answer:
          "Unchecked, a single breeding pair can produce hundreds of descendants in a year given sufficient food and shelter.",
      },
      {
        question: "Are they aggressive?",
        answer:
          "Cornered Norway rats can bite, especially when defending burrows. Always use traps or call professionals — never handle directly.",
      },
    ],
    icon: "Rat",
    accentColor: "rose",
  },
  {
    slug: "house-mouse",
    name: "House Mouse",
    category: "rodents",
    tagline: "The clever small rodent that fits anywhere",
    shortDescription:
      "Small agile rodents that squeeze through tiny gaps, breed rapidly, and contaminate food while causing electrical and structural damage.",
    scientificName: "Mus musculus",
    size: "12–18 cm (5–7 in) including tail; 15–30 g",
    appearance:
      "Light brown to gray with a lighter underside. Long thin scaly tail, large ears, small dark eyes, slender body, pointed snout.",
    feeding:
      "Grains, sweets, meats, dairy, and pet food. Strong teeth gnaw through packaging; opportunistic and persistent foragers.",
    behavior:
      "Fast runners and excellent climbers. A pair can produce up to 10 litters per year (4–8 young each). Squeeze through openings as small as a pencil.",
    habitat:
      "Dark, quiet spaces — storage areas, under shelving, behind appliances, in walls and cabinets near food and warmth.",
    signs: [
      "Small droppings (rice-grain sized) in drawers and pantries",
      "Gnaw marks on packaging and wires",
      "Shredded paper or fabric nesting material",
      "Scurrying sounds in walls or ceilings at night",
      "Distinctive musky odor in cabinets",
    ],
    healthRisks:
      "Spread Salmonella, Hantavirus, and Lymphocytic choriomeningitis. Contaminate food and damage wiring (fire risk).",
    airTreatment: {
      assess: "Inspect kitchens, pantries, basements, attics, walls, and foundations for droppings and entry points.",
      implement:
        "Deploy snap traps and bait stations; seal openings ≥6 mm with steel wool and caulk; store food in airtight containers.",
      review: "Monitor weekly during cool months and maintain exclusion. Mice repopulate quickly if entry points re-open.",
    },
    faqs: [
      {
        question: "How small a gap can they fit through?",
        answer: "A mouse can squeeze through a 6 mm (¼-inch) gap — about the diameter of a pencil.",
      },
      {
        question: "Do ultrasonic repellents work?",
        answer: "Independent studies show very limited effect. Trapping plus exclusion remains the proven method.",
      },
      {
        question: "Why do I have mice if my house is clean?",
        answer:
          "Mice seek warmth as much as food. Cool seasons drive them indoors regardless of cleanliness, especially through unsealed gaps near pipes and vents.",
      },
    ],
    icon: "Rat",
    accentColor: "rose",
  },
  {
    slug: "mongoose",
    name: "Mongoose",
    category: "rodents",
    tagline: "Agile predator that scavenges urban edges",
    shortDescription:
      "Slender carnivorous mammals that hunt rodents and snakes — beneficial predators that occasionally become urban nuisances near waste and food storage.",
    scientificName: "Herpestidae",
    size: "30–76 cm (12–30 in); 2.3–5.5 kg",
    appearance:
      "Long slender body with short legs, bushy tail, small alert eyes, and a long narrow snout for hunting.",
    feeding:
      "Small mammals, insects, birds, reptiles, and eggs. Will scavenge food waste in urban environments.",
    behavior:
      "Agile climbers and fast runners. Mostly solitary; some species form small groups. Adaptable to urban settings.",
    habitat:
      "Hidden corners — storage areas, under heavy machinery, around debris piles, drains, and facility perimeters.",
    signs: ["Burrows near foundations or debris", "Tracks and droppings", "Disturbed garbage and food storage"],
    healthRisks:
      "Generally non-aggressive toward humans but can carry parasites and bite if cornered. Useful predators of rodents and snakes.",
    airTreatment: {
      assess: "Identify activity points, attractants, and entry routes around the property.",
      implement:
        "Use humane traps and exclusion; partner with wildlife services for relocation. Secure food sources and seal entry points.",
      review: "Maintain exclusion and waste management; mongooses provide pest control where coexistence is safe.",
    },
    faqs: [
      {
        question: "Are mongooses harmful?",
        answer:
          "Generally not — they help control rodents and snakes. They become pests when food waste, pet food, or poultry attracts them.",
      },
      {
        question: "Can they enter my home?",
        answer: "Rarely — they prefer outdoor cover but may enter open garages or storage areas in search of food.",
      },
      {
        question: "Should I kill a mongoose I find?",
        answer: "No. Many species are protected. Use exclusion and humane removal via wildlife services.",
      },
    ],
    icon: "Rat",
    accentColor: "amber",
  },

  // ============== REPTILES ==============
  {
    slug: "lizard",
    name: "House Lizard",
    category: "reptiles",
    tagline: "Harmless wall-clinging insect predator",
    shortDescription:
      "Small geckos that cling to walls and ceilings hunting insects — harmless to humans but unwanted indoors due to droppings and visibility.",
    scientificName: "Hemidactylus frenatus",
    size: "10–15 cm (4–6 in)",
    appearance:
      "Brown or gray with speckled patterns, slim elongated body, flexible tail, four clawed legs for climbing, large round eyes.",
    feeding: "Ants, flies, moths, beetles, and other small invertebrates. Hunt mainly at night.",
    behavior:
      "Active mostly after dusk. Can shed and regenerate their tails when threatened. Cling to walls and ceilings via specialized toe pads.",
    habitat: "Warm sheltered indoor corners — near walls, ceilings, light fixtures (where insects gather), and storage zones.",
    signs: [
      "Small dark droppings (with white tip) on walls and shelves",
      "Shed skin in undisturbed corners",
      "Direct sightings near lights at night",
    ],
    healthRisks: "Harmless and rarely bite. Droppings can be a hygiene concern in food preparation areas.",
    airTreatment: {
      assess: "Identify entry points and insect attractants around windows, doors, and lights.",
      implement: "Apply repellents, install screens, seal cracks, and reduce indoor insect populations (their food source).",
      review: "Maintain exterior light management and insect control to keep populations down.",
    },
    faqs: [
      {
        question: "Are house lizards dangerous?",
        answer: "No. They are harmless and even helpful by reducing insects. Concern is mainly cosmetic and hygienic.",
      },
      {
        question: "Why are there so many in my home?",
        answer: "They follow insect prey. Reducing indoor insects and outdoor lighting cuts populations significantly.",
      },
      {
        question: "Will killing them backfire?",
        answer:
          "If insect prey remains, new lizards will replace them. Long-term control requires reducing insect attractants.",
      },
    ],
    icon: "Worm",
    accentColor: "forest",
  },
  {
    slug: "monitor-lizard",
    name: "Monitor Lizard",
    category: "reptiles",
    tagline: "Large reptile that scavenges urban edges",
    shortDescription:
      "Large powerful reptiles that climb, swim, and scavenge — generally non-aggressive but capable of strong defensive bites and tail strikes if cornered.",
    scientificName: "Varanus",
    size: "20 cm – 3 m depending on species",
    appearance:
      "Long muscular body, powerful tail, sharp claws, forked tongue, angular head, and earthy brown/grey/green coloration with speckles or stripes.",
    feeding:
      "Opportunistic — food waste, rodents, birds, insects, eggs, and carcasses. Locate prey by scent.",
    behavior: "Strong swimmers, climbers, and runners. Keen scent and vision for hunting.",
    habitat:
      "Dense vegetation, abandoned buildings, debris piles, drains, culverts, rooftops, walls, and crevices near water.",
    signs: [
      "Tracks and burrows in soft soil",
      "Disturbed vegetation or garbage",
      "Direct sightings near water or gardens",
    ],
    healthRisks:
      "Generally non-aggressive but bites, scratches, and tail strikes can cause significant injury when cornered. Curious pets are at risk.",
    airTreatment: {
      assess: "Survey for activity, shelter spots, and food sources on the property.",
      implement: "Deploy humane traps and exclusion; secure food/waste; coordinate with wildlife services for relocation.",
      review: "Maintain landscape clearing and waste discipline to discourage settlement.",
    },
    faqs: [
      {
        question: "Are monitor lizards dangerous?",
        answer:
          "Generally non-aggressive, but their size and strength can injure pets or people if cornered. Never approach one directly.",
      },
      {
        question: "Why do they enter my property?",
        answer: "They're drawn by rodents, food waste, water, and sheltered hiding spots like debris piles and drains.",
      },
      {
        question: "Are they protected?",
        answer:
          "Many species are protected under wildlife laws. Removal must be done humanely by trained wildlife professionals.",
      },
    ],
    icon: "Worm",
    accentColor: "forest",
  },
  {
    slug: "snake",
    name: "Snake",
    category: "reptiles",
    tagline: "Stealth hunters drawn by rodent prey",
    shortDescription:
      "Limbless reptiles that follow rodent prey into homes and gardens — most are harmless but venomous species require immediate professional handling.",
    scientificName: "Serpentes",
    size: "A few cm to several meters depending on species",
    appearance:
      "Elongated limbless body covered in smooth or keeled scales, forked tongue, prominent eyes with vertical or round pupils. Patterns: plain, striped, banded, or spotted.",
    feeding:
      "Opportunistic predators of rodents (mice, rats), birds, eggs, insects, and amphibians.",
    behavior:
      "Stealthy strike hunters. Most active in warmer months; some enter dormancy (brumation) in cool seasons.",
    habitat: "Overgrown gardens, debris, abandoned buildings, drainage systems, and warm areas near HVAC or heated pipes.",
    signs: ["Shed skins in concealed areas", "Tracks in dust or soil", "Sightings near rodent activity or water"],
    healthRisks:
      "Venomous species can cause life-threatening bites. Even non-venomous snakes can deliver painful bites and threaten small pets.",
    airTreatment: {
      assess: "Inspect for activity, prey populations (rodents), water access, and shelter spots.",
      implement: "Deploy snake traps/repellents, control rodent prey populations, clear debris, and seal entry points.",
      review: "Maintain landscape and rodent control year-round; never attempt DIY removal of snakes.",
    },
    faqs: [
      {
        question: "I found a snake indoors — what do I do?",
        answer:
          "Keep distance, secure pets and children in another room, and call a professional wildlife handler immediately. Do not attempt capture.",
      },
      {
        question: "How do I know if it's venomous?",
        answer:
          "Pit vipers have triangular heads and slit pupils, but identification is unreliable to non-experts. Treat every snake as potentially dangerous.",
      },
      {
        question: "Why do snakes appear in my yard?",
        answer:
          "Almost always because of rodents. Eliminating mice/rats and clearing dense cover makes a property unattractive to snakes.",
      },
    ],
    icon: "Worm",
    accentColor: "forest",
  },

  // ============== VERTEBRATES ==============
  {
    slug: "birds",
    name: "Birds",
    category: "vertebrates",
    tagline: "Pigeons, sparrows & roof-nesting flocks",
    shortDescription:
      "Urban birds — primarily pigeons — that roost on buildings and create extensive damage from droppings, nesting, and disease vectors.",
    scientificName: "Various (Columba livia, Passer domesticus, etc.)",
    size: "Pigeons: 30–35 cm; sparrows smaller",
    appearance:
      "Gray, brown, or black plumage with species-specific markings. Pigeons have iridescent neck feathers; short to medium beaks for pecking.",
    feeding:
      "Discarded food scraps, grains, seeds, fruit peels, sugary residues, insects, and processed human food.",
    behavior:
      "Often flock; vocal with repetitive calls. Most active in spring and fall during breeding and migration.",
    habitat:
      "Rooftops, ledges, balconies, building crevices, drain pipes, structural gaps, and abandoned warehouses.",
    signs: [
      "Accumulated droppings on ledges, AC units, and walkways",
      "Nesting material (twigs, leaves) in gutters and sills",
      "Frequent flock activity in one area",
      "Damaged or blocked rainwater pipes",
    ],
    healthRisks:
      "Droppings transmit histoplasmosis, cryptococcosis, and salmonella. Damage signage, AC units, and gutters; corrode building surfaces (acidic droppings).",
    airTreatment: {
      assess: "Survey rooftops, ledges, signage, and balconies for nesting and roosting sites.",
      implement:
        "Install bird spikes, netting, electric track, or visual deterrents. Remove nests outside of breeding season per local regulations.",
      review: "Inspect annually before breeding seasons; repair gaps and maintain deterrent integrity.",
    },
    faqs: [
      {
        question: "Are bird droppings really a health risk?",
        answer:
          "Yes. Dried droppings release fungal spores that cause respiratory diseases — especially serious in HVAC intakes.",
      },
      {
        question: "Are spikes humane?",
        answer:
          "Bird spikes physically prevent landing without harming birds. They are widely accepted as humane exclusion.",
      },
      {
        question: "Are some species protected?",
        answer:
          "Yes — many bird species are legally protected. Active nests with eggs typically cannot be removed; we plan removal around legal cycles.",
      },
    ],
    icon: "Bird",
    accentColor: "indigo",
  },
  {
    slug: "cats",
    name: "Stray Cats",
    category: "vertebrates",
    tagline: "Feral colonies near food and shelter",
    shortDescription:
      "Feral and stray cats that establish colonies in alleys, basements, and rooftops — carriers of parasites and a wildlife concern, requiring humane management.",
    scientificName: "Felis catus",
    size: "9–11 in body length; 6–10 lb (urban average)",
    appearance:
      "Slender agile body with retractable claws, independently moving pointed ears, and long balancing tails.",
    feeding:
      "Hunt small mammals and birds, scavenge waste, and consume insects when other sources are scarce.",
    behavior: "Grooming, territorial marking, and stalking are characteristic. Mostly nocturnal, especially when feral.",
    habitat:
      "Staircases, basements, rooftops, gardens, alleys, drainage pipes, sheds, and quiet storage areas.",
    signs: [
      "Sightings of unfamiliar cats around the property",
      "Strong urine marking odors near walls",
      "Disturbed garbage or pet food bowls",
      "Kittens in sheltered spots",
    ],
    healthRisks:
      "Carry toxoplasmosis, fleas, and ringworm. Hunting impacts local bird and small-mammal populations.",
    airTreatment: {
      assess: "Identify activity, feeding points, shelter sites, and population size.",
      implement:
        "Humane traps, motion-activated sprinklers, ultrasonic deterrents, secured food sources, and coordination with animal welfare/TNR programs.",
      review: "Sustain TNR (trap-neuter-return) where possible and maintain entry-point exclusion.",
    },
    faqs: [
      {
        question: "Why are stray cats considered a pest?",
        answer:
          "Large unmanaged colonies spread parasites, mark territory aggressively, and impact native bird populations.",
      },
      {
        question: "Can I just remove them?",
        answer:
          "Removal alone usually fails — new cats fill the vacuum. Trap-neuter-return programs are the proven long-term solution.",
      },
      {
        question: "What can I do at my property?",
        answer:
          "Secure trash, never leave food out, seal building gaps, and use humane deterrents around entry points.",
      },
    ],
    icon: "Cat",
    accentColor: "amber",
  },
  {
    slug: "dogs",
    name: "Stray Dogs",
    category: "vertebrates",
    tagline: "Loose dogs requiring humane management",
    shortDescription:
      "Stray and loose dogs in urban areas that pose bite risks and disease vectors — requiring humane handling, vaccination, and animal control coordination.",
    scientificName: "Canis lupus familiaris",
    size: "Highly variable — small breeds 2–6 lb to large breeds 150 lb+",
    appearance:
      "Highly variable across breeds — fur length, color, ear shape, and body size differ widely.",
    feeding:
      "Omnivorous — scavenge food waste, hunt small animals, and accept handouts. Fed dogs in colonies become bolder.",
    behavior: "Social and territorial. Loose dogs may form packs, increasing bite and intimidation risk.",
    habitat:
      "Apartments, neighborhoods, parks, sidewalks, and green areas. Strays gather where food and shelter are available.",
    signs: [
      "Loose dogs traveling alone or in packs",
      "Aggressive territorial behavior at gates and bins",
      "Disturbed garbage and food storage",
      "Barking through the night near shelter spots",
    ],
    healthRisks:
      "Bite injuries are the primary concern. Strays can transmit rabies, leptospirosis, and parasites including ticks and fleas.",
    airTreatment: {
      assess: "Identify activity zones, feeding sites, and population size.",
      implement:
        "Humane traps, secure waste, partner with municipal animal control, and support vaccination/sterilization programs.",
      review: "Coordinate ongoing vaccination cycles and maintain perimeter exclusion.",
    },
    faqs: [
      {
        question: "Should I feed strays?",
        answer:
          "Uncoordinated feeding grows colonies and increases conflict. Support managed feeding through registered welfare programs instead.",
      },
      {
        question: "What's the rabies risk?",
        answer:
          "Pakistan has significant stray-dog rabies. Any bite — even minor — should receive immediate medical attention and post-exposure vaccination.",
      },
      {
        question: "How do I keep strays off my property?",
        answer:
          "Secure all food and waste, install gates and gap exclusions, and coordinate with municipal animal control for persistent strays.",
      },
    ],
    icon: "Dog",
    accentColor: "amber",
  },
];

// Curated subset for homepage — preserves prior 6-pest residential focus
export const featuredResidentialPests = pestLibrary.filter((p) =>
  ["ants", "bed-bugs", "german-roach", "mosquitoes", "house-mouse", "norway-rat"].includes(p.slug)
);
