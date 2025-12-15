import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-primary/5 border-t border-border/50">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 pointer-events-none" />

      <div className="container relative mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)]">
              <span className="text-primary">Eco</span>
              <span className="text-secondary">Finance</span>
              <span className="text-foreground">Gadgets</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Financial wellness meets sustainable technology. Invest in your planet and yourself.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products/solar-wallets" className="hover:text-primary transition-colors">
                  Solar Wallets
                </Link>
              </li>
              <li>
                <Link href="/products/carbon-trackers" className="hover:text-primary transition-colors">
                  Carbon Trackers
                </Link>
              </li>
              <li>
                <Link href="/products/energy-monitors" className="hover:text-primary transition-colors">
                  Energy Monitors
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  All Gadgets
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-primary transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Cookie Notice */}
        <div className="border-t border-border/50 pt-6 mb-6">
          <p className="text-xs text-muted-foreground text-center">
            🍪 We use responsible cookies — no waste, no clutter.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">© 2025 EcoFinanceGadgets.com — All rights reserved.</p>
          <p className="text-xs text-muted-foreground">As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
