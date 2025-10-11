import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    qualities: [25, 50, 75, 100]
  }
}

const withNextIntl = createNextIntlPlugin('./src/localization/request.ts')
export default withNextIntl(nextConfig)
