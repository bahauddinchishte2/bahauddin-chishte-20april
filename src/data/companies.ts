export interface Company {
  id: string;
  name: string;
  logo: string;
  role?: string;
  period?: string;
  url?: string;
}

export const companies: Company[] = [
  {
    id: "1",
    name: "oLab.",
    logo: "https://live.staticflickr.com/65535/54301804601_f423b77250_b.jpg",
    role: "Operations & Fulfillment Lead",
    period: "Jan 2024 - Present",
    url: "https://olab.com.au"
  },
  {
    id: "2",
    name: "Vocabulary Builder",
    logo: "https://vocabpractice.com/assets/images/vocabpractice.png",
    role: "Product Developer & Content Specialist",
    period: "Dec 2023 - Jun 2024",
    url: "https://vocabbuilder.com"
  },
  {
    id: "3",
    name: "Aemers",
    logo: "https://live.staticflickr.com/65535/54300941782_447110db03_b.jpg",
    role: "Promotion And Public Relations Executive",
    period: "2018 - 2019",
    url: "https://aemers.com"
  },
  {
    id: "4",
    name: "Passive Journal",
    logo: "https://live.staticflickr.com/65535/54302064994_aba9830668_b.jpg",
    role: "Customer Support & Community Specialist",
    period: "Jan 2022 - Dec 2022",
    url: "https://passivejournal.com"
  },
  {
    id: "5",
    name: "Apars Classroom",
    logo: "https://live.staticflickr.com/65535/54302067168_1275cfc288_b.jpg",
    role: "Community Manager & Sales Associate",
    period: "Jan 2020 - July 2021",
    url: "https://aparsclasroom.com"
  },
  {
    id: "6",
    name: "InclusionX",
    logo: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?q=80&w=800&auto=format&fit=crop",
    role: "Programming and Math Instructor",
    period: "May 2023 - Jan 2024",
    url: "https://inclusionx.org"
  },
  {
    id: "7",
    name: "CS50",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/800px-Harvard_shield_wreath.svg.png",
    role: "Translator",
    period: "Jun 2022 - Sep 2022",
    url: "https://cs50.harvard.edu"
  },
  {
    id: "8",
    name: "The Odin Project",
    logo: "https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project/sources/logos/odin-project.svg",
    role: "Contributor",
    period: "2021 - Present",
    url: "https://theodinproject.com"
  }
];