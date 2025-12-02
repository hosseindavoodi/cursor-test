"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@sana/ui/components/form";
import { useCreateVisaStore } from "../_store/create.visa.store";
import { useEffect, useRef } from "react";
import { Button } from "@sana/ui/components/button";
import { ChevronLeft, Plus, Trash2 } from "lucide-react";
import { Input } from "@sana/ui/components/input";
import { getServices } from "../../../../../../lib/services";
import { validateDigits, formatToEnglishDigits } from "@sana/utilities/digit.formatter.util";
import { v4 as uuidv4 } from "uuid";
const formSchema = z.object({
  groups: z.array(
    z.object({
      formId: z.string().optional(),
      startAge: z.string(),
      endAge: z.string(),
      title: z.string().optional(),
    })
  ),
});

export function VisaGroupForm() {
  const { setStore, countryId } = useCreateVisaStore();
  const ref = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      groups: [{ formId: uuidv4(), startAge: "", endAge: "", title: "" }],
    },
  });
  const services = getServices();

  if (countryId) {
  }
  const { mutateAsync, isPending, error } = services.visa.useCreateVisaGroup(countryId ? countryId : "");
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const newValues = {
      groups: values.groups.map((group) => ({
        title: group.title,
        startAge: parseInt(group.startAge),
        endAge: parseInt(group.endAge),
      })),
    };
    await mutateAsync(newValues);
    setStore({ step: 3 });
    console.log(values);
  }

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "groups",
  });

  useEffect(() => {
    if (ref.current) {
      setStore({ ageGroupFormRef: ref });
    }
  }, []);

  return (
    <div className="relative">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          ref={ref}
          className="p-5 border rounded-md mt-4 space-y-4"
        >
          <div className="absolute flex left-0 -top-38 gap-x-2">
            <Button
              className="w-[213px] h-[54px]"
              variant={"outline"}
              type="button"
              onClick={() => {
                append({ formId: uuidv4(), startAge: "", endAge: "", title: "" });
              }}
            >
              <Plus />
              <span>افزودن رده‌سنی جدید</span>
            </Button>
            <Button
              className="w-[213px] h-[54px]"
              type="submit"
              onClick={() => form.handleSubmit}
            >
              <span>ادامه</span>
              <ChevronLeft />
            </Button>
          </div>
          {fields.map((field, index) => (
            <div
              key={field.formId}
              className="grid grid-cols-4 w-ful gap-4 items-start px-3 py-4 border rounded-md relative"
            >
              <FormField
                control={form.control}
                name={`groups.${index}.startAge`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>از</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer">
                          <p className="text-sm text-[#64748B]">سال</p>
                        </div>
                        <Input
                          type="text"
                          placeholder="سن را وارد کنید"
                          {...field}
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
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`groups.${index}.endAge`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تا</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer">
                          <p className="text-sm text-[#64748B]">سال</p>
                        </div>
                        <Input
                          type="text"
                          placeholder="سن را وارد کنید"
                          {...field}
                          inputMode="numeric"
                          onChange={(e) => {
                            const input = e.target.value;
                            if (validateDigits(input) || input === "") {
                              form.setValue(`groups.${index}.endAge`, formatToEnglishDigits(input));
                            } else {
                              form.setValue(`groups.${index}.endAge`, "");
                            }
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
                name={`groups.${index}.title`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>عنوان گروه سنی</FormLabel>
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
              <button
                type="button"
                className="flex items-end pb-2 justify-start w-full h-full"
                onClick={() => {
                  form.setValue(
                    "groups",
                    form.watch().groups.filter((g, i) => g.formId !== field.formId)
                  );
                }}
              >
                <Trash2
                  size={20}
                  className="text-red-700"
                />
              </button>
            </div>
          ))}
        </form>
      </Form>
    </div>
  );
}
