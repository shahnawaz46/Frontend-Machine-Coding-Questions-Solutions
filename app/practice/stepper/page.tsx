"use client";

import React, { useState } from "react";

// components
import SecondHeading from "@/src/components/heading/SecondHeading";
import { TopHeading } from "@/src/components/heading/TopHeading";
import Step from "@/src/components/stepper/Step";
import CustomBtn from "@/src/components/button/CustomBtn";

const stepData = [
  {
    title: "Personal Info",
  },
  { title: "Education Details" },
  { title: "Review" },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <TopHeading text="Stepper" />
      <SecondHeading text="" />

      <div className="mt-3">
        <div className="flex gap-2">
          {/* if you don't want to show title just make it empty */}
          <Step data={stepData} currentStep={currentStep} />
        </div>

        {/* bottom part for show current active stepper title and button */}
        <div className="mt-20 flex flex-col items-center">
          <p className="md:text-lg mb-1">
            {stepData.map(
              (item, index) => currentStep === index + 1 && item.title
            )}
          </p>
          {currentStep <= stepData.length && (
            <CustomBtn
              text="Next"
              width="w-36"
              padding="py-1.5"
              borderRadius="rounded-full"
              onClick={() => setCurrentStep((prev) => prev + 1)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Stepper;
