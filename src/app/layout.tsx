import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@components/Header';
import './app.css';
import { ReactNode } from 'react';

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: '../assets/fonts/significa-medium.woff2',
  display: 'swap',
});

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Significa',
  description: 'Significa.co',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body className="bg-darkest">
        <Header />
        {children}
      </body>
    </html>
  );
}
