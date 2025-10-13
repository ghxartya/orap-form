import type { MessageKeys } from 'next-intl'
import type { InputHTMLAttributes } from 'react'

type Label = MessageKeys<IntlMessages, IntlMessageKeys<IntlMessages>>

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  label: Label
  error?: string
}
