"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@sana/ui/components/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@sana/ui/components/form";
import { Input } from "@sana/ui/components/input";
import { useForm } from "react-hook-form";
import InputDate from "@sana/ui/components/input-date";
import z from "zod";
import { getServices } from "../../../../../lib/services";
import { useEffect, useState } from "react";
import { serialize } from "v8";
import { toast } from "sonner";
import { LucideLoader2 } from "lucide-react";

function PersonalInformation() {
  const services = getServices();

  const { data, refetch } = services.user.useUserProfile({ queryKey: ["USER_PROFILE"] });

  const { data: updateData, isPending, mutateAsync: updateProfile } = services.user.useUpdateProfile({});

  const [editMode, setEditMode] = useState<boolean>(false);

  const [initBirthdate, setInitBirthdate] = useState("");

  const formSchema = z.object({
    firstName: z.string().min(1, { error: "نام الزامی است" }),
    lastName: z.string().min(1, { error: "نام خانوادگی الزامی است" }),
    birthdate: z.string().min(1, { error: "تاریخ تولد الزامی است" }),
    nationalCode: z.string().min(1, { error: " کدملی الزامی است" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      firstName: data?.firstName ?? "",
      lastName: data?.lastName ?? "",
      birthdate: data?.birthdate ?? "",
      nationalCode: data?.nationalCode ?? "",
    },
  });

  useEffect(() => {
    if (data) {
      setInitBirthdate(data.birthdate ?? "");
      form.setValue("firstName", data.firstName ?? "");
      form.setValue("lastName", data.lastName ?? "");
      form.setValue("nationalCode", data.nationalCode ?? "");
    }
  }, [data]);

  async function onSubmit() {
    const isFormValid = await form.trigger();

    if (isFormValid) {
      const update = await updateProfile({ ...form.getValues() });

      toast.success("ویرایش اطلاعات با موفقیت انجام شد");

      await refetch();

      setEditMode(false);
    } else {
    }
    // try {
    //   const update = await updateProfile({
    //     ...values,
    //   });

    //   toast.success("ویرایش اطلاعات شخصی شما با موفقیت انجام شد");
    //   setEditMode(false);
    // } catch (error) {
    //   toast.error("بروز خطا در ویرایش اطلاعات شخصی");
    // }
  }

  return (
    <div className="bg-white border border-gray-300 relative flex flex-col gap-y-[40px] rounded-[25px] p-[30px]">
      <div className="flex items-center w-full justify-between">
        <p className="text-[24px] font-semibold">اطلاعات شخصی</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-[20px] gap-y-[32px]">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editMode}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام خانوادگی</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editMode}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nationalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>کدملی</FormLabel>
                  <FormControl>
                    <Input
                      disabled={!editMode}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthdate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>تاریخ تولد</FormLabel>
                  <FormControl>
                    <InputDate
                      ariaInvalid={form.formState.errors.birthdate?.message ? true : false}
                      disabled={!editMode}
                      initDate={initBirthdate}
                      setDate={(date) => form.setValue("birthdate", date)}
                      mode="jalali"
                    />
                  </FormControl>
                  <FormMessage className="-mt-2" />
                </FormItem>
              )}
            />
          </div>

          <Button
            type={"button"}
            onClick={() => {
              if (editMode) {
                onSubmit();
              } else {
                setEditMode(true);
              }
            }}
            className="rounded-full absolute left-[30px] top-[30px] w-[140px] text-[16px] font-medium h-[44px]  "
            variant={editMode ? "primary" : "outline"}
          >
            <>
              {isPending ? (
                <LucideLoader2
                  size={20}
                  className="animate-spin"
                />
              ) : (
                <>{editMode ? "ذخیره" : "ویرایش اطلاعات"}</>
              )}
            </>
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default PersonalInformation;
