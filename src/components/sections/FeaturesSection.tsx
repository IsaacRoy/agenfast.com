"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  CreditCard,
  User,
  Database,
  Sparkles,
  LayoutGrid,
  Settings,
  MoreHorizontal,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const tabs = [
  { id: "emails", label: "Emails", icon: Mail },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "auth", label: "Login", icon: User },
  { id: "database", label: "Database", icon: Database },
  { id: "ai", label: "AI/LLM", icon: Sparkles },
  { id: "design", label: "Design", icon: LayoutGrid },
  { id: "jobs", label: "Background Jobs", icon: Settings },
  { id: "more", label: "More", icon: MoreHorizontal },
  { id: "deploy", label: "AI Tooling", icon: Rocket },
];

const tabContent: Record<
  string,
  {
    title: string;
    bullets: { bold?: string; text: string; code?: string }[];
    timeSaved: string;
    tags: string[];
  }
> = {
  emails: {
    title: "Email Setup & Design",
    bullets: [
      {
        bold: "Beautiful, responsive email templates",
        text: " design using ",
        code: "react-email",
      },
      { text: "Automated welcome & onboarding ", bold: "sequences" },
      { text: "SES integration guide." },
      { text: "Resend integration guide" },
    ],
    timeSaved: "4 hours",
    tags: ["Resend", "SES", "Mailgun", "Mailchimp"],
  },
  payments: {
    title: "Payments & Billing",
    bullets: [
      {
        bold: "Stripe subscription management",
        text: " with webhooks & trials",
      },
      { text: "LemonSqueezy for ", bold: "digital products & LTD deals" },
      { text: "Credit-based billing ", bold: "system" },
      { text: "One-click checkout & customer portal" },
    ],
    timeSaved: "5 hours",
    tags: ["Stripe", "LemonSqueezy", "Paddle", "PayPal"],
  },
  auth: {
    title: "Authentication & Security",
    bullets: [
      {
        bold: "Next-Auth v5",
        text: " with Google, GitHub & Discord OAuth",
      },
      { text: "Magic link & ", bold: "passwordless authentication" },
      { text: "Role-based access control & ", bold: "protected routes" },
      { text: "Session management with JWT" },
    ],
    timeSaved: "4 hours",
    tags: ["NextAuth", "Clerk", "Auth0", "Lucia"],
  },
  database: {
    title: "Database Setup & Management",
    bullets: [
      {
        bold: "Prisma ORM",
        text: " with type-safe queries & migrations",
      },
      { text: "Supabase & Neon ", bold: "cloud database setup guides" },
      { text: "Vector database for ", bold: "AI embeddings" },
      { text: "Schema management & query optimization" },
    ],
    timeSaved: "6 hours",
    tags: ["PostgreSQL", "Supabase", "Neon", "Prisma"],
  },
  ai: {
    title: "AI & LLM Integration",
    bullets: [
      {
        bold: "OpenAI & Anthropic Claude",
        text: " API setup with streaming",
      },
      { text: "RAG pipeline with ", bold: "vector search & embeddings" },
      { text: "Function calling & ", bold: "tool use patterns" },
      { text: "Vercel AI SDK ", bold: "integration guide" },
    ],
    timeSaved: "7 hours",
    tags: ["OpenAI", "Anthropic", "Groq", "LangChain"],
  },
  design: {
    title: "UI Components & Design System",
    bullets: [
      {
        bold: "50+ shadcn/ui components",
        text: " pre-configured for dark mode",
      },
      { text: "MagicUI ", bold: "animations & effects" },
      { text: "Fully responsive ", bold: "mobile-first design" },
      { text: "Custom theming & ", bold: "CSS variables" },
    ],
    timeSaved: "6 hours",
    tags: ["shadcn/ui", "MagicUI", "Framer", "Tailwind"],
  },
  jobs: {
    title: "Background Jobs & Scheduling",
    bullets: [
      {
        bold: "Inngest",
        text: " for event-driven workflows & cron jobs",
      },
      { text: "Queue management with ", bold: "automatic retries" },
      { text: "Webhook processing & ", bold: "background tasks" },
      { text: "Error tracking & monitoring setup" },
    ],
    timeSaved: "4 hours",
    tags: ["Inngest", "Trigger.dev", "BullMQ", "Upstash"],
  },
  more: {
    title: "SEO & Analytics",
    bullets: [
      {
        bold: "Metadata & Open Graph",
        text: " tags pre-configured",
      },
      { text: "Auto-generated ", bold: "sitemap & robots.txt" },
      { text: "Google Analytics & ", bold: "Plausible integration" },
      { text: "Sentry error tracking setup" },
    ],
    timeSaved: "3 hours",
    tags: ["NextSEO", "Vercel Analytics", "Sentry", "Plausible"],
  },
  deploy: {
    title: "AI Tooling & Agent Setup",
    bullets: [
      {
        bold: "Pre-built Claude agents",
        text: " for auth, db, payments & more",
      },
      { text: "MCP (Model Context Protocol) ", bold: "integration guide" },
      { text: "Cursor AI rules & ", bold: "project configuration" },
      { text: "Multi-agent orchestration patterns" },
    ],
    timeSaved: "8 hours",
    tags: ["Claude", "Cursor", "Copilot", "Aider"],
  },
};

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("emails");
  const content = tabContent[activeTab];

  return (
    <section className="bg-[#000000] py-8 pb-28 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-10">
        {/* Tab Bar */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200 whitespace-nowrap
                  ${
                    isActive
                      ? "border border-zinc-400 text-white bg-transparent"
                      : "border border-transparent text-zinc-400 hover:text-zinc-200"
                  }`}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="w-full rounded-2xl bg-zinc-900/60 border border-zinc-800 p-8 md:p-10">
          <h3 className="text-xl font-bold text-white mb-6">{content.title}</h3>

          {/* Bullet points */}
          <ul className="space-y-4 mb-8">
            {content.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm leading-relaxed">
                <span className="text-zinc-500 mt-0.5">•</span>
                <span>
                  {bullet.bold && <strong className="text-white">{bullet.bold}</strong>}
                  {bullet.text && <span>{bullet.text}</span>}
                  {bullet.code && (
                    <code className="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
                      {bullet.code}
                    </code>
                  )}
                </span>
              </li>
            ))}
          </ul>

          {/* Time saved */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <CheckCircle2 size={16} className="text-green-400" />
            <span className="text-zinc-300">
              Time saved:{" "}
              <strong className="text-green-400">{content.timeSaved}</strong>
            </span>
          </div>

          {/* Tech tags */}
          <div className="flex items-center gap-2 flex-wrap">
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex flex-col items-center gap-5 mt-4">
          <p className="text-zinc-400 text-base">
            And there&apos;s{" "}
            <span className="text-yellow-400 font-medium">much more</span> to
            explore!
          </p>
          <a href="https://agenfast.gumroad.com/l/agenfast" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-zinc-600 bg-transparent text-white hover:bg-zinc-800 hover:text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2"
            >
              Get Started <ArrowRight size={16} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
