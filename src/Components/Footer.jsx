import React from 'react'
import './Footer.css'
import { metropolitanCities } from './constants'


const Footer = () => {
    return (
        <div className='container-fluid cardFooter'>
            <div className="row">
                <div className="col-md-4 qrImage">
                <img src='./public/images.png'/>
                <p className='scanQR'>Scan this QR code to download the app !</p>
                </div>
                <div className="col-md-8 citiesList ">
                   <div className="row">
                   <h5 className='heading'>We are also available in the following Cities</h5>
                   <ul className='cities'>{metropolitanCities.map((city , index) =><li key={index}>Self Drive Cars in {city}</li>)}</ul>
                   </div>
                </div>
            </div>
            <hr/>

        </div>
    )
}

export default Footer

