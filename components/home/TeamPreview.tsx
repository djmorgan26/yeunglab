import Link from 'next/link';
import type { Person } from '@/types';
import PersonCard from '@/components/ui/PersonCard';

interface TeamPreviewProps {
  people: Person[];
}

export default function TeamPreview({ people }: TeamPreviewProps) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-headline font-bold text-3xl text-emory-blue">Meet the Team</h2>
          <Link href="/people" className="text-sm font-headline font-bold text-emory-blue hover:underline">
            View all →
          </Link>
        </div>
        {people.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {people.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 font-body italic">Team members coming soon.</p>
        )}
      </div>
    </section>
  );
}
