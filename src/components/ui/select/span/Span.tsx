import clsx from 'clsx'
import Image from 'next/image'

import type { CountryOptions } from '@/ui/select/select.interface'

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
        <div className='relative aspect-[20/15] h-[15px] w-5'>
          <Image
            className='object-cover select-none'
            src={(option as CountryOptions[number]).flags.svg}
            alt={(option as CountryOptions[number]).flags.alt}
            fill
            draggable={false}
          />
        </div>
      )}
      <span
        {...rest}
        className={clsx(
          'font-arial text-brand-blue leading-medium text-base font-normal select-none',
          className
        )}
      >
        {option.value}
      </span>
    </div>
  )
}
