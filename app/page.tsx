import { getFeaturedProjects, getFeaturedPublication, getPeople, getRecentNews } from '@/lib/data';
import Hero from '@/components/home/Hero';
import ValuePillars from '@/components/home/ValuePillars';
import ResearchHighlights from '@/components/home/ResearchHighlights';
import FeaturedPublication from '@/components/home/FeaturedPublication';
import TeamPreview from '@/components/home/TeamPreview';
import NewsPreview from '@/components/home/NewsPreview';
import NewsletterCTA from '@/components/home/NewsletterCTA';

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const featuredPub = getFeaturedPublication();
  const people = getPeople().slice(0, 4);
  const news = getRecentNews(3);

  return (
    <>
      <Hero />
      <ValuePillars />
      <ResearchHighlights projects={featuredProjects} />
      <FeaturedPublication publication={featuredPub} />
      <TeamPreview people={people} />
      <NewsPreview items={news} />
      <NewsletterCTA />
    </>
  );
}
