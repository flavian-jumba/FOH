import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { VolunteerSection } from "@/components/site/VolunteerSection";
import { PartnersSection } from "@/components/site/PartnersSection";

const title = "Volunteer — Join the Simply Feminine Network";
const description =
  "Volunteer with Simply Feminine Network in Kenya: prison outreach, dignity kit drives, mentorship, counselling, logistics and storytelling roles.";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/volunteer" },
    ],
    links: [{ rel: "canonical", href: "/volunteer" }],
  }),
  component: VolunteerPage,
});

function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="There is a place for exactly what you can do"
        description="Whether you have an afternoon a month or a professional skill to donate, our coordinators will match you to an outreach."
      />
      <VolunteerSection withHeading={false} />
      <PartnersSection />
    </>
  );
}
