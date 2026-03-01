"use client";

import { X, Check, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
  { title: "Initial Setup takes days", desc: "Configuring environments, auth, and basic API routing before writing a single line of product code." },
  { title: "Messy agent architecture", desc: "Trial and error with unstructured scripts and chaotic state management that breaks at scale." },
  { title: "Complex frontend wiring", desc: "Building UI components from scratch to handle streaming, chat, and tool outputs — every time." },
  { title: "Hackathons lost to plumbing", desc: "Struggling to get a basic MVP working before the deadline instead of building the \"wow\" factor." },
  { title: "Deployment is always painful", desc: "Manual server configs, broken CI/CD pipelines, and hours debugging environment variables." },
  { title: "Hard to justify your rates", desc: "Unpolished prototypes that are difficult to present at a premium price point to clients." },
  { title: "Fragmented learning path", desc: "Wading through outdated tutorials and scattered docs with no clear path to production agents." },
];

const benefits = [
  { title: "Up and running in minutes", desc: "Clone the repo, add your keys, and start building logic — zero configuration overhead." },
  { title: "Production-ready architecture", desc: "Proven Google ADK structure pre-configured for scale, from single agents to complex multi-agent systems." },
  { title: "Plug & play frontend", desc: "Next.js components built specifically for agentic workflows — streaming, chat, tool outputs, all handled." },
  { title: "Ship at hackathon speed", desc: "Focus 100% on your unique idea. The infrastructure is already solved before you even start." },
  { title: "One-command deploy", desc: "Optimized for Vercel and GCP Agent Engine out of the box — no ops expertise required." },
  { title: "Premium deliverables", desc: "Professional-grade output that commands high-ticket consulting fees and impresses clients." },
  { title: "Guided mastery included", desc: "Direct path from zero to complex multi-agent systems with 7+ hrs of hands-on curriculum." },
];


export default function ComparisonSection() {
  return (
    <section className="bg-[#000000] py-28 px-6">
      <style>{`
        @keyframes laser-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">
            The Competitive Advantage
          </p>
          <h2 className="text-5xl font-bold text-white mb-4">
            Experience the{" "}
            <span className="text-yellow-400">Difference</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-md mx-auto leading-relaxed">
            Every hour spent on infrastructure is an hour not spent on your product.
          </p>
        </div>

        {/* Single outer box with one laser beam */}
        <div className="relative rounded-2xl p-[1.5px] overflow-hidden mb-12 bg-transparent">

          {/* Left half → red laser */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          >
            <div style={{
              position: "absolute",
              width: "1400px", height: "1400px",
              top: "50%", left: "50%",
              background: "conic-gradient(from 0deg, transparent 0deg, #ef4444 14deg, #fca5a5 20deg, #ef4444 26deg, transparent 42deg, transparent 360deg)",
              animation: "laser-spin 4s linear infinite",
            }} />
          </div>

          {/* Right half → green laser */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{ clipPath: "inset(0 0 0 50%)" }}
          >
            <div style={{
              position: "absolute",
              width: "1400px", height: "1400px",
              top: "50%", left: "50%",
              background: "conic-gradient(from 0deg, transparent 0deg, #22c55e 14deg, #86efac 20deg, #22c55e 26deg, transparent 42deg, transparent 360deg)",
              animation: "laser-spin 4s linear infinite",
            }} />
          </div>

          {/* Inner content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden bg-[#0a0a0a]">

            {/* Without AgenFast */}
            <div className="border-r border-zinc-800/60">
              <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                    <X size={14} className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Without AgenFast</p>
                    <p className="text-zinc-600 text-xs">The traditional path</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-xs bg-red-950/40 border border-red-900/50 text-red-400 px-3 py-1.5 rounded-full">
                  <Clock size={11} />
                  Months of work
                </span>
              </div>
              <div className="px-6 py-4 flex flex-col divide-y divide-zinc-800/40">
                {painPoints.map((p) => (
                  <div key={p.title} className="py-3.5 flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full border border-red-800/50 bg-red-950/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={9} className="text-red-500" />
                    </div>
                    <div>
                      <p className="text-red-400/90 font-medium text-sm">{p.title}</p>
                      <p className="text-zinc-600 text-xs mt-0.5 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* With AgenFast */}
            <div>
              <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <Check size={14} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">With AgenFast</p>
                    <p className="text-zinc-600 text-xs">The smart way</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-xs bg-green-950/40 border border-green-900/40 text-green-400 px-3 py-1.5 rounded-full">
                  <Zap size={11} className="fill-green-400" />
                  Launch in minutes
                </span>
              </div>
              <div className="px-6 py-4 flex flex-col divide-y divide-zinc-800/40">
                {benefits.map((b) => (
                  <div key={b.title} className="py-3.5 flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full border border-green-700/40 bg-green-950/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={9} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-green-400/90 font-medium text-sm">{b.title}</p>
                      <p className="text-zinc-600 text-xs mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-zinc-500 text-sm">
            Choose the path that saves you months of development time
          </p>
          <a href="https://agenfast.gumroad.com/l/agenfast" target="_blank" rel="noopener noreferrer">
            <Button className="relative overflow-hidden bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-lg text-sm">
              <span className="shimmer-overlay" />
              Get Started Now →
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
