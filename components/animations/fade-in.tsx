'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function FadeIn({
  amount,
  children
}: {
  amount: number,
  children: React.ReactNode
}) {

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: amount
  });

  return (
    <div ref={ref}>
      <div
        style={{
          opacity: isInView ? 1 : 0,
          transform: `scale(${isInView ? 100 : 50}%)`,
          transition: 'opacity 0.5s, transform 0.5s'
        }}
      >
        {children}
      </div>
    </div>
  )
}