import { createFileRoute } from "@tanstack/react-router";
import { PartnersCollaborators } from "@/components/site/PartnersCollaborators";

const title = "Partners & Collaborators — Simply Feminine Network";
const description =
  "From Nairobi to Berlin, SFN is backed by diplomats, media houses, luxury venues, and grassroots organisations who share our vision.";

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
      <PartnersCollaborators />
    </>
  );
}