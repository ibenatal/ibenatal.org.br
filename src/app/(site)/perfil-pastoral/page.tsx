import type { Metadata } from 'next';
import { ContentLayout } from '@/components/layout/ContentLayout';
import { WebPageSchema } from '@/lib/schema';
import PerfilPastoral from './perfil-pastoral.mdx';

export const metadata: Metadata = {
  title: 'Perfil Pastoral - Rev. Celso Adriano da Silva | IBE Natal',
  description:
    'Conheça o Rev. Celso Adriano da Silva, pastor da Igreja Batista da Esperança. Graduado em Teologia e Mestre em Novo Testamento, especializado em pregação expositiva e aconselhamento bíblico desde 2003.',
  keywords: [
    'Rev. Celso Adriano da Silva',
    'pastor',
    'Igreja Batista da Esperança',
    'IBE',
    'pregação expositiva',
    'aconselhamento bíblico',
    'teologia',
    'novo testamento',
    'ministério pastoral',
  ],
  openGraph: {
    title: 'Perfil Pastoral - Rev. Celso Adriano da Silva | IBE Natal',
    description:
      'Conheça o Rev. Celso Adriano da Silva, pastor da Igreja Batista da Esperança. Especializado em pregação expositiva e aconselhamento bíblico.',
    type: 'website',
  },
};

export default function PerfilPastoralPage() {
  const fullImageUrl = new URL('/images/cultos/cultos-1.png', 'https://ibenatal.org.br').toString();

  const fullUrl = new URL('/perfil-pastoral', 'https://ibenatal.org.br').toString();

  return (
    <>
      <WebPageSchema
        name="Perfil Pastoral - Rev. Celso Adriano da Silva | IBE Natal"
        description="Conheça o Rev. Celso Adriano da Silva, pastor da Igreja Batista da Esperança. Graduado em Teologia e Mestre em Novo Testamento, especializado em pregação expositiva e aconselhamento bíblico desde 2003."
        image={fullImageUrl}
        url={fullUrl}
        author="IBE - Igreja Batista da Esperança"
        datePublished="2003"
        breadcrumbs={[
          { name: 'Home', item: 'https://ibenatal.org.br/' },
          { name: 'Perfil Pastoral', item: 'https://ibenatal.org.br/perfil-pastoral' },
        ]}
      />

      <ContentLayout
        image="/images/cultos/cultos-1.png"
        title="Perfil Pastoral"
        breadcrumbs={[{ label: 'Perfil Pastoral', href: '/perfil-pastoral' }]}
      >
        <PerfilPastoral />
      </ContentLayout>
    </>
  );
}
