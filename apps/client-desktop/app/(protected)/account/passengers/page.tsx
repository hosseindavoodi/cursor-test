"use client";
import Paginator from "@sana/ui/components/paginator";
import { getServices } from "../../../../lib/services";
import AddPassengerDialog from "./_components/add.passenger.dialog";
import Passengers from "./_components/passengers";
import { useRouter, useSearchParams } from "next/navigation";
import moment from "moment-jalaali";
import { ChevronLeft, Pencil, Trash } from "lucide-react";
import DestructiveAlarmDialog from "../../../_components/destructive.alarm.dialog";
import { Suspense } from "react";

function PassengersPage() {
  const { user } = getServices();

  const router = useRouter();
  const searchParams = useSearchParams();

  const { data } = user.useUserPassengers({
    queryKey: [
      {
        page: parseInt(searchParams.get("page") ?? "1"),
        pageSize: 15,
        sortBy: "createdAt",
        sortOrder: "desc",
      },
    ],
  });

  return (
    <div className="w-full flex flex-col gap-y-[20px]">
      <div className="w-full bg-white rounded-[25px] border p-[25px] border-gray-300 flex justify-between items-center">
        <p className="text-[24px] font-semibold">لیست مسافران</p>
        <AddPassengerDialog />
      </div>

      <Passengers>
        <div className="w-full text-gray-500 text-[14px] gap-y-5 grid text-center justify-center grid-cols-5">
          <p>نام و نام خانوادگی</p>
          <p>کدملی</p>
          <p>شماره پاسپورت</p>
          <p>تاریخ تولد</p>
          <p></p>

          {data?.items.map((item) => (
            <div className="w-full grid grid-cols-5 text-[14px] border rounded-[15px] justify-center items-center text-gray-900 col-span-5 h-[60px] ">
              <p className="font-medium">
                {" "}
                {item.firstName} {item.lastName}
              </p>
              <p>{item.nationalCode ?? "-"}</p>
              <p
                style={{ direction: "ltr" }}
                className="font-inter font-semibold "
              >
                {item.passportNumber ?? "-"}
              </p>
              <p>{item.birthdate ? moment(item.birthdate).locale("fa").format("jYYYY/jMM/jDD") : "-"}</p>
              <div className="flex justify-end pl-4 items-center gap-x-[20px]">
                <Pencil size={16} />
                <DestructiveAlarmDialog
                  trigger={
                    <Trash
                      size={16}
                      className="text-red-500"
                    />
                  }
                  icon={<Trash size={40} />}
                  title="حذف از لیست مسافران"
                  action={() => {}}
                  actionName="حذف"
                  description={`آیا از حذف اطلاعات ${item.firstName} ${item.lastName} مطمئن هستید؟`}
                />
                <ChevronLeft
                  size={16}
                  className="w-[34px] p-2 h-[34px] bg-gray-100 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center">
          {data && (
            <Paginator
              page={data.page}
              perPage={data.pageSize}
              totalPages={Math.ceil(data.total / data.pageSize)}
              onPageClick={(page) => router.push(`/account/passengers?page=${page + 1}`)}
            />
          )}
        </div>
      </Passengers>
    </div>
  );
}

export default PassengersPage;
