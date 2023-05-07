import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.image ?? '/vercel.svg'} alt="Elon Musk" />
          <div>
            <h3>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </h3>
            <p>Age: {user.age}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
