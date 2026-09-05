import { createFileRoute } from "@tanstack/react-router";
import { EventsSection } from "@/components/site/EventsSection";

const title = "Support FOH — Footprints of Hope";
const description =
  "Support Footprints of Hope through education, sustainable agribusiness, partnerships and mentorship.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <EventsSection />
    </>
  );
}
