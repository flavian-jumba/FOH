import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap, HeartHandshake, Scale } from "lucide-react";

import dignityImage from "@/assets/program-dignity.jpg";
import justiceImage from "@/assets/program-justice.jpg";
import mentorshipImage from "@/assets/program-mentorship.jpg";
import { ORG } from "@/components/site/site-data";

// Enhanced program data with narrative structure
const PROGRAMS = [
  {
    id: "justice",
    title: "Justice System Outreach",
    icon: Scale,
    image: justiceImage,
    alt: "A paralegal speaking with women during a justice outreach session",
    problem: "Women entering Kenya's remand facilities often arrive with nothing but the clothes on their backs, separated from their children, and facing a justice system that moves slowly while their basic human dignity erodes daily.",
    solution: "Our teams enter prisons and remand halls weekly, delivering dignity kits containing essential hygiene items, providing trauma-informed counseling, and offering legal literacy sessions that empower women to understand their rights and navigate the system.",
    outcome: "Women maintain their health and self-worth during incarceration, reunite stronger with their children upon release, and have reduced recidivism rates through our comprehensive reintegration support.",
    background: "cream" // Start with cream
  },
  {
    id: "dignity",
    title: "Sanitary Towel Drives",
    icon: HeartHandshake,
    image: dignityImage,
    alt: "Volunteers packing dignity kits with sanitary products",
    problem: "Over 65% of Kenyan girls miss school during menstruation due to lack of access to sanitary products, trading their education and health for a natural biological process, while women in incarceration face similar challenges with even fewer resources.",
    solution: "We manufacture and distribute comprehensive dignity kits containing sanitary pads, undergarments, and hygiene essentials, coupled with menstrual health education that breaks stigma and empowers women and girls to manage their health with confidence.",
    outcome: "Girls stay in school throughout their menstrual cycles, women maintain health and dignity during incarceration, and communities develop sustainable solutions to period poverty through our education initiatives.",
    background: "mist" // Alternate to mist
  },
  {
    id: "mentorship",
    title: "Mentorship & Leadership",
    icon: GraduationCap,
    image: mentorshipImage,
    alt: "Young women in a mentorship and leadership workshop",
    problem: "Upon release, women face immense barriers to rebuilding their lives: limited vocational skills, societal stigma, and few economic opportunities, often leading them back to the circumstances that led to incarceration.",
    solution: "The IMARA HER mobile empowerment model combines mobile vocational training, mental health support, enterprise mentorship, and connection to diaspora networks, creating pathways to sustainable livelihoods and community leadership.",
    outcome: "Graduates establish businesses, secure employment, become peer mentors in their communities, and break cycles of poverty and incarceration through economic empowerment and social reintegration.",
    background: "cream" // Back to cream
  }
] as const;

const title = "Our Programs — Justice Outreach, Dignity Kits & Mentorship";
const description =
  "Justice system outreach, sanitary towel drives and the IMARA HER mentorship and leadership lab — how Simply Feminine Network restores dignity across Kenya.";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Dignity, delivered where the system stops"
        description="Three flagship programs, one mobile lab and a diaspora pipeline — designed so that support does not end at the prison gate."
      />

      {/* Programs sections with alternating backgrounds and narrative format */}
      <div className="space-y-0">
        {PROGRAMS.map((program, index) => (
          <section
            key={program.id}
            className="relative"
            style={{ backgroundColor: `var(--${program.background})` }}
          >
            {/* Gradient rule as section separator (except for first section) */}
            {index > 0 && (
              <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-0.5"
                   style={{ backgroundImage: "var(--gradient)" }}
                   aria-hidden="true">
              </div>
            )}

            <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
              {/* Asymmetric two-column layout */}
              <div className="grid gap-12 lg:grid-cols-[40%_60%] lg:gap-16">
                {/* Image column with circular photo badge treatment */}
                <div className="flex items-start">
                  <Reveal
                    key={`${program.id}-image`}
                    delay={index * 0.05}
                    as="div"
                    className="w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-primary/20 shadow-lg flex-shrink-0"
                  >
                    <img
                      src={program.image}
                      alt={program.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </Reveal>
                </div>

                {/* Text column with narrative format */}
                <div className="space-y-6">
                  <Reveal
                    key={`${program.id}-title`}
                    delay={index * 0.05 + 0.1}
                    as="div"
                  >
                    <h2 className="text-3xl font-display text-plum">{program.title}</h2>
                  </Reveal>

                  <Reveal
                    key={`${program.id}-problem`}
                    delay={index * 0.05 + 0.15}
                    as="div"
                    className="space-y-3"
                  >
                    <h3 className="text-xl font-semibold text-muted-foreground">
                      The Challenge
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {program.problem}
                    </p>
                  </Reveal>

                  <Reveal
                    key={`${program.id}-solution`}
                    delay={index * 0.05 + 0.2}
                    as="div"
                    className="space-y-3"
                  >
                    <h3 className="text-xl font-semibold text-muted-foreground">
                      Our Response
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {program.solution}
                    </p>
                  </Reveal>

                  <Reveal
                    key={`${program.id}-outcome`}
                    delay={index * 0.05 + 0.25}
                    as="div"
                    className="space-y-3"
                  >
                    <h3 className="text-xl font-semibold text-muted-foreground">
                      Lasting Impact
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {program.outcome}
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Gradient CTA pause point - the signature "pause point" for the page */}
        <section className="relative">
          {/* Full-width gradient background */}
          <div className="pointer-events-none absolute inset-0 -z-10"
               style={{ backgroundImage: "var(--gradient)" }}
               aria-hidden="true">
          </div>

          <div className="mx-auto max-w-3xl py-16 px-6 text-center">
            <SectionHeading
              eyebrow="Take action"
              title="Support our programs today"
              className="mb-6"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Each program represents a critical intervention in the journey from incarceration to empowerment.
              Your support ensures that dignity is not just restored, but sustained for the women and girls
              we serve across Kenya.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/volunteer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:border-primary/30"
                >
                  Volunteer
                </Button>
              </Link>
              <Link to="/donate">
                <Button
                  variant="gold"
                  size="lg"
                >
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}