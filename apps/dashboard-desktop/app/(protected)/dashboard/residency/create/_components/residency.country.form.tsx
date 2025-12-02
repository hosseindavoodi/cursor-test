"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@sana/ui/components/form";
import { Input } from "@sana/ui/components/input";
import { Button } from "@sana/ui/components/button";
import { ChevronLeft, FlagTriangleRight, Plus, Trash } from "lucide-react";
import { getServices } from "../../../../../../lib/services";
import { useCreateResidencyStore } from "../_store/create.residency.store";
import { v4 as uuidv4 } from "uuid";
const formSchema = z.object({
  countryFaName: z.string(),
  countryEnName: z.string(),
  countryCode: z.string(),
  types: z.array(
    z.object({
      formId: z.string(),
      name: z.string(),
      description: z.string(),
      note: z.string(),
    })
  ),
});

export function ResidencyCountryForm() {
  const { setStore, step } = useCreateResidencyStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      types: [
        {
          formId: uuidv4(),
          name: "",
          description: "",
          note: "",
        },
      ],
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "types",
  });

  const services = getServices();
  const { mutateAsync: handleCreateResidencyCountry } = services.residency.useResidencyCreateCountry();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const createdResidencyCountry = await handleCreateResidencyCountry(values);
    setStore({ countryId: createdResidencyCountry.countryId });
    setStore({ step: 2 });
  }

  return (
    <div className="relative">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-3 gap-3 px-2 mt-4"
        >
          <div className="absolute left-0 -top-38 flex gap-x-2">
            <Button
              variant={"outline"}
              type="button"
              className="w-[213px] h-[54px]"
              onClick={() => {
                form.setValue("types", [
                  ...form.watch().types,
                  {
                    formId: uuidv4(),
                    name: "",
                    description: "",
                    note: "",
                  },
                ]);
              }}
            >
              <Plus size={18} />
              <p className="text-[12px]">افزودن نوع اقامت</p>
            </Button>
            <Button
              className="w-[213px] h-[54px]"
              type="submit"
            >
              <span>ادامه</span>
              <ChevronLeft />
            </Button>
          </div>
          <FormField
            control={form.control}
            name="countryFaName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-base">اسم کشور (فارسی)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="نام کشور را وارد کنید"
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
                    placeholder="نام کشور را وارد کنید"
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
                  <div className="relative">
                    <div className="absolute top-1/2 -translate-y-1/2 left-2 cursor-pointer">
                      {form.getValues("countryCode") && <FlagTriangleRight size={13} />}
                    </div>
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
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-3 grid grid-cols-4 gap-3">
            <div className="w-full col-span-4 my-3">
              <h3 className="font-semibold">نوع اقامت</h3>
            </div>
            {fields.map((field, index) => (
              <>
                <FormField
                  control={form.control}
                  name={`types.${index}.name`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>نام</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="نام را وارد کنید"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`types.${index}.description`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>توضیحات</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="توضیحات را وارد کنید"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`types.${index}.note`}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>یادداشت</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="یادداشت کنید"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex w-full justify-start items-end mb-2">
                  <button
                    onClick={() => {
                      form.setValue(
                        "types",
                        form.watch().types.filter((t, _) => t.formId !== field.formId)
                      );
                    }}
                    className="w-[24px] h-[24px] flex justify-center items-center"
                    type="button"
                  >
                    <Trash
                      size={20}
                      className="text-red-500"
                    />
                  </button>
                </div>
              </>
            ))}
          </div>
        </form>
      </Form>
    </div>
  );
}
