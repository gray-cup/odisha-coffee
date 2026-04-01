import type { ProcessingMethod } from "./farms";

export type RoastLevel = "light" | "medium" | "medium-dark" | "dark";

export type Product = {
  id: string;
  name: string;
  farmId: string;
  farmName: string;
  region: string;
  processing: ProcessingMethod;
  variety: string;
  roastLevel: RoastLevel;
  flavorNotes: string[];
  description: string;
  brewingNotes: string;
  availability: "in-stock" | "limited" | "seasonal";
  weightOptions: string[]; // e.g. ["250g", "500g", "1kg"]
  exportAvailable: boolean;
  minOrderExport?: string;
};

export const products: Product[] = [
  {
    id: "oak-winds-washed-arabica",
    name: "Oak Winds Washed Arabica",
    farmId: "oak-winds-farm",
    farmName: "Oak Winds Farm",
    region: "Pottangi, Koraput",
    processing: "washed",
    variety: "Arabica SLN 9",
    roastLevel: "light",
    flavorNotes: ["Bergamot", "Peach Tea", "Honey Crisp", "Bright Acidity"],
    description:
      "One of Odisha's highest-grown washed Arabicas, from Oak Winds Farm at 1150–1450m elevation in Pottangi. Extended wet fermentation (36 hours) followed by slow shade drying on raised beds yields a cup of exceptional brightness and floral complexity. Limited lots available per season.",
    brewingNotes:
      "Best as pour-over or V60. Use water at 90–92°C. Ratio 1:16. Allow 3–4 minutes total brew time. The light roast expresses the citrus and floral character most fully.",
    availability: "limited",
    weightOptions: ["250g", "500g"],
    exportAvailable: true,
    minOrderExport: "50kg green beans",
  },
  {
    id: "dream-hill-honey-arabica",
    name: "Dream Hill Honey Arabica",
    farmId: "dream-hill-coffee",
    farmName: "Dream Hill Coffee — Saptagiri Plantation",
    region: "Pottangi, Koraput",
    processing: "honey",
    variety: "Arabica Catuai",
    roastLevel: "medium",
    flavorNotes: ["Jasmine", "Golden Raisin", "Orange Blossom", "Caramel Finish"],
    description:
      "Honey-processed Catuai from the Saptagiri Plantation's highest blocks. The 72-hour mucilage drying on raised beds in Koraput's dry-season sun concentrates natural fruit sugars, delivering a sweet, complex cup that balances floral aromatics with honeyed texture.",
    brewingNotes:
      "Excellent as Chemex or AeroPress. Water at 93°C. The honey process creates a syrupy body that shines with longer extraction. Try also as a cold brew for a deeply sweet, low-acidity experience.",
    availability: "seasonal",
    weightOptions: ["250g", "500g", "1kg"],
    exportAvailable: true,
    minOrderExport: "100kg green beans",
  },
  {
    id: "koraput-a1-natural-robusta",
    name: "Koraput A-1 Natural Robusta",
    farmId: "koraput-a1-coffee",
    farmName: "Koraput A-1 Coffee",
    region: "Koraput",
    processing: "natural",
    variety: "Robusta",
    roastLevel: "medium-dark",
    flavorNotes: ["Dark Chocolate", "Dark Cherry", "Earthy", "Full Body"],
    description:
      "Natural-processed Robusta from one of Odisha's oldest estates. Cherries are dried whole for 25–30 days on raised beds, developing a rich, fruit-integrated profile that makes this an exceptional espresso base or dark roast blend ingredient. Export quantities available.",
    brewingNotes:
      "Exceptional as espresso or moka pot. The natural process creates crema density and sweetness that pairs brilliantly with milk. As filter, use medium-dark roast at 91°C for a chocolatey, smooth cup.",
    availability: "in-stock",
    weightOptions: ["500g", "1kg", "5kg", "25kg"],
    exportAvailable: true,
    minOrderExport: "500kg green beans",
  },
  {
    id: "annapurna-washed-arabica",
    name: "Annapurna Washed Arabica",
    farmId: "annapurna-coffee-estate",
    farmName: "Annapurna Coffee Estate",
    region: "Sunabeda, Koraput",
    processing: "washed",
    variety: "Arabica Catuai",
    roastLevel: "light",
    flavorNotes: ["Floral", "Peach", "Light Caramel", "Delicate"],
    description:
      "Grown on the Sunabeda plateau at over 1000m, this washed Catuai from Annapurna Estate expresses the cool-climate character of Odisha's highlands. Clean fermentation, thorough washing, and extended raised-bed drying produce a cup with remarkable clarity.",
    brewingNotes:
      "Pour-over or Kalita Wave. Grind medium-fine. Water at 91°C. The delicate floral notes reward lower water temperature and careful extraction control.",
    availability: "in-stock",
    weightOptions: ["250g", "500g", "1kg"],
    exportAvailable: true,
    minOrderExport: "100kg green beans",
  },
  {
    id: "koraput-organic-natural",
    name: "Koraput Organic Natural",
    farmId: "koraput-organic",
    farmName: "Koraput Organic",
    region: "Semiliguda, Koraput",
    processing: "natural",
    variety: "Arabica S795",
    roastLevel: "medium",
    flavorNotes: ["Green Apple", "Floral", "Clean Sweetness", "Bright"],
    description:
      "Certified organic Arabica S795 from Koraput Organic estate, grown without synthetic inputs under natural forest canopy. The natural processing brings out the variety's inherent sweetness while maintaining the clean, transparent character of the estate's high-altitude terroir.",
    brewingNotes:
      "Excellent across multiple brew methods. Particularly beautiful as a cold brew or AeroPress. The organic character and clean terroir translate well to any extraction style.",
    availability: "in-stock",
    weightOptions: ["250g", "500g", "1kg"],
    exportAvailable: true,
    minOrderExport: "200kg green beans",
  },
  {
    id: "brown-valley-honey-blend",
    name: "Brown Valley Honey Blend",
    farmId: "brown-valley-coffee-estate",
    farmName: "Brown Valley Coffee Estate",
    region: "Boipariguda, Koraput",
    processing: "honey",
    variety: "Arabica S795 & Arabica Catimor",
    roastLevel: "medium",
    flavorNotes: ["Milk Chocolate", "Hazelnut", "Stone Fruit", "Smooth"],
    description:
      "A carefully constructed honey-processed blend from Brown Valley Estate combining S795 and Catimor varieties. The blend balances S795's chocolate depth with Catimor's stone-fruit brightness, processed together on shared drying beds to create an integrated, harmonious cup.",
    brewingNotes:
      "Versatile across espresso and filter. As espresso: water at 93°C, 25-second shot. As filter: V60 or Chemex at 93°C, medium grind for a smooth, satisfying cup.",
    availability: "in-stock",
    weightOptions: ["250g", "500g", "1kg", "5kg"],
    exportAvailable: true,
    minOrderExport: "300kg green beans",
  },
  {
    id: "panigrahi-washed-s795",
    name: "Panigrahi Foundation Washed S795",
    farmId: "panigrahi-agro-foundation",
    farmName: "Panigrahi Agro Foundation",
    region: "Semiliguda, Koraput",
    processing: "washed",
    variety: "Arabica S795",
    roastLevel: "medium",
    flavorNotes: ["Dark Cherry", "Walnut", "Caramel", "Balanced"],
    description:
      "Lot-separated washed S795 from Panigrahi Agro Foundation, processed through their state-of-the-art wet mill with careful fermentation control monitored via pH testing. This is Odisha washed coffee at its most refined — structured, balanced, and deeply expressive of the Semiliguda terroir.",
    brewingNotes:
      "Ideal for pour-over or filter coffee. Medium-light roast recommended. Water at 92°C, medium grind. The balanced acidity and caramel sweetness make this an excellent all-day filter coffee.",
    availability: "in-stock",
    weightOptions: ["250g", "500g", "1kg"],
    exportAvailable: true,
    minOrderExport: "150kg green beans",
  },
  {
    id: "maa-mangala-honey-arabica",
    name: "Maa Mangala Honey Arabica",
    farmId: "maa-mangala-coffee-plantation",
    farmName: "Maa Mangala Coffee Plantation",
    region: "Jeypore, Koraput",
    processing: "honey",
    variety: "Arabica S795",
    roastLevel: "medium",
    flavorNotes: ["Mango", "Honey", "Soft Spice", "Tropical Sweetness"],
    description:
      "Honey-processed S795 from the Maa Mangala estate in Jeypore. The tropical microclimate of this valley imparts distinctive mango-like sweetness to the cherry, amplified by the honey processing method. A standout Odisha coffee for buyers seeking unusual, origin-expressive lots.",
    brewingNotes:
      "Best as AeroPress or Chemex. Water at 92°C. The honey processing creates a thick, syrupy body. Experiment with finer grind settings to unlock the full tropical sweetness.",
    availability: "seasonal",
    weightOptions: ["250g", "500g"],
    exportAvailable: false,
  },
  {
    id: "odisha-export-grade-green-robusta",
    name: "Odisha Export Grade — Green Robusta",
    farmId: "koraput-a1-coffee",
    farmName: "Multiple OCGA Estates",
    region: "Koraput District",
    processing: "washed",
    variety: "Robusta",
    roastLevel: "medium-dark",
    flavorNotes: ["Neutral", "Clean", "Full Body", "Consistent"],
    description:
      "A pooled export-grade green bean offering sourced from multiple OCGA member estates in Koraput. Lot-tested, screen-sorted, and moisture-certified (10–12%). Supplied as raw green beans, ideal for import roasters, commodity buyers, and specialty coffee businesses seeking consistent Indian Robusta at scale.",
    brewingNotes:
      "For roasters: recommended development time 20–22% in medium roast profile. Excellent for espresso blends, instant coffee production, and value-specialty blending.",
    availability: "in-stock",
    weightOptions: ["25kg", "60kg jute bag", "FCL container"],
    exportAvailable: true,
    minOrderExport: "1000kg green beans",
  },
  {
    id: "odisha-export-grade-green-arabica",
    name: "Odisha Export Grade — Green Arabica",
    farmId: "koraput-a1-coffee",
    farmName: "Multiple OCGA Estates",
    region: "Koraput District",
    processing: "washed",
    variety: "Arabica S795",
    roastLevel: "light",
    flavorNotes: ["Clean", "Mild Acidity", "Chocolate", "Consistent"],
    description:
      "Traceable export-grade washed Arabica S795 sourced from verified OCGA member farms across Koraput. Phytosanitary certified, ICO registered, and available with full lot documentation. Supplied as screened green beans (Screen 15+), ideal for specialty importers and roasters sourcing Indian-origin Arabica.",
    brewingNotes:
      "For roasters: well-suited to medium and medium-light roast profiles. The S795 variety develops excellent chocolate and mild-fruit character when roasted carefully to first crack +30 seconds.",
    availability: "in-stock",
    weightOptions: ["25kg", "60kg jute bag", "FCL container"],
    exportAvailable: true,
    minOrderExport: "500kg green beans",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export const roastLabels: Record<RoastLevel, string> = {
  light: "Light Roast",
  medium: "Medium Roast",
  "medium-dark": "Medium-Dark Roast",
  dark: "Dark Roast",
};

export const availabilityLabels: Record<Product["availability"], string> = {
  "in-stock": "In Stock",
  limited: "Limited",
  seasonal: "Seasonal",
};

export const availabilityColors: Record<Product["availability"], string> = {
  "in-stock": "bg-[#3A7D44] text-white",
  limited: "bg-[#E3A008] text-black",
  seasonal: "bg-[#1E3A8A] text-white",
};
