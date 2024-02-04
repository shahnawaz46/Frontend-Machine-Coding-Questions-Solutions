"use client";

import GoBack from "@/src/components/button/GoBack";
import React, { useRef, useState } from "react";

const gridLength = 9;
const hiddenBox = [4];

const GridLight = () => {
  const [item, setItem] = useState<number[]>([]);
  const removingProcessRef = useRef<boolean>(false);

  const makeItGreen = (index: number) => {
    // if box is hidden or item is already present or clearing interval is running then i am avoiding to push item inside array
    if (
      hiddenBox.includes(index) ||
      item.includes(index) ||
      removingProcessRef.current
    )
      return;

    const newItem = [...item, index];
    setItem(newItem);

    // if item array filled then calling clearGridItem() function for remove item from array
    if (newItem.length === gridLength - hiddenBox.length) {
      removingProcessRef.current = true;
      clearGridItem();
    }
  };

  const clearGridItem = () => {
    const time = setInterval(() => {
      setItem((prev) => {
        if (prev.length === 1) {
          clearInterval(time);
          removingProcessRef.current = false;
          return [];
        }
        return prev.slice(0, prev.length - 1);
      });
    }, 300);
  };

  return (
    <div className="w-full h-full p-3">
      <GoBack />
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-center">
        <h1 className="text-xl md:text-2xl font-semibold mb-2">GridLights</h1>
        <p className="mb-1 md:text-lg w-full md:w-9/12">
          Build a 3x3 grid of light cells (omitting the center cell) where you
          can click on the cells to activate them, turning them green. When all
          the cells have been activated, they will be deactivated one by one in
          the reverse order they were activated with a 300ms interval in
          between.
        </p>

        <div className="grid grid-cols-3 gap-3 mt-3 bg-white p-4 rounded-md">
          {[...new Array(gridLength)].map((_, index) => (
            <div
              key={index}
              className={`w-16 h-16 ${
                !hiddenBox.includes(index) && "border border-black"
              } rounded-md ${item.includes(index) && "bg-green-800"}`}
              onClick={() => makeItGreen(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridLight;
