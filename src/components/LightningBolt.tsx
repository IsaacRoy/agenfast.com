export default function LightningBolt() {
  return (
    <svg
      viewBox="0 0 320 480"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_0_60px_rgba(234,179,8,0.4)]"
      fill="none"
    >
      <defs>
        <linearGradient id="bolt-face1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="50%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#CA8A04" />
        </linearGradient>
        <linearGradient id="bolt-face2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="bolt-face3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CA8A04" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="bolt-face4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id="bolt-edge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF9C3" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#EAB308" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Top-right face of bolt (bright) */}
      <polygon
        points="190,20 260,180 200,180 240,300 130,300 160,210 100,210"
        fill="url(#bolt-face2)"
        opacity="0.95"
      />

      {/* Left dark face */}
      <polygon
        points="100,210 160,210 130,300 60,460"
        fill="url(#bolt-face3)"
        opacity="0.9"
      />

      {/* Main front face */}
      <polygon
        points="190,20 260,180 200,180 240,300 130,300 160,210 100,210 190,20"
        fill="url(#bolt-face1)"
        opacity="0.85"
      />

      {/* Bottom right face */}
      <polygon
        points="240,300 130,300 60,460 200,460"
        fill="url(#bolt-face4)"
        opacity="0.88"
      />

      {/* Right angled face */}
      <polygon
        points="260,180 240,300 200,460 200,180"
        fill="url(#bolt-face2)"
        opacity="0.7"
      />

      {/* Top tip highlight */}
      <polygon
        points="190,20 220,80 190,60 160,80"
        fill="#FEF9C3"
        opacity="0.9"
      />

      {/* Bright edge lines (wireframe look) */}
      <g stroke="url(#bolt-edge)" strokeWidth="1" opacity="0.5" filter="url(#glow)">
        <line x1="190" y1="20" x2="260" y2="180" />
        <line x1="190" y1="20" x2="100" y2="210" />
        <line x1="260" y1="180" x2="200" y2="180" />
        <line x1="200" y1="180" x2="240" y2="300" />
        <line x1="240" y1="300" x2="130" y2="300" />
        <line x1="130" y1="300" x2="160" y2="210" />
        <line x1="160" y1="210" x2="100" y2="210" />
        <line x1="100" y1="210" x2="60" y2="460" />
        <line x1="60" y1="460" x2="200" y2="460" />
        <line x1="200" y1="460" x2="240" y2="300" />
        <line x1="260" y1="180" x2="200" y2="460" />
      </g>

      {/* Inner diagonal lines (crystal facets) */}
      <g stroke="#FEF08A" strokeWidth="0.5" opacity="0.25">
        <line x1="190" y1="20" x2="200" y2="180" />
        <line x1="190" y1="20" x2="240" y2="300" />
        <line x1="160" y1="210" x2="200" y2="460" />
        <line x1="130" y1="300" x2="200" y2="460" />
      </g>

      {/* Glow overlay on bright surfaces */}
      <polygon
        points="190,20 260,180 200,180 240,300"
        fill="#FEF9C3"
        opacity="0.08"
      />
    </svg>
  );
}
