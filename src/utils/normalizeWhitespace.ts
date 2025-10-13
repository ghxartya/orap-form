export const normalizeWhitespace = (
  value: string,
  trimStartOnly: boolean = false
) =>
  value &&
  (!trimStartOnly
    ? value.replace(/\s+/g, ' ').trim()
    : value.replace(/\s+/g, ' ').trimStart())
