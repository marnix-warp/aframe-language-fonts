import {readFile} from 'fs/promises'

const chars = JSON.parse(
  await readFile(new URL('../japanese/japanese.json', import.meta.url))
)

const printchars = (array) => {
  return array.map(char => {
    return String.fromCodePoint(char)
  })
}
console.log(printchars(chars.chars).join(''))
