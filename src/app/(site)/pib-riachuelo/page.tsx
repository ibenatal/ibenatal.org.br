import type { Metadata } from 'next';
import { ContentLayout } from '@/components/layout/ContentLayout';
import { ChurchOrganizationSchema } from '@/lib/schema';
import MissaoRiachuelo from './pib-riachuelo.mdx';

export const metadata: Metadata = {
  title: 'PIB Riachuelo - Congregação',
  description:
    'Conheça a história da PIB Riachuelo, a primeira Igreja Batista plantada nas terras riachuelenses. Uma jornada de fé, obediência e perseverança desde 2019.',
  keywords: [
    'PIB Riachuelo',
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
    url: 'https://ibenatal.org.br/pib-riachuelo',
    title: 'PIB Riachuelo - Congregação IBE | IBE Natal',
    description:
      'Conheça a história da PIB Riachuelo, a primeira Igreja Batista plantada nas terras riachuelenses.',
    type: 'website',
    images: [
      {
        url: '/images/pib-riachuelo/igreja-batista-de-riachuelo.jpg',
        width: 1200,
        height: 630,
        alt: 'PIB Riachuelo - Igreja Batista da Esperança',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PIB Riachuelo - Congregação IBE | IBE Natal',
    description: 'Conheça a história da PIB Riachuelo, a primeira Igreja Batista plantada nas terras riachuelenses.',
    images: ['/images/pib-riachuelo/igreja-batista-de-riachuelo.jpg'],
  },
};

export default function MissaoRiachueloPage() {
  // Full URLs for schema
  const fullImageUrl = new URL(
    '/images/pib-riachuelo/igreja-batista-de-riachuelo.jpg',
    'https://ibenatal.org.br',
  ).toString();
  
  const fullUrl = new URL('/pib-riachuelo', 'https://ibenatal.org.br').toString();

  return (
    <>
      <ChurchOrganizationSchema
        name="PIB Riachuelo - Igreja Batista da Esperança"
        description="Conheça a história da PIB Riachuelo, a primeira Igreja Batista plantada nas terras riachuelenses. Uma jornada de fé, obediência e perseverança desde 2019."
        image={fullImageUrl}
        url={fullUrl}
        address="Riachuelo, Rio Grande do Norte, Brasil"
        foundingDate="2019"
        parentOrganization="Igreja Batista da Esperança - IBE Natal"
      />
      
      <ContentLayout
        image="/images/pib-riachuelo/igreja-batista-de-riachuelo.jpg"
        title="PIB Riachuelo"
        breadcrumbs={[{ label: 'PIB Riachuelo', href: '/pib-riachuelo' }]}
      >
        <MissaoRiachuelo />
      </ContentLayout>
    </>
  );
}
