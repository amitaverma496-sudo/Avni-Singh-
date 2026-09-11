import React, { useState, useMemo } from 'react';
import { 
  Cookie, 
  Heart, 
  Utensils, 
  Soup, 
  ChefHat, 
  Scissors, 
  Sparkles, 
  Palette, 
  Moon, 
  Binary, 
  BookOpen, 
  Bookmark, 
  Compass, 
  Flame, 
  PawPrint, 
  Dog, 
  HeartHandshake, 
  Phone, 
  Eye, 
  Smile, 
  MessageCircle, 
  Target, 
  Shield, 
  Footprints, 
  UserCheck, 
  Zap, 
  Users,
  Search,
  CheckCircle2
} from 'lucide-react';
import { MEMORIES_DATA, MEMORY_CATEGORIES } from '../data/memories';
import { MemoryItem } from '../types';

const ICON_MAP: Record<string, React.ElementType> = {
  Cookie,
  Heart,
  Utensils,
  Soup,
  ChefHat,
  Scissors,
  Sparkles,
  Palette,
  Moon,
  Binary,
  BookOpen,
  Bookmark,
  Compass,
  Flame,
  PawPrint,
  Dog,
  HeartHandshake,
  Phone,
  Eye,
  Smile,
  MessageCircle,
  Target,
  Shield,
  Footprints,
  UserCheck,
  Zap,
  Users
};

export const SectionWhatIKnow: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredMemories = useMemo(() => {
    return MEMORIES_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        query === '' ||
        item.title.toLowerCase().includes(query) ||
        item.detail.toLowerCase().includes(query) ||
        (item.quoteOrNote && item.quoteOrNote.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="section-what-i-know" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-sans font-medium tracking-wide uppercase text-[#A8B5A0] bg-[#A8B5A0]/15 border border-[#A8B5A0]/30 mb-3">
            The Memory Board
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#342728] font-medium tracking-tight mb-3">
            What I Know About You
          </h2>
          <p className="text-base sm:text-lg text-[#725567] font-serif italic mb-2">
            &ldquo;Apparently, I pay more attention than I look like I do.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-[#342728]/60 font-sans">
            Every point below was drawn directly from our conversations. No assumptions.
          </p>
        </div>

        {/* Filter controls & Search */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {MEMORY_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#725567] text-[#FFFDFC] shadow-sm'
                      : 'bg-[#FFFDFC] text-[#342728]/75 border border-[#C98291]/20 hover:border-[#725567]/40 hover:bg-[#FFF9F3]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#725567]/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search memories..."
              className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm rounded-full bg-[#FFFDFC] border border-[#C98291]/20 text-[#342728] placeholder:text-[#342728]/40 focus:outline-none focus:border-[#725567] focus:ring-1 focus:ring-[#725567]"
            />
          </div>
        </div>

        {/* Memory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMemories.map((memory: MemoryItem) => {
            const IconComponent = ICON_MAP[memory.iconName] || Sparkles;
            return (
              <div
                key={memory.id}
                id={memory.id}
                className="group bg-[#FFFDFC] border border-[#C98291]/20 hover:border-[#C98291]/45 rounded-2xl p-6 shadow-[0_4px_20px_-8px_rgba(52,39,40,0.06)] hover:shadow-[0_12px_28px_-10px_rgba(114,85,103,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Category pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF9F3] border border-[#D9B779]/30 flex items-center justify-center text-[#725567] group-hover:scale-105 transition-transform duration-200">
                      <IconComponent className="w-5 h-5 text-[#C98291]" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-sans font-medium text-[#725567]/60 bg-[#725567]/5 px-2.5 py-0.5 rounded-full">
                      {memory.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-medium text-[#342728] mb-2 group-hover:text-[#725567] transition-colors">
                    {memory.title}
                  </h3>

                  {/* Fact Detail */}
                  <p className="text-sm font-sans text-[#342728]/80 leading-relaxed mb-4">
                    {memory.detail}
                  </p>
                </div>

                {/* Quote / Sub-note */}
                {memory.quoteOrNote && (
                  <div className="pt-3 border-t border-[#342728]/10 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A8B5A0] shrink-0" />
                    <p className="font-handwriting text-base text-[#725567] leading-snug">
                      {memory.quoteOrNote}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Counter footer */}
        <div className="mt-10 text-center">
          <p className="text-xs font-sans tracking-wide text-[#342728]/50">
            Showing {filteredMemories.length} of {MEMORIES_DATA.length} recorded memories
          </p>
        </div>
      </div>
    </section>
  );
};
