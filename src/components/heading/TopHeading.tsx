import React from "react";

export const TopHeading = ({ text }: { text: string }) => {
  return <h1 className="text-xl md:text-2xl font-semibold mb-2">{text}</h1>;
};
