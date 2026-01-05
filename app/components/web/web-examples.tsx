'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  { src: '/images/mycalibre-home.png', alt: 'My Calibre homepage' },
  { src: '/images/plankton-home.png', alt: 'Plankton homepage' },
  { src: '/images/mcnag-home.png', alt: 'McNag homepage' },
];

export default function WebExamples() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getPositionClasses = (index: number) => {
    const diff = (index - activeIndex + images.length) % images.length;

    if (diff === 0) {
      return 'z-30 scale-90 lg:scale-100 blur-0 translate-x-0';
    } else if (diff === 1) {
      return 'z-20 scale-50 lg:scale-75 blur-sm translate-x-[60%] -translate-y-8';
    } else {
      return 'z-10 scale-50 lg:scale-75 blur-sm -translate-x-[60%] -translate-y-8';
    }
  };

  return (
    <div className="mt-8 lg:mt-16 w-full h-[400px] lg:h-[640px] relative flex items-center justify-center perspective-1000">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-1000 ease-in-out transform ${getPositionClasses(
            index
          )}`}
          style={{
            width: index === activeIndex ? '100%' : '60%',
            maxWidth: index === activeIndex ? '1600px' : '600px',
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1600}
            height={1061}
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
