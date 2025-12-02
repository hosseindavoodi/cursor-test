"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { VisaDetailResponse, VisaType } from "@sana/types/visa/visa";
import { Button } from "@sana/ui/components/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@sana/ui/components/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@sana/ui/components/select";
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper";
import { Minus, Plus } from "lucide-react";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod";
import { accessCheck } from "../../../../_api/auth/auth.actions";
import { useAuthStore } from "../../../../_store/auth.store";
import { getServices } from "../../../../../lib/services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function VisaRequest(props: { country: VisaDetailResponse }) {
  const { openAuthDialog, setStore: setAuthStore } = useAuthStore();

  const { visa } = getServices();

  const router = useRouter();

  const { data, mutateAsync, isPending } = visa.useRequestVisaOrder();

  const formSchema = z.object({
    countryId: z.string(),
    visaType: z.string({ error: "نوع ویزا الزامی است" }),
    durationId: z.string({ error: "مدت زمان الزامی است" }),
    passengers: z.array(z.object({ groupId: z.string(), count: z.number() })),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countryId: props.country.id,
      passengers: props.country.groups.map((g) => ({ count: 0, groupId: g.id })),
    },
  });

  const { append, fields, update } = useFieldArray({
    name: "passengers",
    control: form.control,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const isUserLogin = await accessCheck();

    let passengerCount = 0;

    values.passengers.forEach((p) => (passengerCount += p.count));

    if (passengerCount <= 0) {
      return toast.error("انتخاب حداقل یک مسافر الزامی است");
    }

    if (isUserLogin) {
      try {
        const response = await mutateAsync({ ...values, visaType: values.visaType as VisaType });

        router.push(`/visa/confirm?orderId=${response.orderId}`);

        toast.success("درخواست شما با موفقیت ثبت شد ");
      } catch (error) {
        toast.error("ثبت درخواست ناموفق بود ، لطفا دقایقی دیگر دوباره تلاش کنید");
      }
    } else {
      setAuthStore({ openAuthDialog: true, step: "PHONE" });
    }
    console.log(values);
  }

  return (
    <div className="p-[25px] border flex flex-col gap-y-6 rounded-[25px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="visaType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نوع ویزا</FormLabel>
                <Select
                  dir="rtl"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full h-[44px] rounded-full">
                      <SelectValue
                        {...{ children: field.value ? visaTypeMapper[field.value] : "نوع ویزا را انتخاب کنید" }}
                        placeholder={"نوع ویزا را انتخاب کنید"}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {props.country.types.map((type) => (
                      <SelectItem
                        key={type}
                        value={type}
                      >
                        {visaTypeMapper[type]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="durationId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>مدت زمان</FormLabel>
                <Select
                  dir="rtl"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full h-[44px] rounded-full">
                      <SelectValue
                        {...{
                          children: field.value
                            ? props.country.durations.find((d) => d.id === field.value)?.durationInDays + " روزه"
                            : "مدت زمان ویزا را انتخاب کنید",
                        }}
                        placeholder={"مدت زمان ویزا را انتخاب کنید"}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {props.country.durations.map((duration) => (
                      <SelectItem
                        key={duration.id}
                        value={duration.id}
                      >
                        {duration.durationInDays} روزه
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch().passengers.map((group, index) => (
            <PassengerPicker
              key={group.groupId ?? index} // Use id if available
              initCount={index === 0 ? 1 : 0}
              group={props.country.groups.find((groupData) => groupData.id === group.groupId)!}
              setValue={(count) => form.setValue(`passengers.${index}.count`, count)}
              count={form.watch(`passengers.${index}.count`) ?? 0}
              onIncrease={() => {
                const current = form.getValues(`passengers.${index}.count`) ?? 0;
                form.setValue(`passengers.${index}.count`, current + 1, { shouldValidate: true });
              }}
              onDecrease={() => {
                const current = form.getValues(`passengers.${index}.count`) ?? 0;
                if (current > 0) {
                  form.setValue(`passengers.${index}.count`, current - 1, { shouldValidate: true });
                }
              }}
            />
          ))}

          <Button
            className="w-full rounded-full bg-gradient-to-tr from-primary-400 h-[50px] to-primary-500 text-white"
            type="submit"
          >
            {isPending ? <span className="loader"></span> : <p>درخواست ویزا</p>}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default VisaRequest;

const PassengerPicker = (props: {
  initCount: number;
  group: VisaDetailResponse["groups"][1];
  count: number;

  onIncrease: () => void;
  onDecrease: () => void;
  setValue: (count: number) => void;
}) => {
  useEffect(() => {
    props.setValue(props.initCount);
  }, [props.initCount]);

  return (
    <div className="w-full flex items-center justify-between">
      <p>
        {props.group.title} (از {props.group.startAge} تا {props.group.endAge} سال)
      </p>

      <div className="w-[120px] border h-[40px] rounded-full flex items-center justify-between px-2">
        <button
          type="button"
          onClick={() => props.onIncrease()}
        >
          <Plus
            size={15}
            className="text-primary-500"
          />
        </button>
        <p>{props.count}</p>
        <button
          type="button"
          className="disabled:text-gray-400 disabled:pointer-events-none "
          // disabled={props.count <= props.initCount}
          onClick={() => props.onDecrease()}
        >
          <Minus
            size={15}
            className="text-primary-500"
          />
        </button>
      </div>
    </div>
  );
};
