import { Rocket, Code2, CreditCard, Clock } from "lucide-react";

const steps = [
  {
    day: 1,
    icon: Rocket,
    title: "Clone & Deploy",
    description: "Get your landing page live on Vercel",
    active: false,
  },
  {
    day: 3,
    icon: Code2,
    title: "Build what matters",
    description: "Work on your unique features and core business logic",
    highlight: "Skip the setup, focus on your product",
    badge: "AI powered",
    active: true,
  },
  {
    day: 6,
    icon: CreditCard,
    title: "Connect Payments",
    description: "Stripe integration and email sequences ready",
    active: false,
  },
  {
    day: 7,
    icon: Clock,
    title: "Launch",
    description: "Your SaaS is live and making money.",
    active: false,
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-[#000000] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4">
            0 to SaaS in{" "}
            <span className="text-yellow-400 underline decoration-yellow-400/40 underline-offset-4">
              7 days!
            </span>
          </h2>
          <p className="text-zinc-400 text-lg mt-3">
            While others spend months on boilerplate, you build your product
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div className="flex flex-col gap-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.day}
                  className={`flex gap-5 p-5 rounded-2xl transition-all ${
                    step.active
                      ? "border border-yellow-400/40 bg-zinc-900/60"
                      : ""
                  }`}
                >
                  {/* Icon circle */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center ${
                      step.active
                        ? "border-yellow-400/80 text-yellow-400"
                        : "border-zinc-700 text-zinc-500"
                    }`}
                  >
                    <Icon size={17} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1 pt-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs text-zinc-400 border border-zinc-700 rounded-full px-2.5 py-0.5 font-medium">
                        Day {step.day}
                      </span>
                      <h3 className="text-white font-semibold text-lg leading-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    {step.highlight && (
                      <p className="text-yellow-400 text-sm mt-1">
                        {step.highlight}
                      </p>
                    )}
                    {step.badge && (
                      <span className="text-xs text-zinc-500 mt-0.5">
                        {step.badge}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right panel – AI editor card */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 font-mono text-sm text-zinc-300 leading-relaxed">
              <div className="space-y-1.5">
                <p>
                  <span className="text-zinc-500">•</span>{" "}
                  <span className="font-semibold text-white">Arrow icon:</span>{" "}
                  <code className="text-zinc-400 bg-zinc-800 px-1 rounded">h-4 w-4</code>{" "}
                  →{" "}
                  <code className="text-zinc-400 bg-zinc-800 px-1 rounded">h-3 w-3</code>{" "}
                  on mobile
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-zinc-500">—</span>
                  <span>
                    🍕{" "}
                    <span className="font-bold text-white">Spacing:</span>
                  </span>
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">•</span>{" "}
                  <span className="font-semibold text-white">Content sections:</span>{" "}
                  Reduced spacing between all sections
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">•</span>{" "}
                  <span className="font-semibold text-white">Button spacing:</span>{" "}
                  <code className="text-zinc-400 bg-zinc-800 px-1 rounded">space-y-3</code>{" "}
                  →{" "}
                  <code className="text-zinc-400 bg-zinc-800 px-1 rounded">space-y-2</code>{" "}
                  on mobile
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">•</span>{" "}
                  <span className="font-semibold text-white">Discount section:</span>{" "}
                  Tighter internal spacing
                </p>
                <p className="text-zinc-400 text-xs mt-3">
                  The dialog now provides a much more compact, mobile-optimized
                </p>
                <p className="text-zinc-600 text-xs">
                  › 7 files edited{" "}
                  <span className="text-green-500">+1509</span>{" "}
                  <span className="text-red-500">-18</span>
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                <span>@ 1 Rule</span>
                <span>🖼 Image</span>
                <span className="text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded">pricing.tsx</span>
                <span className="text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded">page.tsx</span>
                <span className="text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded">features.tsx</span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs flex-wrap">
                <span className="text-zinc-400">Add</span>
                <code className="bg-zinc-800 border border-zinc-700 px-2 py-0.5 rounded text-white">
                  @money.png
                </code>
                <span className="text-zinc-400">instead of $</span>
                <code className="bg-blue-900/40 border border-blue-700/40 px-2 py-0.5 rounded text-blue-300">
                  @features.tsx
                </code>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                <div className="flex items-center gap-3">
                  <span>∞ Agent ⌘↑</span>
                  <span>☁ claude-4-sonnet</span>
                </div>
                <span>🖼</span>
              </div>
            </div>

            {/* Carousel dots */}
            <div className="flex justify-center items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-zinc-600" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-zinc-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
