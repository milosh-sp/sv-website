function camelToSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
}

export function convertKeysToSnakeCase(
  obj: Record<string, unknown>
): Record<string, unknown> {
  if (Array.isArray(obj)) {
    return obj.map((item) =>
      typeof item === 'object' && item !== null
        ? convertKeysToSnakeCase(item as Record<string, unknown>)
        : item
    ) as unknown as Record<string, unknown>
  }

  if (typeof obj !== 'object' || obj === null) {
    return obj as Record<string, unknown>
  }

  return Object.entries(obj).reduce(
    (acc, [key, value]) => {
      const snakeCaseKey = camelToSnakeCase(key)

      if (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
      ) {
        acc[snakeCaseKey] = convertKeysToSnakeCase(
          value as Record<string, unknown>
        )
      } else if (Array.isArray(value)) {
        acc[snakeCaseKey] = value.map((item) =>
          typeof item === 'object' && item !== null
            ? convertKeysToSnakeCase(item as Record<string, unknown>)
            : item
        )
      } else {
        acc[snakeCaseKey] = value
      }

      return acc
    },
    {} as Record<string, unknown>
  )
}
