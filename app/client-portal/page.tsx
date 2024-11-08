import { SignOutButton } from '@clerk/nextjs'

export default function NewsPage() {
  return (
    <main className='mt-12 max-w-7xl mx-6 md:mx-auto overflow-x-hidden'>
      <div className='flex flex-col gap-y-16'>
        <div className='max-w-4xl justify-start'>
          <h1 className='text-4xl lg:text-8xl font-black text-left'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600'>Client Portal</span>
          </h1>
        </div>
        <div className='mx-auto max-w-4xl'>
          <h2 className='text-4xl font-black text-primary'>Coming soon</h2>
          <p className='mt-3 text-lg'>I&apos;m currently working on some new projects and will be updating this page soon.</p>
          <SignOutButton />
        </div> 
      </div>    
    </main> 
  )
}