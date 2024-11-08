import Cube from '@/components/cube';
export default function HomePage() {
  return (
    <main className='my-auto'>
      <div className='mx-auto w-96 h-96'>
        <div className='pb-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-yellow-300/30 via-zinc-800 to-zinc-800'>
          <div className='flex justify-center items-start h-full backdrop-blur-lg'>
            <Cube />
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-6 md:mx-auto -mt-12 mb-12'>
        <div className='flex flex-col gap-y-8 justify-center items-center'>
          <h1 className='text-6xl md:text-8xl font-black text-center'>Big Pixel</h1>
          <p className='text-center text-base md:text-2xl text-zinc-300'>
            A small, yet perfectly formed design agency
          </p>
        </div>
      </div>
    </main>
  );
}
