import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import type { ButtonProps } from './button.interface'

export default function Button({ className, tKey, ...rest }: ButtonProps) {
  const t = useTranslations()

  return (
    <button
      {...rest}
      className={clsx(
        'bg-gray-background text-gray font-arial h-12 rounded-xs px-4 py-2 text-base leading-none font-normal',
        className
      )}
    >
      {t(tKey)}
    </button>
  )
}
