import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='container-fluid cardFooter'>
            <div className="row">
                <div className="col qrImage">
                <img src='./public/images.png'/>
                <p className='scanQR'>Scan this QR code to download the app !</p>
                </div>
                {/* <div className="col downloadApp">
                   <div> Click here to download app</div>
                </div> */}
            </div>
            <hr/>

        </div>
    )
}

export default Footer