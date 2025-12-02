import { GetPrivateResidencyOrderListResponse } from "@sana/types/order/residency";
import { PrivateVisaOrderListResponse } from "@sana/types/order/visa";
import { orderStatusMapper, residencyOrderStatusMapper, visaOrderStatusMapper } from "@sana/utilities/mappers/order.status.mapper";
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper";
import { ChevronLeft } from "lucide-react";
import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern" });
function ResidencyOrdersTable(props: {
  data?: GetPrivateResidencyOrderListResponse;
  setSelectedOrder: (selected: GetPrivateResidencyOrderListResponse["orders"][number]) => void;
}) {
  return (
    <div className="w-full border p-[25px] rounded-[25px]">
      <table className="w-full border-separate border-spacing-y-5 text-center">
        <thead>
          <tr className="text-[14px] text-gray-600">
            <td>شماره سفارش</td>
            <td>نام</td>
            <td>نام خانوادگی</td>
            <td>شماره همراه</td>
            <td>کشور مقصد</td>
            <td>زمان ثبت</td>
            <td>وضعیت</td>
          </tr>
        </thead>
        <tbody>
          {props.data ? (
            <>
              {props.data?.orders.map((order) => (
                <tr className="h-[60px]">
                  <td className="border-r border-y rounded-r-[15px]">{order.orderNumber}</td>
                  <td className="border-y">{order.customer.firstName}</td>
                  <td className="border-y">{order.customer.lastName}</td>
                  <td
                    style={{ direction: "ltr" }}
                    className="border-y"
                  >
                    {order.customer.phone}
                  </td>
                  <td className="border-y">{order.residency.country.countryFaName}</td>
                  <td className="border-y">{moment(order.createdAt).locale("fa").format("dddd jMMMM jYYYY hh:mm")}</td>
                  <td className={`border-y`}>
                    <div className="flex justify-center items-center">
                      <p
                        className={`${residencyOrderStatusMapper[order.residency.status]?.className} font-semibold text-[12px]  flex items-center px-3 h-[24px] rounded-full`}
                      >
                        {visaOrderStatusMapper[order.residency.status]?.fa}
                      </p>
                    </div>
                  </td>
                  {/* <td className="border-l rounded-l-[15px] border-y ">
                    <div className="flex items-center">
                      <button onClick={() => props.setSelectedOrder(order)}>
                        <ChevronLeft
                          className="bg-gray-100 p-1 rounded-full"
                          size={34}
                        />
                      </button>
                    </div>
                  </td> */}
                </tr>
              ))}
            </>
          ) : (
            <>
              {Array.from({ length: 10 }).map((_, index) => (
                <tr className="w-full h-[60px] bg-gray-200 animate-pulse">
                  <td className="rounded-r-[15px]"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="rounded-l-[15px] w-[80px]"></td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ResidencyOrdersTable;
