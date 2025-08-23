import React from "react";
import { FaStore, FaMapMarkerAlt, FaShoppingBag } from "react-icons/fa"; 
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="conatiner-hero">
    <section className="hero">
      <div className="hero__text">
        <h1>
          Better food for <br /> more people
        </h1>
        <p>
          For over a decade, we’ve enabled our <br /> customers to discover new tastes, <br />
          delivered right to their doorstep.
        </p>
      </div>

      <img src="burger.png" alt="burger" className="burger" />
      <img src="momos.png" alt="momos" className="momos" />
      <img src="pizza.png" alt="pizza" className="pizza" />
      <img src="leaf.png" alt="leaf" className="leaf" />
      <img src="tomato.png" alt="tomato" className="tomato-right" />
      <img src="tomato.png" alt="tomato" className="tomato-left" />
    </section>

    <div className="boxes-container">
            <div className="boxes">
                <div className=" box">
                    <h3>3,00,000+</h3>
                    <p>restaurants</p>
                    <img src="home2.png" alt="" />
                </div>
                <div className=" box ">
                    <h3>800+</h3>
                    <p>cities</p>
                    <img src="location2.png" alt="" />
                </div>
                <div className=" box">
                    <h3>3 billion+</h3>
                    <p>orders delivered</p>
                    <img className="notes" src="notes2.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default HeroSection;
