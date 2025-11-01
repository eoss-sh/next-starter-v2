import { auth } from '@/server/auth/auth';

type User = (typeof auth.$Infer.Session)['user'];

const DashboardClient = ({ user }: { user: User }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>User Name: {user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Created At: {user.createdAt.toISOString()}</p>
      <p>Updated At: {user.updatedAt.toISOString()}</p>
    </div>
  );
};

export default DashboardClient;
