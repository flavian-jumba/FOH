import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/Hero";
import { ImpactBar } from "@/components/site/ImpactBar";
import { ProgramsSection } from "@/components/site/ProgramsSection";
import { EventsSection } from "@/components/site/EventsSection";
import { DonationSection } from "@/components/site/DonationSection";
import { PartnersSection } from "@/components/site/PartnersSection";
import { NewsletterSection } from "@/components/site/NewsletterSection";

const title = "Simply Feminine Network — Restoring Dignity. Empowering Women.";
const description =
  "A Kenyan NGO restoring dignity to women and children affected by the criminal justice system through outreach, dignity kits, mental health support and leadership.";

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

      <ImpactBar />
      <ProgramsSection />
      <DonationSection />
      <EventsSection />
      <PartnersSection />
      <NewsletterSection />
    </>
  );
}
