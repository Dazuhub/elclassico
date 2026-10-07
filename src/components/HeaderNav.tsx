import React, { useState } from 'react';
import { Menu, X, Ticket, Sparkles, Volume2, Shield } from 'lucide-react';
import RealMadridBadge, { BadgeVariant } from './RealMadridBadge';

interface HeaderNavProps {
  onOpenTickets: () => void;
  onOpenBadgeInspector: () => void;
  activeVariant: BadgeVariant;
  onToggleVariant: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenTickets,
  onOpenBadgeInspector,
  activeVariant,
  onToggleVariant,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Matches', target: 'matches' },
    { label: 'Scores', target: 'spotlight' },
    { label: 'Badge & Crest', target: 'inspector', isSpecial: true },
    { label: 'News', target: 'news' },
    { label: 'Fan Zone', target: 'fanzone' },
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    if (link.isSpecial) {
      onOpenBadgeInspector();
    } else {
      onNavigateSection(link.target);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050806]/95 backdrop-blur-md border-b border-[#142617]/70">
      
      {/* 1. Top Announcement Bar matching Image 1 */}
      <div className="bg-[#030504] border-b border-zinc-900 px-4 sm:px-8 py-1.5 text-[11px] sm:text-xs text-zinc-400">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left: "Kick off the action! ⚽" */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-300">Kick off the action! ⚽</span>
            <span className="hidden sm:inline text-zinc-600">·</span>
            <span className="hidden sm:inline text-[#52B748] font-bold">
              Real Madrid Official Crest Design
            </span>
          </div>

          {/* Right: "View in browser" + Badge Style Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleVariant}
              className="text-[10px] font-mono font-bold uppercase text-zinc-400 hover:text-[#52B748] transition-colors flex items-center gap-1 cursor-pointer"
              title="Switch Real Madrid badge rendering style"
            >
              <Sparkles className="w-3 h-3 text-[#52B748]" />
              <span>Crest: {activeVariant}</span>
            </button>
            <span className="text-zinc-700">|</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              View in browser
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar matching Image 1 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Brand: Real Madrid Badge Logo + Title */}
        <div 
          onClick={onOpenBadgeInspector}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          {/* Real Madrid Crest Badge Icon */}
          <div className="w-11 h-13 sm:w-12 sm:h-14 flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
            <RealMadridBadge size={44} variant={activeVariant} />
          </div>

          {/* Brand Typography */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-display text-2xl sm:text-3xl font-black tracking-wider text-white">
                REAL MADRID
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono tracking-widest text-[#52B748] font-black uppercase">
              <span>CLUB DE FÚTBOL</span>
              <span className="text-zinc-600">·</span>
              <span>LIVE</span>
            </div>
          </div>
        </div>

        {/* Desktop Nav Links matching Image 1: Matches, Scores, Teams, News, Offers */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-zinc-300">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link)}
              className={`hover:text-[#52B748] transition-colors cursor-pointer py-1 ${
                link.isSpecial ? 'text-[#52B748] flex items-center gap-1 font-black' : ''
              }`}
            >
              {link.label}
              {link.isSpecial && <Shield className="w-3.5 h-3.5" />}
            </button>
          ))}
        </nav>

        {/* Right CTA Button: "Get Tickets" in green pill matching Image 1 */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenTickets}
            className="px-5 py-2.5 bg-[#52B748] hover:bg-[#60d655] text-black font-black uppercase tracking-wider text-xs rounded-full shadow-[0_0_18px_rgba(82,183,72,0.45)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <Ticket className="w-4 h-4 stroke-[2.5]" />
            <span>Get Tickets</span>
          </button>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onOpenTickets}
            className="p-2 bg-[#52B748] text-black rounded-full"
            aria-label="Get Tickets"
          >
            <Ticket className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#070c09] border-b border-zinc-800 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link)}
              className="w-full text-left py-2.5 px-3 text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-[#52B748] hover:bg-black/40 rounded-xl flex items-center justify-between"
            >
              <span>{link.label}</span>
              {link.isSpecial && <Shield className="w-4 h-4 text-[#52B748]" />}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTickets();
              }}
              className="w-full py-3 bg-[#52B748] text-black font-black uppercase text-xs rounded-full shadow-lg"
            >
              Get Match Tickets
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
export default HeaderNav;
