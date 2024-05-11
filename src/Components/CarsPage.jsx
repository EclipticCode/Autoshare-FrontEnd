import React from "react";
import CarsList from "./CarsList";
import "./CarsPage.css";
import Filter from "./Filter";
import {useParams} from "react-router-dom"
import { ParamsProvider } from "./Context";

const CarsPage = () => {
    const {location = "Delhi"} = useParams();
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-2">
            <Filter/>
          </div>
          <div className="col-sm-8 col-lg-10">
            <div className="row">
              <div className="col">
                <nav
                  style={{ "--bs-breadcrumb-divider": "'>'" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">Location</li>
                    <li className="breadcrumb-item" aria-current="page">
                      {location} City
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                    {location}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9 h2">
                Self-Drive Car Rentals in {location} 
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
             <ParamsProvider>
             <CarsList />
             </ParamsProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
