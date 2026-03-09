import type { Publication } from '@/types';

interface FeaturedPublicationProps {
  publication: Publication | undefined;
}

export default function FeaturedPublication({ publication }: FeaturedPublicationProps) {
  if (!publication) return null;
  return (
    <section className="bg-emory-blue text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-headline text-emory-gold font-bold text-sm tracking-widest uppercase mb-4">
          Featured Publication
        </p>
        <h2 className="font-headline font-bold text-2xl md:text-3xl mb-4 leading-snug">
          {publication.link ? (
            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="hover:text-emory-gold transition-colors">
              {publication.title}
            </a>
          ) : (
            publication.title
          )}
        </h2>
        <p className="font-body text-blue-200 mb-2">{publication.authors}</p>
        <p className="font-body text-blue-300 text-sm">
          <span className="italic">{publication.journal}</span>
          {publication.year && ` (${publication.year})`}
        </p>
        {publication.doi && (
          <a
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 border border-emory-gold text-emory-gold font-headline font-bold px-6 py-2 rounded hover:bg-emory-gold hover:text-emory-blue transition-colors text-sm"
          >
            View Publication →
          </a>
        )}
      </div>
    </section>
  );
}
