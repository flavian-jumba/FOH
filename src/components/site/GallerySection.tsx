import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import dignity from "@/assets/program-dignity.jpg";
import justice from "@/assets/program-justice.jpg";
import mentorship from "@/assets/program-mentorship.jpg";
import summit from "@/assets/event-summit.jpg";
import gala from "@/assets/event-gala.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";

// Organized gallery data by category for better organization
const GALLERY_CATEGORIES = [
  {
    category: "Outreach & Drives",
    background: "cream",
    images: [
      {
        src: g1,
        alt: "Schoolgirls laughing together after a dignity kit distribution",
        caption: "Back in class · Nairobi",
        story: "After receiving dignity kits, these girls returned to school with confidence, knowing they could manage their menstrual health with dignity."
      },
      {
        src: dignity,
        alt: "Volunteers packing dignity kits",
        caption: "Kit packing day · Nairobi",
        story: "Our volunteer team prepares hundreds of dignity kits each month, each containing essential hygiene items for women and girls in need."
      },
      {
        src: story2,
        alt: "Wanjiku showing her tailoring work to a customer",
        caption: "Entrepreneurship in action · Kitui",
        story: "Wanjiku used her IMARA HER training to start a tailoring business that now employs two apprentices and serves her entire community."
      }
    ]
  },
  {
    category: "Prison & Justice",
    background: "mist",
    images: [
      {
        src: justice,
        alt: "A legal literacy clinic in session",
        caption: "Legal literacy clinic · Nairobi",
        story: "Women learn about their rights and the justice system through our legal literacy clinics, empowering them to navigate incarceration and reintegration."
      },
      {
        src: story1,
        alt: "Mama Grace holding her certificate of completion",
        caption: "Reintegration success · Nairobi",
        story: "After fourteen months in remand, Mama Grace completed our tailoring program and now runs her own business, supporting her family with dignity."
      }
    ]
  },
  {
    category: "Empowerment Programs",
    background: "cream",
    images: [
      {
        src: mentorship,
        alt: "A mentorship workshop with young women",
        caption: "Mentorship cohort · Nairobi",
        story: "Our mentorship programs provide vocational training, mental health support, and enterprise skills to young women affected by the justice system."
      },
      {
        src: summit,
        alt: "The Women's Leadership Summit stage in Berlin",
        caption: "Leadership summit · Berlin",
        story: "Our annual summit in Berlin brings together diaspora leaders, policymakers, and advocates to create sustainable support for grassroots initiatives."
      },
      {
        src: g3,
        alt: "Two women holding hands in support",
        caption: "Peer support circle · Kisumu",
        story: "Women in our programs create powerful support networks that continue long after formal programming ends, providing ongoing encouragement and resources."
      }
    ]
  },
  {
    category: "Community & Celebration",
    background: "mist",
    images: [
      {
        src: g4,
        alt: "Women celebrating at a community gathering",
        caption: "Graduation day · Kisumu",
        story: "Graduation days celebrate the achievements of women who have completed our programs, marking their transition to empowered community members."
      },
      {
        src: gala,
        alt: "The annual charity gala ballroom",
        caption: "Annual charity gala · Nairobi",
        story: "Our annual gala brings together supporters, partners, and advocates to celebrate our work and raise funds for the coming year's programs."
      },
      {
        src: g2,
        alt: "The solar-powered IMARA HER mobile empowerment lab in a rural community",
        caption: "Mobile lab in action · Kitui",
        story: "Our IMARA HER mobile lab brings vocational training, mental health support, and enterprise mentorship directly to communities that need it most."
      }
    ]
  }
] as const;

export function GallerySection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <>
      {withHeading ? (
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the field"
          description="Photography from our outreaches, drives, cohorts and gatherings across Kenya and Europe."
          className="mb-16 lg:mb-20"
        />
      ) : null}

      {/* Gallery sections by category */}
      <div className="space-y-0">
        {GALLERY_CATEGORIES.map((category, catIndex) => (
          <section
            key={category.category}
            className="relative"
            style={{ backgroundColor: `var(--${category.background})` }}
          >
            {/* Gradient rule as section separator (except for first section) */}
            {catIndex > 0 && (
              <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-0.5"
                   style={{ backgroundImage: "var(--gradient)" }}
                   aria-hidden="true">
              </div>
            )}

            <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
              <SectionHeading
                eyebrow={category.category}
                title="See our work in action"
                className="mb-12"
              />

              {/* Masonry/Justified Gallery Grid */}
              <Reveal as="div" key={`gallery-grid-${catIndex}`} delay={catIndex * 0.05}>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.images.map((image, imgIndex) => (
                    <div
                      key={image.caption}
                      className="group hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                      onClick={() => {
                        // In a full implementation, this would open a lightbox
                        // For now, we'll just log or could navigate to a detail view
                        console.log("Opening image:", image.caption);
                        // Could implement lightbox here or navigate to a detail route
                      }}
                    >
                      <div className="relative overflow-hidden rounded-lg border border-primary/5">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Caption overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-transparent to-[oklch(0.2_0.05_300_/_0.7)] px-4 py-3">
                          <p className="text-sm font-medium text-white">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
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
              eyebrow="Support our visual storytelling"
              title="Help us share these important moments"
              className="mb-6"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Every photograph in our gallery represents a moment of dignity restored, empowerment achieved, or community strengthened.
              Your support ensures we can continue documenting and sharing these important stories.
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