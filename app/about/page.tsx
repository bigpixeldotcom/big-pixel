import Image from 'next/image';
import Profile from '@/public/images/about/profile.jpg';
import Currys from '@/public/images/about/currys.svg';
import PCWorld from '@/public/images/about/pcworld.svg';
import AIS from '@/public/images/about/ais.svg';
import Calibre from '@/public/images/about/calaudio.svg';
import { About1 } from '@/markdown';

export default function PrintPage() {
  return (
    <main className='mt-12 max-w-7xl mx-6 md:mx-auto overflow-x-hidden'>
      <div className='flex flex-col gap-y-16'>
        <div className='max-w-4xl justify-start'>
          <h1 className='text-4xl lg:text-8xl font-black text-left'>
            A <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600'>Big</span> Hello
          </h1>
        </div>
        <div className='mx-auto max-w-4xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
            <div className='col-span-1 space-y-8'>
              <Image
                src={Profile}
                alt='Adrian Beston'
                className='rounded-lg shadow-xl'
              />
              <div className='flex p-4 border-2 border-zinc-600 rounded-lg'>
                <div className='flex flex-col gap-y-2'>
                  <h2 className='text-2xl font-black text-primary'>TL;DR</h2>
                  <p className='text-lg'>I make pretty pictures and websites that allow you to do what you do best.</p>
                </div>
              </div>
              <div className='my-6 flex flex-col items-center gap-y-12'>
                <Image
                  src={Currys}
                  alt='Currys'
                  height={32}
                  className='opacity-60'
                />
                <Image
                  src={PCWorld}
                  alt='Currys'
                  height={32}
                  className='opacity-60'
                />
                <Image
                  src={AIS}
                  alt='Currys'
                  height={32}
                  className='opacity-60'
                />
                <Image
                  src={Calibre}
                  alt='Currys'
                  height={32}
                  className='opacity-60'
                />
              </div>             
            </div>
            <div className='mt-12 lg:mt-0 col-span-2 prose prose-sm prose-pixel md:prose-base'>
              <About1 />
            </div>
          </div>
        </div> 
      </div>    
    </main> 
  )
}