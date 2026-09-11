import React from 'react';
import { PERSONALITY_TRAITS } from '../data/personalityTraits';
import { Sparkles, Info } from 'lucide-react';

export const SectionPersonality: React.FC = () => {
  return (
    <section id="section-personality" className="py-20 px-4 sm:px-6 bg-[#FFF9F3]/60 relative border-y border-[#C98291]/10">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-sans font-medium tracking-wide uppercase text-[#C98291] bg-[#C98291]/15 border border-[#C98291]/30 mb-3">
            Perspective
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#342728] font-medium tracking-tight mb-3">
            Things That Make You… You
          </h2>
          <p className="text-sm sm:text-base text-[#342728]/70 font-sans leading-relaxed">
            Taking the facts and looking at the person behind them.
          </p>
        </div>

        {/* Traits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERSONALITY_TRAITS.map((item) => {
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-[#FFFDFC] border border-[#C98291]/20 hover:border-[#725567]/40 rounded-2xl p-7 shadow-[0_4px_24px_-10px_rgba(114,85,103,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Trait Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-sans font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md"
                      style={{
                        backgroundColor: `${item.accentColor}18`,
                        color: item.accentColor
                      }}
                    >
                      Observation
                    </span>
                    <Sparkles className="w-4 h-4 text-[#D9B779]" />
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-[#342728] mb-1">
                    {item.trait}
                  </h3>
                  
                  <p className="text-xs font-sans font-medium text-[#725567] mb-4">
                    {item.subtitle}
                  </p>

                  <p className="text-sm font-sans text-[#342728]/80 leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Humble Disclaimer Banner */}
        <div className="mt-12 max-w-xl mx-auto p-4 rounded-xl bg-[#FFFDFC] border border-[#D9B779]/30 flex items-center gap-3 text-xs sm:text-sm text-[#342728]/70 shadow-sm">
          <Info className="w-4 h-4 text-[#D9B779] shrink-0" />
          <p>
            <span className="font-semibold text-[#342728]">Friendly reminder:</span> These are just my personal observations from talking to you, not an official psychoanalytic diagnosis.
          </p>
        </div>
      </div>
    </section>
  );
};
