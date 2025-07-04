import Image from 'next/image';
import { Button } from '../ui/button';

export default function OurSermon() {
  return (
    <section aria-label="Nossas Pregações">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 py-24">
        <div className="flex flex-col gap-8">
          <h2 className="text-6xl font-bold text-center text-primary">
            Nossas Pregações
          </h2>
          <p className="text-2xl text-center text-black/80">
            Confira as últimas pregações da nossa igreja.
          </p>
        </div>

        <div className="flex flex-row gap-8">
          <div className="relative h-[192px] w-1/2">
            <Image
              src="/images/jovens.png"
              alt="Jovens"
              height={333}
              width={192}
              className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-8 w-1/2">
            <h3 className="text-4xl font-semibold text-primary">
              Heading Title for Sermon Series
            </h3>
            <div className="flex flex-row gap-8">
              <span className="text-sm text-black/80">August 2024</span>
              <span className="text-sm text-black/80">
                Preleitor: Rev. Celso
              </span>
            </div>
            <div>
              <Button>Ver mais</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
