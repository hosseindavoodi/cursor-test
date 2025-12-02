import { Calendar } from "@sana/ui/components/flight-calendar";
import { useFlightSearchStore } from "../../_store/flight.search.store";
import moment from "moment-jalaali";

function FlightCalendar() {
  const { updateSegment, payload, updateInputs, dateLocale, setStore } = useFlightSearchStore();
  const normalizeToMidnightUTC = (date: Date): string => {
    const d = new Date(date);
    d.setUTCHours(0, 0, 1, 1); // Clone to avoid mutation
    return d.toISOString(); // Always ends with T00:00:00.000Z
  };
  return (
    <div className="shadow-lg border z-[800]  border-gray-400 absolute rounded-[25px] top-22  h-[400px] p-4 bg-white">
      {payload.flightTypeName === "one_way" && (
        <Calendar
          onModeChange={(locale) => setStore({ dateLocale: locale })}
          mode="single"
          calendarMode={dateLocale}
          selected={payload.segs[0]?.departureDate ? new Date(payload.segs[0].departureDate) : undefined}
          onSelect={(selected) => {
            if (selected) {
              const midnightDate = normalizeToMidnightUTC(selected);

              updateSegment(0, "departureDate", midnightDate);
              updateInputs(
                0,
                "departure_date",
                moment(midnightDate)
                  .locale(dateLocale === "jalali" ? "fa" : "en")
                  .format(dateLocale === "jalali" ? "dddd jD jMMMM" : "dddd D MMMM")
              );
            }
          }}
          numberOfMonths={2}
        />
      )}
      {payload.flightTypeName === "round_trip" && (
        <Calendar
          onModeChange={(locale) => setStore({ dateLocale: locale })}
          mode="range"
          calendarMode={dateLocale}
          numberOfMonths={2}
          selected={{
            from: payload.segs[0]?.departureDate ? new Date(payload.segs[0].departureDate) : undefined,
            to: payload.segs[1]?.departureDate ? new Date(payload.segs[1].departureDate) : undefined,
          }}
          onSelect={(selected) => {
            if (selected?.from && selected?.to) {
              const fromMidnight = normalizeToMidnightUTC(selected.from);
              const toMidnight = normalizeToMidnightUTC(selected.to);

              const fromIso = fromMidnight;
              const toIso = toMidnight;

              updateSegment(0, "departureDate", fromIso);
              updateSegment(1, "departureDate", toIso);

              updateInputs(
                0,
                "departure_date",
                moment(fromIso)
                  .locale(dateLocale === "jalali" ? "fa" : "en")
                  .format(dateLocale === "jalali" ? "dddd jD jMMMM" : "dddd D MMMM")
              );
              updateInputs(
                1,
                "departure_date",
                moment(toIso)
                  .locale(dateLocale === "jalali" ? "fa" : "en")
                  .format(dateLocale === "jalali" ? "dddd jD jMMMM" : "dddd D MMMM")
              );
            }
          }}
        />
      )}
    </div>
  );
}

export default FlightCalendar;
