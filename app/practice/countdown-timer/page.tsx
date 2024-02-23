"use client";

import React, { useRef, useState } from "react";

// components
import { TopHeading } from "@/src/components/heading/TopHeading";
import SecondHeading from "@/src/components/heading/SecondHeading";
import CustomBtn from "@/src/components/button/CustomBtn";

interface timeObj {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer = () => {
  const [time, setTime] = useState<timeObj>({});
  const timerRef = useRef<null | NodeJS.Timeout>(null);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const enterTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;

    if (timerStarted) return;

    if ((key === "seconds" || key === "minutes") && parseInt(value) > 59) {
      setError(
        "seconds and minutes can range from 0 to 59, so please enter the correct time."
      );
      return;
    }

    setTime((prev) => ({ ...prev, [key]: parseInt(value) }));
  };

  const startCountDown = () => {
    if (!time.hours && !time.minutes && !time.seconds) return;
    setTimerStarted(true);
    setError("");

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTime((prev) => {
        if (!prev.hours && !prev.minutes && !prev.seconds) {
          clearInterval(timerRef.current as NodeJS.Timeout);
          setTimerStarted(false);
          return {};
        }
        if (prev.seconds && prev.seconds > 0)
          return {
            ...prev,
            seconds:
              prev.seconds > 10 ? prev.seconds - 1 : `0${prev.seconds - 1}`,
          };

        if (prev.minutes && prev.minutes > 0)
          return {
            ...prev,
            minutes:
              prev.minutes > 10 ? prev.minutes - 1 : `0${prev.minutes - 1}`,
            seconds: 59,
          };

        if (prev.hours && prev.hours > 0)
          return {
            ...prev,
            hours: prev.hours > 10 ? prev.hours - 1 : `0${prev.hours - 1}`,
            minutes: 59,
            seconds: 59,
          };

        return {};
      });
    }, 1000);
  };

  const pauseCountDown = (): void => {
    clearInterval(timerRef.current as NodeJS.Timeout);
    setTimerStarted(false);
  };

  const resetCountDown = (): void => {
    clearInterval(timerRef.current as NodeJS.Timeout);
    setTime({});
    setTimerStarted(false);
    setError("");
  };

  return (
    <>
      <TopHeading text="Countdown Timer" />
      <SecondHeading text="Enter Hours, Minutes and Seconds and click on start button. You can't enter a number greater than 59 in seconds and minutes." />

      {/* time */}
      <div className="mt-3 flex items-center gap-3">
        {/* hours */}
        <div className="bg-black rounded-md w-20 md:w-28 h-[75px] md:h-20 flex flex-col items-center justify-center p-2 md:p-3">
          <input
            type="number"
            placeholder="00"
            name="hours"
            value={time?.hours || ""}
            onChange={enterTime}
            className="bg-inherit text-[#8973fd] w-full text-2xl md:text-3xl outline-none border-none text-center"
          />
          <span className="text-[#798EB0] text-base md:text-lg">Hours</span>
        </div>

        {/* minutes */}
        <div className="bg-black rounded-md w-20 md:w-28 h-[75px] md:h-20 flex flex-col items-center justify-center p-2 md:p-3">
          <input
            type="number"
            // onInput={()=>  this.value=this.value.slice(0,this.maxLength)}
            placeholder="00"
            name="minutes"
            value={time?.minutes || ""}
            onChange={enterTime}
            className="bg-inherit text-[#8973fd] w-full text-2xl md:text-3xl outline-none border-none text-center"
          />
          <span className="text-[#798EB0] text-base md:text-lg">Minutes</span>
        </div>

        {/* seconds */}
        <div className="bg-black rounded-md w-20 md:w-28 h-[75px] md:h-20 flex flex-col items-center justify-center p-2 md:p-3">
          <input
            type="number"
            placeholder="00"
            name="seconds"
            value={time?.seconds || ""}
            onChange={enterTime}
            className="bg-inherit text-[#8973fd] w-full text-2xl md:text-3xl outline-none border-none text-center"
          />
          <span className="text-[#798EB0] text-base md:text-lg">Seconds</span>
        </div>
      </div>

      {/* button */}
      <div className="mt-3 flex items-center gap-3">
        <CustomBtn
          text={timerStarted ? "Stop" : "Start"}
          padding="py-1.5 px-10 md:px-16"
          fontSize="text-lg"
          bgColor="bg-green-700"
          onClick={timerStarted ? pauseCountDown : startCountDown}
        />
        <CustomBtn
          text="Reset"
          padding="py-1.5 px-10 md:px-16"
          fontSize="text-lg"
          bgColor="bg-red-700"
          onClick={resetCountDown}
        />
      </div>

      <span className="fixed bottom-3 text-red-700 text-lg animate-headShake">
        {error}
      </span>
    </>
  );
};

export default CountdownTimer;
