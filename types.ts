
export interface Project {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  link: string;
  tags: string[];
  isInternal?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  name: string;
  icon: string;
}
