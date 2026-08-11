import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { GallerySection } from "@/components/site/GallerySection";

const title = "Gallery — Moments from the Field | Simply Feminine Network";
const description =
  "Photography from prison outreaches, dignity kit drives, the IMARA HER mobile lab, mentorship cohorts and our gatherings in Nairobi and Berlin.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The work, as it actually looks"
        description="Unstaged moments from outreaches, drives, classrooms and celebrations across Kenya and Europe."
      />
      <GallerySection withHeading={false} />
    </>
  );
}
