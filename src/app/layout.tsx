import "./globals.css";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/ui/CursorEffect";
import { Be_Vietnam_Pro } from "next/font/google";
import { cn } from "@/lib/utils";
import LightRays from "@/components/ui/LightRays";
import { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages, getTranslations} from 'next-intl/server';
import ContactSection from "@/components/home/Contact/ContactSection";
const beVietnamPro = Be_Vietnam_Pro({ 
  subsets: ['vietnamese', 'latin'], 
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-sans' 
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');
  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: "/icon_web.png",
      shortcut: "/icon_web.png",
      apple: "/icon_web.png",
    },
  };
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={cn("font-sans", beVietnamPro.variable)}>
      <body className="relative">
        <NextIntlClientProvider messages={messages}>
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
              <ContactSection />
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
