import clsx from 'clsx'
import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { nekst } from '@/assets/fonts'
import '@/assets/styles/globals.css'

import Background from '@/layout/background/Background'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata')

  const title = t('title')
  const description = t('description')

  return {
    title,
    description
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={clsx(nekst.variable, 'antialiased')}>
        <Background />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
