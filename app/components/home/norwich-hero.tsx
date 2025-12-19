import { Suspense } from 'react';
import { list } from '@vercel/blob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@awesome.me/kit-89a9106b13/icons/utility-fill/semibold';

async function VideoPlayer() {
  const { blobs } = await list({
    prefix: 'videos/norwich.mov',
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video
      autoPlay
      muted
      loop
      aria-label="Video player"
      className="w-full h-full object-cover object-center"
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default function NorwichHero() {
  return (
    <div className="relative w-full h-[720px] overflow-hidden">
      <Suspense fallback={<p>Loading for now…</p>}>
        <VideoPlayer />
      </Suspense>
      <div className="absolute inset-0 flex items-center justify-center md:justify-end">
        <div className="flex w-full md:w-1/2 md:pr-12 p-6">
          <div className="h-full max-w-lg bg-black/60 rounded-4xl p-14">
            <h2 className="text-white text-6xl font-headline font-black">
              I{' '}
              <span>
                <FontAwesomeIcon icon={faHeart} className="text-red-600" />
              </span>{' '}
              Norfolk
            </h2>
            <p className="text-white text-lg mt-4">
              Splitting my time between the North Norfolk coast, and Norwich. I&apos;ll happily work
              with organisations anywhere, but I&apos;ve got a soft spot for local projects. Norfolk
              has a strong charity, heritage, and arts sector, and I want to be part of it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
