import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import { ORG } from "@/components/site/site-data";

const title = "Terms of Use — Simply Feminine Network";
const description =
  "The terms governing use of the Simply Feminine Network website, donations, volunteer applications, event participation and content.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      updated="Last updated: 1 August 2026"
      sections={[
        {
          heading: "Acceptance",
          body: [
            `By accessing this website you agree to these terms. If you do not agree, please discontinue use. ${ORG.name} is a non-governmental organization registered in Kenya.`,
          ],
        },
        {
          heading: "Donations",
          body: [
            "The checkout on this site is a demonstration interface and does not process live payments. Confirmed giving channels are shared directly by our finance team.",
            "Donations are applied to programme delivery and operations at the organization's discretion, in line with any restriction agreed in writing with the donor. Donations are generally non-refundable once processed.",
          ],
        },
        {
          heading: "Volunteering and events",
          body: [
            "Volunteer applications are subject to screening, safeguarding checks and placement availability. Attendance at our events may be subject to invitation, vetting and a code of conduct.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "All text, photography, marks and design elements on this site belong to the organization or its licensors and may not be reproduced commercially without written permission.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "You agree not to misuse this site, attempt unauthorised access, submit unlawful content, or use our contact channels for harassment or spam.",
          ],
        },
        {
          heading: "Liability and governing law",
          body: [
            "The site is provided on an 'as is' basis. To the extent permitted by law we exclude liability for indirect loss arising from its use. These terms are governed by the laws of Kenya.",
            `Questions about these terms: ${ORG.email}.`,
          ],
        },
      ]}
    />
  );
}
