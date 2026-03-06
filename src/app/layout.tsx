import "./globals.css";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-[#EFEFEF]">
        <CursorEffect />

        <div className="relative z-10 flex min-h-screen flex-col">
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
