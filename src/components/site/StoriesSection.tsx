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
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16" id="stories">
      {withHeading ? (
        <SectionHeading
          eyebrow="Impact stories"
          title="Dignity, told in the first person"
          description="Numbers open doors. These are the women who walk through them."
        />
      ) : null}

      <div className="mt-12 space-y-10">
        {STORIES.map((story, index) => (
          <Reveal key={story.name}>
            <div className="lg:flex lg:items-start lg:gap-12">
              <div className={index % 2 === 0 ? "w-full lg:w-1/2 lg:order-1" : "w-full lg:w-1/2 lg:order-2"}>
                <img
                  src={story.image}
                  alt={story.alt}
                  loading="lazy"
                  className="rounded-none"
                />
              </div>
              <div className={index % 2 === 0 ? "w-full lg:w-1/2 lg:order-2 space-y-4" : "w-full lg:w-1/2 lg:order-1 space-y-4"}>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  {story.name} · {story.place}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <Quote className="size-5 text-secondary" aria-hidden="true" />
                  <blockquote className="text-2xl font-display font-medium leading-snug text-balance sm:text-3xl">
                    “{story.quote}”
                  </blockquote>
                </div>
                <p className="mt-6 leading-relaxed text-muted-foreground">{story.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}