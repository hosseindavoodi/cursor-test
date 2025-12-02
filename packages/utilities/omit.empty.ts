export function omitEmpty<T>(obj: T): T | undefined {
  if (obj === null || obj === undefined || obj === "") return undefined;

  if (Array.isArray(obj)) {
    const cleanedArray = obj.map((item) => omitEmpty(item)).filter((item) => item !== undefined);
    return cleanedArray.length > 0 ? (cleanedArray as T) : undefined;
  }

  if (typeof obj === "object") {
    const result: Record<string, any> = {};
    let hasProperties = false;

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = omitEmpty(obj[key]);
        if (value !== undefined) {
          result[key] = value;
          hasProperties = true;
        }
      }
    }

    return hasProperties ? (result as T) : undefined;
  }

  return obj;
}
