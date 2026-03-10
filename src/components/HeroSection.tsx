import Image from "next/image";
import { Button } from "@/components/ui/button";
import AvatarStack from "@/components/ui/AvatarStack";
import TypewriterText from "@/components/ui/TypewriterText";
import TrophyBadge from "@/components/ui/TrophyBadge";
import { GitBranch, Star, Info } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_50%,rgba(234,179,8,0.04),transparent)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6 max-w-xl mx-auto lg:mx-0">
            {/* Announcement badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3.5 py-1.5 text-xs sm:text-sm text-zinc-300 self-center md:self-start">
              <span className="font-semibold text-white">New:</span>
              <span>MCP &amp; Agent-to-Agent Course</span>
              <span className="text-yellow-400 font-medium">— Coming Soon</span>
              {/* Info icon with tooltip */}
              <div className="relative group flex items-center">
                <Info size={14} className="text-zinc-400 cursor-pointer hover:text-zinc-200 transition-colors" />
                <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-64 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50">
                  <div className="relative bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 shadow-2xl shadow-black/60 text-left">
                    <div className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-r border-b border-zinc-700/80 rotate-45" />
                    <p className="text-zinc-200 text-[11px] leading-relaxed">
                      🎁 <span className="text-white font-semibold">One-time purchase</span> of AgenFast automatically unlocks access to this course — no extra cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main headline */}
            <div className="flex flex-col gap-1 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ship your
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 leading-tight min-h-[1.2em]">
                <TypewriterText />
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-widest font-mono mt-3 sm:mt-2">
                IN MINUTES, NOT MONTHS.
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl text-center md:text-left mx-auto md:mx-0">
              <span className="text-purple-400 font-semibold">World&apos;s First</span>{" "}
              AI-optimized NextJS &amp; Google ADK{" "}
              <span className="text-white font-medium">boilerplates</span> — with a{" "}
              <span className="text-white font-medium">7+ hrs end-to-end course</span> to build fully scalable AI agents and a guide to land{" "}
              <span className="text-white font-medium">high-paying customers</span>.
            </p>

            {/* Product of the week card */}
            <div className="self-center md:self-start">
              <TrophyBadge />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="https://agenfast.gumroad.com/l/agenfast" target="_blank" rel="noopener noreferrer">
                <Button className="relative w-full sm:w-auto overflow-hidden bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2.5 rounded-lg text-sm">
                  <span className="shimmer-overlay" />
                  Get AgenFast
                </Button>
              </a>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-zinc-600 bg-transparent text-white hover:bg-zinc-800 hover:text-white px-6 py-2.5 rounded-lg text-sm"
              >
                Features
              </Button>
            </div>

            {/* Update info */}
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <GitBranch size={14} />
              <span>Last updated 4 days ago</span>
            </div>

            {/* POV note */}
            <p className="text-sm text-zinc-500">
              POV : &quot;No coding background? No problem — that&apos;s exactly what AI is here for. 😎&quot;
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <AvatarStack />
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm leading-tight">
                  1263+ developers
                </span>
                <span className="text-zinc-500 text-xs">Already on AgenFast</span>
              </div>
              <div className="flex items-center gap-1.5 ml-2">
                <div className="flex">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star size={16} className="fill-yellow-400/50 text-yellow-400" />
                </div>
                <span className="text-white font-semibold text-sm">4.9</span>
              </div>
            </div>
          </div>

          {/* Right: AgenFast Logo */}
          <div className="hidden lg:flex items-center justify-center">
            <div
              className="relative w-[480px] h-[480px] animate-float"
              style={{
                maskImage: "radial-gradient(ellipse 70% 70% at center, black 40%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 70% at center, black 40%, transparent 80%)",
              }}
            >
              <Image
                src="/agenfast-logo.png"
                alt="AgenFast"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
