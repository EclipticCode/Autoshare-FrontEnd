import React from 'react'
import './Filter.css'

const Filter = ({filteredTags , setFilteredTags}) => {

  const handleFilterChange = (event) => {

   if(event.target.checked){
    setFilteredTags([
      ...filteredTags , 
      event.target.value
    ])
   }
   else{
    const filteredItems = filteredTags.filter((filter) => filter!= event.target.value);
    setFilteredTags(filteredItems)
   }
  }
  return (
    <div>
        <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Transmission
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                  {transmissionFilter.map((transmission , index) => (
                          <div className="form-check" key={index}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={transmission}
                            id="flexCheckDefault"
                            onChange={handleFilterChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                           {transmission}
                          </label>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Seats
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                  {seatsFilter.map((seats , index) => (
                          <div className="form-check" key={index}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={seats}
                            id="flexCheckDefault"
                            onChange={handleFilterChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            {seats}
                          </label>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Fuel Type
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                  {fuelFilter.map((fuel , index) => (
                          <div className="form-check" key={index}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={fuel}
                            id="flexCheckDefault"
                            onChange={handleFilterChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            {fuel}
                          </label>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Filter


const ratingsFilter = ['5' , '4.7' , '3-4 Stars' , 'All' ]
const transmissionFilter = ['Manual' , 'Automatic' , 'Hybrid']
const seatsFilter = [ '5 Seats' , '6 Seats' , '7 Seats']
const fuelFilter = ['Petrol' , 'Diesel']