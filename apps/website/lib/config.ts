import { Icons } from '@/components/icons';
import { USER } from '@/config/user';

export const DockConfig = {
  navbar: [
    { href: '/', icon: Icons.home, label: 'Início' },
  ],
  contact: {
    social: {
      GitHub: {
        name: 'GitHub',
        url: USER.social.github,
        icon: Icons.github,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: USER.social.linkedin,
        icon: Icons.linkedin,
      },
    },
  },
};
