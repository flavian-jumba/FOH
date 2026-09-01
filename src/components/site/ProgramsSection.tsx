import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, HeartHandshake, Scale } from "lucide-react";

import dignityImage from "@/assets/program-dignity.jpg";
import justiceImage from "@/assets/program-justice.jpg";
import mentorshipImage from "@/assets/program-mentorship.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const PROGRAMS = [
  {
    id: "justice",
    title: "Justice System Outreach",
    icon: Scale,
    image: justiceImage,
    alt: "A paralegal speaking with women during a justice outreach session",
    summary:
      "We walk into remand halls and prisons with dignity kits, counselling and reintegration support for women and the children who serve their sentences alongside them.",
    points: ["Prison & remand visits", "Reintegration kits", "Legal literacy clinics"],
  },
  {
    id: "dignity",
    title: "Sanitary Towel Drives",
    icon: HeartHandshake,
    image: dignityImage,
    alt: "Dignity kits with sanitary products ready for distribution",
    summary:
      "Over 10,000 sanitary pads and undergarments delivered so that no woman or girl trades her dignity, her health or her school day for a period.",
    points: ["School & community drives", "Menstrual health education", "Undergarment provision"],
  },
  {
    id: "mentorship",
    title: "Mentorship & Leadership",
    icon: GraduationCap,
    image: mentorshipImage,
    alt: "Young women in a mentorship and leadership workshop",
    summary:
      "The IMARA HER mobile lab carries vocational training, mental-health awareness and enterprise mentorship to Nairobi, Kitui and Kisumu.",
    points: ["IMARA HER mobile lab", "Vocational training", "Diaspora summit pipeline"],
  },
] as const;

export function ProgramsSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16" id="programs">
      {withHeading ? (
        <SectionHeading
          eyebrow="What we do"
          title="Three commitments, carried to the last mile"
          description="Every program begins with the same question: what would restore this woman's dignity today, and what would keep it restored for years?"
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
                <img
                  src={program.image}
                  alt={program.alt}
                  loading="lazy"
                  className="rounded-none"
                />
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
