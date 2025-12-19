import Image from 'next/image';

export default function Clients() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 my-16">
      <h2 className="text-center text-lg lg:text-xl font-semibold">
        Some of the organisations I&apos;ve worked with
      </h2>
      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 lg:grid-cols-4 items-center gap-x-16 gap-y-10">
        <Image
          alt="The Puppet Tree"
          src="/clients/puppet.png"
          width={102}
          height={51}
          className="mx-auto w-1/2 lg:w-full object-contain object-center col-span-1"
        />
        <Image
          alt="The Plankton Project"
          src="/clients/plankton.png"
          width={102}
          height={51}
          className="mx-auto w-1/2 lg:w-full object-contain col-span-1"
        />
        <Image
          alt="PC World"
          src="/clients/pcworld.png"
          width={102}
          height={51}
          className="mx-auto w-1/2 lg:w-full object-contain col-span-1"
        />
        <Image
          alt="Calibre Audio"
          src="/clients/calibre.png"
          width={102}
          height={51}
          className="mx-auto w-1/2 lg:w-full object-contain col-span-1"
        />
      </div>
    </div>
  );
}
