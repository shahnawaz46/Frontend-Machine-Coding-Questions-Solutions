"use client";

import React, { useState } from "react";
import { ExpandStatus, getSideBarItem, sideBarItems } from "./Sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isExpend, setIsExpend] = useState<ExpandStatus>({});
  const [showMenuBar, setShowMenuBar] = useState(false);

  return (
    <div className="h-16 bg-black text-white flex items-center justify-between px-3 md:px-8">
      <h1 className="text-lg md:text-2xl">Dynamic Navbar and Sidebar</h1>

      <div className="relative">
        {/* avatar */}
        <div className="overflow-hidden w-12 h-12">
          <Image
            src={"/profile-pic.avif"}
            fill
            alt="not-fount"
            style={{ border: "2px solid white" }}
            className="object-cover rounded-full"
            onClick={() => setShowMenuBar((prev) => !prev)}
          />
        </div>
      </div>

      {/* menu items */}

      <div
        className={`transition-all duration-500 fixed top-[66px] ${
          showMenuBar ? "right-3 md:right-8" : "-right-80"
        } h-auto w-72 bg-black rounded-lg py-2`}
      >
        {getSideBarItem(sideBarItems, isExpend).map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 cursor-pointer text-white
              px-4 py-2 border-b-[1px] last:border-b-0`}
            onClick={() =>
              item.canExpend &&
              setIsExpend((prev) => ({
                ...prev,
                [item.id]: !prev?.[item.id],
              }))
            }
          >
            {/* <div>{item.icon}</div> */}
            {item.canExpend ? (
              <div className="text-xl flex-1"> {item.name}</div>
            ) : (
              <Link className="text-xl flex-1" href={item?.link}>
                {item.name}
              </Link>
            )}
            {pathname === item.link ? (
              <BiSolidRightArrow />
            ) : isExpend?.[item.id] ? (
              <BiSolidDownArrow />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
