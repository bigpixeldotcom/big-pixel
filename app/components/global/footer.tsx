import Image from 'next/image';
import Link from 'next/link';

const legals = [
  {
    name: 'Privacy notice',
    href: '/notice',
  },
  {
    name: 'Cookie policy',
    href: '/cookies',
  },
  {
    name: 'Privacy settings',
    href: '/privacy',
  },
];

export default function Footer() {
  return (
    <footer className="bg-black-900 dark:bg-black text-white">
      <div className="py-16 mx-auto max-w-6xl px-6">
        <div className="w-full flex flex-col gap-y-4 lg:flex-row justify-between">
          <div className="flex flex-col gap-y-2">
            <span className="sr-only">Big Pixel</span>
            <Image src="/brand/big-pixel-text.svg" width={118} height={28} alt="" />
            <p className="text-sm">
              &copy; 2025 Big Pixel Consulting Ltd. trading as Big Pixel
              <br />
              <span className="text-xs">
                Big Pixel&reg; is a registered trademark in the United Kingdom.
              </span>
            </p>
            <p className="text-xs">
              Registered in England and Wales No. 15928040.
              <br />
              Registered address: Hardwick House, Agricultural Hall Plain, Norwich, England, NR1 3FS
            </p>
          </div>
          <div className="flex flex-col lg:justify-end gap-y-2">
            <ul role="list" className="text-sm space-y-3 lg:text-right">
              {legals.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
