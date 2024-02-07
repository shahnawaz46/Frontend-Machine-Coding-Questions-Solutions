import React from "react";

interface props {
  children: React.ReactNode;
  text: string;
}

const ToolTip = ({ children, text }: props) => {
  return (
    <div className="relative group">
      {children}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-sm py-1 px-2.5 rounded-md shadow-xl transition-all duration-300 invisible opacity-0 group-hover:visible group-hover:opacity-100">
        {text}
      </span>
    </div>
  );
};

export default ToolTip;
