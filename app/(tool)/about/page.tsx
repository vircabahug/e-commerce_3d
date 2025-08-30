
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    
      <div className="pt-30 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">About Our Company</h1>
            <p className="text-lg text-justify text-muted-foreground max-w-2xl mx-auto">
            At Fashion Haven, we’re passionate about providing high-quality, fashion-forward clothing that suits every lifestyle. Our mission is to empower individuals through style, offering a diverse range of apparel that blends comfort with elegance. We believe in sustainability, ethical production, and inclusivity, making sure everyone feels confident and stylish.
            Our dedicated team is driven by a shared vision to inspire and elevate your wardrobe, making every piece a reflection of both timeless elegance and modern trends. Join us on this journey of self-expression, and let your clothes tell your unique story.
            </p>
          </div>
        </div>
      </div>
    
  )
}
