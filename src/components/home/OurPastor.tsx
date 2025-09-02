import { ImageDescriptionSection } from './ImageDescriptionSection';

export function OurPastor() {
  const pastorName = 'Rev. Celso';
  const pastorDescription = [
    'O Rev. Celso Adriano da Silva é um servo dedicado à Palavra de Deus, com uma trajetória marcada pela fidelidade ao evangelho e pelo zelo no ensino bíblico. Com sólida formação teológica e uma vocação pastoral enraizada no amor a Cristo e às pessoas, ele tem servido à igreja com graça, profundidade e compromisso.',
  ];
  const pastorImageUrl = '/images/pastor-celso.jpeg';
  const pastorUrl = '/perfil-pastoral';

  return (
    <ImageDescriptionSection
      title="Perfil Pastoral"
      subtitle="Conheça o pastor da IBE Natal"
      personName={pastorName}
      descriptions={pastorDescription}
      imageUrl={pastorImageUrl}
      imageAlt={pastorName}
      buttonText="Conhecer mais"
      buttonUrl={pastorUrl}
      buttonAriaLabel={`Conhecer mais sobre ${pastorName}`}
      imageClass="h-[450px]"
      layout="left-to-right"
    />
  );
}
