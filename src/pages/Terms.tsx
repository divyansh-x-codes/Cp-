import LegalLayout from "@/components/LegalLayout";
import LegalCard from "@/components/LegalCard";

const sections = [
  {
    title: "1. Service description",
    content:
      "ContentOps provides subscription-based content creation and delivery for educators. Deliverables may include PPTs, short-form edits, captions, calendars, and workflow support based on your briefs.",
  },
  {
    title: "2. Subscription & billing",
    content:
      "Billing is monthly recurring unless otherwise agreed. By subscribing, you authorize charges at the start of each billing cycle. Prices may change with prior notice.",
  },
  {
    title: "3. Turnaround SLA",
    content:
      "Standard delivery typically starts within 24–48 hours after receiving a usable brief. Timelines may vary by workload, complexity, and volume.",
  },
  {
    title: "4. Revisions",
    content:
      "Revisions are limited by plan scope. Requests should be raised within a reasonable window after delivery. Major scope changes are treated as new requests.",
  },
  {
    title: "5. Content usage",
    content:
      "Upon payment, you get a license to use delivered content for your channels. You may not resell delivered work as-is to third parties.",
  },
  {
    title: "6. Acceptable use",
    content:
      "You must not request illegal, infringing, hateful, or harmful content. We may refuse/terminate service for violations.",
  },
  {
    title: "7. Limitation of liability",
    content:
      "Total liability is limited to the fees paid for the most recent billing periods (as permitted by law). We are not liable for indirect losses such as lost revenue or business interruption.",
  },
  {
    title: "8. Governing law",
    content:
      "These terms are governed by the laws of India. Any disputes will be handled under applicable jurisdiction as required by law.",
  },
  {
    title: "9. Contact",
    content:
      "For questions: divyansh.coredev@gmail.com (WhatsApp support for active subscribers).",
  },
];

export default function Terms() {
  return (
    <LegalLayout title="terms & conditions" showNav>
      <p className="text-sm text-[#631C1C]/55 mb-8 italic text-center">
        Last updated: February 15, 2026
      </p>

      <LegalCard>
        <div className="space-y-10 text-[#631C1C]">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl md:text-2xl font-serif font-semibold mb-3">
                {s.title}
              </h2>
              <p className="text-[#631C1C]/75 leading-relaxed">
                {s.content}
              </p>
            </section>
          ))}
        </div>
      </LegalCard>
    </LegalLayout>
  );
}
