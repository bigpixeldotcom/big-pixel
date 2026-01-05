import PageStructure from '@/app/components/global/page-structure';
import Graphic, { frontmatter } from '@/markdown/graphic.mdx';
import ContactCTA from '@/app/components/global/contact-cta';

export default function AboutPage() {
  return (
    <PageStructure>
      <div className="min-h-4/6">
        <main className="min-h-screen flex flex-col">
          <div className="mx-auto w-full max-w-6xl px-6">
            <h1 className="font-headline font-black text-4xl md:text-6xl tracking-tight leading-12 md:leading-18">
              {frontmatter.title}
            </h1>
            <h2 className="mt-8 md:mt-12 font-semibold text-2xl md:text-4xl leading-normal">
              {frontmatter.subtitle}
            </h2>
            <Graphic />
          </div>
          <ContactCTA />
        </main>
      </div>
    </PageStructure>
  );
}
