import { cn } from "@sana/ui/lib/utils";
import { Check, CreditCard, FileCheck, Plane, Tickets, User } from "lucide-react";
import { ReactNode } from "react";

function Stepper(props: { step: number }) {
  const steps: { title: string; icon: ReactNode; isActive: boolean }[] = [
    {
      title: "انتخاب پرواز",
      icon: props.step > 1 ? <Check className="bg-green-50 text-green-600 w-full h-full rounded-full p-3" /> : <Plane />,
      isActive: props.step >= 1,
    },
    {
      title: "مشخصات مسافران",
      icon: props.step > 2 ? <Check className="bg-green-50 text-green-600 w-full h-full rounded-full p-3" /> : <User />,
      isActive: props.step >= 2,
    },
    {
      title: "تایید مشخصات",
      icon: props.step > 3 ? <Check className="bg-green-50 text-green-600 w-full h-full rounded-full p-3" /> : <FileCheck />,
      isActive: props.step >= 3,
    },
    {
      title: "پرداخت",
      icon: props.step > 4 ? <Check className="bg-green-50 text-green-600 w-full h-full rounded-full p-3" /> : <CreditCard />,
      isActive: props.step >= 4,
    },
    {
      title: "دریافت بلیط",
      icon: props.step > 5 ? <Check className="bg-green-50 text-green-600 w-full h-full rounded-full p-3" /> : <Tickets />,
      isActive: props.step >= 5,
    },
  ];

  return (
    <div className="w-full bg-white border flex justify-center items-center py-[25px] px-[30px] rounded-[25px]">
      {steps.map((step, index) => (
        <Step
          {...step}
          isLast={index === steps.length - 1}
          key={index}
        />
      ))}
    </div>
  );
}

export default Stepper;

export const Step = (props: { title: string; icon: ReactNode; isActive: boolean; isLast?: boolean }) => {
  return (
    <div className={cn(`flex pb-6 `, props.isLast ? "" : "w-full")}>
      <div className={cn(`flex   relative flex-col items-center justify-center gap-y-2`)}>
        <div
          className={cn(
            "w-[50px]  h-[50px] rounded-full flex items-center  justify-center ",
            props.isActive ? "bg-[#FBF5F1] text-sandal-800" : "bg-gray-100 text-gray-500"
          )}
        >
          {props.icon}
        </div>
        <p
          className={cn(
            `text-[12px] min-w-fit w-[120px] text-center top-16 left-1/2 -translate-x-1/2 absolute font-semibold`,
            props.isActive ? "text-black " : "text-gray-500 "
          )}
        >
          {props.title}
        </p>
      </div>
      {!props.isLast && <hr className="w-full border mt-6 border-dashed" />}
    </div>
  );
};
