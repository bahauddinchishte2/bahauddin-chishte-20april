export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
  image?: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "The Future of Web Development: What's Next?",
    excerpt: 'Exploring emerging trends and technologies shaping the future of web development.',
    content: 'As we look ahead to the future of web development...',
    date: '2024-03-15',
    tags: ['tech', 'productivity'],
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Baha',
      avatar: 'https://avatars.githubusercontent.com/u/91181868?v=4',
    },
  },
  {
    id: '2',
    title: 'Building a Second Brain: A Book Review',
    excerpt: 'How to organize your digital life and unlock your creative potential.',
    content: "In this comprehensive review of 'Building a Second Brain'...",
    date: '2024-03-10',
    tags: ['book-review', 'productivity'],
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Baha',
      avatar: 'https://avatars.githubusercontent.com/u/91181868?v=4',
    },
  },
  // ... other blog posts remain the same ...
];