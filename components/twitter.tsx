import Script from 'next/script';

export default function Twitter() {
  return (
    <>
    <blockquote
      className='twitter-tweet'
      data-lang='en'
      data-dnt='true'
      data-theme='dark'
    >
      <p lang='en' dir='ltr'>
        This is the point. One technology doesn&#39;t replace another,
        it complements. Books are no more threatened by Kindle
        than stairs by elevators x
      </p>
      &mdash; Stephen Fry (@stephenfry)
      <a href='https://twitter.com/stephenfry/status/1312682218?ref_src=twsrc%5Etfw'>March 11, 2009</a>
    </blockquote>
    
    <Script
      src='https://platform.twitter.com/widgets.js'
      strategy='lazyOnload'
    />
    </>
  )
}