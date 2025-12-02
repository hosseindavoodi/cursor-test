import { Order } from "@sana/types/order/order";
import { Button } from "@sana/ui/components/button";
import { User } from "lucide-react";
import moment from "moment-jalaali";

function Passengers(props: { passengers?: NonNullable<Order["visa"]>["passengers"] }) {
  return (
    <div className="p-[30px] bg-gray-50 border rounded-[25px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <User
            className="text-gray-500"
            size={24}
          />
          <p className="font-semibold text-[24px]">مشخصات مسافران</p>
        </div>
        <Button
          variant={"outline"}
          className="rounded-full w-[160px]"
        >
          ویرایش مسافران
        </Button>
      </div>

      <table className="w-full text-center border-spacing-y-4   border-separate   mt-[45px]">
        <thead>
          <tr className="text-[14px]  text-gray-600">
            <td>نام و نام خانوادگی</td>
            <td>شماره پاسپورت</td>
            <td>جنسیت</td>
            <td>تاریخ تولد</td>
            <td>انقضای پاسپورت</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {props.passengers ? (
            props.passengers.map((passenger, index, passengers) => (
              <>
                <tr className=" rounded-full bg-white  h-[60px]">
                  <td className="border-y border-r rounded-r-[15px]">
                    {passenger.firstName} {passenger.lastName}
                  </td>
                  <td className="border-y">{passenger.passportNumber}</td>
                  <td className="border-y ">{passenger.gender === "male" ? "مرد" : "زن"}</td>
                  <td className="border-y">{moment(passenger.birthdate).locale("fa").format("jYYYY/jMM/jDD")}</td>
                  <td className="border-y">{moment(passenger.passportExpireDate).locale("en").format("YYYY/MM/DD")}</td>
                  <td className="border-y border-l  rounded-l-[15px]">
                    <div className="flex justify-center items-center">
                      <p className="bg-gray-100 px-4 py-2 rounded-full  text-gray-600   w-fit">{passenger.group.title}</p>
                    </div>
                  </td>
                </tr>{" "}
              </>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Passengers;
