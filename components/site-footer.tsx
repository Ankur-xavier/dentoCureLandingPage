import { Stethoscope } from "lucide-react"

const columns = [
  {
    title: "Product",
    links: ["Patient records", "Dental charting", "Scheduling", "Billing & GST", "Analytics"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Customers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help center", "Onboarding guide", "Data migration", "API docs", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy policy", "Terms of service", "DPDP compliance", "Security"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Stethoscope className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">DentoCure</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The modern operating system for dental practices across India.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
                <ul className="mt-4 grid gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DentoCure Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Made in India · Hosted in India</p>
        </div>
      </div>
    </footer>
  )
}
