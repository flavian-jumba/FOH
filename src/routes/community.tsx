import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/site/Testimonials";

const title = "Our Impact — Footprints of Hope";
const description =
  "See how Footprints of Hope creates pathways to education, economic empowerment, dignity and wellbeing in Busia County, Kenya.";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <>
      <Testimonials />
    </>
  );
}
