import type { Dispatch, HTMLAttributes, SetStateAction } from 'react'

import type { Option, SelectProps } from '@/ui/select/select.interface'

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  isOpen: boolean
  selected: Option
  setSelected: Dispatch<SetStateAction<Option | undefined>>
  options: SelectProps['options']
  isCountrySelect: boolean
  handleOpen: (isOpen: boolean, isDropdownOpen: boolean) => void
  searchError: string
}
