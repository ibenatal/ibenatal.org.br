import { BookOpen, CalendarDays, House } from 'lucide-react';
import { whatsapp } from '@/data/contacts';
import { WhatsappFillIcon } from '../../icons/WhatsappFillIcon';
import { SectionContainer } from '../../layout/Container';
import { ActionLink } from './ActionLink';
import { CardShowcase, type ShowcaseItem } from './CardShowcase';
import { SectionHeader } from './SectionHeader';

const pgms: ShowcaseItem[] = [
  {
    title: 'Kids',
    image: '/images/pgs/pg-criancas.png',
    color: 'bg-secondary-700',
    imageClassName: 'object-[50%_60%]',
  },
  { title: 'Turno Extra', image: '/images/pgs/pg-turno-extra.png', color: 'bg-quaternary-500' },
  { title: 'A Forja', image: '/images/pgs/pg-forja.png', color: 'bg-tertiary-600' },
  {
    title: 'Unidos em Cristo',
    image: '/images/pgs/pg-unidos.png',
    color: 'bg-secondary-600',
    imageClassName: 'object-[50%_72%]',
  },
  { title: 'Nasci de Novo', image: '/images/pgs/pg-nasci-de-novo.png', color: 'bg-quaternary-400' },
  {
    title: 'Esperança',
    image: '/images/pgs/pg-esperanca.png',
    color: 'bg-tertiary-500',
    imageClassName: 'object-[50%_70%]',
  },
  { title: 'Só a Graça', image: '/images/pgs/pg-so-a-graca.png', color: 'bg-quaternary-600' },
];

const comoFunciona = [
  {
    icon: CalendarDays,
    title: 'Quinzenal',
    text: 'Os grupos se reúnem a cada quinze dias.',
  },
  {
    icon: House,
    title: 'Perto de você',
    text: 'Normalmente em casas ou em salas da igreja.',
  },
  {
    icon: BookOpen,
    title: 'Palavra e comunhão',
    text: 'Leitura e estudo da Bíblia, oração, partilha de experiências e apoio mútuo.',
  },
];

const participarHref = `${whatsapp.hrefClean}?text=Olá, gostaria de participar de um PGM.`;

export default function OurPGMsV2() {
  return (
    <section
      aria-label="Nossos PGMs"
      className="relative isolate overflow-x-clip bg-primary-600 text-white"
    >
      <div
        aria-hidden
        className="-top-32 -left-32 -z-10 absolute size-96 rounded-full bg-quaternary-500/40 blur-3xl"
      />

      <CardShowcase
        items={pgms}
        eyebrow="PGM"
        itemsLabel="todos os PGMs"
        ariaLabel="PGMs da IBE"
        variant="compact"
        tone="dark"
        header={
          <SectionHeader
            tone="dark"
            eyebrow="Pequenos Grupos Multiplicadores"
            title="Nossos"
            accent="PGMs"
            description="Grupos que se reúnem para estudar a Bíblia, orar e partilhar a vida — e que nascem para se multiplicar."
          />
        }
      />

      <SectionContainer className="pt-10 sm:pt-12 lg:pt-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="reveal flex flex-col gap-5">
            <h3 className="font-bold text-3xl sm:text-4xl">O que é um PGM?</h3>
            <p className="text-base text-primary-100/85 leading-relaxed sm:text-lg">
              Um Pequeno Grupo Multiplicador é um grupo de pessoas que se reúne regularmente com o
              objetivo de promover o crescimento espiritual, a comunhão, o evangelismo e o
              discipulado, tendo como missão clara a multiplicação — ou seja, a formação de novos
              grupos a partir do grupo original.
            </p>
            <ActionLink href={participarHref} external variant="sand">
              <WhatsappFillIcon /> Quero participar de um PGM
            </ActionLink>
          </div>

          <ul className="flex flex-col divide-y divide-white/15 border-white/15 border-y">
            {comoFunciona.map(({ icon: Icon, title, text }) => (
              <li key={title} className="reveal flex items-start gap-4 py-5">
                <Icon aria-hidden className="mt-1 size-6 shrink-0 text-secondary-300" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold font-heading text-xl">{title}</span>
                  <span className="text-primary-100/80 text-sm leading-relaxed sm:text-base">
                    {text}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>
    </section>
  );
}
