/* ============================================================
   PLATR — EDITABLE CONFIG
   ============================================================ */
export const CONFIG = {
  whatsappNumber: "917021266095",
  email: "hello@platr.in",
  brand: "PLATR",
} as const;

export const CATEGORIES = [
  { id: "office-lunch", name: "office lunch", icon: "🍱", desc: "reliable daily meals for teams of any size, delivered on time, every time." },
  { id: "board-meetings", name: "board meetings", icon: "☕", desc: "polished catering that matches the standard of your boardroom." },
  { id: "corporate-events", name: "corporate events", icon: "🎪", desc: "end-to-end food management for offsites, team outings, and celebrations." },
  { id: "conferences", name: "conferences", icon: "🎤", desc: "scalable catering for seminars, summits, and multi-day conferences." },
  { id: "festive-occasions", name: "festive occasions", icon: "✨", desc: "curated menus for diwali, eid, christmas, and every celebration in between." },
  { id: "custom", name: "custom requirement", icon: "✏️", desc: "something unique? tell us what you need and we'll build a bespoke solution." },
] as const;

export type PackageTier = {
  tier: string;
  name: string;
  items: string[];
  price: string;
  featured?: boolean;
};

/* ============================================================
   PLACEHOLDER CONTENT — EDIT ME
   Fill these with real numbers, client logos, photos, and quotes
   once available. Used by the homepage Showcase / Social Proof.
   ============================================================ */

// Headline figures shown in the hero trust strip — grounded in real execution.
export const STATS = [
  { value: "5,000+", label: "corporate guests served" },
  { value: "4,000-pax", label: "international conference executed" },
  { value: "5+", label: "reputed institutions served" },
  { value: "100%", label: "end-to-end execution" },
] as const;

// "Built on Real Execution" — credibility section data.
// Reputed institutions & enterprises served, shown as a client logo wall.
// Drop transparent-background logo files in /public/logos/ with these names.
// Until a file exists, the component falls back to the client name as text.
export const CLIENTS = [
  { name: "TIFR", logo: "/logos/tifr.png" },
  { name: "VVF India Ltd", logo: "/logos/vvf.png" },
  { name: "Lodha Foundation", logo: "/logos/lodha.png" },
  { name: "TISS", logo: "/logos/tiss.png" },
  { name: "USV", logo: "/logos/usv.png" },
] as const;

// Enterprise operations imagery (reuses existing assets — swap for real photos later).
export const OPERATIONS = [
  { image: "/images/corporate-event.png", label: "Corporate events & conferences", sub: "Large-format setups and multi-day catering." },
  { image: "/images/boardroom-catering.png", label: "Executive & boardroom dining", sub: "Premium plated service for leadership." },
  { image: "/images/carousel-1.png", label: "Large-scale food operations", sub: "High-volume meals, delivered on time." },
] as const;

// Secondary scrolling marquee — capability & scale phrases.
export const CAPABILITIES = [
  "Corporate Catering Experience",
  "Institutional Events",
  "Large-Scale Food Operations",
  "5,000+ Corporate Guests Served",
  "4,000-Pax International Conference Executed",
] as const;

// Illustrative sample testimonials with realistic names — swap in verified
// customer quotes when available. (Not attributed to the real named clients.)
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { quote: "One inquiry and PLATR handled vendors, menus and logistics for our 400-person offsite. We didn't make a single follow-up call.", name: "Priya Nair", role: "Head of People Ops", company: "Aarvi Technologies" },
  { quote: "Daily lunches for the whole office finally feel effortless — consistent quality, transparent pricing, and a single point of contact.", name: "Rohan Deshpande", role: "Admin & Facilities Manager", company: "Sankalp Industries" },
  { quote: "The boardroom spreads genuinely impressed our investors. Premium feel, delivered without the usual coordination headache.", name: "Ananya Iyer", role: "Executive Assistant", company: "Vaayu Analytics" },
];

export const PACKAGES: Record<string, PackageTier[]> = {
  "office-lunch": [
    { tier: "01", name: "essential", items: ["rotating weekly menu", "1 main + 2 sides + dal + rice", "disposable packaging"], price: "₹180 / pax" },
    { tier: "02", name: "premium", items: ["chef-curated weekly menu", "2 mains + 3 sides + dessert", "eco-friendly containers", "dedicated account manager"], price: "₹320 / pax", featured: true },
    { tier: "03", name: "signature", items: ["bespoke menu planning", "multi-cuisine rotation", "live counters available", "steel crockery + service staff"], price: "₹500 / pax" },
  ],
  "board-meetings": [
    { tier: "01", name: "essential", items: ["tea, coffee & cookies", "sandwich platter", "mineral water & napkins"], price: "₹350 / pax" },
    { tier: "02", name: "premium", items: ["gourmet finger food spread", "artisanal beverages", "plated desserts", "service staff included"], price: "₹650 / pax", featured: true },
    { tier: "03", name: "signature", items: ["full-course sit-down meal", "premium crockery & linen", "sommelier / barista"], price: "₹1,200 / pax" },
  ],
  "corporate-events": [
    { tier: "01", name: "essential", items: ["buffet setup for 50+ pax", "4-item menu + beverages", "basic decor & setup"], price: "₹450 / pax" },
    { tier: "02", name: "premium", items: ["multi-cuisine buffet", "live counters (2)", "themed decor & lighting", "event coordinator on-site"], price: "₹800 / pax", featured: true },
    { tier: "03", name: "signature", items: ["full event production", "celebrity chef options", "premium bar & mixology"], price: "₹1,500 / pax" },
  ],
  "conferences": [
    { tier: "01", name: "essential", items: ["tea breaks + working lunch", "box meals for 100+ pax", "signage & logistics"], price: "₹400 / pax" },
    { tier: "02", name: "premium", items: ["multi-day catering plan", "dietary-tagged menus", "hydration stations", "on-site manager"], price: "₹700 / pax", featured: true },
    { tier: "03", name: "signature", items: ["VIP speaker dining", "gala dinner service", "full F&B management"], price: "₹1,100 / pax" },
  ],
  "festive-occasions": [
    { tier: "01", name: "essential", items: ["festival sweets box", "branded packaging", "pan-city delivery"], price: "₹250 / box" },
    { tier: "02", name: "premium", items: ["artisanal hamper", "custom branding", "office celebration catering", "festive decor add-on"], price: "₹600 / box", featured: true },
    { tier: "03", name: "signature", items: ["luxury gift hamper", "full celebration event", "entertainment & theming"], price: "₹1,200 / box" },
  ],
  "custom": [],
};
