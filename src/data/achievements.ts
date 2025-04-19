export interface Achievement {
  title: string;
  category: string;
  date: string;
  organization: string;
  description: string;
  image: string;
}

export const achievements: Achievement[] = [
  {
    title: 'With my students in Inclusionx',
    category: 'Volunteering',
    date: '2023',
    organization: 'InclusionX',
    description:
      'Achieved professional certification demonstrating expertise in designing distributed systems and deploying applications on AWS infrastructure.',
    image:
      'https://live.staticflickr.com/65535/54243013808_38b84b8852_b.jpg',
  },
  {
    title: 'Tought underprivileged kids',
    category: 'Volunteering',
    date: '2023',
    organization: 'Samata School Bangladesh',
    description:
      'Achieved professional certification demonstrating expertise in designing distributed systems and deploying applications on AWS infrastructure.',
    image:
      'https://live.staticflickr.com/65535/54241877137_db52c069b3_b.jpg',
  },
  {
    title: 'My students from Samata school Bangladesh',
    category: 'Volunteering',
    date: '2022',
    organization: 'Samata School Bangladesh',
    description:
      'Achieved professional certification demonstrating expertise in designing distributed systems and deploying applications on AWS infrastructure.',
    image:
      'https://live.staticflickr.com/65535/54243017834_01abae974b_b.jpg',
  },

  {
    title: 'Taught Maths to Student With Special Needs.',
    category: 'Volunteering',
    date: '2023',
    organization: 'InclusionX',
    description:
      'Achieved professional certification demonstrating expertise in designing distributed systems and deploying applications on AWS infrastructure.',
    image:
      'https://live.staticflickr.com/65535/54242780096_54ebefcb55_b.jpg',
  },
  {
    title: 'Taught Programming to Student With Special Needs.',
    category: 'Volunteering',
    date: '2023',
    organization: 'InclusionX',
    description:
      'This is Abdullah (A student with special needs). I tought him basics of programing and logic.',
    image:
      'https://live.staticflickr.com/65535/54243013718_099964aaae_b.jpg',
  },
  {
    title: 'Innovation Award',
    category: 'awards',
    date: '2023',
    organization: 'Tech Conference 2023',
    description:
      'Recognized for developing an innovative AI-powered solution that revolutionized customer service automation.',
    image:
      'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Hackathon Winner',
    category: 'achievements',
    date: '2022',
    organization: 'Global Tech Hackathon',
    description:
      'Led a team of four to victory by creating a sustainable technology solution for reducing urban waste management costs.',
    image:
      'https://images.unsplash.com/photo-1496469888073-80de7e952517?auto=format&fit=crop&w=800&q=80',
  },
];