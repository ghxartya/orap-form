import clsx from 'clsx'

import type {
  CountryOptions,
  Option,
  Options
} from '@/ui/select/select.interface'
import Span from '@/ui/select/span/Span'

import type { ListProps } from './list.interface'

export default function List({
  isOpen,
  selected,
  setSelected,
  options,
  isCountrySelect,
  handleOpen,
  className,
  ...rest
}: ListProps) {
  const handleSelect = (option: Option) => {
    setSelected(option)
    handleOpen(false, false)
  }

  return (
    <ul
      {...rest}
      id='dropdown-list'
      className={clsx(
        'bg-brand-background border-gray transition-max-height-visibility pointer-events-none invisible absolute top-full z-10 max-h-0 w-full overflow-y-auto rounded-b-sm border border-t-0 shadow duration-300 will-change-auto',
        { '!pointer-events-auto !visible max-h-60': isOpen },
        className
      )}
    >
      {options.map(option => {
        const optionKey = isCountrySelect
          ? (option as CountryOptions[number]).code
          : (option as Options[number]).id

        const isOptionSelected =
          optionKey ===
          (isCountrySelect
            ? (selected as CountryOptions[number]).code
            : (selected as Options[number]).id)

        return (
          <li
            key={optionKey}
            onClick={() => handleSelect(option)}
            className={clsx(
              'bg-brand-background hover:bg-gray-background cursor-pointer px-3 py-5 transition-colors duration-300',
              { '!bg-gray': isOptionSelected }
            )}
          >
            <Span option={option} isCountrySelect={isCountrySelect} />
          </li>
        )
      })}
    </ul>
  )
}
