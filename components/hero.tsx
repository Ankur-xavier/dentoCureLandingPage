import Image from "next/image"
import { ShieldCheck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-accent/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Built for Indian dental clinics · DPDP-ready
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            The complete EMR that runs your dental practice
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            From patient records and interactive dental charting to appointments
            and GST-ready billing — DentoCure brings your entire clinic into one
            secure, beautifully simple platform.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#demo">Book a free demo</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              <a href="#features">Explore features</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 ring-1 ring-border">
            <Image
              src="/tooth-anatomy.png"
              alt="Cross-section diagram of a tooth showing enamel, dentin, pulp, nerve and root anatomy"
              width={1600}
              height={1000}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
