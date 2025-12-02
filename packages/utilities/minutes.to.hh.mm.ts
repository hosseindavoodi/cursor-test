export function minutesToHHmm(totalMinutes: number): string {
  // Normalize: 1440 minutes = 00:00 (next day), 1441 = 00:01, etc.
  const normalized = totalMinutes % 1440;
  const hours = Math.floor(normalized / 60).toFixed(0);
  const minutes = (normalized % 60).toFixed(0);

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}
