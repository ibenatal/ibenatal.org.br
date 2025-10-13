import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import LinkPageContainer from '@/components/links/LinkPageContainer';
import { linksData } from '@/data/links';

export const metadata: Metadata = {
  title: 'Links',
  description: 'Acesso rápido aos nossos links oficiais',
  alternates: { canonical: '/links' },
  openGraph: {
    title: 'Links - IBE Natal',
    description: 'Acesso rápido aos nossos links oficiais',
    type: 'website',
  },
};

export default async function LinksPage({ params }: { params: Promise<{ forLink: string }> }) {
  const { forLink } = await params;
  const linksFor = linksData.filter((item) => item.forLink.includes(forLink));

  if (linksFor.length === 0) {
    return redirect('/links');
  }

  return <LinkPageContainer linksFor={linksFor} />;
}
