import type { Metadata } from 'next';
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
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
        >
          <HoveredLinkProvider>
            <div className='min-h-full w-full flex flex-col items-center justify-between'>
              <NavBar />
              <div className='flex-1 max-w-7xl'>
                {children}
              </div>
              <Footer />
            </div>
          </HoveredLinkProvider> 
        </body>
      </html>
    </ClerkProvider>
  );
}
