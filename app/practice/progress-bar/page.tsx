"use client";

import React, { useEffect, useState } from "react";

// components
import SecondHeading from "@/src/components/heading/SecondHeading";
import { TopHeading } from "@/src/components/heading/TopHeading";
import CustomBtn from "@/src/components/button/CustomBtn";

const ProgressBar = () => {
  const [progressValue, setProgressValue] = useState<number>(0);

  const startProgressBar = (): void => {
    const timer = setInterval(() => {
      setProgressValue((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return prev;
        }
        if (prev < 60) return prev + 1;
        return prev + 5;
      });
    }, 100);
  };

  useEffect(() => {
    startProgressBar();
  }, []);

  return (
    <>
      <TopHeading text="ProgressBar" />
      {/* <SecondHeading text="Enter Hours, Minutes and Seconds and click on start button. You can't enter a number greater than 59 in seconds and minutes." /> */}

      {/* these role and aria is a part of Web accessibility */}
      <div>
        <div className="w-80 md:w-96 h-7 bg-slate-200 rounded-full overflow-hidden relative ">
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progressValue}
            className="w-full h-full bg-green-600 transition-all duration-100 ease-linear"
            style={{
              transform: `scaleX(${progressValue / 100})`,
              transformOrigin: "left",
            }}
          />
          <span
            className="absolute top-1/2 left1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ color: progressValue < 54 ? "black" : "white" }}
          >
            {progressValue}%
          </span>
        </div>

        <div className="mt-1">
          <span className="text-lg">
            {progressValue === 100 ? "Completed!" : "Loading..."}
          </span>
        </div>

        {/* button */}
        {/* <div className="mt-3 flex justify-center">
          <CustomBtn
            text="Start"
            padding="p-1 md:p-0.5"
            borderRadius="rounded-full"
            fontSize="text-md md:text-lg"
            width="w-36"
            onClick={startProgressBar}
          />
        </div> */}
      </div>
    </>
  );
};

export default ProgressBar;
