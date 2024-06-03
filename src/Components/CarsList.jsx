import React, { useContext, useEffect, useState } from "react";
import "./CarsList.css";
import BookingModal from "./BookingModal";
import { useParams } from "react-router-dom";
import { apiUrl, carDetails } from "./constants";
import AlertModal from "./AlertModal";
import axios from "axios";
import {
  BookedCarContext,
  SearchContext,
  FilterContext,
  SelectedSortContext,
} from "./Context";

const CarsList = () => {
  const { filteredTags } = useContext(FilterContext);
  const { searchedCar } = useContext(SearchContext);
  const { selectedSort } = useContext(SelectedSortContext);
  const { bookedCarIds, setBookedCarIds } = useContext(BookedCarContext);

  const [selectedCarId, setSelectedCarId] = useState(null);

  const { location } = useParams();
  const urlLocation = location ? location.toLowerCase() : "delhi";

  let carsData = carDetails[urlLocation] || [];

  const username = localStorage.getItem("login");
  const token = localStorage.getItem("token");

  // filtered Tags
  carsData = carsData.filter((eachCar) => {
    if (filteredTags.length === 0) {
      return true;
    } else {
      for (let tag of filteredTags) {
        if (eachCar.tags.includes(tag)) {
          return true;
        }
      }
      return false;
    }
  });

  //  sort logic
  const callback = (a, b) => {
    const firstCar = Number(a.ratings);
    const secondCar = Number(b.ratings);

    if (firstCar > secondCar) {
      return -1;
    }
    if (firstCar < secondCar) {
      return 1;
    }
  };
  const callbackRatingHL = (a, b) => {
    const firstCar = Number(a.ratings);
    const secondCar = Number(b.ratings);

    if (firstCar > secondCar) {
      return -1;
    }
    return 1;
  };
  const callbackRatingLH = (a, b) => {
    const firstCar = Number(a.ratings);
    const secondCar = Number(b.ratings);

    if (firstCar > secondCar) {
      return 1;
    }
    return -1;
  };
  if (selectedSort?.length) {
    if (selectedSort === "Ratings") {
      carsData.sort((a, b) => callback(a, b));
    }
    if (selectedSort === "Ratings High to Low") {
      carsData.sort((a, b) => callbackRatingHL(a, b));
    }
    if (selectedSort === "Ratings Low to High") {
      carsData.sort((a, b) => callbackRatingLH(a, b));
    }
  }

  // filter Searched car
  if (searchedCar?.length) {
    carsData = carsData.filter((eachCar) => {
      if (eachCar.carTitle.toLowerCase().includes(searchedCar.toLowerCase())) {
        return true;
      }
      return false;
    });
  }

  useEffect(() => {
    const fetchBookedCarIds = async () => {
      try {
        if (username) {
          const response = await axios.get(`${apiUrl}/bookedCars`, {
            headers: { auth: token },
          });
          setBookedCarIds(response.data);
        }
      } catch (error) {
        console.error("Error fetching booked car IDs", error);
      }
    };
    fetchBookedCarIds();
  }, [username]);

  const handleBookNow = async (id) => {
    setSelectedCarId(id);
  };


  return (
    <div className="container">
      <div className="row">
        {carsData.map((car, index) => {
          const {
            id,
            img,
            carTitle,
            ratings,
            tags,
            trips,
            pricePerHour,
            fees,
          } = car;
          const isBooked = bookedCarIds.includes(id);
          return (
            <div
              className="col-sm-12 col-md-8 col-lg-6 col-xl-4 justify-content-center margin"
              key={index}
            >
              <div className="card " style={{ width: "19rem" }}>
                <img
                  src={img}
                  className="card-img-top img-fluid"
                  alt="car image"
                  style={{ height: "200px " }}
                />
                <div className="card-body">
                  <h5 className="card-title">{carTitle}</h5>
                  <p className="Ratings small">
                    {ratings}{" "}
                    <span>
                      <i
                        className="fa-solid fa-star small ms-1"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </span>
                  </p>
                  <p className="card-text">{tags.map((e) => `${e} | `)}</p>
                  <p>
                    <span>
                      <i className="bi bi-car-front"></i>
                    </span>
                    {trips}
                  </p>
                  <h6>{pricePerHour}</h6>
                  <p className="fees">{fees}</p>
                  <hr />
                  <div>
                    <span className="badge" style={{ color: "#ff4242" }}>
                      <span>
                        <i className="bi bi-tags me-1"></i>
                      </span>
                      FASTAG
                    </span>
                    <span className="bookNow">
                      {" "}
                      {username ? (
                        <button
                          type="button"
                          className="btn btn-success bookNowButton"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdropBookNow"
                          onClick={() => handleBookNow(id)}
                          disabled={isBooked}
                        >
                          {isBooked ? "Car Booked" : "Book Now"}
                        </button>
                      ) : (
                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdropAlert"
                          className="btn btn-success bookNowButton"
                        >
                          Book Now
                        </button>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <BookingModal id={selectedCarId} />
        <AlertModal />
      </div>
    </div>
  );
};

export default CarsList;
