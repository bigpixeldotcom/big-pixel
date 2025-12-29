declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types';

  export const frontmatter: {
    title: string;
    subtitle?: string;
    date: string;
    coverImage?: string;
    excerpt?: string;
    description?: string;
    ogImage: string;
    twitterImage: string;
    preview?: boolean;
  };

  const MDXComponent: (props: MDXProps) => JSX.Element;
  export default MDXComponent;
}
