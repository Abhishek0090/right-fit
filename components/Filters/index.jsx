"use client";

import { filterTypes } from "@/constants";
import { useFilter } from "@/provider/FilterProvider";

export default function Filters() {
  const filterData = useFilter();

  console.log(filterData, "FILTER");

  const applyFilter = (filterValue) => {
    // setFilterData(filterValue);
  };

  return (
    <div className="h-full px-10 py-10 flex flex-col gap-10">
      <h2 className="font-bold text-xl">Filters</h2>

      <div className="flex gap-4 items-center">
        <span className="font-bold">Applied</span>
        <button className="text-start">Cotton X</button>
      </div>

      {filterTypes.map(({ title, types }, idx) => (
        <div className="flex flex-col gap-y-2 cursor-pointer" key={idx}>
          <h3 className="font-bold">{title}</h3>
          <span
            className={`font-bold ${!filterData ? "text-blue-600" : ""}`}
            onClick={() => applyFilter(title, null)}
          >
            All
          </span>
          {types.map((item) => (
            <span
              key={item}
              className={`${filterData === item ? "text-blue-600" : ""}`}
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
