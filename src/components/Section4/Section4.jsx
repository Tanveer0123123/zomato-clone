import React from 'react'
import './Section4.css'

const Section4 = () => {
    return (
        <div className='section4-container'>
            <div className="left-text">
                <h1>Download the app now!</h1>
                <p>Experience seamless online ordering <br />
                    only on the Zomato app</p>
                <img src="gp.png" alt="" />
                <img src="ios.png" alt="" />
            </div>
            <div className="right-text">
                <img src="mobile.png" alt="" srcset="" />
                <p>Scan the QR code to <br /> download the app
                </p>
                <img src="scanner.png" alt="" />
            </div>
        </div>
    )
}

export default Section4