import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const tags = project.tags ? project.tags.split(',').map((t) => t.trim()).filter(Boolean) : [];
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {project.image_url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={project.image_url} alt={project.title} className="w-full h-48 object-cover" />
      )}
      {!project.image_url && (
        <div className="w-full h-48 bg-warm-gray flex items-center justify-center">
          <span className="text-gray-400 font-headline text-sm">No image</span>
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-headline font-bold px-2 py-0.5 rounded ${
            project.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
          }`}>
            {project.status}
          </span>
          {project.featured && (
            <span className="text-xs font-headline font-bold bg-emory-gold text-emory-blue px-2 py-0.5 rounded">
              Featured
            </span>
          )}
        </div>
        <h3 className="font-headline font-bold text-emory-blue text-lg mb-2">{project.title}</h3>
        <p className="text-sm font-body text-gray-700 mb-4 line-clamp-3">{project.description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span key={tag} className="text-xs bg-warm-gray text-near-black px-2 py-0.5 rounded font-headline">
                {tag}
              </span>
            ))}
          </div>
        )}
        {project.funding_source && (
          <p className="text-xs text-gray-500 font-body mt-3">Funded by: {project.funding_source}</p>
        )}
      </div>
    </div>
  );
}
