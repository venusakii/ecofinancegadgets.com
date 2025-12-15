"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Elena T.",
    location: "Berlin, Germany",
    quote:
      "EcoFinance turned budgeting into something I look forward to. Watching my eco-score grow alongside my savings is incredibly motivating.",
    rating: 5,
    initials: "ET",
  },
  {
    name: "Chris R.",
    location: "Los Angeles, USA",
    quote:
      "The solar wallet literally pays for itself! My energy costs dropped by 40% in the first month. This is the future of finance.",
    rating: 5,
    initials: "CR",
  },
  {
    name: "Yuki M.",
    location: "Tokyo, Japan",
    quote:
      "I love seeing the real-time impact of my spending choices. The carbon tracker has completely changed how I think about money.",
    rating: 5,
    initials: "YM",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background video effect simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance">
            Our Community
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Join thousands of conscious consumers making a real impact on the planet.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 md:h-80">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`absolute inset-0 p-8 md:p-12 transition-all duration-700 border-border/50 bg-card/80 backdrop-blur-md ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-6 h-full justify-center">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed text-pretty font-[family-name:var(--font-space-grotesk)]">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/30">
                      <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
