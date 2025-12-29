import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCopyright,
  faGearCode,
  faRectangleCode,
  faPaintbrushPencil,
} from '@awesome.me/kit-89a9106b13/icons/classic/regular';
import clsx from 'clsx';

const services = [
  {
    name: 'branding',
    href: '/branding',
    icon: faCopyright,
    colour: 'text-red-700 dark:text-white',
    tint: 'bg-red-50/50 dark:bg-red-700',
    description:
      'The foundation that everything else builds from. Logo, visual identity, tone of voice; these are the things that make your organisation recognisable and coherent.',
  },
  {
    name: 'web design',
    href: '/web',
    icon: faRectangleCode,
    colour: 'text-green-700 dark:text-white',
    tint: 'bg-green-50/50 dark:bg-green-500',
    description:
      "How your website looks and feels. User experience, layout, typography – the stuff that makes visitors trust you before they've read a word.",
  },
  {
    name: 'digital development',
    href: '/development',
    icon: faGearCode,
    colour: 'text-blue-700 dark:text-white',
    tint: 'bg-blue-50/50 dark:bg-blue-500',
    description:
      "How your website actually works. I build in modern frameworks, prioritise accessibility and performance, and can create custom functionality when off-the-shelf tools don't cut it.",
  },
  {
    name: 'graphic design',
    href: '/graphic',
    icon: faPaintbrushPencil,
    colour: 'text-purple-700 dark:text-white',
    tint: 'bg-purple-50/50 dark:bg-purple-700',
    description:
      "The printed stuff and everything else: reports, publications, event materials, social assets. My background is in print, so this isn't an afterthought.",
  },
];

export default function Services() {
  return (
    <div className="my-12 md:my-16 w-full md:w-3/4 mx-auto">
      <ul role="list" className="flex flex-col gap-y-12">
        {services.map((service) => (
          <li
            key={service.href}
            className={clsx(service.tint, 'flex flex-col gap-y-4 px-6 py-8 rounded-3xl')}
          >
            <h3 className={clsx(service.colour, 'text-3xl md:text-5xl font-headline font-black')}>
              <span aria-hidden="true" className="mr-2">
                <FontAwesomeIcon icon={service.icon} />
              </span>
              {service.name}
            </h3>
            <p className="text-lg md:text-xl text-black dark:text-white/90">
              {service.description}
            </p>
            <Link href={service.href} className={clsx(service.colour, 'font-semibold')}>
              Learn more about {service.name}&hellip;
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
