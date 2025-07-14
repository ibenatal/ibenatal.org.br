import Image from 'next/image';
import { SectionContainer } from '../layout/Container';
import {
  CardDescription,
  CardTitle,
  SectionDescription,
  SectionTitle,
} from './HomeTypography';

export default function OurMinistries() {
  return (
    <section aria-label="Redes de Comunhão">
      <SectionContainer>
        <div className="flex flex-col gap-6 sm:gap-8">
          <SectionTitle title="Redes de Comunhão" />
          <SectionDescription description="Nossa igreja é composta por várias redes que trabalham juntos para levar a palavra de Deus a todos." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {redes.slice(0, 3).map((rede) => (
            <div key={rede.id} className="flex flex-col gap-6 sm:gap-8">
              <div className="relative h-[192px] w-full">
                <Image
                  src={rede.image}
                  alt={rede.title}
                  height={333}
                  width={192}
                  className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
                />
              </div>
              <CardTitle title={rede.title} />
              <CardDescription description={rede.description} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-auto md:w-2/3 mt-8">
          {redes.slice(3).map((rede) => (
            <div key={rede.id} className="flex flex-col gap-6 sm:gap-8">
              <div className="relative h-[192px] w-full">
                <Image
                  src={rede.image}
                  alt={rede.title}
                  height={333}
                  width={192}
                  className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
                />
              </div>
              <CardTitle title={rede.title} />
              <CardDescription description={rede.description} />
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

const redes: {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}[] = [
  {
    id: 1,
    title: 'Jovens',
    description:
      'A contribuição fiel garante que a igreja mantenha sua voz profética, sem precisar negociar princípios por favores ou recursos governamentais.',
    image: '/images/jovens.png',
    link: '/jovens',
  },
  {
    id: 2,
    title: 'Casais',
    description:
      'A rede de apoio para casais que desejam viver uma vida de amor e harmonia.',
    image: '/images/casais.png',
    link: '/casais',
  },
  {
    id: 3,
    title: 'Crianças',
    description: 'A igreja que ama os filhos e os transforma em líderes.',
    image: '/images/criancas.png',
    link: '/criancas',
  },
  {
    id: 4,
    title: 'Homens',
    description: 'A igreja que ama os filhos e os transforma em líderes.',
    image: '/images/casais.png',
    link: '/homens',
  },
  {
    id: 5,
    title: 'Mulheres',
    description: 'A igreja que ama os filhos e os transforma em líderes.',
    image: '/images/casais.png',
    link: '/mulheres',
  },
];
