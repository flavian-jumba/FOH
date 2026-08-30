import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";
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
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        overHero ? "bg-transparent" : "bg-[color:#17090E]", // Solid --near-black when scrolled or not on hero
        !overHero && "shadow-soft" // Add shadow when scrolled
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link to="/" className="group flex items-center gap-4" onClick={() => setOpen(false)}>
          <img src={simplyfemininenetworkLogo} alt="Simply Feminine Network Logo" className="h-10 w-auto" />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-[15px] font-semibold">{ORG.name}</span>
            <span
              className={cn(
                "block text-[11px] tracking-[0.16em] uppercase",
                overHero ? "text-[color:#FFFFFF]/70" : "text-[color:#C9BFBB]/70",
              )}
            >
              Kenya · Germany
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-2 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-base font-semibold font-manrope tracking-[0.01em] transition-colors",
                  overHero ? "text-[color:#FFFFFF]/80 hover:text-[color:#FFFFFF]" : "text-[color:#C9BFBB]/80 hover:text-[color:#FFFFFF]",
                )}
                activeProps={{ className: "text-[color:#FFFFFF]" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/partners"
            className="flex items-center justify-center px-6 py-3 text-sm font-manrope uppercase tracking-wider bg-[color:#4A0E24] text-[color:#FFFFFF] rounded-md hover:bg-[color:#3E0F22] transition-colors"
          >
            PARTNER WITH US
          </Link>
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
                    className="block rounded-2xl px-4 py-3 font-display text-lg font-medium transition-colors hover:bg-[color:#4A0E24]/20 hover:text-[color:#FFFFFF]"
                    activeProps={{ className: "text-[color:#FFFFFF] bg-[color:#4A0E24]/20" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}