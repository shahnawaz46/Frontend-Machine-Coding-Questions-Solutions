"use client";

import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { ImUser } from "react-icons/im";
import { FaFile, FaMessage } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { PiStudentFill, PiStudentLight } from "react-icons/pi";
import { BiSolidInstitution } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";
import { MdHomeFilled } from "react-icons/md";

export const sideBarItems = [
  {
    id: 0,
    name: "Home",
    icon: <MdHomeFilled className="text-[22px]" />,
    link: "/",
    children: [],
    canExpend: false,
  },
  {
    id: 1,
    name: "Dashboard",
    icon: <MdSpaceDashboard className="text-[22px]" />,
    link: "/dynamic-sidebar-navbar/dashboard",
    children: [],
    canExpend: false,
  },
  {
    id: 2,
    name: "Profile",
    icon: <ImUser className="text-[22px]" />,
    link: "/dynamic-sidebar-navbar/profile",
    canExpend: true,
    children: [
      {
        id: 21,
        parentId: 2,
        name: "Student profile",
        icon: <PiStudentFill className="text-[22px]" />,
        link: "/dynamic-sidebar-navbar/profile",
        canExpend: true,
        children: [
          {
            id: 211,
            parentId: 21,
            name: "Student Sub profile",
            icon: <PiStudentLight className="text-[22px]" />,
            link: "/dynamic-sidebar-navbar/profile/student/sub-profile",
            canExpend: false,
            children: [],
          },
        ],
      },
      {
        id: 22,
        parentId: 2,
        name: "Institute profile",
        icon: <BiSolidInstitution className="text-[22px]" />,
        link: "/dynamic-sidebar-navbar/profile/institute",
        canExpend: false,
        children: [],
      },
    ],
  },
  {
    id: 3,
    name: "Portfolio",
    icon: <FaFile className="text-[22px]" />,
    link: "/dynamic-sidebar-navbar/portfolio",
    canExpend: false,
    children: [],
  },
  {
    id: 4,
    name: "Messages",
    icon: <FaMessage className="text-[22px]" />,
    link: "/dynamic-sidebar-navbar/messages",
    canExpend: true,
    children: [
      {
        id: 41,
        parentId: 4,
        name: "Student Messages",
        icon: <PiStudentFill className="text-[22px]" />,
        link: "/dynamic-sidebar-navbar/messages/student",
        canExpend: false,
        children: [],
      },
      {
        id: 42,
        parentId: 4,
        name: "Institute Messages",
        icon: <BiSolidInstitution className="text-[22px]" />,
        link: "",
        canExpend: true,
        children: [
          {
            id: 421,
            parentId: 42,
            name: "Institute Sub Messages",
            icon: <BiSolidInstitution className="text-[22px]" />,
            link: "/dynamic-sidebar-navbar/messages/institute/sub-messages",
            canExpend: false,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Settings",
    icon: <IoSettingsSharp className="text-[22px]" />,
    link: "/dynamic-sidebar-navbar/settings",
    canExpend: false,
    children: [],
  },
];

export interface ExpandStatus {
  [key: number]: boolean;
}

export interface sideBarType {
  id: number;
  parentId?: number;
  name: string;
  icon: React.JSX.Element;
  link: string;
  canExpend: boolean;
  children: sideBarType[] | [];
}

export const getSideBarItem = (
  sidebar: sideBarType[],
  isExpend: ExpandStatus
): sideBarType[] => {
  let showItems: sideBarType[] = [];

  for (let i = 0; i < sidebar.length; i++) {
    showItems.push(sidebar[i]);
    if (isExpend?.[sidebar[i].id]) {
      const subItem = getSideBarItem(sidebar[i]?.children, isExpend);
      showItems.push(...subItem);
    }
    // if (sidebar[i].canExpend) {
    //   const subItem = getSideBarItem(sidebar[i]?.children, isExpend);
    //   showItems.push(...subItem);
    // }
  }

  return showItems;
};

function Sidebar() {
  const pathname = usePathname();
  const [isExpend, setIsExpend] = useState<ExpandStatus>({});

  return (
    <div className="w-[340px] bg-black p-2 hidden md:block">
      {getSideBarItem(sideBarItems, isExpend).map((item) => (
        // <div
        //   key={item.id}
        //   className={`flex items-center gap-3 cursor-pointer  ${
        //     pathname === item.link ? "bg-[#312f2f] text-white" : "bg-white"
        //   }  rounded-3xl px-3  ease-linear duration-300 relative ${
        //     (item?.parentId && isExpend?.[item?.parentId]) ||
        //     item?.parentId === undefined
        //       ? "py-1.5 z-10 mt-2"
        //       : "-translate-y-1 opacity-0 max-h-0"
        //   }`}
        //   onClick={() =>
        //     item.canExpend &&
        //     setIsExpend((prev) => ({ ...prev, [item.id]: !prev?.[item.id] }))
        //   }
        // >
        <div
          key={item.id}
          className={`flex items-center gap-3 cursor-pointer  ${
            pathname === item.link ? "bg-[#312f2f] text-white" : "bg-white"
          }  rounded-3xl px-3 py-1.5 mt-2`}
          onClick={() =>
            item.canExpend &&
            setIsExpend((prev) => ({ ...prev, [item.id]: !prev?.[item.id] }))
          }
        >
          <div>{item.icon}</div>
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
  );
}

export default Sidebar;
