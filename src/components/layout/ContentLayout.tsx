import Image from 'next/image';
import { SectionContainer } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

type ContentLayoutProperties = {
  image: string;
  title: string;
  breadcrumbs: { label: string; href: string }[];
  children: React.ReactNode;
};

export function ContentLayout({ image, title, breadcrumbs, children }: ContentLayoutProperties) {
  return (
    <main className="relative bg-neutral-100">
      <div className="absolute top-0 left-0 z-0 h-[300px] w-full bg-blue-500 lg:h-[500px]">
        <Image src={image} alt={title} fill sizes="100vw" className="object-cover" />
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-black/70"></div>
      </div>
      <SectionContainer className="relative z-10 max-w-4xl pt-28" isContentPage>
        <div className="flex flex-col gap-6 px-2.5 sm:px-0">
          <h1 className="font-bold text-4xl text-white">{title}</h1>
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="rounded-lg bg-white">
          <div className="flex flex-col gap-8 px-0 py-4 lg:p-10">{children}</div>
        </div>
      </SectionContainer>
    </main>
  );
}
