import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
