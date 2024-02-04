import Link from "next/link";
import React from "react";

const GoBack = () => {
  return (
    <Link href={"/"}>
      <button className="bg-blue-400 text-white py-1 px-8 rounded-lg">
        Home
      </button>
    </Link>
  );
};

export default GoBack;
