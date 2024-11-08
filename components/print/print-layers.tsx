'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import edmBlack from '@/public/images/print/edm-black.jpg';
import edmCyan from '@/public/images/print/edm-cyan.jpg';
import edmMagenta from '@/public/images/print/edm-magenta.jpg';
import edmYellow from '@/public/images/print/edm-yellow.jpg';

export default function PrintLayers() {

  gsap.registerPlugin(ScrollTrigger);

  const blackRef = useRef(null);
  const cyanRef = useRef(null);
  const magentaRef = useRef(null);
  const yellowRef = useRef(null);
  const bgRef = useRef(null);
  const frameRef = useRef(null);
  
  useGSAP(() => {
    gsap.fromTo(
      frameRef.current,
      { opacity: 0.2 },
      { opacity: 1, duration: 1, ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.animation',
          start: 'top 25%',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true
        }
      }
    );
    gsap.fromTo(
      bgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.animation',
          start: 'top 25%',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true
        }
      }
    );
    gsap.fromTo(
      blackRef.current,
      { x: -2400 },
      { x: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: {
          trigger: '.animation',
          start: 'top middle',
          end: 'bottom middle',
          scrub: true,
          invalidateOnRefresh: true
        }
      }
    );
    gsap.fromTo(
      cyanRef.current,
      { x: 2400 },
      { x: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: {
          trigger: '.animation',
          start: 'top middle',
          end: 'bottom middle',
          scrub: true,
          invalidateOnRefresh: true
        }
      }
    );
    gsap.fromTo(
      magentaRef.current,
      { x: -3600 },
      { x: 0, duration: 3, ease: 'power2.out',
        scrollTrigger: {
          trigger: '.animation',
          start: 'top middle',
          end: 'bottom middle',
          scrub: true,
          invalidateOnRefresh: true
        }
      }
    );
    gsap.fromTo(
      yellowRef.current,
      { x: 3600 },
      { x: 0, duration: 4, ease: 'power2.out',
        scrollTrigger: {
          trigger: '.animation',
          start: 'top middle',
          end: 'bottom middle',
          pin: true,
          scrub: true,
          invalidateOnRefresh: true
        }
      }
    );
  }, []);

  
  return (
      <div className='relative'>
        <div className='relative animation top-8 lg:top-16 h-[352px] w-72 lg:h-[784px] lg:w-[720px]'>
          <Image
            ref={blackRef}
            src={edmBlack}
            alt='EDM Black'
            width={720}
            height={720}
            className='absolute mt-8 lg:mt-16 z-10 mix-blend-multiply rounded-lg'
          />
          <Image
            ref={cyanRef}
            src={edmCyan}
            alt='EDM Cyan'
            width={720}
            height={720}
            className='absolute mt-8 lg:mt-16 z-10 mix-blend-multiply rounded-lg'
          />
          <Image
            ref={magentaRef}
            src={edmMagenta}
            alt='EDM Magenta'
            width={720}
            height={720}
            className='absolute mt-8 lg:mt-16 z-10 mix-blend-multiply rounded-lg'
          />
          <Image ref={yellowRef}
            src={edmYellow}
            alt='EDM Yellow'
            width={720}
            height={720}
            className='absolute mt-8 lg:mt-16 z-10 mix-blend-multiply rounded-lg'
          />
          <div ref={bgRef} className='z-0 absolute top-8 lg:top-16 h-72 w-72 lg:w-[720px] lg:h-[720px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-zinc-200 rounded-lg' />
          <div ref={frameRef} className='z-20 absolute top-8 lg:top-16 h-72 w-72 lg:w-[720px] lg:h-[720px] border-8 border-white rounded-xl' />
        </div>
      </div>
  )
};