import React from "react";

interface props {
  text: string;
  fontSize?: string;
  bgColor?: string;
  padding?: string;
  borderRadius?: string;
  onClick?: () => void;
}

const CustomBtn = ({
  text,
  bgColor = "bg-black",
  padding = "py-2 px-6",
  fontSize = "text-base",
  borderRadius = "round-sm",
  onClick,
}: props) => {
  return (
    <div
      className={`text-white rounded-md cursor-pointer ${bgColor} ${padding} ${fontSize} ${borderRadius}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default CustomBtn;
