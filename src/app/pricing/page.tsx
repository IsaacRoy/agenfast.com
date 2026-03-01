import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/sections/PricingSection";
import FooterSection from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "AgenFast Pricing – Lifetime Access",
  description:
    "View AgenFast pricing and get lifetime access to the AI-optimized Next.js and Google ADK boilerplate, 7+ hour course, reference projects, and marketing playbook.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />
      <div className="pt-20">
        <PricingSection />
      </div>
      <FooterSection />
    </main>
  );
}
