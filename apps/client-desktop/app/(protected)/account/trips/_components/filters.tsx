"use client";
import { Input } from "@sana/ui/components/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@sana/ui/components/select";
import RangeDatePicker from "@sana/ui/components/range.date.picker";
import { Button } from "@sana/ui/components/button";
import { useOrderStore } from "../_store/orders.store";
import { useEffect } from "react";
import qs from "qs";
import { OrdersListRequestKeys, ProductType } from "@sana/types/order/order";
import { useRouter, useSearchParams } from "next/navigation";
import { omitEmpty } from "@sana/utilities/omit.empty";
function Filters() {
  const { setStore, filters, resetFilters } = useOrderStore();

  return (
    <div className="w-full flex items-end gap-x-[20px] p-[25px] bg-white rounded-[25px] border border-gray-300">
      <div className="flex w-full flex-col gap-y-1">
        <p>شماره سفارش</p>
        <Input
          value={filters.orderNumber}
          onChange={(e) => setStore((prev) => ({ filters: { ...prev.filters, orderNumber: e.target.value } }))}
          className="w-full rounded-full"
          placeholder="شماره سفارش را وارد کنید"
        />
      </div>
      <div className="flex w-full flex-col gap-y-1">
        <p>نوع سفارش</p>
        <Select
          defaultValue={filters.productType}
          value={filters.productType}
          onValueChange={(value) => setStore((prev) => ({ filters: { ...prev.filters, productType: value as ProductType } }))}
          dir="rtl"
        >
          <SelectTrigger className="w-full rounded-full">
            <SelectValue placeholder="انتخاب نوع سفارش" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="ALL">همه</SelectItem>
              <SelectItem value="VISA">ویزا</SelectItem>
              <SelectItem value="FLIGHT">پرواز</SelectItem>
              <SelectItem value="HOTEL">هتل</SelectItem>
              <SelectItem value="GROUP_TOUR">تور گروهی</SelectItem>
              <SelectItem value="INDIVIDUAL_TOUR">تور شخصی</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-full flex-col gap-y-1">
        <p>تاریخ سفارش</p>
        <RangeDatePicker
          selectedDate={{
            from: filters.fromDate ? new Date(filters.fromDate) : undefined,
            to: filters.toDate ? new Date(filters.toDate) : undefined,
          }}
          setSelectedDate={(date) => {
            setStore((prev) => ({ filters: { ...prev.filters, fromDate: date?.from?.toISOString(), toDate: date?.to?.toISOString() } }));
          }}
        />
      </div>

      <Button
        onClick={() => resetFilters()}
        variant={"outline"}
        className="rounded-full h-[44px] border-primary-500"
      >
        حذف فیلترها
      </Button>
    </div>
  );
}

export default Filters;
