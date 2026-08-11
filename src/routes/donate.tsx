import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { DonationSection } from "@/components/site/DonationSection";
import { PartnersSection } from "@/components/site/PartnersSection";

const title = "Donate — Fund Dignity for Women in Kenya";
const description =
  "Give KES 500, 1,000, 5,000 or a custom amount by M-Pesa or card to fund dignity kits, prison outreach and the IMARA HER mobile empowerment lab.";

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
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Fund the first day of someone's new life"
        description="A dignity kit costs less than a dinner. A month of the mobile lab changes a whole sub-county."
      />
      <DonationSection withHeading={false} />
      <PartnersSection />
    </>
  );
}
