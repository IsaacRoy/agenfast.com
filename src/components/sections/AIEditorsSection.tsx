export default function AIEditorsSection() {
  return (
    <section className="bg-[#0a0a0a] py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Integrates with AI Editors like{" "}
          <span className="text-yellow-400">Cursor</span>,{" "}
          <span className="text-yellow-400">Windsurf</span> and{" "}
          <span className="text-yellow-400">Claude Code</span> for faster
          development.
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          AgenFast&apos;s codebases make development faster with built-in rules
          that helps AI Editors write code 10x faster.
        </p>

        {/* Editor logos */}
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {/* Cursor */}
          <div className="flex items-center gap-3 bg-[#111] border border-zinc-800 rounded-xl px-7 py-4">
            {/* Cursor logo: isometric cube — top face + left face white, right face = background */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top face: TL(20,54) → T(100,8) → TR(180,54) → C(100,100) */}
              <polygon points="20,54 100,8 180,54 100,100" fill="white" />
              {/* Left face: TL(20,54) → C(100,100) → B(100,192) → BL(20,146) */}
              <polygon points="20,54 100,100 100,192 20,146" fill="white" />
            </svg>
            <span className="text-white font-bold text-xl tracking-[0.2em]">
              CURSOR
            </span>
          </div>

          {/* Windsurf */}
          <div className="flex items-center gap-3 px-7 py-4">
            {/* Windsurf logo: rounded double-arch W */}
            <svg
              width="38"
              height="30"
              viewBox="0 0 120 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 8 88 C 8 28, 22 6, 36 6 C 50 6, 54 52, 60 52 C 66 52, 70 6, 84 6 C 98 6, 112 28, 112 88"
                stroke="white"
                strokeWidth="17"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span className="text-white font-bold text-xl tracking-wide">
              windsurf
            </span>
          </div>

          {/* Claude Code */}
          <div className="flex items-center gap-3 px-7 py-4">
            {/* Claude logo: official starburst/asterisk symbol from Anthropic */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 16 16"
              fill="#D97757"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z" />
            </svg>
            <span className="text-[#D97757] font-bold text-xl tracking-wide">
              Claude Code
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
