"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"


export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        transform: `translateY(${scrollY * 0.5}px)`,
        opacity: Math.max(0, 1 - scrollY / 600),
      }}
    >
      
    <div 
    className="absolute inset-0 bg-[url('/resources/background.png')] bg-cover bg-center" 
  />
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
        Welcome to 
          <span className="text-primary block">Fashion Haven</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
        Discover stylish collections that redefine your wardrobe. Experience the latest trends and unparalleled quality with our exclusive clothing line.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tool/products">
          <Button size="lg" className="text-lg px-8 py-6">
            Shop Now!
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </Link>
          <Link href="/tool/about">
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
            Learn More
          </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
