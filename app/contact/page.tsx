"use client"

import type React from "react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Phone } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />

      <SiteHeader />
      <main className="relative">
        {/* Hero */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-balance">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Have questions about our eco-friendly gadgets? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email Us</h3>
                      <p className="text-sm text-muted-foreground">support@ecofinancegadgets.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-secondary/10">
                      <MessageSquare className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Live Chat</h3>
                      <p className="text-sm text-muted-foreground">Available Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Call Us</h3>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="lg:col-span-2 p-8 border-border/50 bg-card/80 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
