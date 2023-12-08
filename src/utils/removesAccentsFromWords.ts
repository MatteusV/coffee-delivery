export function removeAccentsFromWord(word: string) {
  const wordWithoutAccents = word
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  return wordWithoutAccents
}
