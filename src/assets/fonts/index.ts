import localFont from 'next/font/local'

export const nekst = localFont({
  src: [
    {
      path: './Nekst-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--font-nekst'
})
