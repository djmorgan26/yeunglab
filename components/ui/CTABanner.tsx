import Link from 'next/link';

interface CTABannerProps {
  heading: string;
  subtext?: string;
  linkHref: string;
  linkLabel: string;
}

export default function CTABanner({ heading, subtext, linkHref, linkLabel }: CTABannerProps) {
  return (
    <section className="bg-emory-gold py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-headline text-3xl font-bold text-emory-blue mb-4">{heading}</h2>
        {subtext && <p className="text-near-black mb-8 max-w-2xl mx-auto font-body">{subtext}</p>}
        <Link
          href={linkHref}
          className="inline-block bg-emory-blue text-white font-headline font-bold px-8 py-3 rounded hover:bg-opacity-90 transition-colors"
        >
          {linkLabel}
        </Link>
      </div>
    </section>
  );
}
