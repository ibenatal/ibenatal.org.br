import { Mail, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { WhatsappFillIcon } from '@/components/icons/WhatsappFillIcon';
import { SectionContainer } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { LinkUI } from '@/components/ui/link-ui';
import { email, locationInfo, whatsapp } from '@/data/contacts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contatos - IBE - Igreja Batista da Esperança',
  description: 'Contatos da IBE - Igreja Batista da Esperança',
};

export default async function ContactsPage() {
  return (
    <main className="relative bg-neutral-100">
      <div className="absolute top-0 left-0 z-0 h-[300px] w-full bg-blue-500 lg:h-[500px]">
        <Image
          src="/images/contatos/contato-header.png"
          alt="Contatos"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-black/70"></div>
      </div>
      <SectionContainer className="relative z-10 pt-28">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-4xl text-white">Contatos</h1>
          <Breadcrumbs items={[{ label: 'Contatos', href: '/contatos' }]} />
        </div>
        <div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-10 lg:flex-row">
              <ContactCard
                className="bg-primary-500"
                icon={<MapPin className="h-20 w-20 text-white/90" />}
                title="Nosso endereço"
                href={locationInfo.googleMaps}
              >
                <p>{locationInfo.address}</p>
                <p>{locationInfo.neighborhood}</p>
                <p>{locationInfo.secondLine()}</p>
              </ContactCard>

              <ContactCard
                className="bg-secondary-500"
                icon={<WhatsappFillIcon className="h-20 w-20 text-white/90" />}
                title="Whatsapp"
                href={whatsapp.hrefWithMessage}
              >
                <p>{whatsapp.label}</p>
              </ContactCard>

              <ContactCard
                className="bg-tertiary-500"
                icon={<Mail className="h-20 w-20 text-white/90" />}
                title="Email"
                href={email.href}
              >
                <p>{email.label}</p>
              </ContactCard>
            </div>

            <CallingUs
              title="Não hesite em nos chamar"
              description="Fale com a gente! Estamos à disposição para atender você pelo telefone, WhatsApp ou mensagem. Seja para tirar dúvidas, receber oração ou saber mais, será um prazer conversar com você."
            />
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}

function ContactCard({
  className,
  icon,
  title,
  children,
  href,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <LinkUI
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant="inverse"
      className={cn(
        'hover:-translate-y-2 flex w-full flex-col items-center gap-6 rounded-lg px-10 py-6 text-center no-underline transition hover:no-underline lg:w-1/2',
        className,
      )}
    >
      {icon}
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-white/90 text-xl lg:text-4xl">{title}</h3>
        <div className="no-underline hover:no-underline">{children}</div>
      </div>
    </LinkUI>
  );
}

function CallingUs({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg bg-white">
      <div className="flex flex-col gap-8 p-4 lg:p-10">
        <h3 className="font-bold text-2xl lg:text-4xl">{title}</h3>
        <p className="text-base text-gray-500 lg:text-lg">{description}</p>
      </div>
    </div>
  );
}
