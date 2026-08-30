import { createFileRoute } from "@tanstack/react-router";
import { ProjectsProgrammes } from "@/components/site/ProjectsProgrammes";

const title = "Projects & Programmes — Simply Feminine Network";
const description =
  "From a mobile health lab in rural Kenya to a luxury empowerment summit in Berlin — SFN's work is as diverse as the women it serves.";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" ]),
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