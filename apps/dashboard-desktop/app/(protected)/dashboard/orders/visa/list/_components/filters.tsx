import { Input } from "@sana/ui/components/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@sana/ui/components/select";
import { visaOrderStatusMapper } from "@sana/utilities/mappers/order.status.mapper";
import RangeDatePicker from "@sana/ui/components/range.date.picker";
import { getServices } from "../../../../../../../lib/services";
import { Button } from "@sana/ui/components/button";
import { Dispatch, SetStateAction } from "react";
import { PrivateVisaOrderListQueries } from "@sana/types/order/visa";
function Filters(props: { setFilters: Dispatch<SetStateAction<PrivateVisaOrderListQueries>>; filters: PrivateVisaOrderListQueries }) {
  const { visa } = getServices();
  const { data } = visa.useVisaCountryList({ queryKey: [{ page: 1, perPage: 40 }, "COUNTRIES"] });

  return (
    <div className="w-full p-[30px] rounded-[25px] border">
      <div className="grid grid-cols-5 items-end gap-x-[20px]">
        <div className="flex flex-col gap-y-1">
          <p className="text-[14px]">جستجو</p>
          <Input
            onChange={(e) => props.setFilters((prev) => ({ ...prev, orderNumber: e.target.value }))}
            placeholder="شماره پیگیری یا شماره سفارش را وارد کنید"
            className="w-full h-[44px] rounded-[8px]"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-[14px]">کشور مقصد</p>
          <Select
            value={props.filters.countryId}
            onValueChange={(value) => props.setFilters((prev) => ({ ...prev, countryId: value }))}
            dir="rtl"
          >
            <SelectTrigger className="w-full rounded-[8px] h-[44px]">
              <SelectValue placeholder="کشور مقصد را انتخاب کنید" />
            </SelectTrigger>
            <SelectContent>
              {data?.countries.map((c) => (
                <SelectItem
                  value={c.id}
                  key={c.id}
                >
                  {c.countryFaName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-[14px]">وضعیت سفارش</p>
          <Select
            value={props.filters.status}
            onValueChange={(value) => props.setFilters((prev) => ({ ...prev, status: value }))}
            dir="rtl"
          >
            <SelectTrigger className="w-full rounded-[8px] h-[44px]">
              <SelectValue placeholder="وضعیت سفارش را انتخاب کنید" />
            </SelectTrigger>
            <SelectContent>
              {" "}
              {/* REQUESTED CONFIRMED PENDING_PAYMENT PAYMENT_SUCCESSFUL PAYMENT_FAILED PENDING_REFUND REFUNDED RESERVED ISSUED DONE UNKNOWN */}
              {Object.entries(visaOrderStatusMapper).map(([key, value]) => (
                <SelectItem value={key}>
                  <div className={`${value?.mainColor} w-2 h-2 rounded-full`}></div> {value?.fa}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full flex-col gap-y-1">
          <p className="text-[14px]">تاریخ سفارش</p>
          <RangeDatePicker
            varient="dashboard"
            selectedDate={{
              from: props.filters.from ? new Date(props.filters.from) : undefined,
              to: props.filters.to ? new Date(props.filters.to) : undefined,
            }}
            setSelectedDate={(date) => {
              props.setFilters((prev) => ({ ...prev, from: date?.from?.toISOString(), to: date?.to?.toISOString() }));
            }}
          />
        </div>
        <div className="flex justify-end">
          <Button
            variant={"outline"}
            className="h-[40px] rounded-[8px]"
          >
            حذف فیلتر ها
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
