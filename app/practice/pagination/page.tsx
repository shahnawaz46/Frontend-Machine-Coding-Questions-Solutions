"use client";

import React, { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

// components
import { TopHeading } from "@/src/components/heading/TopHeading";
import SecondHeading from "@/src/components/heading/SecondHeading";

const totalPages = 15;
const totalPaginationShow = 4;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <>
      <TopHeading text="Pagination" />
      <SecondHeading text="Here i am implementing modern pagination. If you want to know about logic then you can read comments that i provided in the code(because this is a dynamic code you can mention how many Pagination number you want to show like here i am showing 4 (1,2,3 and 10) with (...) in the middle and what will be the total Pages like here 10)." />
      <div className="mt-3">
        <span>Current Page is {currentPage}</span>

        <div className="flex items-center gap-3 mt-2">
          {/* back button for move previous */}
          <button
            className={`pagination_box ${
              currentPage === 1
                ? "text-[#e5e7eb] hover:bg-gray-100"
                : "text-black"
            }`}
            onClick={() =>
              setCurrentPage((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            <IoChevronBackOutline />
          </button>

          {/* rendering button for pagination */}
          {[...new Array(totalPages)].map((_, i) =>
            //  i am showing pagination with ... in the middle so we don't need to show all the pages
            // for example, if currentPage number is 4 and totalPaginationShow is 3 then i am showing 4,5, ... and 10 (based on totalPaginationShow)

            // first condition -> responsible for show last numbers(depend on totalPaginationShow), if totalPaginationShow number is 4 and totalPages is 10 and user reached at number 7 then i am not showing (...) instead of this i am showing last 4 number i mean 7,8,9,10 (because totalPaginationShow number is 4).

            // second condition -> this condition is for showing starting numbers (based on current page) like if totalPaginationShow numer is 4 and currentPage is 1 then i am showing only 1,2,3 because last number will be always visibile that's why i am showing totalPaginationShow - 1 in the starting.
            // ex: totalPages = 10
            // totalPaginationShow = 4
            // currentPage = 3
            // then i am showing 3,4,5, ..., 10

            // third condition -> this condition is for show last number

            (totalPages - (i + 1) < totalPaginationShow &&
              totalPages - currentPage < totalPaginationShow) ||
            (totalPaginationShow <= 2
              ? currentPage === i + 1
              : currentPage <= i + 1 &&
                currentPage + (totalPaginationShow - 2) >= i + 1) ||
            totalPages === i + 1 ? (
              <button
                key={i + 1}
                className={`pagination_box ${
                  currentPage === i + 1
                    ? "text-[#4200ff] border-[#4200ff]"
                    : "text-black"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ) : // fourth condition -> here i am showing ... until satisfy the below condition
            // ex totalPages = 10,
            // totalPaginationShow = 4
            // currentPage = 3
            // i = 6
            // 10 - 3 > 4 && (10 + 3) / 2 === 6 (for getting middle of the number because i am showing ... only when the there is any number present in the middle)
            // because when condition become false that's mean user already satisfy the first condition(check first condition)
            totalPages - currentPage >= totalPaginationShow &&
              parseInt(
                (
                  (totalPages +
                    (totalPaginationShow <= 2
                      ? currentPage
                      : currentPage + (totalPaginationShow - 2))) /
                  2
                ).toFixed()
              ) ===
                i + 1 ? (
              <button key={i + 1} className={`pagination_box `}>
                ...
              </button>
            ) : null
          )}

          {/* next button for move forward */}
          <button
            className={`pagination_box ${
              currentPage === totalPages
                ? "text-[#e5e7eb] hover:bg-gray-100"
                : "text-black"
            }`}
            onClick={() =>
              setCurrentPage((prev) => (prev === totalPages ? prev : prev + 1))
            }
          >
            <IoChevronForwardOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
