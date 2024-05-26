import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookingModal.css";
import axios from "axios";

const BookingModal = ({ id }) => {
  const username = localStorage.getItem("login") || "";

  const [bookingDetails, setBookingDetails] = useState({
    startDate: "",
    endDate: "",
    deliveryTime: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleStartDate = (event) => {
    setBookingDetails({
      ...bookingDetails,
      startDate: event.target.value,
    });
  };
  const handleEndDate = (event) => {
    setBookingDetails({
      ...bookingDetails,
      endDate: event.target.value,
    });
  };
  const handleTimeChange = (event) => {
    setBookingDetails({
      ...bookingDetails,
      deliveryTime: event.target.value,
    });
  };

  const resetButton = () => {
    setBookingDetails({
      startDate: "",
      endDate: "",
      deliveryTime: "",
    });
  };
  useEffect(() => {
    const { startDate, endDate, deliveryTime } = bookingDetails;
    setIsFormValid(startDate && endDate && deliveryTime);
  }, [bookingDetails]);

  const handleSubmit = async () => {
    const { startDate, endDate, deliveryTime } = bookingDetails;

    if (
      startDate?.length &&
      endDate?.length &&
      deliveryTime?.length &&
      username?.length &&
      id?.length
    ) {
      const apiResponse = await axios.post(
        `http://localhost:4000/createBooking`,
        {
          username,
          id,
          startDate,
          endDate,
          deliveryTime,
        }
      );

      if (apiResponse.data?._id) {
        alert("Booking Confirmed");
      }
    }
  };
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdropBookNow"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 yourBookings"
                id="exampleModalLabel"
              >
                Select Slot Date and Time
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body ms-2 h5 bookingId">
              Booking ID :{" "}
              <span className="small" style={{ color: "black" }}>
                {id}
              </span>{" "}
            </div>

            <div className="ms-4 mb-4 h6">
              Select Start Date
              <input
                type="date"
                className="form-control mt-2"
                id="datepicker"
                onChange={handleStartDate}
                value={bookingDetails.startDate}
              />
            </div>

            <div className="ms-4 h6 position-relative">
              Select End Date
              <input
                type="date"
                className="form-control mt-2"
                id="datepicker validationDefault02"
                onChange={handleEndDate}
                value={bookingDetails.endDate}
              />
            </div>

            <div className="ms-4 mt-4 h6">Select Delivery Time</div>

            <div className="form-check ms-4 mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="Morning(9AM - 12PM)"
                onChange={handleTimeChange}
                checked={bookingDetails.deliveryTime === "Morning(9AM - 12PM)"}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Morning (9AM - 12PM)
              </label>
            </div>
            <div className="form-check ms-4 mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="Afternoon (12PM - 4PM)"
                onChange={handleTimeChange}
                checked={
                  bookingDetails.deliveryTime === "Afternoon (12PM - 4PM)"
                }
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Afternoon (12PM - 4PM)
              </label>
            </div>

            <div className="form-check ms-4">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                value="Evening (4PM - 7PM)"
                onChange={handleTimeChange}
                checked={bookingDetails.deliveryTime === "Evening (4PM - 7PM)"}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Evening (4PM - 7PM)
              </label>
            </div>

            <div className="modal- ms-4 mt-4 mb-4">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleSubmit()}
                disabled={!isFormValid}
              >
                Make a Booking
              </button>
              <button
                type="button"
                className="btn btn-danger ms-4"
                onClick={() => resetButton()}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
