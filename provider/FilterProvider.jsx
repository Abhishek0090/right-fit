"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filterData, setFilterData] = useState("");

  const filterValue = useMemo(
    () => ({
      filterData,
      setFilterData,
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
