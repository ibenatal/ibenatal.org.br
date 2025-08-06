import type { Metadata } from 'next';
import { ContentLayout } from '@/components/layout/ContentLayout';
import About from './about.mdx';

export const metadata: Metadata = {
  title: 'Sobre a IBE - Igreja Batista da Esperança',
  description:
    'Conheça a história da Igreja Batista da Esperança, fundada em 1969. Uma comunidade de fé comprometida com a proclamação do Evangelho e o cuidado com os mais vulneráveis. Nossa visão: ser uma família de muitos filhos semelhantes a Jesus.',
  keywords: [
    'Igreja Batista da Esperança',
    'IBE',
    'igreja',
    'batista',
    'esperança',
    'fé',
    'evangelho',
    'família espiritual',
  ],
  openGraph: {
    title: 'Sobre a IBE - Igreja Batista da Esperança',
    description:
      'Conheça a história da Igreja Batista da Esperança, fundada em 1969. Uma comunidade de fé comprometida com a proclamação do Evangelho.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <ContentLayout
      image="/images/articles/blog-header.png"
      title="Sobre a IBE"
      breadcrumbs={[{ label: 'Sobre Nós', href: '/sobre-nos' }]}
    >
      <About />
    </ContentLayout>
  );
}
