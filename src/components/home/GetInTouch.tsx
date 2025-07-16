import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { WhatsappFillIcon } from '../icons/WhatsappFillIcon';
import { SectionContainer } from '../layout/Container';
import { Button } from '../ui/button';

export function GetInTouch() {
  return (
    <section
      aria-label="Entre em contato"
      className="bg-quaternary-500 relative"
    >
      <Image
        src="/images/bgGetInTouch.jpeg"
        alt="Entre em contato"
        fill
        className="object-cover z-0 opacity-20"
        priority
      />
      <SectionContainer className="relative z-10 sm:p-0 p-0">
        <div className="flex flex-col items-center gap-6 bg-primary-500 text-white py-10 absolute -top-5 left-10 w-80 rounded shadow-2xl">
          <WhatsappFillIcon className="w-16 h-16" />
          <div>Nos chame no WhatsApp</div>
          <div className="text-2xl">(84) 99912-3905</div>
        </div>
        <div className="flex flex-col ml-96 text-white gap-6 relative px-4 pt-16 pb-20">
          <div className="flex flex-col gap-2">
            <div className="text-base text-primary-300">
              Entre em contato conosco
            </div>
            <div className="text-3xl">Não hesite em nos chamar</div>
          </div>
          <div className="text-lg">
            Fale com a gente! Estamos à disposição para atender você pelo
            telefone, WhatsApp ou mensagem. Seja para tirar dúvidas, receber
            oração ou saber mais, será um prazer conversar com você.
          </div>
          <div className="flex gap-4">
            <Button>
              <Link
                href="https://wa.me/5584999123905"
                className="inline-flex gap-2"
              >
                <WhatsappFillIcon />
                <span>WhatsApp</span>
              </Link>
            </Button>
            <Button>
              <Mail />
              Email
            </Button>
          </div>
          <div className="flex gap-12 absolute -bottom-10 right-0 w-full px-8">
            <EventCard title="Culto de Fé" />
            <EventCard title="Culto de celebração dominical" />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

interface EventCardProps {
  title: string;
}

const EventCard = ({ title }: EventCardProps) => {
  return (
    <div className="flex flex-row gap-2 bg-white rounded-2xl px-3 py-3 w-1/2 shadow-2xl">
      <div className="flex flex-col shrink-0">
        <div className="text-sm bg-primary-200 text-primary-500 text-center px-2 py-3 rounded-t-lg">
          16 Jul
        </div>
        <div className="text-xs bg-primary-500 text-center text-white px-2 py-1 rounded-b-lg">
          19:30
        </div>
      </div>
      <div className="flex flex-col min-w-0">
        <div className="text-xs text-primary-500/80">Programação</div>
        <div className="text-lg font-bold text-primary-500 leading-tight line-clamp-2">
          {title}
        </div>
      </div>
    </div>
  );
};
