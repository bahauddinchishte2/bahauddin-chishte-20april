import React, { useRef, useEffect } from 'react';
import { blogPosts } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

interface BlogFilterProps {
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
}

export default function BlogFilter({ selectedTags, onTagToggle }: BlogFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="sticky top-16 z-30 bg-slate-950/95 backdrop-blur-sm py-4 border-b border-slate-800/50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
        {/* Left Shadow Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-950/95 to-transparent z-10" />
        
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 z-20 p-1.5 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Tags Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth mx-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <button
            onClick={() => onTagToggle('all')}
            className={`
              flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap
              ${selectedTags.length === 0
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'}
            `}
          >
            all posts
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={`
                flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap
                ${selectedTags.includes(tag)
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'}
              `}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Right Shadow Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-950/95 to-transparent z-10" />
        
        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 z-20 p-1.5 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}