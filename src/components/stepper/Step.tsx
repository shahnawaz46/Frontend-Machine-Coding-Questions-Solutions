import React from "react";
import { MdOutlineDone } from "react-icons/md";

interface props {
  data: { title?: string }[];
  currentStep: number;
}

const Step = ({ data, currentStep }: props) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="relative">
            <div
              className={`w-10 h-10 rounded-full 
              ${
                currentStep > index + 1
                  ? "bg-green-500"
                  : currentStep === index + 1
                  ? "bg-[#60A5FA]"
                  : "bg-[#a9cdf9]"
              }
                 text-white flex items-center justify-center`}
            >
              <span>
                {currentStep > index + 1 ? <MdOutlineDone /> : index + 1}
              </span>
            </div>
            {item.title && (
              <h2
                className={`absolute top-12 left-1/2 -translate-x-1/2 leading-tight md:leading-tight md:text-lg ${
                  currentStep > index + 1 || currentStep === index + 1
                    ? "text-black"
                    : "text-[#56575b]"
                }`}
              >
                {item.title}
              </h2>
            )}
          </div>

          {index < data.length - 1 && (
            <div className="w-16 md:w-32 h-1.5 bg-[#a9cdf9] rounded-md overflow-hidden">
              <div
                className={`h-full  origin-left ${
                  currentStep > index + 1 ? "w-full" : "w-0"
                } bg-green-500 transition-all duration-500`}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Step;
