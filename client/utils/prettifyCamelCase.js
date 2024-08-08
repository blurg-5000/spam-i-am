export default function prettifyCamelCase(string) {
  const splitString = string.split(/(?=[A-Z])/)

  let prettyWords = []

  splitString.map((word) => {
    const splitWord = word.split('')

    const reprocessedWord = splitWord
      .map((char, idx) => {
        if (idx === 0) {
          return char.toUpperCase()
        } else {
          return char
        }
      })
      .join('')

    prettyWords.push(reprocessedWord, ' ')
  })

  return prettyWords.join('').toString()
}
