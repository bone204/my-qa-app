import "./globals.css";
import AppBar from "@/components/AppBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
