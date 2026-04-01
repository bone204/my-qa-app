import "./globals.css";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/ui/CursorEffect";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import LightRays from "@/components/ui/LightRays";
import { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages, getTranslations} from 'next-intl/server';
import FooterContact from "@/components/FooterContact";

const beVietnamPro = Be_Vietnam_Pro({ 
  subsets: ['vietnamese', 'latin'], 
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-sans' 
});

const playfair = Playfair_Display({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-serif'
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://qkit.vn';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'QKIT Software', url: baseUrl }],
    creator: 'QKIT Software',
    publisher: 'QKIT Software',
    alternates: {
      canonical: '/',
      languages: {
        'vi-VN': '/vi',
        'en-US': '/en',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: baseUrl,
      siteName: 'QKIT Software',
      images: [
        {
          url: '/logo-transparent.png',
          width: 800,
          height: 600,
          alt: 'QKIT Software',
        },
      ],
      locale: 'vi_VN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: ['/logo-transparent.png'],
      creator: '@qkit_software',
    },
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
    <html lang={locale} className={cn("font-sans", beVietnamPro.variable, playfair.variable)} suppressHydrationWarning>
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
              <FooterContact />
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
