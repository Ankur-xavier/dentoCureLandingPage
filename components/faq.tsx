import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Is DentoCure compliant with Indian data protection rules?",
    a: "Yes. DentoCure is built to align with India's Digital Personal Data Protection (DPDP) Act. All patient data is encrypted in transit and at rest, hosted on servers within India, with role-based access controls and full audit logs.",
  },
  {
    q: "Can I migrate my existing patient records?",
    a: "Absolutely. Our onboarding team provides free data migration from spreadsheets, paper records, or your previous software. Most clinics are fully set up within a week.",
  },
  {
    q: "Does the billing support GST and Indian invoicing formats?",
    a: "Yes. DentoCure generates GST-compliant invoices with HSN/SAC codes, supports multiple tax slabs, and lets you share receipts over WhatsApp, SMS, or email instantly.",
  },
  {
    q: "Can patients book appointments online?",
    a: "Patients can book through your branded online portal, and your front desk can manage everything from a unified multi-doctor calendar with automated SMS and WhatsApp reminders.",
  },
  {
    q: "Do you offer training for my staff?",
    a: "Every plan includes guided onboarding. Clinic and Enterprise plans get live training sessions, and Enterprise customers can opt for onsite training across branches.",
  },
  {
    q: "What if I need to cancel?",
    a: "There are no long-term lock-ins. You can cancel anytime, and you'll always be able to export your complete clinic data in standard formats.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need to know about getting started with DentoCure.
          </p>
        </div>

        <Accordion {...({ type: "single", collapsible: "true", className: "mt-10 w-full" } as any)}>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
