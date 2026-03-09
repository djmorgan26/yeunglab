'use client';

import { useState, useMemo } from 'react';
import type { NewsItem } from '@/types';
import NewsCard from '@/components/ui/NewsCard';
import FilterBar from '@/components/ui/FilterBar';

interface NewsClientProps {
  items: NewsItem[];
}

export default function NewsClient({ items }: NewsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(items.map((n) => n.category).filter(Boolean)));
    return unique.sort();
  }, [items]);

  const filtered = useMemo(() => {
    if (!selectedCategory) return items;
    return items.filter((n) => n.category === selectedCategory);
  }, [items, selectedCategory]);

  return (
    <>
      <FilterBar options={categories} selected={selectedCategory} onChange={setSelectedCategory} allLabel="All Categories" />
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <NewsCard key={item.title} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 font-body italic">No news items found.</p>
      )}
    </>
  );
}
