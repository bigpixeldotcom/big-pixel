import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-8 md:mb-12 font-headline font-black text-4xl md:text-6xl tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-3 md:mt-6 font-headline font-black text-2xl md:text-3xl text-metal-700 dark:text-metal-300">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-3 md:mt-6 font-black text-xl md:text-2xl text-metal-700 dark:text-metal-300">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-3 md:mt-6 font-bold text-xl md:text-2xl text-metal-600 dark:text-metal-400">
      {children}
    </h4>
  ),
  p: ({ children }) => <p className="mt-3 md:mt-6 text-base md:text-lg">{children}</p>,
  ul: ({ children }) => <ul className="my-6 text-base md:text-lg">{children}</ul>,
  li: ({ children }) => <li className="my-3 list-disc">{children}</li>,
  hr: () => <hr className="h-px my-6 md:my-12 bg-metal-100 dark:bg-metal-800 border-0 mx-3" />,
  img: (props) => (
    <Image
      sizes="100vw"
      width={1024}
      height={1024}
      className="mx-auto rounded-2xl md:rounded-4xl w-full md:w-3/4"
      {...(props as ImageProps)}
    />
  ),
  table: ({ children }) => (
    <table className="relative min-w-full divide-y divide-metal-400 dark:divide-white/15">
      {children}
    </table>
  ),
  th: ({ children }) => (
    <th
      scope="col"
      className="px-3 py-3.5 text-left text-sm font-semibold text-metal-900 sm:pl-6 dark:text-white"
    >
      {children}
    </th>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-metal-200 dark:divide-white/10">{children}</tbody>
  ),
  td: ({ children }) => (
    <td className="px-3 py-4 text-sm whitespace-wrap text-metal-600 dark:text-metal-400">
      {children}
    </td>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
