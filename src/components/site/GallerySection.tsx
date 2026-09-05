import { Gallery, GalleryGrid, GalleryImage } from "@/components/ui/shared-element-gallery";
import { Eyebrow } from "./Eyebrow";

const galleryModules = import.meta.glob("../../assets/gallery/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const galleryImages = Object.entries(galleryModules)
  .sort(([firstPath], [secondPath]) =>
    firstPath.localeCompare(secondPath, undefined, { numeric: true }),
  )
  .map(([, src], index) => ({
    id: `foh-gallery-${index + 1}`,
    src,
    alt: `Footprints of Hope community moment ${index + 1}`,
  }));

export function GallerySection() {
  return (
    <section className="section-pad bg-cream">
      <div className="shell">
        <header className="max-w-3xl">
          <Eyebrow>FOH Gallery</Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.2rem]">
            Moments of
            <br />
            <span className="font-light italic text-burgundy">hope in action</span>
          </h1>
          <p className="mt-7 text-base leading-relaxed text-[color:var(--muted-foreground)]">
            A glimpse into the people, programmes and community moments that shape Footprints of
            Hope. Select any photograph to view it in full.
          </p>
        </header>

        <Gallery>
          <GalleryGrid className="mt-12">
            {galleryImages.map((image) => (
              <GalleryImage key={image.id} {...image} />
            ))}
          </GalleryGrid>
        </Gallery>
      </div>
    </section>
  );
}
