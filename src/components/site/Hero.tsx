import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, Heart } from "lucide-react";

import heroImage from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { ORG } from "./site-data";

const floatCards = [
  { label: "Lives impacted", value: "1,000+", className: "left-4 top-[26%] sm:left-10 lg:left-16" },
  {
    label: "Sanitary pads distributed",
    value: "10,000+",
    className: "right-4 top-[38%] sm:right-10 lg:right-20",
  },
  {
    label: "Prison outreaches",
    value: "5+",
    className: "left-8 bottom-[24%] hidden sm:block lg:left-28",
  },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh items-center overflow-hidden bg-primary">
      <img
        src={heroImage}
        alt="Women of the Simply Feminine Network community standing together at golden hour"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover opacity-45 mix-blend-luminosity"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-royal-wash)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-royal-base)" }}
        aria-hidden="true"
      />
      <div
        className="float-slow pointer-events-none absolute -top-24 -left-24 -z-10 size-96 rounded-full bg-[oklch(0.72_0.135_360_/_0.32)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="float-slow pointer-events-none absolute right-[-10%] bottom-[-10%] -z-10 size-[30rem] rounded-full bg-[oklch(0.73_0.113_85_/_0.22)] blur-3xl [animation-delay:-6s]"
        aria-hidden="true"
      />


      {floatCards.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + i * 0.18, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className={`glass-dark pointer-events-none absolute z-10 hidden rounded-3xl px-5 py-4 text-primary-foreground md:block ${card.className}`}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-display text-2xl font-semibold">{card.value}</p>
            <p className="mt-1 text-[11px] tracking-[0.16em] text-white/70 uppercase">
              {card.label}
            </p>
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-20 mx-auto w-full max-w-5xl px-5 py-32 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-dark mx-auto inline-flex items-center gap-2 rounded-full border border-[oklch(0.73_0.113_85_/_0.45)] px-4 py-2 text-xs font-medium tracking-[0.14em] text-white/90 uppercase"
        >
          <Award className="size-4 text-[oklch(0.82_0.12_85)]" aria-hidden="true" />
          NGO of the Year — Pride of Kenya 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-4xl leading-[1.05] font-semibold text-white sm:text-6xl lg:text-7xl"
        >
          Restoring{" "}
          <em className="font-display text-[oklch(0.76_0.132_357)] italic">Dignity.</em>
          <span className="block">Empowering Women.</span>
          <span className="block text-[oklch(0.79_0.115_85)]">Transforming Communities.</span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          {ORG.name} walks with women and children affected by Kenya's criminal justice system —
          delivering dignity kits, mental-health support, mentorship and economic opportunity from
          Nairobi to Kitui, Kisumu and the diaspora.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
            <Link to="/donate">
              <Heart aria-hidden="true" />
              Donate now
            </Link>
          </Button>
          <Button asChild variant="glassOutline" size="lg" className="w-full sm:w-auto">
            <Link to="/programs">
              Explore our programs
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white/70"
        aria-hidden="true"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <span className="scroll-dot block size-1.5 rounded-full bg-white" />
        </span>
      </div>

      <div
        className="absolute bottom-0 left-0 z-20 h-1 w-full"
        style={{ backgroundImage: "var(--gradient-royal-rule)" }}
        aria-hidden="true"
      />
    </section>

  );
}
