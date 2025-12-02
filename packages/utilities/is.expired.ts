export function isDateExpired(isoDateString: string) {
  if (!isoDateString) return false;

  try {
    const expiryDate = new Date(isoDateString);
    const currentDate = new Date();

    if (isNaN(expiryDate.getTime())) return false;

    return currentDate > expiryDate;
  } catch (error) {
    return false;
  }
}
