"use client"

import ReturnPrevPage from "../../_components/return.prev.page";
import Stepper from "../../_components/stepper";
import { ResidencyCountryForm } from "./_components/residency.country.form";
import ResidencyImageUpload from "./_components/residency.image.upload";
import { useCreateResidencyStore } from "./_store/create.residency.store";

function CreateResidency() {
    const { step } = useCreateResidencyStore()
    return <div className="w-full space-y-2 mt-2">
        <ReturnPrevPage href="/dashboard/residency" title="فرم ایجاد اقامت" />
        <Stepper
            step={step}
            stepLabels={["تعریف اقامت", "آپلود تصاویر"]}
        />
        {
            step === 1 && <ResidencyCountryForm />
        }
        {
            (step === 2 || step === 3) && <ResidencyImageUpload />
        }
    </div>;
}

export default CreateResidency;