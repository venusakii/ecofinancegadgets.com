import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { ProductCategories } from "@/components/product-categories"
import { HowItWorks } from "@/components/how-it-works"
import { SustainabilityMetrics } from "@/components/sustainability-metrics"
import { Testimonials } from "@/components/testimonials"
import { FinalCTA } from "@/components/final-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProductCategories />
        <HowItWorks />
        <SustainabilityMetrics />
        <Testimonials />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  )
}
