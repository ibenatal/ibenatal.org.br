import Image from 'next/image';
import Link from 'next/link';
import { SectionContainer } from '../layout/Container';
import { Button } from '../ui/button';
import { CardTitle, SectionDescription, SectionTitle } from './HomeTypography';

export function OurPastor() {
  const pastorName = 'Rev. Celso';
  const pastorDescription = [
    'O Rev. Celso Adriano da Silva é um servo dedicado à Palavra de Deus, com uma trajetória marcada pela fidelidade ao evangelho e pelo zelo no ensino bíblico. Com sólida formação teológica e uma vocação pastoral enraizada no amor a Cristo e às pessoas, ele tem servido à igreja com graça, profundidade e compromisso.',
  ];
  const pastorImageUrl = '/images/pastor-celso.jpeg';
  const pastorUrl = '/perfil-pastoral';

  return (
    <section aria-label="Perfil Pastoral">
      <SectionContainer>
        <header className="flex flex-col gap-8">
          <SectionTitle title="Perfil Pastoral" />
          <SectionDescription description="Conheça o pastor da IBE Natal" />
        </header>

        <article className="flex flex-col gap-6 sm:gap-8 sm:flex-row">
          <div className="flex flex-col gap-8 w-full sm:w-5/12">
            <CardTitle title={pastorName} className="text-left" />
            <div className="flex flex-col gap-4">
              {pastorDescription.map((description, index) => (
                <p key={String(index)} className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  {description}
                </p>
              ))}
            </div>
            <div className="flex justify-center sm:justify-start">
              <Button asChild outline>
                <Link href={pastorUrl} aria-label={`Conhecer mais sobre ${pastorName}`}>
                  Conhecer mais
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full sm:w-7/12 h-[450px]">
            <Image
              src={pastorImageUrl}
              alt={pastorName}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded object-cover"
            />
          </div>
        </article>
      </SectionContainer>
    </section>
  );
}
