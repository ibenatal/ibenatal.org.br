import { Instagram, MapPin, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { WhatsappFillIcon } from '../icons/WhatsappFillIcon';
import { LinkUI } from '../ui/link-ui';

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
            href="https://wa.me/5584999123905"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
            variant="inverse"
            title="Abrir no WhatsApp"
            aria-label="Abrir no WhatsApp"
          >
            <WhatsappFillIcon className="w-4 h-4" />
            <span>(84) 99912-3905</span>
          </LinkUI>
          <address className="not-italic">
            <LinkUI
              className="flex-wrap"
              variant="inverse"
              href="https://maps.app.goo.gl/D64iKMTtLtv8MuvXA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir no Google Maps"
              title="Abrir no Google Maps"
            >
              <MapPin className="w-4 h-4" />
              <span>Avenida Adolfo Gordo - 1188</span>
              <span>Cidade da esperança,</span>
              <span>Natal, Rio Grande do Norte</span>
            </LinkUI>
          </address>
        </section>
        <section
          className="flex flex-col gap-4 md:w-3/12"
          aria-label="Links de navegação"
        >
          <h3 className="text-2xl font-bold">Links</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Sermões</Link>
            <Link href="/">Eventos</Link>
            <Link href="/">Contato</Link>
          </nav>
        </section>
        <section
          className="flex flex-col gap-4 md:w-3/12"
          aria-label="Redes sociais"
        >
          <h3 className="text-2xl font-bold">Siga-nos</h3>
          <nav className="flex flex-col">
            <LinkUI
              href="https://www.youtube.com/c/Fam%C3%ADliaIBE"
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
              href="https://www.instagram.com/familiaibe"
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
        <div className="max-w-6xl mx-auto py-6">
          <small>
            &copy; {new Date().getFullYear()} Igreja Batista da Esperança. Todos
            os direitos reservados.
          </small>
        </div>
      </div>
    </footer>
  );
}
