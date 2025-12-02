import { Button } from "@sana/ui/components/button";

function ContactForInfoBox() {
  return (
    <div className="w-full flex flex-col gap-y-5 p-[25px] border rounded-[25px]">
      <p className="font-bold text-[20px]">برای اطلاعات بیشتر تماس بگیرید</p>
      <p className="text-gray-500">ساعت کاری 8 صبح تا 8 شب</p>

      <Button
        variant={"outline"}
        className="w-full rounded-full text-[18px] roudned-full py-6"
      >
        مشاوره رایگان
      </Button>
    </div>
  );
}

export default ContactForInfoBox;
