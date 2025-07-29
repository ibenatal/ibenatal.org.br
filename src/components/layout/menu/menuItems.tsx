import { BookIcon, HomeIcon, type LucideIcon, MailIcon } from 'lucide-react';

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
  // {
  //   to: '/sermoes',
  //   label: 'Sermões',
  //   icon: ScrollTextIcon,
  // },
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
