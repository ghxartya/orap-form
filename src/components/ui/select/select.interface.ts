import type { HTMLAttributes, RefObject } from 'react'

type Options = {
  id: string
  value: string
}[]

export type CountryOptions = Options &
  {
    flags: {
      svg: string
      alt: string
    }
  }[]

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange: (value: string) => void
  options: Options | CountryOptions
  disabled?: boolean
}

export type Option = SelectProps['options'][number]
export type DropdownRef = RefObject<HTMLDivElement>
