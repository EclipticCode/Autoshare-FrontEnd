import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchedCar, setSearchedCar] = useState("");

  return (
    <SearchContext.Provider value={{ searchedCar, setSearchedCar }}>
      {children}
    </SearchContext.Provider>
  );
};
