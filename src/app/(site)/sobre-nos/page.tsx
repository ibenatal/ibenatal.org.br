import { ContentLayout } from '@/components/layout/ContentLayout';
import About from './about.mdx';

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
