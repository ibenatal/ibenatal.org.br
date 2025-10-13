import LinkPageContainer from '@/components/links/LinkPageContainer';
import { linksData } from '@/data/links';

export default function LinksPage() {
  return <LinkPageContainer linksFor={linksData} />;
}
