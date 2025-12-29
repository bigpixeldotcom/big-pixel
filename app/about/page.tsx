import PageStructure from '@/app/components/global/page-structure';
import About, { frontmatter } from '@/markdown/about.mdx';

export default function AboutPage() {
  console.log('metadata', frontmatter);

  return (
    <PageStructure>
      <div className="bg-linear-to-b from-grey-40 via-white to-white dark:from-black-950 dark:via-black-900 dark:to-black-900 min-h-4/6">
        <main className="min-h-4/6 flex flex-col items-center">
          {frontmatter.title}
          <p>{frontmatter.excerpt}</p>
          <About />
        </main>
      </div>
    </PageStructure>
  );
}
