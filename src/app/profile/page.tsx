import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/configs/auth';

export const metadata: Metadata = {
  title: 'Profile | Blog',
};

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div className="profile">
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <img src={session.user.image} alt="user photo" />}
    </div>
  );
}
