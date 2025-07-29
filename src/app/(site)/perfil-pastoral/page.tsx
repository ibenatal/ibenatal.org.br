import { ContentLayout } from '@/components/layout/ContentLayout';
import PerfilPastoral from './perfil-pastoral.mdx';

export default function PerfilPastoralPage() {
  return (
    <ContentLayout
      image="/images/cultos/cultos-1.png"
      title="Perfil Pastoral"
      breadcrumbs={[{ label: 'Perfil Pastoral', href: '/perfil-pastoral' }]}
    >
      <PerfilPastoral />
    </ContentLayout>
  );
}
