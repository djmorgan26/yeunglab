import type { Metadata } from 'next';
import { getPI } from '@/lib/data';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  const pi = getPI();

  return (
    <>
      {/* Hero */}
      <section className="bg-emory-blue text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-headline font-bold text-5xl mb-4">Contact</h1>
          <p className="font-body text-blue-200 text-lg max-w-2xl">
            We welcome inquiries from prospective trainees, collaborators, and the media.
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Address & email */}
          <div>
            <h2 className="font-headline font-bold text-3xl text-emory-blue mb-6">Get in Touch</h2>

            {pi && pi.email && (
              <div className="mb-6">
                <h3 className="font-headline font-bold text-near-black mb-1">Email</h3>
                <a href={`mailto:${pi.email}`} className="font-body text-emory-blue hover:underline">
                  {pi.email}
                </a>
              </div>
            )}

            <div className="mb-6">
              <h3 className="font-headline font-bold text-near-black mb-1">Mailing Address</h3>
              {/* TODO: Replace with real address */}
              <address className="not-italic font-body text-gray-700 leading-relaxed">
                Yeung Lab<br />
                Emory University<br />
                Atlanta, GA 30322<br />
                United States
              </address>
            </div>

            <div className="mb-6">
              <h3 className="font-headline font-bold text-near-black mb-2">How to Reach Us</h3>
              <ul className="space-y-2 font-body text-sm text-gray-700">
                <li><strong>Prospective trainees:</strong> Please include your CV and a brief statement of interest.</li>
                <li><strong>Collaborators:</strong> Describe your project and how our expertise might align.</li>
                <li><strong>Media inquiries:</strong> Contact the PI directly via email.</li>
              </ul>
            </div>

            {/* TODO: Replace with embedded Google Map */}
            <div className="bg-warm-gray rounded-lg h-48 flex items-center justify-center">
              <p className="font-body text-sm text-gray-500">
                {/* TODO: Embed Google Maps */}
                Map placeholder — Emory University, Atlanta GA
              </p>
            </div>
          </div>

          {/* PI info card */}
          {pi && (
            <div className="bg-warm-gray rounded-lg p-6">
              <h2 className="font-headline font-bold text-2xl text-emory-blue mb-6">Principal Investigator</h2>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full shrink-0 overflow-hidden flex items-center justify-center">
                  {pi.headshot_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={pi.headshot_url} alt={pi.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-headline font-bold text-2xl text-emory-blue opacity-30">
                      {pi.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-headline font-bold text-emory-blue text-xl">{pi.name}</h3>
                  {pi.pronouns && <p className="text-xs text-gray-500 font-body">{pi.pronouns}</p>}
                  <p className="font-headline text-sm font-semibold text-near-black mt-1">{pi.role}</p>
                  {pi.degrees && <p className="font-body text-sm text-gray-600 mt-1">{pi.degrees}</p>}
                  {pi.institution && <p className="font-body text-xs text-gray-500 mt-1">{pi.institution}</p>}
                </div>
              </div>
              {pi.highlight_summary && (
                <p className="font-body text-sm text-gray-700 mt-4">{pi.highlight_summary}</p>
              )}
              <div className="mt-4 flex gap-4">
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
            </div>
          )}
        </div>
      </section>

      {/* Medical disclaimer */}
      <section className="bg-warm-gray py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-headline font-bold text-near-black mb-2">Medical Disclaimer</h3>
          <p className="font-body text-sm text-gray-600">
            The information provided on this website is for general informational and educational purposes only.
            It is not intended as medical advice, diagnosis, or treatment. If you have questions about a medical
            condition, please consult a qualified healthcare provider. If you are interested in participating in a
            research study, eligibility will be determined by the study team.
          </p>
        </div>
      </section>
    </>
  );
}
