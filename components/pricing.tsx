import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Solo",
    price: "₹1,499",
    cadence: "/month",
    description: "For single-chair clinics and independent dentists.",
    features: [
      "1 practitioner login",
      "Patient records & history",
      "Interactive dental charting",
      "Appointment scheduling",
      "GST-ready invoicing",
      "Email support",
    ],
    cta: "Start free trial",
    highlighted: false,
  },
  {
    name: "Clinic",
    price: "₹3,999",
    cadence: "/month",
    description: "For growing multi-chair practices and small teams.",
    features: [
      "Up to 8 staff logins",
      "Everything in Solo",
      "SMS & WhatsApp reminders",
      "Multi-doctor calendars",
      "Inventory management",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For multi-branch chains and DSOs across cities.",
    features: [
      "Unlimited staff & branches",
      "Everything in Clinic",
      "Centralized reporting",
      "Custom integrations & API",
      "Dedicated account manager",
      "Onsite onboarding & training",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Pricing
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing in rupees
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            No hidden charges, no per-patient fees. Every plan includes a 14-day
            free trial and free data migration.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card p-6 sm:p-8",
                plan.name === "Enterprise" && "sm:col-span-2 lg:col-span-1",
                plan.highlighted
                  ? "border-primary shadow-xl shadow-primary/10 ring-1 ring-primary"
                  : "border-border",
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">{plan.cadence}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
              <ul className="mt-6 grid flex-1 gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8 w-full"
                variant={plan.highlighted ? "default" : "outline"}
              >
                <a href="#demo" className={cn(!plan.highlighted && "bg-transparent")}>
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
