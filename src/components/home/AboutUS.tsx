import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionContainer } from '../layout/Container';
import {
  CardDescription,
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8">
          <div className="flex flex-col gap-6 sm:gap-8 items-center">
            <Image
              src="/images/icons/igreja.png"
              alt="Nossa Missão"
              width={80}
              height={80}
            />
            <CardTitle title="Nossa Missão" />
            <CardDescription description="A contribuição fiel garante que a igreja mantenha sua voz profética, sem precisar negociar princípios por favores ou recursos governamentais." />
          </div>
          <div className="flex flex-col gap-6 sm:gap-8 items-center">
            <Image
              src="/images/icons/por-do-sol.png"
              alt="Nosso Foco"
              width={80}
              height={80}
            />
            <CardTitle title="Nosso Foco" />
            <CardDescription description="A generosidade contínua dos fiéis preserva a integridade da missão da igreja." />
          </div>
          <div className="flex flex-col gap-6 sm:gap-8 items-center">
            <Image
              src="/images/icons/biblia.png"
              alt="Nossas Crenças"
              width={80}
              height={80}
            />
            <CardTitle title="O que cremos" />
            <CardDescription description="Quando cada membro assume seu papel com compromisso, a igreja permanece firme, autônoma e fiel à sua vocação divina." />
          </div>
        </div>

        <div className="flex justify-center">
          <Button size="lg" variant="primary" outline>
            <Link href="/contato">Quer nos conhecer?</Link>
          </Button>
        </div>
      </SectionContainer>
    </section>
  );
}
