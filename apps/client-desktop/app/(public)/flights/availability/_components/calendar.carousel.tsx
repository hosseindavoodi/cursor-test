"use client";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@sana/ui/components/carousel";
import { useFlightSearchStore } from "../../../../_store/flight.search.store";
import { useEffect, useState } from "react";
import moment from "moment-jalaali";
import { Button } from "@sana/ui/components/button";
import { cn } from "@sana/ui/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "qs";
import { FlightSearchPayload } from "@sana/types/flight/flight";
function CalendarCarousel() {
  const { payload, requestedPayload, updateSegment } = useFlightSearchStore();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const router = useRouter();
  const [goFlightsDaysBlock, setGoFlightsDaysBlock] = useState<string[][]>([]);
  const [returnFlightsDaysBlock, setReturnFlightsDaysBlock] = useState<string[][]>([]);

  useEffect(() => {
    if (requestedPayload?.segs[0]?.departureDate) {
      setGoFlightsDaysBlock(getSixDayWeeksPadded(requestedPayload.segs[0].departureDate));
    }

    if (requestedPayload?.segs[1]?.departureDate) {
      setReturnFlightsDaysBlock(getSixDayWeeksPadded(requestedPayload.segs[1].departureDate));
    }
  }, [requestedPayload]);

  useEffect(() => {
    if (carouselApi) {
      carouselApi.on("select", (cb) => {
        setCanScrollPrev(cb.canScrollPrev());
        setCanScrollNext(cb.canScrollNext());
      });

      if (requestedPayload?.segs[0]?.departureDate) {
        const index = goFlightsDaysBlock.findIndex((block) =>
          block.find((date) => moment(date).isSame(requestedPayload.segs[0]?.departureDate.split("T")[0]))
        );

        carouselApi?.scrollTo(index);
      }
    }
  }, [carouselApi, goFlightsDaysBlock]);

  const handleSearch = (departureDate: string, segmentIndex: number) => {
    let prevSegments = [...payload.segs];
    prevSegments[segmentIndex]!.departureDate = departureDate;

    const payloadData: FlightSearchPayload = { ...payload, segs: prevSegments };

    const stringfyPayload = qs.stringify(payloadData);

    router.push(`/flights/availability?${stringfyPayload}`);
  };

  return (
    <div className="w-full p-[30px] rounded-[25px] border bg-white">
      <Carousel
        className="w-full px-8 relative"
        opts={{ direction: "rtl" }}
        setApi={setCarouselApi}
      >
        <CarouselContent className="">
          {goFlightsDaysBlock.map((block) => (
            <CarouselItem className="grid grid-cols-6 relative h-[77px]">
              {block.map((b, i) => (
                <button
                  onClick={() => handleSearch(b, 0)}
                  disabled={moment(b).isBefore(moment().subtract("d", 1))}
                  className={cn(
                    i === 0 && "rounded-r-xl",
                    "border h-full ",
                    i === block.length - 1 && "rounded-l-xl",
                    "disabled:bg-gray-100 disabled:text-gray-500",
                    moment(b).isSame(requestedPayload?.segs[0]?.departureDate.split("T")[0]) &&
                      "bg-primary-50/30 text-primary-600 font-semibold"
                  )}
                >
                  {moment(b).locale("fa").format("dddd jMM/jDD")}
                </button>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <Button
          disabled={!canScrollPrev}
          onClick={() => carouselApi?.scrollPrev()}
          className="absolute h-full w-[30px] rounded-2xl bg-gray-100 hover:text-white text-black top-1/2 -translate-y-1/2 -right-2"
        >
          <ChevronRight size={15} />
        </Button>
        <Button
          onClick={() => carouselApi?.scrollNext()}
          className="absolute h-full w-[30px] rounded-2xl hover:text-white bg-gray-100 text-black top-1/2 -translate-y-1/2 -left-2"
        >
          <ChevronLeft size={15} />
        </Button>
      </Carousel>
    </div>
  );
}

export default CalendarCarousel;
/**
 * Generates 6-day blocks where the given start date is the centre (3rd day).
 * Only dates >= today are kept. Past dates are omitted.
 *
 * @param startIsoString  ISO date string, e.g. "2025-10-28"
 * @returns               Array of blocks; each block contains 0-6 Date objects
 */
function getSixDayWeeksPadded(isoTarget: string): string[][] {
  // 1. Parse target date
  const targetDate = new Date(isoTarget);
  if (isNaN(targetDate.getTime())) {
    throw new Error("Invalid ISO date string. Use YYYY-MM-DD format.");
  }
  targetDate.setHours(0, 0, 0, 0);

  // 2. Today at midnight
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 3. End date = target + 21 days
  const endDate = new Date(targetDate);
  endDate.setDate(targetDate.getDate() + 21);
  endDate.setHours(0, 0, 0, 0);

  // 4. If today is after endDate → return one empty week (all future dates not needed)
  if (today > endDate) {
    // Still return a full 6-day week starting from today (even if past range)
    const week: string[] = [];
    const current = new Date(today);
    for (let i = 0; i < 6; i++) {
      week.push(current.toISOString().split("T")[0]!);
      current.setDate(current.getDate() + 1);
    }
    return [week];
  }

  // 5. Start from today, generate dates in 6-day chunks until endDate is covered
  const weeks: string[][] = [];
  let current = new Date(today);

  while (current <= endDate) {
    const week: string[] = [];
    for (let i = 0; i < 6; i++) {
      const dateStr = current.toISOString().split("T")[0]!;
      week.push(dateStr);
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
  }

  // 6. If the last week didn't complete (but we already stepped by 6), ensure coverage
  // Actually: since we loop in 6-day steps, we may overshoot endDate — that's fine.
  // But if we stopped early, we need to add the last partial week padded with future dates.

  // Better: Calculate total days needed from today to endDate (inclusive)
  const totalDays = Math.floor((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const fullWeeks = Math.floor(totalDays / 6);
  const extraDays = totalDays % 6;

  // Clear and rebuild correctly
  weeks.length = 0;
  current = new Date(today);

  // Add full weeks
  for (let w = 0; w < fullWeeks; w++) {
    const week: string[] = [];
    for (let d = 0; d < 6; d++) {
      week.push(current.toISOString().split("T")[0]!);
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
  }

  // Add partial week + pad with future dates to make it 6
  if (extraDays > 0) {
    const lastWeek: string[] = [];
    for (let d = 0; d < extraDays; d++) {
      lastWeek.push(current.toISOString().split("T")[0]!);
      current.setDate(current.getDate() + 1);
    }
    // Pad remaining with future dates
    while (lastWeek.length < 6) {
      lastWeek.push(current.toISOString().split("T")[0]!);
      current.setDate(current.getDate() + 1);
    }
    weeks.push(lastWeek);
  }

  // 7. If no weeks at all (shouldn't happen unless today == endDate + 1), add one week
  if (weeks.length === 0) {
    const week: string[] = [];
    for (let i = 0; i < 6; i++) {
      week.push(current.toISOString().split("T")[0]!);
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
  }

  return weeks;
}
