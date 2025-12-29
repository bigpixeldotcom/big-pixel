'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopyright,
  faGearCode,
  faRectangleCode,
  faPaintbrushPencil,
} from '@awesome.me/kit-89a9106b13/icons/classic/regular';

export default function FloatingButtons() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div>
      <div className="absolute left-0 w-full z-10">
        <div className="lg:mt-30 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-y-8 lg:flex-row items-center lg:items-stretch justify-center lg:justify-around">
            <Link href="/branding">
              <button
                type="button"
                className={clsx(
                  'mt-16 lg:mr-6 float-1 bg-red-600 text-white text-lg md:text-2xl lg:text-3xl font-headline font-black px-8 md:px-12 lg:px-14 py-4 md:py-6 lg:py-7 rounded-full shadow-2xl cursor-pointer flex items-center justify-center',
                  isHovered && 'paused'
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
              >
                <FontAwesomeIcon icon={faCopyright} />
                <span className="ml-2">branding</span>
              </button>
            </Link>
            <Link href="/development">
              <button
                type="button"
                className={clsx(
                  'lg:mt-24 lg:ml-6 float-2 bg-blue-300 dark:bg-blue-500 text-white text-lg md:text-2xl lg:text-3xl font-headline font-black px-8 md:px-12 lg:px-14 py-4 md:py-6 lg:py-7 rounded-full shadow-2xl cursor-pointer flex items-center justify-center',
                  isHovered && 'paused'
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
              >
                <FontAwesomeIcon icon={faGearCode} />
                <span className="ml-2">digital development</span>
              </button>
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-y-8 lg:flex-row items-center lg:items-stretch justify-center lg:justify-around px-24">
            <Link href="/web">
              <button
                type="button"
                className={clsx(
                  'lg:mt-6 lg:mr-6 float-3 bg-green-400 dark:bg-green-500 text-white text-lg md:text-2xl lg:text-3xl font-headline font-black px-8 md:px-12 lg:px-14 py-4 md:py-6 lg:py-7 rounded-full shadow-2xl cursor-pointer flex items-center justify-center',
                  isHovered && 'paused'
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
              >
                <FontAwesomeIcon icon={faRectangleCode} />
                <span className="ml-2">web design</span>
              </button>
            </Link>
            <Link href="/graphic">
              <button
                type="button"
                className={clsx(
                  'lg:mt-18 lg:ml-6 float-4 bg-purple-700 text-white text-lg md:text-2xl lg:text-3xl font-headline font-black px-8 md:px-12 lg:px-14 py-4 md:py-6 lg:py-7 rounded-full shadow-2xl cursor-pointer flex items-center justify-center',
                  isHovered && 'paused'
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
              >
                <FontAwesomeIcon icon={faPaintbrushPencil} />
                <span className="ml-2">graphic design</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[540px] lg:h-[720px] pixel-grid" />
    </div>
  );
}
