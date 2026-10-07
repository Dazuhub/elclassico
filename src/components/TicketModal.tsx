import React, { useState } from 'react';
import { X, Ticket, Check, ShieldCheck, MapPin, Calendar, Clock, CreditCard } from 'lucide-react';
import RealMadridBadge from './RealMadridBadge';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<'standard' | 'fans' | 'vip'>('fans');
  const [ticketQuantity, setTicketQuantity] = useState(2);
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const categories = {
    standard: {
      name: 'Lateral Este - Cat 1',
      price: 145,
      desc: 'Prime elevated view along the touchline, panoramic Santiago Bernabéu vision.',
    },
    fans: {
      name: 'Grada Fans RMCF (Atmosphere Zone)',
      price: 95,
      desc: 'Behind the South Goal with the singing section, banners and non-stop flags.',
    },
    vip: {
      name: 'Tribuna Presidencial VIP Club',
      price: 420,
      desc: 'Exclusive lounge hospitality, pre-match dining, players tunnel view.',
    },
  };

  const current = categories[selectedCategory];
  const totalPrice = current.price * ticketQuantity;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#090e0b] border border-[#1b3421] rounded-3xl p-6 sm:p-8 shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#52B748] text-black mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(82,183,72,0.6)]">
              <Check className="w-9 h-9 stroke-[3]" />
            </div>
            <h3 className="text-3xl font-black uppercase text-white font-display">
              TICKETS RESERVED!
            </h3>
            <p className="text-zinc-300 text-sm max-w-sm mx-auto">
              Your {ticketQuantity}× {current.name} tickets have been locked in. Madridista digital pass and QR passes sent to your email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleBook} className="space-y-5">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
              <div className="w-10 h-12 flex items-center justify-center">
                <RealMadridBadge size={38} variant="royal" />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase text-white font-display">
                  EL CLÁSICO TICKETS
                </h3>
                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <span className="flex items-center gap-1 text-[#52B748]">
                    <MapPin className="w-3.5 h-3.5" /> Estadio Santiago Bernabéu
                  </span>
                  <span>·</span>
                  <span>26 May · 20:00</span>
                </div>
              </div>
            </div>

            {/* Seating Categories */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#52B748]">
                Select Seating Zone
              </label>
              {(Object.keys(categories) as (keyof typeof categories)[]).map((key) => {
                const cat = categories[key];
                return (
                  <div
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      selectedCategory === key
                        ? 'border-[#52B748] bg-[#52B748]/10 text-white shadow-lg'
                        : 'border-zinc-800/80 bg-zinc-900/60 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className="space-y-0.5 pr-2">
                      <div className="text-sm font-bold text-white">{cat.name}</div>
                      <div className="text-xs text-zinc-400 leading-tight">{cat.desc}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-base font-black text-[#52B748]">€{cat.price}</div>
                      <div className="text-[10px] text-zinc-500">per ticket</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800">
              <span className="text-xs font-bold text-zinc-300 uppercase">Number of Tickets</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                  className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold flex items-center justify-center cursor-pointer"
                >
                  -
                </button>
                <span className="text-base font-black text-white w-5 text-center">
                  {ticketQuantity}
                </span>
                <button
                  type="button"
                  onClick={() => setTicketQuantity(Math.min(6, ticketQuantity + 1))}
                  className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold flex items-center justify-center cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total and CTA */}
            <div className="pt-2 flex items-center justify-between border-t border-zinc-800">
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-400 block">Total Due</span>
                <span className="text-2xl font-black text-[#52B748]">€{totalPrice}</span>
              </div>
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#52B748] hover:bg-[#63df58] text-black font-black uppercase text-xs sm:text-sm rounded-full shadow-[0_0_25px_rgba(82,183,72,0.4)] transition-all cursor-pointer"
              >
                CONFIRM & CHECKOUT
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default TicketModal;
