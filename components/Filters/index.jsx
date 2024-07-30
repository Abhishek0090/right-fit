"use client";

import { useState } from "react";
import { filterTypes } from "@/constants";

export default function Filters() {
  const [selectedFilters, setSelectedFilters] = useState({});

  const applyFilter = (filterCategory, filterValue) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterCategory]: filterValue,
    }));
  };

  return (
    <div className="h-full px-10 py-10 flex flex-col gap-10">
      <h2 className="font-bold text-xl">Filters</h2>

      {filterTypes.map(({ title, types }, idx) => (
        <div className="flex flex-col gap-y-2 cursor-pointer" key={idx}>
          <h3 className="font-bold">{title}</h3>
          <span
            className={`font-bold ${
              !selectedFilters[title] ? "text-blue-600" : ""
            }`}
            onClick={() => applyFilter(title, null)}
          >
            All
          </span>
          {types.map((item) => (
            <span
              key={item}
              className={`${
                selectedFilters[title] === item ? "text-blue-600" : ""
              }`}
              onClick={() => applyFilter(title, item)}
            >
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
