import React from "react";
import "./CardList.css";

const CarsList = () => {
  return (
    <div className="container">
      <div className="row">
         {carDetails.map((car , index) => {

            const {img ,title, ratings ,text , trips , pricePerHour , fees} = car
            return (
                <div className="col-sm-12 col-md-6 col-lg-4 justify-content-center margin" key={index}>
                <div className="card " style={{ width: "19rem" }}>
                  <img
                    src={img}
                    className="card-img-top img-fluid"
                    alt="car image"
                    style={{ height: "200px " }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="Ratings">{ratings}</p>
                    <p className="card-text">{text}</p>
                    <p>
                      <span>
                        <i className="bi bi-car-front"></i>
                      </span>
                      {trips}
                    </p>
                    <h6>{pricePerHour}</h6>
                    <p className="fees">{fees}</p>
                    <hr />
                    <h5>
                      <span className="badge">
                        <span>
                          <i className="bi bi-tags"></i>
                        </span>
                        FASTAG
                      </span>
                      <span className="bookNow">
                        {" "}
                        <button type="button" className="btn btn-success">
                          Book Now
                        </button>
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            )
         }            
         )}
      </div>
    </div>
  );
};

export default CarsList;


const carDetails = [{
    img : "https://zoomcar-assets.zoomcar.com/269590/HostCarImage/host_car_image_26959088d5562c-92e3-47a4-9b4b-9812a1133443.jpg20230522-39-9qq08r" ,
    title :" Renault Triber 2021" , 
    ratings : 4.7 ,
    text : "Automatic | Petrol | 7 Seats" ,
    trips : " 63 Trips",
    pricePerHour : "₹199/hr" ,
    fees : "₹5,572 excluding fees " ,
    id : "car-id"
}
]