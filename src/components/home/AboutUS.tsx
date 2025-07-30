import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SectionContainer } from '../layout/Container';
import {
  CardParagraph,
  CardTitle,
  SectionDescription,
  SectionTitle,
} from './HomeTypography';

export default function AboutUS() {
  return (
    <section aria-label="Sobre a IBE">
      <SectionContainer>
        <div className="flex flex-col gap-6 sm:gap-8">
          <SectionTitle title="Venha Conhecer a IBE" />
          <SectionDescription description="Estamos de braços abertos para receber você e sua família. Venha fazer parte da nossa comunidade e descobrir mais sobre nossa missão e valores." />
        </div>

        <div className="flex flex-col gap-2 lg:gap-14">
          <NossaVisaoContent className="w-full" />
          <div className="flex flex-row gap-2 lg:gap-8">
            <NossaMissaoContent className="w-1/3" />
            <NossosValoresContent className="w-1/3" />
            <PilaresContent className="w-1/3" />
          </div>
        </div>

        <div className="flex justify-center">
          <Button size="lg" variant="primary" outline>
            <Link href="/sobre-nos">Quer nos conhecer?</Link>
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}

const NossaVisaoContent = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex flex-col gap-6 sm:gap-8 items-center', className)}>
      <Image
        src="/images/icons/biblia.png"
        alt="Nossa Visão"
        width={80}
        height={80}
      />
      <CardTitle>Nossa Visão</CardTitle>
      <CardParagraph className="lg:text-3xl">
        Ser uma família de muitos filhos semelhantes a Jesus.
      </CardParagraph>
    </div>
  );
};

const NossaMissaoContent = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex flex-col gap-6 sm:gap-8 items-center', className)}>
      <Image
        src="/images/icons/igreja.png"
        alt="Nossa Missão"
        width={80}
        height={80}
      />
      <CardTitle className="line-clamp-2">Nossa Missão</CardTitle>
      <CardParagraph className="lg:text-lg">
        <span className="font-bold">Atrair</span> pessoas para Cristo, Conduzir
        essas pessoas a <span className="font-bold">pertencerem</span> ao Corpo
        de Cristo, Ensinar o que Cristo ordenou através do{' '}
        <span className="font-bold">discipulado</span>, Conduzir essas pessoas a{' '}
        <span className="font-bold">servirem</span> a Cristo ao servir aos
        outros e levar essas pessoas a experimentarem o privilégio de{' '}
        <span className="font-bold">multiplicar-se</span> em outros discípulos
        de Cristo.
      </CardParagraph>
    </div>
  );
};

const NossosValoresContent = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex flex-col gap-6 sm:gap-8 items-center', className)}>
      <Image
        src="/images/icons/por-do-sol.png"
        alt="Nossos Valores"
        width={80}
        height={80}
      />
      <CardTitle>Nossos Valores</CardTitle>
      <ul className="w-full md:w-auto list-disc list-inside text-sm sm:text-base lg:text-lg leading-relaxed lg:ml-2">
        <li>Amor Compassivo</li>
        <li>Acolhimento Genuíno</li>
        <li>Disciplinado Transformador</li>
        <li>Servir com Excelência</li>
        <li>Unidade na Diversidade</li>
        <li>Compromisso com a Multiplicação</li>
        <li>Mordomia Responsável</li>
      </ul>
    </div>
  );
};

const PilaresContent = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex flex-col gap-6 sm:gap-8 items-center', className)}>
      <Image
        src="/images/icons/por-do-sol.png"
        alt="Nossos Valores"
        width={80}
        height={80}
      />
      <CardTitle>Pilares de Crescimento Integral</CardTitle>
      <CardParagraph className="lg:text-lg">
        As etapas que a igreja utiliza para ajudar as pessoas a crescerem em sua
        fé e se tornarem membros ativos da comunidade.
      </CardParagraph>

      <ul className="w-full md:w-auto list-decimal list-inside text-sm sm:text-base lg:text-lg leading-relaxed lg:ml-2">
        <li>
          Atrair: <span className="font-bold">Convidar e receber pessoas.</span>
        </li>
        <li>
          Pertencer:{' '}
          <span className="font-bold">
            Criar relacionamentos e senso de pertencimento.
          </span>
        </li>
        <li>
          Discipular:{' '}
          <span className="font-bold">
            Ensinar e equipar para o crescimento.
          </span>
        </li>
        <li>
          Servir:{' '}
          <span className="font-bold">Usar dons e talentos para o Reino.</span>
        </li>
        <li>
          Multiplicar:{' '}
          <span className="font-bold">
            Compartilhar a fé e investir em outros.
          </span>
        </li>
      </ul>
    </div>
  );
};
