export const dateIsoToDDMMYYYY = (date: string) => {
  const timeZone = 'America/Fortaleza';
  const dateWithTimeZone = `${date}T00:00:00-03:00`;
  return new Date(dateWithTimeZone).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone,
  });
};
