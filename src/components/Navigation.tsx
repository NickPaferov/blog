'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

type NavLinkType = {
  label: string;
  href: string;
};

type PropsType = {
  navLinks: NavLinkType[];
};

export default function Navigation({ navLinks }: PropsType) {
  const pathName = usePathname();
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
    </>
  );
}
