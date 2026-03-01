"use client";

import {
  ShieldCheck,
  Network,
  Globe,
  Link2,
  Zap,
  Layers,
  Info,
  LucideIcon,
} from "lucide-react";

const advantages: {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  highlight: boolean;
}[] = [
  {
    icon: ShieldCheck,
    title: "Built by Google",
    description:
      "Enterprise-grade reliability backed by Google's infrastructure — not a side project. Production-ready from day one with long-term support guaranteed.",
    highlight: false,
  },
  {
    icon: Network,
    title: "Native Multi-Agent Orchestration",
    description:
      "Agent-to-agent communication is a first-class citizen in ADK, not a bolt-on. Delegate, coordinate, and compose agents with clean, structured APIs.",
    highlight: false,
  },
  {
    icon: Globe,
    title: "Real-Time Grounding",
    description:
      "Built-in Google Search grounding lets agents pull live, factual data — no extra RAG plumbing required. Other frameworks leave this as an exercise for the user.",
    highlight: false,
  },
  {
    icon: Link2,
    title: "Connects to CrewAI, LangChain & More",
    description:
      "Google ADK plays well with the entire AI ecosystem. Plug in CrewAI crews, LangChain chains, or any external orchestration layer inside your ADK agents.",
    badge: "Course coming soon",
    highlight: true,
  },
  {
    icon: Zap,
    title: "Streaming & Async by Default",
    description:
      "Designed for real-time, low-latency agent pipelines. Streaming responses and async tool execution come out of the box — no workarounds needed.",
    highlight: false,
  },
  {
    icon: Layers,
    title: "Model-Agnostic Flexibility",
    description:
      "Start with Gemini, swap in Claude, GPT-4, or open-source models later. ADK's abstraction layer keeps your agent logic decoupled from the underlying LLM.",
    highlight: false,
  },
];

const comparisonRows = [
  { feature: "Native multi-agent support",   adk: true,  langchain: false, crewai: true,  autogen: true  },
  { feature: "Real-time search grounding",   adk: true,  langchain: false, crewai: false, autogen: false },
  { feature: "Enterprise scalability",       adk: true,  langchain: false, crewai: false, autogen: false },
  { feature: "Streaming by default",         adk: true,  langchain: true,  crewai: false, autogen: false },
  { feature: "Cross-framework integrations", adk: true,  langchain: true,  crewai: false, autogen: false },
  { feature: "Model-agnostic",               adk: true,  langchain: true,  crewai: true,  autogen: true  },
  { feature: "Backed by big tech",           adk: true,  langchain: false, crewai: false, autogen: true  },
];

function Tick({ yes }: { yes: boolean }) {
  return yes ? (
    <span className="text-yellow-400 font-bold text-base">✓</span>
  ) : (
    <span className="text-zinc-700 font-bold text-base">✕</span>
  );
}

export default function WhyGoogleADKSection() {
  return (
    <section className="bg-[#000000] py-28 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">

        {/* ── Header ── */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-zinc-400 text-xl uppercase tracking-[0.18em] font-black whitespace-nowrap">
              Why Google ADK
            </span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          <h2 className="text-5xl font-black text-white leading-tight mb-4">
            The{" "}
            <span className="text-yellow-400">smartest</span> framework{" "}
            <br className="hidden md:block" />
            for production AI agents.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            While others are still patching together workarounds, Google ADK ships
            with everything you need to build, orchestrate, and scale real agents —
            right out of the box.
          </p>
        </div>

        {/* ── Advantage cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className={`relative rounded-2xl p-6 border flex flex-col gap-4 transition-all ${
                  adv.highlight
                    ? "border-yellow-400/30 bg-zinc-900/70"
                    : "border-zinc-800 bg-zinc-900/40"
                }`}
              >
                {/* Icon box */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    adv.highlight
                      ? "bg-yellow-400/10 border border-yellow-400/30"
                      : "bg-zinc-800/80 border border-zinc-700/60"
                  }`}
                >
                  <Icon
                    size={18}
                    className={adv.highlight ? "text-yellow-400" : "text-zinc-300"}
                    strokeWidth={1.75}
                  />
                </div>

                {/* Title + optional badge */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-white font-bold text-[15px] leading-snug">
                      {adv.title}
                    </h3>
                    {adv.badge && (
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-black bg-yellow-400 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {adv.badge}
                        </span>
                        {/* tooltip */}
                        <div className="relative group flex items-center">
                          <Info
                            size={12}
                            className="text-zinc-600 cursor-pointer hover:text-zinc-400 transition-colors"
                          />
                          <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-64 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50">
                            <div className="relative bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 shadow-2xl shadow-black/60 text-left">
                              <div className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-r border-b border-zinc-700/80 rotate-45" />
                              <p className="text-zinc-200 text-[11px] leading-relaxed">
                                🎁{" "}
                                <span className="text-white font-semibold">
                                  One-time purchase
                                </span>{" "}
                                of AgenFast automatically unlocks access to this course — no extra cost.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Comparison table ── */}
        <div className="flex flex-col gap-6">
          <h3 className="text-center text-2xl font-bold text-white">
            How it stacks up
          </h3>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-5 text-center text-xs font-semibold text-zinc-400 uppercase tracking-widest border-b border-zinc-800">
              <div className="col-span-1 text-left px-6 py-4">Feature</div>
              <div className="py-4 text-yellow-400">Google ADK</div>
              <div className="py-4">LangChain</div>
              <div className="py-4">CrewAI</div>
              <div className="py-4">AutoGen</div>
            </div>

            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-5 text-center items-center ${
                  i !== comparisonRows.length - 1 ? "border-b border-zinc-800/60" : ""
                } ${i % 2 === 0 ? "bg-zinc-900/20" : ""}`}
              >
                <div className="col-span-1 text-left px-6 py-3.5 text-zinc-300 text-sm font-medium">
                  {row.feature}
                </div>
                <div className="py-3.5"><Tick yes={row.adk} /></div>
                <div className="py-3.5"><Tick yes={row.langchain} /></div>
                <div className="py-3.5"><Tick yes={row.crewai} /></div>
                <div className="py-3.5"><Tick yes={row.autogen} /></div>
              </div>
            ))}
          </div>

          <p className="text-center text-zinc-700 text-xs">
            Comparison based on out-of-the-box capabilities. Always check the latest docs for each framework.
          </p>
        </div>

      </div>
    </section>
  );
}
