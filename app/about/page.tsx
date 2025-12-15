import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Leaf, Heart, Target, Users } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description:
      "Every product we offer is carefully vetted for its environmental impact and contribution to a greener future.",
  },
  {
    icon: Heart,
    title: "Conscious Consumption",
    description: "We believe in quality over quantity, promoting products that last and make a real difference.",
  },
  {
    icon: Target,
    title: "Transparency",
    description: "Full disclosure of eco-scores, carbon footprints, and the real impact of every gadget we recommend.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our community of 48,000+ users shapes our product selection and drives positive change together.",
  },
]

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Founded with a vision to merge financial technology with environmental consciousness.",
  },
  {
    year: "2021",
    title: "First Product Launch",
    description: "Introduced our solar-powered smart wallet, revolutionizing sustainable finance.",
  },
  {
    year: "2022",
    title: "Community Milestone",
    description: "Reached 10,000 active users and saved over 1M kg of CO₂ collectively.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded to 25 countries with partnerships with leading eco-tech manufacturers.",
  },
  {
    year: "2024",
    title: "Innovation Award",
    description: "Recognized as the most innovative sustainable fintech platform of the year.",
  },
  {
    year: "2025",
    title: "Today",
    description: "Leading the eco-finance revolution with 48,000+ users making real impact daily.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance">
                We Believe Money Can <span className="text-primary">Heal the Planet</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                EcoFinanceGadgets was born from a simple idea: what if every financial decision could contribute to a
                healthier planet? We're on a mission to make sustainable living effortless and financially rewarding.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Principles that guide every decision we make and product we recommend.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card
                    key={value.title}
                    className="p-8 border-border/50 bg-card/70 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-leaf-grow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-4 rounded-2xl bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)]">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a small startup to a global movement for sustainable finance.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

                {/* Timeline items */}
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div
                      key={item.year}
                      className="relative pl-20 animate-leaf-grow"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      {/* Year marker */}
                      <div className="absolute left-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/30">
                        {item.year}
                      </div>

                      {/* Content */}
                      <Card className="p-6 border-border/50 bg-card/70 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 bg-gradient-to-b from-primary/5 via-secondary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="max-w-4xl mx-auto p-12 text-center border-primary/30 bg-card/80 backdrop-blur-sm">
              <blockquote className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance leading-relaxed">
                "Our mission is to make sustainable finance accessible, rewarding, and impactful for everyone. Together,
                we're building a future where <span className="text-primary">prosperity</span> and{" "}
                <span className="text-secondary">planet health</span> grow hand in hand."
              </blockquote>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
