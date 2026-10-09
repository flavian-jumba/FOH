import africaCdc from "@/assets/partners/africa-cdc.png";
import afripads from "@/assets/partners/afripads.png";
import mastercard from "@/assets/partners/mastercard.png";
import padmadKenya from "@/assets/partners/padmad-kenya.png";
import rana from "@/assets/partners/rana.png";
import usaid from "@/assets/partners/usaid.png";

export type Partner = {
  name: string;
  logo: string;
  url?: string;
  /** Tailwind classes that balance the logo's optical size inside a tile. */
  logoClass?: string;
  /** The source logo is white-on-transparent and needs darkening on light tiles. */
  invert?: boolean;
};

export const PARTNERS: Partner[] = [
  {
    name: "Africa CDC",
    logo: africaCdc,
    url: "https://africacdc.org",
    logoClass: "sm:max-h-[96px]",
  },
  { name: "USAID", logo: usaid, url: "https://www.usaid.gov" },
  {
    name: "PadMad Kenya",
    logo: padmadKenya,
    url: "https://www.padmadkenya.com",
    logoClass: "max-h-[64px] sm:max-h-[84px]",
  },
  {
    name: "Mastercard",
    logo: mastercard,
    url: "https://www.mastercard.com",
    logoClass: "max-h-[60px] sm:max-h-[80px]",
  },
  {
    name: "AFRIpads",
    logo: afripads,
    url: "https://afripads.com",
    logoClass: "max-h-[48px] sm:max-h-[64px]",
  },
  { name: "RANA", logo: rana, logoClass: "max-h-[36px] sm:max-h-[52px]", invert: true },
];
