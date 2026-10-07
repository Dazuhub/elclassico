import React from 'react';
import { X, Calendar, Clock, MapPin, Award, Shield } from 'lucide-react';
import { TeamBadge } from './TeamBadges';
import RealMadridBadge from './RealMadridBadge';

interface MatchDetailModalProps {
  match: any;
  onClose: () => void;
  onBookTickets: () => void;
}

export const MatchDetailModal: React.FC<MatchDetailModalProps> = ({
  match,
  onClose,
  onBookTickets,
}) => {
  if (!match) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#090e0b] border border-[#1b3421] rounded-3xl p-6 sm:p-8 shadow-2xl text-left space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Competition Banner */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#52B748]">
            {match.competition}
          </span>
          <h3 className="text-2xl font-black uppercase text-white font-display">
            {match.homeTeam} VS {match.awayTeam}
          </h3>
        </div>

        {/* Head-to-Head Visual */}
        <div className="p-5 rounded-2xl bg-black/50 border border-zinc-800 flex items-center justify-around">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 flex items-center justify-center p-1 bg-zinc-900 rounded-xl">
              {match.homeKey === 'real-madrid' ? (
                <RealMadridBadge size={46} variant="royal" />
              ) : (
                <TeamBadge team={match.homeKey} size={50} />
              )}
            </div>
            <span className="text-xs font-bold text-white">{match.homeTeam}</span>
          </div>

          <div className="text-center space-y-1">
            <span className="text-xs font-black text-black bg-[#52B748] px-2.5 py-1 rounded-full">
              VS
            </span>
            <div className="text-[10px] text-zinc-400 font-mono pt-1">Head to Head</div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 flex items-center justify-center p-1 bg-zinc-900 rounded-xl">
              {match.awayKey === 'real-madrid' ? (
                <RealMadridBadge size={46} variant="royal" />
              ) : (
                <TeamBadge team={match.awayKey} size={50} />
              )}
            </div>
            <span className="text-xs font-bold text-white">{match.awayTeam}</span>
          </div>
        </div>

        {/* Match Fixture Info */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-[#52B748]" />
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">Date</div>
              <div className="font-bold text-white">{match.date} 2024</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#52B748]" />
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">Kickoff</div>
              <div className="font-bold text-white">{match.time} CET</div>
            </div>
          </div>

          <div className="col-span-2 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#52B748]" />
            <div>
              <div className="text-[10px] text-zinc-500 uppercase">Stadium & Pitch</div>
              <div className="font-bold text-white">{match.venue}</div>
            </div>
          </div>
        </div>

        {/* Book Tickets CTA */}
        <div className="pt-2 flex items-center justify-between border-t border-zinc-800">
          <div className="text-xs text-zinc-400">
            Official Ticketing Guaranteed
          </div>
          <button
            onClick={() => {
              onClose();
              onBookTickets();
            }}
            className="px-6 py-2.5 bg-[#52B748] hover:bg-[#60da55] text-black font-black uppercase text-xs rounded-full transition-all cursor-pointer"
          >
            Get Tickets
          </button>
        </div>
      </div>
    </div>
  );
};
export default MatchDetailModal;
