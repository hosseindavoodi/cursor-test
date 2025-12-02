export function minutesToPersian(totalMinutes: number): string {
  if (!Number.isInteger(totalMinutes)) {
    throw new Error("Input must be an integer");
  }
  if (totalMinutes < 0) {
    throw new Error("Minutes cannot be negative");
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);

  // Use Intl to format numbers in Persian
  const formatter = new Intl.NumberFormat("fa-IR", {
    useGrouping: false,
  });

  const h = formatter.format(hours);
  const m = formatter.format(minutes);

  return `${hours > 0 ? hours + " ساعت" + (minutes > 0 ? " و" : "") : ""} ${minutes > 0 ? minutes + "   دقیقه" : ""}`;
}
