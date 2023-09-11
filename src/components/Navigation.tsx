'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

type NavLinkType = {
  label: string;
  href: string;
};

type PropsType = {
  navLinks: NavLinkType[];
};

export default function Navigation({ navLinks }: PropsType) {
  const pathName = usePathname();
  const session = useSession();

  return (
    <>
      {navLinks.map((navLink) => {
        const isActive = pathName === navLink.href;
        return (
          <Link key={navLink.label} href={navLink.href} className={isActive ? 'active' : ''}>
            {navLink.label}
          </Link>
        );
      })}
      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: '/' })}>
          SignOut
        </Link>
      ) : (
        <Link href="/api/auth/signin">SignIn</Link>
      )}
    </>
  );
}
