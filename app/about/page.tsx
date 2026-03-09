import type { Metadata } from 'next';
import { getPI } from '@/lib/data';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  const pi = getPI();

  return (
    <>
      {/* Hero */}
      <section className="bg-emory-blue text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-headline font-bold text-5xl mb-4">About the Lab</h1>
          <p className="font-body text-blue-200 text-lg max-w-2xl">
            {/* TODO: Replace with real lab mission */}
            Learn about our mission, our principal investigator, and the values that guide our work.
          </p>
        </div>
      </section>

      {/* Lab story + PI card */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-headline font-bold text-3xl text-emory-blue mb-6">Our Story</h2>
            {/* TODO: Replace with real lab history */}
            <div className="prose prose-lg font-body text-near-black max-w-none">
              <p>
                The Yeung Lab was founded at Emory University with a commitment to advancing health through
                rigorous, reproducible, and impactful research. Our work spans multiple areas of investigation,
                always guided by the principle that great science serves people.
              </p>
              <p>
                We are a collaborative, interdisciplinary team of researchers, clinicians, and trainees united
                by a shared vision: to generate knowledge that improves lives.
              </p>
            </div>
          </div>

          {/* PI Card */}
          {pi && (
            <div className="bg-warm-gray rounded-lg p-6">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                {pi.headshot_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={pi.headshot_url} alt={pi.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-5xl font-headline font-bold text-emory-blue opacity-30">
                    {pi.name.charAt(0)}
                  </span>
                )}
              </div>
              <h3 className="font-headline font-bold text-emory-blue text-xl">{pi.name}</h3>
              {pi.pronouns && <p className="text-xs text-gray-500 mb-1 font-body">{pi.pronouns}</p>}
              <p className="font-headline text-sm font-semibold text-near-black mb-2">{pi.role}</p>
              {pi.degrees && <p className="font-body text-sm text-gray-600 mb-2">{pi.degrees}</p>}
              {pi.highlight_summary && (
                <p className="font-body text-sm text-gray-700 mb-4">{pi.highlight_summary}</p>
              )}
              {pi.vision_quote && (
                <blockquote className="border-l-4 border-emory-gold pl-4 italic font-body text-sm text-gray-700">
                  "{pi.vision_quote}"
                </blockquote>
              )}
              {(pi.email || pi.linkedin) && (
                <div className="mt-4 flex gap-3">
                  {pi.email && (
                    <a href={`mailto:${pi.email}`} className="text-sm font-headline font-bold text-emory-blue hover:underline">
                      Email
                    </a>
                  )}
                  {pi.linkedin && (
                    <a href={pi.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-headline font-bold text-emory-blue hover:underline">
                      LinkedIn
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-warm-gray py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline font-bold text-3xl text-emory-blue mb-10 text-center">Milestones</h2>
          {/* TODO: Replace with real milestone data */}
          <div className="space-y-6">
            {[
              { year: '2020', event: 'Lab founded at Emory University' },
              { year: '2021', event: 'First major grant awarded' },
              { year: '2022', event: 'Team expanded to 10 researchers' },
              { year: '2023', event: 'First high-impact publication' },
              { year: '2024', event: 'New clinical trial launched' },
            ].map((m) => (
              <div key={m.year} className="flex gap-6 items-start">
                <span className="font-headline font-bold text-emory-gold text-xl w-16 shrink-0">{m.year}</span>
                <p className="font-body text-near-black pt-1">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-headline font-bold text-3xl text-emory-blue mb-8 text-center">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { title: 'Integrity', desc: 'We uphold the highest ethical standards in all research.' },
              { title: 'Excellence', desc: 'We strive for rigor and reproducibility in everything we do.' },
              { title: 'Inclusion', desc: 'We foster a diverse, equitable, and welcoming environment.' },
              { title: 'Impact', desc: 'We measure success by the real-world difference our work makes.' },
            ].map((v) => (
              <div key={v.title} className="border-l-4 border-emory-blue pl-5">
                <h3 className="font-headline font-bold text-emory-blue text-lg mb-1">{v.title}</h3>
                <p className="font-body text-sm text-gray-700">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emory compliance */}
      <section className="bg-warm-gray py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm text-gray-600">
            The Yeung Lab operates in full compliance with Emory University policies, IRB oversight, and applicable federal regulations.
            All research is conducted under Emory University's institutional framework.
          </p>
        </div>
      </section>
    </>
  );
}
