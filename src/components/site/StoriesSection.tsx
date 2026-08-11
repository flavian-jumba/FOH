import { Quote } from "lucide-react";

import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const STORIES = [
  {
    name: "Mama Grace",
    place: "Nairobi",
    image: story1,
    alt: "Portrait of Mama Grace smiling in soft window light",
    quote:
      "I walked out of remand with nothing but a paper bag. The kit they handed me had soap, pads and a note that said 'you are still somebody'. I read it every week.",
    body: "Grace spent fourteen months in remand with her youngest son. Our reintegration team met her at the gate, covered her first month of rent and enrolled her in the tailoring track of the IMARA HER mobile lab.",
  },
  {
    name: "Wanjiku",
    place: "Kitui",
    image: story2,
    alt: "Portrait of Wanjiku in her tailoring workshop",
    quote:
      "The van came to our village on a Tuesday. By December I had a machine, two apprentices and a bank account in my own name.",
    body: "Vocational training through IMARA HER turned a borrowed sewing machine into a five-person workshop supplying school uniforms across two sub-counties.",
  },
  {
    name: "The Tuesday Circle",
    place: "Kisumu",
    image: gallery4,
    alt: "Women laughing together at a community gathering",
    quote:
      "We came for the pads. We stayed because someone finally asked how our minds were doing.",
    body: "What began as a menstrual health drive became a weekly mental-health circle of ninety-two women, now facilitated entirely by community members we trained.",
  },
] as const;

export function StoriesSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32" id="stories">
      {withHeading ? (
        <SectionHeading
          eyebrow="Impact stories"
          title="Dignity, told in the first person"
          description="Numbers open doors. These are the women who walk through them."
        />
      ) : null}

      <div className="mt-16 space-y-24">
        {STORIES.map((story, i) => (
          <Reveal key={story.name}>
            <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div
                className={`zoom-media relative overflow-hidden rounded-[2.5rem] shadow-lift ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={story.image}
                  alt={story.alt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] size-full object-cover"
                />
                <div
                  className="gradient-primary pointer-events-none absolute inset-0 opacity-10 mix-blend-multiply"
                  aria-hidden="true"
                />
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="eyebrow text-accent">
                  {story.name} · {story.place}
                </p>
                <Quote className="mt-6 size-8 text-secondary" aria-hidden="true" />
                <blockquote className="mt-4 font-display text-2xl leading-snug font-medium text-balance sm:text-3xl">
                  “{story.quote}”
                </blockquote>
                <p className="mt-6 leading-relaxed text-muted-foreground">{story.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
