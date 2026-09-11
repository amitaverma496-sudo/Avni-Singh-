import React, { useState } from 'react';
import { FLOATING_PHRASES } from '../data/floatingPhrases';
import { Sparkles, MessageSquare } from 'lucide-react';

export const SectionLighthearted: React.FC = () => {
  const [activePhraseId, setActivePhraseId] = useState<string | null>(null);

  const handlePhraseClick = (id: string) => {
    setActivePhraseId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="section-lighthearted" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#FFF9F3]">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-sans font-medium tracking-wide uppercase text-[#C98291] bg-[#C98291]/15 border border-[#C98291]/30 mb-3">
          Tone Shift
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#342728] font-medium tracking-tight mb-4">
          Because obviously this website couldn’t stay serious.
        </h2>
        <p className="text-sm sm:text-base text-[#342728]/70 font-sans max-w-lg mx-auto mb-12">
          A few recurring phrases, emotes, and reactions that define our chat logs. Tap on any phrase to see when you typically pull it out.
        </p>

        {/* Floating Interactive Cloud of Phrases */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto mb-10">
          {FLOATING_PHRASES.map((phrase, idx) => {
            const isActive = activePhraseId === phrase.id;
            return (
              <div key={phrase.id} className="relative inline-block">
                <button
                  onClick={() => handlePhraseClick(phrase.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 transform active:scale-95 cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-[#725567] text-[#FFFDFC] scale-105 shadow-md ring-2 ring-[#C98291]/40'
                      : 'bg-[#FFFDFC] text-[#342728] border border-[#C98291]/20 hover:border-[#725567]/50 hover:bg-[#FFF9F3] hover:-translate-y-1'
                  }`}
                  style={{
                    animationDelay: `${idx * 150}ms`
                  }}
                >
                  <span className={phrase.text.startsWith('“') ? 'font-serif' : 'font-sans'}>
                    {phrase.text}
                  </span>
                </button>

                {/* Popover tooltip explaining the context */}
                {isActive && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 p-3 rounded-xl bg-[#FFFDFC] border border-[#725567]/25 shadow-xl text-xs text-[#342728] z-30 text-left pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center gap-1 text-[#725567] font-semibold mb-1">
                      <MessageSquare className="w-3 h-3" />
                      <span>Context</span>
                    </div>
                    <p className="text-[#342728]/80 leading-snug">
                      {phrase.context}
                    </p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#FFFDFC]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Playful hint */}
        <div className="inline-flex items-center gap-2 text-xs text-[#725567]/70 font-sans">
          <Sparkles className="w-3.5 h-3.5 text-[#D9B779]" />
          <span>If I had a nickel for every &ldquo;hehehe&rdquo;, this website would have had custom domain hosting.</span>
        </div>
      </div>
    </section>
  );
};
