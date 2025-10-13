import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { useDebounceCallback, useOnClickOutside } from 'usehooks-ts'

import { Icons } from '@/ui/icons'
import Toggle from '@/ui/toggle/Toggle'

import List from './list/List'
import type { DropdownRef, Option, SelectProps } from './select.interface'
import Span from './span/Span'

export default function Select({
  options,
  disabled,
  onChange,
  className,
  ...rest
}: SelectProps) {
  const [selected, setSelected] = useState<Option>()
  const [wasItDefaulted, setWasIsDefaulted] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownClose = useDebounceCallback(() => {
    setIsDropdownOpen(false)
    setIsDisabled(false)
  }, 300)

  const handleOpen = (isOpen: boolean, isDropdownOpen: boolean) => {
    setIsOpen(isOpen)
    if (isDropdownOpen) setIsDropdownOpen(true)
    else {
      setIsDisabled(true)
      dropdownClose()
    }
  }

  useOnClickOutside(dropdownRef as DropdownRef, () => handleOpen(false, false))

  useEffect(() => {
    if (options && Array.isArray(options) && options.length > 0)
      setSelected(options[0])
    else setSelected(undefined)
  }, [options])

  useEffect(() => {
    if (selected) {
      if (!wasItDefaulted) {
        const isGermany = (value: string) => value === 'Germany'
        const defaultCountry = options.find(country => isGermany(country.value))

        if (defaultCountry) {
          setWasIsDefaulted(true)
          setSelected(defaultCountry)
        }
      } else onChange(selected.value)
    }
  }, [selected])

  if (!selected) return null
  const isCountrySelect = 'flags' in selected

  return (
    <div
      {...rest}
      ref={dropdownRef}
      className={clsx('relative self-stretch', className)}
    >
      <Toggle
        label='toggle dropdown open'
        disabled={isDisabled || disabled}
        onClick={() => handleOpen(!isOpen, !isDropdownOpen)}
        className={clsx(
          'border-gray bg-brand-background flex h-16 w-full items-center justify-between rounded-sm border px-3 py-5',
          { 'rounded-b-none': isDropdownOpen }
        )}
        disableVisualInteraction
      >
        <Span option={selected} isCountrySelect={isCountrySelect} />
        <div onMouseEnter={() => !isDisabled && handleOpen(true, true)}>
          <Icons.Select.Arrow
            className={clsx(
              'text-paragraph-blue transition-transform duration-300',
              { 'rotate-180': isOpen }
            )}
          />
        </div>
      </Toggle>
      <List
        isOpen={isOpen}
        selected={selected}
        setSelected={setSelected}
        options={options}
        isCountrySelect={isCountrySelect}
        handleOpen={handleOpen}
      />
    </div>
  )
}
