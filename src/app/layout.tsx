import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Noto+Sans:300,400,500,600,700,800|PT+Mono:300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden antialiased font-sans bg-white">
        {children}
        <Script
          src="https://kit.fontawesome.com/349ee9c857.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
