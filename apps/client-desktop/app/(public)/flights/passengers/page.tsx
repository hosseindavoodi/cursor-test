"use client";
import { useRouter, useSearchParams } from "next/navigation";
import ContactForInfoBox from "../_components/contact.for.info.box";
import StickySidebar from "../_components/sticky.sidebar";
import FlightDetailBox from "./_components/flight.detail.box";
import { usePassengersStore } from "./_store/passenger.store";
import { useSyncPassengerStore } from "./_hooks/useSyncStore";
import { getServices, services } from "../../../../lib/services";
import PassengerPageSkeleton from "./_components/page.skeleton";
import { useEffect, useState } from "react";
import qs from "qs";
import { toast } from "sonner";
import Timer from "./_components/timer";
import Passenger from "./_components/passenger";
import Contact from "./_components/contact";
import { validatePassengersPayload, FlightContactInfoErrors, FlightPassengersErrors } from "@sana/validators/flight.passenger.validator";
import { FlightContactInfo, FlightPassengers, SaveFlightPassengersPayload } from "@sana/types/flight/passengers";

export type SaveFlightPassengerErrors = {
  passengerErrors: FlightPassengersErrors[];
  contactInfoErrors: FlightContactInfoErrors;
  isValid: boolean;
};

function FlightPassengersEntryPage() {
  const router = useRouter();
  const syncStoreWithSearchParams = useSyncPassengerStore();
  const [payload, setPayload] = useState<SaveFlightPassengersPayload>({
    contactInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    passengers: [],
  });

  const [errors, setErrors] = useState<SaveFlightPassengerErrors | undefined>(undefined);

  const { requestedPayload, offerId, setStore, validateOnChange } = usePassengersStore();
  const { flight } = getServices();

  const { data, isPending, error } = flight.useSaveFlightRetrieveOffer({ queryKey: [{ id: offerId! }], enabled: Boolean(offerId) });
  const { data: savePassengerResponse, mutateAsync: savePassengerHandler } = flight.useSaveFlightPassengers(offerId ?? "");

  const savePassengers = async () => {
    if (!validateOnChange) {
      setStore({ validateOnChange: true });
    }
    const validatePayload = validatePassengersPayload(payload);

    setErrors(validatePayload);

    console.log(validatePayload);
    return;
    try {
      const response = await savePassengerHandler(payload);

      // saving the passengers
    } catch (error) {}
  };

  const updatePassenger = (passenger: FlightPassengers, index: number) => {
    payload.passengers[index] = passenger;

    if (validateOnChange) {
      const validationResult = validatePassengersPayload(payload);
      setErrors(validationResult);
    }
  };

  useEffect(() => {
    if (error?.status === 404 && requestedPayload) {
      toast.warning("مدت زمان اعتبار پرواز انتخابی به اتمام رسید");
      const searchPayloadQueries = qs.stringify(requestedPayload);

      router.push(`/flights/availability?${searchPayloadQueries}`);
    }
  }, [error, requestedPayload]);

  return isPending || !data?.offer ? (
    <PassengerPageSkeleton />
  ) : (
    <div className="flex mt-[40px] pb-20 gap-x-[20px] w-full">
      <div className="w-full flex flex-col gap-y-[24px]">
        <Timer validTo={data.validTo} />
        {data.offer.travelerPricings.map((traveler, index, travelers) => (
          <Passenger
            offer={data.offer}
            errors={errors?.passengerErrors[index]}
            updatePassenger={updatePassenger}
            traveler={traveler}
            passengerIndex={index}
          />
        ))}
        <Contact />
      </div>
      <StickySidebar>
        <FlightDetailBox
          onSave={savePassengers}
          flight={data.offer}
        />
        <ContactForInfoBox />
      </StickySidebar>
    </div>
  );
}

export default FlightPassengersEntryPage;
