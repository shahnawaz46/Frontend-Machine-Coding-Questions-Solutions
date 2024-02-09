import React from "react";

interface props {
  text: string;
  fontSize?: string;
  bgColor?: string;
  padding?: string;
  borderRadius?: string;
  width?: string;
  onClick?: () => void;
}

const CustomBtn = ({
  text,
  bgColor = "bg-black",
  padding = "py-2 px-6",
  fontSize = "text-base",
  borderRadius = "rounded-sm",
  width = "w-auto",
  onClick,
}: props) => {
  return (
    <div
      className={`text-white cursor-pointer ${bgColor} ${padding} ${fontSize} ${borderRadius} ${width}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default CustomBtn;
