import type { Study } from '@/types';

interface StudyCardProps {
  study: Study;
}

export default function StudyCard({ study }: StudyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-headline font-bold text-emory-blue text-lg">{study.title}</h3>
        <span className={`shrink-0 text-xs font-headline font-bold px-2 py-0.5 rounded ${
          study.status === 'Recruiting' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
        }`}>
          {study.status}
        </span>
      </div>
      <p className="text-sm font-body text-gray-700 mb-4">{study.description}</p>
      {study.eligibility && (
        <div className="mb-3">
          <p className="text-xs font-headline font-bold text-near-black mb-1">Eligibility:</p>
          <p className="text-xs font-body text-gray-600">{study.eligibility}</p>
        </div>
      )}
      {study.irb_number && (
        <p className="text-xs text-gray-500 font-body mb-3">IRB: {study.irb_number}</p>
      )}
      {(study.contact_name || study.contact_email) && (
        <p className="text-xs font-body text-gray-600">
          Contact: {study.contact_name}{' '}
          {study.contact_email && (
            <a href={`mailto:${study.contact_email}`} className="text-emory-blue hover:underline">
              {study.contact_email}
            </a>
          )}
        </p>
      )}
      {study.link && (
        <a
          href={study.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm font-headline font-bold text-emory-blue hover:underline"
        >
          Learn more →
        </a>
      )}
    </div>
  );
}
