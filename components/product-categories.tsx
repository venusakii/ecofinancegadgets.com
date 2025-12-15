import { Card } from "@/components/ui/card"
import { Wallet, Gauge, Battery, Thermometer, TrendingUp, Leaf, Sun, Shield, Zap } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    title: "Solar-Powered Smart Wallets",
    icon: Wallet,
    slug: "solar-wallets",
    color: "primary",
  },
  {
    title: "Carbon Footprint Finance Trackers",
    icon: Gauge,
    slug: "carbon-trackers",
    color: "secondary",
  },
  {
    title: "Energy-Efficient Home Monitors",
    icon: Battery,
    slug: "energy-monitors",
    color: "primary",
  },
  {
    title: "Smart Saving Sensors",
    icon: Thermometer,
    slug: "saving-sensors",
    color: "secondary",
  },
  {
    title: "Ethical Investing Gadgets",
    icon: TrendingUp,
    slug: "investing-gadgets",
    color: "primary",
  },
  {
    title: "Sustainable Payment Devices",
    icon: Shield,
    slug: "payment-devices",
    color: "secondary",
  },
  {
    title: "Solar Charging Stations",
    icon: Sun,
    slug: "charging-stations",
    color: "primary",
  },
  {
    title: "Eco-Friendly Power Banks",
    icon: Zap,
    slug: "power-banks",
    color: "secondary",
  },
  {
    title: "Green Finance Apps",
    icon: Leaf,
    slug: "finance-apps",
    color: "primary",
  },
]

export function ProductCategories() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Discover sustainable gadgets designed to transform your financial habits into environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={category.slug} href={`/products/${category.slug}`}>
                <Card
                  className="group p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm animate-leaf-grow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-xl bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors`}
                    >
                      <Icon className={`h-6 w-6 text-${category.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-balance leading-snug">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
