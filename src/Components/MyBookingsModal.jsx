import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "./constants";
import "./MyBookingsModal.css";

const MyBookingsModal = () => {
  
  const [bookingResponse, setBookingResponse] = useState([]);

  const username = localStorage.getItem("login");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        if (username) {
          const response = await axios.get(`${apiUrl}/mybookings/${username}`, {
            headers: { auth: token },
          });
          if (response.data?.length) {
            const totalBookings = response?.data?.filter(
              (ele) => ele.isCancelled == false
            );
            setBookingResponse(totalBookings);
          }
        }
      } catch (error) {
        console.error("Error while fetching", error);
      }
    };
    fetchBookings();
  }, []);

  const handleCancelBooking = async (bookingId) => {
    try {
      const response = await axios.put(
        `${apiUrl}/cancelBooking/${username}/${bookingId}`,
        null,
        { headers: { auth: token } }
      );
      if (response.data) {
        if (response.data === "Booking cancelled successfully") {
          alert("Booking cancelled");
        }
      }
    } catch (error) {
      console.error("Error cancelling the booking", error);
    }
    window.location.reload();
  };

  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdropBookings"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content myBookingModal">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Your Bookings
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Booking ID</th>
                    <th scope="col">Journey Start Date</th>
                    <th scope="col">Journey End Date</th>
                    <th scope="col">Delivery Time</th>
                    <th scope="col">Cancel Booking</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingResponse.map((row) => (
                    <tr key={row.carId}>
                      <td>{row.carId}</td>
                      <td>{row.startDate}</td>
                      <td>{row.endDate}</td>
                      <td>{row.deliveryTime}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => {
                            handleCancelBooking(row._id);
                          }}
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsModal;
