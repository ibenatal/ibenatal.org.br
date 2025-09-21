import { Facebook, Github, Instagram, MapPin, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { locationInfo, socialLinks, whatsapp } from '@/data/contacts';
import { WhatsappFillIcon } from '../icons/WhatsappFillIcon';
import { LinkUI } from '../ui/link-ui';
import { menuItems } from './menu/menuItems';

export function Footer() {
  return (
    <footer className="mb-[3.75rem] divide-y divide-white/50 bg-primary-700 px-4 text-white md:mb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 pt-14 pb-10 sm:gap-4 md:flex-row">
        <section
          className="flex flex-col gap-4 md:w-6/12"
          aria-label="Informações de contato"
        >
          <Link href="/" title="Ir para a página inicial">
            <Image
              src="/ibe-logo.svg"
              alt="Igreja Batista da Esperança"
              width={107}
              height={80}
              className="h-auto w-[48px] md:w-[107px]"
            />
          </Link>
          <div>Igreja Batista da Esperança</div>
          <LinkUI
            href={whatsapp.hrefWithMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
            variant="inverse"
            title="Abrir no WhatsApp"
            aria-label="Abrir no WhatsApp"
          >
            <WhatsappFillIcon className="h-4 w-4" />
            <span>{whatsapp.label}</span>
          </LinkUI>
          <address className="not-italic">
            <LinkUI
              className="inline-flex items-start"
              variant="inverse"
              href={locationInfo.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir no Google Maps"
              title="Abrir no Google Maps"
            >
              <MapPin className="mt-1.5 h-4 w-4" />
              <div className="flex flex-col gap-1">
                <p className="inline-flex w-full flex-wrap items-center gap-2">
                  <span className="whitespace-nowrap">
                    {locationInfo.address},
                  </span>
                  <span className="whitespace-nowrap">
                    {locationInfo.neighborhood}
                  </span>
                </p>
                <p>
                  {locationInfo.city} {locationInfo.state} -{' '}
                  {locationInfo.zipCode}
                </p>
              </div>
            </LinkUI>
          </address>
        </section>
        <section
          className="flex flex-col gap-4 md:w-3/12"
          aria-label="Links de navegação"
        >
          <h3 className="font-bold text-2xl">Links</h3>
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <Link href={item.to} key={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
        </section>
        <section
          className="flex flex-col gap-4 md:w-3/12"
          aria-label="Redes sociais"
        >
          <h3 className="font-bold text-2xl">Siga-nos</h3>
          <nav className="flex flex-col gap-2">
            <LinkUI
              href={socialLinks.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="inverse"
              title="Abrir no Instagram"
              aria-label="Abrir no Instagram"
              className="no-underline"
            >
              <Instagram className="h-4 w-4" />
              <span>
                Instagram:{' '}
                <span className="whitespace-nowrap font-mono no-underline">
                  {socialLinks.instagram.username}
                </span>
              </span>
            </LinkUI>
            <LinkUI
              href={socialLinks.youtube.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="inverse"
              title="Abrir no Youtube"
              aria-label="Abrir no Youtube"
              className="no-underline"
            >
              <Youtube className="h-4 w-4" />
              <span>
                Youtube:{' '}
                <span className="whitespace-nowrap font-mono no-underline">
                  {socialLinks.youtube.username}
                </span>
              </span>
            </LinkUI>

            <LinkUI
              href={socialLinks.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="inverse"
              title="Abrir no Facebook"
              aria-label="Abrir no Facebook"
              className="no-underline"
            >
              <Facebook className="h-4 w-4" />
              <span>
                Facebook:{' '}
                <span className="whitespace-nowrap font-mono no-underline">
                  {socialLinks.facebook.username}
                </span>
              </span>
            </LinkUI>
          </nav>
        </section>
      </div>
      <div className=" ">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 py-6">
          <small>
            &copy; {new Date().getFullYear()} Igreja Batista da Esperança.{' '}
            <span className="whitespace-nowrap">
              Todos os direitos reservados.
            </span>
          </small>
          <small>
            <LinkUI
              href="https://github.com/ibenatal/ibenatal.org.br"
              target="_blank"
              rel="noopener noreferrer"
              title="Quer ajudar com o site?"
            >
              <Github className="h- w-4 text-white/50" />
            </LinkUI>
          </small>
        </div>
      </div>
    </footer>
  );
}
