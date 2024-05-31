import React from 'react';
import './Contactus.css'

const Contactus = () => {
  return (
    <div>
          <div className="contactus-container mt-5">
            <div className="contactus-card">
                <div className="contactus-card-body">
                    <h1 className="contactus-card-title text-center">Contact Us</h1>
                    <p className="contactus-card-text">We are here to help you with any questions or concerns you may have. Reach out to us and we will get back to you as soon as possible.</p>
                    
                    <div className="contactus-section">
                        <h2 className="contactus-section-title">Our Office</h2>
                        <p className="contactus-section-text"> 56/78, 14thA Cross, 2nd Main, Garden Layout, JP Nagar 7th Phase, Noida - 201301</p>
                    </div>

                    <div className="contactus-section">
                        <h2 className="contactus-section-title">Phone</h2>
                        <p className="contactus-section-text">+91 985-456-7890</p>
                    </div>

                    <div className="contactus-section">
                        <h2 className="contactus-section-title">Email</h2>
                        <p className="contactus-section-text">support@autoshare.com</p>
                    </div>

                    <div className="contactus-section">
                        <h2 className="contactus-section-title">Business Hours</h2>
                        <p className="contactus-section-text">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="contactus-section-text">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="contactus-section-text">Sunday: Closed</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactus