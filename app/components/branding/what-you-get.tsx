import Image from 'next/image';

const brandItems = [
  {
    id: 'logo-design',
    title: 'Logo design',
    image: '/pages/logo-design.png',
    alt: '',
    text: "Your logo in every format you'll need — web, print, social media, mono versions for when colour isn't an option. Files you can actually use, not just a single JPEG.",
  },
  {
    id: 'colour-palette',
    title: 'Colour palette',
    image: '/pages/colours.png',
    alt: '',
    text: 'A considered set of colours that work together and work everywhere. I use Pantone® as the basis for all colour choices, which means what you see on screen will be as close as possible to what you get in print (no nasty surprises when the brochures arrive).',
  },
  {
    id: 'typography',
    title: 'Typography',
    image: '/pages/typography.png',
    alt: '',
    text: "Fonts that reflect your personality and work across all your materials. I'll consider licensing, web performance, and accessibility — not just what looks nice in a pitch deck.",
  },
  {
    id: 'brand-guidelines',
    title: 'Brand guidelines',
    image: '/pages/guidelines.png',
    alt: '',
    text: 'A clear, practical document that shows your team (and anyone else you work with) how to use everything consistently. Not a 60-page PDF no one reads but something actually useful.',
  },
  {
    id: 'applications',
    title: 'Applications',
    image: '/pages/stationery.jpg',
    alt: '',
    text: 'How the brand looks in the real world: letterheads, email signatures, social templates, event materials. Enough to get you started without overwhelming you.',
  },
];
export default function WhatYouGet() {
  return (
    <div className="mt-6 grid grid-cols-2 lg:grid-cols3 gap-4 lg:gap-8">
      {brandItems.map((item) => (
        <div key={item.id} className="flex flex-col items-start space-y-4">
          <h3 className="font-black text-xl md:text-2xl text-metal-700 dark:text-metal-300">
            {item.title}
          </h3>
          <Image
            src={item.image}
            alt={item.alt}
            width={960}
            height={960}
            className="mx-auto rounded-2xl md:rounded-4xl w-full shadow-md"
          />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
