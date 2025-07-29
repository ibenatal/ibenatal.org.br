import Image from 'next/image';
import { SectionContainer } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

type ContentLayoutProps = {
  image: string;
  title: string;
  breadcrumbs: { label: string; href: string }[];
  children: React.ReactNode;
};

export function ContentLayout({ image, title, breadcrumbs, children }: ContentLayoutProps) {
  return (
    <main className="bg-neutral-100 relative">
      <div className="bg-blue-500 h-[300px] lg:h-[500px] absolute top-0 left-0 w-full z-0">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
      </div>
      <SectionContainer className="relative z-10 pt-28 max-w-4xl">
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-4xl font-bold">{title}</h1>
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="bg-white rounded-lg">
          <div className="p-4 lg:p-10 flex flex-col gap-8">{children}</div>
        </div>
      </SectionContainer>
    </main>
  );
}
