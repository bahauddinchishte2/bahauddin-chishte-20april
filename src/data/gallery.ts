export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  fullImage: string;
  category: 'work' | 'meeting' | 'teaching' | 'event' | 'other';
}

export const galleryImages: GalleryImage[] = [
  {
    id: '13',
    title: 'Team All Hands at @oLab',
    description: 'Image Description',
    thumbnail: 'https://live.staticflickr.com/65535/54462991938_d65672200b_b.jpg',
    fullImage: 'https://live.staticflickr.com/65535/54462991938_d65672200b_b.jpg',
    category: 'meeting'
  },
  {
    id: '14',
    title: 'Workspace for a startup called "Chologori Bangladesh"',
    description: 'Image Description',
    thumbnail: 'https://live.staticflickr.com/65535/54462991903_203810be9e_b.jpg',
    fullImage: 'https://live.staticflickr.com/65535/54462991903_203810be9e_b.jpg',
    category: 'work'
  },
  {
    id: '15',
    title: 'With chologori Team',
    description: 'Image Description',
    thumbnail: 'https://live.staticflickr.com/65535/54463090270_001fc23a4f_b.jpg',
    fullImage: 'https://live.staticflickr.com/65535/54463090270_001fc23a4f_b.jpg',
    category: 'work'
  },
  {
    id: '16',
    title: 'At the CGB office station',
    description: 'Image Description',
    thumbnail: 'https://live.staticflickr.com/65535/54463090280_eb33ceef3e_b.jpg',
    fullImage: 'https://live.staticflickr.com/65535/54463090280_eb33ceef3e_b.jpg',
    category: 'work'
  },
  {
    id: '1',
    title: 'Virtual Meeting with Team',
    description: 'Discussing project roadmap with the development team during our weekly sprint planning.',
    thumbnail: 'https://live.staticflickr.com/65535/54243013808_38b84b8852_b.jpg',
    fullImage: 'https://live.staticflickr.com/65535/54243013808_38b84b8852_b.jpg',
    category: 'meeting'
  },
  {
    id: '2',
    title: 'Teaching Programming',
    description: 'Helping students learn the fundamentals of programming and problem-solving.',
    thumbnail: 'https://live.staticflickr.com/65535/54241877137_db52c069b3_b.jpg',
    fullImage: 'https://live.staticflickr.com/65535/54241877137_db52c069b3_b.jpg',
    category: 'teaching'
  },
  {
    id: '3',
    title: 'Mentoring Session',
    description: 'One-on-one mentoring session with a student interested in web development.',
    thumbnail: 'https://live.staticflickr.com/65535/54243017834_01abae974b_b.jpg',
    fullImage: 'https://live.staticflickr.com/65535/54243017834_01abae974b_b.jpg',
    category: 'teaching'
  },
  {
    id: '4',
    title: 'Special Needs Education',
    description: 'Working with students with special needs to develop their math skills.',
    thumbnail: 'https://live.staticflickr.com/65535/54242780096_54ebefcb55_b.jpg',
    fullImage: 'https://live.staticflickr.com/65535/54242780096_54ebefcb55_b.jpg',
    category: 'teaching'
  },
  {
    id: '12',
    title: 'Brainstorming Session',
    description: 'Creative brainstorming session with the product team.',
    thumbnail: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2670&auto=format&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2670&auto=format&fit=crop',
    category: 'work'
  },
  {
    id: '5',
    title: 'Programming Workshop',
    description: 'Teaching programming concepts to a student with special needs.',
    thumbnail: 'https://live.staticflickr.com/65535/54243013718_099964aaae_b.jpg',
    fullImage: 'https://live.staticflickr.com/65535/54243013718_099964aaae_b.jpg',
    category: 'teaching'
  },
  {
    id: '6',
    title: 'Project Development',
    description: 'Working on developing a new social impact project with team members.',
    thumbnail: 'https://live.staticflickr.com/65535/54301972399_fbe8390645_k.jpg',
    fullImage: 'https://live.staticflickr.com/65535/54301972399_fbe8390645_k.jpg',
    category: 'work'
  },
  {
    id: '7',
    title: 'Client Consultation',
    description: 'Remote meeting with clients to discuss project requirements and expectations.',
    thumbnail: 'https://live.staticflickr.com/65535/54301984603_c9be18679a_k.jpg',
    fullImage: 'https://live.staticflickr.com/65535/54301984603_c9be18679a_k.jpg',
    category: 'meeting'
  },
  {
    id: '8',
    title: 'Team Collaboration',
    description: 'Working collaboratively with team members on a challenging problem.',
    thumbnail: 'https://live.staticflickr.com/65535/54301984598_2645d9dc9a_k.jpg',
    fullImage: 'https://live.staticflickr.com/65535/54301984598_2645d9dc9a_k.jpg',
    category: 'work'
  },
  {
    id: '9',
    title: 'Community Workshop',
    description: 'Leading a workshop for community members interested in technology.',
    thumbnail: 'https://live.staticflickr.com/65535/54300859257_af9f01025c_k.jpg',
    fullImage: 'https://live.staticflickr.com/65535/54300859257_af9f01025c_k.jpg',
    category: 'event'
  },
  {
    id: '10',
    title: 'Tech Conference Presentation',
    description: 'Presenting my research findings at the annual tech conference.',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop',
    category: 'event'
  },
  {
    id: '11',
    title: 'Online Mentoring Session',
    description: 'Remote mentoring session with international students.',
    thumbnail: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2574&auto=format&fit=crop',
    fullImage: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2574&auto=format&fit=crop',
    category: 'teaching'
  }
];