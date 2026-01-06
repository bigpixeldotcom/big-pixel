import PageStructure from '@/app/components/global/page-structure';
import What, { frontmatter } from '@/markdown/what.mdx';
import ContactCTA from '@/app/components/global/contact-cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: frontmatter.title,
  description: `Big Pixel - ${frontmatter.description}`,
  openGraph: {
    title: frontmatter.title,
    description: `Big Pixel - ${frontmatter.description}`,
    url: 'https://big-pixel.com/what',
    siteName: 'Big Pixel',
    images: [
      {
        url: frontmatter.ogImage,
        width: 1200,
        height: 630,
        alt: 'Big Pixel - Web design for non-profits and ethical organisations',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: frontmatter.title,
    description: `Big Pixel - ${frontmatter.description}`,
    images: [
      {
        url: frontmatter.twitterImage,
        width: 1200,
        height: 675,
        alt: 'Big Pixel - Web design for non-profits and ethical organisations',
      },
    ],
  },
};

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
            <What />
          </div>
          <ContactCTA />
        </main>
      </div>
    </PageStructure>
  );
}
