import React from 'react';

export const SectionSorry: React.FC = () => {
  return (
    <section id="section-sorry" className="pt-28 pb-20 px-4 sm:px-6 relative">
      <div className="max-w-3xl mx-auto">
        {/* Subtle eyebrow label */}
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-sans font-medium tracking-wide uppercase text-[#725567] bg-[#725567]/10 border border-[#725567]/20">
            A Proper Apology
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-center text-[#342728] font-medium tracking-tight mb-8">
          I’m Sorry.
        </h2>

        {/* Main apology card */}
        <div className="bg-[#FFFDFC] border border-[#C98291]/25 rounded-2xl p-7 sm:p-12 shadow-[0_10px_35px_-12px_rgba(114,85,103,0.08)] relative overflow-hidden">
          {/* Subtle decorative top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D9B779] via-[#C98291] to-[#725567]" />

          {/* Sincere, conversational text */}
          <div className="space-y-6 text-base sm:text-lg leading-[1.75] text-[#342728]/85 font-sans">
            <p>
              I wanted to take a moment and write this properly, because simply dropping a quick &ldquo;sorry&rdquo; in the middle of a text thread doesn&rsquo;t really do justice to what was on my mind.
            </p>

            <p>
              I know I may have annoyed you at times, or crossed lines without realizing it. I also know things between us have sometimes gotten unnecessarily complicated because of what other people say or assume. That was never what I wanted.
            </p>

            <p>
              Please know that this website isn&rsquo;t here to put pressure on you or force you into saying &ldquo;it&rsquo;s fine.&rdquo; You don&rsquo;t owe me quick forgiveness, and you get to take whatever time or space you want. I just genuinely wanted to apologize properly, without making excuses.
            </p>

            <p>
              I value our friendship, the banter, and the little conversations we share. Even if I don&rsquo;t always show it well, I pay a lot more attention to who you are than I probably let on.
            </p>

            <p>
              Which brings me to the rest of this page: proof that I actually remember the little things.
            </p>
          </div>

          {/* Little handwritten footer note */}
          <div className="mt-8 pt-6 border-t border-[#342728]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="font-handwriting text-xl sm:text-2xl text-[#725567]">
              — No guilt, no drama. Just an honest apology.
            </p>
            <span className="text-xs font-sans text-[#342728]/50 uppercase tracking-wider">
              Scroll down for the evidence ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
