import React from "react";
import "./NavsTabs.css";
import { Link } from "react-router-dom";

const NavsTabs = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navsTabs">
        <div className="container-fluid justify-content-center">
          <ul className="nav nav-underline align-items-center">
            <li className="nav-item me-4">
              <Link className="nav-link active" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link cars mt-2" to="#">
                EV Zone{" "}
                <div
                  className="small"
                  style={{ fontSize: "10px", color: "#028a72" }}
                >
                  (Launching soon)
                </div>
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link about" to="/Aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link contact" to="/Contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavsTabs;
