export const handleWords = words => {
  const wordMap = {}

  words.map(w => (wordMap[w.wordId] = w.word))

  return wordMap
}
