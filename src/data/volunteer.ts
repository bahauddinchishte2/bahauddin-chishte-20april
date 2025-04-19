export interface VolunteerExperience {
  title: string;
  organization: string;
  period: string;
  description: string;
  image: string;
}

export const volunteerExperiences: VolunteerExperience[] = [
  {
    title: ' Programming and Math Instructor',
    organization: 'InclusionX',
    period: 'May 2023 - Jan 2024',
    description:
      'Mentoring underprivileged youth in web development fundamentals and modern programming practices.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Translator',
    organization: 'CS50',
    period: 'Jun 2022 - Sep 2022',
    description:
      'Contributing to open-source projects focused on education and accessibility tools.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Contributor',
    organization: 'The Odin Project',
    period: '2021 - Present',
    description:
      'Organizing and leading workshops on web development and software engineering practices.',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Cadet',
    organization: 'Bangladesh National Cadet Crops - BNCC (Army Wing)',
    period: 'Jul 2019 - Mar 2021',
    description:
      'Teaching coding fundamentals to middle school students through interactive workshops.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Youth Emporwement Lead',
    organization: 'East Moshang Young Younity',
    period: 'Jan 207 - Mar 2019',
    description:
      'Teaching coding fundamentals to middle school students through interactive workshops.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
];