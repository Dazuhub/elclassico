import React, { useState, useEffect } from 'react';
import { X, Play, Volume2, VolumeX, Shield, Award, Users, RefreshCw } from 'lucide-react';
import RealMadridBadge from './RealMadridBadge';
import { TeamBadge } from './TeamBadges';

interface WatchLiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WatchLiveModal: React.FC<WatchLiveModalProps> = ({ isOpen, onClose }) => {
  const [minute, setMinute] = useState(78);
  const [isPlaying, setIsPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [activeTab, setActiveTab] = useState<'stream' | 'lineups' | 'stats'>('stream');

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setMinute((m) => (m < 95 ? m + 1 : 90));
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const events = [
    { time: "24'", type: 'goal', team: 'madrid', text: '⚽ GOAL! Vinícius Jr. cuts inside from the left wing and curls it into the far top corner!' },
    { time: "38'", type: 'goal', team: 'barca', text: '⚽ Goal. Lewandowski taps in from close range following a corner rebound.' },
    { time: "52'", type: 'card', team: 'barca', text: '🟨 Yellow card shown to De Jong for a late tackle on Bellingham.' },
    { time: "61'", type: 'goal', team: 'madrid', text: '⚽ GOAL! Kylian Mbappé sprints past the defense and slots it under the keeper! Bernabéu roars!' },
    { time: "74'", type: 'save', team: 'madrid', text: '🧤 Superb fingertip save by Thibaut Courtois to preserve the lead!' },
  ];

  const madridLineup = [
    { num: 1, name: 'Courtois', pos: 'GK' },
    { num: 2, name: 'Carvajal', pos: 'RB' },
    { num: 22, name: 'Rüdiger', pos: 'CB' },
    { num: 3, name: 'Militão', pos: 'CB' },
    { num: 23, name: 'Mendy', pos: 'LB' },
    { num: 8, name: 'Valverde', pos: 'CM' },
    { num: 14, name: 'Tchouaméni', pos: 'DM' },
    { num: 5, name: 'Bellingham', pos: 'AM' },
    { num: 11, name: 'Rodrygo', pos: 'RW' },
    { num: 9, name: 'Mbappé', pos: 'ST' },
    { num: 7, name: 'Vinícius Jr.', pos: 'LW' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#070b08] border border-[#1d3d24] rounded-3xl overflow-hidden shadow-2xl flex flex-col text-left">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52B748] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#52B748]"></span>
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#52B748]">
                LIVE STREAM BROADCAST
              </span>
              <h2 className="text-base sm:text-lg font-black uppercase text-white font-display">
                EL CLÁSICO · ESTADIO SANTIAGO BERNABÉU
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMuted(!muted)}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors cursor-pointer"
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#52B748]" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Score Strip */}
        <div className="bg-gradient-to-r from-[#0b1b0f] via-[#08120b] to-[#0b1b0f] border-b border-[#1b3b22] px-6 py-4 flex items-center justify-between">
          {/* FC Barcelona */}
          <div className="flex items-center gap-3">
            <TeamBadge team="barcelona" size={40} />
            <div>
              <div className="text-sm sm:text-base font-extrabold text-white">FC BARCELONA</div>
              <div className="text-[10px] text-zinc-400">Lewandowski 38'</div>
            </div>
          </div>

          {/* Scoreboard Center */}
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl font-black text-white font-display tracking-widest bg-black/60 px-5 py-1 rounded-xl border border-zinc-800">
              <span className="text-zinc-400">1</span>
              <span className="text-[#52B748] mx-2">-</span>
              <span className="text-white">2</span>
            </div>
            <div className="mt-1 text-xs font-mono font-bold text-[#52B748]">
              {minute}' LIVE
            </div>
          </div>

          {/* Real Madrid */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm sm:text-base font-extrabold text-white">REAL MADRID</div>
              <div className="text-[10px] text-[#52B748]">Vinícius Jr 24', Mbappé 61'</div>
            </div>
            <div className="w-10 h-12 flex items-center justify-center">
              <RealMadridBadge size={38} variant="royal" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs inside modal */}
        <div className="flex border-b border-zinc-800/80 px-6 bg-black/40 text-xs">
          {(['stream', 'lineups', 'stats'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-4 font-bold uppercase transition-colors cursor-pointer border-b-2 ${
                activeTab === tab
                  ? 'border-[#52B748] text-[#52B748]'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              {tab === 'stream' ? 'Live Pitch Simulation' : tab === 'lineups' ? 'Real Madrid XI' : 'Match Stats'}
            </button>
          ))}
        </div>

        {/* Modal Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'stream' && (
            <div className="space-y-6">
              {/* Pitch Visualizer */}
              <div className="relative aspect-[16/9] w-full rounded-2xl bg-gradient-to-b from-[#09220e] to-[#041007] border border-[#1b4322] overflow-hidden flex items-center justify-center">
                {/* Turf pitch lines */}
                <div className="absolute inset-4 border-2 border-white/20 rounded-xl pointer-events-none">
                  {/* Center circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/20 rounded-full" />
                  <div className="absolute top-1/2 left-0 right-0 h-0 border-t-2 border-white/20" />
                </div>

                {/* Simulated live ball marker */}
                <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_#fff] animate-bounce">
                    ⚽
                  </div>
                  <span className="text-[11px] font-bold bg-black/80 px-2 py-0.5 rounded text-[#52B748]">
                    Mbappé on the break
                  </span>
                </div>

                <div className="text-center space-y-2 z-10 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                  <div className="text-xs uppercase font-mono text-[#52B748] font-bold">
                    Bernabéu Atmospheric Broadcast Feed
                  </div>
                  <div className="text-xl font-black text-white font-display">
                    REAL MADRID DOMINATING 2ND HALF COUNTER-ATTACKS
                  </div>
                </div>
              </div>

              {/* Live Ticker Timeline */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                  Key Match Events
                </h4>
                <div className="space-y-2">
                  {events.map((e, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-start gap-3 text-xs"
                    >
                      <span className="font-mono font-bold text-[#52B748] shrink-0">{e.time}</span>
                      <span className="text-zinc-200">{e.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'lineups' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <RealMadridBadge size={28} variant="royal" />
                  <h4 className="text-sm font-bold text-white uppercase font-display">
                    Real Madrid Starting XI (4-3-3)
                  </h4>
                </div>
                <div className="space-y-1.5">
                  {madridLineup.map((p) => (
                    <div
                      key={p.num}
                      className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-[#52B748]/20 text-[#52B748] font-black flex items-center justify-center text-[10px]">
                          {p.num}
                        </span>
                        <span className="font-bold text-white">{p.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 font-bold">{p.pos}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-[#52B748]">
                  Tactical Notes
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Real Madrid are employing an aggressive high-turnover strategy. Bellingham drops into midfield pockets while Vinícius Jr and Mbappé split the center-backs on direct diagonal runs.
                </p>
                <div className="pt-2 border-t border-zinc-800 text-xs text-zinc-400">
                  Manager: <strong className="text-white">Carlo Ancelotti</strong>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="space-y-4 text-xs">
              {[
                { label: 'Ball Possession', barca: '46%', madrid: '54%' },
                { label: 'Total Shots', barca: '8', madrid: '14' },
                { label: 'Shots on Target', barca: '4', madrid: '8' },
                { label: 'Expected Goals (xG)', barca: '1.24', madrid: '2.68' },
                { label: 'Corner Kicks', barca: '3', madrid: '7' },
                { label: 'Pass Accuracy', barca: '87%', madrid: '91%' },
              ].map((s, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between font-bold text-zinc-300">
                    <span>{s.barca}</span>
                    <span className="text-zinc-500 font-mono text-[10px] uppercase">{s.label}</span>
                    <span className="text-[#52B748]">{s.madrid}</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden flex">
                    <div className="h-full bg-amber-500" style={{ width: s.barca }} />
                    <div className="h-full bg-[#52B748]" style={{ width: s.madrid }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
export default WatchLiveModal;
