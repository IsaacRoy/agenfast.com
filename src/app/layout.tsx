import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle =
  "AgenFast – Ship your AI-Agents, SaaS or Hackathon Product in Minutes, Not Months";
const siteDescription =
  "AgenFast is the world's first AI-optimized Next.js and Google ADK boilerplate — with a 7+ hour end-to-end course to build scalable AI agents and a playbook to land high-paying customers.";

export const metadata: Metadata = {
  metadataBase: new URL("https://agenfast.com"),
  title: {
    default: siteTitle,
    template: "%s | AgenFast",
  },
  description: siteDescription,
  keywords: [
    "AgenFast",
    "Next.js boilerplate",
    "Google ADK boilerplate",
    "AI agent boilerplate",
    "AI SaaS starter kit",
    "AI hackathon starter",
    "agentic AI boilerplate",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "AgenFast",
    type: "website",
    images: [
      {
        url: "/agenfast-logo.png",
        width: 1200,
        height: 630,
        alt: "AgenFast – AI-optimized Next.js and Google ADK boilerplate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/agenfast-logo.png"],
  },
  icons: {
    icon: "/agenfast-logo.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} ${geistMono.variable} font-sans antialiased bg-[#000000] text-white`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17985037522"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17985037522');
          `}
        </Script>
        <Script
          src="https://datafa.st/js/script.js"
          data-website-id="dfid_gnPXpWJphfIC68SUNUvg6"
          data-domain="agenfast.com"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
