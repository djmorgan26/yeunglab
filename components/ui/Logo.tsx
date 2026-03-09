import Image from 'next/image';

interface LogoProps {
  variant?: 'nav' | 'footer';
}

export default function Logo({ variant = 'nav' }: LogoProps) {
  const isFooter = variant === 'footer';
  return (
    <div className="flex items-center gap-3">
      <Image
        src={isFooter ? '/logos/som-shield-hz-white.png' : '/logos/som-shield-hz-blue.png'}
        alt="Emory School of Medicine"
        width={140}
        height={40}
        className="h-10 w-auto"
        style={{ width: 'auto' }}
        priority
      />
      <span
        className={`font-headline font-bold text-lg tracking-wide ${
          isFooter ? 'text-white' : 'text-emory-blue'
        }`}
      >
        Yeung Lab
      </span>
    </div>
  );
}
