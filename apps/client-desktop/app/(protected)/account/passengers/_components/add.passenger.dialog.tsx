import { Button } from "@sana/ui/components/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@sana/ui/components/dialog";
import { Plus } from "lucide-react";

function AddPassengerDialog() {
  return (
    <Dialog>
      <DialogTrigger className=" ">
        <Button
          variant={"outline"}
          className="rounded-full h-[44px] text-[16px] font-medium"
        >
          <Plus />
          <p>مسافر جدید</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddPassengerDialog;
