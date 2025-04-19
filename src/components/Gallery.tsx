import React, { useState, useRef } from 'react';
import { galleryImages } from '../data';
import { Image, ChevronLeft, ChevronRight, X, Info, ExternalLink } from 'lucide-react';

interface ImageModalProps {
  image: typeof galleryImages[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function ImageModal({ image, onClose, onPrev, onNext }: ImageModalProps) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex flex-col justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl w-full max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image container */}
        <div className="relative flex-1 overflow-hidden">
          <img 
            src={image.fullImage} 
            alt={image.title} 
            className="w-full h-full object-contain"
          />
          
          {/* Controls container */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button 
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Top controls */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button 
              onClick={() => setShowInfo(!showInfo)}
              className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              aria-label="Image information"
            >
              <Info className="w-5 h-5" />
            </button>
            <a 
              href={image.fullImage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              onClick={(e) => e.stopPropagation()}
              aria-label="Open in new tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button 
              onClick={onClose}
              className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Image info */}
          {showInfo && (
            <div className="absolute bottom-0 inset-x-0 bg-black/70 text-white p-4 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
              <p className="text-slate-300">{image.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[prevIndex]);
    }
  };

  const handleNext = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'work', label: 'Work' },
    { id: 'meeting', label: 'Meetings' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'event', label: 'Events' },
    { id: 'other', label: 'Other' }
  ];

  // Create chunks of images for proper display
  const createImageRows = (images: typeof galleryImages) => {
    const rows = [];
    for (let i = 0; i < images.length; i += 3) {
      rows.push(images.slice(i, i + 3));
    }
    return rows;
  };

  const imageRows = createImageRows(filteredImages);

  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="gallery">
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Gallery
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          A visual journey of my work, teaching, and collaborative experiences.
        </p>
      </div>
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/50 rounded-xl mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`
              flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg transition-all text-sm sm:text-base
              ${selectedCategory === category.id 
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}
            `}
          >
            <span className="font-medium">{category.label}</span>
          </button>
        ))}
      </div>

      {/* Gallery Grid with Horizontal Scroll */}
      <div className="relative">
        {/* Scroll Left Button */}
        <button 
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-slate-900/70 text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-4">
            {imageRows.map((row, rowIndex) => (
              <div key={`row-${rowIndex}`} className="flex flex-col gap-4">
                {row.map((image) => (
                  <div 
                    key={image.id}
                    className="w-64 h-48 relative overflow-hidden rounded-lg group cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image.thumbnail} 
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-medium text-sm line-clamp-1">{image.title}</h3>
                      <p className="text-slate-300 text-xs line-clamp-1">{image.description}</p>
                    </div>
                  </div>
                ))}
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
      
      {/* Modal for enlarged image view */}
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}