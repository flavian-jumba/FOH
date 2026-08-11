import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS, ORG } from "./site-data";

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
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        overHero ? "bg-transparent text-white" : atTop ? "bg-transparent" : "glass shadow-soft",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="gradient-primary grid size-10 place-items-center rounded-2xl text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 group-hover:scale-105">
            SF
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-[15px] font-semibold">{ORG.name}</span>
            <span
              className={cn(
                "block text-[11px] tracking-[0.16em] uppercase",
                scrolled ? "text-muted-foreground" : "text-white/70",
              )}
            >
              Kenya · Germany
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-base font-semibold font-manrope tracking-[0.01em] transition-colors",
                  scrolled ? "text-foreground/80 hover:text-primary" : "text-white/85 hover:text-white",
                )}
                activeProps={{ className: scrolled ? "text-primary" : "text-white" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden h-10 px-5 sm:inline-flex text-[oklch(0.79_0.115_85)] font-manrope font-semibold text-base tracking-[0.01em]">
            <Link to="/donate">
              Donate
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn("xl:hidden", scrolled ? "" : "text-white hover:bg-white/15 hover:text-white")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="glass border-t border-border/60 xl:hidden"
          >
            <ul className="mx-auto grid max-w-7xl gap-1 px-5 py-5 sm:px-8">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 font-display text-lg font-medium transition-colors hover:bg-primary-tint hover:text-primary"
                    activeProps={{ className: "text-primary bg-primary-tint" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild variant="hero" className="w-full" size="lg" className="font-manrope font-semibold text-base tracking-[0.01em]">
                  <Link to="/donate" onClick={() => setOpen(false)}>
                    Donate now
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}