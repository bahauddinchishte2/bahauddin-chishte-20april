import React, { useRef, useEffect, useState } from 'react';
import { companies } from '../data/companies';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Companies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollAmount = 1; // Pixels to scroll per frame
  
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollAnimation = () => {
    if (scrollContainerRef.current && !isPaused) {
      scrollContainerRef.current.scrollLeft += scrollAmount;
      
      // If we've scrolled to the end, reset to start
      if (scrollContainerRef.current.scrollLeft >= 
          scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) {
        scrollContainerRef.current.scrollLeft = 0;
      }
      
      animationRef.current = requestAnimationFrame(scrollAnimation);
    } else if (isPaused && animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  // Set up autoscroll
  useEffect(() => {
    if (!isPaused) {
      animationRef.current = requestAnimationFrame(scrollAnimation);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section 
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" 
      id="companies"
    >
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Companies I've Worked With
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          Organizations where I've contributed my skills and expertise.
        </p>
      </div>

      <div className="relative">
        {/* Scroll Left Button */}
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-slate-900/70 text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        {/* Companies Container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto py-4 pb-6 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="flex gap-6 min-w-max">
            {companies.map((company) => (
              <div 
                key={company.id}
                className="flex flex-col bg-slate-900/50 rounded-lg border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 w-64"
              >
                <div className="p-6 flex flex-col items-center gap-4">
                  <div className="h-20 w-full flex items-center justify-center p-4 overflow-hidden">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {company.name}
                    </h3>
                    {company.role && (
                      <p className="text-blue-400 text-sm mb-1">
                        {company.role}
                      </p>
                    )}
                    {company.period && (
                      <p className="text-slate-400 text-xs">
                        {company.period}
                      </p>
                    )}
                  </div>
                  
                  {company.url && (
                    <a 
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      <span>Visit website</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Right Button */}
        <button 
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-slate-900/70 text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}