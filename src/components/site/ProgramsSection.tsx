import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, HeartHandshake, Scale } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const PROGRAMS = [
  {
    id: "reintegration",
    title: "Teen Mothers' Reintegration",
    icon: Scale,
    alt: "Placeholder image for the Teen Mothers' Reintegration Program",
    summary:
      "Helping teenage mothers return to school and access vocational and economic opportunities that support a pathway toward independence.",
    points: ["Return-to-school pathways", "Vocational opportunities", "Economic opportunity"],
  },
  {
    id: "dignity",
    title: "Menstrual Health & Hygiene",
    icon: HeartHandshake,
    alt: "Placeholder image for menstrual health and hygiene",
    summary:
      "Supporting access to menstrual products, reproductive health education and menstrual health awareness so girls can participate with confidence.",
    points: ["Menstrual products", "Reproductive health education", "Menstrual health awareness"],
  },
  {
    id: "mentorship",
    title: "Women & Youth in Agribusiness",
    icon: GraduationCap,
    alt: "Placeholder image for women and youth in agribusiness",
    summary:
      "Training young women and youth in poultry farming, agribusiness, financial literacy and entrepreneurship for sustainable income generation.",
    points: ["Poultry farming", "Financial literacy", "Entrepreneurship"],
  },
] as const;

export function ProgramsSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16" id="programs">
      {withHeading ? (
        <SectionHeading
          eyebrow="What we do"
          title="Building opportunity, together"
          description="FOH's focus areas connect education, dignity, skills and sustainable opportunity for girls, young women and youth."
        />
      ) : null}

      <div className="mt-12 space-y-10">
        {PROGRAMS.map((program, index) => (
          <Reveal key={program.id}>
            <div className="lg:flex lg:items-start lg:gap-12">
              <div
                className={
                  index % 2 === 0 ? "w-full lg:w-1/2 lg:order-1" : "w-full lg:w-1/2 lg:order-2"
                }
              >
                <div
                  role="img"
                  aria-label={program.alt}
                  className="flex min-h-64 items-end bg-[color:color-mix(in_oklab,var(--burgundy)_12%,var(--cream))] p-5"
                >
                  <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-[color:var(--burgundy)] uppercase">
                    Image placeholder
                  </span>
                </div>
              </div>
              <div
                className={
                  index % 2 === 0
                    ? "w-full lg:w-1/2 lg:order-2 space-y-4"
                    : "w-full lg:w-1/2 lg:order-1 space-y-4"
                }
              >
                <h3 className="text-2xl font-semibold text-foreground">{program.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{program.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {program.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button asChild variant="outline" className="w-fit">
                    <Link to="/programs" hash={program.id}>
                      Learn more
                      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
