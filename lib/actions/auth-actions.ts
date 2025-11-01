'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '../../server/auth/auth';

export const signUp = async (email: string, password: string, name: string) => {
  console.log('signUp', email, password, name);
  const result = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
      callbackURL: '/dashboard',
    },
  });

  redirect('/dashboard');
};

export const signIn = async (email: string, password: string) => {
  console.log('signIn', email, password);
  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
      callbackURL: '/dashboard',
    },
  });
  redirect('/dashboard');
};

export const signOut = async () => {
  const result = await auth.api.signOut({
    headers: await headers(),
  });
  redirect('/auth');
};
