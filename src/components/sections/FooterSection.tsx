import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "mailto:hello@agenfast.com" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Refund Policy", href: "#" },
];

export default function FooterSection() {
  return (
    <footer className="bg-[#000000] border-t border-zinc-900 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div
            className="relative w-7 h-7"
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 70% at center, black 40%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at center, black 40%, transparent 80%)",
            }}
          >
            <Image
              src="/agenfast-logo.png"
              alt="AgenFast"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-white font-bold text-base">AgenFast</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-zinc-500 text-sm hover:text-zinc-300 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="max-w-5xl mx-auto mt-6 pt-6 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} AgenFast. AI-optimized NextJS + Google ADK boilerplate.
        </p>
      </div>
    </footer>
  );
}
