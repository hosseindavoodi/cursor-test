import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import useFocusWithin from "../hooks/useFoucsWithin";
import useFocusLeave from "../hooks/useFoucsLeave";
import moment from "moment-jalaali";
function InputDate(props: {
  classNames?: {
    container?: string;
  };
  mode: "jalali" | "gregorian";
  disabled?: boolean;
  initDate?: string;
  ariaInvalid?: boolean;
  errorMessage?: string;
  dayPlaceholder?: string;
  yearPlaceHolder?: string;
  monthPlaceHolder?: string;
  setDate: (date: string) => void;
}) {
  const parentRef = useRef<HTMLButtonElement>(null);

  const [date, setDate] = useState<{
    year: string;
    month: string;
    day: string;
  }>({
    year: "",
    day: "",
    month: "",
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, currentFocus: "day" | "month" | "year"): void => {
    if (event.key === "Backspace") {
      if (currentFocus === "year") {
        if (date.year.length === 0) {
          monthRef.current?.focus();
        }
      }

      if (currentFocus === "month") {
        if (date.month.length === 0) {
          dayRef.current?.focus();
        }
      }
    }
  };

  useEffect(() => {
    if (date.day.length === 2) {
      if (!date.month) {
        monthRef.current?.focus();
      } else if (!date.year) {
        yearRef.current?.focus();
      }
    }
  }, [date.day]);

  useEffect(() => {
    if (date.month.length === 2) {
      if (date.day && date.year.length < 4) {
        yearRef.current?.focus();
      }
      if (!date.day && date.year) {
        dayRef.current?.focus();
      }
    }
  }, [date.month]);

  useEffect(() => {
    if (date.year.length === 4) {
      console.log("date", date.year, date.month, date.day);
      if (!date.month && date.day) {
        monthRef.current?.focus();
      }

      if (!date.month && !date.day) {
        monthRef.current?.focus();
      }

      if (!date.day && date.month) {
        dayRef.current?.focus();
      }
    }
  }, [date.year]);

  useEffect(() => {
    if (props.initDate) {
      const initDate = moment(props.initDate)
        .locale(props.mode === "gregorian" ? "en" : "fa")
        .utc(true);
      if (props.mode === "gregorian") {
        const day = initDate.date().toString();
        const month = (initDate.month() + 1).toString();
        const year = initDate.year().toString();

        if (year !== date.year && month !== date.month && day !== date.day) {
          setDate((prev) => ({ year, month, day }));
        }

        // setDate({ year, month, day });
      } else {
        const day = initDate.jDate().toString();
        const month = (initDate.jMonth() + 1).toString();
        const year = initDate.jYear().toString();

        if (year !== date.year && month !== date.month && day !== date.day) {
          setDate((prev) => ({ year, month, day }));
        }
      }
    }
  }, [props.initDate]);

  const yearRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLInputElement>(null);

  const { isFocusedWithin, setIsFocusedWithin } = useFocusWithin(parentRef);
  const { hasFocusLeft, setHasFocusLeft } = useFocusLeave(parentRef);

  useEffect(() => {
    if (isFocusedWithin) {
      dayRef.current?.focus();
    }
  }, [isFocusedWithin]);

  useEffect(() => {
    if (hasFocusLeft) {
      setIsFocusedWithin(false);
    }
  }, [hasFocusLeft]);

  useEffect(() => {
    if (date.day && date.month && date.year) {
      const { day, month, year } = date;

      console.log(year, month, day);

      const isoDate = moment(`${year}-${month}-${day}`, props.mode === "gregorian" ? "YYYY-MM-DD" : "jYYYY-jMM-jDD")
        .locale(props.mode === "gregorian" ? "en" : "fa")
        .utc(true)
        .toISOString();

      props.setDate(isoDate);
    } else {
      console.log("date set to empty");
      props.setDate("");
    }
  }, [date]);

  return (
    <div>
      <button
        type="button"
        disabled={props.disabled}
        ref={parentRef}
        //   onFocus={() => dayRef.current?.focus()}

        className={` ${props.ariaInvalid ? "border-red-400" : isFocusedWithin ? "border-primary-300 ring-primary-300/50 ring-[3px]" : "border-gray-300"} disabled:text-gray-500  w-full flex relative border disabled:pointer-events-none  items-center   h-[44px] rounded-full`}
      >
        <>
          <input
            disabled={props.disabled}
            style={{ direction: "ltr" }}
            value={date.day}
            onKeyDown={(e) => handleKeyDown(e, "day")}
            onChange={(e) => {
              const regex = /^(?:0|[1-9]|0[1-9]|[12][0-9]|3[01])?$/;

              if (regex.test(e.target.value)) {
                console.log("test");
                setDate((prev) => ({ ...prev, day: e.target.value }));
              }
            }}
            ref={dayRef}
            placeholder={props.dayPlaceholder ?? "روز"}
            className={cn(
              "w-full text-center border-none rounded-r-full placeholder:text-[12px] disabled:text-gray-500 placeholder:text-gray-500 focus:outline-none focus:border-0 focus:border-none focus:ring-0",
              props.mode === "gregorian" ? "font-inter" : ""
            )}
          />
          /
          <input
            disabled={props.disabled}
            style={{ direction: "ltr" }}
            value={date.month}
            onKeyDown={(e) => handleKeyDown(e, "month")}
            onChange={(e) => {
              const regex = /^(?:0|0?[1-9]|1[0-2]|^)$/;
              if (regex.test(e.target.value)) {
                setDate((prev) => ({ ...prev, month: e.target.value }));
              }
            }}
            ref={monthRef}
            placeholder={props.monthPlaceHolder ?? "ماه"}
            className={cn(
              "w-full text-center border-none  placeholder:text-[12px] disabled:text-gray-500 placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-none",
              props.mode === "gregorian" ? "font-inter" : ""
            )}
          />
          /
          <input
            disabled={props.disabled}
            style={{ direction: "ltr" }}
            value={date.year}
            onKeyDown={(e) => handleKeyDown(e, "year")}
            onChange={(e) => {
              let regex;
              if (props.mode === "jalali") {
                regex = /^(?:[1-9][0-9]{0,2}|1[3-4][0-9]{0,2})?$/;
              } else {
                regex = /^(?:[1-9][0-9]{0,3})?$/;
              }

              if (regex.test(e.target.value)) {
                setDate((prev) => ({ ...prev, year: e.target.value }));
              }
            }}
            placeholder={props.yearPlaceHolder ?? "سال"}
            ref={yearRef}
            className={cn(
              "w-full text-center border-none rounded-l-full placeholder:text-[12px] disabled:text-gray-500 placeholder:text-gray-500 focus:ring-0 focus:outline-none focus:border-none",
              props.mode === "gregorian" ? "font-inter" : ""
            )}
          />
        </>
      </button>
      {props.ariaInvalid && (
        <p className="text-[13px] mt-2 font-medium text-red-500  bg-white  top-12 px-2  right-0">{props.errorMessage}</p>
      )}
    </div>
  );
}

export default InputDate;
