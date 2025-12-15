import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-8">
              Terms of Service
            </h1>

            <Card className="p-8 md:p-12 space-y-8 border-primary/20 bg-card/50">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-primary">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using EcoFinanceGadgets.com, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to these terms, please do not use our service.
                </p>
              </section>

              <div className="border-t border-border/50" />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-primary">
                  2. Use License
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials on EcoFinanceGadgets.com for
                  personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                  title.
                </p>
              </section>

              <div className="border-t border-border/50" />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-primary">
                  3. Product Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide accurate product information, including eco-scores and sustainability metrics.
                  However, we do not warrant that product descriptions or other content is accurate, complete, reliable,
                  current, or error-free.
                </p>
              </section>

              <div className="border-t border-border/50" />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-primary">
                  4. Amazon Affiliate Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  EcoFinanceGadgets.com is a participant in the Amazon Services LLC Associates Program, an affiliate
                  advertising program designed to provide a means for sites to earn advertising fees by advertising and
                  linking to Amazon.com.
                </p>
              </section>

              <div className="border-t border-border/50" />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-primary">
                  5. Limitations
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall EcoFinanceGadgets.com or its suppliers be liable for any damages arising out of the
                  use or inability to use the materials on our website, even if we have been notified of the possibility
                  of such damage.
                </p>
              </section>

              <div className="border-t border-border/50" />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-primary">
                  6. Modifications
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may revise these terms of service at any time without notice. By using this website you are
                  agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-primary/20">
                <p className="text-sm text-muted-foreground">Last updated: January 2025</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
