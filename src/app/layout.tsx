import type { Metadata } from 'next';
import { ReactNode } from 'react';

import Navbar from '@components/Navbar';
import './globals.css';
import Footer from '@components/Footer';

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
    <html lang="en">
      <body className="bg-background">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
