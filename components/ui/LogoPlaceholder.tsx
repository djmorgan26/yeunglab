interface LogoPlaceholderProps {
  variant?: 'nav' | 'footer';
}

export default function LogoPlaceholder({ variant = 'nav' }: LogoPlaceholderProps) {
  const isFooter = variant === 'footer';
  return (
    <div className={`flex items-center gap-2 ${isFooter ? 'text-white' : 'text-emory-blue'}`}>
      {/* TODO: Replace with <Image src="/logo.svg" alt="Yeung Lab" width={40} height={40} /> */}
      <div
        className={`flex items-center justify-center rounded font-headline font-bold ${
          isFooter
            ? 'bg-emory-gold text-emory-blue w-9 h-9 text-lg'
            : 'bg-emory-blue text-white w-9 h-9 text-lg'
        }`}
      >
        YL
      </div>
      <span className={`font-headline font-bold tracking-wide ${isFooter ? 'text-xl' : 'text-xl'}`}>
        Yeung Lab
      </span>
    </div>
  );
}
