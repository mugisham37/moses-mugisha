export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  client?: string;
  service?: string;
  gallery?: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface Tool {
  name: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  dates: string;
  description: string;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  last?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}
