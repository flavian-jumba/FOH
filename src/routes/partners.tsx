import { createFileRoute } from "@tanstack/react-router";
import { PartnersSection } from "@/components/site/PartnersSection";

const title = "Get Involved — Footprints of Hope";
const description =
  "Partner with Footprints of Hope to create opportunity for girls, young women and youth in Busia County, Kenya.";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <>
      <PartnersSection />
    </>
  );
}
