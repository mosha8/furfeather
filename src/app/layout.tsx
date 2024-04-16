import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@styles/globals.css';
import Footer from './components/Footer';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'BugAnt',
  description: 'BugAnt.com',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
