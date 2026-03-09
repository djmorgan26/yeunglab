import type { NewsItem } from '@/types';
import { formatDate, safeHref } from '@/lib/utils';

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {item.image_url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.image_url} alt={item.title} className="w-full h-40 object-cover" />
      )}
      {!item.image_url && (
        <div className="w-full h-40 bg-warm-gray flex items-center justify-center">
          <span className="text-gray-400 font-headline text-sm">No image</span>
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-headline font-bold bg-emory-blue text-white px-2 py-0.5 rounded">
            {item.category}
          </span>
          <span className="text-xs text-gray-500 font-body">{formatDate(item.date)}</span>
        </div>
        <h3 className="font-headline font-bold text-near-black text-base mb-2 leading-snug">
          {item.external_link ? (
            <a href={safeHref(item.external_link)} target="_blank" rel="noopener noreferrer" className="hover:text-emory-blue transition-colors">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h3>
        <p className="text-sm font-body text-gray-600 line-clamp-3">{item.summary}</p>
      </div>
    </div>
  );
}
