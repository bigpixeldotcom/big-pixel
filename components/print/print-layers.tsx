'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import EveryC from '@/public/images/print/everythingC.jpg';
import EveryM from '@/public/images/print/everythingM.jpg';
import EveryY from '@/public/images/print/everythingY.jpg';
import EveryK from '@/public/images/print/everythingK.jpg';

export default function PrintLayers() {

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: 1
  });


  return (
    <div className='relative w-[312px] h-[240px] md:w-[660px] md:h-[420px] lg:w-[896px] lg:h-[672px]' ref={ref}>
      <div>
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: `translate(${inView ? `0px, 0px` : `-200px, 100px`})`,
            transition: 'opacity 0.5s, transform 0.5s'
          }}
        >
          <Image src={EveryK} alt="K-plate" className='absolute top-0 left-0 rounded-lg' />
        </div>
      </div>
      <div className='mix-blend-multiply'>
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: `translate(${inView ? `0px, 0px` : `180px, -100px`})`,
            transition: 'opacity 1s, transform 1s'
          }}
        >
          <Image src={EveryY} alt="Y-plate" className='absolute top-0 left-0 rounded-lg' />
        </div>
      </div>
      <div className='mix-blend-multiply'>
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: `translate(${inView ? `0px, 0px` : `-320px, -120px`})`,
            transition: 'opacity 1.5s, transform 1.5s'
          }}
        >
          <Image src={EveryM} alt="M-plate" className='absolute top-0 left-0 rounded-lg' />
        </div>
      </div>
      <div className='mix-blend-multiply'>
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: `translate(${inView ? `0px, 0px` : `40px, 50px`})`,
            transition: 'opacity 2s, transform 2s'
          }}
        >
          <Image src={EveryC} alt="C-plate" className='absolute top-0 left-0 rounded-lg' />
        </div>
      </div>
    </div>
  )
}