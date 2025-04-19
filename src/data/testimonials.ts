export interface Testimonial {
  id: string;
  content: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    content: "Baha consistently demonstrated exceptional problem-solving skills and a strong work ethic. His ability to translate complex technical concepts into user-friendly solutions made him an invaluable asset to our team.",
    name: "Sarah Johnson",
    role: "CTO",
    company: "oLab Australia",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "2",
    content: "Collaborating with Baha was a pleasure. His strategic thinking and technical expertise helped our project exceed expectations. He has a unique ability to see both the big picture and the important details.",
    name: "David Lee",
    role: "Product Manager",
    company: "Vocabulary Builder",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "3",
    content: "Baha's dedication to teaching and mentoring was evident in every session. He has a natural talent for breaking down complex concepts in a way that makes them accessible to students of all levels.",
    name: "Priya Patel",
    role: "Program Director",
    company: "InclusionX",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "4",
    content: "What impressed me most about Baha was his commitment to social impact. He consistently goes above and beyond to ensure his technical skills are contributing to meaningful change in communities.",
    name: "Michael Chen",
    role: "Executive Director",
    company: "TechForGood Foundation",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4
  },
  {
    id: "5",
    content: "Baha brought exceptional creativity and technical knowledge to our project. His ability to understand both user needs and business requirements resulted in a solution that exceeded our expectations.",
    name: "Emily Rodriguez",
    role: "UX Director",
    company: "Digital Innovations",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
]