import { Button } from "@sana/ui/components/button";

function VisaConsult() {
  return (
    <div className="p-[25px] flex flex-col gap-y-[30px] border border-gray-300 rounded-[25px]">
      <p className="text-[20px] font-bold">برای اطلاعات بیشتر تماس بگیرید</p>
      <p className="text-[16px] font-medium text-gray-500">ساعت کاری 8 صبح تا 8 شب</p>

      <Button
        className="w-full rounded-full h-[50px]"
        variant={"outline"}
      >
        مشاوره رایگان
      </Button>
    </div>
  );
}

export default VisaConsult;
