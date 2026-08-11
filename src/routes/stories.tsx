import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { StoriesSection } from "@/components/site/StoriesSection";
import { NewsletterSection } from "@/components/site/NewsletterSection";

const title = "Impact Stories — Women of the Simply Feminine Network";
const description =
  "First-person stories from women reintegrating after remand, girls back in class and community circles built around mental health in Kenya.";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/stories" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact stories"
        title="Every statistic has a name and a Tuesday"
        description="Told in their words, with their permission, because dignity includes authorship."
      />
      <StoriesSection withHeading={false} />
      <NewsletterSection />
    </>
  );
}
