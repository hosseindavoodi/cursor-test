import { calculateAge } from "@sana/utilities/age.calculator";
import { isDateExpired } from "@sana/utilities/is.expired";
type Error = {
  state: boolean;
  message: string;
};

type ToError<T> = {
  [K in keyof T]: T[K] extends object ? ToError<T[K]> : Error;
};

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$$ %&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,} $$/i;
const PHONE_NUMBER_REGEX = /^(0)?9[0-9]{9}$/;

export type FlightContactInfoErrors = ToError<FlightContactInfo>;
export type FlightPassengersErrors = ToError<FlightPassengers>;

import { FlightContactInfo, FlightPassengers, SaveFlightPassengersPayload } from "@sana/types/flight/passengers";
import { isValidIranianNationalCode } from "./national.code.validator";

export const validatePassengersPayload = (
  payload: SaveFlightPassengersPayload
): {
  passengerErrors: FlightPassengersErrors[];
  contactInfoErrors: FlightContactInfoErrors;

  isValid: boolean;
} => {
  let isValid = true;

  let passengerErrors: FlightPassengersErrors[] = payload.passengers.map((passenger) => ({
    firstName: {
      state: false,
      message: "",
    },
    birthDate: {
      state: false,
      message: "",
    },
    documentType: {
      state: false,
      message: "",
    },
    gender: {
      state: false,
      message: "",
    },
    ageType: {
      state: false,
      message: "",
    },
    lastName: {
      state: false,
      message: "",
    },
    nationalCard: {
      id: {
        state: false,
        message: "",
      },
    },
    nationality: {
      state: false,
      message: "",
    },
    passport: {
      countryOfIssue: {
        state: false,
        message: "",
      },
      expiryDate: {
        state: false,
        message: "",
      },
      number: {
        state: false,
        message: "",
      },
    },
  }));

  let contactInfoErrors: FlightContactInfoErrors = {
    email: {
      state: false,
      message: "",
    },
    firstName: {
      state: false,
      message: "",
    },
    lastName: {
      state: false,
      message: "",
    },
    phoneNumber: {
      state: false,
      message: "",
    },
  };

  const { contactInfo, passengers } = payload;

  passengers.forEach((passenger, index) => {
    if (!passengerErrors[index]) return;

    if (!passenger.firstName) {
      isValid = false;
      passengerErrors[index].firstName = {
        state: true,
        message: "نام لاتین مسافر الزامی است",
      };
    }

    if (!passenger.lastName) {
      isValid = false;
      passengerErrors[index].lastName = {
        state: true,
        message: "نام خانوادگی مسافر الزامی است",
      };
    }

    if (!passenger.gender) {
      isValid = false;
      passengerErrors[index].gender = {
        state: true,
        message: "جنسیت مسافر الزامی است",
      };
    }

    if (!passenger.birthDate) {
      isValid = false;
      passengerErrors[index].birthDate = { state: true, message: "تاریخ تولد  مسافر الزامی است" };
    } else {
      const age = calculateAge(passenger.birthDate);

      if (passenger.ageType === "ADULT" && age < 12) {
        isValid = false;
        passengerErrors[index].birthDate = { state: true, message: "سن مسافر باید بیشتر از 12 سال باشد" };
      }

      if (passenger.ageType === "CHILD" && !(age >= 2 && age < 12)) {
        isValid = false;
        passengerErrors[index].birthDate = { state: true, message: "سن مسافر باید بین 2 تا 12 سال باشد" };
      }

      if (passenger.ageType === "INFANT" && age < 2) {
        isValid = false;
        passengerErrors[index].birthDate = { state: true, message: "سن مسافر باید کمتر از 2 سال باشد" };
      }
    }

    if (!passenger.nationality) {
      isValid = false;
      passengerErrors[index].nationality = { state: true, message: "ملیت مسافر الزامی است" };
    }

    if (passenger.documentType === "passport") {
      if (!passenger.passport.countryOfIssue) {
        isValid = false;
        passengerErrors[index].passport.countryOfIssue = {
          state: true,
          message: "انتخاب کشور صادر کننده پاسپورت الزامی است",
        };
      }

      if (!passenger.passport.expiryDate) {
        isValid = false;
        passengerErrors[index].passport.expiryDate = {
          state: true,
          message: "تاریخ انقضا پاسپورت الزامی است",
        };
      } else {
        const isExpired = isDateExpired(passenger.passport.expiryDate);

        if (isExpired) {
          isValid = false;
          passengerErrors[index].passport.expiryDate = {
            state: true,
            message: "تاریخ انقضای پاسپورت منقضی شده است",
          };
        }
      }

      if (!passenger.passport.number) {
        isValid = false;
        passengerErrors[index].passport.number = {
          state: true,
          message: "شماره پاسپورت الزامی است",
        };
      }
    } else {
      if (!passenger.nationalCard.id) {
        isValid = false;
        passengerErrors[index].nationalCard.id = {
          state: true,
          message: "کدملی مسافر الزامی است",
        };
      } else {
        const isNationalIdValid = isValidIranianNationalCode(passenger.nationalCard.id);

        if (!isNationalIdValid) {
          isValid = false;
          passengerErrors[index].nationalCard.id = {
            state: true,
            message: "کدملی وارد شده معتبر نیست",
          };
        }
      }
    }
  });

  if (!contactInfo.email) {
    isValid = false;
    contactInfoErrors.email = {
      state: true,
      message: "وارد کردن ایمیل الزامی است",
    };
  } else {
    if (!EMAIL_REGEX.test(contactInfo.email)) {
      isValid = false;
      contactInfoErrors.email = {
        state: true,
        message: "ایمیل وارد شده صحیح نمی باشد",
      };
    }
  }

  if (!contactInfo.firstName) {
    isValid = false;
    contactInfoErrors.firstName = {
      state: true,
      message: "نام الزامی می باشد",
    };
  }

  if (!contactInfo.lastName) {
    isValid = false;
    contactInfoErrors.lastName = {
      state: true,
      message: "نام خانوادگی الزامی است",
    };
  }

  if (!contactInfo.phoneNumber) {
    isValid = false;
    contactInfoErrors.phoneNumber = {
      state: true,
      message: "شماره همراه الزامی است",
    };
  } else {
    if (!PHONE_NUMBER_REGEX.test(contactInfo.phoneNumber)) {
      isValid = false;
      contactInfoErrors.phoneNumber = {
        state: true,
        message: "شماره همراه وارد شده نادرست است",
      };
    }
  }

  return {
    passengerErrors: passengerErrors,
    contactInfoErrors: contactInfoErrors,
    isValid: isValid,
  };
};
