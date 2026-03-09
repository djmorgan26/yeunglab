import type { Person } from '@/types';

interface PersonCardProps {
  person: Person;
}

export default function PersonCard({ person }: PersonCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Headshot */}
      <div className="aspect-square bg-warm-gray flex items-center justify-center">
        {person.headshot_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={person.headshot_url}
            alt={person.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-4xl font-headline font-bold text-emory-blue opacity-30">
            {person.name.charAt(0)}
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-4">
        <h3 className="font-headline font-bold text-emory-blue text-lg leading-tight">{person.name}</h3>
        {person.pronouns && (
          <p className="text-xs text-gray-500 mb-1 font-body">{person.pronouns}</p>
        )}
        <p className="text-sm font-headline text-near-black font-semibold mb-2">{person.role}</p>
        {person.degrees && (
          <p className="text-xs text-gray-600 font-body mb-2">{person.degrees}</p>
        )}
        {person.research_interests && (
          <p className="text-xs text-gray-600 font-body line-clamp-3">{person.research_interests}</p>
        )}
        {(person.email || person.linkedin) && (
          <div className="mt-3 flex gap-3">
            {person.email && (
              <a href={`mailto:${person.email}`} className="text-xs text-emory-blue hover:underline font-headline">
                Email
              </a>
            )}
            {person.linkedin && (
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-emory-blue hover:underline font-headline">
                LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
