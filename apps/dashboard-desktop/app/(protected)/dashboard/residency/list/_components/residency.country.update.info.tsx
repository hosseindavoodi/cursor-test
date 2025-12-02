"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@sana/ui/components/button";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@sana/ui/components/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@sana/ui/components/form";
import { Input } from "@sana/ui/components/input";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { ResidencyCountry } from "@sana/types/residency/residency";
import { getServices } from "../../../../../../lib/services";

export function ResidencyCountryUpdateInformation(props: { country: ResidencyCountry }) {
  const [isOpen, setIsOpen] = useState(false);
  const formSchema = z.object({
    countryFaName: z.string({ error: "اسم کشور به فارسی الزامی است" }),
    countryEnName: z.string({ error: "اسم کشور به لاتین الزامی است" }),
    countryCode: z
      .string({ error: "کد کشور الزامی است" })
      .min(2, { error: "طول کد کشور باید ۲ یا ۳ کاراکتر باشد" })
      .max(3, { error: "طول کد کشور باید ۲ یا ۳ کاراکتر باشد" }),
    types: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        note: z.string(),
      })
    ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countryFaName: props.country.countryFaName,
      countryEnName: props.country.countryEnName,
      countryCode: props.country.countryCode,
      types: props.country.types,
    },
  });

  const services = getServices();
  // const { mutateAsync: updateCountry, isPending } = services.visa.useVisaCountryUpdate(props.country.id)
  // const { refetch } = services.visa.useVisaCountryList({
  //     queryKey: [
  //         {
  //             page: 1,
  //             perPage: 20,
  //         },
  //     ],
  // })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    return;
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
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
          <p className="text-lg font-semibold">ویرایش اقامت {props.country.countryFaName}</p>
          <p className="text-[#64748B] text-sm font-normal">تغییرات خود را بر روی اقامت کشور {props.country.countryFaName} اعمال کنید.</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 mt-[120px] gap-x-[12px] space-y-4 h-[200px] w-full"
          >
            <FormField
              control={form.control}
              name="countryFaName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-base">اسم کشور (فارسی)</FormLabel>
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
              name="countryEnName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-base">اسم کشور (لاتین)</FormLabel>
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
                        const sanitizedValue = value.replace(/[^A-Z]/g, "");
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
          </form>
        </Form>
        <DialogFooter className="absolute bottom-[24px] left-[24px]">
          <Button
            type="submit"
            className="h-[40px]"
          >
            ذخیره تغییرات
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
