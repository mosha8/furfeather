import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import Footer from '@features/Footer';
import Header from '@features/Header';
import ClientProvider from '@lib/query-client/provider';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: 'furfeather',
  description: 'furfeather.com',
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
        <main>
          <ClientProvider>{children}</ClientProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
