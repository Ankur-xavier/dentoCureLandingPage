import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { FeatureSection } from "@/components/feature-section"
import { Pricing } from "@/components/pricing"
import { Faq } from "@/components/faq"
import { DemoForm } from "@/components/demo-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <TrustBar />

      <FeatureSection
        id="features"
        eyebrow="Patient management"
        title="Every patient's full story, one tap away"
        description="Centralize records, medical history, treatment plans, and documents in a single secure profile your whole team can trust."
        points={[
          "Complete medical & dental history with allergy alerts",
          "Treatment timelines and visit notes in chronological order",
          "Upload X-rays, prescriptions, and consent forms",
          "Smart search across patients, phone numbers, and treatments",
        ]}
        image="/patient-management.jpg"
        imageAlt="DentOS patient management screen with profile, history, and records table"
      />

      <FeatureSection
        id="charting"
        eyebrow="Dental charting"
        title="Interactive charting that speaks dentistry"
        description="A clinically accurate odontogram designed for speed. Mark conditions, plan procedures, and track tooth-level history visually."
        points={[
          "FDI & Universal numbering with full odontogram",
          "Color-coded conditions, procedures, and treatment status",
          "Per-tooth notes, history, and planned vs. completed work",
          "Generate treatment estimates straight from the chart",
        ]}
        image="/dental-charting.png"
        imageAlt="DentOS interactive dental charting odontogram with tooth condition markers"
        reverse
        muted
      />

      <FeatureSection
        id="scheduling"
        eyebrow="Appointment scheduling"
        title="A calendar your front desk will love"
        description="Manage multiple chairs and doctors effortlessly, and cut no-shows with automated reminders over WhatsApp and SMS."
        points={[
          "Multi-doctor, multi-chair drag-and-drop calendar",
          "Online booking through your branded patient portal",
          "Automated WhatsApp & SMS reminders in regional languages",
          "Waitlist and recall management built in",
        ]}
        image="/scheduling.jpg"
        imageAlt="DentOS appointment scheduling calendar with weekly view and booking panel"
      />

      <FeatureSection
        id="billing"
        eyebrow="Billing & invoicing"
        title="GST-ready billing, done in seconds"
        description="Generate compliant invoices, collect payments, and track every rupee — without leaving your patient's chart."
        points={[
          "GST-compliant invoices with HSN/SAC codes",
          "Accept UPI, cards, and cash with payment tracking",
          "Share receipts instantly over WhatsApp, SMS, or email",
          "Daily collections, outstanding dues, and revenue reports",
        ]}
        image="/billing.jpg"
        imageAlt="DentOS billing and invoicing screen with line items, GST and rupee amounts"
        reverse
        muted
      />

      <Pricing />
      <Faq />
      <DemoForm />
      <SiteFooter />
    </main>
  )
}
