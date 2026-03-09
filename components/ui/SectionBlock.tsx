interface SectionBlockProps {
  children: React.ReactNode;
  bg?: 'white' | 'warm-gray' | 'emory-blue' | 'emory-gold';
  className?: string;
}

export default function SectionBlock({ children, bg = 'white', className = '' }: SectionBlockProps) {
  const bgMap = {
    white: 'bg-white',
    'warm-gray': 'bg-warm-gray',
    'emory-blue': 'bg-emory-blue text-white',
    'emory-gold': 'bg-emory-gold',
  };
  return (
    <section className={`py-16 px-4 ${bgMap[bg]} ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
