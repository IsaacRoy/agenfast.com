"use client";

import { useState } from "react";

const developers = [
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "Full-Stack Developer",
    company: "Stripe",
    location: "San Francisco, CA",
    color: "bg-blue-500",
    joined: "2 weeks ago",
    photo: "https://i.pravatar.cc/150?img=47",
  },
  {
    initials: "MJ",
    name: "Marcus Johnson",
    role: "AI Engineer",
    company: "OpenAI",
    location: "New York, NY",
    color: "bg-green-500",
    joined: "1 month ago",
    photo: "https://i.pravatar.cc/150?img=11",
  },
  {
    initials: "PP",
    name: "Priya Patel",
    role: "Software Engineer",
    company: "Vercel",
    location: "London, UK",
    color: "bg-red-500",
    joined: "3 days ago",
    photo: "https://i.pravatar.cc/150?img=20",
  },
  {
    initials: "AR",
    name: "Alex Rivera",
    role: "Startup Founder",
    company: "BuildFast Inc.",
    location: "Austin, TX",
    color: "bg-purple-500",
    joined: "1 week ago",
    photo: "https://i.pravatar.cc/150?img=52",
  },
  {
    initials: "MK",
    name: "Mia Kowalski",
    role: "Product Engineer",
    company: "Linear",
    location: "Berlin, DE",
    color: "bg-orange-500",
    joined: "5 days ago",
    photo: "https://i.pravatar.cc/150?img=56",
  },
];

export default function AvatarStack() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex -space-x-2" style={{ isolation: "isolate" }}>
      {developers.map((dev, i) => (
        <div
          key={i}
          className="relative"
          style={{ zIndex: hovered === i ? 50 : 10 - i }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Tooltip card */}
          <div
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 pointer-events-none transition-all duration-200 ${
              hovered === i
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <div className="relative bg-zinc-900 border border-zinc-700/80 rounded-xl p-3 shadow-2xl shadow-black/70">
              {/* Caret */}
              <div className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-r border-b border-zinc-700/80 rotate-45" />

              {/* Header: photo + name */}
              <div className="flex items-center gap-2.5 mb-2">
                <img
                  src={dev.photo}
                  alt={dev.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-zinc-700"
                />
                <div className="min-w-0">
                  <p className="text-white text-xs font-semibold leading-tight truncate">
                    {dev.name}
                  </p>
                  <p className="text-zinc-400 text-[10px] leading-tight mt-0.5">
                    {dev.company}
                  </p>
                </div>
              </div>

              {/* Role badge */}
              <span className="inline-block bg-zinc-800 text-zinc-300 text-[9px] font-medium px-2 py-0.5 rounded-full leading-tight">
                {dev.role}
              </span>

              {/* Footer */}
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-800">
                <span className="text-zinc-500 text-[9px]">{dev.location}</span>
                <span className="text-zinc-500 text-[9px]">
                  Joined {dev.joined}
                </span>
              </div>
            </div>
          </div>

          {/* Avatar circle — photo */}
          <div
            className={`w-8 h-8 rounded-full border-2 border-[#000000] overflow-hidden cursor-default transition-transform duration-150 ${
              hovered === i ? "scale-110" : ""
            }`}
          >
            <img
              src={dev.photo}
              alt={dev.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}

      {/* Shadow ghost circle */}
      <div
        className="w-8 h-8 rounded-full border-2 border-[#000000]"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(circle at 40% 35%, rgba(255,255,255,0.08) 0%, rgba(100,100,120,0.18) 40%, rgba(30,30,40,0.55) 100%)",
          boxShadow: "inset 0 2px 6px rgba(255,255,255,0.06), inset 0 -2px 6px rgba(0,0,0,0.6)",
          backdropFilter: "blur(2px)",
        }}
      />
    </div>
  );
}
