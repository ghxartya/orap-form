import messages from '@/messages/en-US.json'

type Messages = typeof messages

declare global {
  type IntlMessages = Messages
  type IntlMessageKeys<ObjectType, Keys extends string = ''> = {
    [Key in keyof ObjectType]: ObjectType[Key] extends object
      ? IntlMessageKeys<ObjectType[Key], `${Keys}${Key & string}.`>
      : `${Keys}${Key & string}`
  }[keyof ObjectType]
}
