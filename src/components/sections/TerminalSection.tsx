import { Zap } from "lucide-react";

const skillTags = [
  "logo-generator",
  "image-generator",
  "auth-handler",
  "stripe-handler",
  "seo-handler",
  "db-handler",
  "ui-handler",
  "blog-creator",
  "email-handler",
  "form-creator",
  "ai-sdk-handler",
  "+15 more",
];

const agents = [
  { name: "copywriter", desc: "Landing page & email copy" },
  { name: "logo-generator", desc: "Automatically generate logos for your product" },
  { name: "auth-handler", desc: "Handles authentication" },
  { name: "payments-handler", desc: "Subscriptions, Credits, LTD" },
  { name: "db-handler", desc: "Schema, Migrations, Queries" },
  { name: "seo-specialist", desc: "Metadata, Sitemaps, OG" },
  { name: "ui-handler", desc: "Shadcn, MagicUI, Animations, etc." },
];

export default function TerminalSection() {
  return (
    <section className="bg-[#111108] py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-1.5 text-sm text-yellow-400">
              <Zap size={13} className="fill-yellow-400" />
              20+ Pro Agents Included
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-1">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Your AI Co-founder,
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 leading-tight">
                Pre-built &amp; Ready.
              </h2>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-3 text-zinc-300 text-sm leading-relaxed max-w-lg">
              <p>
                AgenFast isn&apos;t just code; it&apos;s a brain. We provide
                specialized Claude agents ({" "}
                <code className="bg-zinc-800 border border-zinc-700 text-yellow-300 px-1.5 py-0.5 rounded text-xs">
                  auth
                </code>
                ,{" "}
                <code className="bg-zinc-800 border border-zinc-700 text-yellow-300 px-1.5 py-0.5 rounded text-xs">
                  stripe
                </code>
                ,{" "}
                <code className="bg-zinc-800 border border-zinc-700 text-yellow-300 px-1.5 py-0.5 rounded text-xs">
                  seo
                </code>
                ,{" "}
                <code className="bg-zinc-800 border border-zinc-700 text-yellow-300 px-1.5 py-0.5 rounded text-xs">
                  db
                </code>{" "}
                ...) that let you generate complex, production-ready features in
                seconds.
              </p>
              <p className="text-zinc-400">
                Regularly maintained so you can ship faster, not fix later.
              </p>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded border border-zinc-700 bg-zinc-900/60 text-zinc-300 text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 mt-2">
              <button className="flex items-center gap-2 bg-zinc-900 border border-zinc-600 text-white px-5 py-2.5 rounded-lg text-sm font-mono hover:bg-zinc-800 transition-colors">
                <span className="text-zinc-400">$</span>
                <span>/bootstrap</span>
                <span className="w-1.5 h-4 bg-white inline-block animate-pulse" />
              </button>
              <button className="bg-zinc-900 border border-zinc-700 text-zinc-300 px-5 py-2.5 rounded-lg text-sm font-mono hover:bg-zinc-800 hover:text-white transition-colors">
                /demo
              </button>
            </div>
          </div>

          {/* Right: Terminal window */}
          <div className="rounded-xl overflow-hidden border border-zinc-700/60 shadow-2xl shadow-black/50 bg-[#0d0d0d]">
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                {/* Traffic lights */}
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-zinc-400 text-xs font-mono ml-1">
                  _&gt; agenfast-cli
                </span>
              </div>
              <span className="text-zinc-500 text-xs font-mono">
                v1.0.4 (Latest)
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-6 font-mono text-sm space-y-1">
              {/* Command */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400">→</span>
                <span className="text-zinc-200">List all the agents</span>
              </div>

              {/* Loading */}
              <p className="text-zinc-500 mb-4">Loading specialized agents...</p>

              {/* Agent list */}
              <div className="space-y-2">
                {agents.map((agent) => (
                  <div key={agent.name} className="flex items-start gap-3">
                    <span className="text-green-400 mt-0.5">✓</span>
                    <div className="flex items-baseline gap-4 flex-wrap">
                      <span className="text-yellow-300 font-semibold min-w-[160px]">
                        {agent.name}
                      </span>
                      <span className="text-zinc-400 text-xs">{agent.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* More agents */}
              <div className="pl-6 text-zinc-500 pt-1">
                ... and 14 more agents loaded.
              </div>

              {/* Ready prompt */}
              <div className="flex items-center gap-2 pt-4 border-t border-zinc-800 mt-4">
                <span className="text-yellow-400">✦</span>
                <span className="text-teal-300">
                  Ready to build.{" "}
                </span>
                <span className="text-white font-semibold">
                  What are we shipping today?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
