function TechLogo({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-zinc-400 text-xs text-center leading-tight whitespace-pre-line">
        {name}
      </span>
    </div>
  );
}

const NextjsIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 28 28" width="28" height="28">
    <rect width="28" height="28" rx="4" fill="#3178C6" />
    <path
      d="M15.5 20v-2.3c.7.4 1.6.7 2.3.7.9 0 1.4-.4 1.4-1 0-.6-.4-.9-1.5-1.3-1.8-.7-2.6-1.5-2.6-2.8 0-1.6 1.3-2.8 3.3-2.8.8 0 1.6.2 2.1.4v2.2c-.6-.3-1.3-.5-2-.5-.8 0-1.3.3-1.3.9 0 .5.4.8 1.5 1.2 1.9.7 2.7 1.5 2.7 2.9 0 1.8-1.3 2.9-3.5 2.9-.9 0-1.8-.2-2.4-.5zM8 12.1H5V10h9v2.1h-3V20H8v-7.9z"
      fill="white"
    />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="#38BDF8">
    <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.27 10.8 14.42 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.73 7.2 14.58 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.27 16.8 9.42 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.73 13.2 9.58 12 7 12z" />
  </svg>
);

const ShadcnIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
    <path d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0l10.435-10.435c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0zM.305 15.387l5.36-5.36c.407-.407 1.068-.407 1.476 0l2.921 2.921c.408.407.408 1.068 0 1.476L4.702 19.78c-.406.408-1.067.408-1.476 0L.305 16.862c-.407-.407-.407-1.068 0-1.476z" />
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
    <path d="M24 22.525H0l12-21.05 12 21.05z" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" width="27" height="27">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031v-2.867s-.109-3.402 3.35-3.402h5.769s3.24.052 3.24-3.131V3.129S18.28 0 11.914 0zm-3.2 1.812a1.047 1.047 0 1 1 0 2.095 1.047 1.047 0 0 1 0-2.095z" fill="#3776AB" />
    <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963h-2.031v2.867s.109 3.402-3.35 3.402H9.447s-3.24-.052-3.24 3.131v5.403S5.72 24 12.086 24zm3.2-1.812a1.047 1.047 0 1 1 0-2.095 1.047 1.047 0 0 1 0 2.095z" fill="#FFD43B" />
  </svg>
);

const GoogleADKIcon = () => (
  <svg viewBox="0 0 32 32" width="30" height="30">
    <circle cx="16" cy="16" r="15" fill="none" stroke="#4285F4" strokeWidth="1.5" />
    <circle cx="16" cy="10" r="3.5" fill="#4285F4" />
    <path d="M9 22c0-3.866 3.134-7 7-7s7 3.134 7 7" fill="none" stroke="#34A853" strokeWidth="2" strokeLinecap="round" />
    <circle cx="9" cy="19" r="2" fill="#FBBC05" />
    <circle cx="23" cy="19" r="2" fill="#EA4335" />
    <path d="M7 21.5c0-1.1.9-2 2-2" fill="none" stroke="#FBBC05" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M25 21.5c0-1.1-.9-2-2-2" fill="none" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const GoogleCloudIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28">
    <path d="M12 6.5a5.5 5.5 0 0 1 5.44 6.344l.096.313 1.872-.001A3.5 3.5 0 0 1 19 20H6a4 4 0 0 1-.678-7.938l.3-.043.2-.564A5.502 5.502 0 0 1 12 6.5z" fill="none" stroke="#4285F4" strokeWidth="1.5" />
    <path d="M12 7.5c-2.37 0-4.352 1.573-4.93 3.727L6.84 12H6.5a3 3 0 0 0-.192 5.994L6.5 18H19a2.5 2.5 0 0 0 .185-4.994L18.5 13h-.67l-.09-.608A4.503 4.503 0 0 0 12 7.5z" fill="#4285F4" opacity="0.3" />
    <path d="M12 8a4.5 4.5 0 0 1 4.46 3.97L16.6 13h.9a2 2 0 1 1 0 4H6.5a2.5 2.5 0 0 1 0-5h.27L7 11.5A4.502 4.502 0 0 1 12 8z" fill="#4285F4" />
  </svg>
);

const CloudRunIcon = () => (
  <svg viewBox="0 0 32 32" width="28" height="28">
    <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" fill="#4285F4" opacity="0.15" />
    <path d="M16 6a10 10 0 1 0 0 20A10 10 0 0 0 16 6z" fill="none" stroke="#4285F4" strokeWidth="1.5" />
    <path d="M13 11.5l8 4.5-8 4.5V11.5z" fill="#34A853" />
  </svg>
);

const VertexAIIcon = () => (
  <svg viewBox="0 0 32 32" width="28" height="28">
    <polygon points="16,4 28,24 4,24" fill="none" stroke="#4285F4" strokeWidth="1.5" strokeLinejoin="round" />
    <polygon points="16,9 24,22 8,22" fill="#4285F4" opacity="0.2" />
    <circle cx="16" cy="4" r="2.5" fill="#EA4335" />
    <circle cx="28" cy="24" r="2.5" fill="#FBBC05" />
    <circle cx="4" cy="24" r="2.5" fill="#34A853" />
    <circle cx="16" cy="16" r="3" fill="#4285F4" />
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 32 32" width="28" height="28">
    <path
      d="M16 2 C16 2 18 11 26 16 C18 21 16 30 16 30 C16 30 14 21 6 16 C14 11 16 2 16 2Z"
      fill="url(#geminiGrad)"
    />
    <defs>
      <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="50%" stopColor="#9B72CB" />
        <stop offset="100%" stopColor="#EA4335" />
      </linearGradient>
    </defs>
  </svg>
);

const CursorIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <rect width="32" height="32" rx="8" fill="#1a1a1a" />
    <path d="M8 8 L24 16 L16 18 L13 26 Z" fill="white" />
    <path d="M16 18 L13 26 L17 22 Z" fill="#888" />
  </svg>
);

const MCPIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26">
    <circle cx="16" cy="6" r="3" fill="#a78bfa" />
    <circle cx="6" cy="24" r="3" fill="#a78bfa" />
    <circle cx="26" cy="24" r="3" fill="#a78bfa" />
    <line x1="16" y1="9" x2="6" y2="21" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="16" y1="9" x2="26" y2="21" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="9" y1="24" x2="23" y2="24" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="2 2" />
    <circle cx="16" cy="16" r="2.5" fill="#7c3aed" />
  </svg>
);

const row1 = [
  { name: "Next.js", icon: <NextjsIcon /> },
  { name: "TypeScript", icon: <TypeScriptIcon /> },
  { name: "Tailwind\nCSS", icon: <TailwindIcon /> },
  { name: "shadcn/ui", icon: <ShadcnIcon /> },
  { name: "Vercel", icon: <VercelIcon /> },
  { name: "Python", icon: <PythonIcon /> },
];

const row2 = [
  { name: "Google\nADK", icon: <GoogleADKIcon /> },
  { name: "Google\nCloud", icon: <GoogleCloudIcon /> },
  { name: "Cloud\nRun", icon: <CloudRunIcon /> },
  { name: "Vertex\nAI", icon: <VertexAIIcon /> },
  { name: "Gemini", icon: <GeminiIcon /> },
  { name: "Cursor\nAI", icon: <CursorIcon /> },
  { name: "MCP", icon: <MCPIcon /> },
];

export default function TechStackSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-16">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Built with modern stack
          </h2>
          <p className="text-zinc-400 text-lg">
            Powered by Google Cloud & the latest AI tooling
          </p>
        </div>

        {/* Logo Grid */}
        <div className="w-full flex flex-col gap-10">
          {/* Row 1 */}
          <div className="flex items-start justify-between gap-4 flex-wrap">
            {row1.map((tech) => (
              <TechLogo key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex items-start justify-center gap-8 flex-wrap">
            {row2.map((tech) => (
              <TechLogo key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
