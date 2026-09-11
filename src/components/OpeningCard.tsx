import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface OpeningCardProps {
  onOpen: () => void;
}

export const OpeningCard: React.FC<OpeningCardProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 450);
  };

  return (
    <div
      id="opening-cover"
      className={`min-h-screen w-full flex items-center justify-center px-4 py-8 relative overflow-hidden transition-all duration-700 ${
        isOpening ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 40%, #FFFDFC 0%, #FFF9F3 70%, #F8EFE7 100%)'
      }}
    >
      {/* Subtle decorative background shapes with calming colors */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-35 pointer-events-none"
        style={{ backgroundColor: '#C98291' }}
      />
      <div 
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: '#D9B779' }}
      />
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: '#A8B5A0' }}
      />

      {/* Main Centered Card */}
      <div
        id="opening-card"
        className="relative z-10 w-full max-w-lg bg-[#FFFDFC]/95 backdrop-blur-md border border-[#C98291]/20 rounded-2xl p-8 sm:p-12 shadow-[0_12px_40px_-15px_rgba(114,85,103,0.12)] text-center transition-all duration-500 hover:border-[#C98291]/35"
      >
        {/* Subtle accent icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFF9F3] border border-[#D9B779]/30 text-[#C98291] mb-6 shadow-sm">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>

        {/* Primary line */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] text-[#342728] leading-[1.25] tracking-tight font-medium mb-4">
          Okay… I owe you a proper sorry.
        </h1>

        {/* Secondary line */}
        <div className="text-base sm:text-lg text-[#342728]/75 font-sans leading-relaxed mb-6 max-w-sm mx-auto space-y-1">
          <p>Not a 3-word WhatsApp sorry.</p>
          <p className="font-medium text-[#725567]">A properly thought-out one.</p>
        </div>

        {/* Playful warning note */}
        <div className="inline-block px-4 py-2 rounded-xl bg-[#FFF9F3] border border-[#D9B779]/30 mb-8 max-w-sm">
          <p className="font-handwriting text-lg sm:text-xl text-[#725567] leading-snug">
            Warning: this website contains evidence that I actually remember things.
          </p>
        </div>

        {/* Interactive CTA Button */}
        <div>
          <button
            id="open-letter-button"
            onClick={handleOpenClick}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#725567] text-[#FFFDFC] text-base font-medium transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(114,85,103,0.35)] hover:bg-[#5f4455] hover:shadow-[0_6px_24px_-4px_rgba(114,85,103,0.45)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#C98291]/40 cursor-pointer"
          >
            <span>Open it</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Tiny calm caption */}
        <p className="mt-8 text-xs font-sans tracking-wide text-[#342728]/45">
          Made specifically for you · No rush to forgive
        </p>
      </div>
    </div>
  );
};
