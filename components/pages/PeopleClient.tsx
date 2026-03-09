'use client';

import { useState, useMemo } from 'react';
import type { Person } from '@/types';
import PersonCard from '@/components/ui/PersonCard';
import FilterBar from '@/components/ui/FilterBar';

interface PeopleClientProps {
  people: Person[];
}

export default function PeopleClient({ people }: PeopleClientProps) {
  const [selectedRole, setSelectedRole] = useState('');

  const roles = useMemo(() => {
    const unique = Array.from(new Set(people.map((p) => p.role).filter(Boolean)));
    return unique.sort();
  }, [people]);

  const filtered = useMemo(() => {
    if (!selectedRole) return people;
    return people.filter((p) => p.role === selectedRole);
  }, [people, selectedRole]);

  return (
    <>
      <FilterBar options={roles} selected={selectedRole} onChange={setSelectedRole} allLabel="All Roles" />
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 font-body italic">No team members found.</p>
      )}
    </>
  );
}
