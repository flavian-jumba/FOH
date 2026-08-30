import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/site/Testimonials";

const title = "Our Community — Simply Feminine Network";
const description =
  "Hear from the women whose lives have been transformed by Simply Feminine Network's programs and partnerships.";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <>
      <Testimonials />
    </>
  );
}