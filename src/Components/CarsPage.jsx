import React, { useState, useContext } from "react";
import CarsList from "./CarsList";
import "./CarsPage.css";
import Filter from "./Filter";
import { useParams } from "react-router-dom";
import { FilterProvider, SelectedSortContext } from "./Context";

const CarsPage = () => {
  const { location = "Delhi" } = useParams();
  const { setSelectedSort } = useContext(SelectedSortContext);

  return (
    <FilterProvider>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-lg-2">
              <Filter />
            </div>
            <div className="col-sm-8 col-lg-10">
              <div className="row">
                <div className="col-md-9 h2 selfdrive">
                  Self-Drive Car Rentals in {location}
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setSelectedSort(e.target.value)}
                  >
                    <option value="selected">Sort</option>
                    <option value="Ratings">Ratings</option>
                    <option value="Ratings High to Low">
                      Ratings High to Low
                    </option>
                    <option value="Ratings Low to High">
                      Ratings Low to High
                    </option>
                  </select>
                </div>
              </div>
              <CarsList />
            </div>
          </div>
        </div>
      </div>
    </FilterProvider>
  );
};

export default CarsPage;
