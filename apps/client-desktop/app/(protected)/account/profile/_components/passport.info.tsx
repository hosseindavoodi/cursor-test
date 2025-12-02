"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@sana/ui/components/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@sana/ui/components/form";
import { Input } from "@sana/ui/components/input";
import InputDate from "@sana/ui/components/input-date";
import { useForm } from "react-hook-form";
import z from "zod";
import Dropzone from "./dropzone";
import { useEffect, useState } from "react";
import { getServices } from "../../../../../lib/services";
import { uploadFilesHandler } from "../../../../../lib/upload";
import { toast } from "sonner";
import { LucideLoader2 } from "lucide-react";

function PassportInfo() {
  const [editMode, setEditMode] = useState(false);

  const { user, asset } = getServices();

  const { data, refetch } = user.useUserProfile({ queryKey: ["USER_PROFILE"] });

  const { mutateAsync: updateProfileHandler, isPending } = user.useUpdateProfilePassport({});

  const { mutateAsync: createAssetHandler } = asset.useCreatePrivateAssets();

  const [isUploading, setIsUploading] = useState<boolean>(false);

  const [initExpireDate, setInitExpireDate] = useState("");

  const [passportImage, setPassportImage] = useState<null | File>(null);

  const formSchema = z.object({
    passportFirstName: z.string().min(1, { error: "نام لاتین الزامی است" }),
    passportLastName: z.string().min(1, { error: "نام خانوادگی لاتین الزامی است" }),
    passportNumber: z.string().min(1, { error: "شماره پاسپورت الزامی است" }),
    passportExpiryDate: z.string().min(1, { error: "تاریخ انقضای پاسپورت الزامی است" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      passportNumber: data?.passportNumber ?? "",
      passportFirstName: data?.passportFirstName ?? "",
      passportLastName: data?.passportLastName ?? "",
      passportExpiryDate: data?.passportExpiryDate ?? "",
    },
  });

  async function updateProfile() {
    const isFormValid = await form.trigger();

    if (isFormValid) {
      if (passportImage) {
        const uploadImage = await handleUploadPassportImage(passportImage);
      }
      try {
        const updateProfile = await updateProfileHandler({ ...form.getValues() });

        await refetch();
        setEditMode(false);
        toast.success("ویرایش اطلاعات پاسپورت با موفقیت انجام شد");
      } catch (error) {
        toast.error("خطا در ویرایش اطلاعات پاسپورت");
      }
    }
  }

  const handleUploadPassportImage = async (file: File) => {
    try {
      setIsUploading(true);
      const uploadUrl = (await createAssetHandler({ assets: [{ fileName: file.name, type: "PASSPORT_IMAGE", userId: data?.id }] }))
        .assets[0]?.uploadUrl;

      if (uploadUrl) {
        const upload = await uploadFilesHandler([{ file: file, uploadUrl: uploadUrl }]);
        setIsUploading(false);
      }
    } catch (error) {
      toast.error("خطایی در اپلود تصویر پاسپورت بوجود آمده است لطفا دقایقی دیگر دوباره تلاش کنید");
      setIsUploading(false);
    }
  };

  useEffect(() => {
    if (data) {
      form.setValue("passportFirstName", data.passport.firstName);
      form.setValue("passportLastName", data.passport.lastName);
      form.setValue("passportNumber", data.passport.number);
      setInitExpireDate(data.passport.expiryDate);
    }
  }, [data]);

  return (
    <div className="w-full relative bg-white rounded-[25px] border border-gray-300 flex flex-col gap-y-[30px] p-[30px]">
      <p className="text-[24px] font-semibold">اطلاعات پاسپورت</p>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(updateProfile)}>
            <div className="flex gap-x-[32px] justify-between w-full">
              <div className="grid grid-cols-2 gap-y-[32px] gap-x-[32px]">
                <FormField
                  disabled={!editMode}
                  control={form.control}
                  name="passportFirstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نام لاتین</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={!editMode}
                  control={form.control}
                  name="passportLastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نام خانوادگی لاتین</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={!editMode}
                  control={form.control}
                  name="passportNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>شماره پاسپورت</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={!editMode}
                  control={form.control}
                  name="passportExpiryDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>تاریخ انقضای پاسپورت</FormLabel>
                      <FormControl>
                        <InputDate
                          ariaInvalid={form.formState.errors.passportExpiryDate?.message ? true : false}
                          disabled={!editMode}
                          mode="gregorian"
                          initDate={initExpireDate}
                          setDate={(date) => {
                            form.setValue("passportExpiryDate", date);
                          }}
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <p>تصویر پاسپورت</p>
                <Dropzone
                  previewUrl={data?.passport?.image?.preview ?? undefined}
                  isUploading={isUploading}
                  disabled={!editMode}
                  className="w-[300px]"
                  onDrop={(files) => {
                    setPassportImage(files[0] as File);
                  }}
                />
              </div>
            </div>
            <Button
              onClick={() => {
                if (editMode) {
                  updateProfile();
                } else {
                  setEditMode(true);
                }
              }}
              className="absolute w-[140px] text-[16px] h-[44px] rounded-full left-[30px] top-[30px]"
              type={"button"}
              disabled={isPending || isUploading}
              variant={editMode ? "primary" : "outline"}
            >
              {isPending || isUploading ? (
                <LucideLoader2
                  className="animate-spin "
                  size={24}
                />
              ) : editMode ? (
                "ذخیره"
              ) : (
                "  ویرایش اطلاعات"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default PassportInfo;
