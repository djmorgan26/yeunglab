import Link from 'next/link';
import type { Project } from '@/types';
import ProjectCard from '@/components/ui/ProjectCard';

interface ResearchHighlightsProps {
  projects: Project[];
}

export default function ResearchHighlights({ projects }: ResearchHighlightsProps) {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-headline font-bold text-3xl text-emory-blue">Research Highlights</h2>
          <Link href="/research" className="text-sm font-headline font-bold text-emory-blue hover:underline">
            View all →
          </Link>
        </div>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 font-body italic">No featured projects yet.</p>
        )}
      </div>
    </section>
  );
}
