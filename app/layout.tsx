import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { headers } from 'next/headers';

import Nav from '@/components/Nav';
import { auth } from '@/server/auth/auth';

import './globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next.js Starter App',
  description: 'A basic starter for next.js',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <html lang="de" className={roboto.className}>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body>
        <Nav session={session} />
        <main className="mx-auto max-w-7xl p-4">{children}</main>
      </body>
    </html>
  );
}
