import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';
import FollowButton from "@/components/FollowButton/FollowButton";

interface Props {
  params: {
    user_id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.user_id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function UserPage({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.user_id } });
  const { name, bio, image } = user ?? {};
  return (
    <div>
      <h1>{name}</h1>

      <img width={300} src={image ?? '/vercel.svg'} alt={`${name}'s profile`} />

      <h3>Bio</h3>
      <p>{bio}</p>

      {/* @ts-expect-error Server Component */}
      <FollowButton targetUserId={params.user_id} />
    </div>
  );
}
