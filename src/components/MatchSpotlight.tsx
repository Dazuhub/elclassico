import React from 'react';
import { Calendar, Clock, Play, Sparkles } from 'lucide-react';
import RealMadridBadge, { BadgeVariant } from './RealMadridBadge';
import { TeamBadge } from './TeamBadges';

interface MatchSpotlightProps {
  onWatchLive: () => void;
  onInspectBadge: () => void;
  badgeVariant?: BadgeVariant;
}

export const MatchSpotlight: React.FC<MatchSpotlightProps> = ({
  onWatchLive,
  onInspectBadge,
  badgeVariant = 'royal',
}) => {
  return (
    <section className="relative py-12 md:py-16 bg-[#050607]">
      {/* Background Halftone & Glow Details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#52B748]/10 blur-[130px] rounded-full" />
        {/* Subtle dot matrix grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#52B748 1.5px, transparent 1.5px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Section Header matching Image 1 */}
        <div className="mb-6 space-y-1">
          <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#52B748] uppercase font-mono">
            MATCH SPOTLIGHT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-display">
            EL CLÁSICO
          </h2>
        </div>

        {/* The Main Match Spotlight Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0c140e] to-[#070b08] border border-[#1e3a24]/60 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Halftone texture inside card */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #52B748 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Green brush streak glow along top border */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#52B748]/20 blur-2xl" />

          {/* Teams Confrontation Row */}
          <div className="grid grid-cols-3 items-center gap-2 sm:gap-6 relative z-10">
            
            {/* Team 1: FC Barcelona */}
            <div className="flex flex-col items-center space-y-3 group">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center p-2 rounded-2xl bg-black/40 border border-white/5 group-hover:border-amber-400/40 transition-all shadow-lg">
                <TeamBadge team="barcelona" size={80} className="w-16 h-16 sm:w-22 sm:h-22 drop-shadow-md transition-transform group-hover:scale-105" />
              </div>
              <div className="text-center">
                <h3 className="text-xs sm:text-base font-extrabold uppercase tracking-wider text-white">
                  FC BARCELONA
                </h3>
                <span className="text-[10px] sm:text-xs text-zinc-400">Away · La Liga</span>
              </div>
            </div>

            {/* Center: VS Circle + Match DateTime */}
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* Green VS Emblem */}
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#52B748] flex items-center justify-center text-black font-black text-sm sm:text-base shadow-[0_0_20px_rgba(82,183,72,0.6)] ring-4 ring-[#0c140e]">
                  VS
                </div>
              </div>

              {/* Match Schedule (Date & Time) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-zinc-300 font-semibold bg-black/50 px-3.5 py-1.5 rounded-full border border-zinc-800">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <Calendar className="w-3.5 h-3.5 text-[#52B748]" />
                  <span>26 MAY 2024</span>
                </div>
                <span className="hidden sm:inline text-zinc-600">·</span>
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <Clock className="w-3.5 h-3.5 text-[#52B748]" />
                  <span>08:00 PM CET</span>
                </div>
              </div>
            </div>

            {/* Team 2: REAL MADRID (Hero Crest) */}
            <div 
              className="flex flex-col items-center space-y-3 group cursor-pointer"
              onClick={onInspectBadge}
              title="Click to inspect Real Madrid crest badge details"
            >
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center p-2 rounded-2xl bg-black/40 border border-white/5 group-hover:border-[#52B748] group-hover:shadow-[0_0_25px_rgba(82,183,72,0.3)] transition-all">
                {/* Real Madrid Official Badge */}
                <div className="relative w-16 h-18 sm:w-22 sm:h-24 flex items-center justify-center transition-transform group-hover:scale-110">
                  <RealMadridBadge
                    size={84}
                    variant={badgeVariant}
                    className="drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                  />
                </div>

                {/* Badge Inspection Pill Hint */}
                <div className="absolute -top-2 -right-2 bg-[#52B748] text-black text-[9px] font-black px-1.5 py-0.5 rounded-full flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>INSPECT</span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xs sm:text-base font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-1">
                  <span>REAL MADRID</span>
                </h3>
                <span className="text-[10px] sm:text-xs text-[#52B748] font-medium">Home · Santiago Bernabéu</span>
              </div>
            </div>

          </div>

          {/* Watch Live CTA Button */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onWatchLive}
              className="group inline-flex items-center gap-2.5 px-8 py-3 bg-[#52B748] hover:bg-[#60d655] text-black font-extrabold uppercase tracking-wider text-xs sm:text-sm rounded-full shadow-[0_0_25px_rgba(82,183,72,0.45)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-black text-black group-hover:translate-x-0.5 transition-transform" />
              <span>WATCH LIVE</span>
            </button>

            <button
              onClick={onInspectBadge}
              className="text-xs font-semibold text-zinc-400 hover:text-[#52B748] transition-colors py-2 px-3 cursor-pointer"
            >
              Examine Badge Vector Linework &rarr;
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
export default MatchSpotlight;
