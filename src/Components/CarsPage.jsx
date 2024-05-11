import React from "react";
import CarsList from "./CarsList";
import "./CarsPage.css";
import Filter from "./Filter";

const CarsPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <Filter/>
          </div>
          <div className="col-sm-10">
            <div className="row">
              <div className="col">
                <nav
                  style={{ "--bs-breadcrumb-divider": "'>'" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item" aria-current="page">
                      Library
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Library
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9 h2">
                Self-Drive Car Rentals in Chennai
              </div>
              <div className="col-md-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="selected">Sort</option>
                  <option value="1">Ratings</option>
                  <option value="2">Price High to Low</option>
                  <option value="3">Price Low to High</option>
                </select>
              </div>
            </div>
             <CarsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
