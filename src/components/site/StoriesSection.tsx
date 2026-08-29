import { Quote } from "lucide-react";

import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { NewsletterSection } from "@/components/site/NewsletterSection";

export const STORIES = [
  {
    name: "Mama Grace",
    place: "Nairobi",
    image: story1,
    alt: "Portrait of Mama Grace smiling in soft window light",
    quote:
      "I walked out of remand with nothing but a paper bag. The kit they handed me had soap, pads and a note that said 'you are still somebody'. I read it every week.",
    body: "Grace spent fourteen months in remand with her youngest son. Our reintegration team met her at the gate, covered her first month of rent and enrolled her in the tailoring track of the IMARA HER mobile lab.",
    background: "cream"
  },
  {
    name: "Wanjiku",
    place: "Kitui",
    image: story2,
    alt: "Portrait of Wanjiku in her tailoring workshop",
    quote:
      "The van came to our village on a Tuesday. By December I had a machine, two apprentices and a bank account in my own name.",
    body: "Vocational training through IMARA HER turned a borrowed sewing machine into a five-person workshop supplying school uniforms across two sub-counties.",
    background: "mist"
  },
  {
    name: "The Tuesday Circle",
    place: "Kisumu",
    image: gallery4,
    alt: "Women laughing together at a community gathering",
    quote:
      "We came for the pads. We stayed because someone finally asked how our minds were doing.",
    body: "What began as a menstrual health drive became a weekly mental-health circle of ninety-two women, now facilitated entirely by community members we trained.",
    background: "cream"
  }
] as const;

export function StoriesSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <>
      {withHeading ? (
        <SectionHeading
          eyebrow="Impact stories"
          title="Dignity, told in the first person"
          description="Numbers open doors. These are the women who walk through them."
          className="mb-16 lg:mb-20"
        />
      ) : null}

      {/* Stories sections with alternating layouts and backgrounds */}
      <div className="space-y-0">
        {STORIES.map((story, index) => (
          <section
            key={story.name}
            className="relative"
            style={{ backgroundColor: `var(--${story.background})` }}
          >
            {/* Gradient rule as section separator (except for first section) */}
            {index > 0 && (
              <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-0.5"
                   style={{ backgroundImage: "var(--gradient)" }}
                   aria-hidden="true">
              </div>
            )}

            <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
              {/* Alternating layout: even index = image on left, text on right; odd index = text on left, image on right */}
              <div className="grid gap-16 lg:grid-cols-[50%_50%]">
                {/* Image column with circular photo badge treatment */}
                <Reveal
                  key={`${story.name}-image`}
                  delay={index * 0.08}
                  as="div"
                  className={index % 2 === 0
                    ? "lg:col-start-1 lg:row-start-1"
                    : "lg:col-start-2 lg:row-start-1"}
                >
                  <div className="w-50 h-50 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg flex items-center justify-center">
                    <img
                      src={story.image}
                      alt={story.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </Reveal>

                {/* Text column with story content */}
                <Reveal
                  key={`${story.name}-content`}
                  delay={index * 0.08 + 0.1}
                  as="div"
                  className={index % 2 === 0
                    ? "lg:col-start-2 lg:row-start-1 space-y-8"
                    : "lg:col-start-1 lg:row-start-1 space-y-8"}
                >
                  {/* Story meta */}
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span>{story.name}</span>
                    <span className="h-0.5 w-4 bg-primary/20"></span>
                    <span>{story.place}</span>
                  </div>

                  {/* Large pull-quote typography - quotes are the content */}
                  <blockquote className="text-4xl font-display font-medium leading-snug text-balance text-plum mb-6 lg:text-5xl">
                    “{story.quote}”
                  </blockquote>

                  {/* Story body */}
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {story.body}
                  </p>

                  {/* Action button for each story (optional) */}
                  <div className="mt-8">
                    <Link to="/volunteer">
                      <Button
                        variant="outline"
                        size="default"
                        className="border-primary/20 hover:border-primary/30"
                      >
                        Get Involved
                      </Button>
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}

        {/* Gradient CTA pause point - signature "pause point" for the page */}
        <section className="relative">
          {/* Full-width gradient background */}
          <div className="pointer-events-none absolute inset-0 -z-10"
               style={{ backgroundImage: "var(--gradient)" }}
               aria-hidden="true">
          </div>

          <div className="mx-auto max-w-3xl py-16 px-6 text-center">
            <SectionHeading
              eyebrow="Share your story"
              title="Your voice adds to our chorus"
              className="mb-6"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Every story of dignity restored strengthens our collective understanding of what's possible.
              If you or someone you know has a story to share, we listen with respect and confidentiality.
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

        {/* Newsletter Section */}
        <section className="relative">
          <Reveal as="div" key="newsletter-section">
            <NewsletterSection />
          </Reveal>
        </section>
      </div>
    </>
  );
}