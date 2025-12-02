"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";
import { faIR, DayPicker as JalaliDayPicker } from "react-day-picker/persian";
import { cn } from "@sana/ui/lib/utils";
import { Button, buttonVariants } from "@sana/ui/components/button";
import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern" });
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  calendarMode,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
  calendarMode: "jalali" | "gregorian";
  onModeChange: (mode: "jalali" | "gregorian") => void;
}) {
  const defaultClassNames = getDefaultClassNames();
  const [selectedMonth, setSelectedMonth] = React.useState<Date>();
  return (
    <div className="relative">
      <div className="absolute gap-x-2 top-0 left-1/2 -translate-x-1/2 z-[100] flex items-center">
        <Button
          onClick={() => setSelectedMonth(new Date())}
          variant="outline"
          className="border border-gray-400 text-black rounded-full"
        >
          برو به امروز
        </Button>
        <Button
          onClick={() => props.onModeChange(calendarMode === "jalali" ? "gregorian" : "jalali")}
          variant="outline"
          className="border border-gray-400 text-black rounded-full"
        >
          {calendarMode === "jalali" ? "  تبدیل تقویم به میلادی" : "تبدیل تقویم به شمسی"}
        </Button>
      </div>

      {calendarMode === "jalali" ? (
        <JalaliDayPicker
          showOutsideDays={false}
          className={cn(
            "bg-background group/calendar  [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
            String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
            String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
            className
          )}
          timeZone="UTC"
          onMonthChange={setSelectedMonth}
          month={selectedMonth}
          captionLayout={captionLayout}
          startMonth={new Date()}
          formatters={{
            formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
            formatCaption(month, options, dateLib) {
              return moment(month)
                .locale(calendarMode === "jalali" ? "fa" : "en")
                .format(calendarMode === "jalali" ? "jMMMM jYYYY" : "MMMM YYYY");
            },
            formatWeekdayName: (date) => date.toLocaleString(calendarMode === "jalali" ? "fa-IR" : "default", { weekday: "narrow" }),
            ...formatters,
          }}
          classNames={{
            root: cn("w-full", defaultClassNames.root),
            months: cn("flex  gap-4 flex-col md:flex-row relative", defaultClassNames.months),
            month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
            nav: cn("flex  items-center gap-1 w-full absolute top-0 inset-x-0 justify-between", defaultClassNames.nav),
            button_previous: cn(
              buttonVariants({ variant: buttonVariant }),
              "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
              defaultClassNames.button_previous
            ),
            button_next: cn(
              buttonVariants({ variant: buttonVariant }),
              "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
              defaultClassNames.button_next
            ),
            month_caption: cn("flex items-center   h-(--cell-size)  px-(--cell-size)", defaultClassNames.month_caption),
            dropdowns: cn(
              "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
              defaultClassNames.dropdowns
            ),
            dropdown_root: cn(
              "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
              defaultClassNames.dropdown_root
            ),
            dropdown: cn("absolute bg-popover inset-0 opacity-0", defaultClassNames.dropdown),
            caption_label: cn(
              "select-none font-medium",
              captionLayout === "label"
                ? "text-sm"
                : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
              defaultClassNames.caption_label
            ),
            table: "w-full border-collapse",
            weekdays: cn("flex", defaultClassNames.weekdays),
            weekday: cn("text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none", defaultClassNames.weekday),
            week: cn("flex w-full mt-2", defaultClassNames.week),
            week_number_header: cn("select-none w-(--cell-size)", defaultClassNames.week_number_header),
            week_number: cn("text-[0.8rem] select-none text-muted-foreground", defaultClassNames.week_number),
            day: cn(
              "relative w-full h-full p-0 text-center  [&:first-child[data-selected=true]_button]:rounded-r-md [&:last-child[data-selected=true]_button]:rounded-l-md group/day aspect-square select-none",
              defaultClassNames.day
            ),

            range_start: cn("rounded-r-md bg-accent", defaultClassNames.range_start),
            range_middle: cn("rounded-none", defaultClassNames.range_middle),
            range_end: cn("rounded-l-md bg-accent", defaultClassNames.range_end),
            today: cn(
              "bg-gray-300 rounded-full text-accent-foreground rounded-full data-[selected=true]:rounded-none",
              defaultClassNames.today
            ),
            outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
            disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
            hidden: cn("invisible", defaultClassNames.hidden),
            ...classNames,
          }}
          components={{
            Root: ({ className, rootRef, ...props }) => {
              return (
                <div
                  data-slot="calendar"
                  ref={rootRef}
                  className={cn(className)}
                  {...props}
                />
              );
            },

            MonthCaption(props) {
              if (props.displayIndex === 0) {
                return (
                  <div
                    {...props}
                    className="pr-10 flex items-center  h-(--cell-size)"
                  ></div>
                );
              }
              if (props.displayIndex === 1) {
                return (
                  <div
                    {...props}
                    className="h-(--cell-size) flex items-center justify-end pl-10  "
                  ></div>
                );
              }

              return <div {...props}></div>;
            },

            Chevron: ({ className, orientation, ...props }) => {
              if (orientation === "left") {
                return (
                  <ChevronLeftIcon
                    className={cn("size-5 rotate-180", className)}
                    {...props}
                  />
                );
              }

              if (orientation === "right") {
                return (
                  <ChevronRightIcon
                    className={cn("size-5 rotate-180", className)}
                    {...props}
                  />
                );
              }

              return (
                <ChevronDownIcon
                  className={cn("size-4", className)}
                  {...props}
                />
              );
            },
            DayButton: CalendarDayButton,
            WeekNumber: ({ children, ...props }) => {
              return (
                <td {...props}>
                  <div className="flex size-(--cell-size) items-center justify-center text-center">{children}</div>
                </td>
              );
            },
            ...components,
          }}
          {...props}
          locale={faIR}
          dir="rtl"
        />
      ) : (
        <DayPicker
          style={{ direction: "ltr" }}
          showOutsideDays={false}
          timeZone="UTC"
          className={cn(
            "bg-background font-inter group/calendar  [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
            String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
            String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
            className
          )}
          captionLayout={captionLayout}
          startMonth={new Date()}
          onMonthChange={setSelectedMonth}
          month={selectedMonth}
          formatters={{
            formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
            formatCaption(month, options, dateLib) {
              return moment(month).locale("en").format("MMMM YYYY");
            },
            formatWeekdayName: (date) => date.toLocaleString("default", { weekday: "narrow" }),
            ...formatters,
          }}
          classNames={{
            root: cn("w-full ", defaultClassNames.root),
            months: cn("flex   gap-4 flex-col md:flex-row relative", defaultClassNames.months),
            month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
            nav: cn("flex  items-center gap-1 w-full absolute top-0 inset-x-0 justify-between", defaultClassNames.nav),
            button_previous: cn(
              buttonVariants({ variant: buttonVariant }),
              "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
              defaultClassNames.button_previous
            ),

            button_next: cn(
              buttonVariants({ variant: buttonVariant }),
              "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
              defaultClassNames.button_next
            ),
            month_caption: cn("flex items-center   h-(--cell-size)  px-(--cell-size)", defaultClassNames.month_caption),
            dropdowns: cn(
              "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
              defaultClassNames.dropdowns
            ),
            dropdown_root: cn(
              "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
              defaultClassNames.dropdown_root
            ),
            dropdown: cn("absolute bg-popover inset-0 opacity-0", defaultClassNames.dropdown),
            caption_label: cn(
              "select-none font-medium",
              captionLayout === "label"
                ? "text-sm"
                : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
              defaultClassNames.caption_label
            ),
            table: "w-full border-collapse",
            weekdays: cn("flex", defaultClassNames.weekdays),
            weekday: cn("text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none", defaultClassNames.weekday),
            week: cn("flex w-full mt-2", defaultClassNames.week),
            week_number_header: cn("select-none w-(--cell-size)", defaultClassNames.week_number_header),
            week_number: cn("text-[0.8rem] select-none text-muted-foreground", defaultClassNames.week_number),
            day: cn(
              "relative w-full h-full items-center flex justify-center p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day w-full aspect-square   select-none",
              defaultClassNames.day
            ),

            range_start: cn("rounded-l-md bg-accent", defaultClassNames.range_start),
            range_middle: cn("rounded-none", defaultClassNames.range_middle),
            range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
            today: cn("bg-gray-300 text-accent-foreground rounded-full data-[selected=true]:rounded-none", defaultClassNames.today),
            outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
            disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
            hidden: cn("invisible", defaultClassNames.hidden),
            ...classNames,
          }}
          components={{
            Root: ({ className, rootRef, ...props }) => {
              return (
                <div
                  data-slot="calendar"
                  ref={rootRef}
                  className={cn(className)}
                  {...props}
                />
              );
            },

            MonthCaption(props) {
              if (props.displayIndex === 0) {
                return (
                  <div
                    {...props}
                    className="pl-10 flex items-center  h-(--cell-size)"
                  ></div>
                );
              }
              if (props.displayIndex === 1) {
                return (
                  <div
                    {...props}
                    className="h-(--cell-size) flex items-center justify-end pr-10  "
                  ></div>
                );
              }

              return <div {...props}></div>;
            },

            Chevron: ({ className, orientation, ...props }) => {
              if (orientation === "left") {
                return (
                  <ChevronLeftIcon
                    className={cn("size-5 ", className)}
                    {...props}
                  />
                );
              }

              if (orientation === "right") {
                return (
                  <ChevronRightIcon
                    className={cn("size-5 ", className)}
                    {...props}
                  />
                );
              }

              return (
                <ChevronDownIcon
                  className={cn("size-4", className)}
                  {...props}
                />
              );
            },
            DayButton: CalendarDayButton,
            WeekNumber: ({ children, ...props }) => {
              return (
                <td {...props}>
                  <div className="flex size-(--cell-size) items-center justify-center text-center">{children}</div>
                </td>
              );
            },
            ...components,
          }}
          {...props}
          locale={faIR}
        />
      )}
    </div>
  );
}

function CalendarDayButton({ className, day, modifiers, ...props }: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  const isPassed = () => {
    const today = new Date();
    const testDate = day.date;

    return moment(testDate).isBefore(moment().subtract("d", 1));
  };

  isPassed();
  return (
    <Button
      ref={ref}
      variant="ghost"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle}
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary-300 disabled:text-gray-500  disabled:pointer-events-none   data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-primary-50  data-[range-middle=true]:text-black data-[range-start=true]:bg-primary-300 data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary-300 data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-primary-300/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
      disabled={isPassed()}
    />
  );
}

export { Calendar, CalendarDayButton };
