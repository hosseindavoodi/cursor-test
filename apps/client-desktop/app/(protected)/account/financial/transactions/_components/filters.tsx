"use client";
import { Button } from "@sana/ui/components/button";
import { Input } from "@sana/ui/components/input";
import RangeDatePicker from "@sana/ui/components/range.date.picker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@sana/ui/components/select";

function Filters() {
  return (
    <div className="w-full p-[25px] border bg-white rounded-[25px]">
      <div className="w-full flex gap-x-[20px] items-end">
        <div className="w-full flex flex-col gap-y-1">
          <p className="text-[14px] font-medium">نوع تراکنش</p>
          <Select dir="rtl">
            <SelectTrigger className="w-full rounded-full">
              <SelectValue placeholder="انتخاب نوع تراکنش" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <p className="text-[14px] font-medium">مبلغ تراکنش</p>
          <div className="flex w-full">
            <Input className="border-l-1 rounded-l-none" />
            <Input className="border-r-0 rounded-r-none" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-1">
          <p className="text-[14px] font-medium">تاریخ تراکنش</p>
          <RangeDatePicker
            selectedDate={undefined}
            setSelectedDate={() => {}}
          />
        </div>

        <Button
          variant={"outline"}
          className="rounded-full border h-[44px] border-primary-500"
        >
          دانلود تراکنش ها
        </Button>
      </div>
    </div>
  );
}

export default Filters;
