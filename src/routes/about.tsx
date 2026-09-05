import { createFileRoute } from "@tanstack/react-router";
import { OurStory } from "@/components/site/OurStory";

const title = "About Us — Footprints of Hope";
const description =
  "Footprints of Hope is a community-driven organization empowering adolescent girls, young women and youth in Busia County, Kenya.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <OurStory />
    </>
  );
}
