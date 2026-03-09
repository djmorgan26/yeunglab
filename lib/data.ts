import type { Person, Alumni, Project, Publication, Study, NewsItem } from '@/types';

import peopleData from '@/data/people.json';
import alumniData from '@/data/alumni.json';
import projectsData from '@/data/projects.json';
import publicationsData from '@/data/publications.json';
import studiesData from '@/data/studies.json';
import newsData from '@/data/news.json';

export function getPeople(): Person[] {
  return (peopleData as Person[]).filter((p) => p.active);
}

export function getAlumni(): Alumni[] {
  return alumniData as Alumni[];
}

export function getPI(): Person | undefined {
  return (peopleData as Person[]).find((p) => p.role === 'PI');
}

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getFeaturedProjects(): Project[] {
  return (projectsData as Project[]).filter((p) => p.featured);
}

export function getPublications(): Publication[] {
  return (publicationsData as Publication[]).sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  );
}

export function getFeaturedPublication(): Publication | undefined {
  return (publicationsData as Publication[]).find((p) => p.featured);
}

export function getStudies(): Study[] {
  return studiesData as Study[];
}

export function getNews(): NewsItem[] {
  return (newsData as NewsItem[])
    .filter((n) => n.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRecentNews(n = 3): NewsItem[] {
  return getNews().slice(0, n);
}
