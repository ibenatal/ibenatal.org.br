import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { email, whatsapp } from '@/data/contacts';
import { WhatsappFillIcon } from '../../icons/WhatsappFillIcon';
import { SectionContainer } from '../../layout/Container';
import { ActionLink } from './ActionLink';
import { Eyebrow } from './Eyebrow';
import { WeeklyScheduleV2 } from './WeeklyScheduleV2';

/**
 * Faixa vinho com o card de oração "saindo" por cima da faixa e os cards da programação
 * "saindo" por baixo (no desktop).
 */
export function GetInTouchV2() {
  return (
    <section aria-label="Entre em contato" className="relative bg-quaternary-500 text-white">
      <Image
        src="/images/bgGetInTouch.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-15 mix-blend-luminosity"
      />

      <SectionContainer className="relative z-10 gap-0 p-0 sm:p-0 lg:flex-row lg:items-start lg:gap-12 lg:px-4">
        <div className="flex justify-center lg:w-[22rem] lg:shrink-0">
          <Link
            href={whatsapp.hrefToPray}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fazer pedido de oração pelo WhatsApp"
            className="-mt-8 hover:-translate-y-1 flex w-full max-w-[20rem] flex-col items-center gap-4 rounded-sm bg-primary-500 px-6 py-10 text-center shadow-2xl shadow-black/40 transition hover:bg-primary-600 lg:-mt-10"
          >
            <WhatsappFillIcon className="size-14 text-secondary-300" />
            <span className="font-heading font-semibold text-secondary-200 text-xs uppercase tracking-[0.2em]">
              Pedido de oração
            </span>
            <span className="font-bold font-heading text-2xl leading-tight">
              Podemos orar por você?
            </span>
            <span className="font-heading font-semibold text-3xl">{whatsapp.label}</span>
          </Link>
        </div>

        <div className="flex flex-1 flex-col gap-6 px-3 pt-12 pb-12 sm:px-4 lg:px-0 lg:pt-16 lg:pb-28">
          <Eyebrow className="text-secondary-300">Entre em contato conosco</Eyebrow>
          <h2 className="font-bold text-4xl leading-tight sm:text-5xl">
            Não hesite em <span className="text-secondary-300">nos chamar</span>
          </h2>
          <p className="max-w-2xl text-base text-white/85 leading-relaxed sm:text-lg">
            Fale com a gente! Estamos à disposição para atender você pelo telefone, WhatsApp ou
            mensagem. Seja para tirar dúvidas, receber oração ou saber mais, será um prazer
            conversar com você.
          </p>
          <div className="flex flex-wrap gap-3">
            <ActionLink href={whatsapp.hrefWithMessage} external variant="sand">
              <WhatsappFillIcon /> WhatsApp
            </ActionLink>
            <ActionLink href={email.href} external variant="outline-light">
              <Mail /> Email
            </ActionLink>
          </div>

          {/* No desktop os cards ficam metade para fora da faixa. */}
          <div className="mt-4 flex flex-col gap-4 sm:flex-row lg:absolute lg:right-4 lg:-bottom-11 lg:left-[26rem] lg:mt-0">
            <WeeklyScheduleV2 />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
