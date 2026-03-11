import "./globals.css";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/ui/CursorEffect";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import LightRays from "@/components/ui/LightRays";
import { Metadata } from "next";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Chuyên Gia Phát Triển Ứng Dụng & Chuyển Đổi Số",
  description: "QKIT",
  icons: {
    icon: "/icon_web.png",
    shortcut: "/icon_web.png",
    apple: "/icon_web.png",
  },
};


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
