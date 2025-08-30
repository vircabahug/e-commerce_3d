"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Carousel } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {motion} from "framer-motion";
import { Button } from "@/components/ui/button";
import { CarouselContent, CarouselPrevious, CarouselNext, CarouselItem  } from "@/components/ui/carousel";
import { products } from "@/public/models/products";
import Image from "next/image";

// Dynamically import Three.js canvas to avoid SSR issues
const Product3D = dynamic(() => import("@/components/product-3d"), { ssr: false });


export default function ProductsPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="container mx-auto py-20">
      <motion.h1
  initial={{ y: -20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="text-3xl font-bold mb-8 text-center"
>
  Our Products
</motion.h1>
      <div className="flex justify-center">
      <div className="w-full max-w-2xl">
    <Carousel >
      <CarouselContent>
        {products.map((product, idx) => (
            <CarouselItem
            key={product.id}
            className="mx-2 cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelected(idx)}
          >
            <Card className="pt-0">
              <Image src={product.image} alt={product.name} width={400} height={400} className="w-full h-90 object-cover rounded-t" />
              <div className="p-4" >
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

<div className="text-left mt-12 mb-6 px-4">
 All products
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {products.map((product, idx) => (
          <motion.div key={product.id}>
            <Card
              className="cursor-pointer hover:shadow-lg transition">
              <CardContent onClick={() => setSelected(idx)} className="p-0">
                <Image src={product.image} alt={product.name} width={400} height={400} className="w-full h-90 object-cover rounded-t" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
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
