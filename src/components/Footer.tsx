import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Smartphone, Check, ShieldCheck } from 'lucide-react';
import RealMadridBadge from './RealMadridBadge';

interface FooterProps {
  onOpenBadgeModal: () => void;
  onOpenTickets: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBadgeModal,
  onOpenTickets,
  onNavigateSection,
}) => {
  const [prefModalOpen, setPrefModalOpen] = useState(false);
  const [unsubscribed, setUnsubscribed] = useState(false);

  return (
    <footer className="relative bg-[#040605] border-t border-zinc-900 pt-12 pb-10 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer row matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-zinc-800/80">
          
          {/* Col 1: Brand & Badge Logo (Image 1 Left) */}
          <div className="md:col-span-4 space-y-4">
            <div 
              onClick={onOpenBadgeModal}
              className="inline-flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-12 h-14 flex items-center justify-center p-1 bg-black/50 border border-zinc-800 rounded-xl group-hover:border-[#52B748] transition-colors">
                <RealMadridBadge size={40} variant="monochrome-invert" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-black tracking-wider text-white">
                    REAL MADRID
                  </span>
                </div>
                <div className="text-[10px] font-mono text-[#52B748] uppercase tracking-widest font-bold">
                  CLUB DE FÚTBOL · EST. 1902
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Your home for live scores, news, and everything football. The official royal crest badge graphic showcase.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenBadgeModal}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#52B748] hover:underline cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>View Graphic Designer Crest Specs</span>
              </button>
            </div>
          </div>

          {/* Col 2: QUICK LINKS matching Image 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white font-mono">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  onClick={() => onNavigateSection('spotlight')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  El Clásico Spotlight
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('matches')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Upcoming Matches
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('news')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Latest News & Articles
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTickets}
                  className="hover:text-[#52B748] transition-colors font-bold text-[#52B748] cursor-pointer"
                >
                  Match Tickets & VIP Pass
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('fanzone')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Fan Zone Community
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: FOLLOW US matching Image 1 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white font-mono">
              FOLLOW US
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href="https://facebook.com/realmadrid"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-[#52B748] hover:text-black flex items-center justify-center transition-all cursor-pointer text-zinc-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/realmadrid"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-[#52B748] hover:text-black flex items-center justify-center transition-all cursor-pointer text-zinc-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/realmadrid"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-[#52B748] hover:text-black flex items-center justify-center transition-all cursor-pointer text-zinc-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/realmadrid"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-[#52B748] hover:text-black flex items-center justify-center transition-all cursor-pointer text-zinc-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-zinc-500 pt-1">
              Join 400M+ Madridistas worldwide.
            </p>
          </div>

          {/* Col 4: DOWNLOAD APP matching Image 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white font-mono">
              DOWNLOAD APP
            </h4>
            <div className="space-y-2">
              {/* App Store button badge */}
              <button
                onClick={() => alert('Real Madrid Official iOS app is available on the App Store.')}
                className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-left text-white transition-all cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.92.04-2.02.62-2.67 1.37-.56.64-.98 1.68-.85 2.69 1.03.08 2.06-.52 2.6-1.21z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-zinc-400 leading-tight">Download on the</div>
                  <div className="text-xs font-bold leading-tight">App Store</div>
                </div>
              </button>

              {/* Google Play button badge */}
              <button
                onClick={() => alert('Real Madrid Official Android app is available on Google Play.')}
                className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-left text-white transition-all cursor-pointer"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#52B748]">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186c-.37-.37-.61-.91-.61-1.517V3.331c0-.607.24-1.147.61-1.517zM15.207 13.414l2.122 2.121-12.72 7.344 10.598-9.465zm0-2.828L4.609 1.121l12.72 7.344-2.122 2.121zm1.414 1.414l3.536 2.042c.814.47.814 1.233 0 1.704l-3.536 2.042-2.122-2.122 2.122-2.122z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-zinc-400 leading-tight">GET IT ON</div>
                  <div className="text-xs font-bold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Email disclaimer matching Image 1 */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500 text-center sm:text-left">
          <div>
            You are receiving this email/page because you love football & Madridismo!
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setUnsubscribed(true)}
              className="hover:text-zinc-300 transition-colors underline cursor-pointer"
            >
              {unsubscribed ? 'Unsubscribed ✓' : 'Unsubscribe'}
            </button>
            <span>|</span>
            <button
              onClick={() => setPrefModalOpen(true)}
              className="hover:text-zinc-300 transition-colors underline cursor-pointer"
            >
              Manage Preferences
            </button>
          </div>
        </div>

        <div className="pt-3 text-[10px] text-zinc-600 text-center">
          © 1902–2026 Real Madrid Club de Fútbol. Graphic Design & Crest Geometry by Senior Design Studio.
        </div>

      </div>

      {/* Preferences Modal */}
      {prefModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl text-left">
            <h3 className="text-lg font-black uppercase text-white font-display mb-3">
              Notification Preferences
            </h3>
            <div className="space-y-3 text-xs text-zinc-300">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-[#52B748] rounded" />
                <span>Live Matchday Goal Alerts</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-[#52B748] rounded" />
                <span>El Clásico Ticket Presales</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-[#52B748] rounded" />
                <span>Official Kit & Crest Badge Merch</span>
              </label>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setPrefModalOpen(false)}
                className="px-4 py-2 bg-[#52B748] text-black font-black uppercase text-xs rounded-xl cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
export default Footer;
