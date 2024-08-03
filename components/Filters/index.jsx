"use client";

import { useFilter } from "@/provider/FilterProvider";

export default function Filters({ colors, materials }) {
  const { filterData, applyFilter, removeFilter } = useFilter();

  return (
    <div className="h-full px-4 py-6 flex flex-col gap-6 md:px-10 md:py-10 md:gap-10">
      <h2 className="font-bold text-lg md:text-xl">Filters</h2>

      {(filterData.color || filterData.material) && (
        <div className="flex flex-col gap-2 items-start md:flex-row md:items-center md:gap-4">
          <span className="font-bold">Applied filter: </span>
          <button
            className="text-start font-bold border border-gray-500 px-1 sm:px-3 py-1 rounded-full md:px-4 md:py-1"
            onClick={() => removeFilter()}
          >
            {filterData.color || filterData.material} X
          </button>
        </div>
      )}

      <div className="flex flex-col gap-y-4 cursor-pointer">
        <h3 className="font-bold text-base md:text-lg">Colors</h3>
        <span
          className={`${
            !filterData.color ? "text-black font-bold" : ""
          } text-sm md:text-base`}
          onClick={() => applyFilter("color", "")}
        >
          All
        </span>
        {colors.map(({ id, name }) => (
          <span
            key={id}
            className={`${
              filterData.color === name ? "text-blue-600 font-bold" : ""
            } hover:font-bold text-sm md:text-base`}
            onClick={() => applyFilter("color", name)}
          >
            {name}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-y-4 cursor-pointer">
        <h3 className="font-bold text-base md:text-lg">Materials</h3>
        <span
          className={`${
            !filterData.material ? "text-black font-bold" : ""
          } text-sm md:text-base hover:font-bold`}
          onClick={() => applyFilter("material", "")}
        >
          All
        </span>
        {materials.map(({ id, name }) => (
          <span
            key={id}
            className={`${
              filterData.material === name ? "text-blue-600 font-bold" : ""
            } hover:font-bold text-sm md:text-base`}
            onClick={() => applyFilter("material", name)}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
