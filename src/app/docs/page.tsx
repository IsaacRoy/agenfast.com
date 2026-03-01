import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import {
  Zap,
  BookOpen,
  Layers,
  Database,
  Mic,
  Megaphone,
  ChevronRight,
  Play,
} from "lucide-react";

const sections = [
  {
    id: 1,
    title: "Google ADK Fundamentals",
    icon: Zap,
    lessons: [
      { id: "1.1", title: "Basic Agent" },
      { id: "1.2", title: "Tools & LiteLLM" },
      { id: "1.3", title: "Structured Output" },
      { id: "1.4", title: "Session, State & Runner" },
      { id: "1.5", title: "Persistent Storage" },
      { id: "1.6", title: "Multi Agent" },
      { id: "1.7", title: "Stateful Multi Agent" },
      { id: "1.8", title: "Callbacks" },
      { id: "1.9", title: "Sequential Agents" },
      { id: "1.10", title: "Parallel Agents" },
      { id: "1.11", title: "Loop Agents" },
      { id: "1.12", title: "Code Repo Access" },
    ],
  },
  {
    id: 2,
    title: "Resources & Infrastructure",
    icon: Database,
    lessons: [
      { id: "2.1", title: "AI-Optimised Boilerplate for Google ADK" },
    ],
  },
  {
    id: 3,
    title: "Hackathon Guide & Prompting Course",
    icon: BookOpen,
    lessons: [
      { id: "3.1", title: "AI Reference Projects" },
      { id: "3.2", title: "Talk To Your Computer" },
      { id: "3.3", title: "Agent Workflow Digital Twin" },
      { id: "3.4", title: "Train AI to Work With Tech Stack" },
      { id: "3.5", title: "Parallel AI Development" },
      { id: "3.6", title: "Cursor Rules, AI Task Template, Cursor Shortcuts" },
    ],
  },
  {
    id: 4,
    title: "ADK + Next.js Integration",
    icon: Layers,
    lessons: [
      { id: "4.1", title: "ADK Agent Overview" },
      { id: "4.2", title: "Deploy ADK To Agent Engine" },
      { id: "4.3", title: "NextJS Overview" },
      { id: "4.4", title: "NextJS Session Management" },
      { id: "4.5", title: "NextJS Messages" },
      { id: "4.6", title: "Deploy NextJS to Vercel" },
      { id: "4.7", title: "Source Code Access" },
    ],
  },
  {
    id: 5,
    title: "Project 1 — RAG Agent",
    icon: Database,
    lessons: [
      { id: "5.1", title: "Create GCP Project" },
      { id: "5.2", title: "Install Cloud CLI" },
      { id: "5.3", title: "SetUp RAG Agent" },
      { id: "5.4", title: "RAG Agent Deep Dive" },
      { id: "5.5", title: "Create Corpus Tool" },
      { id: "5.6", title: "List Corpus Tool" },
      { id: "5.7", title: "Add Data Tool" },
      { id: "5.8", title: "Get Document Info Tool" },
      { id: "5.9", title: "Rag Query Tool" },
      { id: "5.10", title: "Delete Document Tool" },
      { id: "5.11", title: "Delete Corpus Tool" },
      { id: "5.12", title: "Source Code Access" },
    ],
  },
  {
    id: 6,
    title: "Project 2 — AI Voice Assistant",
    icon: Mic,
    lessons: [
      { id: "6.1", title: "Project Demo" },
      { id: "6.2", title: "SetUp Overview" },
      { id: "6.3", title: "Voice Assistant Overview" },
      { id: "6.4", title: "Tool Overview" },
      { id: "6.5", title: "ADK Web Demo" },
      { id: "6.6", title: "Overview" },
      { id: "6.7", title: "Create Voice Agent" },
      { id: "6.8", title: "Sending Voice & Text Between Agents & Website" },
      { id: "6.9", title: "Website Breakdown To Receive & Send Info to Agent" },
      { id: "6.10", title: "Final Demo" },
      { id: "6.11", title: "Source Code Access" },
    ],
  },
  {
    id: 7,
    title: "Marketing Playbook",
    icon: Megaphone,
    lessons: [
      { id: "7.1", title: "Strategy and Execution" },
    ],
  },
];

const totalLessons = sections.reduce((acc, s) => acc + s.lessons.length, 0);

const stats = [
  { value: `${sections.length}`, label: "Sections" },
  { value: `${totalLessons}`, label: "Lessons" },
  { value: "7+", label: "Hours" },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />

      {/* ── Page Header ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_50%_0%,rgba(234,179,8,0.07),transparent)]" />
        <div className="relative max-w-4xl mx-auto text-center">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-900/80 px-5 py-2 text-sm text-zinc-400 mb-8">
            <Zap size={12} className="text-yellow-400 fill-yellow-400" />
            <span className="text-white font-medium">Google ADK Course</span>
            <span className="w-px h-3 bg-zinc-700" />
            <span>End-to-end curriculum</span>
          </div>

          <h1 className="text-6xl font-bold text-white leading-tight tracking-tight mb-5">
            Everything you need to
            <br />
            <span className="text-yellow-400">build AI agents.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto leading-relaxed">
            From fundamentals to production deployments — a complete, structured path to mastering Google ADK.
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-10 mt-12">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-10">
                <div className="text-center">
                  <p className="text-3xl font-bold text-yellow-400 font-mono leading-none">{s.value}</p>
                  <p className="text-zinc-500 text-xs mt-1.5 uppercase tracking-widest">{s.label}</p>
                </div>
                {i < stats.length - 1 && <span className="w-px h-8 bg-zinc-800" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course Outline ── */}
      <section className="pb-28 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Section divider label */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Course Outline</span>
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-xs font-mono text-zinc-600">{totalLessons} lessons</span>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden hover:border-zinc-700 transition-colors"
                >
                  {/* Section header */}
                  <div className="flex items-center gap-5 px-6 py-5 border-b border-zinc-800/60">
                    {/* Number */}
                    <span className="font-mono text-2xl font-bold text-yellow-400/30 leading-none w-8 flex-shrink-0 select-none">
                      {String(section.id).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div className="w-8 h-8 rounded-lg border border-zinc-700 bg-zinc-800/60 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-yellow-400" />
                    </div>

                    {/* Title */}
                    <h2 className="text-white font-semibold text-base leading-tight flex-1">
                      {section.title}
                    </h2>

                    {/* Lesson count */}
                    <span className="text-xs font-mono text-zinc-500 border border-zinc-800 rounded-full px-3 py-1 flex-shrink-0">
                      {section.lessons.length} {section.lessons.length === 1 ? "lesson" : "lessons"}
                    </span>
                  </div>

                  {/* Lessons grid */}
                  <div className="px-5 py-3 grid grid-cols-1 sm:grid-cols-2 gap-0.5">
                    {section.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="group/lesson flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-zinc-800/50 transition-colors cursor-pointer"
                      >
                        <Play
                          size={11}
                          className="text-zinc-700 group-hover/lesson:text-yellow-400 transition-colors flex-shrink-0"
                        />
                        <span className="font-mono text-[11px] text-zinc-600 w-7 flex-shrink-0">
                          {lesson.id}
                        </span>
                        <span className="text-zinc-400 text-sm group-hover/lesson:text-zinc-200 transition-colors leading-tight">
                          {lesson.title}
                        </span>
                        <ChevronRight
                          size={11}
                          className="ml-auto text-zinc-700 opacity-0 group-hover/lesson:opacity-100 group-hover/lesson:text-yellow-400 transition-all flex-shrink-0"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/30 px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-white font-semibold text-base">Ready to start building?</p>
              <p className="text-zinc-500 text-sm mt-0.5">Get lifetime access to all {totalLessons} lessons and source code.</p>
            </div>
            <a href="https://agenfast.gumroad.com/l/agenfast" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
              <button className="relative overflow-hidden bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap">
                Get AgenFast
              </button>
            </a>
          </div>

        </div>
      </section>
      <FooterSection />
    </main>
  );
}
