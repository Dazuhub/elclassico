import React from 'react';
import { Ticket, Sparkles, Shield, Trophy } from 'lucide-react';
import RealMadridBadge from './RealMadridBadge';

interface HeroSectionProps {
  onOpenTickets: () => void;
  onOpenBadgeInspector: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTickets,
  onOpenBadgeInspector,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070b09] via-[#09110c] to-[#040605] pt-6 md:pt-10">
      {/* Background Floodlights & Halftone Grid */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Stadium Floodlight Cones */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#52B748]/15 rounded-full blur-[100px]" />
        <div className="absolute -top-32 right-1/4 w-[500px] h-96 bg-[#3ea534]/15 rounded-full blur-[120px]" />
        
        {/* Subtle dot matrix pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(#52B748 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px] md:min-h-[540px]">
          
          {/* Left Column: Bold Athletic Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left py-4">
            
            {/* Athletic Title */}
            <div className="space-y-1">
              <h1 className="text-6xl sm:text-7xl md:text-8xl tracking-tight leading-[0.88] font-black uppercase font-display select-none">
                <span className="block text-white drop-shadow-md">LIVE FOR</span>
                <span className="block text-[#52B748] drop-shadow-[0_4px_24px_rgba(82,183,72,0.45)]">
                  FOOTBALL
                </span>
              </h1>
            </div>

            {/* Subtitle matching image 1 */}
            <div className="space-y-1.5 text-zinc-300 max-w-md">
              <p className="text-base sm:text-lg font-medium leading-snug">
                The passion. The drama. The glory.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-snug">
                Every match. Every moment. Royal legacy since 1902.
              </p>
            </div>

            {/* Buttons Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenTickets}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#52B748] hover:bg-[#5fd453] text-[#050b06] font-extrabold uppercase tracking-wider text-sm rounded-full shadow-[0_0_24px_rgba(82,183,72,0.4)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Ticket className="w-5 h-5 text-[#050b06] transition-transform group-hover:rotate-12" />
                <span>GET MATCH TICKETS</span>
              </button>

              <button
                onClick={onOpenBadgeInspector}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-black/60 hover:bg-zinc-900/90 text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider rounded-full border border-zinc-700/80 hover:border-[#52B748]/60 transition-all duration-200 cursor-pointer"
              >
                <Shield className="w-4 h-4 text-[#52B748]" />
                <span>BADGE BLUEPRINT</span>
              </button>
            </div>

            {/* Quick Badge Heritage Strip */}
            <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#52B748] animate-pulse" />
                <span className="font-semibold text-zinc-300">15× UCL KINGS</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>EST. 1902 MADRID</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-zinc-500">
                <Sparkles className="w-3 h-3 text-[#52B748]" />
                <span>ROYAL CREST CROWN</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with #10 player celebration in the Santiago Bernabéu */}
          <div className="lg:col-span-6 relative flex justify-center items-end">
            <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[16/13] flex items-center justify-center">
              
              {/* Stadium Floodlight Halo */}
              <div className="absolute inset-0 bg-radial from-[#52B748]/20 via-transparent to-transparent rounded-full filter blur-2xl" />

              {/* Stadium Arch graphic & crowd stands */}
              <svg
                viewBox="0 0 600 500"
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              >
                <defs>
                  {/* Pitch gradient */}
                  <linearGradient id="pitch-grad" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#071b0b" />
                    <stop offset="50%" stopColor="#0e2a14" />
                    <stop offset="100%" stopColor="#061208" />
                  </linearGradient>
                  {/* Crowd stands lighting */}
                  <radialGradient id="stadium-lights" cx="50%" cy="25%" r="65%">
                    <stop offset="0%" stopColor="#d5f5cf" stopOpacity="0.45" />
                    <stop offset="40%" stopColor="#52B748" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#020803" stopOpacity="0" />
                  </radialGradient>
                  {/* Jersey gold accents */}
                  <linearGradient id="jersey-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a5323" />
                    <stop offset="100%" stopColor="#0a2a11" />
                  </linearGradient>
                </defs>

                {/* Stadium Roof Lights & Tiers */}
                <ellipse cx="300" cy="180" rx="280" ry="120" fill="url(#stadium-lights)" />

                {/* Stadium Tier Seating Silhouette (Packed Crowd) */}
                <path
                  d="M 20 220 Q 300 160 580 220 L 590 280 Q 300 230 10 280 Z"
                  fill="#0c1710"
                  opacity="0.95"
                />
                
                {/* Roaring Crowd Noise Particles */}
                {Array.from({ length: 45 }).map((_, i) => (
                  <circle
                    key={`crowd-light-${i}`}
                    cx={40 + ((i * 12.3) % 520)}
                    cy={180 + ((i * 7.7) % 60)}
                    r={i % 3 === 0 ? 2 : 1.2}
                    fill={i % 4 === 0 ? '#52B748' : '#ffffff'}
                    opacity={0.3 + (i % 5) * 0.12}
                  />
                ))}

                {/* Pitch Turf */}
                <path
                  d="M 0 340 Q 300 320 600 340 L 600 500 L 0 500 Z"
                  fill="url(#pitch-grad)"
                />
                {/* Grass stripe lines */}
                <line x1="0" y1="380" x2="600" y2="380" stroke="#143b1c" strokeWidth="2" opacity="0.6" />
                <line x1="0" y1="430" x2="600" y2="430" stroke="#143b1c" strokeWidth="2.5" opacity="0.6" />
                <line x1="0" y1="480" x2="600" y2="480" stroke="#143b1c" strokeWidth="3" opacity="0.6" />

                {/* Overhead Stadium Floodlight Spotlights Cones */}
                <polygon points="60,30 240,360 160,360" fill="#a3f799" opacity="0.08" />
                <polygon points="540,30 360,360 440,360" fill="#a3f799" opacity="0.08" />

                {/* ===================================================
                    HERO PLAYER CELEBRATION (Kneeling with arms raised, #10)
                    =================================================== */}
                <g id="celebrating-player" transform="translate(0, 15)">
                  {/* Player Shadow on pitch */}
                  <ellipse cx="300" cy="460" rx="110" ry="24" fill="#000000" opacity="0.75" />

                  {/* Kneeling Legs / Shorts */}
                  <path
                    d="M 245 425 C 240 450 220 460 210 462 C 220 466 260 466 270 448 L 278 410 Z"
                    fill="#0a1a0d"
                    stroke="#17361b"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 355 425 C 360 450 380 460 390 462 C 380 466 340 466 330 448 L 322 410 Z"
                    fill="#0a1a0d"
                    stroke="#17361b"
                    strokeWidth="1.5"
                  />
                  {/* Soccer Cleats on turf */}
                  <ellipse cx="212" cy="462" rx="14" ry="7" fill="#111" stroke="#52B748" strokeWidth="1" />
                  <ellipse cx="388" cy="462" rx="14" ry="7" fill="#111" stroke="#52B748" strokeWidth="1" />

                  {/* Shorts */}
                  <path
                    d="M 252 380 L 244 425 L 285 425 L 300 405 L 315 425 L 356 425 L 348 380 Z"
                    fill="#061208"
                    stroke="#0f2613"
                    strokeWidth="2"
                  />
                  {/* White/Green Club shorts stripe */}
                  <line x1="247" y1="385" x2="242" y2="422" stroke="#52B748" strokeWidth="3" />
                  <line x1="353" y1="385" x2="358" y2="422" stroke="#52B748" strokeWidth="3" />

                  {/* Torso - Green/Royal Jersey viewed from back */}
                  <path
                    d="M 235 285 C 225 320 248 385 255 385 L 345 385 C 352 385 375 320 365 285 C 350 270 325 265 300 265 C 275 265 250 270 235 285 Z"
                    fill="url(#jersey-grad)"
                    stroke="#1c5525"
                    strokeWidth="2"
                  />

                  {/* Left Arm Raised High */}
                  <path
                    d="M 240 285 C 220 250 190 200 175 160 C 168 145 178 135 190 145 C 210 170 235 220 255 270 Z"
                    fill="#15421c"
                    stroke="#1f612a"
                    strokeWidth="2"
                  />
                  {/* Left Hand Clenched Fist in Triumph */}
                  <circle cx="174" cy="142" r="10" fill="#c29b7a" stroke="#875d3c" strokeWidth="1.5" />

                  {/* Right Arm Raised High */}
                  <path
                    d="M 360 285 C 380 250 410 200 425 160 C 432 145 422 135 410 145 C 390 170 365 220 345 270 Z"
                    fill="#15421c"
                    stroke="#1f612a"
                    strokeWidth="2"
                  />
                  {/* Right Hand Clenched Fist in Triumph */}
                  <circle cx="426" cy="142" r="10" fill="#c29b7a" stroke="#875d3c" strokeWidth="1.5" />

                  {/* Head & Neck (Back of head looking up at the sky/lights) */}
                  <ellipse cx="300" cy="245" rx="18" ry="22" fill="#2a1f18" />
                  <path d="M 290 255 L 290 270 L 310 270 L 310 255 Z" fill="#b08868" />
                  {/* Athletic Hair styling */}
                  <path d="M 282 242 C 285 225 315 225 318 242 C 315 235 285 235 282 242 Z" fill="#140f0c" />

                  {/* Back Jersey Number "10" (Bold athletic typography matching Image 1) */}
                  <text
                    x="300"
                    y="350"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="60"
                    fontWeight="900"
                    fontFamily="sans-serif"
                    letterSpacing="2"
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }}
                  >
                    10
                  </text>
                  <text
                    x="300"
                    y="295"
                    textAnchor="middle"
                    fill="#c5eec2"
                    fontSize="13"
                    fontWeight="800"
                    letterSpacing="4"
                    fontFamily="sans-serif"
                  >
                    MADRID
                  </text>
                </g>

                {/* Floating Crest Badge Hologram badge near the hero player */}
                <g transform="translate(420, 260) scale(0.24)">
                  <circle cx="250" cy="300" r="220" fill="#000000" opacity="0.6" />
                </g>
              </svg>

              {/* Watermark badge seal in the background */}
              <div 
                onClick={onOpenBadgeInspector}
                className="absolute -top-4 -right-4 sm:right-2 p-3 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#52B748] transition-all cursor-pointer group shadow-2xl"
                title="Click to inspect Real Madrid Official Badge"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-14 shrink-0 flex items-center justify-center bg-white/5 rounded-xl p-1 group-hover:scale-105 transition-transform">
                    <RealMadridBadge size={44} variant="monochrome-invert" />
                  </div>
                  <div className="text-left pr-2">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#52B748]">Official Crest</div>
                    <div className="text-xs font-bold text-white">Real Madrid C.F.</div>
                    <div className="text-[10px] text-zinc-400">Vector SVG Badge &rarr;</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ========================================================
          ROUGH TORN BRUSH / GRUNGE DIVIDER
          Matches the exact distressed black torn paper divider in Image 1!
          ======================================================== */}
      <div className="relative w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1200 48"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 text-[#050607] fill-current"
        >
          {/* Jagged, torn distress silhouette */}
          <path d="M 0 48 L 0 24 
            Q 30 12 55 26 
            T 110 18 
            Q 140 28 175 14 
            T 240 22 
            Q 280 8 320 20 
            T 390 12 
            Q 440 25 480 15 
            T 540 24 
            Q 590 10 630 22 
            T 700 16 
            Q 750 28 800 14 
            T 870 24 
            Q 920 8 960 20 
            T 1030 15 
            Q 1080 26 1130 18 
            T 1200 24 
            L 1200 48 Z" 
          />
        </svg>
      </div>
    </section>
  );
};
export default HeroSection;
