import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/Hero";
import { OurStory } from "@/components/site/OurStory";
import { FourPillars } from "@/components/site/FourPillars";
import { ProjectsProgrammes } from "@/components/site/ProjectsProgrammes";
import { CurrentPrograms } from "@/components/site/CurrentPrograms";
import { EventsSection } from "@/components/site/EventsSection";
import { PartnersCollaborators } from "@/components/site/PartnersCollaborators";
import { OurTeam } from "@/components/site/OurTeam";
import { SponsorshipTiers } from "@/components/site/SponsorshipTiers";
import { ContactSection } from "@/components/site/ContactSection";

const title = "Footprints of Hope — Obtaining Diamonds From The Rough";
const description =
  "Footprints of Hope empowers adolescent girls, young women and youth in Busia County, Kenya through economic empowerment, menstrual health education and psychosocial support.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <OurStory />
      <FourPillars />
      <ProjectsProgrammes />
      <CurrentPrograms />
      <EventsSection />
      <PartnersCollaborators />
      <OurTeam />
      <SponsorshipTiers />
      <ContactSection />
    </>
  );
}
