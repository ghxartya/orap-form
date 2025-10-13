import type { MessageKeys } from 'next-intl'
import type { ButtonHTMLAttributes } from 'react'

type tKey = MessageKeys<IntlMessages, IntlMessageKeys<IntlMessages>>

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tKey: tKey
}
