import React from "react";
import "./Footer.css";
import { metropolitanCities } from "./constants";
import img from "../assets/images.png";

const Footer = () => {
  return (
    <div>
      <div className="cardFooter">
        <div className="card-body">
          <p className="card-title text-center">
            Copyright © Your Website 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
