import { ImageDescriptionSection } from './ImageDescriptionSection';

export function Riachuelo() {
  const missionTitle = 'Congregação Riachuelo';
  const missionDescription = [
    'Em 2019, Deus colocou no coração da IBE o sonho de plantar a primeira Igreja Batista em Riachuelo.',
    'Após uma Escola de Sertões com 80 missionários, Messias e Thalita foram enviados como família missionária em Janeiro de 2020.',
    'Hoje, através de Pequenos Grupos, projetos sociais e evangelismo, estamos levando o amor de Cristo aos corações riachuelenses.',
  ];
  const missionImageUrl =
    '/images/pib-riachuelo/igreja-batista-de-riachuelo.jpg';
  const missionUrl = '/pib-riachuelo';

  return (
    <ImageDescriptionSection
      title={missionTitle}
      subtitle="Conheça nossa missão pioneira em Riachuelo"
      personName="PIB Riachuelo"
      descriptions={missionDescription}
      imageUrl={missionImageUrl}
      imageAlt="PIB Riachuelo - Igreja Batista"
      buttonText="Conhecer missão completa"
      buttonUrl={missionUrl}
      buttonAriaLabel="Conhecer a missão completa em Riachuelo"
      imageClass="h-[350px]"
      contentClass="sm:w-7/12"
      sectionClassName="bg-primary-200/50"
      layout="right-to-left"
    />
  );
}
