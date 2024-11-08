import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far, fab, IconDefinition } from '@awesome.me/kit-89a9106b13/icons';

type NavigationItem = {
  name: string;
  href: string;
  icon: IconDefinition;
};

const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/bigpixeldotcom/',
    icon: fab.faLinkedin
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/bigpixeldotcom/',
    icon: fab.faFacebook,
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/bigpixeldotcom.bsky.social',
    icon: fab.faBluesky,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/bigpixeldotcom/',
    icon: fab.faInstagram,
  },
  {
    name: 'Threads',
    href: 'https://www.threads.net/@bigpixeldotcom',
    icon: fab.faThreads,
  }
]

export default function ContactPage() {
  return (
    <main className='mt-12 max-w-7xl mx-6 md:mx-auto overflow-x-hidden'>
      <div className='flex flex-col gap-y-16'>
        <div className='max-w-4xl justify-start'>
          <h1 className='text-4xl lg:text-8xl font-black text-left'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600'>Big</span> Shout Out
          </h1>
        </div>
        <div className='mx-auto max-w-4xl'>
          <h2 className='text-xl lg:text-3xl font-black text-primary'>You can contact Big Pixel in the usual ways</h2>
          <div className='mt-8 flex flex-col gap-y-4'>
            <div className='group flex items-center gap-x-2 lg:gap-x-4'>
              <FontAwesomeIcon
                icon={far.faEnvelope}
                fixedWidth
                className='text-xl lg:text-2xl text-zinc-500 group-hover:text-primary transition-colors ease-in-out duration-300'
              />
              <a
                href='mailto:hello@big-pixel.com'
                className='text-base lg:text-xl text-zinc-300 group-hover:text-white transition-colors ease-in-out duration-300'
              >
                hello@big-pixel.com
              </a>
            </div>
            <div className='group flex items-center gap-x-2 lg:gap-x-4'>
              <FontAwesomeIcon
                icon={far.faPhoneOffice}
                fixedWidth
                className='text-xl lg:text-2xl text-zinc-500 group-hover:text-primary transition-colors ease-in-out duration-300'
              />
              <a
                href='tel:01692774886'
                className='text-base lg:text-xl text-zinc-300 group-hover:text-white transition-colors ease-in-out duration-300'
              >
                01692 774 886
              </a>
            </div>
          </div>
          <h2 className='mt-12 text-xl lg:text-3xl font-black text-primary'>And on socials</h2>
          <div className='mt-8 flex flex-col gap-y-4'>
            {navigation.map((item: NavigationItem) => (
              <Link
                key={item.name}
                href={item.href}
                target='_blank'
                className='group flex items-center gap-x-2 lg:gap-x-4'
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  fixedWidth
                  className='text-xl lg:text-2xl text-zinc-500 group-hover:text-primary transition-colors ease-in-out duration-300'
                />
                <span
                  className='text-base lg:text-xl text-zinc-300 group-hover:text-white transition-colors ease-in-out duration-300'
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div> 
      </div>    
    </main> 
  )
}