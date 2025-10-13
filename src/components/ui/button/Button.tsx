import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import type { ButtonProps } from './button.interface'

export default function Button({
  className,
  isActive,
  tKey,
  ...rest
}: ButtonProps) {
  const t = useTranslations()

  return (
    <button
      {...rest}
      className={clsx(
        'bg-gray-background text-gray font-arial h-12 cursor-pointer rounded-xs px-4 py-2 text-base leading-none font-normal transition-colors duration-300 select-none disabled:pointer-events-none',
        {
          'hover:!bg-brand-blue/95 !bg-brand-blue text-white': isActive
        },
        className
      )}
    >
      {t(tKey)}
    </button>
  )
}
