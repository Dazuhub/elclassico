import React, { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import HeroSection from './components/HeroSection';
import MatchSpotlight from './components/MatchSpotlight';
import UpcomingMatches from './components/UpcomingMatches';
import LatestNews from './components/LatestNews';
import FanZone from './components/FanZone';
import Footer from './components/Footer';
import BadgeDesignerModal from './components/BadgeDesignerModal';
import WatchLiveModal from './components/WatchLiveModal';
import TicketModal from './components/TicketModal';
import MatchDetailModal from './components/MatchDetailModal';
import { BadgeVariant } from './components/RealMadridBadge';

export function App() {
  // State for Real Madrid Badge Rendering Variant
  // Options: 'monochrome' (exact match to user Image 2), 'royal', 'monochrome-invert', 'emerald'
  const [activeVariant, setActiveVariant] = useState<BadgeVariant>('monochrome-invert');

  // Modal visibility states
  const [isBadgeModalOpen, setIsBadgeModalOpen] = useState(false);
  const [isWatchLiveOpen, setIsWatchLiveOpen] = useState(false);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<any | null>(null);

  // Toggle variant helper
  const handleToggleVariant = () => {
    setActiveVariant((prev) => {
      if (prev === 'monochrome-invert') return 'monochrome';
      if (prev === 'monochrome') return 'royal';
      if (prev === 'royal') return 'emerald';
      return 'monochrome-invert';
    });
  };

  // Smooth scroll helper
  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050607] text-white flex flex-col font-sans selection:bg-[#52B748] selection:text-black">
      {/* 1. Header Navigation with Top Bar & Real Madrid Crest */}
      <HeaderNav
        onOpenTickets={() => setIsTicketModalOpen(true)}
        onOpenBadgeInspector={() => setIsBadgeModalOpen(true)}
        activeVariant={activeVariant}
        onToggleVariant={handleToggleVariant}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections strictly matching the provided layout */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section: "LIVE FOR FOOTBALL" + Kneeling Player #10 + Torn Edge Divider */}
        <div id="hero">
          <HeroSection
            onOpenTickets={() => setIsTicketModalOpen(true)}
            onOpenBadgeInspector={() => setIsBadgeModalOpen(true)}
          />
        </div>

        {/* 3. Match Spotlight: EL CLÁSICO (FC Barcelona vs Real Madrid Crest) */}
        <div id="spotlight">
          <MatchSpotlight
            onWatchLive={() => setIsWatchLiveOpen(true)}
            onInspectBadge={() => setIsBadgeModalOpen(true)}
            badgeVariant={activeVariant}
          />
        </div>

        {/* 4. Upcoming Matches: 3 Cards (Man United vs Liverpool, Bayern vs Dortmund, PSG vs Marseille) */}
        <div id="matches">
          <UpcomingMatches
            onSelectMatch={(match) => setSelectedMatch(match)}
          />
        </div>

        {/* 5. Latest News: Champions League Final Feature + More News List */}
        <div id="news">
          <LatestNews />
        </div>

        {/* 6. Join The Fan Zone!: Cheering Crowds + White Trophy + Soccer Ball Splatter */}
        <div id="fanzone">
          <FanZone />
        </div>
      </main>

      {/* 7. Footer: Quick Links, Follow Us, Download App, Unsubscribe & Preferences */}
      <Footer
        onOpenBadgeModal={() => setIsBadgeModalOpen(true)}
        onOpenTickets={() => setIsTicketModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Interactive Graphic Designer Modals */}
      <BadgeDesignerModal
        isOpen={isBadgeModalOpen}
        onClose={() => setIsBadgeModalOpen(false)}
        activeVariant={activeVariant}
        onSelectVariant={(variant) => setActiveVariant(variant)}
      />

      <WatchLiveModal
        isOpen={isWatchLiveOpen}
        onClose={() => setIsWatchLiveOpen(false)}
      />

      <TicketModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
      />

      <MatchDetailModal
        match={selectedMatch}
        onClose={() => setSelectedMatch(null)}
        onBookTickets={() => setIsTicketModalOpen(true)}
      />
    </div>
  );
}

export default App;
