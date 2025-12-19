import Link from 'next/link';
import PageStructure from '@/app/components/global/page-structure';
import FloatingButtons from '@/app/components/home/floating-buttons';
import NorwichHero from '@/app/components/home/norwich-hero';
import Clients from '@/app/components/home/clients';
import PriceGuide from '@/app/components/home/price-guide';

export default function Home() {
  return (
    <PageStructure>
      <div className="bg-linear-to-b from-grey-40 via-white to-white dark:from-black-950 dark:via-black-900 dark:to-black-900 min-h-4/6">
        <main className="min-h-4/6 flex flex-col items-center">
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
      <NorwichHero />
      <Clients />
      <PriceGuide />
      <div className="mx-auto w-full max-w-6xl px-6 my-16">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center lg:justify-between w-full p-9 outline-4 outline-foreground rounded-4xl">
          <div className="flex-1 flex-col gap-y-3">
            <h3 className="font-headline text-4xl font-black tracking-tight text-center lg:text-left">
              Get in touch
            </h3>
            <p className="text-lg text-center lg:text-left">
              Contact me to get a quote or discuss a project
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-y-3">
            <Link
              href="/contact"
              className="flex space-x-2.5 px-8 py-4 bg-green-500 hover:bg-green-600 transition-colors ease-in-out duration-300 rounded-2xl text-white font-headline font-black text-2xl"
            >
              Say hello 👋
            </Link>
            <p>Or call +44 (0)1692 774 886</p>
          </div>
        </div>
      </div>
    </PageStructure>
  );
}
