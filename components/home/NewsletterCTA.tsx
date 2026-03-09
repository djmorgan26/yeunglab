export default function NewsletterCTA() {
  return (
    <section className="bg-emory-gold py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-headline font-bold text-3xl text-emory-blue mb-4">
          Stay Connected
        </h2>
        <p className="font-body text-near-black mb-8">
          {/* TODO: Add newsletter signup integration (Mailchimp, etc.) */}
          Follow our work and stay up-to-date with the latest from Yeung Lab.
        </p>
        <a
          href="/contact"
          className="inline-block bg-emory-blue text-white font-headline font-bold px-8 py-3 rounded hover:bg-opacity-90 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
