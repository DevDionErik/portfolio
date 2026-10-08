import { type Experience, experiences } from './experience';

export type User = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  location: string;
  domain: string;
  website: string;
  description: string;
  jobTitle: string;
  twitterHandle: string;
  namePronunciationUrl: string;
  username: string;
  tagline: string;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
    bluesky: string;
  };
  image: { profile: string };
  flipSentences: string[];
  experiences?: Experience[];
};

const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN || 'localhost:6969';
const website = `${domain.startsWith('localhost') ? 'http' : 'https'}://${domain}`;

const USER: User = {
  firstName: 'Dion',
  lastName: 'Erik',
  name: 'Dion Erik',
  email: '',
  domain,
  website,
  jobTitle: 'Desenvolvimento Web · Tecnologia · TI · Automação',
  username: 'DevDionErik',
  tagline: 'Dion Erik — Desenvolvimento web e automação',
  twitterHandle: '',
  location: 'Brasil',
  description:
    'Estudante do Ensino Médio construindo carreira em tecnologia, com foco em desenvolvimento web, programação e automação.',
  namePronunciationUrl: '',
  social: {
    twitter: '',
    github: 'https://github.com/DevDionErik',
    linkedin: 'https://www.linkedin.com/in/dion-erik/',
    bluesky: '',
  },
  flipSentences: [
    'Desenvolvimento web e soluções digitais.',
    'Tecnologia, programação e automação.',
    'Aprendendo e construindo projetos próprios.',
  ],
  image: { profile: 'https://github.com/DevDionErik.png' },
  experiences,
};

export { USER };
