"use client";

export default function TrophyBadge() {
  return (
    <>
      <style>{`
        /* ── Duolingo-style squash & stretch bounce ── */
        @keyframes trophy-bounce {
          0%   { transform: scaleX(1)    scaleY(1);    }
          18%  { transform: scaleX(0.92) scaleY(1.08); }
          36%  { transform: scaleX(0.90) scaleY(1.10); }
          55%  { transform: scaleX(0.94) scaleY(1.06); }
          72%  { transform: scaleX(1.08) scaleY(0.93); }
          82%  { transform: scaleX(0.97) scaleY(1.03); }
          91%  { transform: scaleX(1.02) scaleY(0.99); }
          100% { transform: scaleX(1)    scaleY(1);    }
        }

        /* ── Shine sweep across the trophy ── */
        @keyframes trophy-shine {
          0%   { transform: translateX(-220%) rotate(28deg); opacity: 0; }
          8%   { opacity: 1; }
          38%  { transform: translateX(320%)  rotate(28deg); opacity: 0; }
          100% { transform: translateX(320%)  rotate(28deg); opacity: 0; }
        }

        /* ── Sparkle 4-point star pop ── */
        @keyframes sparkle-pop {
          0%   { transform: scale(0) rotate(0deg);   opacity: 0; }
          25%  { transform: scale(1.3) rotate(15deg); opacity: 1; }
          55%  { transform: scale(1)  rotate(35deg);  opacity: 0.85; }
          100% { transform: scale(0) rotate(75deg);  opacity: 0; }
        }

        /* ── Gold shimmer on #1 text ── */
        @keyframes gold-text-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        .trophy-anim {
          animation: trophy-bounce 2.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
          transform-origin: bottom center;
        }

        .trophy-shine-wrap {
          position: relative;
          overflow: hidden;
          display: inline-flex;
        }
        .trophy-shine-wrap::after {
          content: "";
          position: absolute;
          top: -60%;
          left: -50%;
          width: 40%;
          height: 220%;
          background: linear-gradient(
            100deg,
            rgba(255,255,255,0)    20%,
            rgba(255,255,255,0.72) 50%,
            rgba(255,255,255,0)    80%
          );
          transform: rotate(28deg);
          animation: trophy-shine 3.2s ease-in-out infinite;
          pointer-events: none;
        }

        .sparkle-dot {
          position: absolute;
          pointer-events: none;
        }
        .sparkle-dot::before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          background: #ffd700;
          clip-path: polygon(
            50% 0%, 56% 40%, 100% 50%,
            56% 60%, 50% 100%, 44% 60%,
            0% 50%,  44% 40%
          );
        }

        .sp1 { animation: sparkle-pop 2.6s ease-in-out infinite; animation-delay: 0.0s; }
        .sp2 { animation: sparkle-pop 2.6s ease-in-out infinite; animation-delay: 0.5s; }
        .sp3 { animation: sparkle-pop 2.6s ease-in-out infinite; animation-delay: 1.0s; }
        .sp4 { animation: sparkle-pop 2.6s ease-in-out infinite; animation-delay: 1.5s; }
        .sp5 { animation: sparkle-pop 2.6s ease-in-out infinite; animation-delay: 2.0s; }

        .rank-gold {
          background: linear-gradient(
            135deg,
            #fff7a0 0%,
            #ffe033 18%,
            #ffc200 36%,
            #ff9900 50%,
            #ffd000 68%,
            #ffe55c 84%,
            #fff8b0 100%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gold-text-shimmer 3s linear infinite;
        }
      `}</style>

      <div className="inline-flex w-fit items-center gap-3.5 rounded-2xl border border-zinc-700/50 bg-zinc-900/90 px-4 py-3 backdrop-blur-sm shadow-lg shadow-black/40">

        {/* ── Animated trophy ── */}
        <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
          {/* Sparkle particles */}
          <span className="sparkle-dot sp1" style={{ top:  '-5px', left:  '1px',  width: '8px',  height: '8px'  }} />
          <span className="sparkle-dot sp2" style={{ top:  '-7px', right: '3px',  width: '6px',  height: '6px'  }} />
          <span className="sparkle-dot sp3" style={{ bottom:'2px', left: '-5px',  width: '7px',  height: '7px'  }} />
          <span className="sparkle-dot sp4" style={{ top:  '6px',  right:'-5px',  width: '5px',  height: '5px'  }} />
          <span className="sparkle-dot sp5" style={{ bottom:'8px', right:'-3px',  width: '6px',  height: '6px'  }} />

          {/* Trophy SVG — gold gradient fill + bounce + shine */}
          <div className="trophy-anim trophy-shine-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 16 16"
            >
              <defs>
                <linearGradient id="trophyGold" x1="10%" y1="0%" x2="90%" y2="100%">
                  <stop offset="0%"   stopColor="#fff7a1" />
                  <stop offset="22%"  stopColor="#f9c846" />
                  <stop offset="48%"  stopColor="#e8a020" />
                  <stop offset="72%"  stopColor="#c87000" />
                  <stop offset="100%" stopColor="#f9c846" />
                </linearGradient>
                <linearGradient id="trophyGoldBase" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#c87000" />
                  <stop offset="50%"  stopColor="#f9c846" />
                  <stop offset="100%" stopColor="#c87000" />
                </linearGradient>
              </defs>
              <path
                fill="url(#trophyGold)"
                d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z"
              />
            </svg>
          </div>
        </div>

        {/* ── Text block ── */}
        <div className="flex flex-col justify-center gap-1">
          <span className="text-white text-[15px] font-bold leading-tight tracking-tight">1st</span>
          <span className="text-zinc-400 text-[13px] font-normal leading-tight">Product of the week</span>
        </div>
      </div>
    </>
  );
}
