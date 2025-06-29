// import { useIsMobile } from '@/hooks/useBreakpoint';

import { Header } from '@/components/layout/Header';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isMobile = useIsMobile();

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
