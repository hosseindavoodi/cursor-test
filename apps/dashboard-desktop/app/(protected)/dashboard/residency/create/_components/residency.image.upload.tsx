"use client"

import { Label } from "@sana/ui/components/label";
import { UploadDropzone } from "../../../_components/upload.dropzone";
import { useCreateResidencyStore } from "../_store/create.residency.store";
import { Button } from "@sana/ui/components/button";
import { ChevronLeft, Plus } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


function ResidencyImageUpload() {
    const { setStore, step, countryId, cardUrl, headerUrl } = useCreateResidencyStore()

    useEffect(() => {
        if (cardUrl?.length && headerUrl?.length) setStore({ step: 3 })
    }, [cardUrl, headerUrl]);

    const router = useRouter()

    return <div className="w-full grid grid-cols-2 gap-x-4 relative">
        <div className="absolute left-0 -top-38 flex gap-x-2">
            {
                step === 3 && <Button
                    className="w-[213px] h-[54px]"
                    onClick={() => router.push("/dashboard/residency")}
                >
                    <Plus size={20} />
                    <p>ثبت اقامت</p>
                </Button>
            }
            {
                step === 2 && <Button className="w-[213px] h-[54px]" type="submit">
                    <p>ادامه</p>
                    <ChevronLeft />
                </Button>
            }
        </div>
        <div className="space-y-2">
            <Label className="w-full font-normal">تصویر کارت اقامت</Label>
            <UploadDropzone
                type="THUMBNAIL"
                uploadType="PUBLIC"
                assetOptions={{
                    residencyCountryId: countryId!
                }}
                assetUploadHelper="(حداکثر 480 × 362) SVG, PNG, JPG or GIF"
                onUploadComplete={(imageUrl) => {
                    setStore({ cardUrl: imageUrl })
                }}
            />
        </div>
        <div className="space-y-2">
            <Label className="w-full font-normal">تصویر هدر ویزا</Label>
            <UploadDropzone
                type="HEADER"
                uploadType="PUBLIC"
                assetOptions={{
                    residencyCountryId: countryId!
                }}
                assetUploadHelper="(حداکثر 1910 × 750) SVG, PNG, JPG or GIF"
                onUploadComplete={(imageUrl) => {
                    setStore({ headerUrl: imageUrl })
                }}
            />
        </div>
    </div >;
}

export default ResidencyImageUpload;