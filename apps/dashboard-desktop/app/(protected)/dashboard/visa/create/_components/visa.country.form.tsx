"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { MultiSelectPopver } from "@sana/ui/components/mutliselect.popover"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@sana/ui/components/form"
import { Input } from "@sana/ui/components/input"
import { Switch } from "@sana/ui/components/switch"
import { useCreateVisaStore } from "../_store/create.visa.store"
import { useEffect, useRef } from "react"
import { Button } from "@sana/ui/components/button"
import { ChevronLeft, FlagTriangleRight } from "lucide-react"
import { getServices } from "../../../../../../lib/services"

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

export function VisaCountryForm() {
    const { setStore, step } = useCreateVisaStore()
    const ref = useRef<HTMLFormElement>(null)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            durations: [],
            types: [],
            immediatePayment: false
        },
    });
    const services = getServices()
    const { mutateAsync: createVisaCountry } = services.visa.useCreateVisaCountry({})

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const result = await createVisaCountry(values)
        setStore({ countryId: result.countryId })
        setStore({ step: step + 1 })
    }


    useEffect(() => {
        if (ref.current) {
            setStore({ countryFormRef: ref })
        }
    }, []);

    return (
        <div className="relative">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} ref={ref} className="grid grid-cols-4 gap-3 px-2 mt-4">
                    <Button className="absolute left-0 -top-38 w-[213px] h-[54px]">
                        <span>ادامه</span>
                        <ChevronLeft />
                    </Button>
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
                                    <div className="relative">
                                        <div className="absolute top-1/2 -translate-y-1/2 left-2 cursor-pointer">
                                            {form.getValues("countryCode") && <FlagTriangleRight size={13} />}
                                        </div>
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
                                    </div>
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
                                    <div className="relative">
                                        <div className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer">
                                            <p className="text-sm text-[#64748B]">روز</p>
                                        </div>
                                        <Input
                                            placeholder="وارد کنید"
                                            {...field}
                                        />
                                    </div>
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
                                    <div className="relative">
                                        <div className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer">
                                            <p className="text-sm text-[#64748B]">روز</p>
                                        </div>
                                        <Input placeholder="وارد کنید"
                                            {...field}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                const sanitizedValue = value.replace(/[^0-9]/g, '');
                                                const numericValue = sanitizedValue ? parseInt(sanitizedValue, 10) : '';
                                                field.onChange(numericValue);
                                            }}
                                        />
                                    </div>
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
                                        options={
                                            [
                                                { label: "۱۰ روزه", value: "10" },
                                                { label: "۱۴ روزه", value: "14" },
                                                { label: "۱ ماهه", value: "30" },
                                                { label: "۲ ماهه", value: "60" },
                                                { label: "۳ ماهه", value: "90" },
                                                { label: "۶ ماهه", value: "180" },
                                                { label: "۱ ساله", value: "365" },
                                                { label: "۲ ساله", value: "730" },
                                            ]
                                        }
                                        placeholder={"انتخاب کنید"}
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
                                        options={
                                            [
                                                { label: "سینگل", value: "SINGLE" },
                                                { label: "مولتی", value: "MULTI" },
                                                { label: "تجاری", value: "BUSSINES" },
                                                { label: "توریستی", value: "TOURIST" },
                                                { label: "تحصیلی", value: "STUDENT" },
                                                { label: "ترانزیت", value: "TRANSIT" },
                                                { label: "کاری", value: "JOBPERMIT" },
                                            ]
                                        }
                                        placeholder={"انتخاب کنید"}
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
                                        options={
                                            [
                                                { label: "تصویر پاسپورت", value: "PASSPORT_IMAGE" },
                                                { label: "فرم تعهد", value: "COMITMENT_FORM" },
                                                { label: "تصویر کارت ملی", value: "NATIONAL_CARD_IMAGE" },
                                                { label: "عکس 3x4", value: "PERSONAL_3X4_IMAGE" },
                                            ]
                                        }
                                        placeholder={"انتخاب کنید"}
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
                            <FormItem className="w-full h-full flex">
                                <FormControl>
                                    <div className="w-full h-[50px] flex items-center justify-between px-4 border rounded-lg ">
                                        <p className="text-[12px] font-normal">پرداخت آنلاین</p>
                                        <Switch
                                            dir="ltr"
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />

                                    </div>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </div>
    )
}