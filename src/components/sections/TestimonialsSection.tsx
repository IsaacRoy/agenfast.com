"use client";

import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  title?: string;
  body: string;
}

const row1: Testimonial[] = [
  {
    name: "raghu_rtr",
    role: "Full-stack Developer",
    avatar: "https://i.pravatar.cc/80?img=11",
    rating: 5,
    title: "Super fast setup",
    body: "This boilerplate is a lifesaver! Super fast setup, AI-optimized and ready to go. AgenFast saved me days of configuration — I had my first Google ADK agent running in under an hour.",
  },
  {
    name: "Bukky Soyemi",
    role: "Author & App Founder",
    avatar: "https://i.pravatar.cc/80?img=5",
    rating: 5,
    body: "I am the author of two books and an app founder. Although I am not a professional developer, AgenFast and the Cursor AI rules empowered me to build my own AI-powered app with full confidence.",
  },
  {
    name: "Sivarajan",
    role: "Engineering Manager",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 5,
    body: "The source code is clean and incredibly well thought-out. The multi-agent architecture patterns saved my team weeks of research. We deployed to Cloud Run on day one.",
  },
  {
    name: "Tanay Rajoria",
    role: "Founder",
    avatar: "https://i.pravatar.cc/80?img=15",
    rating: 5,
    body: "We went from prototype to a fully functioning AI product in under a week. The pre-built Claude agents and the 7-hour course are a game changer — nothing else gives you this end-to-end.",
  },
  {
    name: "Chris E.",
    role: "CEO",
    avatar: "https://i.pravatar.cc/80?img=20",
    rating: 5,
    body: "Found this while looking for a way to get to zero fast. The 1-1 consultation call alone was worth the price. Real, direct help from someone who knows AI agent architecture deeply.",
  },
  {
    name: "Mia Torres",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/80?img=25",
    rating: 5,
    title: "Best DX I've experienced",
    body: "Within 30 minutes I had a streaming AI agent UI running with Cursor AI rules set up. The components built for agentic workflows are exactly what the ecosystem was missing.",
  },
];

const row2: Testimonial[] = [
  {
    name: "Paul",
    role: "Frontend Developer",
    avatar: "https://i.pravatar.cc/80?img=30",
    rating: 5,
    body: "Found AgenFast on Reddit and bought it immediately. The Google ADK integration guide alone saved me hours of reading docs. Customer support is fast and genuinely helpful.",
  },
  {
    name: "Jikhaze",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/80?img=33",
    rating: 5,
    body: "AgenFast is awesome. The MCP integration guide is the clearest resource I've found anywhere. The team supports you like it's their own product on the line.",
  },
  {
    name: "Krissmann",
    role: "Indie Maker",
    avatar: "https://i.pravatar.cc/80?img=40",
    rating: 5,
    title: "0 to launch in 2 days",
    body: "I went from 0 to a live AI agent product in 2 days. The Vertex AI and Cloud Run setup was already handled. I just focused on building my unique features.",
  },
  {
    name: "Brendan Chambers",
    role: "Indie Developer",
    avatar: "https://i.pravatar.cc/80?img=45",
    rating: 5,
    title: "This is actually insane",
    body: "The pre-built Claude agents handle tool use, RAG, and streaming out of the box. Spent zero time on infrastructure and my client was blown away by the demo quality.",
  },
  {
    name: "Jack C.",
    role: "Indie Hacker",
    avatar: "https://i.pravatar.cc/80?img=50",
    rating: 5,
    body: "I used to rebuild the same agent scaffolding every project. AgenFast killed that problem completely. The Cursor AI rules alone improved my workflow more than any tool I've bought.",
  },
  {
    name: "Sara Nguyen",
    role: "CTO",
    avatar: "https://i.pravatar.cc/80?img=55",
    rating: 5,
    title: "Shipped in record time",
    body: "Our team cut our AI MVP timeline from 3 months to 2 weeks. The multi-agent orchestration patterns are production-grade and the course walks you through every decision clearly.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-zinc-700 text-zinc-700"
          }
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-[300px] shrink-0 rounded-2xl bg-[#111111] border border-zinc-800 p-5 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={t.avatar}
          alt={t.name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
        <div className="flex flex-col min-w-0">
          <span className="text-white text-sm font-semibold truncate">{t.name}</span>
          <span className="text-zinc-500 text-xs truncate">{t.role}</span>
        </div>
      </div>

      <StarRating rating={t.rating} />

      <div className="flex flex-col gap-1">
        {t.title && (
          <p className="text-white text-sm font-semibold">{t.title}</p>
        )}
        <p className="text-zinc-400 text-xs leading-relaxed line-clamp-4">
          {t.body}
        </p>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Testimonial[];
  direction: "left" | "right";
}) {
  const [paused, setPaused] = React.useState(false);
  const doubled = [...items, ...items];

  const animationStyle: React.CSSProperties = {
    display: "flex",
    gap: "16px",
    width: "max-content",
    animation: `${direction === "left" ? "marquee-left" : "marquee-right"} 28s linear infinite`,
    animationPlayState: paused ? "paused" : "running",
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }}
      />
      <div style={animationStyle}>
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="px-6 text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Don&apos;t just take my word for it
        </h2>
        <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
          See what developers are building with AgenFast and how it&apos;s helping them ship faster.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} direction="right" />
        <MarqueeRow items={row2} direction="left" />
      </div>
    </section>
  );
}
