import clsx from 'clsx'
import Image from 'next/image'

import type { CountryOptions, Options } from '@/ui/select/select.interface'

import type { SpanProps } from './span.interface'

export default function Span({
  option,
  isCountrySelect,
  className,
  ...rest
}: SpanProps) {
  return (
    <div className='flex items-center gap-2'>
      {isCountrySelect && (
        <Image
          className='select-none'
          src={(option as CountryOptions[number]).flag}
          alt='Country Flag'
          width={20}
          height={15}
          draggable={false}
        />
      )}
      <span
        {...rest}
        className={clsx(
          'font-arial text-brand-blue leading-medium text-base font-normal select-none',
          className
        )}
      >
        {isCountrySelect
          ? (option as CountryOptions[number]).country
          : (option as Options[number]).value}
      </span>
    </div>
  )
}
