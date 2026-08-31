import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { useEffect, useState } from "react";

import simplyfemininenetworkLogo from "@/assets/simplyfemininenetwork.png";
import { ORG } from "./site-data";

export function Footer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <footer style={{ backgroundColor: "var(--charcoal)" }}>
      <div className="shell py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Column 1: Logo + Brand + Description */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
              <img
                src={simplyfemininenetworkLogo}
                alt="Simply Feminine Network"
                width={56}
                height={56}
                className="h-12 w-12 rounded-full object-cover"
              />
              <span>
                <span className="block font-display text-sm font-semibold tracking-[0.18em] text-cream uppercase">
                  Simply Feminine
                </span>
                <span className="mt-1 block text-[0.6rem] font-medium tracking-[0.42em] text-gold uppercase">
                  Network
                </span>
              </span>
            </Link>
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-cream/60">
              {ORG.tagline}
            </p>
          </div>

          {/* Column 2: Explore Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[0.62rem] font-semibold tracking-[0.28em] text-gold uppercase">
              Explore
            </h3>
            <ul className="mt-6 space-y-3">
              <li>
                <Link to="/about" className="text-sm text-cream/70 transition-colors hover:text-cream" onClick={() => setOpen(false)}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/mission" className="text-sm text-cream/70 transition-colors hover:text-cream" onClick={() => setOpen(false)}>
                  Pillars
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-cream/70 transition-colors hover:text-cream" onClick={() => setOpen(false)}>
                  Projects
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
                <Link to="/events" className="text-sm text-cream/70 transition-colors hover:text-cream" onClick={() => setOpen(false)}>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm text-cream/70 transition-colors hover:text-cream" onClick={() => setOpen(false)}>
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-cream/70 transition-colors hover:text-cream" onClick={() => setOpen(false)}>
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
              Nairobi, Kenya
            </p>
            <div className="mt-4 flex space-x-3">
              <a
                href="#"
                className="text-sm text-cream/70 transition-colors hover:text-cream"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-sm text-cream/70 transition-colors hover:text-cream"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-sm text-cream/70 transition-colors hover:text-cream"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
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
            &copy; {new Date().getFullYear()} Simply Feminine Network
          </p>
          <p className="text-[0.7rem] tracking-[0.14em] text-cream/45 uppercase">
            Dignity · Leadership · Legacy
          </p>
        </div>
      </div>
    </footer>
  );
}