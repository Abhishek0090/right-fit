"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filterData, setFilterData] = useState({
    color: "",
    material: "",
  });

  const applyFilter = (type, filterValue) => {
    setFilterData((prev) => ({ ...prev, [type]: filterValue }));
  };

  const removeFilter = () => {
    setFilterData({ color: "", material: "" });
  };

  const filterValue = useMemo(
    () => ({
      filterData,
      applyFilter,
      removeFilter,
    }),
    [filterData]
  );

  return (
    <FilterContext.Provider value={filterValue}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);

export default FilterProvider;
