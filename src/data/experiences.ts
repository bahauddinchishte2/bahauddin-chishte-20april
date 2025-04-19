export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  type: 'full-time' | 'part-time' | 'freelance' | 'contract';
  logo: string; // Add this new field
  url?: string;
}

export const experiences: Experience[] = [
  {
    title: 'Operations & Fulfillment Lead',
    company: 'oLab.',
    period: ' Jan 2024 - Present',
    type: 'full-time',
    description: 'Leading client projects and managing digital solutions from conception to delivery.',
    achievements: [
      'Successfully managed 4 concurrent client projects',
      'Improved project delivery time by 30%',
      'Implemented standardized project management processes'
    ],
    skills: ['Project Management', 'Digital Marketing', 'Web Development', 'Client Relations'],
    url: 'https://olab.com.au',
    logo: 'https://live.staticflickr.com/65535/54301804601_f423b77250_b.jpg'
  },
  {
    title: 'Product Developer & Content Specialist',
    company: 'Vocabulary Builder',
    period: 'Dec 2023 - Jun 2024',
    type: 'contract',
    description: 'Developed educational content and maintained full-stack applications for language learning.',
    achievements: [
      'Created 200+ educational content pieces',
      'Increased user engagement by 45%',
      'Optimized application performance'
    ],
    skills: ['Content Development', 'Full-stack Development', 'UX Design', 'Educational Technology'],
    url: 'https://vocabbuilder.com',
    logo: 'https://vocabpractice.com/assets/images/vocabpractice.png'
  },
  {
    title: 'Promotion And Public Relations Executive',
    company: 'Aemers',
    period: '2018 - 2019',
    type: 'part-time',
    description: 'Built responsive web interfaces and implemented RESTful APIs for startup clients.',
    achievements: [
      'Developed 5+ client websites',
      'Reduced page load time by 40%',
      'Implemented mobile-first design approach'
    ],
    skills: ['React', 'Node.js', 'REST APIs', 'Responsive Design'],
    url: 'https://startuphub.com',
    logo: 'https://live.staticflickr.com/65535/54300941782_447110db03_b.jpg'
  },
  {
    title: 'Customer Support & Community Specialist',
    company: 'Passive Journal',
    period: 'Jan 2022 - Dec 2022',
    type: 'full-time',
    description: 'Built responsive web interfaces and implemented RESTful APIs for startup clients.',
    achievements: [
      'Developed 5+ client websites',
      'Reduced page load time by 40%',
      'Implemented mobile-first design approach'
    ],
    skills: ['Customer Support', 'Communication', 'Management', 'Data Analysis','Sales'],
    url: 'https://passivejournal.com',
    logo: 'https://live.staticflickr.com/65535/54302064994_aba9830668_b.jpg'
  },
  {
    title: 'Community Manager & Sales Associate ',
    company: 'Apars Classroom',
    period: 'Jan 2020 - July 2021',
    type: 'part-time',
    description: 'Bangladesh 2nd Largest edtech platform that offers K-12 academic courses via 3D lectures.',
    achievements: [
      'Developed 5+ client websites',
      'Reduced page load time by 40%',
      'Implemented mobile-first design approach'
    ],
    skills: ['People Management', 'Digital Marketing', 'Sales', 'Data Analysis','Communication'],
    url: 'https://aparsclasroom.com',
    logo: 'https://live.staticflickr.com/65535/54302067168_1275cfc288_b.jpg'
  }
];