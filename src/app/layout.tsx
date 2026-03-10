import "./globals.css";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import LightRays from "@/components/LightRays";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="relative">
        <div className="fixed inset-0 -z-10">
          <LightRays 
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={1}
            rayLength={2}
          />
        </div>
        <CursorEffect />

        <div className="relative z-10 flex min-h-screen flex-col bg-transparent">
          <AppBar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
