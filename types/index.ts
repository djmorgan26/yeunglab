export interface Person {
  name: string;
  pronouns: string;
  role: string;
  degrees: string;
  institution: string;
  grad_year: string;
  research_interests: string;
  fun_fact: string;
  highlight_summary: string;
  headshot_url: string;
  vision_quote: string;
  email: string;
  linkedin: string;
  active: boolean;
}

export interface Alumni {
  name: string;
  pronouns: string;
  role: string;
  degrees: string;
  institution: string;
  grad_year: string;
  research_interests: string;
  headshot_url: string;
  vision_quote: string;
  current_position: string;
  current_employer: string;
  linkedin: string;
}

export interface Project {
  title: string;
  description: string;
  status: string;
  collaborators: string;
  funding_source: string;
  start_date: string;
  end_date: string;
  tags: string;
  image_url: string;
  featured: boolean;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  volume: string;
  issue: string;
  pages: string;
  doi: string;
  link: string;
  tags: string;
  featured: boolean;
}

export interface Study {
  title: string;
  description: string;
  status: string;
  irb_number: string;
  eligibility: string;
  contact_name: string;
  contact_email: string;
  link: string;
  image_url: string;
  featured: boolean;
}

export interface NewsItem {
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  image_url: string;
  external_link: string;
  published: boolean;
}
