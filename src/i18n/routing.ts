import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['ru', 'kz', 'en'],

  defaultLocale: 'kz',

  localeDetection: false
})
