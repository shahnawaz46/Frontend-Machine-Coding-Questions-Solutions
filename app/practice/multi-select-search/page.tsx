"use client";

import React, { useRef, useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

// components
import { TopHeading } from "@/src/components/heading/TopHeading";
import SecondHeading from "@/src/components/heading/SecondHeading";

interface chipData {
  id?: number;
  value?: string;
}

interface searchState {
  status: string;
  data: chipData[];
}

const searchData: chipData[] = [
  { id: 1, value: "html" },
  { id: 2, value: "css" },
  { id: 3, value: "javascript" },
  { id: 4, value: "reactjs" },
  { id: 5, value: "nextjs" },
  { id: 6, value: "angular" },
  { id: 7, value: "web socket" },
  { id: 8, value: "tailwindcss" },
  { id: 9, value: "MUI" },
  { id: 10, value: "nodejs" },
  { id: 11, value: "PWA" },
  { id: 12, value: "API" },
  { id: 13, value: "python" },
  { id: 14, value: "django" },
  { id: 15, value: "c" },
  { id: 16, value: "c++" },
  { id: 17, value: "java" },
  { id: 18, value: "react native" },
  { id: 19, value: "flutter" },
];

const MultiSelectSearch = () => {
  const [chips, setChips] = useState<chipData[]>([]);
  const [searchResults, setSearchResults] = useState<searchState>({
    status: "idle",
    data: [],
  });
  const inputRef = useRef<HTMLInputElement | null>(null);

  // chipIdRef of set data type to store id of selected chip so i don't have to show same data in suggestion
  const chipIdRef = useRef<Set<number | undefined>>(new Set());

  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const getSearchResult = (value: string): void | null => {
    if (value === "") {
      setSearchResults({ status: "idle", data: [] });
      return null;
    }

    const result = searchData.filter((item) =>
      item.value?.toUpperCase()?.includes(value.toUpperCase())
    );

    setSearchResults({ status: "success", data: result });
    setActiveSuggestion(0);
  };

  // adding chip after select it
  const addChips = (chip: chipData): void => {
    setChips((prev) => [...prev, chip]);

    chipIdRef.current.add(chip.id);

    setSearchResults((prev) => ({
      ...prev,
      data: prev.data.filter((item) => item.id !== chip.id),
    }));

    // after adding chip i am removing value from input and making it focus
    if (inputRef.current !== null) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  // removing chip after delete it
  const removeChip = (id: number | undefined): void => {
    setChips((prev) => prev.filter((item) => item.id !== id));

    chipIdRef.current.delete(id);

    chipIdRef.current.size === 0 &&
      setSearchResults({ status: "idle", data: [] });
  };

  // handleMoveAndSelect function for detect keyboard key(for move and select suggestions)
  const handleMoveAndSelect = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void | null => {
    if (searchResults.data.length === 0) return null;
    if (
      e.key === "ArrowDown" &&
      activeSuggestion !== searchResults.data.length - 1
    ) {
      setActiveSuggestion((prev) => prev + 1);
    } else if (e.key === "ArrowUp" && activeSuggestion > 0) {
      setActiveSuggestion((prev) => prev - 1);
    } else if (e.key === "Enter") {
      addChips(searchResults.data[activeSuggestion]);

      // If the user presses Enter on a suggestion, and that suggestion is not the last one, I move the active suggestion forward otherwise, move the active suggestion to the top(1st).
      activeSuggestion === searchResults.data.length - 1 &&
        setActiveSuggestion(0);
    }
  };

  return (
    <>
      <TopHeading text="Multi Select Search" />
      <SecondHeading text="You can search and move option/suggestion based on KeyUp and KeyDown arrow and you can select after hit Enter." />

      <div className="mt-3">
        <div>
          <div className="w-80 flex items-center flex-wrap gap-1 bg-white py-2 px-2 rounded-lg shadow-md">
            {chips.map((item) => (
              <div
                key={item.id}
                className="bg-green-400 text-white pl-3 pr-2 py-0.5 rounded-full flex items-center gap-1"
              >
                <span>{item.value}</span>
                <IoCloseCircleSharp
                  className="text-xl cursor-pointer"
                  onClick={() => removeChip(item.id)}
                />
              </div>
            ))}
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className="border-none outline-none bg-inherit w-40 px-1"
              onChange={(e) => getSearchResult(e.target.value)}
              onKeyDown={handleMoveAndSelect}
              // onBlur={() => setSearchResults({ status: "idle", data: [] })}
            />
          </div>

          {/* when user will search then only show selector/dropdown */}
          {searchResults.status !== "idle" && (
            <ul className="mt-1 bg-white shadow-md rounded-lg flex flex-col max-h-56 overflow-y-scroll">
              {searchResults.data.length > 0 ? (
                searchResults.data.map(
                  (item, index) =>
                    !chipIdRef.current.has(item.id) && (
                      <li
                        key={item.id}
                        className={`${
                          activeSuggestion === index && "bg-yellow-50"
                        } hover:bg-yellow-50 w-full text-left cursor-pointer py-1.5 px-3 border-b-2 last:border-none`}
                        onClick={() => addChips(item)}
                      >
                        {item.value}
                      </li>
                    )
                )
              ) : (
                <span className="w-full text-left py-1.5 px-3">no result</span>
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default MultiSelectSearch;
