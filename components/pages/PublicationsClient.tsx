'use client';

import { useState, useMemo } from 'react';
import type { Publication } from '@/types';
import PublicationRow from '@/components/ui/PublicationRow';
import FilterBar from '@/components/ui/FilterBar';

interface PublicationsClientProps {
  publications: Publication[];
}

export default function PublicationsClient({ publications }: PublicationsClientProps) {
  const [selectedYear, setSelectedYear] = useState('');

  const years = useMemo(() => {
    const unique = Array.from(new Set(publications.map((p) => p.year).filter(Boolean)));
    return unique.sort((a, b) => parseInt(b) - parseInt(a));
  }, [publications]);

  const filtered = useMemo(() => {
    if (!selectedYear) return publications;
    return publications.filter((p) => p.year === selectedYear);
  }, [publications, selectedYear]);

  return (
    <>
      <FilterBar options={years} selected={selectedYear} onChange={setSelectedYear} allLabel="All Years" />
      <div className="divide-y divide-gray-100">
        {filtered.length > 0 ? (
          filtered.map((pub) => <PublicationRow key={pub.doi || pub.title} publication={pub} />)
        ) : (
          <p className="text-gray-500 font-body italic py-8">No publications found.</p>
        )}
      </div>
    </>
  );
}
