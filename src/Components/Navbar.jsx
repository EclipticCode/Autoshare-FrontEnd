import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";

const Navbar = () => {
  const [openType, setOpenType] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setOpenLogin(true);
  };

  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand autoshare" href="#" style={{color : "#028a72"}}>
            AutoShare
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(event) => {
                    const selectedLocation = event.target.value;
                    selectedLocation?.length &&
                      navigate("/" + selectedLocation);
                  }}
                >
                  <option defaultValue>Select Location</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </li>
            </ul>
            <div className="d-flex" role="search">
            <input
              className="form-control me-4"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{"width":"500px"}}
            />
            <button
              className="btn btn-outline-success me-2"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Login
            </button>
            <LoginModal/>
            <button className="btn btn-outline-success" type="button" data-bs-toggle="modal"
              data-bs-target="#staticBackdropRegister">
              Register
            </button>
            </div>
            <RegistrationModal/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
