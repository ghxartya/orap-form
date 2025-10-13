import clsx from 'clsx'
import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { headers } from 'next/headers'

import ReactQueryProvider from '@/providers/ReactQueryProvider'

import { nekst } from '@/assets/fonts'
import '@/assets/styles/globals.css'

import { METADATA } from '@/config/metadata.config'

import Background from '@/layout/background/Background'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()

  const host = headersList.get('host')
  const protocol = host?.startsWith('localhost') ? 'http://' : 'https://'
  const baseUrl = protocol + host

  const applicationName = METADATA.APPLICATION_NAME
  const applicationBaseUrl = new URL(baseUrl)
  const siteName = METADATA.SITE_NAME

  const metadataBase = METADATA.BASE
  const metadataBaseUrl = baseUrl + metadataBase

  const author = METADATA.AUTHOR
  const repository = METADATA.REPO

  const t = await getTranslations('Metadata')
  const title = t('title')
  const description = t('description')

  return {
    title,
    description,
    applicationName,
    abstract: description,
    metadataBase: new URL(metadataBaseUrl),
    openGraph: {
      title,
      description,
      siteName,
      images: ['/background.jpg']
    },
    authors: [
      {
        name: author,
        url: repository
      }
    ],
    icons: {
      icon: applicationBaseUrl + '/icon.png',
      apple: applicationBaseUrl + '/apple-icon.png'
    }
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
        <NextIntlClientProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
