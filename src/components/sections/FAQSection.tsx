"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What exactly is AgenFast?",
    a: "AgenFast is the world's first AI-optimized NextJS + Google ADK boilerplate, bundled with a 7+ hour end-to-end course. You get production-ready code to clone and ship AI agents fast, plus a full curriculum that takes you from zero to deploying complex multi-agent systems.",
  },
  {
    q: "What is Google ADK and why does it matter?",
    a: "Google ADK (Agent Development Kit) is Google's official framework for building production-grade AI agents. It gives you structured multi-agent orchestration, tool use, memory, and deployment to Google Cloud — all of which AgenFast has pre-configured so you don't start from scratch.",
  },
  {
    q: "Do I need to be an experienced developer to use AgenFast?",
    a: "No. AgenFast is designed for all levels. The included Cursor AI rules and vibe coding workflow mean you can build production agents even with minimal coding experience. The course walks you through every concept step by step.",
  },
  {
    q: "What's included in the 7+ hour course?",
    a: "The course covers building AI agents from scratch using Google ADK, multi-agent orchestration, MCP (Model Context Protocol) integration, RAG pipelines with vector search, streaming chat UIs, deploying to Vercel and GCP Cloud Run, and a guide to landing high-paying clients with your agents.",
  },
  {
    q: "What is MCP and is it included?",
    a: "MCP (Model Context Protocol) is the emerging standard for connecting AI agents to external tools and data sources. AgenFast includes a dedicated MCP integration guide, and the upcoming MCP & Agent-to-Agent course is included free with your purchase.",
  },
  {
    q: "How does the Cursor AI setup work?",
    a: "AgenFast ships with pre-written Cursor AI rules and project configuration tailored to the codebase. This means Cursor understands your architecture and helps you write agent code significantly faster — no manual setup required.",
  },
  {
    q: "How do I deploy my AI agent?",
    a: "AgenFast is optimized for two paths: Vercel for the Next.js frontend and GCP Agent Engine / Cloud Run for the Google ADK backend. Both deployment guides are included and the project structure is pre-configured for one-command deploys.",
  },
  {
    q: "What languages and frameworks does AgenFast use?",
    a: "The frontend is built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. The AI agent backend uses Python with Google ADK. Both are pre-configured and connected out of the box.",
  },
  {
    q: "How is AgenFast different from other AI courses?",
    a: "Most courses give you videos and starter snippets — you still have to build everything from scratch. AgenFast gives you a complete, production-ready boilerplate to clone on day one, plus the course to understand every piece of it. You ship, not just learn.",
  },
  {
    q: "When does the MCP & Agent-to-Agent course release?",
    a: "The MCP & Agent-to-Agent course is coming soon. Everyone who purchases AgenFast gets automatic access at no extra cost the moment it launches.",
  },
  {
    q: "Is this a subscription or a one-time purchase?",
    a: "Strictly one-time. Pay once and you own everything — the boilerplate, the full course, all future courses, all future boilerplate updates, and community access. No recurring fees, ever.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#000000] py-28 px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-base">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="mailto:hello@agenfast.com"
              className="text-yellow-400 hover:underline"
            >
              Contact us
            </a>{" "}
            for support
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-zinc-800 last:border-b-0">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
              >
                <span
                  className={`text-sm font-medium transition-colors ${
                    open === i ? "text-white" : "text-zinc-300 group-hover:text-white"
                  }`}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-zinc-500 transition-transform duration-200 ${
                    open === i ? "rotate-180 text-yellow-400" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="text-zinc-400 text-sm leading-relaxed pb-5 -mt-1">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
