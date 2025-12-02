import { Button } from "@sana/ui/components/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@sana/ui/components/dialog";

function PassengerDocumentDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant={"outline"}
          className="w-[180px] rounded-[8px]"
        >
          مشاهده و بررسی مدارک
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default PassengerDocumentDialog;
