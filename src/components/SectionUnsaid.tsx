import React from 'react';

export const SectionUnsaid: React.FC = () => {
  return (
    <section
      id="section-unsaid"
      className="py-24 px-4 sm:px-6 relative text-[#FFF9F3] overflow-hidden"
      style={{
        backgroundColor: '#35242E',
        backgroundImage: 'radial-gradient(circle at 50% 50%, #46303E 0%, #35242E 80%)'
      }}
    >
      {/* Delicate subtle glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: '#D9B779' }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-sans font-medium tracking-widest uppercase text-[#D9B779] bg-[#D9B779]/15 border border-[#D9B779]/30 mb-8">
          A Quiet Pause
        </span>

        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FFF9F3] mb-10 tracking-tight opacity-90">
          A Few Things I Didn’t Say
        </h2>

        {/* The sincere unsaid reflections */}
        <div className="space-y-6 text-base sm:text-lg font-serif italic leading-relaxed text-[#FFF9F3]/80 max-w-lg mx-auto">
          <p>
            Sometimes I joke too much.
          </p>
          <p>
            Sometimes I say things without thinking enough.
          </p>
          <p>
            Sometimes a conversation becomes more complicated than it ever needed to be.
          </p>
          <div className="w-12 h-px bg-[#D9B779]/30 mx-auto my-6" />
          <p className="text-[#FFF9F3]/90">
            And sometimes saying &lsquo;sorry&rsquo; in a chat doesn&rsquo;t really feel like enough.
          </p>
          <p className="text-[#FFF9F3]/90">
            So… here it is properly.
          </p>
        </div>

        {/* The prominent, sincere sorry */}
        <div className="mt-12 pt-8 border-t border-[#FFF9F3]/15">
          <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#D9B779]">
            I’m sorry.
          </p>
        </div>
      </div>
    </section>
  );
};
