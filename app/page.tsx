import PageStructure from '@/app/components/global/page-structure';
import Image from 'next/image';
import FloatingButtons from '@/app/components/home/floating-buttons';

export default function Home() {
  return (
    <PageStructure>
      <div className="bg-linear-to-b from-grey-40 via-white to-white dark:from-black-950 dark:via-black-900 dark:to-black-900 h-screen">
        <main className="h-full flex flex-col items-center">
          <div className="mx-auto pt-48 w-full max-w-6xl px-6">
            <h1 className="font-headline text-3xl md:text-4xl text-center">
              A small, yet perfectly formed design studio
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-center">
              helping charities, non-profits, and ethical companies look as good as the work they do
            </p>
            <FloatingButtons />
          </div>
        </main>
      </div>
    </PageStructure>
  );
}
