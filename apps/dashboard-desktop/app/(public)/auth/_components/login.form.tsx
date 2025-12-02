"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@sana/ui/components/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@sana/ui/components/form";
import { Input } from "@sana/ui/components/input";
import { Eye, EyeOff } from "lucide-react";
import React, { Dispatch, useState } from "react";
import { getServices } from "../../../../lib/services";
import { useRouter } from "next/navigation";
import { SignInAction } from "../../../_api/auth/auth.actions";

const formSchema = z.object({
  email: z.email({ error: "ایمیل وارد شده معتبر نمی‌باشد" }),
  password: z.string({ error: "کلمه عبور نمی‌تواند خالی باشد" }).min(6, { error: "کلمه عبور باید حداقل ۶ کاراکتر باشد" }),
});

export function LoginForm(props: { setIsLoginView: Dispatch<React.SetStateAction<boolean>> }) {
  const { auth } = getServices();

  const { mutateAsync: loginHandler } = auth.useLoginByPassword({});
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const access = await loginHandler({ otpChannel: "password", email: values.email, password: values.password });

      await SignInAction({ accessToken: access.access_token, refreshToken: access.refresh_token });

      router.push("/dashboard/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full"
      >
        <div className="mb-8 space-y-2">
          <p className="font-semibold text-[30px]">ورود به حساب کاربری</p>
          <p className="text-sm text-gray-600 text-[16px]">لطفا وارد حساب کاربری خود شوید</p>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ایمیل</FormLabel>
              <FormControl>
                <Input
                  className="placeholder:text-[11px] px-3 w-full"
                  placeholder="ایمیل خود را وارد کنید"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[11px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>کلمه عبور</FormLabel>
              <FormControl>
                <div className="relative">
                  <div
                    className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    {isPasswordVisible ? <EyeOff size={16} /> : <Eye size={16} />}
                  </div>
                  <Input
                    className={`placeholder:text-[11px] px-3 ${isPasswordVisible === false ? "tracking-[0.2rem]" : ""}`}
                    type={isPasswordVisible === true ? "text" : "password"}
                    placeholder="کلمه عبور خود را وارد کنید"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-[11px]" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full h-[54px] p-0"
        >
          <p className="text-[12px]">ورود به حساب کاربری</p>
        </Button>
        <div className="w-full flex justify-center">
          <button
            onClick={() => props.setIsLoginView(false)}
            className="text-[12px] text-primary-500"
            type={"button"}
          >
            فراموشی کلمه‌عبور؟
          </button>
        </div>
      </form>
    </Form>
  );
}
