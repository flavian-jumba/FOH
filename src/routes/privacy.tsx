import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import { ORG } from "@/components/site/site-data";

const title = "Privacy Policy — Simply Feminine Network";
const description =
  "How Simply Feminine Network collects, uses, protects and retains the personal data of donors, volunteers, partners and programme beneficiaries.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="Last updated: 1 August 2026"
      sections={[
        {
          heading: "Information we collect",
          body: [
            "We collect the details you choose to give us: your name, email address, phone number and any message you submit through our volunteer, contact or newsletter forms.",
            "For donations we record the amount and the payment channel selected. This site's checkout is a demonstration and does not capture card numbers or M-Pesa credentials.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "To respond to enquiries, coordinate volunteer placements, acknowledge donations, issue receipts and send programme updates you have asked to receive.",
            "We never sell, rent or trade your personal data. We share it only with service providers who help us operate, and only to the extent required.",
          ],
        },
        {
          heading: "Beneficiary dignity and consent",
          body: [
            "Photographs, names and stories of programme participants are published only with informed, written and revocable consent. Participants may withdraw consent at any time and we will remove the material.",
          ],
        },
        {
          heading: "Retention and security",
          body: [
            "We keep personal data only as long as needed for the purpose it was given, or as required by Kenyan law. Records are stored on access-controlled systems.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Under the Kenya Data Protection Act, 2019 you may request access to, correction of, or deletion of your personal data, and you may object to processing at any time.",
            `To exercise any of these rights, contact us at ${ORG.email} or call ${ORG.phoneKe}.`,
          ],
        },
        {
          heading: "Cookies",
          body: [
            "This website uses only essential cookies required for it to function. We do not run advertising trackers.",
          ],
        },
      ]}
    />
  );
}
