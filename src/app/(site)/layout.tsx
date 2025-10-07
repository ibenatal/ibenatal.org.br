// import { useIsMobile } from '@/hooks/useBreakpoint';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MobileBottomBar } from '@/components/layout/menu/MobileBottomBar';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  // const isMobile = useIsMobile();

  return (
    <div className="pt-14 md:pt-0">
      <Header />
      {children}
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
