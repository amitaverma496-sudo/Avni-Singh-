import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 text-center bg-[#24171F] border-t border-[#FFF9F3]/10 text-[#FFF9F3]/60">
      <div className="max-w-md mx-auto space-y-2">
        <p className="font-handwriting text-xl sm:text-2xl text-[#D9B779] tracking-wide">
          Built from memories, not templates.
        </p>
        <p className="font-serif text-base sm:text-lg text-[#FFF9F3]/90 font-medium">
          Sorry. Seriously.
        </p>
        <p className="text-[11px] font-sans text-[#FFF9F3]/35 pt-4">
          All referenced details derived from our genuine conversations.
        </p>
      </div>
    </footer>
  );
};
