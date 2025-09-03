import type { Metadata } from 'next';
import { ContentLayout } from '@/components/layout/ContentLayout';
import MissaoRiachuelo from './missao-riachuelo.mdx';

export const metadata: Metadata = {
  title: 'Missão Riachuelo - Congregação IBE | IBE Natal',
  description:
    'Conheça a história da Missão Riachuelo, a primeira Igreja Batista plantada nas terras riachuelenses. Uma jornada de fé, obediência e perseverança desde 2019.',
  keywords: [
    'Missão Riachuelo',
    'Congregação Riachuelo',
    'Igreja Batista da Esperança',
    'IBE',
    'missão pioneira',
    'Escola de Sertões',
    'Messias e Thalita',
    'plantação de igreja',
    'evangelismo sertanejo',
    'Pequenos Grupos',
  ],
  openGraph: {
    url: 'https://ibenatal.org.br/missao-riachuelo',
    title: 'Missão Riachuelo - Congregação IBE | IBE Natal',
    description:
      'Conheça a história da Missão Riachuelo, a primeira Igreja Batista plantada nas terras riachuelenses.',
    type: 'website',
    images: [
      {
        url: '/images/missao-riachuelo/igreja-batista-de-riachuelo.jpg',
        width: 1200,
        height: 630,
        alt: 'Missão Riachuelo - Igreja Batista da Esperança',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Missão Riachuelo - Congregação IBE | IBE Natal',
    description: 'Conheça a história da Missão Riachuelo, a primeira Igreja Batista plantada nas terras riachuelenses.',
    images: ['/images/missao-riachuelo/igreja-batista-de-riachuelo.jpg'],
  },
};

export default function MissaoRiachueloPage() {
  return (
    <ContentLayout
      image="/images/missao-riachuelo/igreja-batista-de-riachuelo.jpg"
      title="Missão Riachuelo"
      breadcrumbs={[{ label: 'Missão Riachuelo', href: '/missao-riachuelo' }]}
    >
      <MissaoRiachuelo />
    </ContentLayout>
  );
}
