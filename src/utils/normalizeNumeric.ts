import { normalizeWhitespace } from './normalizeWhitespace'

export const normalizeNumeric = (
  value: string,
  allowSpecial: boolean = false
) => {
  if (!allowSpecial) {
    const digits = value.replace(/[^0-9]/g, '')
    const sign = /^-/.test(value) ? -1 : 1
    let numberValue

    if (digits.length > 15) {
      const truncatedDigits = digits.slice(0, 15)
      numberValue = parseInt(truncatedDigits, 10) * sign
    } else numberValue = parseInt(digits, 10) * sign || 0

    numberValue = Math.max(0, numberValue)
    return numberValue.toString()
  }

  let hasLetter = false
  const cleaned = value
    .split('')
    .filter(character => {
      if (/[a-zA-Z]/.test(character)) {
        if (!hasLetter) {
          hasLetter = true
          return true
        }
        return false
      }
      return /[\d\s\-\/]/.test(character)
    })
    .join('')

  return normalizeWhitespace(cleaned, true)
}
