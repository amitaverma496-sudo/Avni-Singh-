import React, { useState, useEffect } from 'react';
import { OpeningCard } from './components/OpeningCard';
import { Navbar } from './components/Navbar';
import { SectionSorry } from './components/SectionSorry';
import { SectionWhatIKnow } from './components/SectionWhatIKnow';
import { SectionPersonality } from './components/SectionPersonality';
import { SectionQuiz } from './components/SectionQuiz';
import { SectionUnsaid } from './components/SectionUnsaid';
import { SectionTimeline } from './components/SectionTimeline';
import { SectionLighthearted } from './components/SectionLighthearted';
import { SectionFinalReveal } from './components/SectionFinalReveal';
import { Footer } from './components/Footer';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [hasOpened, setHasOpened] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('section-sorry');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Setup IntersectionObserver for active navigation highlight
  useEffect(() => {
    if (!hasOpened) return;

    const sections = [
      'section-sorry',
      'section-what-i-know',
      'section-personality',
      'section-quiz',
      'section-unsaid',
      'section-timeline',
      'section-lighthearted',
      'section-final'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasOpened]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFF9F3] text-[#342728] selection:bg-[#C98291]/20 selection:text-[#342728]">
      {!hasOpened ? (
        <OpeningCard onOpen={() => setHasOpened(true)} />
      ) : (
        <div className="animate-in fade-in duration-700">
          {/* Top minimal navigation */}
          <Navbar
            activeSection={activeSection}
            onNavigate={scrollToSection}
            onShowCover={() => setHasOpened(false)}
          />

          {/* Section 1: The Sincere Apology */}
          <SectionSorry />

          {/* Section 2: What I Know About You (Memory Board) */}
          <SectionWhatIKnow />

          {/* Section 3: Things That Make You... You (Personality Observations) */}
          <SectionPersonality />

          {/* Section 4: Mini Quiz (Do you remember?) */}
          <SectionQuiz />

          {/* Section 5: A Few Things I Didn't Say (Muted Plum Pause) */}
          <SectionUnsaid />

          {/* Section 6: Memory Timeline */}
          <SectionTimeline />

          {/* Section 7: The Lighthearted Part */}
          <SectionLighthearted />

          {/* Section 8: The Final Reveal & Forgiveness Choice */}
          <SectionFinalReveal />

          {/* Footer */}
          <Footer />

          {/* Scroll to Top Floating Button */}
          {showScrollTop && (
            <button
              id="scroll-to-top-button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#FFFDFC] text-[#725567] border border-[#C98291]/25 shadow-lg hover:bg-[#FFF9F3] hover:border-[#725567]/40 transition-all duration-200 cursor-pointer"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
