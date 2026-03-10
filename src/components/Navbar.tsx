"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks: { label: string; href: string; isFree?: boolean }[] = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Docs", href: "/docs" },
  { label: "Templates", href: "/templates", isFree: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // Tailwind md breakpoint
    };
    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    return () => window.removeEventListener("resize", updateIsDesktop);
  }, []);

  return (
    <div
      className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${
          scrolled && isDesktop
            ? "top-4 left-[16%] right-[16%]"
            : "top-3 left-3 right-3 sm:left-6 sm:right-6"
        }`}
    >
      <nav
        className={`w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${scrolled && isDesktop
            ? "rounded-2xl border border-white/[0.12] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.08)_inset]"
            : "rounded-2xl"
          }`}
        style={
          scrolled && isDesktop
            ? {
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 40%, rgba(120,120,180,0.06) 70%, rgba(255,255,255,0.05) 100%)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(255,255,255,0.03)",
              }
            : {
                background: "#18181b",
                boxShadow: "0 1px 0 rgba(255,255,255,0.06)",
              }
        }
      >
        <div className={`mx-auto flex items-center justify-between transition-all duration-500
          ${scrolled && isDesktop ? "px-5 py-2.5" : "px-5 py-3"}`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div
              className={`relative transition-all duration-500 ${
                scrolled && isDesktop ? "w-7 h-7" : "w-9 h-9"
              }`}
              style={{
                maskImage: "radial-gradient(ellipse 70% 70% at center, black 40%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 70% at center, black 40%, transparent 80%)",
              }}
            >
              <Image src="/agenfast-logo.png" alt="AgenFast Logo" fill className="object-contain" />
            </div>
            <span
              className={`text-white font-bold transition-all duration-500 ${
                scrolled && isDesktop ? "text-base" : "text-lg"
              }`}
            >
              AgenFast
            </span>
          </a>

          {/* Nav Links — desktop */}
          <div className={`hidden md:flex items-center transition-all duration-500 ${scrolled ? "gap-1" : "gap-1"}`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-3 py-1.5 text-sm text-zinc-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.06] group flex items-center gap-2"
              >
                <span>{link.label}</span>
                {link.isFree && (
                  <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-yellow-300 bg-yellow-900/30 border border-yellow-400/50 rounded-full px-2 py-[2px]">
                    Free
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* CTA */}
            <a href="https://agenfast.gumroad.com/l/agenfast" target="_blank" rel="noopener noreferrer">
              <Button
                className="relative overflow-hidden bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-lg text-sm"
              >
                <span className="shimmer-overlay" />
                Get AgenFast
              </Button>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-8 h-8 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/[0.08] px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-3 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors flex items-center justify-between gap-2"
              >
                <span>{link.label}</span>
                {link.isFree && (
                  <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-yellow-300 bg-yellow-900/30 border border-yellow-400/50 rounded-full px-2 py-[2px]">
                    Free
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
