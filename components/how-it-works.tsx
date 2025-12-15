"use client"

import { CheckCircle2, Smartphone, TrendingUp, Sprout } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

const steps = [
  {
    number: "1",
    title: "Choose Your Gadget",
    description: "Browse our curated selection of eco-friendly financial tools designed for conscious living.",
    icon: CheckCircle2,
  },
  {
    number: "2",
    title: "Sync with the EcoFinance App",
    description: "Connect your device seamlessly to track your financial and environmental impact in real-time.",
    icon: Smartphone,
  },
  {
    number: "3",
    title: "Track Savings and Emissions",
    description: "Monitor your carbon footprint reduction while optimizing your spending habits.",
    icon: TrendingUp,
  },
  {
    number: "4",
    title: "Watch Your Eco-Score Grow",
    description: "See the tangible impact of your choices as both your wealth and the planet flourish.",
    icon: Sprout,
  },
]

export function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleSteps((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    document.querySelectorAll(".step-card").forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Four simple steps to transform your financial habits into environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isVisible = visibleSteps.includes(index)

            return (
              <div key={index} data-index={index} className="step-card">
                <Card
                  className={`relative p-8 h-full transition-all duration-700 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 border-border/50 bg-card/70 backdrop-blur-sm ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/30">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground font-[family-name:var(--font-space-grotesk)]">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>

                  {/* Connecting line (hidden on last step and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-8 w-16 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
