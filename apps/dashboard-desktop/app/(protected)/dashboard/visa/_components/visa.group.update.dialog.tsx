"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { VisaCountry } from "@sana/types/visa/visa";
import { Button } from "@sana/ui/components/button";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@sana/ui/components/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@sana/ui/components/form";
import { Input } from "@sana/ui/components/input";
import { Pencil, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { formatToEnglishDigits, validateDigits } from "@sana/utilities/digit.formatter.util";
import { v4 as uuidv4 } from "uuid";

export function VisaGroupUpdateDialog(props: { country: VisaCountry }) {
  const [isOpen, setIsOpen] = useState(false);
  const formSchema = z.object({
    groups: z.array(
      z.object({
        formId: z.string(),
        title: z.string(),
        startAge: z.string(),
        endAge: z.string(),
      })
    ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      groups: props.country.groups.map((group) => ({
        formId: uuidv4(),
        title: group.title,
        startAge: group.startAge.toString(),
        endAge: group.endAge.toString(),
      })),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "groups",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {}

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
      <DialogContent className="sm:max-w-[700px] min-h-[700px] flex px-[24px]">
        <div className="absolute top-[60px] right-[22px] space-y-[10px]">
          <p className="text-lg font-semibold">ویرایش گروه‌های سنی ویزای {props.country.countryFaName}</p>
          <p className="text-[#64748B] text-sm font-normal">تغییرات خود را بر روی ویزای کشور {props.country.countryFaName} اعمال کنید.</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col mt-[120px]"
          >
            <div className="flex w-full justify-end mb-3">
              <Button
                variant={"outline"}
                onClick={() => {
                  form.setValue("groups", [
                    ...form.watch().groups,
                    {
                      formId: uuidv4(),
                      title: "",
                      startAge: "",
                      endAge: "",
                    },
                  ]);
                }}
              >
                <Plus size={18} />
                <p className="text-[12px]">افزودن گروه سنی</p>
              </Button>
            </div>
            <div className="flex flex-col w-full gap-y-10">
              {fields.map((field, index) => (
                <div className="grid grid-cols-8 w-full h-[50px] gap-x-2">
                  <FormField
                    control={form.control}
                    name={`groups.${index}.startAge`}
                    render={({ field }) => (
                      <FormItem className="w-full col-span-2">
                        <FormLabel>از</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="سن را وارد کنید"
                            {...field}
                            className="w-full"
                            onChange={(e) => {
                              const input = e.target.value;
                              if (validateDigits(input) || input === "") {
                                form.setValue(`groups.${index}.startAge`, formatToEnglishDigits(input));
                              } else {
                                form.setValue(`groups.${index}.startAge`, "");
                              }
                            }}
                            inputMode="numeric"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`groups.${index}.endAge`}
                    render={({ field }) => (
                      <FormItem className="w-full col-span-2">
                        <FormLabel>از</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="سن را وارد کنید"
                            {...field}
                            className="w-full"
                            onChange={(e) => {
                              const input = e.target.value;
                              if (validateDigits(input) || input === "") {
                                form.setValue(`groups.${index}.endAge`, formatToEnglishDigits(input));
                              } else {
                                form.setValue(`groups.${index}.endAge`, "");
                              }
                            }}
                            inputMode="numeric"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`groups.${index}.title`}
                    render={({ field }) => (
                      <FormItem className="w-full col-span-3">
                        <FormLabel>نام گروه سنی</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="نام گروه سنی را وارد کنید"
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="w-full flex justify-end items-center">
                    <button
                      onClick={() => {
                        form.setValue(
                          "groups",
                          form.watch().groups.filter((g, i) => g.formId !== field.formId)
                        );
                      }}
                      className="w-[24px] h-[24px] flex justify-center items-center"
                    >
                      <Trash
                        size={20}
                        className="text-red-500"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
