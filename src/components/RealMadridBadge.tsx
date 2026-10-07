import React from 'react';

export type BadgeVariant = 'monochrome' | 'monochrome-invert' | 'royal' | 'emerald' | 'gold-dark';

interface RealMadridBadgeProps {
  size?: number | string;
  variant?: BadgeVariant;
  className?: string;
  onClick?: () => void;
  showCrownOnly?: boolean;
  highlightPart?: 'all' | 'crown' | 'monogram' | 'sash' | 'rings';
  interactive?: boolean;
}

export const RealMadridBadge: React.FC<RealMadridBadgeProps> = ({
  size = 120,
  variant = 'monochrome',
  className = '',
  onClick,
  highlightPart = 'all',
  interactive = false,
}) => {
  // Color tokens based on variant
  // 'monochrome': matches Image 2 (pure black lines and solid fills on white / light)
  // 'monochrome-invert': pure crisp white lines / fills for dark stadium theme
  // 'royal': authentic Real Madrid colors (Imperial Gold #EEB111 / #CFA848, Castile Violet #4B2874, White #FFFFFF)
  // 'emerald': the Footy Live accent green (#52B748 / #38a169)

  const isWhiteBg = variant === 'monochrome';
  const isRoyal = variant === 'royal';
  const isEmerald = variant === 'emerald';
  const isGoldDark = variant === 'gold-dark';

  const strokeColor = isWhiteBg
    ? '#111111'
    : isRoyal
    ? '#0F1D38'
    : isEmerald
    ? '#52B748'
    : isGoldDark
    ? '#D4AF37'
    : '#FFFFFF';

  const fillColor = isWhiteBg
    ? '#111111'
    : isRoyal
    ? '#EEB111'
    : isEmerald
    ? '#52B748'
    : isGoldDark
    ? '#E5C158'
    : '#FFFFFF';

  const sashColor = isRoyal
    ? '#502D7F'
    : isEmerald
    ? '#52B748'
    : isGoldDark
    ? '#997328'
    : isWhiteBg
    ? '#111111'
    : '#FFFFFF';

  const innerRingFill = isRoyal
    ? '#FFFFFF'
    : isWhiteBg
    ? '#FFFFFF'
    : 'transparent';

  const crownCapFill = isRoyal
    ? '#BF182C'
    : isWhiteBg
    ? '#111111'
    : isEmerald
    ? '#1F4723'
    : '#222222';

  const crownOpacity = highlightPart === 'all' || highlightPart === 'crown' ? 1 : 0.25;
  const monogramOpacity = highlightPart === 'all' || highlightPart === 'monogram' ? 1 : 0.25;
  const sashOpacity = highlightPart === 'all' || highlightPart === 'sash' ? 1 : 0.25;
  const ringsOpacity = highlightPart === 'all' || highlightPart === 'rings' ? 1 : 0.25;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 580"
      width={size}
      height={typeof size === 'number' ? (size * 580) / 500 : size}
      className={`transition-all duration-300 ${interactive ? 'cursor-pointer hover:scale-105 filter hover:drop-shadow-[0_0_12px_rgba(82,183,72,0.4)]' : ''} ${className}`}
      onClick={onClick}
      role="img"
      aria-label="Real Madrid Club de Fútbol Official Crest Badge"
    >
      <defs>
        {/* Subtle drop shadow and metallic gradients for royal variant */}
        <linearGradient id="rm-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="50%" stopColor="#EEB111" />
          <stop offset="100%" stopColor="#B38006" />
        </linearGradient>
        <linearGradient id="rm-purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C3EA3" />
          <stop offset="100%" stopColor="#41216B" />
        </linearGradient>
        <linearGradient id="rm-emerald-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#75DF6A" />
          <stop offset="100%" stopColor="#3FA035" />
        </linearGradient>
        <clipPath id="medallion-clip">
          <circle cx="250" cy="360" r="172" />
        </clipPath>
      </defs>

      {/* ========================================================
          1. THE ROYAL CROWN (Corona Real - Granted in 1920 by Alfonso XIII)
          ======================================================== */}
      <g
        id="crown-assembly"
        opacity={crownOpacity}
        className="transition-opacity duration-300"
      >
        {/* Crown Cap interior background (velvet lining in heraldry) */}
        <path
          d="M 155 178 C 170 120 220 86 250 86 C 280 86 330 120 345 178 C 310 192 190 192 155 178 Z"
          fill={crownCapFill}
          opacity={isWhiteBg ? 0.95 : 0.8}
        />

        {/* Crown Main Outer Ribs & Arches */}
        <path
          d="M 130 178 C 145 105 195 70 250 68 C 305 70 355 105 370 178"
          fill="none"
          stroke={strokeColor}
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Secondary inner contour arch */}
        <path
          d="M 148 174 C 162 115 205 85 250 84 C 295 85 338 115 352 174"
          fill="none"
          stroke={strokeColor}
          strokeWidth="6"
        />

        {/* Central Crown Cross (Latin cross at the summit) */}
        <g id="crown-cross">
          {/* Globus cruciger (orb beneath cross) */}
          <circle
            cx="250"
            cy="52"
            r="11"
            fill={isRoyal ? 'url(#rm-gold-grad)' : fillColor}
            stroke={strokeColor}
            strokeWidth="5"
          />
          {/* Vertical shaft */}
          <rect
            x="245"
            y="12"
            width="10"
            height="30"
            rx="2"
            fill={isRoyal ? 'url(#rm-gold-grad)' : fillColor}
            stroke={strokeColor}
            strokeWidth="3"
          />
          {/* Horizontal crossbar */}
          <rect
            x="235"
            y="20"
            width="30"
            height="10"
            rx="2"
            fill={isRoyal ? 'url(#rm-gold-grad)' : fillColor}
            stroke={strokeColor}
            strokeWidth="3"
          />
        </g>

        {/* Crown Arches Pearls (Border Pearls along the arches matching Image 2) */}
        {[
          { cx: 130, cy: 178, r: 8.5 },
          { cx: 140, cy: 153, r: 8.5 },
          { cx: 155, cy: 131, r: 8.5 },
          { cx: 175, cy: 112, r: 8.5 },
          { cx: 198, cy: 96, r: 8.5 },
          { cx: 224, cy: 84, r: 8.5 },
          { cx: 250, cy: 78, r: 8.5 },
          { cx: 276, cy: 84, r: 8.5 },
          { cx: 302, cy: 96, r: 8.5 },
          { cx: 325, cy: 112, r: 8.5 },
          { cx: 345, cy: 131, r: 8.5 },
          { cx: 360, cy: 153, r: 8.5 },
          { cx: 370, cy: 178, r: 8.5 },
        ].map((p, idx) => (
          <circle
            key={`arch-pearl-${idx}`}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill={isWhiteBg ? '#FFFFFF' : isRoyal ? '#FFFFFF' : '#050607'}
            stroke={strokeColor}
            strokeWidth="4"
          />
        ))}

        {/* Inner Arch Diadems (3 vertical interior arch struts) */}
        {/* Center vertical arch */}
        <path
          d="M 250 82 L 250 178"
          stroke={strokeColor}
          strokeWidth="9"
          strokeLinecap="round"
        />
        {/* Center arch pearls */}
        <circle cx="250" cy="108" r="6.5" fill={isWhiteBg ? '#FFFFFF' : strokeColor} stroke={strokeColor} strokeWidth="3" />
        <circle cx="250" cy="132" r="6.5" fill={isWhiteBg ? '#FFFFFF' : strokeColor} stroke={strokeColor} strokeWidth="3" />
        <circle cx="250" cy="156" r="6.5" fill={isWhiteBg ? '#FFFFFF' : strokeColor} stroke={strokeColor} strokeWidth="3" />

        {/* Left inner arch */}
        <path
          d="M 215 90 C 205 115 195 145 190 178"
          stroke={strokeColor}
          strokeWidth="7"
          fill="none"
        />
        <circle cx="206" cy="116" r="5.5" fill={isWhiteBg ? '#FFFFFF' : strokeColor} stroke={strokeColor} strokeWidth="2.5" />
        <circle cx="197" cy="144" r="5.5" fill={isWhiteBg ? '#FFFFFF' : strokeColor} stroke={strokeColor} strokeWidth="2.5" />

        {/* Right inner arch */}
        <path
          d="M 285 90 C 295 115 305 145 310 178"
          stroke={strokeColor}
          strokeWidth="7"
          fill="none"
        />
        <circle cx="294" cy="116" r="5.5" fill={isWhiteBg ? '#FFFFFF' : strokeColor} stroke={strokeColor} strokeWidth="2.5" />
        <circle cx="303" cy="144" r="5.5" fill={isWhiteBg ? '#FFFFFF' : strokeColor} stroke={strokeColor} strokeWidth="2.5" />

        {/* Crown Diadem Cresting: Fleurons & Trefoils atop the headband */}
        {/* Left Fleurons */}
        <path
          d="M 136 178 C 142 165 152 162 162 178"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="4"
        />
        <path
          d="M 180 178 C 190 156 210 156 220 178"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="5"
        />
        {/* Center Grand Fleuron / Lily */}
        <path
          d="M 230 178 C 240 148 260 148 270 178"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="5"
        />
        {/* Right Fleurons */}
        <path
          d="M 280 178 C 290 156 310 156 320 178"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="5"
        />
        <path
          d="M 338 178 C 348 165 358 162 364 178"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="4"
        />

        {/* Crown Headband (Círculo de la Corona / Jewel Diadem Band) */}
        {/* Outer headband outline */}
        <path
          d="M 126 178 C 170 198 330 198 374 178 L 368 206 C 326 226 174 226 132 206 Z"
          fill={isRoyal ? 'url(#rm-gold-grad)' : fillColor}
          stroke={strokeColor}
          strokeWidth="6"
        />

        {/* Diadem Band Jewels: Alternating Rhombus Lozenges & Round Pearls (as in image 2) */}
        {[
          { x: 152, y: 194, isDiamond: true },
          { x: 178, y: 198, isDiamond: false },
          { x: 206, y: 202, isDiamond: true },
          { x: 234, y: 204, isDiamond: false },
          { x: 250, y: 205, isDiamond: true },
          { x: 266, y: 204, isDiamond: false },
          { x: 294, y: 202, isDiamond: true },
          { x: 322, y: 198, isDiamond: false },
          { x: 348, y: 194, isDiamond: true },
        ].map((j, i) =>
          j.isDiamond ? (
            <polygon
              key={`jewel-diamond-${i}`}
              points={`${j.x},${j.y - 7} ${j.x + 8},${j.y} ${j.x},${j.y + 7} ${j.x - 8},${j.y}`}
              fill={isWhiteBg ? '#FFFFFF' : isRoyal ? '#2874A6' : '#050607'}
              stroke={strokeColor}
              strokeWidth="2.5"
            />
          ) : (
            <circle
              key={`jewel-circle-${i}`}
              cx={j.x}
              cy={j.y}
              r="4.5"
              fill={isWhiteBg ? '#FFFFFF' : isRoyal ? '#C0392B' : strokeColor}
              stroke={strokeColor}
              strokeWidth="2"
            />
          )
        )}
      </g>

      {/* ========================================================
          2. THE CIRCULAR MEDALLION (Escudo / Roundel & Rings)
          ======================================================== */}
      <g
        id="medallion-rings"
        opacity={ringsOpacity}
        className="transition-opacity duration-300"
      >
        {/* Background circular plate */}
        <circle
          cx="250"
          cy="360"
          r="190"
          fill={innerRingFill}
          stroke={strokeColor}
          strokeWidth="12"
        />

        {/* Outer thick perimeter ring */}
        <circle
          cx="250"
          cy="360"
          r="184"
          fill="none"
          stroke={strokeColor}
          strokeWidth="12"
        />

        {/* Clear spacer ring gap */}
        <circle
          cx="250"
          cy="360"
          r="172"
          fill="none"
          stroke={strokeColor}
          strokeWidth="4"
        />

        {/* Inner concentric boundary circle */}
        <circle
          cx="250"
          cy="360"
          r="164"
          fill="none"
          stroke={strokeColor}
          strokeWidth="8"
        />
      </g>

      {/* ========================================================
          3. CLIPPED INTERIOR: DIAGONAL SASH (Banda de Castilla)
          ======================================================== */}
      <g
        id="diagonal-sash"
        clipPath="url(#medallion-clip)"
        opacity={sashOpacity}
        className="transition-opacity duration-300"
      >
        {/*
            The famous broad diagonal band of Castile running from top-left (approx 135 deg) to bottom-right.
            Angle is approx 42-45 degrees across the circular medallion.
        */}
        <polygon
          points="80,180 180,130 420,490 320,540"
          fill={isRoyal ? 'url(#rm-purple-grad)' : sashColor}
          stroke={strokeColor}
          strokeWidth="8"
        />
      </g>

      {/* ========================================================
          4. THE INTERTWINED MONOGRAM (M - C - F)
             M = Madrid
             C = Club
             F = Fútbol
             Designed in 1902 with characteristic geometric interlocking
          ======================================================== */}
      <g
        id="intertwined-monogram"
        opacity={monogramOpacity}
        className="transition-opacity duration-300"
      >
        {/* White / Contrast Outline Halo for Monogram (ensures crisp visibility over the diagonal sash) */}
        <g
          stroke={isWhiteBg ? '#FFFFFF' : isRoyal ? '#FFFFFF' : '#050607'}
          strokeWidth="16"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        >
          {/* Outlined C */}
          <path
            d="M 320 280 C 265 240 160 250 160 365 C 160 480 265 485 315 440"
          />

          {/* Outlined M */}
          {/* Left Wing of M */}
          <path d="M 140 375 L 195 240 L 250 330" />
          {/* Right Wing of M */}
          <path d="M 250 330 L 305 240 L 360 375" />

          {/* Outlined F */}
          {/* Vertical stem of F */}
          <path d="M 250 330 L 250 495" />
          {/* Top crossbar of F */}
          <path d="M 245 348 L 295 348" />
          {/* Middle crossbar of F */}
          <path d="M 245 398 L 285 398" />
        </g>

        {/* --------------------
            THE 'C' LETTER
            -------------------- */}
        <path
          id="monogram-c"
          d="M 325 282 C 275 242 162 250 162 365 C 162 478 275 485 320 442"
          fill="none"
          stroke={strokeColor}
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* --------------------
            THE 'M' LETTER
            -------------------- */}
        {/* Left outer arm of M */}
        <path
          d="M 138 385 L 198 238"
          stroke={strokeColor}
          strokeWidth="22"
          strokeLinecap="square"
        />
        {/* Left inner diagonal of M meeting at center vertex */}
        <path
          d="M 198 238 L 250 334"
          stroke={strokeColor}
          strokeWidth="22"
          strokeLinecap="round"
        />
        {/* Right inner diagonal of M meeting at center vertex */}
        <path
          d="M 250 334 L 302 238"
          stroke={strokeColor}
          strokeWidth="22"
          strokeLinecap="round"
        />
        {/* Right outer arm of M */}
        <path
          d="M 302 238 L 362 385"
          stroke={strokeColor}
          strokeWidth="22"
          strokeLinecap="square"
        />

        {/* Serifs / Tips for M outer base */}
        <path
          d="M 130 380 L 155 395"
          stroke={strokeColor}
          strokeWidth="10"
        />
        <path
          d="M 345 395 L 370 380"
          stroke={strokeColor}
          strokeWidth="10"
        />

        {/* --------------------
            THE 'F' LETTER
            -------------------- */}
        {/* Central main vertical column of F */}
        <rect
          x="239"
          y="336"
          width="24"
          height="160"
          fill={strokeColor}
        />

        {/* Base foot serif of F */}
        <rect
          x="231"
          y="484"
          width="40"
          height="12"
          fill={strokeColor}
        />

        {/* Top crossbar of F */}
        <path
          d="M 239 342 L 298 342 L 298 362 L 263 362"
          fill={strokeColor}
        />
        {/* Upper spur on top crossbar */}
        <polygon
          points="292,342 298,342 298,368 290,362"
          fill={strokeColor}
        />

        {/* Middle crossbar of F */}
        <path
          d="M 239 396 L 286 396 L 286 414 L 263 414"
          fill={strokeColor}
        />
      </g>
    </svg>
  );
};
export default RealMadridBadge;
