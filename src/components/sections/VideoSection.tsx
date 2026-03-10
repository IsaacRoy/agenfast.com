"use client";

import { useEffect, useRef, useState } from "react";

const shorts = [
  { id: "BF2k_fKuCVM" },
  { id: "AnaBQacfH50" },
  { id: "wQCRZlbLgY4" },
];

const headlineWords = [
  { text: "Don't", color: "text-white" },
  { text: "fall", color: "text-white" },
  { text: "behind", color: "text-white" },
  { text: "the", color: "text-white" },
  { text: "Agentic", color: "text-yellow-400" },
  { text: "race.", color: "text-yellow-400" },
];

const EARN_WORDS = ["Fast ⚡", "Early 💪", "More 💰"];

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [earnIdx, setEarnIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setEarnIdx(p => (p + 1) % EARN_WORDS.length);
    }, 600);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#000000] py-32 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-20">

        {/* ── 3 Shorts in one line ── */}
        <div
          className={`grid grid-cols-3 gap-6 w-full max-w-4xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {shorts.map((short, i) => (
            <div
              key={short.id}
              className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/60"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <iframe
                className="absolute inset-0 w-full h-full scale-[1.02]"
                src={`https://www.youtube.com/embed/${short.id}?rel=0&modestbranding=1&showinfo=0`}
                title={`AgenFast video ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              {/* Bottom fade to hide YT bar */}
              <div className="absolute bottom-0 left-0 right-0 h-14 z-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
              {/* Top fade to hide channel name */}
              <div className="absolute top-0 left-0 right-0 h-14 z-20 bg-gradient-to-b from-black to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* ── Tagline block ── */}
        <div className="flex flex-col items-center gap-8 text-center max-w-4xl w-full">

          {/* Label */}
          <div
            className={`flex items-center gap-4 w-full max-w-sm transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-zinc-400 text-xl uppercase tracking-[0.18em] font-black whitespace-nowrap">
              The Opportunity
            </span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          {/* Word-by-word headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight flex flex-wrap justify-center gap-x-4 gap-y-1">
            {headlineWords.map((word, i) => (
              <span
                key={i}
                className={`${word.color} inline-block transition-all duration-500`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0px)" : "translateY(24px)",
                  transitionDelay: `${400 + i * 90}ms`,
                }}
              >
                {word.text}
              </span>
            ))}
          </h2>

          {/* Sub-copy */}
          <p
            className={`text-zinc-400 text-lg md:text-xl leading-relaxed transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "980ms" }}
          >
            It&apos;s the golden opportunity for both{" "}
            <span className="text-white font-semibold">techies</span> and{" "}
            <span className="text-white font-semibold">non-techies</span> alike —
            using <span className="text-yellow-400 font-semibold">AgenFast</span>.
          </p>

          {/* The Formula */}
          <div
            className={`flex flex-col items-center gap-5 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "1100ms" }}
          >
            {/* Label — same style as "THE OPPORTUNITY" */}
            <div className="flex items-center gap-4 w-full max-w-xs">
              <div className="flex-1 h-px bg-zinc-800" />
              <span className="text-zinc-400 text-xl uppercase tracking-[0.18em] font-black whitespace-nowrap">
                The Formula
              </span>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>

            <>
              <style>{`
                @keyframes word-in {
                  0%   { opacity: 0; transform: translateY(28px) scale(0.92); filter: blur(4px); }
                  100% { opacity: 1; transform: translateY(0px)  scale(1);    filter: blur(0px); }
                }
                .word-shuffle {
                  display: inline-block;
                  animation: word-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
              `}</style>

              {/* Big text: Start Early → Earn [shuffle word] */}
              <p className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-center">
                <span className="text-white">Start Early</span>
                <span className="text-zinc-600 mx-3 font-light text-3xl">→</span>
                <span className="text-white">Earn </span>
                {/* Fixed-width slot — word shuffles inside, sentence never shifts */}
                <span className="inline-block overflow-hidden align-bottom" style={{ minWidth: "9rem" }}>
                  <span key={earnIdx} className="word-shuffle text-yellow-400">
                    {EARN_WORDS[earnIdx]}
                  </span>
                </span>
              </p>
            </>
          </div>

          {/* ── Project 1 demo (capstone) ── */}
          <div
            className={`w-full pt-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "1220ms" }}
          >
            <div className="mb-6 text-left md:text-center">
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em] mb-3">
                Project 1 of 2
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                AI voice assistant — production-ready build
              </h2>
              <p className="mt-3 text-sm md:text-base text-zinc-400 max-w-2xl md:mx-auto">
                In this first capstone project you&apos;ll design, build, and ship a production-ready AI voice assistant using Google
                ADK and Next.js — wiring together speech, tools, and UI into a single experience you can confidently demo to
                clients or employers.
              </p>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/60">
              <div className="relative w-full pt-[56.25%]">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/1web.mp4"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <track
                    default
                    kind="captions"
                    src="/1web.en.vtt"
                    srcLang="en"
                    label="English"
                  />
                </video>
              </div>
            </div>
          </div>

          {/* ── Project 2 demo (RAG agent) ── */}
          <div
            className={`w-full pt-10 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "1300ms" }}
          >
            <div className="mb-6 text-left md:text-center">
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em] mb-3">
                Project 2 of 2
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                RAG agent — end-to-end knowledge assistant
              </h2>
              <p className="mt-3 text-sm md:text-base text-zinc-400 max-w-2xl md:mx-auto">
                This second capstone focuses on retrieval-augmented generation (RAG): you&apos;ll build a knowledge assistant that
                indexes your own documents, answers questions with citations, and demonstrates how to take a data-aware agent
                from prototype to a polished, production-ready experience.
              </p>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/60">
              <div className="relative w-full pt-[56.25%]">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/ragviedo%20(1).mov"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
