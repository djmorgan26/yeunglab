import Logo from '@/components/ui/Logo';
import NavClient from './NavClient';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/people', label: 'People' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/news', label: 'News' },
  { href: '/join', label: 'Join' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Logo variant="nav" />
        <NavClient links={navLinks} />
      </div>
    </header>
  );
}
