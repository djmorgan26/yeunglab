import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-emory-blue text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* TODO: Add hero background image or pattern */}
        <p className="font-headline text-emory-gold font-bold text-sm tracking-widest uppercase mb-4">
          Yeung Lab — Emory University
        </p>
        <h1 className="font-headline font-bold text-5xl md:text-6xl leading-tight mb-6 max-w-3xl">
          {/* TODO: Replace with real tagline */}
          Advancing Health Through Rigorous Research
        </h1>
        <p className="font-body text-lg text-blue-200 mb-10 max-w-2xl">
          {/* TODO: Replace with real mission statement */}
          We conduct cutting-edge research to improve patient outcomes and advance our understanding of human health.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/research"
            className="inline-block bg-emory-gold text-emory-blue font-headline font-bold px-8 py-3 rounded hover:bg-opacity-90 transition-colors text-center"
          >
            Explore Our Research
          </Link>
          <Link
            href="/join"
            className="inline-block border-2 border-white text-white font-headline font-bold px-8 py-3 rounded hover:bg-white hover:text-emory-blue transition-colors text-center"
          >
            Join the Lab
          </Link>
        </div>
      </div>
    </section>
  );
}
