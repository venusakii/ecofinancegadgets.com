import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Cinematic Earth orb effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[600px] h-[600px]">
          <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-secondary/20 to-transparent rounded-full blur-3xl animate-glow-pulse" />
          <div
            className="absolute inset-20 bg-gradient-radial from-primary/40 via-secondary/30 to-transparent rounded-full blur-2xl animate-glow-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute inset-40 bg-gradient-radial from-primary/50 via-secondary/40 to-transparent rounded-full blur-xl animate-glow-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <Sparkles className="h-16 w-16 text-secondary animate-glow-pulse" />
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance leading-tight">
            Join the <span className="text-primary">Eco-Finance</span> Revolution
          </h2>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-muted-foreground text-pretty font-light">
            Financial wellness. Sustainable future.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Button asChild size="lg" className="group text-xl h-16 px-12 shadow-2xl shadow-primary/30">
              <Link href="/products">
                Shop Conscious Tech
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
              <span>48,200+ Happy Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-secondary animate-glow-pulse" />
              <span>99% Satisfaction Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
              <span>Carbon Neutral Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
