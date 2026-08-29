import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, Heart } from "lucide-react";

import heroImage from "@/assets/hassan-kibwana-Q3A3En_7HM4-unsplash.jpg";
import { Button } from "@/components/ui/button";
import { ORG } from "./site-data";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh items-center overflow-hidden bg-primary">
      <img
        src={heroImage}
        alt="Women of the Simply Feminine Network community standing together at golden hour"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover opacity-85"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-royal-wash)", opacity: 0.4 }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-royal-base)", opacity: 0.4 }}
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

      <div className="relative z-20 mx-auto w-full max-w-5xl px-5 py-32 text-center sm:px-8">
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
          <Button asChild variant="hero" size="lg" className="w-full sm:w-auto text-[oklch(0.79_0.115_85)]">
            <Link to="/donate">
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
        className="absolute bottom-0 left-0 z-20 h-1 w-full"
        style={{ backgroundImage: "var(--gradient-royal-rule)" }}
        aria-hidden="true"
      />
    </section>
  );
}