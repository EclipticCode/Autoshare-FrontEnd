import React from "react";

const AlertModal = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdropAlert"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Login required
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Please login to make a booking</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
