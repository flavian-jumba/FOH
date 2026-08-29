import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";

import simplyfemininenetworkLogo from "@/assets/simplyfemininenetwork.png";
import { NewsletterForm } from "./NewsletterForm";
import { ORG } from "./site-data";

const quickLinks = [
  { label: "About us", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Partners", to: "/partners" },
] as const;

const programLinks = [
  { label: "Justice system outreach", to: "/programs" },
  { label: "Sanitary towel drives", to: "/programs" },
  { label: "Mentorship & leadership", to: "/programs" },
  { label: "IMARA HER project", to: "/programs" },
] as const;

const socials = [
  { label: "Instagram", icon: Instagram },
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
  { label: "YouTube", icon: Youtube },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[oklch(0.24_0.06_300)] text-[oklch(0.96_0.01_300)]">
      <div
        className="gradient-primary pointer-events-none absolute -top-40 -right-32 size-[28rem] rounded-full opacity-30 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img src={simplyfemininenetworkLogo} alt="Simply Feminine Network Logo" className="h-10 w-auto" />
              <div>
                <p className="font-display text-2xl font-semibold">{ORG.name}</p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-[oklch(0.86_0.02_300)]">
                  A Kenyan non-governmental organization restoring dignity to women and children
                  affected by the criminal justice system — and building the leadership that changes it.
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:scale-105 hover:bg-white/15"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h2 className="eyebrow text-[oklch(0.8_0.06_330)]">Quick links</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[oklch(0.88_0.02_300)] transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Programs">
            <h2 className="eyebrow text-[oklch(0.8_0.06_330)]">Programs</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {programLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[oklch(0.88_0.02_300)] transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-[oklch(0.8_0.06_330)]">Stay close</h2>
            <p className="mt-5 text-sm text-[oklch(0.86_0.02_300)]">
              Field notes, event invitations and impact reports — once a month.
            </p>
            <NewsletterForm className="mt-4" />
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  className="inline-flex items-center gap-2 text-[oklch(0.88_0.02_300)] transition-colors hover:text-white"
                  href={`mailto:${ORG.email}`}
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {ORG.email}
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 text-[oklch(0.88_0.02_300)] transition-colors hover:text-white"
                  href={`tel:${ORG.phoneKe.replace(/\s/g, "")}`}
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {ORG.phoneKe} · Kenya
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 text-[oklch(0.88_0.02_300)] transition-colors hover:text-white"
                  href={`tel:${ORG.phoneDe.replace(/\s/g, "")}`}
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {ORG.phoneDe} · Germany
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-[oklch(0.78_0.02_300)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {ORG.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}