"use client";

import { useFilter } from "@/provider/FilterProvider";

export default function Filters({ colors, materials }) {
  const { filterData, applyFilter, removeFilter } = useFilter();

  return (
    <div className="h-full px-10 py-10 flex flex-col gap-10">
      <h2 className="font-bold text-xl">Filters</h2>

      {(filterData.color || filterData.material) && (
        <div className="flex gap-4 items-center">
          <span className="font-bold">Applied filter : </span>
          <button
            className="text-start font-bold"
            onClick={() => removeFilter()}
          >
            {filterData.color || filterData.material} X
          </button>
        </div>
      )}

      <div className="flex flex-col gap-y-2 cursor-pointer">
        <h3 className="font-bold">{"Colors"}</h3>
        <span
          className={`font-bold ${
            !filterData.color ? "text-black font-bold" : ""
          }`}
          onClick={() => applyFilter("color", "")}
        >
          All
        </span>
        {colors.map(({ id, name }) => (
          <span
            key={id}
            className={`${
              filterData.color === name ? "text-blue-600 font-bold" : ""
            } hover:font-bold`}
            onClick={() => applyFilter("color", name)}
          >
            {name}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-y-2 cursor-pointer">
        <h3 className="font-bold">{"Materials"}</h3>
        <span
          className={`font-bold ${
            !filterData.material ? "text-black font-bold" : ""
          } hover:font-bold`}
          onClick={() => applyFilter("material", "")}
        >
          All
        </span>
        {materials.map(({ id, name }) => (
          <span
            key={id}
            className={`${
              filterData.material === name ? "text-blue-600 font-bold" : ""
            } hover:font-bold`}
            onClick={() => applyFilter("material", name)}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
