"use client";

import { useEffect, useState } from "react";

const WORDS = ["AI-Agents", "Hackathon Product", "StartUp", "SaaS"];

const TYPE_SPEED = 72;
const DELETE_SPEED = 38;
const PAUSE_AFTER_WORD = 600;
const PAUSE_BEFORE_NEXT = 120;

export default function TypewriterText() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");

  useEffect(() => {
    const current = WORDS[wordIndex];

    if (phase === "typing") {
      if (displayText === current) {
        setPhase("pausing");
        return;
      }
      const t = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, TYPE_SPEED);
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_WORD);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (displayText === "") {
        setPhase("waiting");
        return;
      }
      const t = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, DELETE_SPEED);
      return () => clearTimeout(t);
    }

    if (phase === "waiting") {
      const t = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setPhase("typing");
      }, PAUSE_BEFORE_NEXT);
      return () => clearTimeout(t);
    }
  }, [displayText, wordIndex, phase]);

  return (
    <>
      <style>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes glass-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .glass-ruby-text {
          background: linear-gradient(
            135deg,
            #fff7a0 0%,
            #ffe033 18%,
            #ffc200 34%,
            #ff9900 50%,
            #ffd000 66%,
            #ffe55c 80%,
            #fff8b0 92%,
            #ffd700 100%
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: glass-shimmer 4s linear infinite;
        }
        .glass-ruby-cursor {
          background: linear-gradient(180deg, #fff7a0 0%, #ffc200 50%, #ff9900 100%);
          animation: blink-cursor 1s step-end infinite;
        }
      `}</style>

      <span className="inline-flex items-baseline">
        <span className="glass-ruby-text">{displayText}</span>
        <span
          className="glass-ruby-cursor inline-block w-[3px] rounded-sm ml-[3px]"
          style={{ height: "0.82em" }}
        />
      </span>
    </>
  );
}
