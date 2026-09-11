import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Eye, Check, Heart, ShieldAlert } from 'lucide-react';

export const SectionFinalReveal: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [forgiven, setForgiven] = useState(false);
  const [notYetCount, setNotYetCount] = useState(0);
  const [dodgeOffset, setDodgeOffset] = useState({ x: 0, y: 0 });

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleForgive = () => {
    setForgiven(true);
    // Soft elegant confetti with the theme palette
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C98291', '#D9B779', '#A8B5A0', '#FFFDFC', '#725567']
    });
  };

  const handleNotYet = () => {
    setNotYetCount((prev) => prev + 1);
    // Gently dodge button position
    const randomX = (Math.random() - 0.5) * 140;
    const randomY = (Math.random() - 0.5) * 50;
    setDodgeOffset({ x: randomX, y: randomY });
  };

  return (
    <section
      id="section-final"
      className="py-28 px-4 sm:px-6 relative text-[#FFF9F3] overflow-hidden"
      style={{
        backgroundColor: '#2E1E28',
        backgroundImage: 'radial-gradient(circle at 50% 40%, #3B2835 0%, #2E1E28 100%)'
      }}
    >
      {/* Gentle ambient background glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: '#C98291' }}
      />

      <div className="max-w-xl mx-auto relative z-10 text-center">
        {/* The Single Centered Card */}
        <div className="bg-[#FFFDFC]/10 backdrop-blur-md border border-[#FFF9F3]/15 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <p className="text-xs font-sans uppercase tracking-widest text-[#D9B779] mb-4">
            Before you leave…
          </p>

          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FFF9F3] mb-6">
            There’s one thing I still remember.
          </h3>

          {!isRevealed ? (
            <div className="py-4">
              <button
                id="reveal-callback-button"
                onClick={handleReveal}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D9B779] text-[#2E1E28] font-medium text-sm sm:text-base hover:bg-[#e4c68d] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4" />
                <span>Reveal it</span>
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              {/* Revealed Callback */}
              <div className="p-6 rounded-2xl bg-[#FFFDFC]/5 border border-[#FFF9F3]/10 my-4">
                <p className="font-serif text-2xl sm:text-3xl text-[#FFF9F3] font-medium leading-snug">
                  &ldquo;Remember when I said &lsquo;checkmate&rsquo;?&rdquo;
                </p>
                <p className="text-2xl mt-3 text-[#D9B779] select-none">
                  😉
                </p>
              </div>

              {/* Subtitle after reveal */}
              <div className="mt-8 mb-6">
                <p className="text-base sm:text-lg font-sans text-[#FFF9F3]/85">
                  Okay.
                </p>
                <p className="text-sm sm:text-base font-sans text-[#FFF9F3]/75 mt-1">
                  Now you can decide whether I deserve forgiveness.
                </p>
              </div>

              {/* Decision Buttons */}
              {!forgiven ? (
                <div className="relative pt-2 pb-6 min-h-[110px] flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    id="forgive-button"
                    onClick={handleForgive}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C98291] text-[#FFFDFC] text-sm font-medium hover:bg-[#b87180] transition-colors shadow-md cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    <span>Fine, I forgive you</span>
                  </button>

                  <button
                    id="not-yet-button"
                    onClick={handleNotYet}
                    onMouseEnter={handleNotYet}
                    style={{
                      transform: `translate(${dodgeOffset.x}px, ${dodgeOffset.y}px)`
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FFF9F3]/30 text-[#FFF9F3]/80 text-xs sm:text-sm font-normal hover:bg-[#FFF9F3]/10 transition-transform duration-200 cursor-pointer"
                  >
                    <span>Not yet 😑</span>
                  </button>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-[#A8B5A0]/20 border border-[#A8B5A0]/40 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#A8B5A0]/30 text-[#FFF9F3] flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 fill-current text-[#D9B779]" />
                  </div>
                  <p className="font-serif text-2xl text-[#FFF9F3] font-medium mb-1">
                    Thank you 🥹
                  </p>
                  <p className="text-xs sm:text-sm text-[#FFF9F3]/80 font-sans">
                    I really appreciate it, and I promise to be more mindful of things moving forward.
                  </p>
                </div>
              )}

              {/* Gentle disclaimer note if Not Yet clicked */}
              {notYetCount > 0 && !forgiven && (
                <div className="mt-2 text-xs text-[#D9B779] font-sans flex items-center justify-center gap-1.5 animate-in fade-in">
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                  <span>Fair enough. Take all the time you need. No pressure at all.</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
