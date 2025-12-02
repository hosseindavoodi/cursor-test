import { VisaConfirmPassengers, VisaPassengerAssets } from "@sana/types/order/visa";
import { calculateAge } from "@sana/utilities/age.calculator";
import { isDateExpired } from "@sana/utilities/is.expired";
export const validatePassengers = (
  passengers: VisaConfirmPassengers[],
  assets: VisaPassengerAssets[]
): {
  validations: Partial<Record<keyof VisaConfirmPassengers, { message: string; error: boolean }>>[];
  assetValidations: {
    type: string;
    passengerId: string;
    error: { message: string; error: boolean };
  }[];
  isValid: boolean;
} => {
  let isValid = true;
  let onlyEnglishCharacterRegex = /^[a-zA-Z]*$/;
  let onlyNumbersRegex = /^[0-9]*$/;
  let phoneNumberRegex = /^$|^[0-9]{10,11}$/;

  let validations: Partial<Record<keyof VisaConfirmPassengers, { message: string; error: boolean }>>[] = passengers.map((p) => ({
    birthdate: { error: false, message: "" },
    firstName: { error: false, message: "" },
    lastName: { error: false, message: "" },
    gender: { error: false, message: "" },
    nationalityCode: { error: false, message: "" },
    passportNumber: { error: false, message: "" },
    phone: { error: false, message: "" },
  }));

  let assetValidations: {
    type: string;
    passengerId: string;
    error: { message: string; error: boolean };
  }[] = assets.map((asset) => ({
    type: asset.type,
    passengerId: asset.visaPassengerId,
    error: { error: asset.file ? false : true, message: "انتخاب مدرک الزامی است" },
  }));

  isValid = !assetValidations.find((validation) => validation.error.error);

  passengers.forEach((passenger, index) => {
    if (!passenger.firstName) {
      validations[index]!.firstName = {
        error: true,
        message: "نام مسافر الزامی است",
      };
      isValid = false;
    } else {
      if (!onlyEnglishCharacterRegex.test(passenger.firstName)) {
        validations[index]!.firstName = {
          error: true,
          message: "فقط حروف انگلیسی بدون فاصله مجاز است",
        };
        isValid = false;
      }
    }

    if (!passenger.lastName) {
      validations[index]!.lastName = {
        error: true,
        message: "نام خانوادگی مسافر الزامی است",
      };
      isValid = false;
    } else {
      if (!onlyEnglishCharacterRegex.test(passenger.lastName)) {
        validations[index]!.lastName = {
          error: true,
          message: "فقط حروف انگلیسی بدون فاصله مجاز است",
        };
        isValid = false;
      }
    }

    if (!passenger.gender) {
      validations[index]!.gender = {
        error: true,
        message: "جنسیت مسافر الزامی است",
      };
      isValid = false;
    }

    if (!passenger.nationalityCode) {
      validations[index]!.nationalityCode = {
        error: true,
        message: "ملیت الزامی است",
      };
      isValid = false;
    }

    if (!passenger.phone) {
      validations[index]!.phone = {
        error: true,
        message: "شماره همراه مسافر الزامی است",
      };
      isValid = false;
    } else {
      if (!onlyNumbersRegex.test(passenger.phone)) {
        validations[index]!.phone = {
          error: true,
          message: "شماره همراه فقط شامل اعداد می باشد",
        };
        isValid = false;
      }

      if (!phoneNumberRegex.test(passenger.phone)) {
        validations[index]!.phone = {
          error: true,
          message: "شماره همراه وارد شده نادرست است",
        };
        isValid = false;
      }
    }

    if (!passenger.passportNumber) {
      validations[index]!.passportNumber = {
        error: true,
        message: "شماره پاسپورت الزامی است",
      };
      isValid = false;
    }

    if (!passenger.birthdate) {
      validations[index]!.birthdate = {
        error: true,
        message: "تاریخ تولد الزامی است",
      };
      isValid = false;
    } else {
      const age = calculateAge(passenger.birthdate);
      console.log(age);
      if (age < passenger.group.startAge || age >= passenger.group.endAge) {
        validations[index]!.birthdate = {
          error: true,
          message: `سن مسافر باید بین ${passenger.group.startAge} تا ${passenger.group.endAge} باشد`,
        };
        isValid = false;
      }
    }

    if (!passenger.passportExpireDate) {
      validations[index]!.passportExpireDate = {
        error: true,
        message: "تاریخ انقضای پاسپورت الزامی است",
      };
      isValid = false;
    } else {
      const isExpired = isDateExpired(passenger.passportExpireDate);

      if (isExpired) {
        validations[index]!.passportExpireDate = {
          error: true,
          message: "پاسپورت مسافر منقضی شده است",
        };
        isValid = false;
      }
    }
  });

  return {
    validations: validations,
    assetValidations: assetValidations,
    isValid: isValid,
  };
};
