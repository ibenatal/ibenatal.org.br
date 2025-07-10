import {
  BookIcon,
  Calendar1Icon,
  HomeIcon,
  type LucideIcon,
  MailIcon,
  ScrollTextIcon,
} from 'lucide-react';

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
    label: 'Blog',
    icon: BookIcon,
  },
  {
    to: '/sermoes',
    label: 'Sermões',
    icon: ScrollTextIcon,
  },
  {
    to: '/eventos',
    label: 'Eventos',
    icon: Calendar1Icon,
  },
  {
    to: '/contatos',
    label: 'Contato',
    icon: MailIcon,
  },
];
