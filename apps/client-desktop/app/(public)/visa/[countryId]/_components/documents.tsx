import { IdCard } from "lucide-react";
import { ReactNode } from "react";

const docs: { icon: ReactNode; title: string; desc: string }[] = [
  {
    title: "پاسپورت",
    desc: "اسکن گذرنامه با حداقل ۶ ماه اعتبار از تاریخ سفر",
    icon: <IdCard />,
  },
  {
    title: "پاسپورت",
    desc: "اسکن گذرنامه با حداقل ۶ ماه اعتبار از تاریخ سفر",
    icon: <IdCard />,
  },
  {
    title: "پاسپورت",
    desc: "اسکن گذرنامه با حداقل ۶ ماه اعتبار از تاریخ سفر",
    icon: <IdCard />,
  },
  {
    title: "پاسپورت",
    desc: "اسکن گذرنامه با حداقل ۶ ماه اعتبار از تاریخ سفر",
    icon: <IdCard />,
  },
  {
    title: "پاسپورت",
    desc: "اسکن گذرنامه با حداقل ۶ ماه اعتبار از تاریخ سفر",
    icon: <IdCard />,
  },
  {
    title: "پاسپورت",
    desc: "اسکن گذرنامه با حداقل ۶ ماه اعتبار از تاریخ سفر",
    icon: <IdCard />,
  },
  {
    title: "پاسپورت",
    desc: "اسکن گذرنامه با حداقل ۶ ماه اعتبار از تاریخ سفر",
    icon: <IdCard />,
  },
  {
    title: "پاسپورت",
    desc: "اسکن گذرنامه با حداقل ۶ ماه اعتبار از تاریخ سفر",
    icon: <IdCard />,
  },
];

function Documents() {
  return (
    <div className="w-full border rounded-[25px] p-[25px]">
      <p className="text-[24px] font-semibold">مدارک مورد نیاز</p>

      <div className="grid grid-cols-2 gap-6 mt-7 w-full">
        {docs.map((doc) => (
          <DocumentItem {...doc} />
        ))}
      </div>
    </div>
  );
}

export default Documents;

const DocumentItem = (props: { icon: ReactNode; title: string; desc: string }) => {
  return (
    <div className="w-full flex items-center gap-x-[10px]">
      <div className="w-[50px] h-[50px] rounded-full border flex justify-center items-center bg-gray-100 text-gray-500">{props.icon}</div>
      <div className="flex flex-col gap-y-1">
        <p className="font-semibold text-[16px]">{props.title}</p>
        <p className="text-gray-500 text-[14px] font-medium">{props.desc}</p>
      </div>
    </div>
  );
};
