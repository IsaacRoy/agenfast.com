"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const agenfastFeatures = [
  "AI-optimized NextJS boilerplate",
  "Google ADK integration",
  "7+ hour end-to-end course",
  "Multi-agent orchestration patterns",
  "MCP (Model Context Protocol) guide",
  "Pre-built Claude agents",
  "RAG pipeline with vector search",
  "Cursor AI rules & project setup",
  "Streaming chat UI components",
  "Function calling & tool use patterns",
  "Vercel & GCP Agent Engine deploy",
  "Guide to land high-paying clients",
  "MCP & Agent-to-Agent course (free)",
  "Lifetime Updates",
];

const otherCoursesHave = [
  "Pre-recorded video lessons",
  "Basic agent concepts explained",
  "Some starter code snippets",
  "Occasional Q&A sessions",
];

const otherCoursesMissing = [
  "No production-ready boilerplate to clone",
  "No Google ADK or real agent architecture",
  "No MCP integration — figure it out yourself",
  "No Cursor AI setup or vibe coding workflow",
  "No pre-built agents to ship from day one",
  "No streaming chat UI for agent output",
  "No multi-agent orchestration included",
  "No guide to land high-paying clients",
  "No 1-1 consultation or community support",
  "Content goes stale — no lifetime updates",
];

export default function PricingSection() {

  return (
    <section className="bg-[#000000] py-28 px-6" id="pricing">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-3">
            Save Money &amp; Development Time
          </h2>
          <p className="text-zinc-400 text-base">
            Get more than any course out there.{" "}
            <span className="text-yellow-400 font-semibold">
              Production code + course for $99
            </span>
          </p>
        </div>


        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AgenFast card */}
          <div className="rounded-2xl border border-yellow-400/30 bg-zinc-900/40 p-7 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                Best Value
              </span>
            </div>

            <div className="mb-5">
              <h3 className="text-white font-bold text-xl">
                AgenFast{" "}
                <span className="text-yellow-400 font-semibold">
                  AI-optimised
                </span>
              </h3>
              <p className="text-zinc-400 text-sm mt-1">
                The only AI-first boilerplate + course to ship agents fast
              </p>
            </div>

            {/* Price */}
            <div className="flex items-end gap-2 mb-1">
              <span className="text-5xl font-bold text-white">$99</span>
              <div className="flex flex-col pb-1">
                <span className="text-zinc-500 line-through text-sm">$349</span>
                <span className="text-green-400 text-xs font-semibold">
                  $250 off
                </span>
              </div>
            </div>
            <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-md mb-3 w-fit">
              One time payment
            </span>

            {/* Future access banner */}
            <div className="flex items-start gap-2.5 bg-yellow-400/5 border border-yellow-400/20 rounded-xl px-4 py-3 mb-5">
              <span className="text-yellow-400 text-base leading-none mt-0.5">∞</span>
              <p className="text-zinc-300 text-xs leading-relaxed">
                <span className="text-yellow-400 font-semibold">Lifetime access included —</span>{" "}
                all future courses, boilerplates, and updates are yours for free. Pay once, own it forever.
              </p>
            </div>

            <a href="https://agenfast.gumroad.com/l/agenfast" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-lg mb-2">
                Get AgenFast
              </Button>
            </a>

            {/* Features */}
            <div className="flex flex-col gap-2.5">
              {agenfastFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <Check size={15} className="text-yellow-400 flex-shrink-0" />
                  <span className="text-zinc-300 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other courses card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-7 flex flex-col">
            <div className="mb-5">
              <h3 className="text-white font-bold text-xl">Other Courses</h3>
              <p className="text-zinc-400 text-sm mt-1">
                What most AI courses out there actually give you
              </p>
            </div>

            {/* Price range */}
            <div className="flex items-end gap-2 mb-6">
              <span className="text-5xl font-bold text-white">
                $200<span className="text-3xl text-zinc-500">+</span>
              </span>
              <div className="flex flex-col pb-1">
                <span className="text-red-400 text-xs font-semibold">
                  More money, less value
                </span>
              </div>
            </div>

            {/* What they have */}
            <div className="flex flex-col gap-2.5 mb-5">
              {otherCoursesHave.map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <Check size={15} className="text-zinc-500 flex-shrink-0" />
                  <span className="text-zinc-400 text-sm">{f}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-700 pt-5">
              <p className="text-white font-semibold text-sm mb-3">
                What&apos;s missing vs AgenFast:
              </p>
              <div className="flex flex-col gap-2.5">
                {otherCoursesMissing.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <X size={15} className="text-red-500 flex-shrink-0" />
                    <span className="text-zinc-400 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom nudge */}
            <div className="mt-auto pt-6">
              <p className="text-zinc-500 text-xs text-center">
                Why pay{" "}
                <span className="text-red-400 font-semibold">$200+</span>{" "}
                just to watch videos, when AgenFast gives you{" "}
                <span className="text-yellow-400 font-semibold">
                  production code + a full course for $99
                </span>
                ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
