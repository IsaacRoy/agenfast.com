import Navbar from "@/components/Navbar";
import PricingSection from "@/components/sections/PricingSection";
import FooterSection from "@/components/sections/FooterSection";

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
