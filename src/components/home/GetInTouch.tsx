import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { email, whatsapp } from '@/data/contacts';
import { WeeklyEvents } from '../events/WeeklyEvents';
import { WhatsappFillIcon } from '../icons/WhatsappFillIcon';
import { SectionContainer } from '../layout/Container';
import { Button } from '../ui/button';

export function GetInTouch() {
  return (
    <section aria-label="Entre em contato" className="relative bg-quaternary-500">
      <Image
        src="/images/bgGetInTouch.png"
        alt="Entre em contato"
        fill
        className="z-0 object-cover opacity-20"
        priority
      />
      <SectionContainer className="relative z-10 gap-0 p-0 sm:p-0 lg:flex-row lg:px-4">
        <div className="flex items-start justify-center lg:w-[38rem]">
          <Link
            href={whatsapp.hrefToPray}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir no WhatsApp"
            aria-label="Abrir no WhatsApp"
          >
            <div className="-translate-y-5 hover:-translate-y-6 flex max-w-[20rem] flex-col items-center gap-6 rounded bg-primary-500 px-4 py-10 text-center text-white shadow-2xl transition hover:bg-primary-500">
              <WhatsappFillIcon className="h-16 w-16" />
              <div className="text-lg sm:text-2xl">Faça seu pedido de oração</div>
              <div className="text-3xl">{whatsapp.label}</div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-6 px-4 pt-16 pb-10 text-white sm:pb-20 md:pb-20 lg:relative lg:pl-8">
          <div className="flex flex-col gap-2">
            <div className="text-base text-primary-300">Entre em contato conosco</div>
            <div className="text-3xl">Não hesite em nos chamar</div>
          </div>
          <div className="text-lg">
            Fale com a gente! Estamos à disposição para atender você pelo telefone, WhatsApp ou
            mensagem. Seja para tirar dúvidas, receber oração ou saber mais, será um prazer
            conversar com você.
          </div>
          <div className="flex gap-4">
            <Button>
              <Link
                href={whatsapp.hrefToPray}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir no WhatsApp"
                aria-label="Abrir no WhatsApp"
                className="inline-flex items-center gap-2"
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
                className="inline-flex items-center gap-2"
              >
                <Mail />
                <span>Email</span>
              </Link>
            </Button>
          </div>
          <div className="sm:-bottom-12 md:-bottom-10 relative right-0 mt-10 flex w-full flex-col gap-8 sm:absolute sm:mt-0 sm:flex-row sm:gap-12 sm:px-8">
            <WeeklyEvents />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
