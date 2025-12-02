export function addThousandSeparators(numStr: string) {
  // Remove any existing non-digit characters except the decimal point if present
  const cleaned = numStr.replace(/[^0-9.]/g, "");

  // Split into integer and decimal parts
  const parts = cleaned.split(".");
  let integerPart = parts[0];
  const decimalPart = parts[1] ? "." + parts[1] : "";

  // Add commas to integer part
  integerPart = integerPart?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return integerPart + decimalPart;
}

export function removeThousandSeparators(numStr: string) {
  // Remove thousand separators (commas)
  const cleaned = numStr.replace(/,/g, "");

  // Parse to number
  const num = parseFloat(cleaned);
  if (isNaN(num)) {
    throw new Error("Invalid number format"); // Or return null/undefined as preferred
  }

  return num;
}
