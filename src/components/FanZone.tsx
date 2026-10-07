import React, { useState } from 'react';
import { Trophy, Check, Sparkles, X, Heart } from 'lucide-react';
import RealMadridBadge from './RealMadridBadge';

interface FanZoneProps {
  onJoinSuccess?: () => void;
}

export const FanZone: React.FC<FanZoneProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [favoritePlayer, setFavoritePlayer] = useState('Vinícius Jr.');
  const [isJoined, setIsJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsJoined(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsJoined(false);
        setEmail('');
        setFullName('');
      }, 2500);
    }
  };

  return (
    <section className="relative py-8 md:py-12 bg-[#050607]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Signature Vibrant Green Fan Zone Banner from Image 1 */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#2e8b2b] via-[#3fa63a] to-[#257723] p-6 sm:p-10 shadow-[0_20px_50px_rgba(82,183,72,0.3)] border border-[#48c942]/40">
          
          {/* Grunge splatter and paint brush background texture */}
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <svg viewBox="0 0 1000 300" className="w-full h-full object-cover">
              {/* Paint splatter paths */}
              <circle cx="200" cy="50" r="12" fill="#000" />
              <circle cx="220" cy="70" r="6" fill="#000" />
              <circle cx="240" cy="45" r="8" fill="#000" />
              <circle cx="850" cy="80" r="22" fill="#000" />
              <circle cx="890" cy="60" r="14" fill="#000" />
              <circle cx="920" cy="110" r="9" fill="#000" />
              <path d="M 0 0 L 1000 300 L 0 300 Z" fill="#000" opacity="0.15" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* Left: Cheering Crowd Silhouettes with Banner from Image 1 */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start justify-center">
              <div className="relative w-full max-w-[280px]">
                {/* Silhouette SVG of crowd holding scarf */}
                <svg viewBox="0 0 320 180" className="w-full h-auto">
                  {/* Scarf / Banner held high: "WE LIVE FOOTBALL" */}
                  <g transform="translate(10, 15) rotate(-3)">
                    <path
                      d="M 10 15 Q 150 5 290 20 L 290 55 Q 150 40 10 50 Z"
                      fill="#061208"
                      stroke="#040a05"
                      strokeWidth="2"
                    />
                    <text
                      x="150"
                      y="38"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="17"
                      fontWeight="900"
                      fontFamily="sans-serif"
                      letterSpacing="2.5"
                    >
                      WE LIVE FOOTBALL
                    </text>
                  </g>

                  {/* Silhouetted Cheering Fans */}
                  <g fill="#061208">
                    {/* Fan 1 (Left holding scarf) */}
                    <circle cx="50" cy="80" r="14" />
                    <path d="M 30 180 L 30 115 C 30 100 70 100 70 115 L 70 180 Z" />
                    <path d="M 40 105 L 20 40 L 32 40 L 48 100 Z" />

                    {/* Fan 2 (Arms raised in V) */}
                    <circle cx="115" cy="72" r="15" />
                    <path d="M 90 180 L 90 110 C 90 95 140 95 140 110 L 140 180 Z" />
                    <path d="M 95 105 L 75 45 L 88 43 L 105 98 Z" />
                    <path d="M 135 105 L 155 45 L 142 43 L 125 98 Z" />

                    {/* Fan 3 (Center leader) */}
                    <circle cx="180" cy="68" r="16" />
                    <path d="M 155 180 L 155 105 C 155 90 205 90 205 105 L 205 180 Z" />
                    <path d="M 195 100 L 230 40 L 242 45 L 205 98 Z" />

                    {/* Fan 4 (Right holding scarf) */}
                    <circle cx="250" cy="76" r="14" />
                    <path d="M 230 180 L 230 112 C 230 98 275 98 275 112 L 275 180 Z" />
                    <path d="M 265 105 L 285 45 L 275 40 L 255 98 Z" />
                  </g>
                </svg>
                <div className="text-[11px] font-black uppercase tracking-widest text-[#d4f8d0] text-center md:text-left mt-1">
                  ¡HALA MADRID Y NADA MÁS!
                </div>
              </div>
            </div>

            {/* Center: Headline, Trophy, and "JOIN NOW" button */}
            <div className="md:col-span-5 text-center space-y-4">
              {/* White Trophy Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-black/20 border border-white/20 backdrop-blur-sm shadow-inner text-white">
                <Trophy className="w-8 h-8 text-white stroke-[2.2]" />
              </div>

              {/* Title */}
              <div className="space-y-1">
                <h3 className="text-3xl sm:text-4xl font-black uppercase text-white font-display tracking-tight drop-shadow-sm">
                  JOIN THE FAN ZONE!
                </h3>
                <p className="text-xs sm:text-sm font-medium text-emerald-100 max-w-sm mx-auto leading-snug">
                  Get exclusive updates, special offers, matchday tickets and behind-the-scenes action.
                </p>
              </div>

              {/* White Pill Button: "JOIN NOW" */}
              <div className="pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-3.5 bg-white hover:bg-zinc-100 text-[#0f2d12] font-black uppercase tracking-wider text-xs sm:text-sm rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  JOIN NOW
                </button>
              </div>
            </div>

            {/* Right: Dynamic Soccer Ball with Paint Splatter from Image 1 */}
            <div className="md:col-span-3 flex justify-center md:justify-end">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
                {/* Splatter & Trail behind ball */}
                <svg viewBox="0 0 240 240" className="w-full h-full filter drop-shadow-2xl">
                  {/* Paint burst trails */}
                  <path
                    d="M 60 140 C 30 160 10 130 5 180 C 40 190 70 170 90 150 Z"
                    fill="#08180c"
                    opacity="0.85"
                  />
                  <path
                    d="M 80 80 C 40 60 15 90 10 50 C 40 40 70 60 100 80 Z"
                    fill="#08180c"
                    opacity="0.7"
                  />
                  
                  {/* Green ink splashes */}
                  <circle cx="30" cy="110" r="9" fill="#143e18" />
                  <circle cx="20" cy="140" r="5" fill="#143e18" />
                  <circle cx="45" cy="70" r="7" fill="#143e18" />

                  {/* 3D Soccer Ball with clean pentagon patchwork */}
                  <g transform="translate(45, 30)">
                    {/* Ball Body */}
                    <circle cx="80" cy="80" r="64" fill="#ffffff" stroke="#111111" strokeWidth="4" />
                    
                    {/* Shadow overlay */}
                    <circle cx="80" cy="80" r="64" fill="url(#ball-lighting)" opacity="0.4" />
                    
                    {/* Black pentagon patches */}
                    <polygon points="80,50 98,64 91,86 69,86 62,64" fill="#0d110f" />
                    <polygon points="80,18 92,30 68,30" fill="#0d110f" />
                    <polygon points="126,45 136,60 120,70 110,60" fill="#0d110f" />
                    <polygon points="122,108 134,98 140,114" fill="#0d110f" />
                    <polygon points="80,122 93,142 67,142" fill="#0d110f" />
                    <polygon points="38,108 26,98 20,114" fill="#0d110f" />
                    <polygon points="34,45 24,60 40,70 50,60" fill="#0d110f" />

                    {/* Connecting seam lines */}
                    <line x1="80" y1="50" x2="80" y2="30" stroke="#111" strokeWidth="3" />
                    <line x1="98" y1="64" x2="118" y2="60" stroke="#111" strokeWidth="3" />
                    <line x1="91" y1="86" x2="114" y2="100" stroke="#111" strokeWidth="3" />
                    <line x1="69" y1="86" x2="46" y2="100" stroke="#111" strokeWidth="3" />
                    <line x1="62" y1="64" x2="42" y2="60" stroke="#111" strokeWidth="3" />
                    <line x1="80" y1="86" x2="80" y2="122" stroke="#111" strokeWidth="3" />
                  </g>
                </svg>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Fan Zone Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {isJoined ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#52B748] text-black mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(82,183,72,0.6)]">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white font-display">
                  WELCOME, MADRIDISTA!
                </h3>
                <p className="text-zinc-300 text-sm">
                  Your Madridista Digital Pass has been created! Check your inbox for exclusive Bernabéu badges and ticket presales.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-12 flex items-center justify-center">
                    <RealMadridBadge size={40} variant="royal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase text-white font-display">
                      JOIN MADRIDISTA FAN ZONE
                    </h3>
                    <p className="text-xs text-[#52B748] font-semibold">
                      Exclusive Real Madrid Community Access
                    </p>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-300 uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sergio Ramos"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-[#52B748] focus:outline-none text-white text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-300 uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="madridista@fan.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-[#52B748] focus:outline-none text-white text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-300 uppercase">Favorite Madrid Star</label>
                  <select
                    value={favoritePlayer}
                    onChange={(e) => setFavoritePlayer(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-[#52B748] focus:outline-none text-white text-sm cursor-pointer"
                  >
                    <option value="Kylian Mbappé">Kylian Mbappé (#9)</option>
                    <option value="Vinícius Júnior">Vinícius Júnior (#7)</option>
                    <option value="Jude Bellingham">Jude Bellingham (#5)</option>
                    <option value="Federico Valverde">Federico Valverde (#8)</option>
                    <option value="Luka Modrić">Luka Modrić (#10)</option>
                    <option value="Thibaut Courtois">Thibaut Courtois (#1)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#52B748] hover:bg-[#62dc57] text-black font-black uppercase text-xs sm:text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(82,183,72,0.4)] cursor-pointer"
                  >
                    GET FREE DIGITAL MEMBERSHIP
                  </button>
                </div>

                <p className="text-[10px] text-zinc-500 text-center">
                  By joining, you agree to receive Real Madrid match notifications and badge news. You can unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default FanZone;
