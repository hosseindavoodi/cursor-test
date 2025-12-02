import { Label } from "@sana/ui/components/label";
import { Button } from "@sana/ui/components/button";
import { ChevronLeft, Plus } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UploadDropzone } from "../../../_components/upload.dropzone";
import { useCreateVisaStore } from "../_store/create.visa.store";

function VisaUploadPhoto() {

    const { setStore, step, cardUrl, headerUrl, flushStore, countryId } = useCreateVisaStore()
    const router = useRouter()

    useEffect(() => {
        if ((typeof cardUrl === "string") && (typeof headerUrl === "string")) {
            setStore({ step: 5 })
        }
    }, [cardUrl, headerUrl]);

    return <div className="relative grid grid-cols-2 w-full gap-x-5 px-3 mt-10">
        <div className="absolute flex left-0 -top-38 gap-x-2">
            {(step === 4) ?
                <Button
                    className="w-[213px] h-[54px]"
                >
                    <span>ادامه</span>
                    <ChevronLeft />
                </Button> :
                <Button
                    className="w-[213px] h-[54px]"
                    onClick={() => {
                        router.push("/dashboard/visa")
                        flushStore()
                    }}
                >
                    <Plus size={20} />
                    <span>ثبت ویزا</span>
                </Button>}

        </div>
        <div className="space-y-2">
            <Label className="w-full px-3 font-normal">تصویر کارت ویزا</Label>
            <UploadDropzone
                type="THUMBNAIL"
                uploadType="PUBLIC"
                assetOptions={{
                    visaCountryId: countryId!
                }}
                assetUploadHelper="(حداکثر 480 × 362) SVG, PNG, JPG or GIF"
                onUploadComplete={(imageUrl) => {
                    setStore({ cardUrl: imageUrl })
                }}
            />
        </div>
        <div className="space-y-2">
            <Label className="w-full px-3 font-normal">تصویر هدر ویزا</Label>
            <UploadDropzone
                type="HEADER"
                uploadType="PUBLIC"
                assetOptions={{
                    visaCountryId: countryId!
                }}
                assetUploadHelper="(حداکثر 1910 × 750) SVG, PNG, JPG or GIF"
                onUploadComplete={(imageUrl) => {
                    setStore({ headerUrl: imageUrl })
                }}
            />
        </div>
    </div>;
}

export default VisaUploadPhoto;