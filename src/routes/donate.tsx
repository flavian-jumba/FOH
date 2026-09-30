import { createFileRoute } from "@tanstack/react-router";

import { DonationPage } from "@/components/site/DonationPage";

const title = "Donate — Footprints of Hope";
const description =
  "Support Footprints of Hope with an M-Pesa donation to expand opportunity, dignity and wellbeing for girls and young women in Busia County.";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/donate" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: DonatePage,
});

function DonatePage() {
  return <DonationPage />;
}
