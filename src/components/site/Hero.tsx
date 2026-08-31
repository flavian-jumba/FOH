import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroBg}
        alt="Women seated together at a café table, warm brick interior wall"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--charcoal) 78%, transparent) 0%, color-mix(in oklab, var(--charcoal) 40%, transparent) 38%, color-mix(in oklab, var(--charcoal) 88%, transparent) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, color-mix(in oklab, var(--burgundy) 62%, transparent) 0%, transparent 62%)",
        }}
      />

      <div className="shell w-full pt-36 pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-display text-[2.7rem] leading-[1.03] font-semibold text-cream sm:text-6xl lg:text-[4.6rem]"
          >
            Women of Purpose.
            <br />
            <span className="italic-accent">Giving Back</span> with Grace.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-cream/80 lg:text-lg"
          >
            Simply Feminine Network is an award-winning women-led NGO committed to women's health,
            ending gender-based violence, mentorship, and community empowerment — in Kenya and
            across the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/programs"
              className="btn-base btn-primary"
            >
              Explore Our Work
            </Link>
            <Link
              to="/partners"
              className="btn-base btn-outline"
            >
              Partner With SFN
            </Link>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.56, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="hairline-light mt-16 grid grid-cols-1 gap-px sm:grid-cols-3"
        >
          {/* NGO / OF THE YEAR 2025 */}
          <motion.div
            key="ngo-year"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="py-7 sm:pr-10"
          >
            <motion.dt
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl font-semibold text-rose-light lg:text-5xl"
            >
              NGO
            </motion.dt>
            <motion.dd
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.64, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-[0.66rem] font-semibold tracking-[0.26em] text-cream/60 uppercase"
            >
              OF THE YEAR 2025
            </motion.dd>
          </motion.div>

          {/* 2+ / ACTIVE GLOBAL CHAPTERS */}
          <motion.div
            key="chapters"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.66, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="py-7 sm:pr-10"
          >
            <motion.dt
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl font-semibold text-rose-light lg:text-5xl"
            >
              2+
            </motion.dt>
            <motion.dd
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-[0.66rem] font-semibold tracking-[0.26em] text-cream/60 uppercase"
            >
              ACTIVE GLOBAL CHAPTERS
            </motion.dd>
          </motion.div>

          {/* 4+ / CORE ADVOCACY PILLARS */}
          <motion.div
            key="pillars"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="py-7 sm:pr-10"
          >
            <motion.dt
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.74, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl font-semibold text-rose-light lg:text-5xl"
            >
              4+
            </motion.dt>
            <motion.dd
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.76, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-[0.66rem] font-semibold tracking-[0.26em] text-cream/60 uppercase"
            >
              CORE ADVOCACY PILLARS
            </motion.dd>
          </motion.div>

          {/* 1K+ / PAEDIATRIC WARD SUPPORTED */}
          <motion.div
            key="wards"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="py-7 sm:pr-10"
          >
            <motion.dt
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl font-semibold text-rose-light lg:text-5xl"
            >
              1K+
            </motion.dt>
            <motion.dd
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.82, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-[0.66rem] font-semibold tracking-[0.26em] text-cream/60 uppercase"
            >
              PAEDIATRIC WARD SUPPORTED
            </motion.dd>
          </motion.div>
        </motion.dl>
      </div>
    </section>
  );
}