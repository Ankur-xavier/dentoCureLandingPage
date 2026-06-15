import Image from "next/image"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureSectionProps {
  id?: string
  eyebrow: string
  title: string
  description: string
  points: string[]
  image: string
  imageAlt: string
  reverse?: boolean
  muted?: boolean
}

export function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  points,
  image,
  imageAlt,
  reverse = false,
  muted = false,
}: FeatureSectionProps) {
  return (
    <section
      id={id}
      className={cn("border-b border-border", muted ? "bg-secondary/40" : "bg-background")}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={cn(reverse && "lg:order-2")}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
            <ul className="mt-8 grid gap-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-base text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={cn(reverse && "lg:order-1")}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">
              <Image
                src={image || "/placeholder.svg"}
                alt={imageAlt}
                width={1800}
                height={1200}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
