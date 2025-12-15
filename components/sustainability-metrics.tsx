"use client"

import { Card } from "@/components/ui/card"
import { Leaf, Users, TrendingUp, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const metrics = [
  {
    label: "Plastic Reduced",
    value: "12.4",
    unit: "tons",
    icon: Leaf,
    color: "primary",
  },
  {
    label: "CO₂ Saved",
    value: "7.2M",
    unit: "kg",
    icon: TrendingUp,
    color: "secondary",
  },
  {
    label: "Users Impacting Change",
    value: "48,200",
    unit: "+",
    icon: Users,
    color: "primary",
  },
  {
    label: "Energy Generated",
    value: "3.8M",
    unit: "kWh",
    icon: Zap,
    color: "secondary",
  },
]

export function SustainabilityMetrics() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("metrics-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="metrics-section"
      className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Network background effect */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-primary" />
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="50"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
              />
              <line
                x1="50"
                y1="50"
                x2="50"
                y2="100"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance">
            Sustainability Metrics
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Real-time impact from our community of conscious consumers making a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <Card
                key={metric.label}
                className={`p-8 text-center space-y-4 transition-all duration-700 hover:shadow-xl hover:shadow-primary/10 border-border/50 bg-card/70 backdrop-blur-sm ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center">
                  <div className={`p-4 rounded-2xl bg-${metric.color}/10`}>
                    <Icon className={`h-8 w-8 text-${metric.color}`} />
                  </div>
                </div>
                <div>
                  <p
                    className={`text-4xl md:text-5xl font-bold text-${metric.color} font-[family-name:var(--font-space-grotesk)]`}
                  >
                    {metric.value}
                    <span className="text-2xl ml-1">{metric.unit}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">{metric.label}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
