"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useFormField } from "@sana/ui/components/form";
import { useCreateVisaStore } from "../_store/create.visa.store";
import { useEffect, useRef, useState } from "react";
import { Button } from "@sana/ui/components/button";
import { ChevronLeft, GitMerge, Plus, Trash2 } from "lucide-react";
import { Input } from "@sana/ui/components/input";
import { getServices } from "../../../../../../lib/services";
import { PriceSelect } from "../../../_components/price.select";
import { PriceUnits } from "@sana/utilities/prices/price.units"
import { formatToEnglishDigits, validateDigits } from "@sana/utilities/digit.formatter.util";

const formSchema = z.object({
  groups: z.array(
    z.object({
      groupId: z.string(),
      title: z.string(),
      startAge: z.number(),
      endAge: z.number(),
      prices: z.array(
        z.object({
          priceAmount: z.string(),
          priceUnit: z.string(),
          durationId: z.string(),
          durationInDays: z.number(),
          type: z.string(),
        })
      ),
    })
  ),
});

export function VisaPriceForm() {
  const { setStore, countryId } = useCreateVisaStore();

  const ref = useRef<HTMLFormElement>(null);
  const services = getServices();
  const { data: visaDetail, isPending } = services.visa.useRetrieveVisaDetails({
    queryKey: [{ countryId: countryId! }],
  });

  const { mutateAsync: addBulkPrices, isPending: addBulkPricesIsPending } = services.visa.useCreateVisaPrice();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const newValues = {
      groups: values.groups.map((group) =>
      ({
        groupId: group.groupId,
        prices: group.prices.filter((price) => price.priceAmount !== '').map((price) => ({
          ...price,
          priceAmount: parseInt(price.priceAmount as unknown as string)
        }))
      })
      )
    };
    await addBulkPrices(newValues);
    setStore({ step: 4 });
  }

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "groups",
  });

  type PriceUnitType = { key: string, priceUnit: string }[]
  const [priceUnits, setPriceUnits] = useState<PriceUnitType>()

  useEffect(() => {

    if (!isPending && visaDetail) {
      const prices = visaDetail.durations.flatMap((duration) =>
        visaDetail.types.flatMap((type) => (
          PriceUnits.map((pu) => ({
            durationInDays: duration.durationInDays,
            durationId: duration.id,
            type: type,
            priceAmount: "",
            priceUnit: pu,
          }))
        ))
      );

      const priceGroups = visaDetail.groups.flatMap((g) => {
        return {
          groupId: g.id,
          startAge: g.startAge,
          endAge: g.endAge,
          title: g.title,
          prices: prices,
        };
      });
      form.setValue("groups", priceGroups);
    }

    setPriceUnits(
      visaDetail?.types.flatMap((type) => (
        visaDetail.durations.flatMap((duration) => (
          visaDetail.groups.map((group) => (
            {
              key: `${group.id}-${type}-${duration.durationInDays}`,
              priceUnit: 'IRR'
            }
          ))
        ))
      )) as PriceUnitType
    )
  }, [visaDetail]);

  const visaTypeMap = {
    SINGLE: "سینگل",
    MULTI: "مولتی",
    BUSSINES: "تجاری",
    TOURIST: "توریستی",
    STUDENT: "تحصیلی",
    TRANSIT: "ترانزیت",
    JOBPERMIT: "کاری",
  };

  const visaDurationMap = {
    "10": "۱۰ روزه",
    "14": "۱۴ روزه",
    "30": "۱ ماهه",
    "60": "۲ ماهه",
    "90": "۳ ماهه",
    "180": "۶ ماهه",
    "365": "۱ ساله",
    "730": "۲ ساله",
  };

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
              onClick={() => { }}
            >
              <span>ادامه</span>
              <ChevronLeft />
            </Button>
          </div>
          {fields.map((field, index) => {
            return (
              <>
                <div className="flex flex-col justify-start w-full border px-3 py-4 rounded-lg">
                  <div className="flex w-full justify-start h-[44px]">
                    <p className="bg-[#F7F7F7] flex rounded-full items-center px-[20px] text-[#5D5D5D]">
                      {field.title} - از {field.startAge} تا {field.endAge} سال
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-[10px] w-full mt-4 px-[20px] py-[12px]">
                    {visaDetail
                      ? visaDetail.types.map((type) => (
                        <>
                          {visaDetail.durations.map((duration) => (
                            <div className="flex w-full gap-x-[20px] items-center text-gray-600" key={`${duration.id}-${type}`}>
                              <GitMerge
                                size={20}
                                className="text-gray-500"
                              />
                              <p className="w-[120px]">نوع‌ویزا : {visaTypeMap[type]} </p>

                              <p className="w-[150px]">
                                زمان درخواستی : {visaDurationMap[duration.durationInDays.toString() as keyof typeof visaDurationMap]}
                              </p>
                              <div className="relative">
                                <div className="absolute h-full flex items-center left-2 cursor-pointer border-r-1">
                                  <PriceSelect
                                    onValueChange={
                                      (value) => {
                                        setPriceUnits(
                                          [
                                            ...(priceUnits?.filter(pu => pu.key !== `${field.groupId}-${type}-${duration.durationInDays}`) ?? []),
                                            { key: `${field.groupId}-${type}-${duration.durationInDays}`, priceUnit: value }
                                          ] as PriceUnitType
                                        )
                                      }
                                    }
                                    values={PriceUnits}
                                    currentValue={priceUnits?.find(pu => pu.key === `${field.groupId}-${type}-${duration.durationInDays}`)?.priceUnit}
                                  />
                                </div>
                                {field.prices
                                  .filter((price) => {
                                    return price.type === type &&
                                      price.durationInDays === duration.durationInDays &&
                                      price.priceUnit === priceUnits?.find(pu => pu.key === `${field.groupId}-${type}-${duration.durationInDays}`)?.priceUnit;
                                  })
                                  .map((price) => {
                                    const priceIndex = field.prices.findIndex((p) => p === price);
                                    return (
                                      <FormField
                                        control={form.control}
                                        name={`groups.${index}.prices.${priceIndex}.priceAmount`}
                                        render={({ field }) => (
                                          <FormItem>
                                            <FormControl>
                                              <Input
                                                className={`w-[300px]`}
                                                placeholder="وارد کنید"
                                                {...field}
                                                value={form.watch(`groups.${index}.prices.${priceIndex}.priceAmount`)}
                                                onChange={(e) => {
                                                  const input = e.target.value
                                                  if (validateDigits(input) || input === "") {
                                                    form.setValue(`groups.${index}.prices.${priceIndex}.priceAmount`, formatToEnglishDigits(input));
                                                  } else {
                                                    form.setValue(`groups.${index}.prices.${priceIndex}.priceAmount`, "");
                                                  }
                                                }}
                                              />
                                            </FormControl>
                                            <FormMessage />
                                          </FormItem>
                                        )}
                                      />
                                    );
                                  })}
                              </div>
                            </div>
                          ))}
                        </>
                      ))
                      : null}
                  </div>
                </div>
              </>
            );
          })}
        </form>
      </Form>
    </div>
  );
}