import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

const templates = [
  {
    id: "shortcuts",
    title: "Cursor shortcuts reference",
    tag: "Workflow",
    description:
      "A concise, at-a-glance reference of the most useful Cursor keyboard shortcuts so you can move faster, keep your hands on the keyboard, and unlock the full power of the editor while building agents.",
    useCase:
      "Add this to your project docs or internal wiki so anyone working on the codebase can quickly learn and adopt the same high‑leverage Cursor habits.",
    href: "/templates/cursor-shortcuts-reference.md",
    fileLabel: "cursor-shortcuts-reference.md",
  },
  {
    id: "tasks",
    title: "AI task template skeleton",
    tag: "Execution",
    description:
      "A structured prompt and task skeleton for breaking down complex AI work into clear, repeatable steps that you can hand to Cursor, teammates, or future you.",
    useCase:
      "Drop this into your repo (for example in a docs or .cursor folder) to standardise how tasks are described, making it much easier to delegate and reproduce high‑quality AI-assisted work.",
    href: "/templates/ai-task-template-skeleton.md",
    fileLabel: "ai-task-template-skeleton.md",
  },
  {
    id: "rules",
    title: "Cursor rule skeleton",
    tag: "Standards",
    description:
      "A starting point for a project‑specific RULE file so you can teach Cursor exactly how you want code structured, styled, and documented across the repo.",
    useCase:
      "Include this in your project as the base for a customised RULE file so every future AI change follows the same conventions, architecture, and quality bar.",
    href: "/templates/cursor-rule-skeleton.mdc",
    fileLabel: "cursor-rule-skeleton.mdc",
  },
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-900/20 px-4 py-1 text-xs font-mono uppercase tracking-[0.2em] text-yellow-300">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              Free templates
            </p>
            <h1 className="mt-5 text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Plug‑and‑play Cursor templates.
            </h1>
            <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
              Download and drop these into your projects to speed up onboarding, standardise how you brief AI, and keep your
              team building in the same direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {templates.map((tpl) => (
              <div
                key={tpl.id}
                className="group flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-yellow-400/60 hover:bg-zinc-900/70 transition-colors"
              >
                <div className="px-5 pt-5 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-500">
                      Template
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-yellow-300">
                      {tpl.tag}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-white mb-2">{tpl.title}</h2>
                  <p className="text-xs text-zinc-400 leading-relaxed">{tpl.description}</p>
                </div>

                <div className="px-5 pb-4">
                  <p className="mb-3 text-[11px] text-zinc-500 leading-relaxed">{tpl.useCase}</p>
                  <a
                    href={tpl.href}
                    download={tpl.fileLabel}
                    data-datafast-tag={`templates_download_${tpl.id}`}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-yellow-400 text-black text-xs font-semibold py-2 hover:bg-yellow-300 transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

