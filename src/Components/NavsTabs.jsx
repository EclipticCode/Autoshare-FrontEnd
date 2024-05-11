import React from "react";
import "./NavsTabs.css";

const NavsTabs = () => {
  return (
    <div className="navsTabs">
      <ul className="nav nav-underline justify-content-center">
        <li className="nav-item me-4">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link cars" href="#">
            Blogs
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
  );
};

export default NavsTabs;
