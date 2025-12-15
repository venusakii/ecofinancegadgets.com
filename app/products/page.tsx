import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Leaf, ExternalLink } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "SolarSync Smart Wallet",
    category: "solar-wallets",
    price: "$89.99",
    ecoScore: 95,
    rating: 4.8,
    reviews: 1243,
    description: "RFID-protected wallet with integrated solar charging. Never run out of power.",
    features: ["Solar charging", "RFID protection", "Tracks spending"],
    image: "/solar-smart-wallet.jpg",
  },
  {
    id: 2,
    name: "CarbonTrack Finance Monitor",
    category: "carbon-trackers",
    price: "$129.99",
    ecoScore: 92,
    rating: 4.9,
    reviews: 892,
    description: "Real-time carbon footprint tracking for every transaction. Make informed choices.",
    features: ["Real-time tracking", "Mobile app sync", "Impact reports"],
    image: "/carbon-footprint-tracker-device.jpg",
  },
  {
    id: 3,
    name: "EcoHome Energy Hub",
    category: "energy-monitors",
    price: "$199.99",
    ecoScore: 97,
    rating: 4.7,
    reviews: 654,
    description: "Monitor and optimize your home energy usage. Save money and reduce emissions.",
    features: ["24/7 monitoring", "AI optimization", "Cost forecasting"],
    image: "/home-energy-monitor-display.jpg",
  },
  {
    id: 4,
    name: "SmartSave Sensor Kit",
    category: "saving-sensors",
    price: "$79.99",
    ecoScore: 88,
    rating: 4.6,
    reviews: 521,
    description: "Wireless sensors that detect energy waste and send real-time alerts.",
    features: ["Plug & play", "Smart alerts", "Multi-room coverage"],
    image: "/smart-sensor-device.jpg",
  },
  {
    id: 5,
    name: "GreenVest Investment Tracker",
    category: "investing-gadgets",
    price: "$159.99",
    ecoScore: 90,
    rating: 4.8,
    reviews: 432,
    description: "Track ethical investments and their environmental impact in real-time.",
    features: ["ESG scoring", "Portfolio analysis", "Impact visualization"],
    image: "/investment-tracker-gadget.jpg",
  },
  {
    id: 6,
    name: "EcoPay Contactless Card",
    category: "payment-devices",
    price: "$49.99",
    ecoScore: 85,
    rating: 4.5,
    reviews: 1876,
    description: "Biodegradable payment card that plants a tree with every purchase.",
    features: ["Biodegradable", "Contactless", "Cashback rewards"],
    image: "/eco-payment-card.jpg",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance">
                Eco-Friendly <span className="text-primary">Gadgets</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Transform your financial habits with sustainable technology designed for conscious living.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card
                  key={product.id}
                  className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-leaf-grow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground">
                      <Leaf className="h-3 w-3 mr-1" />
                      Eco Score: {product.ecoScore}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors font-[family-name:var(--font-space-grotesk)]">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{product.description}</p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button asChild className="group/btn">
                        <Link href={`/products/${product.category}/${product.id}`}>
                          View Details
                          <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
