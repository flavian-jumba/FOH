import { createFileRoute } from "@tanstack/react-router";
import { EventsSection } from "@/components/site/EventsSection";

const title = "Events — Simply Feminine Network";
const description =
  "Upcoming events and gatherings hosted by Simply Feminine Network, including our signature charity balls and empowerment summits.";

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