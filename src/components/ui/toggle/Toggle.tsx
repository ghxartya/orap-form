import clsx from 'clsx'

import type { ToggleProps } from './toggle.interface'

export default function Toggle({
  label,
  type = 'button',
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
        className
      )}
    >
      {children}
    </button>
  )
}
