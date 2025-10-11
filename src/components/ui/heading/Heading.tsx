import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import type { HeadingProps } from './heading.interface'

export default function Heading({
  selectable = true,
  className,
  nowrap,
  tKey,
  ...rest
}: HeadingProps) {
  const t = useTranslations()

  return (
    <h1
      {...rest}
      className={clsx(
        'font-nekst leading-heading tracking-heading text-brand-blue text-2xl select-none',
        {
          'selection:text-brand-blue/75 cursor-text select-text': selectable,
          'max-w-full overflow-hidden text-ellipsis whitespace-nowrap': nowrap
        },
        className
      )}
    >
      {t(tKey)}
    </h1>
  )
}
