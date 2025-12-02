import { RequireVisaCountryAssetTypes, VisaConfirmPassengers } from "@sana/types/order/visa";
import { Button } from "@sana/ui/components/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@sana/ui/components/dialog";
import { Input } from "@sana/ui/components/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@sana/ui/components/select";
import InputDate from "@sana/ui/components/input-date";
import { Plus } from "lucide-react";
import Dropzone from "@sana/ui/components/dropzone";
import { useVisaConfirmStore } from "../_store/visa.confirm.store";
import countryList from "@sana/constants/country.phone.code.list.json";
import Image from "next/image";

function Passenger(props: { passenger: VisaConfirmPassengers; index: number; requireAssets: RequireVisaCountryAssetTypes[] }) {
  const { setStore, passengers, updatePassenger, updatePassengerAssets, validations, passengerAssets, assetsValidations } =
    useVisaConfirmStore();
  return (
    <div className="p-[25px] rounded-[25px]  border">
      <div className="w-full flex justify-between items-center">
        <p className="bg-gray-100 h-[44px] rounded-full flex justify-center items-center px-4 text-gray-600">
          {" "}
          {props.index + 1} . {props.passenger.group.title}
        </p>
        <Dialog>
          <DialogTrigger>
            <Button
              variant={"link"}
              className="p-0"
            >
              <Plus size={18} />
              افزودن مسافر از لیست
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid mt-7 grid-cols-3 gap-[20px]">
        <div className="flex flex-col gap-y-1">
          <p className="text-[14px]">نام لاتین</p>
          <Input
            aria-invalid={validations[props.index]?.firstName?.error}
            onChange={(e) => updatePassenger("firstName", e.target.value, props.index)}
            value={passengers[props.index]?.firstName}
          />
          <p className="text-[14px] text-red-400">{validations[props.index]?.firstName?.message}</p>
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-[14px]">نام خانوادگی لاتین</p>
          <Input
            aria-invalid={validations[props.index]?.lastName?.error}
            onChange={(e) => updatePassenger("lastName", e.target.value, props.index)}
            value={passengers[props.index]?.lastName}
          />
          <p className="text-[14px] text-red-400">{validations[props.index]?.lastName?.message}</p>
        </div>

        <div className="flex flex-col gap-y-1">
          <p className="text-[14px]">جنسیت</p>
          <Select
            defaultValue={passengers[props.index]?.gender}
            value={passengers[props.index]?.gender}
            onValueChange={(value) => updatePassenger("gender", value, props.index)}
            dir="rtl"
          >
            <SelectTrigger
              aria-invalid={validations[props.index]?.gender?.error}
              className="w-full rounded-full"
            >
              <SelectValue
                {...{
                  children: passengers[props.index]?.gender
                    ? passengers[props.index]?.gender === "male"
                      ? "مرد"
                      : "زن"
                    : "جنسیت را انتخاب کنید",
                }}
                placeholder="جنسیت را انتخاب کنید"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="male">مرد</SelectItem>
                <SelectItem value="female">زن</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-[14px] text-red-400">{validations[props.index]?.gender?.message}</p>
        </div>

        <div className="flex flex-col gap-y-1">
          <p className="text-[14px]">ملیت</p>
          <Select
            value={passengers[props.index]?.nationalityCode}
            defaultValue={passengers[props.index]?.nationalityCode}
            onValueChange={(value) => updatePassenger("nationalityCode", value, props.index)}
            dir="rtl"
          >
            <SelectTrigger
              aria-invalid={validations[props.index]?.nationalityCode?.error}
              className="w-full rounded-full"
            >
              <SelectValue placeholder="ملیت را انتخاب کنید" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px] shadow-none rounded-[25px]">
              <SelectGroup>
                {countryList.map((country) => (
                  <SelectItem
                    className="h-[40px]"
                    value={country.code}
                  >
                    <Image
                      src={`/flags/${country.code.toLowerCase()}.svg`}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <p>{country.name}</p>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-[14px] text-red-400">{validations[props.index]?.nationalityCode?.message}</p>
        </div>

        <div className="flex flex-col gap-y-1">
          <p className="text-[14px]">شماره پاسپورت</p>
          <Input
            aria-invalid={validations[props.index]?.passportNumber?.error}
            value={passengers[props.index]?.passportNumber}
            onChange={(e) => updatePassenger("passportNumber", e.target.value, props.index)}
          />
          <p className="text-[14px] text-red-400">{validations[props.index]?.passportNumber?.message}</p>
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-[14px]">تاریخ تولد میلادی</p>
          <InputDate
            errorMessage={validations[props.index]?.birthdate?.message}
            ariaInvalid={validations[props.index]?.birthdate?.error}
            mode="gregorian"
            setDate={(date) => {
              updatePassenger("birthdate", date, props.index);
            }}
            // initDate={passengers[props.index]?.birthdate}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-[14px]">تاریخ انقضای پاسپورت</p>
          <InputDate
            errorMessage={validations[props.index]?.passportExpireDate?.message}
            ariaInvalid={validations[props.index]?.passportExpireDate?.error}
            mode="gregorian"
            setDate={(date) => {
              updatePassenger("passportExpireDate", date, props.index);
            }}
            // initDate={passengers[props.index]?.passportExpireDate}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-[14px]">تلفن همراه</p>
          <Input
            aria-invalid={validations[props.index]?.phone?.error}
            value={passengers[props.index]?.phone}
            onChange={(e) => updatePassenger("phone", e.target.value, props.index)}
          />
          <p className="text-[14px] text-red-400">{validations[props.index]?.phone?.message}</p>
        </div>

        <div className="col-span-3  w-full">
          <p className="text-[24px] font-semibold">اپلود مدارک</p>

          <div className="grid mt-6 grid-cols-3 w-full gap-[12px]">
            {props.requireAssets.map((type) => (
              <div>
                <p className="">{type.desc}</p>
                <Dropzone
                  onFilesDrop={(files: File[]) => {
                    const file = files[0];

                    updatePassengerAssets({
                      visaPassengerId: props.passenger.passengerId,
                      type: type.type,
                      file: file,
                    });
                  }}
                />
                {assetsValidations.find(
                  (assetValidation) => assetValidation.passengerId === props.passenger.passengerId && assetValidation.type === type.type
                )?.error.error ? (
                  <p className="text-primary-200 text-[14px]">
                    {
                      assetsValidations.find(
                        (assetValidation) =>
                          assetValidation.passengerId === props.passenger.passengerId && assetValidation.type === type.type
                      )?.error.message
                    }
                  </p>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passenger;
