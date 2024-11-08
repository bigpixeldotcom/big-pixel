import Image from 'next/image';
import { Branding, Branding2 } from '@/markdown';
import {
  FadeUp,
  InFromLeft,
  InFromRight,
  FadeIn
} from '@/components/animations';
import MKDFtext from '@/public/images/print/mkdf-full-txt.jpg';
import MKDFimage from '@/public/images/print/mkdf-header.jpg'
import MKDFColours from '@/public/images/print/mkdf-img-01.jpg';
import Dickens from '@/public/images/print/dickens.jpg';

export default function PrintPage() {
  return (
    <main className='mt-12 max-w-7xl mx-6 md:mx-auto overflow-x-hidden'>
      <div className='flex flex-col gap-y-16'>
        <div className='max-w-4xl justify-start'>
          <h1 className='text-4xl lg:text-8xl font-black text-left'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600'>Big</span> in Print
          </h1>
        </div>
        <div className='mx-auto max-w-4xl'>
          <FadeUp>
            <Image
              src={MKDFimage}
              alt='MKDF typeface sketch'
              className='rounded-lg shadow-xl'
            />
          </FadeUp>
        </div>   
        <div className='prose prose-sm prose-pixel md:prose-base max-w-4xl'>
          <Branding />
        </div> 
        <div className='mx-auto max-w-4xl'>
          <InFromLeft amount={1}>
            <div className='p-8 bg-white rounded-t-lg shadow-xl'>
              <Image
                src={MKDFtext}
                alt='MKDF full typeface'
                className=''
              />
            </div>
          </InFromLeft>
          <InFromRight amount={0.5}>
            <div className='mt-2 px-8 py-12 bg-white rounded-b-lg shadow-xl'>
              <Image
                src={MKDFColours}
                alt='MKDF full colours'
                className=''
              />
            </div>
          </InFromRight>
        </div>  
        <div className='prose prose-sm prose-pixel md:prose-base max-w-4xl'>
          <Branding2 />
        </div>
        <div className='mx-auto max-w-4xl'>
          <FadeIn amount={0.5}>
            <Image
              src={Dickens}
              alt='Dickens Fellowship staionary'
              className='rounded-lg shadow-xl'
            />
          </FadeIn>
        </div>
      </div>    
    </main> 
  )
}