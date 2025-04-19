import { useState, useEffect, useCallback } from 'react';

export function useImageCarousel(images: string[], interval: number = 5000) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(nextImage, interval);
    return () => clearInterval(timer);
  }, [nextImage, interval]);

  return {
    currentImageIndex,
    nextImage,
    prevImage,
  };
}