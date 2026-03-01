import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import BoilerplateSection from "@/components/sections/BoilerplateSection";
import WhyGoogleADKSection from "@/components/sections/WhyGoogleADKSection";
import ForEveryoneSection from "@/components/sections/ForEveryoneSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />
      <HeroSection />
      <ScrollReveal id="demo">
        <VideoSection />
      </ScrollReveal>
      <ScrollReveal id="features">
        <BoilerplateSection />
      </ScrollReveal>
      <ScrollReveal>
        <WhyGoogleADKSection />
      </ScrollReveal>
      <ScrollReveal>
        <ForEveryoneSection />
      </ScrollReveal>
      <ScrollReveal id="testimonials">
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <ComparisonSection />
      </ScrollReveal>
      <ScrollReveal id="faq">
        <FAQSection />
      </ScrollReveal>
      <FooterSection />
    </main>
  );
}
