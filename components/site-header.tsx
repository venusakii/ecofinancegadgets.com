"use client"

import Link from "next/link"
import { Search, ShoppingCart, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [isDark, setIsDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-lg shadow-primary/5"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <span className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                <span className="text-primary animate-shimmer bg-gradient-to-r from-primary via-primary/70 to-primary bg-[length:200%_100%] bg-clip-text text-transparent">
                  Eco
                </span>
                <span className="text-secondary">Finance</span>
                <span className="text-foreground">Gadgets</span>
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-foreground/80 hover:text-primary transition-colors">
              Gadgets
            </Link>
            <Link href="/learn" className="text-foreground/80 hover:text-primary transition-colors">
              Learn
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden lg:flex items-center relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Find gadgets for your goals..."
                className="pl-9 w-64 bg-muted/50 border-border/50 focus:border-primary/50"
              />
            </div>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative group">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold flex items-center justify-center animate-glow-pulse">
                0
              </span>
            </Button>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="group">
              {isDark ? (
                <Sun className="h-5 w-5 text-secondary group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="h-5 w-5 text-primary group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
