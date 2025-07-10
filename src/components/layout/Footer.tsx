import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary-700 text-white divide-y divide-white/50 px-4 mb-[3.75rem] md:mb-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-4 pt-14 pb-10">
        <section
          className="flex flex-col gap-4 md:w-6/12"
          aria-label="Informações de contato"
        >
          <Image
            src="/ibe-logo.svg"
            alt="IBENATAL"
            width={107}
            height={80}
            className="w-[48px] md:w-[107px] h-auto"
          />
          <div>Igreja Batista da Esperança</div>
          <div>(84) 99912-3905</div>
          <address className="not-italic">
            <p>Avenida Adolfo Gordo - 1188, Cidade da esperança,</p>
            <p>Natal, Rio Grande do Norte</p>
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
          <nav className="flex flex-col gap-2">
            <Link
              href="https://www.youtube.com/c/Fam%C3%ADliaIBE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </Link>
            <Link
              href="https://www.instagram.com/familiaibe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
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
