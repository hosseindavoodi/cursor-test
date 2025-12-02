export function calculateAge(isoDateString: string): number {
  const birthDate = new Date(isoDateString);
  if (isNaN(birthDate.getTime())) {
    throw new Error('Invalid ISO date string');
  }

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
}
