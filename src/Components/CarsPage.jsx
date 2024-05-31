import React, { useState } from "react";
import CarsList from "./CarsList";
import "./CarsPage.css";
import Filter from "./Filter";
import {useParams} from "react-router-dom";


const CarsPage = () => {
    const [filteredTags , setFilteredTags] = useState([])
    const [selectedSort , setSelectedSort] = useState("")

    const {location = "Delhi"} = useParams();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-lg-2">
            <Filter filteredTags={filteredTags} setFilteredTags={setFilteredTags} />
          </div>
          <div className="col-sm-8 col-lg-10">
            {/* <div className="row">
              <div className="col">
                <nav
                  style={{ "--bs-breadcrumb-divider": "'>'" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item location">Location</li>
                    <li className="breadcrumb-item location" aria-current="page">
                      {location} City
                    </li>
                    <li className="breadcrumb-item mainLocation" aria-current="page">
                    {location}
                    </li>
                  </ol>
                </nav>
              </div>
            </div> */}
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
                  <option value="Ratings High to Low">Ratings High to Low</option>
                  <option value="Ratings Low to High">Ratings Low to High</option>
                </select>
              </div>
            </div>
                 <CarsList filteredTags={filteredTags} selectedSort = {selectedSort}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
