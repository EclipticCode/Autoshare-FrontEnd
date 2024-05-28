import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "./constants";
import './MyBookingsModal.css'

const MyBookingsModal = () => {

 const [bookingResponse , setBookingResponse] = useState([])

 const username = localStorage.getItem("login")

 useEffect(() => {
 if(username){
  axios.get(`${apiUrl}/mybookings/${username}`)
    .then(response => {
    if(response.data?.length){
    const totalBookings = response?.data?.filter((ele)=> ele.isCancelled == false)
     setBookingResponse(totalBookings)
     }
    } , [])
   }
    })

const handleCancelBooking = (bookingId) => {
    axios.put(`${apiUrl}/cancelBooking/${username}/${bookingId}`)
    .then(response => {
        if(response.data){
            if(response.data === "Booking cancelled successfully"){
                alert("Booking cancelled")
            }
        }
    })
}
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
    </tr>
  </thead>
  <tbody>
    {bookingResponse.map((row) => (
      <tr key={row.carId}>
      <td>{row.carId}</td>
      <td>{row.startDate}</td>
      <td>{row.endDate}</td>
      <td>{row.deliveryTime}</td>
      <td><button type="button" className="btn btn-danger btn-sm" onClick={() => {handleCancelBooking(row._id)}}>Cancel</button></td>
    </tr>
   ))} 

 </tbody>
</table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsModal;
