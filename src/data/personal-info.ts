export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  images: string[];
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: 'Baha',
  role: 'Tech Entrepreneur',
  bio: "I'm an emerging tech entrepreneur who loves to solve problem that using technology that makes people lives easier. Aside tech I'm actively working on SaaS, product, marketing and business development",
  images: [
    'https://avatars.githubusercontent.com/u/91181868?v=4',
    'https://live.staticflickr.com/65535/54241877452_39dc62951f_k.jpg',
    'https://live.staticflickr.com/65535/54242780096_6fd0e9f8cd_k.jpg',
    'https://live.staticflickr.com/65535/54242779836_4c08f24151_k.jpg'
    
  ],
  contact: {
    email: 'bahauddin.chishte@gmail.com',
    phone: '+880 1621 28 5057',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/bahauddin-chishte/',
  },
};