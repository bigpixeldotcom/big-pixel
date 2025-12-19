import Image from 'next/image';

export default function PriceGuide() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <h2 className="text-center font-headline font-black text-3xl">
        Your organisation isn&apos;t a template, so I don&apos;t price like one.
      </h2>
      <p className="text-2xl text-center mt-2">
        Here&apos;s a rough guide to help you work out if I&apos;m within reach.
      </p>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 lg:grid-cols-3 items-center gap-x-16 gap-y-10">
        <div className="w-full flex flex-col items-center justify-center gap-y-3 p-6 rounded-4xl text-white bg-indigo-800 shadow-2xl shadow-indigo-800/50">
          <Image src="/images/guide-01.svg" width={252} height={196} alt="" />
          <p className="text-lg text-center">
            A simple, beautiful website for a small charity typically starts around £500
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-y-3 p-6 rounded-4xl text-white bg-purple-700 shadow-2xl shadow-purple-700/50">
          <Image src="/images/guide-02.svg" width={252} height={196} alt="" />
          <p className="text-lg text-center">
            A complex site with custom functionality usually falls in the £1,000&ndash;£2,500 range
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-y-3 p-6 rounded-4xl text-white bg-violet-600 shadow-2xl shadow-violet-600/50">
          <Image src="/images/guide-03.svg" width={252} height={196} alt="" />
          <p className="text-lg text-center">
            Larger projects are scoped individually. Get in touch to discuss your requirements
          </p>
        </div>
      </div>
    </div>
  );
}
