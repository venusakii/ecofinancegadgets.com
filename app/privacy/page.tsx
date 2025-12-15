import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-8">
              Privacy Policy
            </h1>

            <Card className="p-8 md:p-12 space-y-8 border-primary/20 bg-card/50">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-primary">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information that you provide directly to us, including your name, email address, and any
                  other information you choose to provide when using our services or contacting us.
                </p>
              </section>

              <div className="border-t border-border/50" />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-primary">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, to communicate with
                  you, to monitor and analyze trends and usage, and to personalize your experience with
                  EcoFinanceGadgets.com.
                </p>
              </section>

              <div className="border-t border-border/50" />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-primary">
                  Cookies and Tracking
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our service and hold certain
                  information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                </p>
              </section>

              <div className="border-t border-border/50" />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-primary">
                  Third-Party Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites, including Amazon.com. We are not responsible
                  for the privacy practices of these external sites. We encourage you to read the privacy statements of
                  every website you visit.
                </p>
              </section>

              <div className="border-t border-border/50" />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-primary">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information. However, no method of
                  transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </section>

              <div className="border-t border-border/50" />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-primary">
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, update, or delete your personal information at any time. If you wish to
                  exercise these rights, please contact us at privacy@ecofinancegadgets.com.
                </p>
              </section>

              <div className="border-t border-border/50" />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-primary">
                  Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date.
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
