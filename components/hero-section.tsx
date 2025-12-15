"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let animationFrameId: number
    const particles: Array<{
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(143, 185, 150, ${particle.opacity})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden eco-cursor">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-leaf-grow">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl" />
              <Leaf className="relative h-16 w-16 text-primary animate-glow-pulse" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">
            Balance <span className="text-primary">Prosperity</span> and <span className="text-secondary">Planet</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
            Eco-friendly financial gadgets designed for conscious living. Smart wallets, solar-powered trackers, and
            sustainable tech for your daily money habits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="group text-lg h-14 px-8">
              <Link href="/products">
                Explore Eco Gadgets
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg h-14 px-8 border-primary/50 hover:bg-primary/10 bg-transparent"
            >
              <Link href="/learn">Learn How It Works 🌎</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-primary">48K+</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-secondary">7.2M kg</p>
              <p className="text-sm text-muted-foreground">CO₂ Saved</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-primary">12.4 tons</p>
              <p className="text-sm text-muted-foreground">Plastic Reduced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
