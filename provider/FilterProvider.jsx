import React, { createContext, useContext, useMemo, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [filterData, setFilterData_] = useState({
    folio_number: "",
    fund_type: "",
    scheme_name: "",
    scheme_code: "",
    market_value_sort: "",
    invested_amount_sort: "",
    details: "",
    annual_return: "",
    age_of_fund: "",
    exit_load: "",
    risk_level: "",
  });

  const [portFolioFilter, setPortFolioFilter_] = useState({
    folio_name: "",
    zero_balance: "N",
    scheme_name: "",
    no_current_balance: false,
    fund_type: [],
  });

  const setFilterData = (data) => {
    setFilterData_(data);
  };

  const setPortFolioFilter = (data) => {
    setPortFolioFilter_(data);
  };

  const contextValue = useMemo(
    () => ({
      filterData,
      setFilterData,
      portFolioFilter,
      setPortFolioFilter,
    }),
    [filterData, portFolioFilter]
  );

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);

export default FilterProvider;
