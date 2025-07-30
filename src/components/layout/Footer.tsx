import { Github, Instagram, MapPin, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { locationInfo, socialLinks, whatsapp } from '@/data/contacts';
import { WhatsappFillIcon } from '../icons/WhatsappFillIcon';
import { LinkUI } from '../ui/link-ui';
import { menuItems } from './menu/menuItems';

export function Footer() {
  return (
    <footer className="bg-primary-700 text-white divide-y divide-white/50 px-4 mb-[3.75rem] md:mb-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-4 pt-14 pb-10">
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
              className="w-[48px] md:w-[107px] h-auto"
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
            <WhatsappFillIcon className="w-4 h-4" />
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
              <MapPin className="w-4 h-4 mt-1.5" />
              <div className="flex flex-col gap-1">
                <p className="w-full inline-flex items-center gap-2">
                  {locationInfo.address},
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
          <h3 className="text-2xl font-bold">Links</h3>
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
          <h3 className="text-2xl font-bold">Siga-nos</h3>
          <nav className="flex flex-col gap-2">
            <LinkUI
              href={socialLinks.youtube.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="inverse"
              title="Abrir no Youtube"
              aria-label="Abrir no Youtube"
            >
              <Youtube className="w-4 h-4" />
              <span>Youtube</span>
            </LinkUI>
            <LinkUI
              href={socialLinks.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="inverse"
              title="Abrir no Instagram"
              aria-label="Abrir no Instagram"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </LinkUI>
          </nav>
        </section>
      </div>
      <div className=" ">
        <div className="max-w-6xl mx-auto py-6 flex justify-between">
          <small>
            &copy; {new Date().getFullYear()} Igreja Batista da Esperança. Todos
            os direitos reservados.
          </small>
          <small>
            <LinkUI
              href="https://github.com/ibenatal/ibenatal.org.br"
              target="_blank"
              rel="noopener noreferrer"
              title="Quer ajudar com o site?"
            >
              <Github className="w-4 h- text-white/50" />
            </LinkUI>
          </small>
        </div>
      </div>
    </footer>
  );
}
