import React from "react";
import "./NavsTabs.css";

const NavsTabs = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="navsTabs">
      <ul className="nav nav-underline justify-content-center">
        <li className="nav-item me-4">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link cars" href="#">
            EV Zone
          </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link about" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <p className="nav-link contact" href="#">
            Contact Us
          </p>
        </li>
      </ul>
    </div>
    </div>
    </div>
  );
};

export default NavsTabs;
