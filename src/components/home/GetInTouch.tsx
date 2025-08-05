import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
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
          <div className="flex gap-8 sm:gap-12 sm:absolute sm:-bottom-12 md:-bottom-10 right-0 w-full sm:px-8 flex-col sm:flex-row mt-10 sm:mt-0 relative">
            <Suspense
              fallback={
                <>
                  <div className="bg-slate-200 h-[92px] w-full rounded-2xl animate-pulse"></div>
                  <div className="bg-slate-200 h-[92px] w-full rounded-2xl animate-pulse"></div>
                </>
              }
            >
              <WeeklyEvents />
            </Suspense>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
