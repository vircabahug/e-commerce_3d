"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Zap } from "lucide-react"
import Footer from "./footer"

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Unmatched Comfort",
    description: "Experience the perfect fit with our thoughtfully crafted garments designed for comfort and style all day long.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Style for Every Occasion",
    description: "Whether it's casual wear or formal attire, our versatile collections offer something for everyone.",
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Sustainable Fashion",
    description: "Enjoy high-quality, eco-friendly pieces made with sustainability in mind, so you can look good and feel good about your choices.",
  },
]

export default function ContentSection() {
  return (
    <section className="py-0 bg-background relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
          Fashion Designed for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Our clothing collections combine timeless style with modern comfort to help you look and feel your best, no matter the occasion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-0 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-100 border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mt-0 text-center pb-20 pt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Ready to Elevate Your Wardrobe?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Join thousands of fashion-forward individuals who have discovered the perfect blend of style, comfort, and sustainability at Fashion Haven.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>10,000+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}
