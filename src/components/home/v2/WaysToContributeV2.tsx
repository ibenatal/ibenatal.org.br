import { SectionContainer } from '../../layout/Container';
import { CopyButton } from './CopyButton';
import { Eyebrow } from './Eyebrow';

const CNPJ = '08.512.048/0001-90';

const contas = [
  {
    title: 'Banco Bradesco',
    lines: ['Agência: 3224-7', 'Conta Corrente: 0075754-3', `CNPJ: ${CNPJ}`],
  },
  {
    title: 'PIX',
    lines: ['IGREJA BATISTA DA ESPERANÇA', 'BCO BRADESCO S.A.', CNPJ],
  },
];

/** Faixa compacta com os dados bancários e a chave PIX. */
export default function WaysToContributeV2() {
  return (
    <section aria-label="Como contribuir" className="bg-secondary-200">
      <SectionContainer className="gap-6 py-10 sm:py-12 md:flex-row md:items-center md:gap-10 lg:gap-16">
        <div className="flex flex-col gap-2 md:flex-1">
          <Eyebrow className="text-quaternary-500">Contribuir</Eyebrow>
          <h2 className="font-bold text-3xl text-primary-800 leading-tight sm:text-4xl">
            Formas de <span className="text-quaternary-500">contribuir</span>
          </h2>
        </div>

        {/* As duas colunas começam na mesma altura, então as linhas ficam alinhadas entre si. */}
        <div className="grid items-start gap-6 sm:grid-cols-2 sm:gap-10 md:border-primary-800/15 md:border-l md:pl-10 lg:gap-16 lg:pl-16">
          {contas.map((conta) => (
            <dl key={conta.title} className="flex flex-col gap-1 text-lg text-primary-800/80">
              <dt className="mb-1 font-bold font-heading text-2xl text-primary-800">
                {conta.title}
              </dt>
              {conta.lines.map((line) => (
                <dd key={line}>{line}</dd>
              ))}
              {conta.title === 'PIX' && (
                <dd className="pt-3">
                  <CopyButton value={CNPJ} label="Copiar chave PIX" />
                </dd>
              )}
            </dl>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
