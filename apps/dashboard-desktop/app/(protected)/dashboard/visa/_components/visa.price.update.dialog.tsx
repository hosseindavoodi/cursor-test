"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { VisaCountry, VisaType } from "@sana/types/visa/visa"
import { Button } from "@sana/ui/components/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@sana/ui/components/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@sana/ui/components/form"
import { EllipsisVertical, GitMerge } from "lucide-react"
import { useEffect, useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import z from "zod"
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper"
import { visaDurationMapper } from "@sana/utilities/mappers/visa.duration.mapper"
import { Input } from "@sana/ui/components/input"
import { formatToEnglishDigits, validateDigits } from "@sana/utilities/digit.formatter.util"
import { PriceSelect } from "../../_components/price.select"
import { PriceUnits } from "@sana/utilities/prices/price.units"
import { p } from "framer-motion/client"


function VisaPriceUpdateDialog(props:
    {
        country: VisaCountry,
        type: string,
        groupId: string,
    }
) {
    const [isOpen, setIsOpen] = useState(false)
    const formSchema = z.object({
        group: z.object({
            groupId: z.string(),
            title: z.string().optional(),
            startAge: z.string(),
            endAge: z.string(),
            prices: z.array(z.object({
                id: z.string(),
                duration: z.object({
                    durationInDays: z.number()
                }),
                type: z.string(),
                priceAmount: z.string(),
                priceUnit: z.string(),
            }))
        })
    })


    type PriceUnitType = { key: string, priceUnit: string }[]
    const [priceUnits, setPriceUnits] = useState<PriceUnitType>([])

    const groupValue = props.country.groups.find((group) => (group.id === props.groupId))
    let prices = groupValue?.prices.filter((price) => (price.type as string === props.type)).map((price) => ({
        id: price.id,
        type: price.type,
        duration: price.duration,
        priceAmount: price.priceAmount.toString(),
        priceUnit: price.priceUnit.toString(),
    })) || []

    prices = prices.length > 0 ?
        props.country.durations.flatMap((duration) => (
            PriceUnits.map((pu) => {
                return prices.find((p) => (p.priceUnit === pu && p.duration == duration)) || {
                    id: "",
                    type: props.type as VisaType,
                    duration,
                    priceAmount: "",
                    priceUnit: pu
                }
            })
        )) :
        props.country.durations.flatMap((duration) => (
            PriceUnits.map((pu) => ({
                id: "",
                type: props.type as VisaType,
                duration,
                priceAmount: "",
                priceUnit: pu,
            }))
        ))

    useEffect(() => {
        setPriceUnits(
            props.country.durations.map((duration) => (
                {
                    key: `${duration.durationInDays}`,
                    priceUnit: 'IRR'
                }
            ))
        )

    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            group: {
                ...groupValue,
                groupId: groupValue?.id || "",
                startAge: groupValue?.startAge.toString() || "",
                endAge: groupValue?.endAge.toString() || "",
                prices
            }
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
    }

    const group = form.watch("group")

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button
                    onClick={() => { setIsOpen(true) }}
                    type="button"
                    className="w-[24px] h-[24px] flex justify-center items-center"
                >
                    <EllipsisVertical size={20} />
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] min-h-[700px] flex px-[24px]">
                <div className="absolute top-[60px] right-[22px] space-y-[10px]">
                    <p className="text-lg font-semibold">ویرایش گروه‌های قیمتی ویزای {props.country.countryFaName} - ویزای {visaTypeMapper[props.type]}</p>
                    <p className="text-[#64748B] text-sm font-normal">تغییرات خود را بر روی ویزای کشور {props.country.countryFaName} اعمال کنید</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-[120px] w-full">
                        <div className="flex flex-col w-full border-1 rounded-2xl">
                            <div className="flex w-full bg-gray-100 h-[45px] rounded-t-2xl px-[20px] py-[12px] items-center">
                                {group.title} - {group.startAge} تا {group.endAge} سال
                            </div>
                            {
                                group.prices.filter((p) => (priceUnits.find((pu) => (p.duration.durationInDays === parseInt(pu.key) && p.priceUnit === pu.priceUnit)))).map((price) => {
                                    const priceIndex = group.prices.findIndex((p) => price === p)
                                    return (<div className="flex w-full gap-x-[20px] px-[20px] py-[12px]">
                                        <div className="flex gap-x-4 items-center">
                                            <GitMerge
                                                size={20}
                                                className="text-gray-500"
                                            />
                                            <p className="min-w-fit">نوع‌ویزا : {visaTypeMapper[price.type]} </p>

                                            <p className="min-w-fit">
                                                زمان درخواستی : {visaDurationMapper[price.duration.durationInDays.toString()]}
                                            </p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute h-full flex items-center left-2 cursor-pointer border-r-1">
                                                <PriceSelect
                                                    onValueChange={(value) => {
                                                        setPriceUnits(
                                                            [
                                                                ...(priceUnits?.filter(pu => pu.key !== `${price.duration.durationInDays}`) ?? []),
                                                                { key: `${price.duration.durationInDays}`, priceUnit: value }
                                                            ] as PriceUnitType
                                                        )
                                                    }}
                                                    values={PriceUnits}
                                                    currentValue={priceUnits.find((pu) => parseInt(pu.key) === price.duration.durationInDays)?.priceUnit!}
                                                />
                                            </div>
                                            <FormField
                                                control={form.control}
                                                name={`group.prices.${priceIndex}.priceAmount`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input
                                                                className={`w-[300px]`}
                                                                placeholder="وارد کنید"
                                                                {...field}
                                                                onChange={(e) => {
                                                                    const input = e.target.value
                                                                    if (validateDigits(input) || input === "") {
                                                                        form.setValue(`group.prices.${priceIndex}.priceAmount`, formatToEnglishDigits(input));
                                                                    } else {
                                                                        form.setValue(`group.prices.${priceIndex}.priceAmount`, "");
                                                                    }
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    )
                                }
                                )
                            }
                        </div>
                    </form>
                </Form>
                <DialogFooter className="absolute bottom-[24px] left-[24px]">
                    <Button type="submit" className="h-[40px]">ذخیره تغییرات</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}

export default VisaPriceUpdateDialog;