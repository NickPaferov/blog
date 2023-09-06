import Navigation from '@/components/Navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Posts', href: '/posts' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  );
}
