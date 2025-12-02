"use client"

import { VisaCountry } from "@sana/types/visa/visa";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@sana/ui/components/accordion"
import Image from "next/image";

import { visaDurationMapper } from "@sana/utilities/mappers/visa.duration.mapper"
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper"
import { visaAssetTypeMapper } from "@sana/utilities/mappers/visa.asset.type.mapper"

import { DestructiveDialog } from "../../_components/destructive.dialog";
import VisaGroupPrice from "./visa.group.price";
import { VisaCountryUpdateInformation } from "./visa.country.update.info";
import VisaImageUpdateDialog from "./visa.image.update";

function VisaCountryComponent(props: { country: VisaCountry }) {
    const coverImageUrl = props.country.assets.find((asset) => asset.type.name === "THUMBNAIL")?.preview
    return <>
        <Accordion type="single" collapsible className="border-1 rounded-[15px]">
            <AccordionItem value={`${props.country.id}`} className="relative">
                <div className="absolute flex justify-start items-center top-5 left-[45px] gap-x-2">
                    <VisaImageUpdateDialog country={props.country} />
                    <VisaCountryUpdateInformation country={props.country} />
                    <DestructiveDialog
                        title="حذف ویزا"
                        message={`آیا از پاک کردن ویزای "کشور ${props.country.countryFaName}" اطمینان دارید!؟`}
                    />
                </div>
                <AccordionTrigger className="p-[20px] pb-[10px]">
                    <div className="flex w-full">
                        <Image src={coverImageUrl!} width={72} height={96} objectFit="" className="rounded-lg" alt={props.country.countryCode} />
                        <div className="mr-[30px] grid grid-cols-4 w-full">
                            <div className="flex flex-col gap-y-2 items-start">
                                <p className="no-underline text-gray-500 text-[12px]">
                                    نام کشور (فارسی)
                                </p>
                                <p className="text-gray-900 text-[14px] font-semibold">
                                    {props.country.countryFaName}
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-2 items-start">
                                <p className="no-underline text-gray-500 text-[12px]">
                                    نام کشور (لاتین)
                                </p>
                                <p className="text-gray-900 text-[14px] font-semibold">
                                    {props.country.countryEnName}
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-2 items-start">
                                <p className="no-underline text-gray-500 text-[12px]">
                                    کد کشور
                                </p>
                                <p className="text-gray-900 text-[14px] font-semibold">
                                    {props.country.countryCode}
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-2 items-start">
                                <p className="no-underline text-gray-500 text-[12px]">
                                    زمان پردازش
                                </p>
                                <p className="text-gray-900 text-[14px] font-semibold">
                                    {props.country.processTime} روز
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-2 items-start">
                                <p className="no-underline text-gray-500 text-[12px]">
                                    مدت اعتبار پس از صدور
                                </p>
                                <p className="text-gray-900 text-[14px] font-semibold">
                                    {props.country.isValidForDays} روز
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-2 items-start">
                                <p className="no-underline text-gray-500 text-[12px]">
                                    نوع ویزا
                                </p>
                                <p className="text-gray-900 text-[14px] font-semibold">
                                    {props.country.types.map((type) => (visaTypeMapper[type])).join("، ")}
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-2 items-start">
                                <p className="no-underline text-gray-500 text-[12px]">
                                    تعداد روز
                                </p>
                                <p className="text-gray-900 text-[14px] font-semibold">
                                    {props.country.durations.map((duration) => visaDurationMapper[duration.durationInDays]).join("، ")}
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-2 items-start">
                                <p className="no-underline text-gray-500 text-[12px]">
                                    مدارک مورد نیاز
                                </p>
                                <p className="text-gray-900 text-[14px] font-semibold">
                                    {props.country.requiredAssetTypes.length ? props.country.requiredAssetTypes.map((assetType) => visaAssetTypeMapper[assetType.type]).join("، ") : "ندارد"}
                                </p>
                            </div>
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="border-t-1 p-[20px]">
                    <VisaGroupPrice country={props.country} />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </>;
}

export default VisaCountryComponent