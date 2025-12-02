import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@sana/ui/components/dialog";
import { ReactNode } from "react";

function DestructiveAlarmDialog(props: {
  trigger: ReactNode;
  icon: ReactNode;
  title: string;
  description: string;
  actionName: string;
  action: () => Promise<void> | void;
}) {
  return (
    <Dialog>
      <DialogTrigger>{props.trigger}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="flex flex-col justify-center items-center w-[500px] rounded-[35px]"
      >
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <div className="w-[100px] h-[100px] flex items-center justify-center text-primary-500 bg-red-50 rounded-full">{props.icon}</div>
        <p className="text-[20px] font-semibold">{props.title}</p>
        <p className="text-[16px] text-gray-700">{props.description}</p>

        <div className="flex items-center gap-x-[20px]">
          <button className="h-[52px] w-[190px] rounded-full border border-red-500 text-red-500 hover:text-red-500  transition-all">
            {props.actionName}
          </button>
          <button className="w-[190px] h-[52px] border rounded-full bordee-gray-300">انصراف</button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DestructiveAlarmDialog;
