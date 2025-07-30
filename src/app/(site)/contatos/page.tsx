import { Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { WhatsappFillIcon } from '@/components/icons/WhatsappFillIcon';
import { SectionContainer } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { LinkUI } from '@/components/ui/link-ui';
import { email, locationInfo, whatsapp } from '@/data/contacts';
import { cn } from '@/lib/utils';

export default async function ContactsPage() {
  return (
    <main className="bg-neutral-100 relative">
      <div className="bg-blue-500 h-[300px] lg:h-[500px] absolute top-0 left-0 w-full z-0">
        <Image
          src="/images/articles/blog-header.png"
          alt="Blog"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
      </div>
      <SectionContainer className="relative z-10 pt-28">
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-4xl font-bold">Contatos</h1>
          <Breadcrumbs items={[{ label: 'Contatos', href: '/contatos' }]} />
        </div>
        <div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row gap-10">
              <ContactCard
                className="bg-primary-500"
                icon={<MapPin className="w-20 h-20 text-white/90" />}
                title="Nosso endereço"
                href={locationInfo.googleMaps}
              >
                <p>{locationInfo.address}</p>
                <p>{locationInfo.neighborhood}</p>
                <p>{locationInfo.secondLine()}</p>
              </ContactCard>

              <ContactCard
                className="bg-secondary-500"
                icon={<WhatsappFillIcon className="w-20 h-20 text-white/90" />}
                title="Whatsapp"
                href={whatsapp.hrefWithMessage}
              >
                <p>{whatsapp.label}</p>
              </ContactCard>

              <ContactCard
                className="bg-tertiary-500"
                icon={<Mail className="w-20 h-20 text-white/90" />}
                title="Email"
                href={email.href}
              >
                <p>{email.label}</p>
              </ContactCard>
            </div>

            <FeaturedArticle
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
        'rounded-lg px-10 py-6 w-full lg:w-1/2 flex flex-col gap-6 text-center items-center transition hover:-translate-y-2 no-underline hover:no-underline',
        className,
      )}
    >
      {icon}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl lg:text-4xl font-bold text-white/90">{title}</h3>
        <div className="no-underline hover:no-underline">{children}</div>
      </div>
    </LinkUI>
  );
}

function FeaturedArticle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg">
      <div className="p-4 lg:p-10 flex flex-col gap-8">
        <h3 className="text-2xl lg:text-4xl font-bold">{title}</h3>
        <p className="text-base lg:text-lg text-gray-500">{description}</p>
      </div>
    </div>
  );
}
