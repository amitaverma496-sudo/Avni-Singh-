import React, { useState } from 'react';
import { TIMELINE_MOMENTS } from '../data/timelineEvents';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

export const SectionTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(TIMELINE_MOMENTS[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="section-timeline" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-sans font-medium tracking-wide uppercase text-[#725567] bg-[#725567]/10 border border-[#725567]/20 mb-3">
            Chronology of Banter
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#342728] font-medium tracking-tight mb-3">
            Moments Along the Way
          </h2>
          <p className="text-sm sm:text-base text-[#342728]/70 font-sans">
            A small timeline of topics, inside jokes, and conversations we’ve had.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-[#C98291]/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {TIMELINE_MOMENTS.map((item, index) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                id={item.id}
                className="relative group transition-all duration-200"
              >
                {/* Timeline node dot */}
                <div 
                  className="absolute -left-[31px] sm:-left-[47px] top-4 w-4 h-4 rounded-full bg-[#FFF9F3] border-2 border-[#725567] group-hover:scale-125 group-hover:bg-[#C98291] transition-all duration-200 shadow-sm"
                />

                {/* Timeline Card */}
                <div 
                  onClick={() => toggleExpand(item.id)}
                  className="bg-[#FFFDFC] border border-[#C98291]/20 hover:border-[#725567]/40 rounded-xl p-5 sm:p-6 shadow-[0_4px_20px_-10px_rgba(52,39,40,0.05)] transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start sm:items-center justify-between gap-3 mb-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-[#C98291] bg-[#C98291]/10 px-2 py-0.5 rounded">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs font-sans font-medium text-[#725567] bg-[#725567]/10 px-2.5 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <button
                      aria-label="Toggle details"
                      className="text-[#725567]/60 hover:text-[#725567] p-1 rounded-md"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#342728] mb-2 group-hover:text-[#725567] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm font-sans text-[#342728]/80 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Expandable note */}
                  {isExpanded && item.note && (
                    <div className="mt-4 pt-3 border-t border-[#342728]/10 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#D9B779] shrink-0" />
                      <p className="font-handwriting text-base text-[#725567]">
                        {item.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
