import Image from 'next/image';
import Link from 'next/link';
import { SignInButton, SignOutButton } from '@/components/buttons';

export default function NavMenu() {
  return (
    <nav style={{ padding: 20, background: 'pink', display: 'flex', alignItems: 'center' }}>
      <Link href="/">
        <Image src="/next.svg" alt="My logo" width={216} height={30} />
      </Link>

      <div style={{ flexGrow: 1 }} />

      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          listStyle: 'none',
        }}
      >
        <style>
          {`
            a {
              color: green;
            }
            a:focus-visible, a:hover {
              color: blue;
              text-decoration: underline;
            }
          `}
        </style>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}
