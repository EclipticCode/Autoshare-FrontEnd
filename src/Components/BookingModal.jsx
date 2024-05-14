import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookingModal.css";

const BookingModal = () => {
  const [bookingDetails, setBookingDetails] = useState({
    startDate: "" ,
    endDate: "" ,
    deliveryTime: "" ,
  });

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

            <div className="modal-body ms-2 h5 bookingId">Booking ID : </div>
            <div className="ms-4 mb-4 h6">
              Select Start Date
              <input
                type="date"
                className="form-control ms-10"
                id="datepicker"
                onChange={handleStartDate}
              />
            </div>

            <div className="ms-4 h6">
              Select End Date
              <input
                type="date"
                className="form-control"
                id="datepicker"
                onChange={handleEndDate}
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
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Evening (4PM - 7PM)
              </label>
            </div>

            <div className="modal- ms-4 mt-4 mb-4">
              <button type="button" className="btn btn-success">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
