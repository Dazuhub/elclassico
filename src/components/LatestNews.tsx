import React, { useState } from 'react';
import { ChevronRight, ArrowUpRight, Clock, User, X } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  date: string;
  content: string;
}

const featuredArticle: NewsArticle = {
  id: 'featured-ucl',
  title: 'Champions League Final: Everything You Need to Know',
  summary: 'Preview, key players, team news and where to watch the biggest game of the season.',
  category: 'UEFA Champions League',
  readTime: '4 min read',
  date: 'Today · 14:30',
  content: `Real Madrid enter the grandest stage in club football chasing their historic La Decimoquinta triumph. 

With tactical masterclass preparations at Valdebebas, the squad is primed for an electric showdown. From the commanding presence of Jude Bellingham controlling the midfield tempo, to the explosive pace of Vinícius Júnior along the left flank, Carlo Ancelotti has assembled a machine capable of rising to any European challenge.

The iconic white jersey, emblazoned with the royal crown crest badge, carries the weight of 122 years of royal legacy. Fans in over 180 countries will tune in as the Madridistas take to the pitch at Wembley Stadium.`,
};

const moreNewsItems: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Top 10 Goals of the Week',
    summary: 'A compilation of thunderous strikes and delicate chips from across European leagues.',
    category: 'Highlights',
    readTime: '3 min read',
    date: 'Yesterday',
    content: 'Relive the most breathtaking finishes from this weekend, including Valverde’s 30-yard rocket into the top corner at the Bernabéu and sublime team build-up play.',
  },
  {
    id: 'news-2',
    title: 'Injury Updates & Squad Fitness',
    summary: 'Medical team confirms key starters cleared for full training sessions.',
    category: 'Team News',
    readTime: '2 min read',
    date: '2 days ago',
    content: 'Good news for Madridistas as both starting center-backs and goalkeeper completed full 90-minute contact training with zero discomfort ahead of the clash.',
  },
  {
    id: 'news-3',
    title: 'Transfer Rumors & Summer Window',
    summary: 'Inside scoop on contract renewals, scouting reports, and youth academy graduates.',
    category: 'Transfers',
    readTime: '5 min read',
    date: '3 days ago',
    content: 'Real Madrid’s sporting directors continue to secure football’s finest young talents with long-term contracts, cementing the club’s dominance for the next decade.',
  },
  {
    id: 'news-4',
    title: 'Match Previews & Tactical Breakdown',
    summary: 'How the high press and rapid transitional wing play unlock stubborn defenses.',
    category: 'Tactics',
    readTime: '4 min read',
    date: '4 days ago',
    content: 'Detailed video analysis breaking down how Madrid fluidly shifts from a 4-3-1-2 into an asymmetric 4-4-2 in defensive transitions to control possession.',
  },
  {
    id: 'news-5',
    title: 'Graphic Heritage: The 1920 Royal Crown Crest',
    summary: 'How King Alfonso XIII granted Madrid Football Club the title Real and the imperial crown.',
    category: 'Crest History',
    readTime: '6 min read',
    date: 'Special Edition',
    content: 'Explore the heraldic design evolution of the Real Madrid badge: from the intertwined 1902 MFC monogram to the 1920 royal crown, the 1931 purple sash of Castile, and modern vector standardization.',
  },
];

export const LatestNews: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <section className="relative py-12 md:py-16 bg-[#050607]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with green rules matching Image 1 */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#52B748]" />
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-[0.2em] text-[#52B748] font-display text-center">
            LATEST NEWS
          </h2>
          <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#52B748]" />
        </div>

        {/* News Grid (Left 2-col Featured Article, Right 1-col More News List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Featured News Card matching Image 1 */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-2xl bg-gradient-to-b from-[#0c140e] to-[#070b08] border border-[#1b3120] hover:border-[#52B748]/60 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group shadow-xl">
              
              <div>
                {/* News Image: Soccer cleat on pitch with Champions League ball */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-5 bg-[#08120a] border border-white/5">
                  <svg viewBox="0 0 500 280" className="w-full h-full object-cover">
                    <defs>
                      <linearGradient id="grass-bg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#08180c" />
                        <stop offset="60%" stopColor="#0f2b15" />
                        <stop offset="100%" stopColor="#051007" />
                      </linearGradient>
                      <radialGradient id="ball-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="70%" stopColor="#d1d5db" />
                        <stop offset="100%" stopColor="#6b7280" />
                      </radialGradient>
                    </defs>

                    {/* Grass Pitch */}
                    <rect width="500" height="280" fill="url(#grass-bg)" />
                    {/* Stadium bokeh lights */}
                    <circle cx="80" cy="50" r="40" fill="#52B748" opacity="0.1" />
                    <circle cx="220" cy="40" r="60" fill="#52B748" opacity="0.15" />
                    <circle cx="400" cy="60" r="50" fill="#a7f3d0" opacity="0.1" />

                    {/* Grass texture blades */}
                    {Array.from({ length: 60 }).map((_, i) => (
                      <path
                        key={`grass-${i}`}
                        d={`M ${i * 8.5} 280 Q ${i * 8.5 + (i % 3 === 0 ? 5 : -4)} ${240 + (i % 5) * 5} ${i * 8.5 + (i % 2 === 0 ? 8 : -6)} ${210 + (i % 4) * 8}`}
                        stroke="#1b4d26"
                        strokeWidth="2.5"
                      />
                    ))}

                    {/* Soccer Cleat Silhouette (stepping onto turf on left) */}
                    <g transform="translate(45, 110)">
                      {/* Boot leg sock */}
                      <path d="M 50 20 L 75 20 L 70 80 L 45 80 Z" fill="#111827" stroke="#374151" strokeWidth="2" />
                      {/* Boot upper */}
                      <path
                        d="M 45 80 C 45 80 80 85 105 100 C 120 110 135 125 130 138 C 110 145 60 145 40 138 C 30 120 35 90 45 80 Z"
                        fill="#050505"
                        stroke="#52B748"
                        strokeWidth="2.5"
                      />
                      {/* Cleat Sole Studs */}
                      <polygon points="50,140 55,148 45,148" fill="#52B748" />
                      <polygon points="75,142 80,150 70,150" fill="#52B748" />
                      <polygon points="105,140 110,148 100,148" fill="#52B748" />
                      {/* Athletic stripes */}
                      <path d="M 65 92 Q 80 110 75 130" stroke="#ffffff" strokeWidth="3" />
                      <path d="M 75 92 Q 90 110 85 130" stroke="#ffffff" strokeWidth="3" />
                      <path d="M 85 92 Q 100 110 95 130" stroke="#ffffff" strokeWidth="3" />
                    </g>

                    {/* The Match Soccer Ball (Right side on pitch) */}
                    <g transform="translate(250, 110)">
                      <circle cx="85" cy="85" r="54" fill="url(#ball-glow)" stroke="#111" strokeWidth="3" />
                      {/* Classic black pentagon panels */}
                      <polygon points="85,62 101,73 95,93 75,93 69,73" fill="#111" />
                      <polygon points="85,32 94,44 76,44" fill="#111" />
                      <polygon points="125,55 133,68 120,78 112,68" fill="#111" />
                      <polygon points="120,110 130,100 138,115" fill="#111" />
                      <polygon points="85,120 95,138 75,138" fill="#111" />
                      <polygon points="45,110 38,100 32,115" fill="#111" />
                      <polygon points="45,55 37,68 50,78 58,68" fill="#111" />
                      {/* Ball shadow on grass */}
                      <ellipse cx="85" cy="142" rx="48" ry="12" fill="#000000" opacity="0.6" />
                    </g>

                    {/* Green spotlight overlay banner */}
                    <rect x="0" y="240" width="500" height="40" fill="gradient" />
                  </svg>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#52B748]/50 text-[#52B748] text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                    {featuredArticle.category}
                  </div>
                </div>

                {/* Article Headline */}
                <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-[#52B748] transition-colors leading-tight mb-2">
                  {featuredArticle.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {featuredArticle.summary}
                </p>
              </div>

              {/* Read More Link */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500 font-mono">
                  {featuredArticle.readTime} · {featuredArticle.date}
                </span>
                <button
                  onClick={() => setSelectedArticle(featuredArticle)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#52B748] hover:text-[#7af06e] transition-colors cursor-pointer"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: MORE NEWS Panel matching Image 1 */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full rounded-2xl bg-gradient-to-b from-[#0c140e] to-[#070b08] border border-[#1b3120] p-5 sm:p-6 flex flex-col justify-between shadow-xl">
              
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                  <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#52B748] font-mono">
                    MORE NEWS
                  </h3>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                    Real Madrid & Europe
                  </span>
                </div>

                {/* News Items List matching Image 1 with right chevrons */}
                <div className="divide-y divide-zinc-800/80">
                  {moreNewsItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedArticle(item)}
                      className="w-full text-left py-3.5 flex items-center justify-between gap-3 group hover:text-[#52B748] transition-colors cursor-pointer"
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs sm:text-sm font-bold text-zinc-200 group-hover:text-[#52B748] transition-colors line-clamp-1">
                          {item.title}
                        </div>
                        <div className="text-[10px] text-zinc-500">
                          {item.category} · {item.readTime}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-[#52B748] group-hover:translate-x-1 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Newsletter or Badge Tip */}
              <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                <span>Updated every 15 minutes</span>
                <span className="text-[#52B748] font-bold">Live Coverage</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-left max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono font-bold text-[#52B748] uppercase tracking-wider mb-2">
              {selectedArticle.category} · {selectedArticle.date}
            </div>

            <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight mb-4">
              {selectedArticle.title}
            </h3>

            <p className="text-zinc-300 font-medium text-sm leading-relaxed mb-6 border-l-2 border-[#52B748] pl-3">
              {selectedArticle.summary}
            </p>

            <div className="text-sm text-zinc-300 leading-relaxed space-y-4 whitespace-pre-line">
              {selectedArticle.content}
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2 bg-[#52B748] text-black font-black uppercase text-xs rounded-full hover:bg-[#60d855] transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default LatestNews;
