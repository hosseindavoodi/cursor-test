import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@sana/ui/components/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@sana/ui/components/form";
import { Input } from "@sana/ui/components/input";
import { useForm } from "react-hook-form";
import countriesJson from "@sana/constants/country.phone.code.list.json";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@sana/ui/components/select";
import z from "zod";
import Image from "next/image";
import { useAuthStore } from "../../_store/auth.store";
import { getServices } from "../../../lib/services";
import { getSecondsUntil } from "@sana/utilities/get.seconds.until";
import { toast } from "sonner";
function PhoneStep() {
  const { auth } = getServices();
  const { mutateAsync: sendOtpHandler } = auth.useLogin({});

  const { setStore, step } = useAuthStore();

  const formSchema = z.object({
    phoneNumber: z
      .string({ error: "شماره موبایل الزامی می باشد" })
      .min(10, { error: "لطفا شماره موبایل خود را صحیح وارد کنید." })
      .max(11, { error: "لطفا شماره موبایل خود را صحیح وارد کنید." }),
    countryCode: z.string({ error: "کد کشور الزامی است" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countryCode: "IR",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.

    const dialCode = countriesJson.find((c) => c.code === values.countryCode)?.dial_code;

    const phoneNumber = dialCode + (values.phoneNumber.startsWith("0") ? values.phoneNumber.slice(1) : values.phoneNumber);

    if (values.countryCode === "IR") {
      const response = await sendOtpHandler({ phoneNumber: phoneNumber, otpChannel: "sms" });

      const validTimeInSeconds = getSecondsUntil(response.validUntil);

      setStore({
        step: "OTP",
        verificationId: response.verificationId,
        otpChannel: "sms",
        phoneNumber: phoneNumber,
        dialCode: dialCode,
        timer: validTimeInSeconds,
        validForSeconds: validTimeInSeconds,
      });

      toast.success("ارسال کد یکبار مصرف با موفقیت انجام شد");
    } else {
      setStore({ step: "CHANGE_METHOD" });
    }

    // ✅ This will be type-safe and validated.
  }

  return (
    <div className="w-full flex flex-col gap-y-[32px] flex-1 h-full">
      <div className="text-center flex flex-col gap-y-2">
        <p className="font-semibold text-gray-900 text-[18px]">ورود | ثبت نام</p>
        <p className="text-gray-600 font-normal">شماره موبایل خود را وارد کنید</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="justify-between flex flex-col flex-1 h-full"
        >
          <div className="flex items-start w-full ">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full relative">
                  <FormControl>
                    <Input
                      style={{ direction: "ltr" }}
                      className="w-full rounded-r-full rounded-l-none h-[54px] placeholder:text-right "
                      placeholder="شماره موبایل"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className=" -bottom-12" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem className="">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className=" border-r-0 h-[54px] text-gray-600 w-[110px] rounded-l-full rounded-r-none ">
                        <SelectValue
                          {...{
                            children: form.watch().countryCode ? (
                              <div className="flex items-center gap-x-2">
                                <Image
                                  src={`/flags/${form.watch().countryCode.toLowerCase()}.svg`}
                                  alt=""
                                  width={24}
                                  height={24}
                                />
                                <p>{countriesJson.find((c) => c.code === form.watch().countryCode)?.dial_code}</p>
                              </div>
                            ) : (
                              <></>
                            ),
                          }}
                          placeholder="Select a verified email to display"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="z-[100] rounded-2xl max-h-[250px] ">
                      {countriesJson.map((c, index) => (
                        <SelectItem
                          key={index}
                          value={c.code}
                        >
                          <div>
                            <Image
                              src={`/flags/${c.code.toLowerCase()}.svg`}
                              alt=""
                              width={24}
                              height={24}
                            />
                          </div>
                          <p>{c.code}</p>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {/* <FormDescription>
                    You can manage email addresses in your <Link href="/examples/forms">email settings</Link>.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col  text-center gap-y-[12px]">
            <Button
              className="h-[54px] rounded-full"
              variant={"primary"}
            >
              ادامه
            </Button>
            <p>
              رفتن به مرحله بعد به معنای پذیرفتن <span className="underline text-primary-400">قوانین سایت است.</span>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default PhoneStep;
