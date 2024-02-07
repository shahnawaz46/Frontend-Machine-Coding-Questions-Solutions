import React from "react";

// components
import { childrenType } from "@/src/interface/common";
import GoBack from "@/src/components/button/GoBack";

const Layout = ({ children }: childrenType) => {
  return (
    <div className="size-full p-3">
      <GoBack />
      <div className="w-full min-h-[calc(100%-32px)] pt-3 flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
