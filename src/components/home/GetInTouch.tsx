import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { email, whatsapp } from '@/data/contacts';
import { WeeklyEvents } from '../events/WeeklyEvents';
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
      <SectionContainer className="relative z-10 sm:p-0 p-0 gap-0 lg:flex-row lg:px-4">
        <div className="flex justify-center lg:w-[38rem] items-start">
          <Link
            href={whatsapp.hrefToPray}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir no WhatsApp"
            aria-label="Abrir no WhatsApp"
          >
            <div className="flex flex-col items-center gap-6 bg-primary-500 max-w-[20rem] text-white py-10 rounded shadow-2xl -translate-y-5 px-4 text-center hover:bg-primary-500 transition hover:-translate-y-6">
              <WhatsappFillIcon className="w-16 h-16" />
              <div className="text-lg sm:text-2xl">
                Faça seu pedido de oração
              </div>
              <div className="text-3xl">{whatsapp.label}</div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col text-white gap-6 lg:relative px-4 pt-16 pb-10 sm:pb-20 md:pb-20 lg:pl-8">
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
                href={whatsapp.hrefToPray}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir no WhatsApp"
                aria-label="Abrir no WhatsApp"
                className="inline-flex gap-2 items-center"
              >
                <WhatsappFillIcon />
                <span>WhatsApp</span>
              </Link>
            </Button>
            <Button>
              <Link
                href={email.href}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir no Email"
                aria-label="Abrir no Email"
                className="inline-flex gap-2 items-center"
              >
                <Mail />
                <span>Email</span>
              </Link>
            </Button>
          </div>
          <WeeklyEvents />
        </div>
      </SectionContainer>
    </section>
  );
}

interface EventCardProps {
  title: string;
  date: string;
  time: string;
}

export const EventCard = ({ title, date, time }: EventCardProps) => {
  return (
    <div className="flex flex-row gap-2 bg-white rounded-2xl px-3 py-3 sm:w-1/2 shadow-2xl">
      <div className="flex flex-col shrink-0">
        <div className="text-sm bg-primary-200 text-primary-500 text-center px-2 py-3 rounded-t-lg">
          {date}
        </div>
        <div className="text-xs bg-primary-500 text-center text-white px-2 py-1 rounded-b-lg">
          {time}
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
