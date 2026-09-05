import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Music2 } from "lucide-react";
import { useEffect, useState } from "react";

import fohLogo from "@/assets/logo.png";
import { ORG } from "./site-data";

export function Footer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const socialLinks = [
    {
      label: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      label: "TikTok",
      href: "#",
      icon: Music2,
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ];

  return (
    <footer style={{ backgroundColor: "var(--charcoal)" }}>
      <div className="shell py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Column 1: Logo + Brand + Description */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex" onClick={() => setOpen(false)}>
              <img
                src={fohLogo}
                alt="Footprints of Hope logo"
                width={96}
                height={96}
                className="h-24 w-24 rounded-lg bg-white p-1 object-contain"
              />
            </Link>
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-cream/60">{ORG.tagline}</p>
          </div>

          {/* Column 2: Explore Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[0.62rem] font-semibold tracking-[0.28em] text-gold uppercase">
              Explore
            </h3>
            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                  onClick={() => setOpen(false)}
                >
                  About FOH
                </Link>
              </li>
              <li>
                <Link
                  to="/mission"
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                  onClick={() => setOpen(false)}
                >
                  Our mission
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                  onClick={() => setOpen(false)}
                >
                  Our work
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                  onClick={() => setOpen(false)}
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Engage Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[0.62rem] font-semibold tracking-[0.28em] text-gold uppercase">
              Engage
            </h3>
            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  to="/events"
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                  onClick={() => setOpen(false)}
                >
                  Support FOH
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                  onClick={() => setOpen(false)}
                >
                  Get involved
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Partner With Us + Social Media */}
          <div className="lg:col-span-3">
            <h3 className="text-[0.62rem] font-semibold tracking-[0.28em] text-gold uppercase">
              Partner With Us
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-cream/60">
              {ORG.email}
              <br />
              {ORG.location}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream/75 transition-all duration-300 hover:border-gold/60 hover:bg-white/10 hover:text-cream"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
            <Link
              to="/partners"
              className="btn-base btn-outline mt-7"
              onClick={() => setOpen(false)}
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        <div className="hairline-light mt-16 flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.7rem] tracking-[0.14em] text-cream/45 uppercase">
            &copy; {new Date().getFullYear()} Footprints of Hope
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[0.7rem] tracking-[0.14em] text-cream/45 uppercase">
            <Link to="/privacy" className="transition-colors hover:text-cream">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-cream">
              Terms
            </Link>
            <p>Dignity · Opportunity · Hope</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
