"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Progress } from "@sana/ui/components/progress";
import { Button } from "./button";

interface TimerBarProps {
  durationSeconds?: number;
}

export default function TimerBar({ durationSeconds = 120 }: TimerBarProps) {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);
  const [progressValue, setProgressValue] = useState(100); // درصد پیشرفت

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = Math.max(durationSeconds - elapsed, 0);
      setTimeLeft(remaining);

      const percent = (remaining / durationSeconds) * 100;
      setProgressValue(percent);

      if (remaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [durationSeconds]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      {progressValue === 0 ? (
        <div className="flex justify-center">
          <Button variant="link" className=" cursor-pointer text-primary-300">
            ارسال مجدد کد تایید
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-2 w-full mt-4">
          <div className="text-sm w-12 text-right font-mono">
            {`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`}
          </div>
          <Progress value={progressValue} className="flex-1 h-1" />
        </div>
      )}
    </>
  );
}
