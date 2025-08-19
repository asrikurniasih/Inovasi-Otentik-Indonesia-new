import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'

export const metadata: Metadata = {
  title: "Inovasi Otentik Indonesia",
  description: "We are your strategic partner in creating a smarter, more efficient, and data-driven business ecosystem. Welcome to the future of innovation with Inovasi Otentik Indonesia.",
  keywords: [
    "Astro",
    "Startup", 
    "Corporate",
    "Store Theme",
    "Online Store",
    "Startup template",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Material Design"
  ],
  authors: [{ name: "Creative Tim", url: "https://www.creative-tim.com/" }],
  openGraph: {
    title: "Inovasi Otentik Indonesia",
    description: "We are your strategic partner in creating a smarter, more efficient, and data-driven business ecosystem. Welcome to the future of innovation with Inovasi Otentik Indonesia.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inovasi Otentik Indonesia", 
    description: "We are your strategic partner in creating a smarter, more efficient, and data-driven business ecosystem. Welcome to the future of innovation with Inovasi Otentik Indonesia.",
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.png'
  },
  other: {
    'google-fonts': 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">

      <body className="overflow-x-hidden antialiased font-sans bg-white">
        <Navbar />
        {children}
        <Script
          src="https://kit.fontawesome.com/349ee9c857.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
