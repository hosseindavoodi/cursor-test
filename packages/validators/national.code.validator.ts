/**
 * Validates an Iranian National ID (کد ملی)
 * Accepts string or number, 10 digits, allows leading zeros
 * Examples:
 *   ✓ 0024931012  (valid real example)
 *   ✓ 0491498019
 *   ✗ 0024931013  (invalid check digit)
 */
export function isValidIranianNationalCode(code: string | number): boolean {
  // 1. Convert to string and remove any spaces/dashes
  const str = String(code).replace(/[\s-]/g, "").trim();

  // 2. Must be exactly 10 digits
  if (!/^\d{10}$/.test(str)) {
    return false;
  }

  // 3. All digits cannot be the same (e.g. 0000000000, 1111111111, etc.)
  if (/^(\d)\1{9}$/.test(str)) {
    return false;
  }

  // 4. Check digit algorithm
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(str.charAt(i)) * (10 - i);
  }

  const remainder = sum % 11;
  const checkDigit = parseInt(str.charAt(9));

  // Rule:
  // - If remainder < 2 → check digit must equal remainder
  // - If remainder ≥ 2 → check digit must equal 11 - remainder
  const isValid = remainder < 2 ? checkDigit === remainder : checkDigit === 11 - remainder;

  return isValid;
}
