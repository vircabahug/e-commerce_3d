import Image from "next/image";
import ToolLayout from "./(tool)/layout";
import { Children } from "react";
import Tool from "./(tool)/page";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content-section";

export default function Main() {

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContentSection />
    </main>
  );
}

