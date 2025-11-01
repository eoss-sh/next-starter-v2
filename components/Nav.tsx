'use client';

import Link from 'next/link';
import { redirect } from 'next/navigation';

import { signOut } from '@/lib/actions/auth-actions';
import { auth } from '@/server/auth/auth';

import { Button } from './ui/button';

type Session = typeof auth.$Infer.Session | null;

const Nav = ({ session }: { session: Session }) => {
  const handleSignOut = async () => {
    await signOut();
    redirect('/auth');
  };

  return (
    <header className="bg-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 py-4">
        <Link href="/">
          <h1>Next.js Starter App</h1>
        </Link>
        <div className="flex items-center gap-2">
          {session && (
            <>
              <Link href="/dashboard">
                <Button className="cursor-pointer bg-teal-500 text-white">
                  Dashboard
                </Button>
              </Link>
              <Button
                className="cursor-pointer bg-teal-500 text-white"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </>
          )}
          {!session && (
            <Link href="/auth">
              <Button className="cursor-pointer bg-teal-500 text-white">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
