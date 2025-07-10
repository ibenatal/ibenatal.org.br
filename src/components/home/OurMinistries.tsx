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
    <section aria-label="Nossos Ministérios">
      <SectionContainer>
        <div className="flex flex-col gap-6 sm:gap-8">
          <SectionTitle title="Nossos Ministérios" />
          <SectionDescription description="Nossa igreja é composta por vários ministérios que trabalham juntos para levar a palavra de Deus a todos." />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="relative h-[192px] w-full">
              <Image
                src="/images/jovens.png"
                alt="Jovens"
                height={333}
                width={192}
                className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
              />
            </div>
            <CardTitle title="Jovens" />
            <CardDescription description="A contribuição fiel garante que a igreja mantenha sua voz profética, sem precisar negociar princípios por favores ou recursos governamentais." />
          </div>
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="relative h-[192px] w-full">
              <Image
                src="/images/casais.png"
                alt="Casais"
                height={333}
                width={192}
                className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
              />
            </div>
            <CardTitle title="Casais" />
            <CardDescription description="A rede de apoio para casais que desejam viver uma vida de amor e harmonia." />
          </div>
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="relative h-[192px] w-full">
              <Image
                src="/images/criancas.png"
                alt="Crianças"
                height={333}
                width={192}
                className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
              />
            </div>
            <CardTitle title="Crianças" />
            <CardDescription description="A igreja que ama os filhos e os transforma em líderes." />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
