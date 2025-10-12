import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import type { InputProps } from './input.interface'

export default function Input({
  className,
  label: tKey,
  error,
  name,
  ...rest
}: InputProps) {
  const t = useTranslations()
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div
      className={clsx(
        'border-gray bg-brand-background flex h-16 cursor-text flex-col items-start justify-center gap-2 self-stretch rounded-sm border border-solid px-3 py-6',
        { 'border-red-500/50': error },
        className
      )}
      onClick={event => {
        if (event.target !== inputRef.current) {
          const input = inputRef.current

          if (input) {
            input.focus()
            const length = input.value.length
            input.setSelectionRange(length, length)
          }
        }
      }}
    >
      <label
        htmlFor={name}
        className='leading-label font-arial text-paragraph-blue text-xs font-normal select-none'
      >
        {t(tKey)} {error && `/ ${error}`}
      </label>
      <input
        {...rest}
        id={name}
        name={name}
        ref={inputRef}
        className='text-brand-blue font-arial leading-medium selection:text-brand-blue/75 self-stretch text-base font-normal focus-visible:outline-none'
      />
    </div>
  )
}
