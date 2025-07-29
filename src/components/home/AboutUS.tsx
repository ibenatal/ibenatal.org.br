import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionContainer } from '../layout/Container';
import { CardDescription, CardTitle, SectionDescription, SectionTitle } from './HomeTypography';

export default function AboutUS() {
  return (
    <section aria-label="Sobre a IBE">
      <SectionContainer>
        <div className="flex flex-col gap-6 sm:gap-8">
          <SectionTitle title="Venha Conhecer a IBE" />
          <SectionDescription description="Estamos de braços abertos para receber você e sua família. Venha fazer parte da nossa comunidade e descobrir mais sobre nossa missão e valores." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8">
          <div className="flex flex-col gap-6 sm:gap-8 items-center">
            <Image src="/images/icons/biblia.png" alt="Nossa Visão" width={80} height={80} />
            <CardTitle title="Nossa Visão" />
            <CardDescription description="Ser uma família de muitos filhos semelhantes a Jesus." />
          </div>
          <div className="flex flex-col gap-6 sm:gap-8 items-center">
            <Image src="/images/icons/igreja.png" alt="Nossa Missão" width={80} height={80} />
            <CardTitle title="Nossa Missão" />
            <CardDescription description="Atrai, Conecta e Disciplina pessoas, para que se tornem semelhantes a Jesus, sirvam com excelência e façam novos discípulos." />
          </div>
          <div className="flex flex-col gap-6 sm:gap-8 items-center">
            <Image src="/images/icons/por-do-sol.png" alt="Nossos Valores" width={80} height={80} />
            <CardTitle title="Nossos Valores" />
            <ul className="w-full md:w-auto list-none list-inside text-sm sm:text-base lg:text-xl leading-relaxed lg:ml-6">
              <li>- Amor Compassivo</li>
              <li>- Acolhimento Genuíno</li>
              <li>- Disciplinado Transformador</li>
              <li>- Servir com Excelência</li>
              <li>- Unidade na Diversidade</li>
              <li>- Compromisso com a Multiplicação</li>
              <li>- Mordomia Responsável</li>
            </ul>
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
