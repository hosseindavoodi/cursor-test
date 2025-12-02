import jalaali from "jalaali-js";

export function formatDate(
  date: Date | null,
  calendar: "persian" | "gregorian"
) {
  if (!date) return "";
  if (calendar === "gregorian") return date.toLocaleDateString("en-GB");
  const { jy, jm, jd } = jalaali.toJalaali(date);
  return `${jy}/${String(jm).padStart(2, "0")}/${String(jd).padStart(2, "0")}`;
}

export function jalaliMonthDays(year: number, month: number) {
  return jalaali.jalaaliMonthLength(year, month);
}

export const getMonthDays = (
  year: number,
  month: number,
  cal: "gregorian" | "persian"
) => {
  let days: number[] = [];
  let startWeekday = 0;

  if (cal === "gregorian") {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    startWeekday = firstDay.getDay();
    days = Array.from({ length: lastDay.getDate() }, (_, i) => i + 1);
  } else {
    const daysInMonth = jalaliMonthDays(year, month);
    const gFirst = jalaali.toGregorian(year, month, 1);
    startWeekday = new Date(gFirst.gy, gFirst.gm - 1, gFirst.gd).getDay();
    days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  return Array(startWeekday).fill(null).concat(days);
};

export const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
