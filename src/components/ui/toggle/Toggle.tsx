import clsx from 'clsx'

import type { ToggleProps } from './toggle.interface'

export default function Toggle({
  label,
  type = 'button',
  disableVisualInteraction,
  className,
  children,
  ...rest
}: ToggleProps) {
  return (
    <button
      {...rest}
      aria-label={label}
      type={type}
      className={clsx(
        'cursor-pointer transition-opacity duration-300 hover:opacity-75 focus-visible:opacity-75 focus-visible:outline-none disabled:opacity-75',
        {
          'hover:opacity-100 focus-visible:opacity-100':
            disableVisualInteraction
        },
        className
      )}
    >
      {children}
    </button>
  )
}
