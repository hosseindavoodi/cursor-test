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
import { Input } from "@sana/ui/components/input"
import { MultiSelectPopver } from "@sana/ui/components/mutliselect.popover"
import { Switch } from "@sana/ui/components/switch"
import { Pencil } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"
import { getServices } from "../../../../../lib/services"

export function VisaCountryUpdateInformation(props: { country: VisaCountry }) {

    const [isOpen, setIsOpen] = useState(false)
    const formSchema = z.object({
        countryFaName: z.string({ error: "اسم کشور به فارسی الزامی است" }),
        countryEnName: z.string({ error: "اسم کشور به لاتین الزامی است" }),
        countryCode: z.string({ error: "کد کشور الزامی است" })
            .min(2, { error: "طول کد کشور باید ۲ یا ۳ کاراکتر باشد" })
            .max(3, { error: "طول کد کشور باید ۲ یا ۳ کاراکتر باشد" }),
        types: z.array(z.string()).min(1, { error: "حداقل یک گزینه باید انتخاب شود" }),
        durations: z.array(z.object({
            durationInDays: z.number()
        })).min(1, { error: "حداقل یک گزینه باید انتخاب شود" }),
        processTime: z.string({ error: "زمان پردازش صدور الزامی است" }),
        isValidForDays: z.number({ error: "مدت اعتبار ویزا الزامی است" }),
        requiredAssetTypes: z.array(z.string()).optional(),
        immediatePayment: z.boolean(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            countryFaName: props.country.countryFaName,
            countryEnName: props.country.countryEnName,
            countryCode: props.country.countryCode,
            processTime: props.country.processTime,
            isValidForDays: props.country.isValidForDays,
            durations: props.country.durations,
            types: props.country.types,
            requiredAssetTypes: props.country.requiredAssetTypes.map((rat) => rat.type)
        },
    });

    const services = getServices()
    const { mutateAsync: updateCountry, isPending } = services.visa.useVisaCountryUpdate(props.country.id)

    async function onSubmit(values: z.infer<typeof formSchema>) {
        return
    }

    const visaTypeOptions = [
        { label: "سینگل", value: "SINGLE" },
        { label: "مولتی", value: "MULTI" },
        { label: "تجاری", value: "BUSSINES" },
        { label: "توریستی", value: "TOURIST" },
        { label: "تحصیلی", value: "STUDENT" },
        { label: "ترانزیت", value: "TRANSIT" },
        { label: "کاری", value: "JOBPERMIT" },
    ]

    const visaDurationOptions = [
        { label: "۱۰ روزه", value: "10" },
        { label: "۱۴ روزه", value: "14" },
        { label: "۱ ماهه", value: "30" },
        { label: "۲ ماهه", value: "60" },
        { label: "۳ ماهه", value: "90" },
        { label: "۶ ماهه", value: "180" },
        { label: "۱ ساله", value: "365" },
        { label: "۲ ساله", value: "730" },
    ]

    const visaRequiredDocsOptions = [
        { label: "تصویر پاسپورت", value: "PASSPORT_IMAGE" },
        { label: "فرم تعهد", value: "COMITMENT_FORM" },
        { label: "تصویر کارت ملی", value: "NATIONAL_CARD_IMAGE" },
        { label: "عکس 3x4", value: "PERSONAL_3X4_IMAGE" },
    ]

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button
                    onClick={() => { setIsOpen(true) }}
                    type="button"
                    className="w-[24px] h-[24px] flex justify-center items-center"
                >
                    <Pencil size={20} />
                </button>
            </DialogTrigger>
            <DialogContent
                className="sm:max-w-[700px] min-h-[700px] flex px-[24px]"
                onOpenAutoFocus={(e) => e.preventDefault()}
            >
                <div className="absolute top-[60px] right-[22px] space-y-[10px]">
                    <p className="text-lg font-semibold">ویرایش ویزای {props.country.countryFaName}</p>
                    <p className="text-[#64748B] text-sm font-normal">تغییرات خود را بر روی ویزای کشور {props.country.countryFaName} اعمال کنید.</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 mt-[120px] gap-x-[12px] space-y-4 h-[200px] w-full">
                        <FormField
                            control={form.control}
                            name="countryFaName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-base">اسم کشور (فارسی)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="وارد کنید" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="countryEnName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-base">اسم کشور (لاتین)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="وارد کنید" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="countryCode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-base">کد کشور</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="کد کشور را وارد کنید "
                                            {...field}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                const sanitizedValue = value.replace(/[^A-Z]/g, '');
                                                field.onChange(sanitizedValue);
                                            }}
                                            inputMode="text"
                                            className="flex placeholder:text-start placeholder:font-pinar font-mono pl-6 text-end"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="processTime"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-base">زمان پردازش صدور</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="وارد کنید"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isValidForDays"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-base">مدت اعتبار ویزا</FormLabel>
                                    <FormControl>
                                        <Input placeholder="وارد کنید"
                                            {...field}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                const sanitizedValue = value.replace(/[^0-9]/g, '');
                                                const numericValue = sanitizedValue ? parseInt(sanitizedValue, 10) : '';
                                                field.onChange(numericValue);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="durations"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-base">تعداد روز</FormLabel>
                                    <FormControl>
                                        <MultiSelectPopver
                                            onChange={(options) => form.setValue('durations', options.map((option) => ({ durationInDays: parseInt(option.value) })))}
                                            options={visaDurationOptions}
                                            placeholder={"انتخاب کنید"}
                                            initialValue={visaDurationOptions.filter(
                                                (option) => props.country.durations.some(
                                                    (duration) => duration.durationInDays === parseInt(option.value))
                                            )}
                                            expandPlaceholder={false}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="types"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-base">نوع ویزا</FormLabel>
                                    <FormControl>
                                        <MultiSelectPopver
                                            onChange={(options) => form.setValue('types', options.map((option) => (option.value)))}
                                            options={visaTypeOptions}
                                            placeholder={"انتخاب کنید"}
                                            initialValue={visaTypeOptions.filter((option) => props.country.types.includes(option.value as VisaType))}
                                            expandPlaceholder={false}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="requiredAssetTypes"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-base">مدارک مورد نیاز</FormLabel>
                                    <FormControl>
                                        <MultiSelectPopver
                                            onChange={(options) => form.setValue('requiredAssetTypes', options.map((option) => (option.value)))}
                                            options={visaRequiredDocsOptions}
                                            placeholder={"انتخاب کنید"}
                                            initialValue={visaRequiredDocsOptions.filter((option) => props.country.requiredAssetTypes.find(
                                                (rta) => rta.type === option.value
                                            ))}
                                            expandPlaceholder={false}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="immediatePayment"
                            render={({ field }) => (
                                <FormItem className="flex">
                                    <FormLabel className="text-sm font-base">پرداخت آنلاین</FormLabel>
                                    <FormControl>
                                        <Switch
                                            dir="ltr"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
                <DialogFooter className="absolute bottom-[24px] left-[24px]">
                    <Button type="submit" className="h-[40px]">ذخیره تغییرات</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
