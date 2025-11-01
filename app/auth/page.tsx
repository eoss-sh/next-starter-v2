import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/server/auth/auth';

import AuthClient from './auth-client';

const AuthPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return <>{session ? redirect('/dashboard') : <AuthClient />}</>;
};

export default AuthPage;
