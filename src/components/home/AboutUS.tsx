import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutUS() {
  return (
    <section aria-label="Sobre a IBE">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 py-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-6xl font-bold text-center text-primary">
            Venha Conhecer a IBE
          </h2>
          <p className="text-2xl text-center">
            Estamos de braços abertos para receber você e sua família. Venha
            fazer parte da nossa comunidade e descobrir mais sobre nossa missão
            e valores.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-8 items-center">
            <Image
              src="/images/icons/igreja.png"
              alt="Nossa Missão"
              width={80}
              height={80}
            />
            <h3 className="text-4xl font-bold text-center text-primary">
              Nossa Missão
            </h3>
            <p className="text-2xl">
              A contribuição fiel garante que a igreja mantenha sua voz
              profética, sem precisar negociar princípios por favores ou
              recursos governamentais.
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <Image
              src="/images/icons/por-do-sol.png"
              alt="Nosso Foco"
              width={80}
              height={80}
            />
            <h3 className="text-4xl font-bold text-center text-primary">
              Nosso Foco
            </h3>
            <p className="text-2xl">
              A generosidade contínua dos fiéis preserva a integridade da missão
              da igreja.
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <Image
              src="/images/icons/biblia.png"
              alt="Nossas Crenças"
              width={80}
              height={80}
            />
            <h3 className="text-4xl font-bold text-center text-primary">
              O que cremos
            </h3>
            <p className="text-2xl">
              Quando cada membro assume seu papel com compromisso, a igreja
              permanece firme, autônoma e fiel à sua vocação divina.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button size="lg" variant="outline">
            <Link href="/contato">Quer nos conhcer?</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
