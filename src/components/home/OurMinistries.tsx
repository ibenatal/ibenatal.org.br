import Image from 'next/image';
import { SectionContainer } from '../layout/Container';
import { CardParagraph, CardTitle, SectionTitle } from './HomeTypography';

export default function OurMinistries() {
  return (
    <section aria-label="Nossas Redes">
      <SectionContainer>
        <div className="flex flex-col gap-6 sm:gap-18">
          <SectionTitle title="Nossas Redes" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8">
            <div className="flex flex-col gap-6 sm:gap-8 items-center">
              <CardTitle>Definição de Redes</CardTitle>
              <CardParagraph className="lg:text-base">
                As redes são grupos intencionais que visam conectar as pessoas
                dentro da igreja, formados com base em características
                compartilhadas, interesses comuns ou estágios de vida similares.
                São grupos fundamentados nos princípios bíblicos de comunhão e
                encorajamento mútuo (At. 2:42-47; Hb. 10:24-25). Estes grupos
                servem como plataformas dinâmicas para promover conexões mais
                profundas, crescimento qualitativo e quantitativo e engajamento
                ativo na vida da igreja e na missão cristã.
              </CardParagraph>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8 items-center">
              <CardTitle>Propósitos das Redes</CardTitle>
              <CardParagraph className="lg:text-base">
                Têm como objetivos primários atrair, conectar, e expandir,
                promovendo crescimento tanto quantitativo quanto qualitativo da
                rede. Devem focar em gerar oportunidades para evangelismo,
                comunhão, discipulado, edificação e ampliar o alcance relacional
                da igreja.
              </CardParagraph>
            </div>
            <div className="flex flex-col gap-6 sm:gap-8 items-center">
              <CardTitle>Foco das Redes</CardTitle>
              <CardParagraph className="lg:text-base">
                Devem Manter um componente devocional em todos os encontros,
                incluindo momentos de louvor, adoração e compartilhamento da
                Palavra, adaptados ao contexto de cada evento.
              </CardParagraph>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {redes.slice(0, 3).map((rede) => (
            <div key={rede.id} className="flex flex-col gap-6 sm:gap-8">
              <div className="relative aspect-video w-full">
                <Image
                  src={rede.image}
                  alt={rede.title}
                  height={333}
                  width={192}
                  quality={100}
                  className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
                />
              </div>
              <CardTitle>{rede.title}</CardTitle>
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
              {/* <CardDescription description={rede.description} /> */}
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
  image: string;
  link: string;
}[] = [
  {
    id: 3,
    title: 'Crianças',
    image: '/images/rede-de-criancas.png',
    link: '/criancas',
  },
  {
    id: 1,
    title: 'Jovens',
    image: '/images/rede-de-jovens.png',
    link: '/jovens',
  },
  {
    id: 2,
    title: 'Casais',
    image: '/images/rede-de-casais.png',
    link: '/casais',
  },
  {
    id: 4,
    title: 'Homens',
    image: '/images/rede-de-homens.png',
    link: '/homens',
  },
  {
    id: 5,
    title: 'Mulheres',
    image: '/images/rede-de-mulheres.png',
    link: '/mulheres',
  },
];
