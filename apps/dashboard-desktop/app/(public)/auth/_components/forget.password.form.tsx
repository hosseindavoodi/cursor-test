"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@sana/ui/components/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@sana/ui/components/form"
import { Input } from "@sana/ui/components/input"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const formSchema = z.object({
    email: z.email({ error: "ایمیل وارد شده معتبر نمی‌باشد" }),
})

export function ForgetPasswordForm(props: {
    setIsLoginView: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                <div className="mb-8 space-y-2">
                    <p className="font-semibold text-[30px]">فراموشی کلمه عبور؟</p>
                    <p className="text-sm text-gray-600 text-[16px]">ایمیل خود را جهت بازیابی کلمه عبور وارد کنید.</p>
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ایمیل</FormLabel>
                            <FormControl>
                                <Input className="placeholder:text-[11px] px-3" placeholder="ایمیل خود را وارد کنید" {...field} />
                            </FormControl>
                            <FormMessage className="text-[11px]" />
                        </FormItem>

                    )}
                />
                <Button type="submit" className="w-full">
                    <p className="text-[12px]">ورود به حساب کاربری</p>
                </Button>
                <div className="w-full flex justify-center">
                    <button onClick={() => props.setIsLoginView(true)} className="text-[12px] text-primary-500" type={"button"}>بازگشت به ورود</button>
                </div>
            </form>
        </Form>
    )
}