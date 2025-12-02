import { Order } from "@sana/types/order/order";
import { Button } from "@sana/ui/components/button";
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper";
import { validatePassengers } from "@sana/pipes/visa.confirm.validation.pipe";
import { getServices } from "../../../../../lib/services";
import { useVisaConfirmStore } from "../_store/visa.confirm.store";
import { uploadFilesHandler } from "../../../../../lib/upload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SuccessDialog from "../../../_components/success.dialog";

function OrderDetail(props: { order?: Order; isPending: boolean }) {
  const { visa, asset } = getServices();
  const { mutateAsync } = visa.useVisaConfirmOrder();

  const router = useRouter();

  const { data: createdAssets, mutateAsync: createAssetHandler } = asset.useCreatePrivateAssets();

  const [isPending, setIsPending] = useState(false);

  const { passengers, setStore, passengerAssets, assetsValidations } = useVisaConfirmStore();

  const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);

  const handleConfirmation = async () => {
    const validation = validatePassengers(passengers, passengerAssets);

    setStore({ validations: validation.validations, assetsValidations: validation.assetValidations, realTimeValidation: true });

    if (!validation.isValid) {
      toast.error("لطفا تمامی فیلد های مشخص شده را تکمیل کنید ");

      return;
    }

    setIsPending(true);
    const uploadUrls = await createAssetHandler({
      assets: passengerAssets.map((asset) => ({
        fileName: asset.file?.name ?? "",
        assetId: asset.assetId,
        visaPassengerId: asset.visaPassengerId,
        type: asset.type,
      })),
    });

    const payloadForUpload: { uploadUrl: string; file: File }[] = passengerAssets
      .map((passengerAsset) => {
        const uploadUrl = uploadUrls.assets.find(
          (asset) => asset.visaPassengerId === passengerAsset.visaPassengerId && asset.type.name === passengerAsset.type
        )!.uploadUrl;
        const file = passengerAsset.file as File;
        return {
          file,
          uploadUrl,
        };
      })
      .filter(Boolean);

    try {
      const upload = await uploadFilesHandler(payloadForUpload);
    } catch (error) {
      setIsPending(false);

      toast.error("خطایی در اپلود مدارک مسافرین بوجود آمده است ، لطفا دقایقی دیگر دوباره تلاش کنید");
    }

    try {
      const confirmation = await mutateAsync({ orderId: props.order?.id as string, passengers: passengers });

      if (confirmation.requirePayment) {
        router.push(`/visa/pay?orderId=${confirmation.orderId}`);
      } else {
        setShowSuccessDialog(true);
      }

      setIsPending(false);
    } catch (error) {
      setIsPending(false);

      toast.error("خطایی در ثبت اطلاعات مسافرین بوجود آمده است لطفا دوباره تلاش کنید");
    }
  };

  return (
    <div className="min-w-[360px] flex flex-col gap-y-[24px] border rounded-[25px] p-[25px]">
      <p className="font-semibold text-[18px]">جزییات ویزای درخواستی</p>

      <div className="flex w-full flex-col gap-y-[20px]">
        <div className="w-full flex flex-col gap-y-1">
          <p className="text-gray-600 text-[14px] font-medium">نوع ویزا</p>
          {props.isPending ? (
            <div className="rounded-full animate-pulse h-[30px] bg-gray-100"></div>
          ) : (
            <p className="font-semibold">{visaTypeMapper[props.order?.visa?.type!]}</p>
          )}
        </div>
        <div>
          <p className="text-gray-600 text-[14px] font-medium">حداکثر مدت زمان اقامت</p>
          {props.isPending ? (
            <div className="rounded-full animate-pulse h-[30px] bg-gray-100"></div>
          ) : (
            <p className="font-semibold">{props.order?.visa?.durationInDays} روز</p>
          )}
        </div>
        <div>
          <p className="text-gray-600 text-[14px] font-medium">اعتبار ویزا پس از صدور</p>
          {props.isPending ? (
            <div className="rounded-full animate-pulse h-[30px] bg-gray-100"></div>
          ) : (
            <p className="font-semibold">{props.order?.visa?.country.isValidForDays} روز</p>
          )}
        </div>
        <div>
          <p className="text-gray-600 text-[14px] font-medium">تعداد مسافران</p>
          {props.isPending ? (
            <div className="rounded-full animate-pulse h-[30px] bg-gray-100"></div>
          ) : (
            <p className="flex items-center font-semibold gap-x-2">
              {props.order?.visa?.passengers
                ? aggregatePassengerCounts(props.order?.visa.passengers!).map((group) => (
                    <span key={group.title}>
                      {group.count} {group.title}
                    </span>
                  ))
                : ""}
            </p>
          )}
        </div>
      </div>

      <div className="text-center flex flex-col gap-y-2">
        <Button
          onClick={() => handleConfirmation()}
          className="w-full h-[52px] rounded-full bg-gradient-to-tr from-primary-400 to-primary-500"
        >
          {isPending ? <div className="loader" /> : <p>ثبت درخواست</p>}
        </Button>

        {showSuccessDialog && <SuccessDialog />}

        <p className="text-[13px]">
          رفتن به مرحله بعد به معنای پدیرفتن <span className="text-primary-500 underline">قوانین سایت</span> است.
        </p>
      </div>
    </div>
  );
}

export default OrderDetail;

function aggregatePassengerCounts(passengers: NonNullable<Order["visa"]>["passengers"]): { title: string; count: number }[] {
  const counts = passengers?.reduce((acc: Record<string, number>, passenger) => {
    const title = passenger.group.title;
    acc[title] = (acc[title] ?? 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts).map(([title, count]) => ({ title, count }));
}
