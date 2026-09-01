import { createFileRoute } from "@tanstack/react-router";
import { OurStory } from "@/components/site/OurStory";

const title = "About Us — Simply Feminine Network";
const description =
  "Simply Feminine Network is a women-led NGO founded by Tabitha Mwelu John with a singular, unwavering purpose: to serve, uplift, and celebrate women at every stage of their journey.";

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
