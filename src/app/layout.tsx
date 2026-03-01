import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AgenFast – Ship your AI-Agents, SaaS or Hackathon Product in Minutes, Not Months",
  description:
    "World's First AI-optimized NextJS and Google ADK boilerplates with all the features you need to build your AI-Agents, SaaS, StartUp or Hackathon Product — and a guide to find high paying customers for your business.",
  icons: {
    icon: "/agenfast-logo.png",
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
        {children}
      </body>
    </html>
  );
}
