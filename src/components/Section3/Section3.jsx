import React from 'react'
import './Section3.css'
import { IoMdArrowDropright } from "react-icons/io";

const Section3 = () => {
    return (
        <div className='container-sec4'>
            <div className="text-sec-4">
                <img src="eternal.png" alt="" />
                <div className="line-text">
                <p className='line'></p>
                <h2>POWERING INDIA’S <br />
                    CHANGING LIFESTYLES</h2>
                <p className='line line2'></p>
                </div>
            </div>

            <div className="box-sec3">

                <div className="box1">
                    <a className='card' href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">
                        <img src="zomato.png" alt="" />
                        <h1>zomato</h1>
                        <p>Get the app now to start <br /> oedering your favorite dishesh !</p>
                        <span>Check it out <i><IoMdArrowDropright /></i>   </span>
                    </a>
                </div>


                <div className="box1">
                    <a className='card' href="https://blinkit.com/" target="_blank" rel="noopener noreferrer">
                        <img src="blinkit.png" alt="" />
                        <h1>blinkit</h1>
                        <p>Get the app now to start <br /> oedering your favorite dishesh !</p>
                        <span>Check it out <i><IoMdArrowDropright /></i>   </span>
                    </a>
                </div>


                <div className="box1">
                    <a className='card' href="https://www.district.in/" target="_blank" rel="noopener noreferrer">
                        <img src="district.png" alt="" />
                        <h1>district</h1>
                        <p>Get the app now to start <br /> oedering your favorite dishesh !</p>
                        <span>Check it out <i><IoMdArrowDropright /></i>   </span>
                    </a>
                </div>


                <div className="box1">
                    <a className='card' href="https://www.hyperpure.com/" target="_blank" rel="noopener noreferrer">
                        <img src="hyperpure.png" alt="" />
                        <h1>hyperpure</h1>
                        <p>Get the app now to start <br /> oedering your favorite dishesh !</p>
                        <span>Check it out <i><IoMdArrowDropright /></i>   </span>
                    </a>
                </div>

            </div>
        </div>

    )
}

export default Section3