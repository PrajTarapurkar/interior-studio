import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import FloatingContact from "@/components/ui/FloatingContact";
import StructuredData from "@/components/seo/StructuredData";
import { getSiteSettings } from "@/sanity/lib/fetch";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: {
    default: "Kulal Interiors | Luxury Interior Design Studio",
    template: "%s | Kulal Interiors",
  },

  description:
    "Kulal Interiors creates premium residential and commercial interior spaces with timeless elegance, luxury craftsmanship, and modern design.",

  keywords: [
    "Kulal Interiors",
    "Luxury Interior Design",
    "Interior Designer",
    "Residential Interiors",
    "Commercial Interiors",
    "Office Interior Design",
    "Villa Interiors",
    "Modern Interior Design",
    "Interior Design Studio",
  ],

  authors: [{ name: "Kulal Interiors" }],
  creator: "Kulal Interiors",
  publisher: "Kulal Interiors",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Kulal Interiors",
    title: "Kulal Interiors | Luxury Interior Design Studio",
    description:
      "Premium residential and commercial interior design with timeless elegance and modern luxury.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kulal Interiors",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kulal Interiors | Luxury Interior Design Studio",
    description:
      "Premium residential and commercial interior design with timeless elegance.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = await getSiteSettings();
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white overflow-x-hidden">

        <StructuredData />
        {children}


        <FloatingContact settings={siteSettings} />

      </body>
    </html>

  );
}
