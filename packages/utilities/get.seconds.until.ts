export function getSecondsUntil(validUntil: string) {
  // Parse the ISO string to a Date object
  const validUntilDate = new Date(validUntil);

  // Get the current time
  const now = new Date();

  // Calculate the difference in milliseconds
  const diffMs = validUntilDate.getTime() - now.getTime();

  // Convert to seconds and round down
  const secondsLeft = Math.floor(diffMs / 1000);

  // Return 0 if the time has already passed
  return Math.max(0, secondsLeft);
}
