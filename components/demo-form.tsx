"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="demo" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Book a demo
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              See DentoCure in action at your clinic
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Schedule a personalized 30-minute walkthrough. We'll show you how
              DentoCure fits your workflow and answer every question — no
              commitment required.
            </p>

            <ul className="mt-8 grid gap-5">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-foreground">30-minute live walkthrough</p>
                  <p className="text-sm text-muted-foreground">
                    Tailored to your clinic's specialty and size.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Call us directly</p>
                  <p className="text-sm text-muted-foreground">+91 80 4718 2200 · Mon–Sat, 9am–7pm IST</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Email our team</p>
                  <p className="text-sm text-muted-foreground">hello@dentocure.in</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-primary/5 md:p-8">
            {submitted ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  Thank you! We'll be in touch.
                </h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Our team will reach out within one business day to schedule
                  your personalized demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" placeholder="Dr. Ananya Sharma" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@clinic.in"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98XXXXXXXX"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="clinic">Clinic name</Label>
                  <Input id="clinic" name="clinic" placeholder="Smile Dental Care" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="size">Clinic size</Label>
                  <Select>
                    <SelectTrigger id="size">
                      <SelectValue placeholder="Select number of chairs" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 chair (solo)</SelectItem>
                      <SelectItem value="2-4">2–4 chairs</SelectItem>
                      <SelectItem value="5-10">5–10 chairs</SelectItem>
                      <SelectItem value="10+">10+ chairs / multi-branch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Anything specific you'd like to see?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="e.g. dental charting, GST billing, WhatsApp reminders..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Request my demo
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to our privacy policy. We never share
                  your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
