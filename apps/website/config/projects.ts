export type Project = {
  id: string;
  title: string;
  period: { start: string; end?: string };
  link?: string;
  github?: string;
  skills: string[];
  shortDescription?: string;
  description?: string;
  logo?: string;
  isExpanded?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: 'orvion-orders',
    title: 'Orvion Orders',
    period: { start: 'Em desenvolvimento' },
    skills: ['Desenvolvimento web', 'Gestão de pedidos', 'QR Code'],
    shortDescription:
      'Sistema web para restaurantes com cardápio por QR Code, pedidos, mesas e níveis de acesso para equipes e administradores.',
    isExpanded: true,
  },
  {
    id: 'convite-batizado-digital',
    title: 'Convite de Batizado Digital',
    period: { start: 'Projetos próprios' },
    link: 'https://github.com/DevDionErik/Convite-Batizado-Digital',
    github: 'https://github.com/DevDionErik/Convite-Batizado-Digital',
    skills: ['Desenvolvimento web', 'Convite digital'],
    shortDescription:
      'Projeto de convite digital para batizado, desenvolvido como uma experiência web.',
  },
  {
    id: 'pizzaria-quintal-site',
    title: 'Pizzaria Quintal',
    period: { start: 'Projetos próprios' },
    link: 'https://github.com/DevDionErik/pizzaria-quintal-site',
    github: 'https://github.com/DevDionErik/pizzaria-quintal-site',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp'],
    shortDescription:
      'Site para pizzaria com apresentação do negócio e acesso fácil aos canais de contato.',
  },
  {
    id: 'aurora-confeitaria',
    title: 'Aurora Confeitaria',
    period: { start: 'Projetos próprios' },
    link: 'https://github.com/ghostSIX00/aurora-confeitaria',
    github: 'https://github.com/ghostSIX00/aurora-confeitaria',
    skills: ['Desenvolvimento web', 'Pequenos negócios'],
    shortDescription:
      'Site para uma confeitaria, pensado para apresentar produtos e fortalecer sua presença digital.',
  },
  {
    id: 'automacoes',
    title: 'Estudos de automação',
    period: { start: 'Em andamento' },
    skills: ['n8n', 'IA', 'Integração de sistemas'],
    shortDescription:
      'Exploração de automações de processos e integrações entre ferramentas e sistemas.',
  },
];
