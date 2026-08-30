import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/ContactSection";

const title = "Contact — Simply Feminine Network";
const description =
  "Whether you are a corporation seeking a meaningful CSR partnership, a diplomat, a media house, or an individual who believes in the mission — SFN welcomes you.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}