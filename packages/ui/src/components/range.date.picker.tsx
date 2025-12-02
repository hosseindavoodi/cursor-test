"use client";
import { DayPicker as JalaliDatePicker } from "react-day-picker/persian";
import { DateRange, getDefaultClassNames, DayPicker as GregorianDatePicker } from "react-day-picker";

import "react-day-picker/style.css";
import { Input } from "./input";
import { useEffect, useRef, useState } from "react";
import useFocusWithin from "../hooks/useFoucsWithin";
import moment from "moment-jalaali";
import { ChevronLeft } from "lucide-react";
import { cn } from "../lib/utils";
import { Toggle } from "./toggle";

function RangeDatePicker(props: {
  setSelectedDate: (date: DateRange | undefined) => void;
  selectedDate: DateRange | undefined;
  varient?: "dashboard" | "client";
}) {
  // const [props.selectedDate, setSelectedDates] = useState<DateRange | undefined>();
  const parentRef = useRef<HTMLDivElement>(null);
  const focusWithin = useFocusWithin(parentRef);

  const [mode, setMode] = useState<"jalali" | "gregorian">("jalali");

  return (
    <div
      ref={parentRef}
      className="w-full relative"
    >
      <button
        className={`w-full focus-visible:ring-primary-300/50 focus-visible:border-primary-300 focus-visible:ring-[3px] border h-[44px] flex items-center ${props.varient === "dashboard" ? "rounded-[8px]" : "rounded-full"} `}
      >
        <div className="w-full relative">
          <p className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-500">از</p>
          <p>
            {props.selectedDate &&
              props.selectedDate.from &&
              moment(props.selectedDate.from)
                .locale(mode === "jalali" ? "fa" : "en")
                .format(mode === "jalali" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD")}
          </p>
        </div>
        <div className="w-[1px] h-full bg-gray-300" />
        <div className="w-full relative">
          <p className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-500">تا</p>
          <p>
            {props.selectedDate &&
              props.selectedDate.to &&
              moment(props.selectedDate.to)
                .locale(mode === "jalali" ? "fa" : "en")
                .format(mode === "jalali" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD")}
          </p>
        </div>
      </button>

      {focusWithin.isFocusedWithin && (
        <div className="absolute top-14 border rounded-[25px] p-3 pt-4 w-fit left-0 bg-white">
          {mode === "jalali" && (
            <>
              <JalaliDatePicker
                selected={props.selectedDate}
                onSelect={props.setSelectedDate}
                navLayout="around"
                numberOfMonths={2}
                formatters={{
                  formatWeekdayName(weekday, options, dateLib) {
                    return moment(weekday).locale("fa").format("dd");
                  },
                }}
                components={{
                  NextMonthButton(props) {
                    return (
                      <button
                        {...props}
                        className="absolute left-3 top-3 "
                      >
                        <ChevronLeft />
                      </button>
                    );
                  },
                  PreviousMonthButton(props) {
                    return (
                      <button
                        {...props}
                        className="absolute right-3 top-3 rotate-180"
                      >
                        <ChevronLeft />
                      </button>
                    );
                  },

                  Weekday(props) {
                    return (
                      <td
                        {...props}
                        className={cn("text-center ")}
                      ></td>
                    );
                  },

                  Root(props) {
                    return (
                      <div
                        {...props}
                        className={cn(props.className, " flex  justify-center")}
                      ></div>
                    );
                  },

                  Weekdays(props) {
                    return (
                      <tr
                        {...props}
                        className="w-full text-[13px] "
                      />
                    );
                  },
                  Months(props) {
                    return (
                      <div
                        {...props}
                        className=" w-full flex items-start gap-x-2 rounded-[25px]"
                      ></div>
                    );
                  },

                  DayButton(props) {
                    // const dayIsPassed = moment(props.day.date).isBefore(moment().subtract("d", 1));
                    return (
                      <button
                        {...props}
                        // disabled={dayIsPassed}
                      ></button>
                    );
                  },

                  Day(props) {
                    // const dayIsPassed = moment(props.day.date).isBefore(moment().subtract("d", 1));
                    return (
                      <td
                        {...props}
                        // className={cn(props.className, dayIsPassed && "text-gray-400")}
                      ></td>
                    );
                  },

                  MonthGrid(props) {
                    return (
                      <table
                        {...props}
                        className={cn("border-separate w-full border-spacing-y-2")}
                      ></table>
                    );
                  },
                }}
                mode="range"
                classNames={{
                  month: "font-medium",
                  month_caption: "font-medium w-full flex justify-center h-[45px]",
                  today: "text-primary-400",
                  selected: "font-medium",
                }}
              />
            </>
          )}

          {focusWithin.isFocusedWithin && (
            <>
              {mode === "gregorian" && (
                <>
                  <GregorianDatePicker
                    selected={props.selectedDate}
                    onSelect={props.setSelectedDate}
                    dir="ltr"
                    navLayout="around"
                    className="font-sans"
                    numberOfMonths={2}
                    formatters={{
                      formatWeekdayName(weekday, options, dateLib) {
                        return moment(weekday).locale("en").format("dd");
                      },
                    }}
                    components={{
                      NextMonthButton(props) {
                        return (
                          <button
                            {...props}
                            className="absolute right-3 top-3 rotate-180 "
                          >
                            <ChevronLeft />
                          </button>
                        );
                      },
                      PreviousMonthButton(props) {
                        return (
                          <button
                            {...props}
                            className="absolute left-3 top-3 "
                          >
                            <ChevronLeft />
                          </button>
                        );
                      },

                      Weekday(props) {
                        return (
                          <td
                            {...props}
                            className={cn("text-center ")}
                          ></td>
                        );
                      },

                      Root(props) {
                        return (
                          <div
                            {...props}
                            className={cn(props.className, " flex  justify-center")}
                          ></div>
                        );
                      },

                      Weekdays(props) {
                        return (
                          <tr
                            {...props}
                            className="w-full text-[13px] "
                          />
                        );
                      },
                      Months(props) {
                        return (
                          <div
                            {...props}
                            className=" w-full flex items-start gap-x-5 rounded-[25px]"
                          ></div>
                        );
                      },

                      DayButton(props) {
                        // const dayIsPassed = moment(props.day.date).isBefore(moment().subtract("d", 1));
                        return (
                          <button
                            {...props}
                            // disabled={dayIsPassed}
                          ></button>
                        );
                      },

                      Day(props) {
                        // const dayIsPassed = moment(props.day.date).isBefore(moment().subtract("d", 1));
                        return (
                          <td
                            {...props}
                            // className={cn(props.className, dayIsPassed && "text-gray-400")}
                          ></td>
                        );
                      },

                      MonthGrid(props) {
                        return (
                          <table
                            {...props}
                            className={cn("border-separate w-full border-spacing-y-2")}
                          ></table>
                        );
                      },
                    }}
                    mode="range"
                    classNames={{
                      month: "font-medium",
                      month_caption: "font-medium w-full flex justify-center h-[45px]",
                      today: "text-primary-400",
                      selected: "font-medium",
                    }}
                  />
                </>
              )}
            </>
          )}

          <div className="w-full flex justify-end items-center">
            <Toggle
              pressed={mode === "jalali"}
              onPressedChange={() => setMode("jalali")}
              className="rounded-l-none"
            >
              شمسی
            </Toggle>
            <Toggle
              pressed={mode === "gregorian"}
              onPressedChange={() => setMode("gregorian")}
              className="rounded-r-none"
            >
              میلادی
            </Toggle>
          </div>
        </div>
      )}
    </div>
  );
}

export default RangeDatePicker;
