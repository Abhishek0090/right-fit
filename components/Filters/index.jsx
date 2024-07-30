"use client";

import { filterTypes } from "@/constants";

export default function Filters() {
  const applyFilter = () => {};
  return (
    <div className="h-full px-10 py-10 flex flex-col gap-10">
      <h2 className="font-bold text-xl">Filter</h2>

      {filterTypes.map(({ title, types }, idx) => (
        <div className="flex flex-col gap-y-2 cursor-pointer" key={idx}>
          <h3>{title}</h3>
          <span className="font-bold">All</span>
          {types.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
