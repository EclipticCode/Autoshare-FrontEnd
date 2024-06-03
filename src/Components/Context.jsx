import React, { useState, createContext } from "react";

// SearchConetxt
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {

  const [searchedCar, setSearchedCar] = useState("");

  return (
    <SearchContext.Provider value={{ searchedCar, setSearchedCar }}>
      {children}
    </SearchContext.Provider>
  );
};


// FilterContext
export const FilterContext = createContext();

export const FilterProvider = ({children}) => {

  const [filteredTags , setFilteredTags] = useState([]);

  return(
    <FilterContext.Provider value={{ filteredTags , setFilteredTags }}>
      {children}
    </FilterContext.Provider>
  )
}

// SelectedSortContext
export const SelectedSortContext = createContext();

export const SelectedSortProvider = ({children}) => {

  const [selectedSort , setSelectedSort] = useState("")

  return(
    <SelectedSortContext.Provider value = {{ selectedSort , setSelectedSort }}>
      {children}
    </SelectedSortContext.Provider>
  )
}


// BookedCarContext
export const BookedCarContext = createContext();

export const BookedCarProvider = ({children}) => {

  const [bookedCarIds , setBookedCarIds] = useState([])

  return(
    <BookedCarContext.Provider value={{ bookedCarIds , setBookedCarIds }}>
      {children}
    </BookedCarContext.Provider>
  )
}