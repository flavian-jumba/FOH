import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import dignity from "@/assets/program-dignity.jpg";
import justice from "@/assets/program-justice.jpg";
import mentorship from "@/assets/program-mentorship.jpg";
import summit from "@/assets/event-summit.jpg";
import gala from "@/assets/event-gala.jpg";

const IMAGES = [
  { src: g1, alt: "Schoolgirls laughing together after a dignity kit distribution", caption: "Back in class · Nairobi" },
  { src: dignity, alt: "Volunteers packing dignity kits", caption: "Kit packing day · Nairobi" },
  { src: g3, alt: "Two women holding hands in support", caption: "Peer support circle · Kisumu" },
  { src: g2, alt: "The solar-powered IMARA HER mobile empowerment lab in a rural community", caption: "IMARA HER mobile lab · Kitui" },
  { src: justice, alt: "A legal literacy clinic in session", caption: "Legal literacy clinic · Nairobi" },
  { src: g4, alt: "Women celebrating at a community gathering", caption: "Graduation day · Kisumu" },
  { src: mentorship, alt: "A mentorship workshop with young women", caption: "Mentorship cohort · Nairobi" },
  { src: summit, alt: "The Women's Leadership Summit stage in Berlin", caption: "Leadership summit · Berlin" },
  { src: gala, alt: "The annual charity gala ballroom", caption: "Annual charity gala · Nairobi" },
];

export function GallerySection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32" id="gallery">
      {withHeading ? (
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the field"
          description="Photography from our outreaches, drives, cohorts and gatherings across Kenya and Europe."
        />
      ) : null}

      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {IMAGES.map((image, i) => (
          <Reveal key={image.caption} delay={(i % 3) * 0.08} className="break-inside-avoid">
            <figure className="group zoom-media card-lift relative overflow-hidden rounded-[1.75rem] bg-card shadow-soft">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-[oklch(0.2_0.05_300_/_0.85)] to-transparent p-5 text-sm text-white transition-transform duration-500 group-hover:translate-y-0">
                {image.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
