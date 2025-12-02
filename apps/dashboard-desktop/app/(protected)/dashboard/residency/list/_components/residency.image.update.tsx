"use client";

import { Button } from "@sana/ui/components/button";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@sana/ui/components/dialog";

import { Camera } from "lucide-react";
import { useState } from "react";
import { Label } from "@sana/ui/components/label";
import { ResidencyCountry } from "@sana/types/residency/residency";
import { UploadDropzone } from "../../../_components/upload.dropzone";

function ResidencyImageUpdateDialog(props: { country: ResidencyCountry }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          type="button"
          className="w-[24px] h-[24px] flex justify-center items-center"
        >
          <Camera size={20} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] min-h-[700px] flex px-[24px]">
        <div className="absolute top-[60px] right-[22px] space-y-[10px]">
          <p className="text-lg font-semibold">ویرایش تصویر ویزای {props.country.countryFaName} </p>
          <p className="text-[#64748B] text-sm font-normal">تغییرات خود را بر روی ویزای کشور {props.country.countryFaName} اعمال کنید</p>
        </div>
        <div className="w-full grid grid-cols-2 gap-x-[16px] mt-[110px]">
          <div className="flex flex-col gap-y-2">
            <Label>تصویر کاور اقامت</Label>
            <UploadDropzone
              type="THUMBNAIL"
              uploadType="PUBLIC"
              assetOptions={{
                residencyCountryId: props.country.id,
              }}
              initialImageUrl={props.country.assets.find((asset) => asset.type.name === "THUMBNAIL")?.preview}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>تصویر هدر اقامت</Label>
            <UploadDropzone
              type="HEADER"
              uploadType="PUBLIC"
              assetOptions={{
                residencyCountryId: props.country.id,
              }}
              initialImageUrl={props.country.assets.find((asset) => asset.type.name === "HEADER")?.preview}
            />
          </div>
        </div>

        <DialogFooter className="absolute bottom-[24px] left-[24px]">
          <Button
            onClick={() => setIsOpen(false)}
            variant={"secondary"}
            className="h-[40px]"
          >
            بستن
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ResidencyImageUpdateDialog;
