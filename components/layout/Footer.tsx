import Link from 'next/link';
import LogoPlaceholder from '@/components/ui/LogoPlaceholder';

export default function Footer() {
  return (
    <footer className="bg-emory-blue text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <LogoPlaceholder variant="footer" />
          <p className="mt-3 text-sm font-body text-blue-200">
            Advancing health through rigorous research at Emory University.
          </p>
          {/* TODO: Replace with <Image src="/emory-logo-white.svg" alt="Emory University" width={120} height={40} /> */}
          <p className="mt-4 text-xs text-blue-300 font-headline">Emory University</p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-headline font-bold text-emory-gold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm font-body">
            {[
              { href: '/about', label: 'About' },
              { href: '/people', label: 'People' },
              { href: '/research', label: 'Research' },
              { href: '/publications', label: 'Publications' },
              { href: '/join', label: 'Join the Lab' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-blue-200 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-headline font-bold text-emory-gold mb-3">Contact</h3>
          <address className="not-italic text-sm font-body text-blue-200 space-y-1">
            <p>Emory University</p>
            <p>Atlanta, GA 30322</p>
            {/* TODO: Replace with actual email */}
            <a href="mailto:lab@emory.edu" className="hover:text-white transition-colors">
              lab@emory.edu
            </a>
          </address>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-blue-800 text-xs text-blue-300 font-body text-center">
        © {new Date().getFullYear()} Yeung Lab, Emory University. All rights reserved.
      </div>
    </footer>
  );
}
