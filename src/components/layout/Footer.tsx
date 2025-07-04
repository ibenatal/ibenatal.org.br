import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <div className="bg-primary-950 text-white divide-y divide-white/50">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4 pt-14 pb-10 ">
        <div className="flex flex-col gap-4">
          <Image
            src="/ibe-logo.svg"
            alt="IBENATAL"
            width={107}
            height={80}
            className="w-[48px] md:w-[107px] h-auto"
          />
          <div>Igreja Batista da Esperança</div>
          <div>(229) 555-0109</div>
          <div>2118 Thornridge Cir. Syracuse, Connecticut 35624</div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Links</h3>
          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Links</h3>
          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Follow us</h3>
          <div className="flex flex-col gap-2">
            <Link href="/">Facebook</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Twitter</Link>
          </div>
        </div>
      </div>
      <div className="bg-primary-950 text-white">
        <div className="max-w-6xl mx-auto py-6">
          <p>
            &copy; {new Date().getFullYear()} Igreja Batista da Esperança. Todos
            os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
