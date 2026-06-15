const stats = [
  { value: "1,200+", label: "Clinics onboarded" },
  { value: "3M+", label: "Patient records managed" },
  { value: "98%", label: "Faster billing cycles" },
  { value: "24/7", label: "Support in your timezone" },
]

export function TrustBar() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Powering modern dental practices nationwide
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
