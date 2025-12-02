"use client"
import { useCreateVisaStore } from "./_store/create.visa.store"
import { VisaCountryForm } from "./_components/visa.country.form";
import { VisaGroupForm } from "./_components/visa.group.form";
import { VisaPriceForm } from "./_components/visa.price.form";
import VisaUploadPhoto from "./_components/visa.upload.photo";
import ReturnPrevPage from "../../_components/return.prev.page";
import Stepper from "../../_components/stepper";

function CreateVisa() {
    const { step } = useCreateVisaStore()
    return <div className="w-full space-y-2 mt-2">
        <ReturnPrevPage href="/dashboard/visa" title="فرم ایجاد ویزا" />
        <Stepper
            step={step}
            stepLabels={["تعریف کشور", "تعریف رده سنی", "تعریف قیمت", "آپلود تصویر"]}
        />
        {
            step === 1 && <VisaCountryForm />
        }
        {
            step === 2 && <VisaGroupForm />
        }
        {
            step === 3 && <VisaPriceForm />
        }
        {
            (step === 4 || step === 5) && <VisaUploadPhoto />
        }
    </div>;
}

export default CreateVisa;