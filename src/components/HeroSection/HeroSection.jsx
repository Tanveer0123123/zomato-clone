import React from "react";
import { FaStore, FaMapMarkerAlt, FaShoppingBag } from "react-icons/fa"; 
import "./HeroSection.css";

const HeroSection = () => {
  return (
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

  );
};

export default HeroSection;
