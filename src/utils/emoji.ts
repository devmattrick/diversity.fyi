const SEXES = ['\u{1F468}', '\u{1F469}'];
const SKIN_TONES = [
  '\u{1F3FB}',
  '\u{1F3FC}',
  '\u{1F3FD}',
  '\u{1F3FE}',
  '\u{1F3FF}'
];
const OCCUPATIONS = [
  '\u{1F4BB}',
  '\u{1F52C}',
  '\u{2695}\u{FE0F}',
  '\u{1F3EB}',
  '\u{1F33E}',
  '\u{1F373}',
  '\u{1F527}',
  '\u{1F3ED}',
  '\u{1F4BC}',
  '\u{1F3A4}',
  '\u{1F3A8}',
  '\u{2708}\u{FE0F}',
  '\u{1F680}'
];
const ZWJ = '\u{200D}';

function randomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export default function randomEmoji(): string {
  const randomSex = randomElement(SEXES);
  const randomSkinTone = randomElement(SKIN_TONES);
  const randomOccupation = randomElement(OCCUPATIONS);

  return `${randomSex}${randomSkinTone}${ZWJ}${randomOccupation}`;
}
