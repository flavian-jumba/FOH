export const ORG = {
  name: "Footprints of Hope",
  short: "FOH",
  tagline:
    "A community-driven organization empowering adolescent girls, young women and youth in Busia County, Kenya.",
  email: "info@foh-foundation.org",
  website: "foh-foundation.org",
  location: "Busia County, Kenya",
};

export const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Our Work", to: "/programs" },
  { label: "Our Impact", to: "/community" },
  { label: "Gallery", to: "/gallery" },
  { label: "Get Involved", to: "/partners" },
  { label: "Contact", to: "/contact" },
] as const;

export const STATS = [
  { value: 50, suffix: "+", label: "TEENAGE MOTHERS REINTEGRATED" },
  { value: 200, suffix: "+", label: "WOMEN-LED BUSINESSES SUPPORTED" },
  { value: 5000, suffix: "+", label: "GIRLS & WOMEN REACHED" },
] as const;
