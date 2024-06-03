import React from 'react';
import './Aboutus.css'; 
import ceo from '../assets/CEO.jpg';
import cto from '../assets/CTO.jpg';
import cfo from '../assets/CFO.jpg';

const AboutUs = () => {
    return (
        <div className="aboutus-container mt-5">
            <div className="aboutus-card">
                <div className="aboutus-card-body">
                    <h1 className="aboutus-card-title text-center">About Us</h1>
                    <p className="aboutus-card-text">Welcome to AutoShare! We are a car rental service dedicated to providing you with the best cars at the best prices.</p>
                    <p className="aboutus-card-text">Our mission is to make car rentals easy and affordable for everyone. Whether you need a car for a day, a week, or a month, we have the perfect vehicle for you.</p>
                    <p className="aboutus-card-text">Thank you for choosing AutoShare. We look forward to serving you!</p>
                    <div className="aboutus-team-section">
                        <h2 className="aboutus-team-title">Our Team</h2>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4 aboutus-team-member">
                                <img src={ceo} alt="Member 1" className="aboutus-team-photo" />
                                <h3 className="aboutus-team-name">Ritesh Agarwal</h3>
                                <p className="aboutus-team-role">CEO</p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 aboutus-team-member">
                                <img src={cto} alt="Member 2" className="aboutus-team-photo" />
                                <h3 className="aboutus-team-name">Vedang Patel</h3>
                                <p className="aboutus-team-role">CTO</p>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 aboutus-team-member">
                                <img src={cfo} alt="Member 3" className="aboutus-team-photo" />
                                <h3 className="aboutus-team-name">Rohin Samtaney</h3>
                                <p className="aboutus-team-role">CFO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
