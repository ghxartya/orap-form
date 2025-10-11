import type { MessageKeys } from 'next-intl'
import type { HTMLAttributes } from 'react'

type tKey = MessageKeys<IntlMessages, IntlMessageKeys<IntlMessages>>

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  selectable?: boolean
  nowrap?: boolean
  tKey: tKey
}
