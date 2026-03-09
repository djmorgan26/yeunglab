import type { Metadata } from 'next';
import { getNews } from '@/lib/data';
import NewsClient from '@/components/pages/NewsClient';

export const metadata: Metadata = { title: 'News' };

export default function NewsPage() {
  const news = getNews();

  return (
    <>
      {/* Hero */}
      <section className="bg-emory-blue text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-headline font-bold text-5xl mb-4">News</h1>
          <p className="font-body text-blue-200 text-lg max-w-2xl">
            Latest updates, announcements, and highlights from the Yeung Lab.
          </p>
        </div>
      </section>

      {/* News grid with filter */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <NewsClient items={news} />
        </div>
      </section>
    </>
  );
}
