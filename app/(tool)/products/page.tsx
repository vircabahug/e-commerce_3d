"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Carousel } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CarouselContent, CarouselPrevious, CarouselNext, CarouselItem  } from "@/components/ui/carousel";

// Dynamically import Three.js canvas to avoid SSR issues
const Product3D = dynamic(() => import("@/components/product-3d"), { ssr: false });

const products = [
  {
    id: 1,
    name: "Stylish Jacket",
    image: "/resources/dog.jpg",
    description: "A modern, stylish jacket for all seasons.",
    model: "/models/polo5.glb",
  },
  {
    id: 2,
    name: "Classic Tee",
    image: "/resources/kitty.jpg",
    description: "A timeless classic tee for everyday comfort.",
  },
  {
    id: 3,
    name: "Trendy Sneakers",
    image: "/resources/two-dogs.jpg",
    description: "Step up your style with these trendy sneakers.",
  },
];

export default function ProductsPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="flex justify-center">
      <div className="w-full max-w-2xl">
    <Carousel>
      <CarouselContent>
        {products.map((product, idx) => (
          <CarouselItem
            key={product.id}
            className="mx-2 cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelected(idx)}
          >
            <Card>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</div>

      {/* Popup Modal */}
      {selected !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg flex max-w-3xl w-full overflow-hidden">
            <div className="w-2/3 bg-gray-100 flex items-center justify-center p-6">
              <Product3D modelUrl={products[selected].model} />
            </div>
            <div className="w-1/3 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{products[selected].name}</h2>
                <p className="mb-4">{products[selected].description}</p>
              </div>
              <Button onClick={() => setSelected(null)} variant="outline">Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
