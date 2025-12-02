import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@sana/ui/components/input-otp";
import { useAuthStore } from "../../_store/auth.store";
import { useEffect, useState } from "react";
import { Progress } from "@sana/ui/components/progress";
import { time } from "console";
import { Button } from "@sana/ui/components/button";
import { getServices } from "../../../lib/services";
import { AuthLoginResponse } from "@sana/types/auth/auth";
import { getSecondsUntil } from "@sana/utilities/get.seconds.until";
import { toast } from "sonner";
import { SignInAction } from "../../_api/auth/auth.actions";
function OTP() {
  const services = getServices();
  const { phoneNumber, otpChannel, timer, setStore, validForSeconds, email, otp, verificationId } = useAuthStore();
  const { mutateAsync: sendOtpHandler } = services.auth.useLogin({});
  const { mutateAsync: verifyOtpHandler, isError } = services.auth.useAuthVerify({});

  useEffect(() => {
    const IntervalKey = setInterval(() => {
      setStore((prev) => {
        let currentTimer = prev.timer;

        if (currentTimer > 0) {
          currentTimer--;

          return { ...prev, timer: currentTimer };
        } else {
          currentTimer = 0;
          clearInterval(IntervalKey);
          return { ...prev, timer: 0 };
        }
      });
    }, 1000);

    return () => {
      clearInterval(IntervalKey);
    };
  }, [validForSeconds]);

  const resendOtpHandler = async () => {
    if (otpChannel === "sms") {
      const response = await sendOtpHandler({ otpChannel: "sms", phoneNumber: phoneNumber });

      setStore({
        verificationId: response.verificationId,
        timer: getSecondsUntil(response.validUntil),
        validForSeconds: getSecondsUntil(response.validUntil),
      });

      toast.success("ارسال کد یکبار مصرف با موفقیت انجام شد");
    }
    if (otpChannel === "email") {
      const response = await sendOtpHandler({ otpChannel: "email", email: email });

      setStore({
        verificationId: response.verificationId,
        timer: getSecondsUntil(response.validUntil),
        validForSeconds: getSecondsUntil(response.validUntil),
      });

      toast.success("ارسال کد یکبار مصرف با موفقیت انجام شد");
    }
  };

  const verifyOtp = async () => {
    const access = await verifyOtpHandler({
      code: otp,
      verificationId: verificationId,
    });

    setStore({ openAuthDialog: false });
    await SignInAction({ accessToken: access.access_token, refreshToken: access.refresh_token });
    toast.success("ورود شما با موفقیت انجام شد");
  };

  useEffect(() => {
    if (otp.length === 6) {
      verifyOtp();
    }
  }, [otp]);

  return (
    <div className="flex w-full justify-center gap-y-[32px] items-center flex-col ">
      <div className="flex flex-col gap-y-[16px] justify-center items-center">
        <p className="text-[18px] font-semibold">دریافت رمز یکبارمصرف</p>
        <div className="flex items-center gap-x-2 ">
          {otpChannel === "sms" && (
            <>
              <p className="text-gray-600">
                کد به شماره{" "}
                <span
                  style={{ direction: "ltr" }}
                  className="text-gray-900 font-medium"
                >
                  {phoneNumber.slice(1)}+
                </span>{" "}
                ارسال شد
              </p>
              <Button
                onClick={() => toast.success("ارسال کد یکبار مصرف با موفقیت انجام شد")}
                variant={"link"}
                className="underline p-0"
              >
                تغییر شماره
              </Button>
            </>
          )}
          {otpChannel === "email" && <></>}
        </div>
      </div>

      <div className="flex flex-col gap-y-[16px]">
        <InputOTP
          onChange={(otp) => setStore({ otp: otp })}
          value={otp}
          style={{ direction: "ltr" }}
          maxLength={6}
          autoFocus
        >
          <InputOTPGroup
            className="gap-x-[8px]"
            dir="ltr"
          >
            <InputOTPSlot
              aria-invalid={isError ? "true" : "false"}
              index={0}
            />
            <InputOTPSlot
              aria-invalid={isError ? "true" : "false"}
              index={1}
            />
            <InputOTPSlot
              aria-invalid={isError ? "true" : "false"}
              index={2}
            />
            <InputOTPSlot
              aria-invalid={isError ? "true" : "false"}
              index={3}
            />
            <InputOTPSlot
              aria-invalid={isError ? "true" : "false"}
              index={4}
            />
            <InputOTPSlot
              aria-invalid={isError ? "true" : "false"}
              index={5}
            />
          </InputOTPGroup>
        </InputOTP>
        <div className="flex items-center gap-x-2">
          {timer > 0 ? (
            <>
              <p className="w-[40px]">{formatSeconds(timer)}</p>
              <Progress
                value={(timer / validForSeconds) * 100}
                className="w-full"
              />
            </>
          ) : (
            <div className="w-full flex justify-center items-center">
              <Button
                onClick={() => resendOtpHandler()}
                className="text-[16px] underline"
                variant={"link"}
              >
                ارسال مجدد کد
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-[12px]">
        <Button
          onClick={() => verifyOtp()}
          variant={"primary"}
          className="h-[54px] rounded-full"
        >
          ورود
        </Button>

        <Button variant={"link"}>در دریافت رمز مشکل دارم</Button>
      </div>
    </div>
  );
}

export default OTP;

function formatSeconds(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}
