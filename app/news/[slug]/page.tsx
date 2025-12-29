import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllNews, formatDate } from '@/lib/api';
import markdownToHtml from '@/lib/markdown-to-html';

export async function generateStaticParams() {
  const posts = getAllNews();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = getAllNews().find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }

  const title = `Big Pixel | ${post.data.title}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.data.ogImage.url],
    },
  };
}

export default async function News({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getAllNews().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content || '');

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
