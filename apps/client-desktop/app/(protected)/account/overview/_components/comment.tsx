import { Button } from "@sana/ui/components/button";
import { CircleArrowLeft } from "lucide-react";

function Comment() {
  return (
    <div className="w-full p-[10px] h-[62px] text-white rounded-[17px] bg-gradient-to-r from-[#34050F] to-[#910E2E] flex items-center justify-between">
      <p className="text-[16px] font-medium">نظر خود را در رابطه با سفر اخیرتان به ژاپن با دیگران به اشتراک بگذارید.</p>
      <Button className="border border-white bg-white/15 rounded-full flex justify-between px-[10px] h-[42px] items-center text-[14px] ">
        <p>ثبت نظر</p>
        <CircleArrowLeft
          size={24}
          strokeWidth={1.5}
        />
      </Button>
    </div>
  );
}

export default Comment;
