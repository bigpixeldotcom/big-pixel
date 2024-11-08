import Image from 'next/image';
import { Digital1, Digital2 } from '@/markdown';
import {
  FadeUp,
  InFromLeft
} from '@/components/animations';
import Plankton1 from '@/public/images/digital/plankton-01.jpg';
import MyCalibre from '@/public/images/digital/my-calibre.png';

export default function PrintPage() {
  return (
    <main className='mt-12 max-w-7xl mx-6 md:mx-auto overflow-x-hidden'>
      <div className='flex flex-col gap-y-16'>
        <div className='max-w-4xl justify-start'>
          <h1 className='text-4xl lg:text-8xl font-black text-left'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600'>Big</span> in Digital
          </h1>
        </div>
        <div className='mx-auto max-w-4xl'>
          <FadeUp>
            <Image
              src={Plankton1}
              alt='The Plankton Project website'
              className='rounded-lg shadow-xl'
            />
          </FadeUp>
        </div> 
        <div className='mx-auto max-w-4xl'>
          <div className='prose prose-sm prose-pixel md:prose-base max-w-4xl'>
            <Digital1 />
          </div> 
        </div>
        <div className='mx-auto max-w-4xl'>
          <InFromLeft amount={0.5}>
            <Image
              src={MyCalibre}
              alt='The My Calibre website'
              height={740}
              className='ml-12'
            />
          </InFromLeft>
        </div> 
        <div className='-mt-8 mx-auto max-w-4xl'>
          <div className='prose prose-sm prose-pixel md:prose-base max-w-4xl'>
            <Digital2 />
          </div> 
        </div>
      </div>    
    </main> 
  )
}