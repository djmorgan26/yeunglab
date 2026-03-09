'use client';

interface FilterBarProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  allLabel?: string;
}

export default function FilterBar({ options, selected, onChange, allLabel = 'All' }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onChange('')}
        className={`px-4 py-2 rounded-full text-sm font-headline font-bold transition-colors ${
          selected === ''
            ? 'bg-emory-blue text-white'
            : 'bg-warm-gray text-near-black hover:bg-emory-blue hover:text-white'
        }`}
      >
        {allLabel}
      </button>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-4 py-2 rounded-full text-sm font-headline font-bold transition-colors ${
            selected === opt
              ? 'bg-emory-blue text-white'
              : 'bg-warm-gray text-near-black hover:bg-emory-blue hover:text-white'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
