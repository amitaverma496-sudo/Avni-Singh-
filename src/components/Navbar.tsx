import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onShowCover?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onShowCover }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'section-sorry', label: 'Sorry' },
    { id: 'section-what-i-know', label: 'What I Know' },
    { id: 'section-personality', label: 'You' },
    { id: 'section-quiz', label: 'Quiz' },
    { id: 'section-timeline', label: 'Memories' },
    { id: 'section-final', label: 'Final' }
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#FFF9F3]/90 backdrop-blur-md border-b border-[#C98291]/15 shadow-[0_4px_20px_-10px_rgba(52,39,40,0.06)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Subtle Title / Logo */}
        <button
          onClick={() => onNavigate('section-sorry')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#342728] group-hover:text-[#725567] transition-colors">
            A Thoughtful Apology
          </span>
          <span className="hidden sm:inline-block ml-2 text-xs font-handwriting text-[#C98291] tracking-wider">
            (remembering the details)
          </span>
        </button>

        {/* Desktop Nav Items */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#725567] text-[#FFFDFC] shadow-sm'
                    : 'text-[#342728]/70 hover:text-[#342728] hover:bg-[#C98291]/10'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {onShowCover && (
            <button
              onClick={onShowCover}
              title="Return to envelope cover"
              className="ml-1 sm:ml-2 text-xs text-[#725567]/70 hover:text-[#725567] px-2 py-1 rounded-md transition-colors"
            >
              Cover
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
