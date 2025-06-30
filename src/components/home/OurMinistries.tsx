import Image from 'next/image';

export default function OurMinistries() {
  return (
    <section aria-label="Nossos Ministérios">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 py-24">
        <div className="flex flex-col gap-8">
          <h2 className="text-6xl font-bold text-center text-primary">
            Nossos Ministérios
          </h2>
          <p className="text-2xl text-center text-black/80">
            Nossa igreja é composta por vários ministérios que trabalham juntos
            para levar a palavra de Deus a todos.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-8">
            <div className="relative h-[192px] w-full">
              <Image
                src="/images/jovens.png"
                alt="Jovens"
                height={333}
                width={192}
                className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
              />
            </div>
            <h3 className="text-4xl font-semibold text-primary">Jovens</h3>
            <p className="text-xl text-black/80">
              A contribuição fiel garante que a igreja mantenha sua voz
              profética, sem precisar negociar princípios por favores ou
              recursos governamentais.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="relative h-[192px] w-full">
              <Image
                src="/images/casais.png"
                alt="Casais"
                height={333}
                width={192}
                className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
              />
            </div>
            <h3 className="text-4xl font-semibold text-primary">Casais</h3>
            <p className="text-xl text-black/80">
              A rede de apoio para casais que desejam viver uma vida de amor e
              harmonia.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="relative h-[192px] w-full">
              <Image
                src="/images/criancas.png"
                alt="Crianças"
                height={333}
                width={192}
                className="rounded object-cover absolute inset-0 left-0 top-0 w-full h-full"
              />
            </div>
            <h3 className="text-4xl font-semibold text-primary">Crianças</h3>
            <p className="text-xl text-black/80">
              A igreja que ama os filhos e os transforma em líderes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
