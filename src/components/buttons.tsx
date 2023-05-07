'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';
import Image from 'next/image';

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <>...</>;
  }

  if (status === 'authenticated') {
    return (
      <Link href="/dashboard">
        <Image
          src={session?.user?.image ?? '/vercel.svg'}
          width={32}
          height={32}
          alt={session?.user?.name ?? 'Elon Musk'}
        />
      </Link>
    );
  }

  return <button onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  const { status } = useSession();
  if (status !== 'authenticated') {
    return null;
  }
  return <button onClick={() => signOut()}>Sign out</button>;
}