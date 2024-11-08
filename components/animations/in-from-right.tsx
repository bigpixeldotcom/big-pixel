'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function InFromRight({
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
          transform: `translateX(${isInView ? 0 : 200}%)`,
          transition: 'opacity 0.5s, transform 0.5s'
        }}
      >
        {children}
      </div>
    </div>
  )
}