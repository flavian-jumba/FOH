import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS, ORG } from "./site-data";
import simplyfemininenetworkLogo from "@/assets/simplyfemininenetwork.png";

export function Navbar() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [atTop, setAtTop] = useState(true);
  const overHero = pathname === "/" && atTop;
  const scrolled = !overHero;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor:
          scrolled || open
            ? "color-mix(in oklab, var(--charcoal) 92%, transparent)"
            : "transparent",
        backdropFilter: scrolled || open ? "blur(14px)" : "none",
        borderBottom:
          scrolled || open
            ? "1px solid color-mix(in oklab, var(--cream) 12%, transparent)"
            : "1px solid transparent",
      }}
    >
      <nav className="shell flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={simplyfemininenetworkLogo}
            alt="Simply Feminine Network"
            width={42}
            height={42}
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="hidden sm:block">
            <span className="block font-display text-[0.8rem] font-semibold leading-none tracking-[0.18em] text-cream uppercase">
              Simply Feminine
            </span>
            <span className="mt-0.5 block text-[0.55rem] font-medium leading-none tracking-[0.42em] text-gold uppercase">
              Network
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-[0.8rem] font-medium tracking-[0.05em] uppercase transition-colors hover:text-cream/80"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/partners"
          className="btn-base btn-primary hidden lg:inline-flex px-5 py-2.5 text-sm"
          onClick={() => setOpen(false)}
        >
          Partner With Us
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[3px] lg:hidden"
        >
          <span
            className="block h-px w-5 bg-cream transition-transform duration-300"
            style={open ? { transform: "translateY(4px) rotate(45deg)" } : undefined}
          />
          <span
            className="block h-px w-5 bg-cream transition-opacity duration-300"
            style={open ? { opacity: 0 } : undefined}
          />
          <span
            className="block h-px w-5 bg-cream transition-transform duration-300"
            style={open ? { transform: "translateY(-4px) rotate(-45deg)" } : undefined}
          />
        </button>
      </nav>

      <div
        className="overflow-hidden transition-[max-height] duration-500 lg:hidden"
        style={{ maxHeight: open ? "22rem" : 0 }}
      >
        <ul className="shell flex flex-col gap-0.5 pb-6">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[0.8rem] font-medium tracking-[0.05em] uppercase"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              to="/partners"
              onClick={() => setOpen(false)}
              className="btn-base btn-primary px-5 py-2.5 text-sm"
            >
              Partner With Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
