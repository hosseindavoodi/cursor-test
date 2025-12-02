"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@sana/ui/components/accordion"
import Image from "next/image";

import { ResidencyCountry } from "@sana/types/residency/residency";
import { ResidencyCountryUpdateInformation } from "./residency.country.update.info";
import ResidencyImageUpdateDialog from "./residency.image.update";
import { Label } from "@sana/ui/components/label";
import { House } from "lucide-react";
import ResidencyTypesTable from "./residency.types";
import { DestructiveDialog } from "../../../_components/destructive.dialog";

function ResidencyCountryComponent(props: { country: ResidencyCountry }) {
    const coverImageUrl = props.country.assets.find((asset) => asset.type.name === "THUMBNAIL")?.preview
    return <>
        <Accordion type="single" collapsible className="border-1 rounded-[15px]">
            <AccordionItem value={`${props.country.id}`} className="relative">
                <div className="absolute flex justify-start items-center top-5 left-[45px] gap-x-2">
                    <ResidencyImageUpdateDialog country={props.country} />
                    <ResidencyCountryUpdateInformation country={props.country} />
                    <DestructiveDialog
                        title="حذف ویزا"
                        message={`آیا از پاک کردن اقامت "کشور ${props.country.countryFaName}" اطمینان دارید!؟`}
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
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col border-t-1 p-[20px] gap-y-3">
                    <div className="w-full">
                        <h2 className="font-semibold">انواع اقامت</h2>
                    </div>
                    <ResidencyTypesTable types={props.country.types} />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </>;
}

export default ResidencyCountryComponent
