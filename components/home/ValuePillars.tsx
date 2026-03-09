const pillars = [
  {
    icon: '🔬',
    title: 'Rigorous Science',
    description: 'We apply the highest standards of scientific rigor to every study we undertake.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Spirit',
    description: 'We believe the best research happens when diverse minds work together.',
  },
  {
    icon: '💡',
    title: 'Translational Impact',
    description: 'We bridge the gap between bench research and real-world patient benefit.',
  },
  {
    icon: '🌱',
    title: 'Mentorship',
    description: 'We are committed to training the next generation of researchers and clinicians.',
  },
];

export default function ValuePillars() {
  return (
    <section className="bg-warm-gray py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-headline font-bold text-3xl text-emory-blue mb-12 text-center">
          {/* TODO: Replace with real section heading */}
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-headline font-bold text-emory-blue text-lg mb-2">{p.title}</h3>
              <p className="font-body text-sm text-gray-700">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
