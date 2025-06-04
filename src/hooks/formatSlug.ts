import type { FieldHook } from 'payload'
import slugify from 'slugify'

export const format = (val: string): string =>
  slugify(val, {
    replacement: '-',
    strict: true, // Removes non-alphanumeric characters except dashes
  })

const formatSlug =
  (fallback: string): FieldHook =>
  ({ data, operation, originalDoc, value }) => {
    if (typeof value === 'string') {
      return format(value)
    }

    if (operation === 'create') {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback]

      if (fallbackData && typeof fallbackData === 'string') {
        return format(fallbackData)
      }
    }

    return value
  }

export default formatSlug
