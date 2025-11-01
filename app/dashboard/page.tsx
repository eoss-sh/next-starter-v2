import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/server/auth/auth';

import DashboardClient from './dashboard-client';

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>{session ? <DashboardClient user={session.user} /> : redirect('/auth')}</>
  );
};

export default DashboardPage;
