import { instance } from '@/api/api.config'

import type { CountryOptions } from '@/ui/select/select.interface'

import type { Country } from './types/country.interface'

export const CountryService = {
  async getCountries(amount?: number) {
    try {
      const { data: countries } = await instance<Country[]>({
        url: '/all?fields=name,flags',
        method: 'GET'
      })

      const formattedCountries: CountryOptions = countries
        .slice(0, amount)
        .map(country => ({
          flags: {
            svg: country.flags.svg,
            alt: country.flags.alt
          },
          value: country.name.common,
          id: country.name.official
        }))
        .sort((a, b) => a.value.localeCompare(b.value))

      return formattedCountries
    } catch (error) {
      console.error('Failed to fetch/parse countries:', error)
      return []
    }
  }
}
