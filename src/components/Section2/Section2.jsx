import React from 'react'
import './Section2.css'

const Section2 = () => {
  return (
    <div className='container-sec2'>
      <div className="text-sec2">
        <h1>What’s waiting for you <br />
          on the app?</h1>
        <p>Our app is packed with features that <br />
          enable you to experience food <br />
          delivery like never before</p>
      </div>
      <div className="img-sec2">
        <div className="img-left">
          <div className="box-sec2" id='box1'>
            <img src="healthy.png" alt="" />
            <span>Healthy</span>
          </div>
          <div className="box-sec2" id='box2'>
            <img src="onn.png" alt="" />
            <span>Veg Mode</span>
          </div>
          <div className="box-sec2" id='box3'>
            <img src="food2.png" alt="" />
            <span>Plan a Party</span>
          </div>
          <div className="box-sec2" id='box4'>
            <img src="gift.png" alt="" />
            <span>Gift Card</span>
          </div>

        </div>
        <div className="img-mid">
          <img src="mobile.png" alt="" />
          <div className="box-mid">
            <img src="calinder.png" alt="" />
            <span>Schedule <br /> your order</span>
          </div>
        </div>
        <div className="img-right">
          <div className="box-sec2" id='box5'>
            <img src="luch.png" alt="" />
            <span>Gourment</span>
          </div>
          <div className="box-sec2" id='box6'>
            <img src="off.png" alt="" />
            <span>Offers</span>
          </div>
          <div className="box-sec2" id='box7'>
            <img src="train.png" alt="" />
            <span>Food on Train</span>
          </div>
          <div className="box-sec2" id='box8'>
            <img src="food1.png" alt="" />
            <span>Collections</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2