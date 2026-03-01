"use client";

import {
  Code2,
  FolderOpen,
  BookOpen,
  GitBranch,
  Cpu,
  Wrench,
  Sparkles,
  FolderKanban,
  BotMessageSquare,
  Trophy,
  Info,
} from "lucide-react";

const techiePoints = [
  {
    icon: Code2,
    title: "Full code walkthrough",
    desc: "Every layer explained — ADK framework setup, agent pipelines, multi-agent orchestration, and tool use. You understand exactly what runs and why.",
  },
  {
    icon: GitBranch,
    title: "Extend & customise freely",
    desc: "The codebase is architected for modification. Add features, swap providers, or scale to multi-tenant without fighting the structure.",
  },
  {
    icon: Cpu,
    title: "AI-optimised architecture",
    desc: "AI rules, Cursor config, and MCP setup already baked in. Your AI editor understands the codebase as well as you do.",
  },
  {
    icon: Wrench,
    title: "Deep debugging know-how",
    desc: "Course covers common failure points, edge cases, and how to trace issues fast — so bugs stay rare and fixes stay quick.",
  },
];

const nonTechiePoints = [
  {
    icon: FolderOpen,
    title: "Drop source code in /refs",
    desc: "No reading required. Keep the boilerplate in a /refs folder and feed it as context to Cursor, Claude, or any AI editor.",
  },
  {
    icon: BotMessageSquare,
    title: "AI does the heavy lifting",
    desc: "With the full source as context, your AI knows the existing patterns and generates code that fits perfectly — first try.",
  },
  {
    icon: FolderKanban,
    title: "Use boilerplates as-is",
    desc: "Clone, configure your .env, and deploy. The hard parts (auth, payments, emails) are already wired together and working.",
  },
  {
    icon: Sparkles,
    title: "Build like a senior dev",
    desc: "You don't need to understand every line. The structure guides your AI to produce production-quality output every single time.",
  },
];

export default function ForEveryoneSection() {
  return (
    <section className="bg-[#000000] py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">

        {/* ── Section label ── */}
        <div className="flex items-center justify-center gap-6">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-zinc-400 text-xl uppercase tracking-[0.18em] font-black whitespace-nowrap">
            Built for everyone
          </span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        {/* ── Main headline ── */}
        <div className="text-center -mt-10">
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            Whether you{" "}
            <span className="text-yellow-400">code</span> or{" "}
            <span className="text-yellow-400">don&apos;t</span>,<br className="hidden md:block" />
            AgenFast works for you.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Techies go deep. Non-techies go fast. Both ship real products.
          </p>
        </div>

        {/* ── Two-column cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* — Techies — */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 flex flex-col gap-7">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 border border-zinc-800 rounded-full px-3 py-1 w-fit">
                For Techies
              </span>
              <h3 className="text-white font-black text-2xl leading-snug">
                Understand every line.<br />
                <span className="text-yellow-400">Own your codebase.</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The full course walks you through the entire code logic —
                layer by layer, file by file. You&apos;ll know exactly what&apos;s happening
                under the hood and be able to modify, debug, and extend confidently.
              </p>
            </div>

            {/* Points */}
            <div className="flex flex-col gap-4">
              {techiePoints.map((pt) => {
                const Icon = pt.icon;
                return (
                  <div key={pt.title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-zinc-300" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{pt.title}</p>
                      <p className="text-zinc-500 text-sm leading-relaxed mt-0.5">{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer pill */}
            <div className="flex items-center gap-2 mt-auto pt-2">
              <BookOpen size={14} className="text-zinc-500" strokeWidth={1.75} />
              <span className="text-zinc-500 text-xs">7+ hours of full code walkthrough included</span>
            </div>
          </div>

          {/* — Non-Techies — */}
          <div className="rounded-2xl border border-yellow-400/25 bg-zinc-900/50 p-8 flex flex-col gap-7">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 border border-yellow-400/30 rounded-full px-3 py-1 w-fit">
                For Non-Techies
              </span>
              <h3 className="text-white font-black text-2xl leading-snug">
                No coding needed.<br />
                <span className="text-yellow-400">Just use the refs.</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Drop the boilerplate and source code into a{" "}
                <code className="text-yellow-400 bg-zinc-800 px-1.5 py-0.5 rounded text-xs font-mono">
                  /refs
                </code>{" "}
                folder. Feed it as context to your AI editor and watch it generate
                production-quality code that perfectly matches the project — zero guesswork.
              </p>
            </div>

            {/* Points */}
            <div className="flex flex-col gap-4">
              {nonTechiePoints.map((pt) => {
                const Icon = pt.icon;
                return (
                  <div key={pt.title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-yellow-400/10 border border-yellow-400/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-yellow-400" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{pt.title}</p>
                      <p className="text-zinc-500 text-sm leading-relaxed mt-0.5">{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer pill */}
            <div className="flex items-center gap-2 mt-auto pt-2">
              <Sparkles size={14} className="text-yellow-400" strokeWidth={1.75} />
              <span className="text-zinc-400 text-xs">
                POV: &quot;I don&apos;t code — but my product looks like I do.&quot;
              </span>
            </div>
          </div>
        </div>

        {/* ── Big claim ── */}
        <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/40 overflow-hidden px-8 py-14 md:px-16 flex flex-col items-center gap-8 text-center">
          {/* Subtle glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(234,179,8,0.07),transparent)]" />

          <div className="flex flex-col items-center gap-3">
            <span className="text-zinc-400 text-xl uppercase tracking-[0.18em] font-black">
              The AgenFast Effect
            </span>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              <span className="text-yellow-400">300%</span> faster.<br />
              <span className="text-white">Zero bugs.</span>
            </h2>

            <p className="text-2xl md:text-3xl font-bold text-zinc-300 leading-snug max-w-3xl mt-2">
              Using this boilerplate &amp; source code in{" "}
              <code className="text-yellow-400 font-mono bg-zinc-800 px-2 py-1 rounded-lg text-2xl md:text-3xl">
                /refs
              </code>{" "}
              gets you the best AI output — faster and cleaner than any normal prompting ever could.
            </p>

            <p className="text-zinc-500 text-base max-w-xl leading-relaxed">
              When your AI editor has the full source as context, it stops guessing.
              It writes code that fits your architecture on the first attempt —
              every time.
            </p>
          </div>

          {/* Hackathon course callout */}
          <div className="w-full max-w-2xl rounded-2xl border border-yellow-400/25 bg-yellow-400/5 p-6 flex items-start gap-5 text-left">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
              <Trophy size={18} className="text-yellow-400" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-white font-bold text-sm">
                  Full Hackathon-Winning Prompting Course
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-black bg-yellow-400 px-2 py-0.5 rounded-full whitespace-nowrap">
                  Included
                </span>
                <div className="relative group flex items-center">
                  <Info size={12} className="text-zinc-600 cursor-pointer hover:text-zinc-400 transition-colors" />
                  <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-64 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50">
                    <div className="relative bg-zinc-900 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 shadow-2xl shadow-black/60">
                      <div className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-r border-b border-zinc-700/80 rotate-45" />
                      <p className="text-zinc-200 text-[11px] leading-relaxed">
                        🎁{" "}
                        <span className="text-white font-semibold">One-time purchase</span>{" "}
                        of AgenFast automatically unlocks access — no extra cost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Learn the exact prompting system that wins hackathons — structuring
                prompts with source code refs, chaining agent tasks, and extracting
                production-ready output from any AI editor. Ship a winning project
                in hours, not days.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
