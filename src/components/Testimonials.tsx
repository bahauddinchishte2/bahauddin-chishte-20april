import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-rotate testimonials every 7 seconds, unless paused
  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(nextTestimonial, 7000);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, isPaused]);

  return (
    <section 
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" 
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          What People Say
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          Feedback from colleagues, clients, and collaborators.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto my-10">
        {/* Testimonials Carousel */}
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`
                transition-all duration-500 absolute w-full
                ${index === activeIndex ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 -z-10'}
              `}
              style={{ display: index === activeIndex ? 'block' : 'none' }}
            >
              <div className="bg-slate-900/50 rounded-xl p-6 md:p-8 border border-slate-800/50 relative">
                {/* Quote Icon */}
                <div className="absolute -top-5 -left-2 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-blue-400" />
                </div>
                
                {/* Rating Stars */}
                {testimonial.rating && (
                  <div className="flex items-center gap-1 mb-4 ml-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating! 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Testimonial Content */}
                <blockquote className="text-slate-300 italic text-lg leading-relaxed mb-6 ml-8">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center mt-8 gap-3">
          <button
            onClick={prevTestimonial}
            className="p-2 bg-slate-900 text-slate-400 hover:text-white rounded-full transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-blue-500 w-4' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="p-2 bg-slate-900 text-slate-400 hover:text-white rounded-full transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}