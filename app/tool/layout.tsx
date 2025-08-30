import "./globals.css";
import Footer from "@/components/footer";


export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 bg-gradient-to-bl from-primary/30 via-background to-secondary/10">
        {children} 
      </div>
        <Footer />
    </div>
  );
}
