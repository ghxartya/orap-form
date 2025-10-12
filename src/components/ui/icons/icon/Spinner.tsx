import clsx from 'clsx'

import type { IconProps } from '../icon.interface'

export default function Spinner({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      focusable='false'
      aria-hidden='true'
      role='presentation'
      className={clsx(
        'pointer-events-none animate-spin text-current',
        className
      )}
    >
      <circle
        cx='12'
        cy='12'
        r='10'
        className='opacity-25'
        stroke='currentColor'
        strokeWidth='4'
      />
      <path
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        className='opacity-75'
        fill='currentColor'
      />
    </svg>
  )
}
