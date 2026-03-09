import type { Metadata } from 'next';
import { getProjects, getStudies } from '@/lib/data';
import ProjectCard from '@/components/ui/ProjectCard';
import StudyCard from '@/components/ui/StudyCard';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = { title: 'Research' };

export default function ResearchPage() {
  const projects = getProjects();
  const studies = getStudies();

  return (
    <>
      {/* Hero */}
      <section className="bg-emory-blue text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-headline font-bold text-5xl mb-4">Research</h1>
          <p className="font-body text-blue-200 text-lg max-w-2xl">
            Our research spans multiple domains, united by a commitment to improving human health through rigorous science.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline font-bold text-3xl text-emory-blue mb-8">Research Projects</h2>
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ) : (
            <p className="font-body text-gray-500 italic">No projects listed yet.</p>
          )}
        </div>
      </section>

      {/* Studies */}
      <section className="bg-warm-gray py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline font-bold text-3xl text-emory-blue mb-4">Clinical Studies</h2>
          <p className="font-body text-sm text-gray-600 mb-8 bg-yellow-50 border border-yellow-200 rounded p-4">
            <strong>IRB Disclaimer:</strong> All studies are conducted under institutional review board (IRB)
            oversight and in full compliance with federal regulations governing human subjects research. Participation
            is always voluntary.
          </p>
          {studies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studies.map((study) => (
                <StudyCard key={study.title} study={study} />
              ))}
            </div>
          ) : (
            <p className="font-body text-gray-500 italic">No active studies at this time.</p>
          )}
        </div>
      </section>

      <CTABanner
        heading="Interested in Collaborating?"
        subtext="We welcome partnerships with other research groups, clinical teams, and industry partners."
        linkHref="/contact"
        linkLabel="Contact Us"
      />
    </>
  );
}
