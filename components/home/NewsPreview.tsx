import Link from 'next/link';
import type { NewsItem } from '@/types';
import NewsCard from '@/components/ui/NewsCard';

interface NewsPreviewProps {
  items: NewsItem[];
}

export default function NewsPreview({ items }: NewsPreviewProps) {
  return (
    <section className="bg-warm-gray py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-headline font-bold text-3xl text-emory-blue">Latest News</h2>
          <Link href="/news" className="text-sm font-headline font-bold text-emory-blue hover:underline">
            View all →
          </Link>
        </div>
        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <NewsCard key={item.title} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 font-body italic">No recent news.</p>
        )}
      </div>
    </section>
  );
}
