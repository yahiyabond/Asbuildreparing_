export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  image: string;
  imageCaption?: string;
  description: string;
  commonIssues: string[];
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewReply {
  id: string;
  author: string;
  comment: string;
  date: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  appliance: string;
  comment: string;
  rating: number;
  date: string;
  helpfulCount?: number;
  replies?: ReviewReply[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
