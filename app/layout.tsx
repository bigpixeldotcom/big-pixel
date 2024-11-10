import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import HoveredLinkProvider from '@/lib/context/hovered-link';
import { ClerkProvider } from '@clerk/nextjs';
import NavBar from '@/components/header';
import Footer from '@/components/footer';

config.autoAddCss = false

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Big Pixel',
  description: 'A small, yet perfectly formed design agency.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <head>
          <Script
            src='https://cdn-cookieyes.com/client_data/211462d71c077e0dc631e691/script.js'
            strategy='beforeInteractive'
            id='cookieyes'
          />
          <link rel='icon' type='image/png' href='/favicon-96x96.png' sizes='96x96' />
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <meta name='apple-mobile-web-app-title' content='Big Pixel' />
          <link rel='manifest' href='/site.webmanifest' />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
        >
          <HoveredLinkProvider>
            <div className='min-h-full sm:flex sm:flex-col items-center md:justify-between'>
              <NavBar />
              <div className='max-w-7xl'>
                {children}
              </div>
              <Footer />
            </div>
          </HoveredLinkProvider> 
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
