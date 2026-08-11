import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { EventsSection } from "@/components/site/EventsSection";
import { NewsletterSection } from "@/components/site/NewsletterSection";

const title = "Events — Charity Gala Ball & Women's Leadership Summit";
const description =
  "Join the 3rd Annual Charity Gala Ball in Nairobi and the Women's Leadership & Empowerment Summit in Berlin, hosted by Simply Feminine Network.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/events" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Two rooms that fund a year of dignity"
        description="Black-tie in Nairobi, policy and capital in Berlin — our gatherings turn attention into programming."
      />
      <EventsSection withHeading={false} />
      <NewsletterSection />
    </>
  );
}
