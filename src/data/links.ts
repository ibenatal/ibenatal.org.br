import { locationInfo, socialLinks, whatsapp } from './contacts';

export type LinkItem = {
  title: string;
  label: string;
  href: string;
  image: string; 
  forLink: string[];
};

export const linksData: LinkItem[] = [
  {
    title: 'Site IBE Natal',
    label: 'Visite nosso site',
    href: socialLinks.site.href,
    image: '/images/ibe-logo.png',
    forLink: ['all', 'instagram'],
  },
  {
    title: 'Instagram',
    label: socialLinks.instagram.username,
    href: socialLinks.instagram.href,
    image: '/images/instagram-logo.png',
    forLink: ['all'],
  },
  {
    title: 'YouTube',
    label: socialLinks.youtube.username,
    href: socialLinks.youtube.href,
    image: '/images/youtube-logo.png',
    forLink: ['all', 'instagram'],
  },
  {
    title: 'Contato no WhatsApp',
    label: whatsapp.label,
    href: whatsapp.hrefWithMessage,
    image: '/images/whatsapp-logo.png',
    forLink: ['all', 'instagram'],
  },
  {
    title: 'Localização',
    label: 'Ver no Google Maps',
    href: locationInfo.googleMaps,
    image: '/images/google-maps-logo.png',
    forLink: ['all', 'instagram'],
  },
];


