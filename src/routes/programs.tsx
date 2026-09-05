import { createFileRoute } from "@tanstack/react-router";
import { ProjectsProgrammes } from "@/components/site/ProjectsProgrammes";

const title = "Our Work — Footprints of Hope";
const description =
  "Explore Footprints of Hope's four focus areas: teen mothers' reintegration, agribusiness, menstrual health and wellbeing support.";

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
      <ProjectsProgrammes />
    </>
  );
}
