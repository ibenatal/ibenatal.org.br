import { BookIcon, HomeIcon, InfoIcon, type LucideIcon, MailIcon } from 'lucide-react';

export const menuItems: {
  to: string;
  label: string;
  icon: LucideIcon;
}[] = [
  {
    to: '/',
    label: 'Home',
    icon: HomeIcon,
  },
  {
    to: '/blog',
    label: 'Artigos',
    icon: BookIcon,
  },
  {
    to: '/sobre-nos',
    label: 'Sobre Nós',
    icon: InfoIcon,
  },
  // {
  //   to: '/eventos',
  //   label: 'Eventos',
  //   icon: Calendar1Icon,
  // },
  {
    to: '/contatos',
    label: 'Contatos',
    icon: MailIcon,
  },
];
