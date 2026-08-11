export const ORG = {
  name: "Simply Feminine Network",
  short: "SFN",
  tagline: "Restoring Dignity. Empowering Women. Transforming Communities.",
  email: "simplyfemininenetwork@gmail.com",
  phoneKe: "+254 769 054 165",
  phoneDe: "+49 1511 565 3888",
  founded: 2021,
  founder: "Agnes Vorreiter",
  ceo: "Tabitha Mwelu John",
  award: "NGO of the Year — Pride of Kenya Awards 2025",
};

export const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Events", to: "/events" },
  { label: "Stories", to: "/stories" },
  { label: "Gallery", to: "/gallery" },
  { label: "Partners", to: "/partners" },
  { label: "Volunteer", to: "/volunteer" },
  { label: "Contact", to: "/contact" },
] as const;

export const STATS = [
  { value: 1000, suffix: "+", label: "Lives impacted" },
  { value: 5, suffix: "+", label: "Prison outreaches" },
  { value: 10000, suffix: "+", label: "Sanitary pads distributed" },
] as const;

export const EVENTS = [
  {
    id: "gala",
    title: "3rd Annual Charity Gala Ball",
    city: "Nairobi, Kenya",
    venue: "Black-tie philanthropic gala",
    date: "2026-11-28T18:00:00+03:00",
    dateLabel: "28 Nov 2026",
    day: "28",
    month: "Nov",
    blurb:
      "An evening of accountability and celebration — diplomats, corporate partners and public figures gather to finance women's health, endometriosis awareness and GBV response.",
  },
  {
    id: "summit",
    title: "Women's Leadership & Empowerment Summit",
    city: "Berlin, Germany",
    venue: "Schloss Hotel Berlin",
    date: "2026-06-14T10:00:00+02:00",
    dateLabel: "14 Jun 2026",
    day: "14",
    month: "Jun",
    blurb:
      "African diaspora leaders, diplomats and international institutions convene to channel global networks into grassroots Kenyan enterprise financing.",
  },
] as const;

export const PARTNERS = [
  "Pride of Kenya",
  "Schloss Hotel Berlin",
  "Kitui County",
  "Kisumu Women's Trust",
  "Nairobi Diaspora Council",
  "IMARA HER",
  "Diaspora Leaders Forum",
  "Dignity Kits Coalition",
] as const;
