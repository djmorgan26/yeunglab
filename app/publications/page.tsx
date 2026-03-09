import type { Metadata } from 'next';
import { getPublications } from '@/lib/data';
import PublicationsClient from '@/components/pages/PublicationsClient';

export const metadata: Metadata = { title: 'Publications' };

export default function PublicationsPage() {
  const publications = getPublications();

  return (
    <>
      {/* Hero */}
      <section className="bg-emory-blue text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-headline font-bold text-5xl mb-4">Publications</h1>
          <p className="font-body text-blue-200 text-lg max-w-2xl">
            Peer-reviewed research from the Yeung Lab. Filter by year or browse our full list below.
          </p>
        </div>
      </section>

      {/* Publications list */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <PublicationsClient publications={publications} />
        </div>
      </section>

      {/* Google Scholar CTA — add GOOGLE_SCHOLAR_URL to enable */}
      {process.env.NEXT_PUBLIC_GOOGLE_SCHOLAR_URL && (
        <section className="bg-warm-gray py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline font-bold text-2xl text-emory-blue mb-4">View on Google Scholar</h2>
            <p className="font-body text-gray-600 mb-6">
              For a complete and up-to-date list of publications, visit our Google Scholar profile.
            </p>
            <a
              href={process.env.NEXT_PUBLIC_GOOGLE_SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emory-blue text-white font-headline font-bold px-8 py-3 rounded hover:bg-opacity-90 transition-colors"
            >
              Google Scholar Profile →
            </a>
          </div>
        </section>
      )}
    </>
  );
}
