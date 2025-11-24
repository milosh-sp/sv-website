function camelToSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
}

function convertKeysToSnakeCase(
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
        // Convert array to JSON string for backend compatibility
        // Backend expects arrays as JSON strings that will be parsed and converted to comma-separated format
        acc[snakeCaseKey] = JSON.stringify(value)
      } else {
        acc[snakeCaseKey] = value
      }

      return acc
    },
    {} as Record<string, unknown>
  )
}

function generateId() {
  return (Math.random() + 1).toString(36).substring(2, 12)
}

export { convertKeysToSnakeCase, generateId }
