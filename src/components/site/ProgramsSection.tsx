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
    alt: "Volunteers packing dignity kits with sanitary products",
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
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32" id="programs">
      {withHeading ? (
        <SectionHeading
          eyebrow="What we do"
          title="Three commitments, carried to the last mile"
          description="Every program begins with the same question: what would restore this woman's dignity today, and what would keep it restored for years?"
        />
      ) : null}

      <div className="relative mt-16">
        <div
          className="absolute top-0 bottom-0 left-[27px] hidden w-px bg-gradient-to-b from-transparent via-border to-transparent lg:block"
          aria-hidden="true"
        />
        <ul className="space-y-14">
          {PROGRAMS.map((program, index) => (
            <Reveal as="li" key={program.id} className="relative lg:pl-20">
              <span
                className="gradient-primary absolute top-8 left-0 hidden size-14 place-items-center rounded-2xl text-primary-foreground shadow-[var(--shadow-glow)] lg:grid"
                aria-hidden="true"
              >
                <program.icon className="size-6" />
              </span>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="zoom-media grid overflow-hidden rounded-[2rem] bg-card shadow-soft transition-shadow duration-500 hover:shadow-lift md:grid-cols-2"
              >
                <div
                  className={`relative aspect-[4/3] md:aspect-auto ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <img
                    src={program.image}
                    alt={program.alt}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center gap-5 p-8 sm:p-10">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary-tint text-primary lg:hidden">
                    <program.icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="eyebrow text-accent">Program 0{index + 1}</p>
                  <h3 className="text-2xl font-semibold sm:text-3xl">{program.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{program.summary}</p>
                  <ul className="flex flex-wrap gap-2">
                    {program.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full bg-muted px-3.5 py-1.5 text-xs font-medium text-foreground/75"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Button asChild variant="outline">
                      <Link to="/programs" hash={program.id}>
                        Learn more
                        <ArrowUpRight aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
