import PageStructure from '@/app/components/global/page-structure';
import FloatingButtons from '@/app/components/home/floating-buttons';
import NorwichHero from '@/app/components/home/norwich-hero';
import Clients from '@/app/components/home/clients';
import PriceGuide from '@/app/components/home/price-guide';
import ContactCTA from '@/app/components/global/contact-cta';

export default function Home() {
  return (
    <PageStructure>
      <main className="flex flex-col items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h1 className="font-headline text-3xl md:text-4xl text-center">
            A small, yet perfectly formed design studio
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-center">
            helping charities, non-profits, and ethical companies look as good as the work they do
          </p>
          <FloatingButtons />
        </div>
      </main>
      <NorwichHero />
      <Clients />
      <PriceGuide />
      <ContactCTA />
    </PageStructure>
  );
}
