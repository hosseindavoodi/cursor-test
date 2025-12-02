"use client";

import { useSearchParams } from "next/navigation";
import { getServices } from "../../../../lib/services";
import Passengers from "./_components/passengers";
import OrderDetail from "./_components/order.detail";
import Padding from "../../../_components/padding";
import VisaConsult from "../_components/consult";
import Passenger from "./_components/passenger";
import { useVisaConfirmStore } from "./_store/visa.confirm.store";
import { useCallback, useEffect } from "react";
import { validatePassengers } from "@sana/pipes/visa.confirm.validation.pipe";
import { debounce } from "lodash";
import { VisaConfirmPassengers, VisaPassengerAssets } from "@sana/types/order/visa";
import PassengerSkeleton from "./_components/passenger.skeleton";
function VisaConfirm() {
  const searchParams = useSearchParams();

  const { orders } = getServices();

  const { passengers, setStore, realTimeValidation, passengerAssets } = useVisaConfirmStore();

  const { data, isPending } = orders.useOrderDetail({ queryKey: [{ orderId: searchParams.get("orderId")! }] });

  useEffect(() => {
    if (data?.visa?.passengers && data.visa.country) {
      setStore({
        passengers: data?.visa.passengers?.map((passenger) => ({
          birthdate: "",
          documents: [],
          email: "",
          group: passenger.group,
          firstName: "",
          gender: "",
          nationalityCode: "",
          lastName: "",
          passengerId: passenger.id,
          passportExpireDate: "",
          passportNumber: "",
          phone: "",
        })),

        passengerAssets: [
          ...data.visa.passengers.flatMap((passenger) =>
            data.visa!.country.requireOrderAssetTypes.map((assetType) => ({
              visaPassengerId: passenger.id,
              type: assetType.type,
              assetId: passenger.assets.find((asset) => asset.type === assetType.type)?.assetId,
            }))
          ),
        ],
      });
    }

    return () => {
      setStore({ passengers: [], passengerAssets: [], realTimeValidation: false });
    };
  }, [data]);

  const debouncedValidate = useCallback(
    debounce((passengers: VisaConfirmPassengers[], assets: VisaPassengerAssets[]) => {
      const validation = validatePassengers(passengers, assets);
      setStore({ validations: validation.validations, assetsValidations: validation.assetValidations });
    }, 200), // 300ms debounce delay
    [validatePassengers, setStore]
  );

  useEffect(() => {
    if (realTimeValidation) {
      debouncedValidate(passengers, passengerAssets);
    }
    return () => {
      debouncedValidate.cancel();
    };
  }, [passengers, realTimeValidation, debouncedValidate, passengerAssets]);

  return (
    <div className="w-full pt-[200px]">
      <Padding>
        <div className="w-full gap-x-[20px] flex">
          <Passengers>
            <div className="w-full h-[84px] rounded-[25px] border p-[25px]">
              <p className="font-semibold text-[24px]">مشخصات مسافر</p>
            </div>
            {passengers.map((passenger, passengerIndex) => (
              <Passenger
                requireAssets={data?.visa?.country.requireOrderAssetTypes ?? []}
                passenger={passenger}
                index={passengerIndex}
                key={passenger.passengerId}
              />
            ))}

            {isPending && passengers.length <= 0 && Array.from({ length: 3 }).map((_, index) => <PassengerSkeleton />)}
          </Passengers>

          <div className="flex flex-col gap-y-[24px]">
            <OrderDetail
              isPending={isPending}
              order={data}
            />
            <VisaConsult />
          </div>
        </div>
      </Padding>
    </div>
  );
}

export default VisaConfirm;
