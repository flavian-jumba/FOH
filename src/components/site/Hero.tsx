import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImage from "@/assets/hassan-kibwana-Q3A3En_7HM4-unsplash.jpg";
import { Button } from "@/components/ui/button";
import { ORG } from "./site-data";

export function Hero() {
  return (
    <section
      className="relative isolate min-h-[600px] sm:min-h-[700px] bg-black overflow-hidden"
      aria-label="Hero section"
    >
      {/* Hero Image */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
      >
        <img
          src={heroImage}
          alt="Women of the Simply Feminine Network community standing together at golden hour"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="size-full object-cover object-center"
        />

        {/* Photographic contrast enhancement */}
        <div
          className="absolute inset-0 bg-[rgba(0,0,0,0.15)]"
          aria-hidden="true"
        />

        {/* Dark left-side vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at left center, rgba(20, 8, 45, 0.70) 0%, rgba(20, 8, 45, 0.35) 45%, rgba(20, 8, 45, 0) 75%)"
          }}
          aria-hidden="true"
        />

        {/* Purple to Magenta gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(46, 16, 102, 0.92) 0%, rgba(87, 19, 105, 0.78) 45%, rgba(131, 16, 94, 0.55) 100%)"
          }}
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto w-full max-w-5xl px-6 py-12 text-center sm:px-8 lg:px-12">
        {/* Headline */}
        <h1
          className="mt-6 mb-4 text-4xl font-[800] leading-[1.05] text-white tracking-tight sm:text-5xl lg:text-6xl"
        >
          Restoring Dignity. Empowering Women. Transforming Communities.
        </h1>

        {/* Supporting Paragraph */}
        <p
          className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#E2D9F3]/90 sm:text-lg"
        >
          {ORG.name} walks with women and children affected by Kenya's criminal justice system —
          delivering dignity kits, mental-health support, mentorship and economic opportunity from
          Nairobi to Kitui, Kisumu and the diaspora.
        </p>

        {/* CTA Buttons */}
        <div
          className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:gap-4"
        >
          {/* Primary Button: Explore our programs */}
          <Button
            asChild
            variant="default"
            size="lg"
            className="bg-white text-primary-foreground px-8 py-3 rounded-lg hover:bg-white/90 transition-colors duration-200 font-medium w-full sm:w-auto"
          >
            <Link to="/programs">
              Explore our programs
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>

          {/* Secondary Button: Donate now */}
          <Button
            asChild
            variant="gold"
            size="lg"
            className="px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors duration-200 font-medium w-full sm:w-auto"
          >
            <Link to="/donate">
              Donate now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}