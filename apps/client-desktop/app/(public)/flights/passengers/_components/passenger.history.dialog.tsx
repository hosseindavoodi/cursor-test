import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@sana/ui/components/dialog";
import { Plus } from "lucide-react";

function PassengerHistoryDialog() {
  return (
    <Dialog>
      <DialogTrigger className="text-primary-500 flex items-center gap-x-2">
        <Plus size={20} />
        <p className="text-primary-500">افزودن مسافر از لیست</p>
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

export default PassengerHistoryDialog;
