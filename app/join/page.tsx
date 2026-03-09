import type { Metadata } from 'next';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = { title: 'Join the Lab' };

const roles = [
  {
    title: 'Graduate Students',
    expectations: [
      'Pursuing a PhD or MS in a relevant field',
      'Commitment to rigorous research methods',
      'Collaborative and coachable mindset',
      'Strong written and oral communication skills',
    ],
  },
  {
    title: 'Postdoctoral Fellows',
    expectations: [
      'PhD in a relevant discipline',
      'Strong publication record',
      'Independent research ideas aligned with lab focus',
      'Mentorship experience or aspirations',
    ],
  },
  {
    title: 'Undergraduate Researchers',
    expectations: [
      'Enrolled at Emory University',
      'Minimum 10 hours/week commitment',
      'Curiosity and enthusiasm for research',
      'Willingness to learn lab techniques',
    ],
  },
  {
    title: 'Research Staff',
    expectations: [
      'Relevant technical skills (wet lab, data analysis, or clinical)',
      'Detail-oriented and organized',
      'Experience working in a research environment preferred',
    ],
  },
];

const processSteps = [
  { step: '1', title: 'Explore', desc: 'Review our research areas and recent publications to see if there is alignment with your interests.' },
  { step: '2', title: 'Reach Out', desc: 'Send a brief email with your CV, a short paragraph about your background, and why you want to join.' },
  { step: '3', title: 'Interview', desc: 'Selected candidates will be invited for a virtual or in-person interview with the PI and team members.' },
  { step: '4', title: 'Join', desc: 'Successful candidates receive an offer and onboarding materials to get started.' },
];

const faqs = [
  {
    q: 'Do I need prior research experience to apply?',
    a: 'For undergraduate positions, enthusiasm and commitment matter more than prior experience. For graduate and postdoctoral positions, relevant experience is expected.',
  },
  {
    q: 'Are positions funded?',
    a: 'Graduate students and postdoctoral fellows are supported through grants and/or institutional fellowships. Undergraduate researchers may be eligible for work-study or research stipends.',
  },
  {
    q: 'How competitive are positions?',
    a: 'We review applications on a rolling basis and accept a small number of trainees each year to ensure strong mentorship.',
  },
  {
    q: 'Can I rotate in the lab?',
    a: 'Yes, rotations are welcome for graduate students in compatible PhD programs. Please mention this in your initial email.',
  },
];

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-emory-blue text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-headline font-bold text-5xl mb-4">Join the Lab</h1>
          <p className="font-body text-blue-200 text-lg max-w-2xl">
            We are always looking for motivated, curious, and collaborative researchers to join our team.
          </p>
        </div>
      </section>

      {/* Role expectations */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline font-bold text-3xl text-emory-blue mb-8">Open Roles & Expectations</h2>
          <div className="space-y-4">
            {roles.map((role) => (
              <details key={role.title} className="group border border-gray-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-headline font-bold text-lg text-emory-blue hover:bg-warm-gray transition-colors list-none">
                  {role.title}
                  <span className="text-emory-gold text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-5 pt-2">
                  <ul className="space-y-2">
                    {role.expectations.map((exp) => (
                      <li key={exp} className="flex items-start gap-3 font-body text-sm text-near-black">
                        <span className="text-emory-gold mt-0.5">✓</span>
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-warm-gray py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline font-bold text-3xl text-emory-blue mb-10 text-center">Application Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-lg p-5 shadow-sm text-center">
                <div className="w-10 h-10 bg-emory-blue text-white rounded-full flex items-center justify-center font-headline font-bold text-lg mx-auto mb-3">
                  {s.step}
                </div>
                <h3 className="font-headline font-bold text-emory-blue text-lg mb-2">{s.title}</h3>
                <p className="font-body text-sm text-gray-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline font-bold text-3xl text-emory-blue mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-gray-200 rounded-lg overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-headline font-bold text-near-black hover:bg-warm-gray transition-colors list-none">
                  {faq.q}
                </summary>
                <div className="px-6 pb-5 pt-2">
                  <p className="font-body text-sm text-gray-700">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Apply?"
        subtext="Send us your CV and a brief introduction. We look forward to hearing from you."
        linkHref="/contact"
        linkLabel="Contact the Lab"
      />
    </>
  );
}
