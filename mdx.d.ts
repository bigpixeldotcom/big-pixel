declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types';

  export const frontmatter: {
    title: string;
    date: string;
    coverImage: string;
    excerpt: string;
    ogImage: {
      url: string;
    };
    preview?: boolean;
  };

  const MDXComponent: (props: MDXProps) => JSX.Element;
  export default MDXComponent;
}
