import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "How Solar Wallets Save Energy (and Money)",
    excerpt:
      "Discover the technology behind solar-powered wallets and how they can reduce your carbon footprint while keeping your devices charged.",
    category: "Technology",
    readTime: "5 min read",
    author: "Sarah Chen",
    image: "/solar-wallet-technology.jpg",
  },
  {
    id: 2,
    title: "5 Gadgets That Pay for Themselves",
    excerpt:
      "These eco-friendly financial gadgets not only help the planet but also save you money in the long run through energy efficiency and smart tracking.",
    category: "Buying Guide",
    readTime: "8 min read",
    author: "Marcus Rodriguez",
    image: "/eco-gadgets-money-saving.jpg",
  },
  {
    id: 3,
    title: "The Link Between Green Tech and Financial Freedom",
    excerpt:
      "Explore how sustainable technology choices can lead to better financial decisions and long-term wealth building.",
    category: "Lifestyle",
    readTime: "6 min read",
    author: "Emma Thompson",
    image: "/green-technology-finance.jpg",
  },
  {
    id: 4,
    title: "Understanding Your Carbon Footprint Score",
    excerpt:
      "Learn how to interpret your carbon footprint data and make meaningful changes to reduce your environmental impact.",
    category: "Education",
    readTime: "7 min read",
    author: "Dr. James Liu",
    image: "/carbon-footprint-tracking.jpg",
  },
  {
    id: 5,
    title: "Smart Home Energy Monitoring 101",
    excerpt:
      "A beginner's guide to setting up energy monitoring in your home and optimizing your consumption patterns.",
    category: "Tutorial",
    readTime: "10 min read",
    author: "Lisa Martinez",
    image: "/smart-home-energy-monitor.jpg",
  },
  {
    id: 6,
    title: "Ethical Investing in the Digital Age",
    excerpt:
      "How modern gadgets and apps are making it easier than ever to invest your money in companies that align with your values.",
    category: "Investing",
    readTime: "9 min read",
    author: "Alex Kumar",
    image: "/ethical-investing-technology.jpg",
  },
]

export default function LearnPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance">
                Learn & <span className="text-primary">Grow</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Discover insights, guides, and stories about sustainable finance and eco-friendly technology.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="overflow-hidden max-w-5xl mx-auto border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto overflow-hidden bg-muted">
                  <img
                    src={articles[0].image || "/placeholder.svg"}
                    alt={articles[0].title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <div>
                    <Badge variant="secondary" className="mb-4">
                      {articles[0].category}
                    </Badge>
                    <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4 text-balance">
                      {articles[0].title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{articles[0].excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{articles[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{articles[0].readTime}</span>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href={`/learn/${articles[0].id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-12 text-center">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(1).map((article, index) => (
                <Card
                  key={article.id}
                  className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-leaf-grow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] group-hover:text-primary transition-colors text-balance leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
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
