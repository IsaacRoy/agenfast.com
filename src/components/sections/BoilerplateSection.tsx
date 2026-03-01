import { Blocks, Zap, RefreshCcw, Clock } from "lucide-react";

const points = [
  {
    icon: Blocks,
    title: "Pre-written foundation",
    desc: "A boilerplate is a ready-made codebase with UI components and agent logic already prewritten — so you never start from scratch.",
  },
  {
    icon: Clock,
    title: "Weeks of setup, skipped",
    desc: "The average dev spends 3–6 weeks configuring infrastructure before writing a single line of product code. A boilerplate eliminates that entirely.",
  },
  {
    icon: Zap,
    title: "Ship your idea, not the plumbing",
    desc: "Every hour you spend on boilerplate is an hour not spent on what makes your product unique. We handle the plumbing so you can focus on the product.",
  },
  {
    icon: RefreshCcw,
    title: "Maintained & production-ready",
    desc: "AgenFast gives you both — a production-ready boilerplate and a full tutorial course, continuously updated so you always have modern, stable code and up-to-date learning.",
  },
];

export default function BoilerplateSection() {
  return (
    <section className="bg-[#000000] py-20 px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">
            The basics
          </p>
          <h2 className="text-4xl font-bold text-white leading-tight mb-4">
            What is a boilerplate,{" "}
            <span className="text-yellow-400">and why does it matter?</span>
          </h2>
          <p className="text-zinc-500 text-base max-w-md mx-auto leading-relaxed">
            The fastest builders don&apos;t build everything — they build on top of solid foundations.
          </p>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="flex gap-4 p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 hover:border-zinc-700 transition-colors"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center mt-0.5">
                  <Icon size={15} className="text-yellow-400" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-white font-semibold text-sm">{point.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
