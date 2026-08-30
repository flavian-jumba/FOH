import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh_-_3.5rem)]">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/assets/hero-bg.jpg"
          alt="Women seated at a café table, warm brick interior wall"
          className="inset-0 size-full object-cover"
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="inset-0 bg-gradient-to-r from-[color:#17090E]/80 to-[color:#17090E]/60" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-5xl px-5 py-24 text-center sm:px-8">
        {/* Top-right badges */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          {/* Outlined dark pill: "PRIDE OF KENYA AWARDS 2025" */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-manrope uppercase tracking-wider border border-[color:#17090E] bg-transparent text-[color:#FFFFFF]">
            PRIDE OF KENYA AWARDS 2025
          </div>
          {/* Solid maroon pill: "🏆 NGO OF THE YEAR" */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-manrope uppercase tracking-wider bg-[color:#4A0E24] text-[color:#FFFFFF]">
            🏆 NGO OF THE YEAR
          </div>
        </div>

        {/* Eyebrow: "— FOUNDED BY TABITHA MWELU JOHN" */}
        <div className="mb-4">
          <div className="text-[color:#C9A76B] text-xs font-manrope uppercase tracking-wider">
            — FOUNDED BY TABITHA MWELU JOHN —
          </div>
        </div>

        {/* H1 headline, three separate lines */}
        <motion.h1
          initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-5xl leading-[1.05] font-display font-bold text-white sm:text-6xl lg:text-7xl"
        >
          <div className="block">Women of Purpose.</div>
          <div className="block mt-2">
            <span className="text-[color:#E7A9BC] font-display italic">Giving Back</span>
          </div>
          <div className="block mt-2">with Grace.</div>
        </motion.h1>

        {/* Body paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[color:#FFFFFF]/90 sm:text-lg"
        >
          Simply Feminine Network is an award-winning women-led NGO committed to women's health, ending gender-based violence, mentorship, and community empowerment — in Kenya and across the world.
        </motion.p>

        {/* Buttons side by side */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:space-x-4"
        >
          {/* Solid maroon "EXPLORE OUR WORK" */}
          <Link
            to="/programs"
            className="flex items-center justify-center px-6 py-3 text-sm font-manrope uppercase tracking-wider bg-[color:#4A0E24] text-[color:#FFFFFF] rounded-md hover:bg-[color:#3E0F22] transition-colors"
          >
            EXPLORE OUR WORK
          </Link>
          {/* Outline white "PARTNER WITH SFN" */}
          <Link
            to="/partners"
            className="flex items-center justify-center px-6 py-3 text-sm font-manrope uppercase tracking-wider border border-[color:#FFFFFF] bg-transparent text-[color:#FFFFFF] rounded-md hover:bg-[color:#FFFFFF]/10 transition-colors"
          >
            PARTNER WITH SFN
          </Link>
        </motion.div>

        {/* Thin horizontal divider line below the buttons */}
        <div className="mt-10 h-0.5 bg-[color:#FFFFFF]/20"></div>

        {/* 4-column stat row beneath the divider */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {/* NGO / OF THE YEAR 2025 */}
          <div>
            <div className="text-[color:#E7A9BC] text-4xl font-display font-bold">NGO</div>
            <div className="mt-2 text-xs font-manrope uppercase tracking-wider text-[color:#FFFFFF]/80">OF THE YEAR 2025</div>
          </div>
          {/* 2 / ACTIVE GLOBAL CHAPTERS */}
          <div>
            <div className="text-[color:#E7A9BC] text-4xl font-display font-bold">2+</div>
            <div className="mt-2 text-xs font-manrope uppercase tracking-wider text-[color:#FFFFFF]/80">ACTIVE GLOBAL CHAPTERS</div>
          </div>
          {/* 4 / CORE ADVOCACY PILLARS */}
          <div>
            <div className="text-[color:#E7A9BC] text-4xl font-display font-bold">4+</div>
            <div className="mt-2 text-xs font-manrope uppercase tracking-wider text-[color:#FFFFFF]/80">CORE ADVOCACY PILLARS</div>
          </div>
          {/* 1K+ / PAEDIATRIC WARD SUPPORTED */}
          <div>
            <div className="text-[color:#E7A9BC] text-4xl font-display font-bold">1K+</div>
            <div className="mt-2 text-xs font-manrope uppercase tracking-wider text-[color:#FFFFFF]/80">PAEDIATRIC WARD SUPPORTED</div>
          </div>
        </div>
      </div>
    </section>
  );
}
