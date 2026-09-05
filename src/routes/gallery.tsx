import { createFileRoute } from "@tanstack/react-router";

import { GallerySection } from "@/components/site/GallerySection";

const title = "Gallery — Footprints of Hope";
const description =
  "Explore moments from Footprints of Hope programmes and community work in Busia County, Kenya.";

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
  return <GallerySection />;
}
