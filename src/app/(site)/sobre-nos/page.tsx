import type { Metadata } from 'next';
import { ContentLayout } from '@/components/layout/ContentLayout';
import { WebPageSchema } from '@/lib/schema';
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
  // Full URLs for schema
  const fullImageUrl = new URL(
    '/images/articles/blog-header.png',
    'https://ibenatal.org.br',
  ).toString();
  
  const fullUrl = new URL('/sobre-nos', 'https://ibenatal.org.br').toString();

  return (
    <>
      <WebPageSchema
        name="Sobre a IBE - Igreja Batista da Esperança"
        description="Conheça a história da Igreja Batista da Esperança, fundada em 1969. Uma comunidade de fé comprometida com a proclamação do Evangelho e o cuidado com os mais vulneráveis. Nossa visão: ser uma família de muitos filhos semelhantes a Jesus."
        image={fullImageUrl}
        url={fullUrl}
        author="IBE - Igreja Batista da Esperança"
        datePublished="1969"
        breadcrumbs={[
          { name: 'Home', item: 'https://ibenatal.org.br/' },
          { name: 'Sobre Nós', item: 'https://ibenatal.org.br/sobre-nos' }
        ]}
      />
      
      <ContentLayout
        image="/images/articles/blog-header.png"
        title="Sobre a IBE"
        breadcrumbs={[{ label: 'Sobre Nós', href: '/sobre-nos' }]}
      >
        <About />
      </ContentLayout>
    </>
  );
}
