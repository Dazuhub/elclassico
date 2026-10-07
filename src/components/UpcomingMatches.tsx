import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, Info } from 'lucide-react';
import { TeamBadge } from './TeamBadges';
import RealMadridBadge from './RealMadridBadge';

interface MatchItem {
  id: string;
  homeTeam: string;
  homeKey: any;
  awayTeam: string;
  awayKey: any;
  date: string;
  time: string;
  competition: string;
  venue: string;
  odds: string;
}

const standardMatches: MatchItem[] = [
  {
    id: 'm1',
    homeTeam: 'MAN UNITED',
    homeKey: 'man-united',
    awayTeam: 'LIVERPOOL',
    awayKey: 'liverpool',
    date: '28 MAY',
    time: '06:30 PM',
    competition: 'Premier League',
    venue: 'Old Trafford',
    odds: '2.40 · 3.40 · 2.80',
  },
  {
    id: 'm2',
    homeTeam: 'BAYERN MUNICH',
    homeKey: 'bayern',
    awayTeam: 'DORTMUND',
    awayKey: 'dortmund',
    date: '29 MAY',
    time: '09:00 PM',
    competition: 'Der Klassiker',
    venue: 'Allianz Arena',
    odds: '1.65 · 4.20 · 4.50',
  },
  {
    id: 'm3',
    homeTeam: 'PSG',
    homeKey: 'psg',
    awayTeam: 'MARSEILLE',
    awayKey: 'marseille',
    date: '30 MAY',
    time: '07:45 PM',
    competition: 'Le Classique',
    venue: 'Parc des Princes',
    odds: '1.50 · 4.50 · 5.80',
  },
];

const madridMatches: MatchItem[] = [
  {
    id: 'rm1',
    homeTeam: 'REAL MADRID',
    homeKey: 'real-madrid',
    awayTeam: 'MAN CITY',
    awayKey: 'man-united',
    date: '02 JUN',
    time: '09:00 PM',
    competition: 'UEFA Champions League',
    venue: 'Santiago Bernabéu',
    odds: '2.10 · 3.50 · 3.10',
  },
  {
    id: 'rm2',
    homeTeam: 'BAYERN MUNICH',
    homeKey: 'bayern',
    awayTeam: 'REAL MADRID',
    awayKey: 'real-madrid',
    date: '09 JUN',
    time: '09:00 PM',
    competition: 'European Classic',
    venue: 'Allianz Arena',
    odds: '2.45 · 3.60 · 2.70',
  },
  {
    id: 'rm3',
    homeTeam: 'REAL MADRID',
    homeKey: 'real-madrid',
    awayTeam: 'FC BARCELONA',
    awayKey: 'barcelona',
    date: '16 JUN',
    time: '08:00 PM',
    competition: 'Supercopa de España',
    venue: 'King Fahd Stadium',
    odds: '1.95 · 3.75 · 3.50',
  },
];

interface UpcomingMatchesProps {
  onSelectMatch: (match: MatchItem) => void;
}

export const UpcomingMatches: React.FC<UpcomingMatchesProps> = ({ onSelectMatch }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'madrid'>('all');
  const matches = activeTab === 'all' ? standardMatches : madridMatches;

  return (
    <section className="relative py-12 md:py-16 bg-[#040605]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with green decorative flanking rules matching Image 1 */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#52B748]" />
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-[#52B748] font-display text-center">
            UPCOMING MATCHES
          </h2>
          <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#52B748]" />
        </div>

        {/* Filter Toggle: All Top European Fixtures vs Real Madrid Specific */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center p-1 bg-zinc-900/90 rounded-full border border-zinc-800 text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#52B748] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Featured League Fixtures
            </button>
            <button
              onClick={() => setActiveTab('madrid')}
              className={`px-4 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                activeTab === 'madrid'
                  ? 'bg-[#52B748] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              👑 Real Madrid European Campaign
            </button>
          </div>
        </div>

        {/* 3 Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {matches.map((match) => (
            <div
              key={match.id}
              className="group relative rounded-2xl bg-gradient-to-b from-[#0b120c] to-[#060a07] border border-[#1a2d1e] hover:border-[#52B748]/70 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(82,183,72,0.15)] flex flex-col justify-between"
            >
              {/* Competition quiet kicker */}
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3 text-center">
                {match.competition}
              </div>

              {/* Badges confrontation */}
              <div className="flex items-center justify-around py-3">
                {/* Home Badge */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-black/40 border border-zinc-800 flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
                    {match.homeKey === 'real-madrid' ? (
                      <RealMadridBadge size={44} variant="royal" />
                    ) : (
                      <TeamBadge team={match.homeKey} size={48} />
                    )}
                  </div>
                  <span className="text-xs font-black text-white text-center max-w-[85px] leading-tight">
                    {match.homeTeam}
                  </span>
                </div>

                {/* VS Badge */}
                <div className="w-7 h-7 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                  VS
                </div>

                {/* Away Badge */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-black/40 border border-zinc-800 flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
                    {match.awayKey === 'real-madrid' ? (
                      <RealMadridBadge size={44} variant="royal" />
                    ) : (
                      <TeamBadge team={match.awayKey} size={48} />
                    )}
                  </div>
                  <span className="text-xs font-black text-white text-center max-w-[85px] leading-tight">
                    {match.awayTeam}
                  </span>
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="mt-4 pt-3 border-t border-zinc-800/70 flex items-center justify-center gap-4 text-xs font-semibold text-zinc-300">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#52B748]" />
                  <span>{match.date}</span>
                </div>
                <span className="text-zinc-600">|</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#52B748]" />
                  <span>{match.time}</span>
                </div>
              </div>

              {/* View Details Link matching Image 1 */}
              <div className="mt-4 text-center">
                <button
                  onClick={() => onSelectMatch(match)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#52B748] hover:text-[#74e269] transition-colors cursor-pointer group-hover:underline"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default UpcomingMatches;
