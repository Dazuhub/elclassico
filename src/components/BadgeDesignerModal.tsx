import React, { useState } from 'react';
import { X, Copy, Check, Download, Layers, Sparkles, ZoomIn, Info, Eye } from 'lucide-react';
import RealMadridBadge, { BadgeVariant } from './RealMadridBadge';

interface BadgeDesignerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeVariant: BadgeVariant;
  onSelectVariant: (variant: BadgeVariant) => void;
}

export const BadgeDesignerModal: React.FC<BadgeDesignerModalProps> = ({
  isOpen,
  onClose,
  activeVariant,
  onSelectVariant,
}) => {
  const [highlightPart, setHighlightPart] = useState<'all' | 'crown' | 'monogram' | 'sash' | 'rings'>('all');
  const [copied, setCopied] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  if (!isOpen) return null;

  const handleCopySvg = () => {
    // Basic SVG export
    setCopied(true);
    navigator.clipboard.writeText(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 580" width="500" height="580"><!-- Real Madrid Official Crest Badge --></svg>`
    );
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSvg = () => {
    const blob = new Blob([`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 580"><title>Real Madrid Crest Badge</title></svg>`], {
      type: 'image/svg+xml',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `real-madrid-badge-${activeVariant}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const anatomyDetails = {
    all: {
      title: 'Full Real Madrid Crest Badge',
      era: '1902 – Present',
      desc: 'One of the most recognizable athletic emblems in world history, unifying the 1902 Madrid Football Club monogram, the 1920 Royal Crown, and the 1931 Castile diagonal sash.',
    },
    crown: {
      title: 'La Corona Real (Royal Crown)',
      era: 'Granted 1920 by King Alfonso XIII',
      desc: 'Features a closed imperial crown lined with pearls, surmounted by a Latin cross upon a globus cruciger, with alternating diamond lozenges and pearls along the diadem headband.',
    },
    monogram: {
      title: 'Interlocking Monogram (M - C - F)',
      era: 'Designed 1902',
      desc: 'Intertwined initials of Madrid Club de Fútbol. The sweeping "C" encompasses the central serif "F", framed by the two pointed summits of the "M".',
    },
    sash: {
      title: 'Banda de Castilla (Diagonal Sash)',
      era: 'Introduced 1931',
      desc: 'The broad diagonal band running from upper-left to lower-right, paying heraldic tribute to the historical Kingdom of Castile, traditionally rendered in royal mulberry violet.',
    },
    rings: {
      title: 'Concentric Escudo (Medallion Rings)',
      era: 'Standardized Geometry',
      desc: 'Double concentric perimeter rings enclosing the medallion, providing balanced geometric framing for pitch jerseys, banners, and digital typography.',
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#080d09] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-left">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#52B748]/10 border border-[#52B748]/40 flex items-center justify-center text-[#52B748]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-white font-display">
                REAL MADRID CREST ARCHITECTURE
              </h2>
              <p className="text-xs text-zinc-400">
                Graphic Designer Vector Anatomy & Colorway Lab
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left / Center: Interactive Badge Canvas */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center bg-black/60 rounded-2xl border border-zinc-800/80 p-6 relative min-h-[380px]">
            
            {/* Grid overlay toggle */}
            {showGrid && (
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl opacity-25"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #52B748 1px, transparent 1px), linear-gradient(to bottom, #52B748 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
            )}

            {/* The Badge */}
            <div className={`relative p-6 rounded-2xl transition-all duration-300 ${activeVariant === 'monochrome' ? 'bg-white shadow-2xl' : 'bg-transparent'}`}>
              <RealMadridBadge
                size={260}
                variant={activeVariant}
                highlightPart={highlightPart}
                className="drop-shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Quick Canvas Controls */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
              <button
                onClick={() => setShowGrid(!showGrid)}
                className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer font-bold ${
                  showGrid
                    ? 'bg-[#52B748] text-black border-[#52B748]'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                }`}
              >
                {showGrid ? 'Grid On ✓' : 'Toggle Geometry Grid'}
              </button>

              <button
                onClick={handleCopySvg}
                className="px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-bold inline-flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#52B748]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy SVG'}</span>
              </button>

              <button
                onClick={handleDownloadSvg}
                className="px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-bold inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download SVG</span>
              </button>
            </div>
          </div>

          {/* Right: Anatomy & Colorway Selectors */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Colorway Switcher */}
            <div>
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#52B748] block mb-2">
                Badge Colorway Variant
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => onSelectVariant('monochrome')}
                  className={`p-2.5 rounded-xl border text-left font-bold transition-all cursor-pointer ${
                    activeVariant === 'monochrome'
                      ? 'border-white bg-white text-black shadow-md'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  <div className="text-xs">Monochrome (Image 2)</div>
                  <div className="text-[10px] opacity-70">Pure Black Linework</div>
                </button>

                <button
                  onClick={() => onSelectVariant('monochrome-invert')}
                  className={`p-2.5 rounded-xl border text-left font-bold transition-all cursor-pointer ${
                    activeVariant === 'monochrome-invert'
                      ? 'border-[#52B748] bg-[#52B748]/10 text-white shadow-md'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  <div className="text-xs">Inverted White</div>
                  <div className="text-[10px] opacity-70">Pitch Dark Stadium</div>
                </button>

                <button
                  onClick={() => onSelectVariant('royal')}
                  className={`p-2.5 rounded-xl border text-left font-bold transition-all cursor-pointer ${
                    activeVariant === 'royal'
                      ? 'border-amber-400 bg-amber-400/10 text-amber-300 shadow-md'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  <div className="text-xs">Royal Club Colors</div>
                  <div className="text-[10px] opacity-70">Gold & Violet Sash</div>
                </button>

                <button
                  onClick={() => onSelectVariant('emerald')}
                  className={`p-2.5 rounded-xl border text-left font-bold transition-all cursor-pointer ${
                    activeVariant === 'emerald'
                      ? 'border-[#52B748] bg-[#52B748]/10 text-[#52B748] shadow-md'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  <div className="text-xs">Emerald Edition</div>
                  <div className="text-[10px] opacity-70">Footy Live Stadium</div>
                </button>
              </div>
            </div>

            {/* Heraldic Component Inspection */}
            <div>
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#52B748] block mb-2">
                Heraldic Component Isolator
              </label>
              <div className="flex flex-wrap gap-1.5">
                {(['all', 'crown', 'monogram', 'sash', 'rings'] as const).map((part) => (
                  <button
                    key={part}
                    onClick={() => setHighlightPart(part)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                      highlightPart === part
                        ? 'bg-[#52B748] text-black shadow'
                        : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                    }`}
                  >
                    {part}
                  </button>
                ))}
              </div>
            </div>

            {/* Detail Box */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#52B748]">
                <span className="font-bold">{anatomyDetails[highlightPart].title}</span>
                <span className="text-[10px] text-zinc-400">{anatomyDetails[highlightPart].era}</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {anatomyDetails[highlightPart].desc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
export default BadgeDesignerModal;
