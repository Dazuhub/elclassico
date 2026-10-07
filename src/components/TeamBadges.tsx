import React from 'react';

interface TeamBadgeProps {
  team: 'barcelona' | 'real-madrid' | 'man-united' | 'liverpool' | 'bayern' | 'dortmund' | 'psg' | 'marseille';
  size?: number;
  className?: string;
}

export const TeamBadge: React.FC<TeamBadgeProps> = ({ team, size = 56, className = '' }) => {
  switch (team) {
    case 'barcelona':
      return (
        <svg
          viewBox="0 0 100 100"
          width={size}
          height={size}
          className={`shrink-0 ${className}`}
          role="img"
          aria-label="FC Barcelona Crest"
        >
          {/* Shield outline */}
          <path
            d="M 50 5 C 65 5 88 12 92 20 C 95 45 88 80 50 95 C 12 80 5 45 8 20 C 12 12 35 5 50 5 Z"
            fill="#C8102E"
            stroke="#EDBB00"
            strokeWidth="3.5"
          />
          {/* Top half cross and senyera */}
          <path
            d="M 12 22 L 88 22 C 86 48 76 52 50 52 C 24 52 14 48 12 22 Z"
            fill="#EDBB00"
          />
          {/* Top Left: St George Cross */}
          <g clipPath="url(#barca-top-left)">
            <clipPath id="barca-top-left">
              <rect x="12" y="22" width="38" height="30" />
            </clipPath>
            <rect x="12" y="22" width="38" height="30" fill="#FFFFFF" />
            <rect x="27" y="22" width="8" height="30" fill="#C8102E" />
            <rect x="12" y="33" width="38" height="8" fill="#C8102E" />
          </g>
          {/* Top Right: Senyera vertical stripes */}
          <g clipPath="url(#barca-top-right)">
            <clipPath id="barca-top-right">
              <rect x="50" y="22" width="38" height="30" />
            </clipPath>
            <rect x="50" y="22" width="38" height="30" fill="#EDBB00" />
            <rect x="58" y="22" width="5" height="30" fill="#C8102E" />
            <rect x="70" y="22" width="5" height="30" fill="#C8102E" />
            <rect x="82" y="22" width="5" height="30" fill="#C8102E" />
          </g>
          {/* Center horizontal divider band with initials FCB */}
          <rect x="12" y="47" width="76" height="11" fill="#EDBB00" stroke="#000" strokeWidth="0.8" />
          <text
            x="50"
            y="56"
            textAnchor="middle"
            fill="#004D98"
            fontSize="8.5"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
            letterSpacing="2"
          >
            FCB
          </text>
          {/* Lower half: Blaugrana vertical stripes */}
          <g clipPath="url(#barca-bottom)">
            <clipPath id="barca-bottom">
              <path d="M 14 58 L 86 58 C 82 82 50 93 50 93 C 50 93 18 82 14 58 Z" />
            </clipPath>
            <rect x="14" y="58" width="72" height="35" fill="#004D98" />
            <rect x="28" y="58" width="10" height="35" fill="#A50044" />
            <rect x="48" y="58" width="10" height="35" fill="#A50044" />
            <rect x="68" y="58" width="10" height="35" fill="#A50044" />
            {/* Center vintage soccer ball */}
            <circle cx="50" cy="74" r="8" fill="#EDBB00" stroke="#4A3400" strokeWidth="1" />
            <path d="M 44 74 L 56 74 M 50 67 L 50 81" stroke="#4A3400" strokeWidth="0.8" />
          </g>
        </svg>
      );

    case 'man-united':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={`shrink-0 ${className}`} role="img" aria-label="Manchester United">
          <circle cx="50" cy="50" r="46" fill="#DA020E" stroke="#FFE500" strokeWidth="4" />
          <circle cx="50" cy="50" r="34" fill="#FFFFFF" stroke="#FFE500" strokeWidth="2" />
          <path d="M 50 20 C 40 20 28 35 28 50 C 28 65 40 80 50 80 C 60 80 72 65 72 50 C 72 35 60 20 50 20 Z" fill="#FFE500" />
          <path d="M 40 38 Q 50 30 60 38 Q 65 45 60 52 Q 50 48 40 52 Z" fill="#DA020E" />
          {/* Red devil trident silhouette */}
          <path d="M 46 44 L 54 44 L 50 62 Z M 48 62 L 52 62 L 52 70 L 48 70 Z" fill="#DA020E" />
          <text x="50" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">MANCHESTER</text>
          <text x="50" y="93" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">UNITED</text>
        </svg>
      );

    case 'liverpool':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={`shrink-0 ${className}`} role="img" aria-label="Liverpool FC">
          <path d="M 50 8 C 72 8 85 24 85 45 C 85 70 65 92 50 96 C 35 92 15 70 15 45 C 15 24 28 8 50 8 Z" fill="#C8102E" stroke="#00B2A9" strokeWidth="3" />
          {/* Liver bird heraldic silhouette */}
          <path d="M 50 25 C 55 22 62 25 60 32 C 58 37 54 38 52 42 C 56 46 64 45 66 52 C 60 54 55 50 50 52 C 45 50 40 54 34 52 C 36 45 44 46 48 42 C 46 38 42 37 40 32 C 38 25 45 22 50 25 Z" fill="#00B2A9" />
          <path d="M 46 54 L 54 54 L 54 75 L 46 75 Z" fill="#00B2A9" />
          <text x="50" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">L.F.C.</text>
        </svg>
      );

    case 'bayern':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={`shrink-0 ${className}`} role="img" aria-label="FC Bayern Munich">
          <circle cx="50" cy="50" r="46" fill="#DC052D" stroke="#FFFFFF" strokeWidth="3" />
          <circle cx="50" cy="50" r="32" fill="#0066B2" />
          {/* Bavarian diamonds pattern */}
          <g clipPath="url(#bavaria-round)">
            <clipPath id="bavaria-round">
              <circle cx="50" cy="50" r="30" />
            </clipPath>
            <rect x="20" y="20" width="60" height="60" fill="#0066B2" />
            {[
              "M 20 30 L 40 20 L 55 35 L 35 45 Z",
              "M 45 20 L 65 20 L 75 35 L 55 35 Z",
              "M 25 55 L 45 45 L 60 60 L 40 70 Z",
              "M 50 45 L 70 45 L 85 60 L 65 60 Z",
              "M 35 75 L 55 65 L 70 80 L 50 90 Z",
            ].map((p, i) => (
              <path key={i} d={p} fill="#FFFFFF" />
            ))}
          </g>
          <text x="50" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">FC BAYERN</text>
          <text x="50" y="93" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">MÜNCHEN</text>
        </svg>
      );

    case 'dortmund':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={`shrink-0 ${className}`} role="img" aria-label="Borussia Dortmund">
          <circle cx="50" cy="50" r="46" fill="#FDE100" stroke="#000000" strokeWidth="5" />
          <circle cx="50" cy="50" r="41" fill="#FDE100" stroke="#000000" strokeWidth="2" />
          <text x="50" y="44" textAnchor="middle" fill="#000000" fontSize="19" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">BVB</text>
          <text x="50" y="70" textAnchor="middle" fill="#000000" fontSize="21" fontWeight="900" fontFamily="sans-serif">09</text>
        </svg>
      );

    case 'psg':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={`shrink-0 ${className}`} role="img" aria-label="Paris Saint-Germain">
          <circle cx="50" cy="50" r="46" fill="#001C44" stroke="#DA291C" strokeWidth="3" />
          <circle cx="50" cy="50" r="32" fill="#FFFFFF" />
          {/* Eiffel tower silhouette in red */}
          <path d="M 50 24 L 53 45 L 58 68 L 52 68 L 50 56 L 48 68 L 42 68 L 47 45 Z" fill="#DA291C" />
          <circle cx="50" cy="24" r="3.5" fill="#DA291C" />
          <path d="M 45 52 L 55 52" stroke="#DA291C" strokeWidth="3" />
          {/* Fleur de lis in gold below */}
          <path d="M 50 63 C 51 60 53 60 54 63 C 54 66 50 68 50 68 C 50 68 46 66 46 63 C 47 60 49 60 50 63 Z" fill="#E4A025" />
          <text x="50" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">PARIS</text>
          <text x="50" y="93" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">SAINT-GERMAIN</text>
        </svg>
      );

    case 'marseille':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className={`shrink-0 ${className}`} role="img" aria-label="Olympique de Marseille">
          <circle cx="50" cy="50" r="46" fill="#0099DD" stroke="#0077B6" strokeWidth="2" />
          <circle cx="50" cy="50" r="43" fill="#FFFFFF" />
          {/* Interlocking O and M */}
          <circle cx="50" cy="50" r="28" fill="none" stroke="#0099DD" strokeWidth="6" />
          <path d="M 34 68 L 34 32 L 50 54 L 66 32 L 66 68" fill="none" stroke="#0099DD" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          {/* Gold star on top */}
          <polygon points="50,12 53,20 62,20 55,25 57,33 50,28 43,33 45,25 38,20 47,20" fill="#E4A025" />
        </svg>
      );

    default:
      return null;
  }
};
