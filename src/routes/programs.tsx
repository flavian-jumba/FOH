import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { ProgramsSection } from "@/components/site/ProgramsSection";
import { DonationSection } from "@/components/site/DonationSection";

const title = "Our Programs — Justice Outreach, Dignity Kits & Mentorship";
const description =
  "Justice system outreach, sanitary towel drives and the IMARA HER mentorship and leadership lab — how Simply Feminine Network restores dignity across Kenya.";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Dignity, delivered where the system stops"
        description="Three flagship programs, one mobile lab and a diaspora pipeline — designed so that support does not end at the prison gate."
      />
      <ProgramsSection withHeading={false} />
      <DonationSection />
    </>
  );
}
