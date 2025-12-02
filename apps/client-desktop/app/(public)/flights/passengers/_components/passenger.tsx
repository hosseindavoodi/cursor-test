import { AgeType, Flight, FlightTravelerPricings, RetrieveFlightOfferResponse } from "@sana/types/flight/flight";
import { useEffect, useState } from "react";
import PassengerHistoryDialog from "./passenger.history.dialog";
import { Label } from "@sana/ui/components/label";
import { Input } from "@sana/ui/components/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@sana/ui/components/select";
import DateInput from "@sana/ui/components/input-date";
import { FlightPassengers, SaveFlightPassengersPayload } from "@sana/types/flight/passengers";
import countries from "@sana/constants/country.phone.code.list.json";
import Image from "next/image";
import { usePassengersStore } from "../_store/passenger.store";
import { iataLookup } from "@sana/utilities/iata.lookup";
import { cn } from "@sana/ui/lib/utils";
import { SaveFlightPassengerErrors } from "../page";
import { FormMessage } from "@sana/ui/components/form";

function Passenger(props: {
  passengerIndex: number;
  traveler: FlightTravelerPricings;
  offer: RetrieveFlightOfferResponse["offer"];
  errors?: SaveFlightPassengerErrors["passengerErrors"][1];
  updatePassenger: (passenger: SaveFlightPassengersPayload["passengers"][1], index: number) => void;
}) {
  const { requestedPayload } = usePassengersStore();

  const [passenger, setPassenger] = useState<FlightPassengers>({
    firstName: "",
    lastName: "",
    birthDate: "",
    documentType: "passport",
    gender: "",
    nationality: "",
    ageType: "ADULT",
    nationalCard: {
      id: "",
    },
    passport: {
      number: "",
      countryOfIssue: "",
      expiryDate: "",
    },
  });

  const ageTypeMapper: Record<AgeType, string> = {
    ADULT: "بزرگسال",
    CHILD: "کودک",
    INFANT: "نوزاد",
  };

  const regex = {
    englishCharWithNumbersOnly: /^[a-zA-Z0-9]*$/,
    englishCharOnly: /^[a-zA-z]*$/,
    nationalCodeNumbers: /^(?:\d{10})?$/,
  };

  const origin = iataLookup(props.offer.itineraries[0]?.segments[0]?.departure.iataCode);
  const destination = iataLookup(props.offer.itineraries[0]?.segments[props.offer.itineraries[0].segments.length - 1]?.arrival.iataCode);

  const travelType: "internal" | "international" =
    origin.country.countryCode === "IRN" && "IRN" === destination.country.countryCode ? "internal" : "international";

  // const travelType =

  useEffect(() => {
    props.updatePassenger(passenger, props.passengerIndex);
  }, [passenger]);

  useEffect(() => {
    setPassenger((prev) => ({ ...prev, ageType: props.traveler.travelerType }));
  }, [props.traveler.travelerType]);

  return (
    <div className="w-full p-[25px] rounded-[25px] border">
      <div className="flex justify-between items-center w-full">
        <p className="w-[100px] text-gray-600 font-medium bg-gray-100 rounded-full py-3 text-center">
          {ageTypeMapper[props.traveler.travelerType]}
        </p>

        <div className="flex items-center gap-x-5">
          <DocumentTypeSelector
            travelType={travelType}
            onSelect={(doc) => setPassenger((prev) => ({ ...prev, documentType: doc }))}
            documentType={passenger.documentType}
          />
          <PassengerHistoryDialog />
        </div>
      </div>
      <div className="grid mt-[60px] grid-cols-3 gap-x-[20px] gap-y-[32px]">
        {passenger.documentType === "passport" ? (
          <div className="flex flex-col gap-y-2">
            <Label>شماره پاسپورت</Label>
            <Input
              aria-invalid={props.errors?.passport.number.state}
              value={passenger?.passport?.number}
              onChange={(e) => {
                if (regex.englishCharWithNumbersOnly.test(e.target.value)) {
                  setPassenger((prev) => ({ ...prev, passport: { ...prev.passport, number: e.target.value } }));
                } else {
                }
              }}
              placeholder="شماره پاسپورت را وارد کنید"
              className="w-full rounded-full font-inter placeholder:font-pinar"
            />
            {props.errors?.passport.number.state && (
              <p className="text-red-400 font-medium text-[13px]">{props.errors.passport.number.message}</p>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-y-2">
            <Label>کدملی</Label>
            <Input
              aria-invalid={props.errors?.nationalCard.id.state}
              value={passenger?.nationalCard?.id}
              onChange={(e) => {
                if (regex.nationalCodeNumbers.test(e.target.value)) {
                  setPassenger((prev) => ({ ...prev, nationalCard: { ...prev.nationalCard, id: e.target.value } }));
                } else {
                }
              }}
              placeholder="شماره پاسپورت را وارد کنید"
              className="w-full rounded-full font-inter placeholder:font-pinar"
            />
            {props.errors?.passport.number.state && (
              <p className="text-red-400 font-medium text-[13px]">{props.errors.nationalCard.id.message}</p>
            )}
          </div>
        )}

        <div className="flex flex-col gap-y-2">
          <Label>نام لاتین</Label>
          <Input
            aria-invalid={props.errors?.firstName.state}
            onChange={(e) => {
              if (regex.englishCharOnly.test(e.target.value)) {
                setPassenger((prev) => ({ ...prev, firstName: e.target.value }));
              }
            }}
            value={passenger.firstName}
            placeholder="نام این مسافر را به لاتین وارد کنید"
            className="w-full rounded-full"
          />
          {props.errors?.firstName.state && <p className="text-red-400 font-medium text-[13px]">{props.errors.firstName.message}</p>}
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>نام خانوادگی لاتین</Label>
          <Input
            aria-invalid={props.errors?.lastName.state}
            onChange={(e) => {
              if (regex.englishCharOnly.test(e.target.value)) {
                setPassenger((prev) => ({ ...prev, lastName: e.target.value }));
              }
            }}
            placeholder="نام خانوادگی مسافر را به لاتین وارد کنید"
            className="w-full rounded-full"
          />
          {props.errors?.lastName.state && <p className="text-red-400 font-medium text-[13px]">{props.errors.lastName.message}</p>}
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>جنسیت</Label>
          <Select
            onValueChange={(value) => setPassenger((prev) => ({ ...prev, gender: value as "female" | "male" }))}
            dir="rtl"
          >
            <SelectTrigger
              aria-invalid={props.errors?.gender.state}
              className="w-full rounded-full"
            >
              <SelectValue placeholder="جنسیت مسافر را انتخاب کنید" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="male">مرد</SelectItem>
                <SelectItem value="female">زن</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {props.errors?.gender.state && <p className="text-red-400 font-medium text-[13px]">{props.errors.gender.message}</p>}
        </div>
        <div className="flex flex-col gap-y-2">
          {passenger.documentType === "passport" ? <Label>تاریخ تولد میلادی</Label> : <Label>تاریخ تولد شمسی</Label>}
          <DateInput
            ariaInvalid={props.errors?.birthDate.state}
            errorMessage={props.errors?.birthDate.message}
            mode={passenger.documentType === "passport" ? "gregorian" : "jalali"}
            dayPlaceholder="15"
            monthPlaceHolder="10"
            initDate={passenger.birthDate}
            yearPlaceHolder={passenger.documentType === "passport" ? "2001" : "1379"}
            setDate={(date) => setPassenger((prev) => ({ ...prev, birthDate: date }))}
          />
        </div>

        {passenger.documentType === "passport" ? (
          <div className="flex flex-col gap-y-2">
            <Label>ملیت</Label>
            <Select
              onValueChange={(countryCode) => setPassenger((prev) => ({ ...prev, nationality: countryCode }))}
              dir="rtl"
            >
              <SelectTrigger
                aria-invalid={props.errors?.nationality.state}
                className="w-full rounded-full"
              >
                <SelectValue placeholder="ملیت مسافر را انتخاب کنید" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                <SelectGroup>
                  {countries.map((country) => (
                    <SelectItem
                      value={country.code}
                      className="flex items-center gap-x-2"
                    >
                      <Image
                        src={`/flags/${country.code}.svg`}
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
            {props.errors?.nationality.state && <p className="text-red-400 font-medium text-[13px]">{props.errors.nationality.message}</p>}
          </div>
        ) : (
          <></>
        )}
        {passenger.documentType === "passport" ? (
          <div className="flex flex-col gap-y-2">
            <Label>تاریخ انقضا پاسپورت میلادی</Label>
            <DateInput
              mode="gregorian"
              dayPlaceholder="10"
              ariaInvalid={props.errors?.passport.expiryDate.state}
              errorMessage={props.errors?.passport.expiryDate.message}
              monthPlaceHolder="05"
              yearPlaceHolder="2027"
              setDate={(date) => {
                setPassenger((prev) => ({ ...prev, birthDate: date }));
              }}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Passenger;

const DocumentTypeSelector = (props: {
  documentType: "passport" | "national_card";
  travelType: "internal" | "international";
  onSelect: (docType: "passport" | "national_card") => void;
}) => {
  return (
    <div className=" h-[44px] p-1 flex items-center rounded-full bg-gray-200 text-gray-500">
      {props.travelType === "internal" && (
        <button
          onClick={() => props.onSelect("national_card")}
          className={`${cn(props.documentType === "national_card" && "bg-white text-primary-500")} w-full transition-all min-w-[130px]  rounded-full h-full font-medium`}
        >
          کدملی
        </button>
      )}
      <button
        onClick={() => props.onSelect("passport")}
        className={cn(
          props.documentType === "passport" && "bg-white text-primary-500",
          "w-full min-w-[130px] rounded-full h-full font-medium transition-all"
        )}
      >
        پاسپورت
      </button>
    </div>
  );
};
