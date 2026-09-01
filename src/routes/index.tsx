import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/Hero";
import { OurStory } from "@/components/site/OurStory";
import { FourPillars } from "@/components/site/FourPillars";
import { ProjectsProgrammes } from "@/components/site/ProjectsProgrammes";
import { EventsSection } from "@/components/site/EventsSection";
import { PartnersCollaborators } from "@/components/site/PartnersCollaborators";
import { SponsorshipTiers } from "@/components/site/SponsorshipTiers";
import { ContactSection } from "@/components/site/ContactSection";

const title = "Simply Feminine Network — Women of Purpose — Giving Back with Grace";
const description =
  "Simply Feminine Network is an award-winning women-led NGO committed to women's health, ending gender-based violence, mentorship, and community empowerment — in Kenya and across the world.";

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
      <EventsSection />
      <PartnersCollaborators />
      <SponsorshipTiers />
      <ContactSection />
    </>
  );
}
