import type { Metadata } from 'next';
import { getPeople, getAlumni } from '@/lib/data';
import PeopleClient from '@/components/pages/PeopleClient';
import type { Alumni } from '@/types';

export const metadata: Metadata = { title: 'People' };

function AlumniCard({ alum }: { alum: Alumni }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <h3 className="font-headline font-bold text-emory-blue text-base">{alum.name}</h3>
      {alum.pronouns && <p className="text-xs text-gray-500 font-body">{alum.pronouns}</p>}
      <p className="font-headline text-sm text-near-black font-semibold mt-1">{alum.role}</p>
      {alum.current_position && (
        <p className="font-body text-xs text-gray-600 mt-1">
          {alum.current_position}{alum.current_employer ? `, ${alum.current_employer}` : ''}
        </p>
      )}
      {alum.linkedin && (
        <a href={alum.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs font-headline text-emory-blue hover:underline mt-2 inline-block">
          LinkedIn
        </a>
      )}
    </div>
  );
}

export default function PeoplePage() {
  const people = getPeople();
  const alumni = getAlumni();

  return (
    <>
      {/* Hero */}
      <section className="bg-emory-blue text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-headline font-bold text-5xl mb-4">Our People</h1>
          <p className="font-body text-blue-200 text-lg max-w-2xl">
            Meet the researchers, students, and staff who make up the Yeung Lab.
          </p>
        </div>
      </section>

      {/* People grid with filter */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <PeopleClient people={people} />
        </div>
      </section>

      {/* Alumni */}
      {alumni.length > 0 && (
        <section className="bg-warm-gray py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-headline font-bold text-3xl text-emory-blue mb-8">Alumni</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {alumni.map((alum) => (
                <AlumniCard key={alum.name} alum={alum} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
