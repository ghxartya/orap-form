import type { HTMLAttributes } from 'react'

import type { Option } from '@/ui/select/select.interface'

export interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
  option: Option
  isCountrySelect: boolean
}
