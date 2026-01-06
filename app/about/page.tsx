import Image from 'next/image';
import PageStructure from '@/app/components/global/page-structure';
import About, { frontmatter } from '@/markdown/about.mdx';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: frontmatter.title,
  description: `Big Pixel - ${frontmatter.description}`,
  openGraph: {
    title: frontmatter.title,
    description: `Big Pixel - ${frontmatter.description}`,
    url: 'https://big-pixel.com/about',
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
          <div className="mx-auto w-full max-w-6xl px-6 mb-12 md:mb-24">
            <div className="mb-8 md:mb-12 grid grid-cols-6 items-center gap-6">
              <div className="col-span-full md:col-span-3 lg:col-span-4">
                <h1 className="font-headline font-black text-4xl md:text-6xl tracking-tight leading-12 md:leading-18">
                  {frontmatter.title}
                </h1>
                <h2 className="mt-8 md:mt-12 font-semibold text-2xl md:text-4xl">
                  {frontmatter.subtitle}
                </h2>
              </div>
              <div className="col-span-full md:col-span-3 lg:col-span-2">
                <Image
                  src={frontmatter.coverImage ?? '/pages/headshot-1080-gradient.png'}
                  width={1024}
                  height={1024}
                  alt="Portrait photo of James Beston"
                  className="rounded-xl md:rounded-3xl shadow-md"
                />
              </div>
            </div>
            <About />
          </div>
        </main>
      </div>
    </PageStructure>
  );
}
