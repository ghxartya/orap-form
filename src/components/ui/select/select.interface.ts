import { HTMLAttributes, RefObject } from 'react'

export type Options = {
  id: number | string
  value: number | string
}[]

export type CountryOptions = {
  flag: string
  country: string
  code: string
}[]

export interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  options: Options | CountryOptions
  disabled?: boolean
}

export type Option = SelectProps['options'][number]
export type DropdownRef = RefObject<HTMLDivElement>
