import PageStructure from '@/app/components/global/page-structure';
import ContactForm from '@/app/components/contact/contact-form';
import { Toaster } from 'sonner';

export default function AboutPage() {
  return (
    <PageStructure>
      <Toaster />
      <div className="min-h-4/6">
        <main className="min-h-screen flex flex-col">
          <div className="mx-auto w-full max-w-6xl px-6">
            <h1 className="font-headline font-black text-4xl md:text-6xl tracking-tight leading-12 md:leading-18">
              Contact me
            </h1>
            <h2 className="mt-8 md:mt-12 font-semibold text-2xl md:text-4xl leading-normal">
              I primarily work with charities, non-profits, and ethical organisations. With personal
              charity experience, I understand funding cycles, committee decisions, and balancing
              ambition with budget. I build ongoing partnerships to support your goals as your needs
              evolve. If that sounds like what you&apos;re after, get in touch.
            </h2>
            <ContactForm />
          </div>
        </main>
      </div>
    </PageStructure>
  );
}
