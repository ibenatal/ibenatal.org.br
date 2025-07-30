function getReadTimeAmount(text: string) {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).filter(Boolean);
  const minutes = words.length / wordsPerMinute;
  return Math.ceil(minutes);
}

export function humanizeReadTime(minutes: number) {
  return minutes === 1 ? '1 min' : `${minutes} min`;
}

export function getReadTime(text: string) {
  const minutes = getReadTimeAmount(text);
  return humanizeReadTime(minutes);
}
