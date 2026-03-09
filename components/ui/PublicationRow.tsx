import type { Publication } from '@/types';

interface PublicationRowProps {
  publication: Publication;
}

export default function PublicationRow({ publication }: PublicationRowProps) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <div className="flex items-start gap-3">
        {publication.featured && (
          <span className="mt-1 shrink-0 bg-emory-gold text-emory-blue text-xs font-headline font-bold px-2 py-0.5 rounded">
            Featured
          </span>
        )}
        <div className="flex-1">
          <h3 className="font-headline font-bold text-near-black text-base leading-snug mb-1">
            {publication.link ? (
              <a href={publication.link} target="_blank" rel="noopener noreferrer" className="hover:text-emory-blue transition-colors">
                {publication.title}
              </a>
            ) : (
              publication.title
            )}
          </h3>
          <p className="text-sm text-gray-600 font-body mb-1">{publication.authors}</p>
          <p className="text-sm font-body">
            <span className="italic text-gray-700">{publication.journal}</span>
            {publication.year && <span className="text-gray-500"> ({publication.year})</span>}
            {publication.volume && <span className="text-gray-500"> {publication.volume}</span>}
            {publication.issue && <span className="text-gray-500">({publication.issue})</span>}
            {publication.pages && <span className="text-gray-500">:{publication.pages}</span>}
          </p>
          {publication.doi && (
            <a
              href={`https://doi.org/${publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emory-blue hover:underline font-headline mt-1 inline-block"
            >
              DOI: {publication.doi}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
